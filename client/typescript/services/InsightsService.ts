/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Funnel } from '../models/Funnel';
import type { FunnelStepsResults } from '../models/FunnelStepsResults';
import type { Insight } from '../models/Insight';
import type { PaginatedInsightList } from '../models/PaginatedInsightList';
import type { PatchedInsight } from '../models/PatchedInsight';
import type { Trend } from '../models/Trend';
import type { TrendResults } from '../models/TrendResults';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InsightsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdBy
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param shortId
     * @returns PaginatedInsightList
     * @throws ApiError
     */
    public static insightsList(
        projectId: string,
        createdBy?: number,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        shortId?: string,
    ): CancelablePromise<PaginatedInsightList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_by': createdBy,
                'format': format,
                'limit': limit,
                'offset': offset,
                'short_id': shortId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param fromDashboard
     * When loading an insight for a dashboard pass a `from_dashboard` query parameter containing the dashboard ID
     *
     * e.g. `"/api/projects/{team_id}/insights/{insight_id}?from_dashboard={dashboard_id}"`
     *
     * Insights can be added to more than one dashboard, this allows the insight to be loaded in the correct context.
     *
     * Using the correct cache and enriching the response with dashboard specific config (e.g. layouts or colors)
     * @param refresh
     * The client can request that an insight be refreshed by setting the `refresh=true` parameter.
     * The server will then decide if the data should or not be refreshed based on a set of heuristics
     * meant to determine the staleness of cached data. The result will contain as `is_cached` field
     * that indicates whether the insight was actually refreshed or not through the request.
     * @returns Insight
     * @throws ApiError
     */
    public static insightsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        fromDashboard?: number,
        refresh?: boolean,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
                'from_dashboard': fromDashboard,
                'refresh': refresh,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedInsight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns void
     * @throws ApiError
     */
    public static insightsDestroy(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            errors: {
                405: `No response body`,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsViewedCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/{id}/viewed/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsCancelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/cancel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsFunnelRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns FunnelStepsResults Note, if funnel_viz_type is set the response will be different.
     * @throws ApiError
     */
    public static funnels(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Funnel,
    ): CancelablePromise<FunnelStepsResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsFunnelCorrelationRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsFunnelCorrelationCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsMyLastViewedRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/my_last_viewed/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsPathRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/path/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsPathCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/path/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsRetentionRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/retention/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public static insightsTimingCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/timing/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Insight
     * @throws ApiError
     */
    public static insightsTrendRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Insight> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/insights/trend/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns TrendResults
     * @throws ApiError
     */
    public static trends(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Trend,
    ): CancelablePromise<TrendResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/trend/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
