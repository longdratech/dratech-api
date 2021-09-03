
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateProject {
    content: string;
    img: string;
    title: string;
}

export class UpdateProject {
    content?: Nullable<string>;
    id: string;
    img?: Nullable<string>;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
}

export abstract class IMutation {
    abstract createProject(input?: Nullable<CreateProject>): Project | Promise<Project>;

    abstract deleteProject(id: string): Nullable<Project> | Promise<Nullable<Project>>;

    abstract updateProject(input?: Nullable<UpdateProject>): Nullable<Project> | Promise<Nullable<Project>>;
}

export class Project {
    content: string;
    createdAt: string;
    id: string;
    img: string;
    published: boolean;
    title: string;
}

export abstract class IQuery {
    abstract project(id: string): Nullable<Project> | Promise<Nullable<Project>>;

    abstract projects(): Project[] | Promise<Project[]>;
}

type Nullable<T> = T | null;
