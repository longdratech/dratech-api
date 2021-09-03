import { Module } from "@nestjs/common";
import { PrismaService } from "./../../prisma.service";
import { ServicesResolver } from "./services.resolver";
import { ServicesService } from "./services.service";

@Module({
  providers: [ServicesResolver, ServicesService, PrismaService],
})
export class ServicesModule {}
