import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TrackedObjectController } from "../trackedObject.controller";
import { TrackedObjectService } from "../trackedObject.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  relX: 42.42,
  relY: 42.42,
  rotRelZ: 42.42,
  egoWidth: 42.42,
  objClose: "true",
  absDistClose: "true",
  objectLength: 42.42,
  objectWidth: 42.42,
  angleObj: 42.42,
  angleEgo: 42.42,
  egoLength: 42.42,
  egoVelX: 42.42,
  egoVehAccX: 42.42,
  objectVelX: 42.42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  relX: 42.42,
  relY: 42.42,
  rotRelZ: 42.42,
  egoWidth: 42.42,
  objClose: "true",
  absDistClose: "true",
  objectLength: 42.42,
  objectWidth: 42.42,
  angleObj: 42.42,
  angleEgo: 42.42,
  egoLength: 42.42,
  egoVelX: 42.42,
  egoVehAccX: 42.42,
  objectVelX: 42.42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    relX: 42.42,
    relY: 42.42,
    rotRelZ: 42.42,
    egoWidth: 42.42,
    objClose: "true",
    absDistClose: "true",
    objectLength: 42.42,
    objectWidth: 42.42,
    angleObj: 42.42,
    angleEgo: 42.42,
    egoLength: 42.42,
    egoVelX: 42.42,
    egoVehAccX: 42.42,
    objectVelX: 42.42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  relX: 42.42,
  relY: 42.42,
  rotRelZ: 42.42,
  egoWidth: 42.42,
  objClose: "true",
  absDistClose: "true",
  objectLength: 42.42,
  objectWidth: 42.42,
  angleObj: 42.42,
  angleEgo: 42.42,
  egoLength: 42.42,
  egoVelX: 42.42,
  egoVehAccX: 42.42,
  objectVelX: 42.42,
};

const service = {
  createTrackedObject() {
    return CREATE_RESULT;
  },
  trackedObjects: () => FIND_MANY_RESULT,
  trackedObject: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("TrackedObject", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TrackedObjectService,
          useValue: service,
        },
      ],
      controllers: [TrackedObjectController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /trackedObjects", async () => {
    await request(app.getHttpServer())
      .post("/trackedObjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /trackedObjects", async () => {
    await request(app.getHttpServer())
      .get("/trackedObjects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /trackedObjects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trackedObjects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /trackedObjects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trackedObjects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /trackedObjects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/trackedObjects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/trackedObjects")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
