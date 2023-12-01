/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBasic } from './UserBasic';

export type OrganizationMember = {
    readonly id: string;
    readonly user: UserBasic;
    level?: OrganizationMember.level;
    readonly joined_at: string;
    readonly updated_at: string;
    readonly is_2fa_enabled: boolean;
    readonly has_social_auth: boolean;
};

export namespace OrganizationMember {

    export enum level {
        '_1' = 1,
        '_8' = 8,
        '_15' = 15,
    }


}

