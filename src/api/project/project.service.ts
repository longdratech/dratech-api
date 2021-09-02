import { Injectable } from "@nestjs/common";
import { Project } from "@prisma/client";
import { CreateProject } from "src/graphql";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateProject): Promise<Project> {
    console.log(input)
    return await this.prisma.project.create({ data: input });
  }

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  async findOne(id: string): Promise<Project> {
    return this.prisma.project.findUnique({
      where: { id: id },
    });
  }
}
