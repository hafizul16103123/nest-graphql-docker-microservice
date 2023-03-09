import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config/configuration';
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
    MongooseModule.forRoot(config.databaseURL),
    LocationModule,
  ],
})
export class AppModule { }
