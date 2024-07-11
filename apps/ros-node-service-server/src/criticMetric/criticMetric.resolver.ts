import * as graphql from "@nestjs/graphql";
import { CriticMetricResolverBase } from "./base/criticMetric.resolver.base";
import { CriticMetric } from "./base/CriticMetric";
import { CriticMetricService } from "./criticMetric.service";

@graphql.Resolver(() => CriticMetric)
export class CriticMetricResolver extends CriticMetricResolverBase {
  constructor(protected readonly service: CriticMetricService) {
    super(service);
  }
}
