import { Project } from "@prisma/client";
import { CreateProject } from "src/graphql";
import { PrismaService } from "src/prisma.service";
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    create(input: CreateProject): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
}
