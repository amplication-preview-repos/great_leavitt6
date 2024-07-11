import { TrackedObjectWhereInput } from "./TrackedObjectWhereInput";
import { TrackedObjectOrderByInput } from "./TrackedObjectOrderByInput";

export type TrackedObjectFindManyArgs = {
  where?: TrackedObjectWhereInput;
  orderBy?: Array<TrackedObjectOrderByInput>;
  skip?: number;
  take?: number;
};
