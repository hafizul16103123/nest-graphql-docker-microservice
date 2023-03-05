import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
/**
 * 1. Note the @key directive: it instructs the Apollo query planner
 * that a particular instance of User can be fetched if you specify its id
 *
 * 2. define id field type as ID
 */

@ObjectType()
@Directive('@key(fields: "id")')
@Schema()
export class Location {
  @Field((type) => ID)
  id: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  latlang: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
