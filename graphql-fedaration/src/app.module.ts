import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({

      driver: ApolloGatewayDriver,
      server: {
        // ... Apollo secalenrver options
        cors: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            // { name: 'employee', url: 'http://employee_service:3000/graphql' },
            // { name: 'location', url: 'http://location_service:3001/graphql' },
            { name: 'employee', url: 'http://localhost:3000/graphql' },
            { name: 'location', url: 'http://localhost:3001/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule { }
