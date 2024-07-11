import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const VehicleStateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="steering_angle" source="steeringAngle" />
        <NumberInput label="position_x" source="positionX" />
        <NumberInput label="position_y" source="positionY" />
        <NumberInput label="orientation_z" source="orientationZ" />
        <NumberInput label="steering_direction" source="steeringDirection" />
      </SimpleForm>
    </Edit>
  );
};
