import {
  ApolloDriverConfig,
  ApolloDriver,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { Location } from './project/entities/location.entity';
import { ConfigModule } from '@nestjs/config';
// import {config} from './config/configuration';

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
    // MongooseModule.forRoot('mongodb://localhost:27017/graphql_microservice'),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myapp'),
    EmployeeModule,
    ProjectModule,
    // ConfigModule.forRoot({ load: [config], isGlobal: true })
    ConfigModule.forRoot({ isGlobal: true })
  ]
})
export class AppModule { }
