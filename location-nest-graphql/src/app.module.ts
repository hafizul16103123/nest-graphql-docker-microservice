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
      // autoSchemaFile: path.join(process.cwd(), 'src/graphql.gql'),
      autoSchemaFile: {
        federation: 2,
      },
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myapp'),
    LocationModule,
  ],
})
export class AppModule { }
