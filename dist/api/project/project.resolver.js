"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../../graphql");
const project_service_1 = require("./project.service");
let ProjectResolver = class ProjectResolver {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async create(input) {
        return this.projectService.create(input);
    }
    async findAll() {
        return this.projectService.findAll();
    }
    async findOne(args) {
        return this.projectService.findOne(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)("createProject"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateProject]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)("projects"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)("project"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "findOne", null);
ProjectResolver = __decorate([
    (0, graphql_1.Resolver)("Project"),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectResolver);
exports.ProjectResolver = ProjectResolver;
//# sourceMappingURL=project.resolver.js.map