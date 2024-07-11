import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CriticMetricService } from "./criticMetric.service";
import { CriticMetricControllerBase } from "./base/criticMetric.controller.base";

@swagger.ApiTags("criticMetrics")
@common.Controller("criticMetrics")
export class CriticMetricController extends CriticMetricControllerBase {
  constructor(protected readonly service: CriticMetricService) {
    super(service);
  }
}
