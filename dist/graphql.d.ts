export declare class CreateProject {
    title: string;
    img: string;
    content: string;
}
export declare class UpdateProject {
    id: string;
    title?: Nullable<string>;
    img?: Nullable<string>;
    published?: Nullable<boolean>;
    content?: Nullable<string>;
}
export declare class Project {
    id: string;
    title: string;
    img: string;
    content: string;
    published: boolean;
    createdAt: string;
}
export declare abstract class IQuery {
    abstract projects(): Project[] | Promise<Project[]>;
    abstract project(id: string): Nullable<Project> | Promise<Nullable<Project>>;
}
export declare abstract class IMutation {
    abstract createProject(input?: Nullable<CreateProject>): Project | Promise<Project>;
    abstract updateProject(input?: Nullable<UpdateProject>): Nullable<Project> | Promise<Nullable<Project>>;
    abstract deleteProject(id: string): Nullable<Project> | Promise<Nullable<Project>>;
}
declare type Nullable<T> = T | null;
export {};
