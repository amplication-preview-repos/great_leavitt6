import { VehicleState as TVehicleState } from "../api/vehicleState/VehicleState";

export const VEHICLESTATE_TITLE_FIELD = "id";

export const VehicleStateTitle = (record: TVehicleState): string => {
  return record.id?.toString() || String(record.id);
};
