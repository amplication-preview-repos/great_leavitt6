import { SortOrder } from "../../util/SortOrder";

export type CriticMetricOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ttcaObject?: SortOrder;
  ttcaPassEgo?: SortOrder;
  ttcaEgo?: SortOrder;
  ttcStationaryobject?: SortOrder;
  ttcValue?: SortOrder;
  psd?: SortOrder;
  tStop?: SortOrder;
  egoVehAccX?: SortOrder;
  relativeX?: SortOrder;
  relativeY?: SortOrder;
  egoVelX?: SortOrder;
  objectVelX?: SortOrder;
  objectName?: SortOrder;
  objectLength?: SortOrder;
  objectWidth?: SortOrder;
  egoLength?: SortOrder;
  egoWidth?: SortOrder;
  angleEgo?: SortOrder;
  ttcaPassObject?: SortOrder;
};
