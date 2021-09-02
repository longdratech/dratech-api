import { ProjectService } from './project.service';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectInput: CreateProjectInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateProject(updateProjectInput: UpdateProjectInput): string;
    removeProject(id: number): string;
}
