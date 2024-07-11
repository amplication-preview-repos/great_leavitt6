import { SortOrder } from "../../util/SortOrder";

export type TrackedObjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  relX?: SortOrder;
  relY?: SortOrder;
  rotRelZ?: SortOrder;
  egoWidth?: SortOrder;
  objClose?: SortOrder;
  absDistClose?: SortOrder;
  objectLength?: SortOrder;
  objectWidth?: SortOrder;
  angleObj?: SortOrder;
  angleEgo?: SortOrder;
  egoLength?: SortOrder;
  egoVelX?: SortOrder;
  egoVehAccX?: SortOrder;
  objectVelX?: SortOrder;
};
