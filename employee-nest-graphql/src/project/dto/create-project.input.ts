import { InputType, Int, Field } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  @Prop()
  projectName: string;

  @Field(() => String)
  @Prop()
  locationId: string;

}