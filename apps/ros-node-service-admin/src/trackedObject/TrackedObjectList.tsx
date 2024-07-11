import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TrackedObjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TrackedObjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="rel_x" source="relX" />
        <TextField label="rel_y" source="relY" />
        <TextField label="rot_rel_z" source="rotRelZ" />
        <TextField label="ego_width" source="egoWidth" />
        <BooleanField label="obj_close" source="objClose" />
        <BooleanField label="abs_dist_close" source="absDistClose" />
        <TextField label="object_length" source="objectLength" />
        <TextField label="object_width" source="objectWidth" />
        <TextField label="angle_obj" source="angleObj" />
        <TextField label="angle_ego" source="angleEgo" />
        <TextField label="ego_length" source="egoLength" />
        <TextField label="ego_vel_x" source="egoVelX" />
        <TextField label="ego_veh_acc_x" source="egoVehAccX" />
        <TextField label="object_vel_x" source="objectVelX" />
      </Datagrid>
    </List>
  );
};
