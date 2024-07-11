import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VehicleStateService } from "./vehicleState.service";
import { VehicleStateControllerBase } from "./base/vehicleState.controller.base";

@swagger.ApiTags("vehicleStates")
@common.Controller("vehicleStates")
export class VehicleStateController extends VehicleStateControllerBase {
  constructor(protected readonly service: VehicleStateService) {
    super(service);
  }
}
