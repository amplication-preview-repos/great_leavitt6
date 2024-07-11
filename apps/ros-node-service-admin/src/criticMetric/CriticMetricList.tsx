import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CriticMetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CriticMetrics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ttca_object" source="ttcaObject" />
        <TextField label="ttca_pass_ego" source="ttcaPassEgo" />
        <TextField label="ttca_ego" source="ttcaEgo" />
        <TextField label="ttc_stationaryobject" source="ttcStationaryobject" />
        <TextField label="ttc_value" source="ttcValue" />
        <TextField label="psd" source="psd" />
        <TextField label="t_stop" source="tStop" />
        <TextField label="ego_veh_acc_x" source="egoVehAccX" />
        <TextField label="relative_x" source="relativeX" />
        <TextField label="relative_y" source="relativeY" />
        <TextField label="ego_vel_x" source="egoVelX" />
        <TextField label="object_vel_x" source="objectVelX" />
        <TextField label="object_name" source="objectName" />
        <TextField label="object_length" source="objectLength" />
        <TextField label="object_width" source="objectWidth" />
        <TextField label="ego_length" source="egoLength" />
        <TextField label="ego_width" source="egoWidth" />
        <TextField label="angle_ego" source="angleEgo" />
        <TextField label="ttca_pass_object" source="ttcaPassObject" />
      </Datagrid>
    </List>
  );
};
