/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrackedObjectWhereUniqueInput } from "./TrackedObjectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TrackedObjectUpdateInput } from "./TrackedObjectUpdateInput";

@ArgsType()
class UpdateTrackedObjectArgs {
  @ApiProperty({
    required: true,
    type: () => TrackedObjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrackedObjectWhereUniqueInput)
  @Field(() => TrackedObjectWhereUniqueInput, { nullable: false })
  where!: TrackedObjectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TrackedObjectUpdateInput,
  })
  @ValidateNested()
  @Type(() => TrackedObjectUpdateInput)
  @Field(() => TrackedObjectUpdateInput, { nullable: false })
  data!: TrackedObjectUpdateInput;
}

export { UpdateTrackedObjectArgs as UpdateTrackedObjectArgs };
