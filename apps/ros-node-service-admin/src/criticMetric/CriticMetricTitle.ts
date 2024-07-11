import { CriticMetric as TCriticMetric } from "../api/criticMetric/CriticMetric";

export const CRITICMETRIC_TITLE_FIELD = "objectName";

export const CriticMetricTitle = (record: TCriticMetric): string => {
  return record.objectName?.toString() || String(record.id);
};
