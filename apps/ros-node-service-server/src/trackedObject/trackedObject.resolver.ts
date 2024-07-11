import * as graphql from "@nestjs/graphql";
import { TrackedObjectResolverBase } from "./base/trackedObject.resolver.base";
import { TrackedObject } from "./base/TrackedObject";
import { TrackedObjectService } from "./trackedObject.service";

@graphql.Resolver(() => TrackedObject)
export class TrackedObjectResolver extends TrackedObjectResolverBase {
  constructor(protected readonly service: TrackedObjectService) {
    super(service);
  }
}
