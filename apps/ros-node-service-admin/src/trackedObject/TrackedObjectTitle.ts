import { TrackedObject as TTrackedObject } from "../api/trackedObject/TrackedObject";

export const TRACKEDOBJECT_TITLE_FIELD = "id";

export const TrackedObjectTitle = (record: TTrackedObject): string => {
  return record.id?.toString() || String(record.id);
};
