import { Module } from "@nestjs/common";
import { TrackedObjectModuleBase } from "./base/trackedObject.module.base";
import { TrackedObjectService } from "./trackedObject.service";
import { TrackedObjectController } from "./trackedObject.controller";
import { TrackedObjectResolver } from "./trackedObject.resolver";

@Module({
  imports: [TrackedObjectModuleBase],
  controllers: [TrackedObjectController],
  providers: [TrackedObjectService, TrackedObjectResolver],
  exports: [TrackedObjectService],
})
export class TrackedObjectModule {}
