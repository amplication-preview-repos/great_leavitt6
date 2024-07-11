import * as graphql from "@nestjs/graphql";
import { VehicleStateResolverBase } from "./base/vehicleState.resolver.base";
import { VehicleState } from "./base/VehicleState";
import { VehicleStateService } from "./vehicleState.service";

@graphql.Resolver(() => VehicleState)
export class VehicleStateResolver extends VehicleStateResolverBase {
  constructor(protected readonly service: VehicleStateService) {
    super(service);
  }
}
