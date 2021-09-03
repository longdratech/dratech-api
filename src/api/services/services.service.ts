import { Injectable } from "@nestjs/common";
import { PrismaService } from "./../../prisma.service";
import { CreateServiceInput } from "./dto/create-service.input";
import { UpdateServiceInput } from "./dto/update-service.input";

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceInput: CreateServiceInput) {
    return await this.prisma.services.create({ data: createServiceInput });
  }

  async findAll() {
    return await this.prisma.services.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.services.findUnique({ where: { id } });
  }

  async update(id: number, updateServiceInput: UpdateServiceInput) {
    return await this.prisma.services.update({
      where: { id },
      data: updateServiceInput,
    });
  }

  async remove(id: number) {
    return await this.prisma.services.delete({ where: { id } });
  }
}
