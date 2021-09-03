import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { PrismaService } from "./prisma.service";
import { ProjectResolver } from './api/project/project.resolver';
import { ProjectModule } from './api/project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    ProjectModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
