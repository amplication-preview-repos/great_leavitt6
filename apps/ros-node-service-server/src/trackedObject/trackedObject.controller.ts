import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrackedObjectService } from "./trackedObject.service";
import { TrackedObjectControllerBase } from "./base/trackedObject.controller.base";

@swagger.ApiTags("trackedObjects")
@common.Controller("trackedObjects")
export class TrackedObjectController extends TrackedObjectControllerBase {
  constructor(protected readonly service: TrackedObjectService) {
    super(service);
  }
}
