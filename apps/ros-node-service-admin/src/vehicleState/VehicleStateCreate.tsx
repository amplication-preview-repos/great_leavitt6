import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const VehicleStateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="steering_angle" source="steeringAngle" />
        <NumberInput label="position_x" source="positionX" />
        <NumberInput label="position_y" source="positionY" />
        <NumberInput label="orientation_z" source="orientationZ" />
        <NumberInput label="steering_direction" source="steeringDirection" />
      </SimpleForm>
    </Create>
  );
};
