import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { ProjectModule } from './api/project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
