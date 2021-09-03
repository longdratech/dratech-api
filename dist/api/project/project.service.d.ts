import { PrismaService } from "src/prisma.service";
import { CreateProjectInput } from "./dto/create-project.input";
import { UpdateProjectInput } from "./dto/update-project.input";
export declare class ProjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProjectInput: CreateProjectInput): Promise<import(".prisma/client").Project>;
    findAll(): Promise<import(".prisma/client").Project[]>;
    findOne(id: number): Promise<import(".prisma/client").Project>;
    update(id: number, updateProjectInput: UpdateProjectInput): Promise<import(".prisma/client").Project>;
    remove(id: number): Promise<import(".prisma/client").Project>;
}
