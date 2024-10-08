// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetDetailedOpenRateOfAnnouncementByIdResponse } from '../models/GetDetailedOpenRateOfAnnouncementByIdResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponse } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import { RetrieveAdvancedAnalyticsMetricsResponse } from '../models/RetrieveAdvancedAnalyticsMetricsResponse';
import { ViewNumberOfConcurrentConnectionsResponse } from '../models/ViewNumberOfConcurrentConnectionsResponse';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';
import { ViewNumberOfPeakConnectionsResponse } from '../models/ViewNumberOfPeakConnectionsResponse';

/**
 * no description
 */
export class StatisticsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * Get detailed open rate of an announcement
     * @param uniqueId 
     * @param apiToken 
     */
    public async getDetailedOpenRateOfAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("StatisticsApi", "getDetailedOpenRateOfAnnouncementById", "uniqueId");
        }



        // Path Params
        const localVarPath = '/v3/announcement_open_rate/{unique_id}'
            .replace('{' + 'unique_id' + '}', encodeURIComponent(String(uniqueId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * Get detailed open status of an announcement
     * @param uniqueId 
     * @param apiToken 
     * @param limit 
     * @param next 
     * @param uniqueIds 
     * @param channelUrls 
     * @param hasOpened 
     */
    public async getDetailedOpenStatusOfAnnouncementById(uniqueId: string, apiToken?: string, limit?: number, next?: string, uniqueIds?: Array<string>, channelUrls?: Array<string>, hasOpened?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("StatisticsApi", "getDetailedOpenStatusOfAnnouncementById", "uniqueId");
        }








        // Path Params
        const localVarPath = '/v3/announcement_open_status/{unique_id}'
            .replace('{' + 'unique_id' + '}', encodeURIComponent(String(uniqueId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (next !== undefined) {
            requestContext.setQueryParam("next", ObjectSerializer.serialize(next, "string", ""));
        }

        // Query Params
        if (uniqueIds !== undefined) {
            requestContext.setQueryParam("unique_ids", ObjectSerializer.serialize(uniqueIds, "Array<string>", ""));
        }

        // Query Params
        if (channelUrls !== undefined) {
            requestContext.setQueryParam("channel_urls", ObjectSerializer.serialize(channelUrls, "Array<string>", ""));
        }

        // Query Params
        if (hasOpened !== undefined) {
            requestContext.setQueryParam("has_opened", ObjectSerializer.serialize(hasOpened, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
     * Retrieve Advanced analytics metrics
     * @param apiToken 
     */
    public async retrieveAdvancedAnalyticsMetrics(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/statistics/metric';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * View number of concurrent connections
     * @param apiToken 
     */
    public async viewNumberOfConcurrentConnections(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/applications/ccu';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * View number of daily active users
     * @param apiToken 
     * @param date 
     */
    public async viewNumberOfDailyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/dau';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * View number of monthly active users
     * @param apiToken 
     * @param date 
     */
    public async viewNumberOfMonthlyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/mau';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * View number of peak connections
     * @param timeDimension 
     * @param startYear 
     * @param startMonth 
     * @param endYear 
     * @param endMonth 
     * @param apiToken 
     * @param startDay 
     * @param endDay 
     */
    public async viewNumberOfPeakConnections(timeDimension: string, startYear: number, startMonth: number, endYear: number, endMonth: number, apiToken?: string, startDay?: number, endDay?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeDimension' is not null or undefined
        if (timeDimension === null || timeDimension === undefined) {
            throw new RequiredError("StatisticsApi", "viewNumberOfPeakConnections", "timeDimension");
        }


        // verify required parameter 'startYear' is not null or undefined
        if (startYear === null || startYear === undefined) {
            throw new RequiredError("StatisticsApi", "viewNumberOfPeakConnections", "startYear");
        }


        // verify required parameter 'startMonth' is not null or undefined
        if (startMonth === null || startMonth === undefined) {
            throw new RequiredError("StatisticsApi", "viewNumberOfPeakConnections", "startMonth");
        }


        // verify required parameter 'endYear' is not null or undefined
        if (endYear === null || endYear === undefined) {
            throw new RequiredError("StatisticsApi", "viewNumberOfPeakConnections", "endYear");
        }


        // verify required parameter 'endMonth' is not null or undefined
        if (endMonth === null || endMonth === undefined) {
            throw new RequiredError("StatisticsApi", "viewNumberOfPeakConnections", "endMonth");
        }





        // Path Params
        const localVarPath = '/v3/applications/peak_connections';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timeDimension !== undefined) {
            requestContext.setQueryParam("time_dimension", ObjectSerializer.serialize(timeDimension, "string", ""));
        }

        // Query Params
        if (startYear !== undefined) {
            requestContext.setQueryParam("start_year", ObjectSerializer.serialize(startYear, "number", ""));
        }

        // Query Params
        if (startMonth !== undefined) {
            requestContext.setQueryParam("start_month", ObjectSerializer.serialize(startMonth, "number", ""));
        }

        // Query Params
        if (endYear !== undefined) {
            requestContext.setQueryParam("end_year", ObjectSerializer.serialize(endYear, "number", ""));
        }

        // Query Params
        if (endMonth !== undefined) {
            requestContext.setQueryParam("end_month", ObjectSerializer.serialize(endMonth, "number", ""));
        }

        // Query Params
        if (startDay !== undefined) {
            requestContext.setQueryParam("start_day", ObjectSerializer.serialize(startDay, "number", ""));
        }

        // Query Params
        if (endDay !== undefined) {
            requestContext.setQueryParam("end_day", ObjectSerializer.serialize(endDay, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StatisticsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDetailedOpenRateOfAnnouncementById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDetailedOpenRateOfAnnouncementById(response: ResponseContext): Promise<GetDetailedOpenRateOfAnnouncementByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDetailedOpenRateOfAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenRateOfAnnouncementByIdResponse", ""
            ) as GetDetailedOpenRateOfAnnouncementByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDetailedOpenRateOfAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenRateOfAnnouncementByIdResponse", ""
            ) as GetDetailedOpenRateOfAnnouncementByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDetailedOpenStatusOfAnnouncementById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDetailedOpenStatusOfAnnouncementById(response: ResponseContext): Promise<GetDetailedOpenStatusOfAnnouncementByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDetailedOpenStatusOfAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenStatusOfAnnouncementByIdResponse", ""
            ) as GetDetailedOpenStatusOfAnnouncementByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDetailedOpenStatusOfAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenStatusOfAnnouncementByIdResponse", ""
            ) as GetDetailedOpenStatusOfAnnouncementByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveAdvancedAnalyticsMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveAdvancedAnalyticsMetrics(response: ResponseContext): Promise<RetrieveAdvancedAnalyticsMetricsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveAdvancedAnalyticsMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveAdvancedAnalyticsMetricsResponse", ""
            ) as RetrieveAdvancedAnalyticsMetricsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveAdvancedAnalyticsMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveAdvancedAnalyticsMetricsResponse", ""
            ) as RetrieveAdvancedAnalyticsMetricsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfConcurrentConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfConcurrentConnections(response: ResponseContext): Promise<ViewNumberOfConcurrentConnectionsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfConcurrentConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfConcurrentConnectionsResponse", ""
            ) as ViewNumberOfConcurrentConnectionsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfConcurrentConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfConcurrentConnectionsResponse", ""
            ) as ViewNumberOfConcurrentConnectionsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfDailyActiveUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfDailyActiveUsers(response: ResponseContext): Promise<ViewNumberOfDailyActiveUsersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfDailyActiveUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfDailyActiveUsersResponse", ""
            ) as ViewNumberOfDailyActiveUsersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfDailyActiveUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfDailyActiveUsersResponse", ""
            ) as ViewNumberOfDailyActiveUsersResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfMonthlyActiveUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfMonthlyActiveUsers(response: ResponseContext): Promise<ViewNumberOfMonthlyActiveUsersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfMonthlyActiveUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfMonthlyActiveUsersResponse", ""
            ) as ViewNumberOfMonthlyActiveUsersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfMonthlyActiveUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfMonthlyActiveUsersResponse", ""
            ) as ViewNumberOfMonthlyActiveUsersResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfPeakConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfPeakConnections(response: ResponseContext): Promise<ViewNumberOfPeakConnectionsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfPeakConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfPeakConnectionsResponse", ""
            ) as ViewNumberOfPeakConnectionsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfPeakConnectionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfPeakConnectionsResponse", ""
            ) as ViewNumberOfPeakConnectionsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
