import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  latlang: string;
}
