import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Location } from './location.entity';

@ObjectType()
@Schema()
export class Project {
  
  @Field((type)=> ID)
  id:String;

  @Field(() => String)
  @Prop()
  projectName: string;

  @Field(() => String)
  @Prop()
  locationId: string;

  @Field(() => Location)
  @Prop()
  location: Location;
}
export const ProjectSchema = SchemaFactory.createForClass(Project);
