import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TrackedObjectWhereInput = {
  id?: StringFilter;
  relX?: FloatNullableFilter;
  relY?: FloatNullableFilter;
  rotRelZ?: FloatNullableFilter;
  egoWidth?: FloatNullableFilter;
  objClose?: BooleanNullableFilter;
  absDistClose?: BooleanNullableFilter;
  objectLength?: FloatNullableFilter;
  objectWidth?: FloatNullableFilter;
  angleObj?: FloatNullableFilter;
  angleEgo?: FloatNullableFilter;
  egoLength?: FloatNullableFilter;
  egoVelX?: FloatNullableFilter;
  egoVehAccX?: FloatNullableFilter;
  objectVelX?: FloatNullableFilter;
};
