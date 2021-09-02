import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProject } from "src/graphql";
import { ProjectService } from "./project.service";

@Resolver("Project")
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation("createProject")
  async create(input: CreateProject) {
    return this.projectService.create(input);
  }

  @Query("projects")
  async findAll() {
    return this.projectService.findAll();
  }

  @Query("project")
  async findOne(@Args("id") args: string) {
    return this.projectService.findOne(args);
  }
}
