import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const TrackedObjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="rel_x" source="relX" />
        <NumberInput label="rel_y" source="relY" />
        <NumberInput label="rot_rel_z" source="rotRelZ" />
        <NumberInput label="ego_width" source="egoWidth" />
        <BooleanInput label="obj_close" source="objClose" />
        <BooleanInput label="abs_dist_close" source="absDistClose" />
        <NumberInput label="object_length" source="objectLength" />
        <NumberInput label="object_width" source="objectWidth" />
        <NumberInput label="angle_obj" source="angleObj" />
        <NumberInput label="angle_ego" source="angleEgo" />
        <NumberInput label="ego_length" source="egoLength" />
        <NumberInput label="ego_vel_x" source="egoVelX" />
        <NumberInput label="ego_veh_acc_x" source="egoVehAccX" />
        <NumberInput label="object_vel_x" source="objectVelX" />
      </SimpleForm>
    </Create>
  );
};
