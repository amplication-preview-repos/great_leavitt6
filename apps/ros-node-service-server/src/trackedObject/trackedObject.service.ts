import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackedObjectServiceBase } from "./base/trackedObject.service.base";

@Injectable()
export class TrackedObjectService extends TrackedObjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
