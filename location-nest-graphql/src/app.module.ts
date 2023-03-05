import {
  ApolloDriverConfig,
  ApolloDriver,
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/graphql.gql'),
    }),
    MongooseModule.forRoot('mongodb://devops:devops007@localhost:27017'),
    LocationModule,
  ],
})
export class AppModule {}
