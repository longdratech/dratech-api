import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from "./prisma.service";
import { ProjectModule } from './api/project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
