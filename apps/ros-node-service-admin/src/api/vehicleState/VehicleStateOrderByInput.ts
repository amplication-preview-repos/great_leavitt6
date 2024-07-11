import { SortOrder } from "../../util/SortOrder";

export type VehicleStateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  steeringAngle?: SortOrder;
  positionX?: SortOrder;
  positionY?: SortOrder;
  orientationZ?: SortOrder;
  steeringDirection?: SortOrder;
};
