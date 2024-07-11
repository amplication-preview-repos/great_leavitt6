export type VehicleState = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  steeringAngle: number | null;
  positionX: number | null;
  positionY: number | null;
  orientationZ: number | null;
  steeringDirection: number | null;
};
