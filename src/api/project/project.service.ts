import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateProjectInput } from "./dto/create-project.input";
import { UpdateProjectInput } from "./dto/update-project.input";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProjectInput: CreateProjectInput) {
    return await this.prisma.project.create({ data: createProjectInput });
  }

  async findAll() {
    return await this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.project.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProjectInput: UpdateProjectInput) {
    return await this.prisma.project.update({
      where: { id },
      data: updateProjectInput,
    });
  }

  async remove(id: number) {
    return await this.prisma.project.delete({ where: { id } });
  }
}
