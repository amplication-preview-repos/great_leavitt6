import { Module } from "@nestjs/common";
import { CriticMetricModuleBase } from "./base/criticMetric.module.base";
import { CriticMetricService } from "./criticMetric.service";
import { CriticMetricController } from "./criticMetric.controller";
import { CriticMetricResolver } from "./criticMetric.resolver";

@Module({
  imports: [CriticMetricModuleBase],
  controllers: [CriticMetricController],
  providers: [CriticMetricService, CriticMetricResolver],
  exports: [CriticMetricService],
})
export class CriticMetricModule {}
