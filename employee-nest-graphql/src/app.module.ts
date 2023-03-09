import {
  ApolloDriverConfig,
  ApolloDriver,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { Location } from './project/entities/location.entity';
import { config } from './config/configuration';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    //   driver: ApolloFederationDriver,
    //   federation: 2,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   buildSchemaOptions: {
    //     orphanedTypes: [Location],
    //   },
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Location],
      },

    }),

    MongooseModule.forRoot(config.databaseURL),
    EmployeeModule,
    ProjectModule,
  ]
})
export class AppModule { }
