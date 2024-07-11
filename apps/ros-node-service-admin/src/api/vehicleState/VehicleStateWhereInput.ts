import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VehicleStateWhereInput = {
  id?: StringFilter;
  steeringAngle?: FloatNullableFilter;
  positionX?: FloatNullableFilter;
  positionY?: FloatNullableFilter;
  orientationZ?: FloatNullableFilter;
  steeringDirection?: FloatNullableFilter;
};
