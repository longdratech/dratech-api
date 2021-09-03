import { ProjectService } from './project.service';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectInput: CreateProjectInput): Promise<import(".prisma/client").Project>;
    findAll(): Promise<import(".prisma/client").Project[]>;
    findOne(id: number): Promise<import(".prisma/client").Project>;
    updateProject(updateProjectInput: UpdateProjectInput): Promise<import(".prisma/client").Project>;
    removeProject(id: number): Promise<import(".prisma/client").Project>;
}
