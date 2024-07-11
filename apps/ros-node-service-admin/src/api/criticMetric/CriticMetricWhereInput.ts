import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CriticMetricWhereInput = {
  id?: StringFilter;
  ttcaObject?: FloatNullableFilter;
  ttcaPassEgo?: FloatNullableFilter;
  ttcaEgo?: FloatNullableFilter;
  ttcStationaryobject?: FloatNullableFilter;
  ttcValue?: FloatNullableFilter;
  psd?: FloatNullableFilter;
  tStop?: FloatNullableFilter;
  egoVehAccX?: FloatNullableFilter;
  relativeX?: FloatNullableFilter;
  relativeY?: FloatNullableFilter;
  egoVelX?: FloatNullableFilter;
  objectVelX?: FloatNullableFilter;
  objectName?: StringNullableFilter;
  objectLength?: FloatNullableFilter;
  objectWidth?: FloatNullableFilter;
  egoLength?: FloatNullableFilter;
  egoWidth?: FloatNullableFilter;
  angleEgo?: FloatNullableFilter;
  ttcaPassObject?: FloatNullableFilter;
};
