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
import configuaration from './config/configuration';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Location],
      },
    }),
    MongooseModule.forRoot('mongodb://devops:devops007@localhost:27017'),
    EmployeeModule,
    ProjectModule,
    ConfigModule.forRoot({load: [configuaration],isGlobal: true})
  ]
})
export class AppModule {}
