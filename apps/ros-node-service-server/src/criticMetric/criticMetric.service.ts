import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CriticMetricServiceBase } from "./base/criticMetric.service.base";

@Injectable()
export class CriticMetricService extends CriticMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
