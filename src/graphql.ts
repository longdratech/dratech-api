
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateProject {
    title: string;
    img: string;
    content: string;
}

export class UpdateProject {
    id: string;
    title?: Nullable<string>;
    img?: Nullable<string>;
    published?: Nullable<boolean>;
    content?: Nullable<string>;
}

export class Project {
    id: string;
    title: string;
    img: string;
    content: string;
    published: boolean;
    createdAt: string;
}

export abstract class IQuery {
    abstract projects(): Project[] | Promise<Project[]>;

    abstract project(id: string): Nullable<Project> | Promise<Nullable<Project>>;
}

export abstract class IMutation {
    abstract createProject(input?: Nullable<CreateProject>): Project | Promise<Project>;

    abstract updateProject(input?: Nullable<UpdateProject>): Nullable<Project> | Promise<Nullable<Project>>;

    abstract deleteProject(id: string): Nullable<Project> | Promise<Nullable<Project>>;
}

type Nullable<T> = T | null;
