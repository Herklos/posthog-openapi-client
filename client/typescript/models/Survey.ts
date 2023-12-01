/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { UserBasic } from './UserBasic';

export type Survey = {
    readonly id: string;
    name: string;
    description?: string;
    type: Survey.type;
    readonly linked_flag: MinimalFeatureFlag;
    linked_flag_id?: number | null;
    readonly targeting_flag: MinimalFeatureFlag;
    questions?: Record<string, any> | null;
    conditions?: Record<string, any> | null;
    appearance?: Record<string, any> | null;
    readonly created_at: string;
    readonly created_by: UserBasic;
    start_date?: string | null;
    end_date?: string | null;
    archived?: boolean;
};

export namespace Survey {

    export enum type {
        POPOVER = 'popover',
        BUTTON = 'button',
        EMAIL = 'email',
        FULL_SCREEN = 'full_screen',
        API = 'api',
    }


}

