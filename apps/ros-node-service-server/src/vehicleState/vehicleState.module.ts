import { Module } from "@nestjs/common";
import { VehicleStateModuleBase } from "./base/vehicleState.module.base";
import { VehicleStateService } from "./vehicleState.service";
import { VehicleStateController } from "./vehicleState.controller";
import { VehicleStateResolver } from "./vehicleState.resolver";

@Module({
  imports: [VehicleStateModuleBase],
  controllers: [VehicleStateController],
  providers: [VehicleStateService, VehicleStateResolver],
  exports: [VehicleStateService],
})
export class VehicleStateModule {}
