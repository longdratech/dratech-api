import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { PrismaService } from "./prisma.service";
import { ProjectResolver } from './api/project/project.resolver';
import { ProjectModule } from './api/project/project.module';
import { ServicesModule } from './api/services/services.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    ProjectModule,
    ServicesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
