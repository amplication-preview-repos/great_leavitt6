import { VehicleStateWhereInput } from "./VehicleStateWhereInput";
import { VehicleStateOrderByInput } from "./VehicleStateOrderByInput";

export type VehicleStateFindManyArgs = {
  where?: VehicleStateWhereInput;
  orderBy?: Array<VehicleStateOrderByInput>;
  skip?: number;
  take?: number;
};
