import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => Number)
  projectId: number;
}
