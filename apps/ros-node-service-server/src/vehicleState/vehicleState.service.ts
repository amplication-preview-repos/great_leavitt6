import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleStateServiceBase } from "./base/vehicleState.service.base";

@Injectable()
export class VehicleStateService extends VehicleStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
