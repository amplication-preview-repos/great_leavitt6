import { VehicleStateWhereUniqueInput } from "./VehicleStateWhereUniqueInput";
import { VehicleStateUpdateInput } from "./VehicleStateUpdateInput";

export type UpdateVehicleStateArgs = {
  where: VehicleStateWhereUniqueInput;
  data: VehicleStateUpdateInput;
};
