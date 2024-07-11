import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VehicleStateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VehicleStates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="steering_angle" source="steeringAngle" />
        <TextField label="position_x" source="positionX" />
        <TextField label="position_y" source="positionY" />
        <TextField label="orientation_z" source="orientationZ" />
        <TextField label="steering_direction" source="steeringDirection" />
      </Datagrid>
    </List>
  );
};
