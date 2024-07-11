import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CriticMetricCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="ttca_object" source="ttcaObject" />
        <NumberInput label="ttca_pass_ego" source="ttcaPassEgo" />
        <NumberInput label="ttca_ego" source="ttcaEgo" />
        <NumberInput
          label="ttc_stationaryobject"
          source="ttcStationaryobject"
        />
        <NumberInput label="ttc_value" source="ttcValue" />
        <NumberInput label="psd" source="psd" />
        <NumberInput label="t_stop" source="tStop" />
        <NumberInput label="ego_veh_acc_x" source="egoVehAccX" />
        <NumberInput label="relative_x" source="relativeX" />
        <NumberInput label="relative_y" source="relativeY" />
        <NumberInput label="ego_vel_x" source="egoVelX" />
        <NumberInput label="object_vel_x" source="objectVelX" />
        <TextInput label="object_name" source="objectName" />
        <NumberInput label="object_length" source="objectLength" />
        <NumberInput label="object_width" source="objectWidth" />
        <NumberInput label="ego_length" source="egoLength" />
        <NumberInput label="ego_width" source="egoWidth" />
        <NumberInput label="angle_ego" source="angleEgo" />
        <NumberInput label="ttca_pass_object" source="ttcaPassObject" />
      </SimpleForm>
    </Create>
  );
};
