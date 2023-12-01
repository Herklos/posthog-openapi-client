/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBasic } from './UserBasic';

export type Annotation = {
    readonly id: number;
    content?: string | null;
    date_marker?: string | null;
    creation_type?: Annotation.creation_type;
    dashboard_item?: number | null;
    readonly insight_short_id: string | null;
    readonly insight_name: string | null;
    readonly created_by: UserBasic;
    readonly created_at: string | null;
    readonly updated_at: string;
    deleted?: boolean;
    scope?: Annotation.scope;
};

export namespace Annotation {

    export enum creation_type {
        USR = 'USR',
        GIT = 'GIT',
    }

    export enum scope {
        DASHBOARD_ITEM = 'dashboard_item',
        PROJECT = 'project',
        ORGANIZATION = 'organization',
    }


}

