import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
export declare class ProjectService {
    create(createProjectInput: CreateProjectInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProjectInput: UpdateProjectInput): string;
    remove(id: number): string;
}
