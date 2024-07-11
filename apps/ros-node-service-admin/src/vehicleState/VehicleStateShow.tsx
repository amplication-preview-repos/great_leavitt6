import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VehicleStateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="steering_angle" source="steeringAngle" />
        <TextField label="position_x" source="positionX" />
        <TextField label="position_y" source="positionY" />
        <TextField label="orientation_z" source="orientationZ" />
        <TextField label="steering_direction" source="steeringDirection" />
      </SimpleShowLayout>
    </Show>
  );
};
