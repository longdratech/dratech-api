import { CreateProject } from "src/graphql";
import { ProjectService } from "./project.service";
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(input: CreateProject): Promise<import(".prisma/client").Project>;
    findAll(): Promise<import(".prisma/client").Project[]>;
    findOne(args: string): Promise<import(".prisma/client").Project>;
}
