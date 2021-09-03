export declare class CreateProject {
    content: string;
    img: string;
    title: string;
}
export declare class UpdateProject {
    content?: Nullable<string>;
    id: string;
    img?: Nullable<string>;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
}
export declare abstract class IMutation {
    abstract createProject(input?: Nullable<CreateProject>): Project | Promise<Project>;
    abstract deleteProject(id: string): Nullable<Project> | Promise<Nullable<Project>>;
    abstract updateProject(input?: Nullable<UpdateProject>): Nullable<Project> | Promise<Nullable<Project>>;
}
export declare class Project {
    content: string;
    createdAt: string;
    id: string;
    img: string;
    published: boolean;
    title: string;
}
export declare abstract class IQuery {
    abstract project(id: string): Nullable<Project> | Promise<Nullable<Project>>;
    abstract projects(): Project[] | Promise<Project[]>;
}
declare type Nullable<T> = T | null;
export {};
