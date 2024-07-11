import { CriticMetricWhereInput } from "./CriticMetricWhereInput";
import { CriticMetricOrderByInput } from "./CriticMetricOrderByInput";

export type CriticMetricFindManyArgs = {
  where?: CriticMetricWhereInput;
  orderBy?: Array<CriticMetricOrderByInput>;
  skip?: number;
  take?: number;
};
