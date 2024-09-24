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


import { GetDetailedOpenRateOfAnnouncementGroupResponse } from '../models/GetDetailedOpenRateOfAnnouncementGroupResponse';
import { GetStatisticsDailyResponse } from '../models/GetStatisticsDailyResponse';
import { GetStatisticsMonthlyResponse } from '../models/GetStatisticsMonthlyResponse';
import { GetStatisticsResponse } from '../models/GetStatisticsResponse';
import { ListAnnouncementGroupsResponse } from '../models/ListAnnouncementGroupsResponse';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
import { ScheduleAnnouncementResponse } from '../models/ScheduleAnnouncementResponse';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateAnnouncementByIdResponse } from '../models/UpdateAnnouncementByIdResponse';
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';

/**
 * no description
 */
export class AnnouncementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * Get detailed open rate of an announcement group
     * @param announcementGroup 
     * @param apiToken 
     */
    public async getDetailedOpenRateOfAnnouncementGroup(announcementGroup: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'announcementGroup' is not null or undefined
        if (announcementGroup === null || announcementGroup === undefined) {
            throw new RequiredError("AnnouncementApi", "getDetailedOpenRateOfAnnouncementGroup", "announcementGroup");
        }



        // Path Params
        const localVarPath = '/v3/announcement_open_rate_by_group/{announcement_group}'
            .replace('{' + 'announcement_group' + '}', encodeURIComponent(String(announcementGroup)));

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
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - weekly
     * @param apiToken 
     */
    public async getStatistics(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/announcement_stats/weekly';

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
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - daily
     * @param startDate 
     * @param endDate 
     * @param startWeek 
     * @param endWeek 
     * @param startMonth 
     * @param endMonth 
     * @param apiToken 
     * @param announcementGroup 
     */
    public async getStatisticsDaily(startDate: string, endDate: string, startWeek: string, endWeek: string, startMonth: string, endMonth: string, apiToken?: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "startDate");
        }


        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "endDate");
        }


        // verify required parameter 'startWeek' is not null or undefined
        if (startWeek === null || startWeek === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "startWeek");
        }


        // verify required parameter 'endWeek' is not null or undefined
        if (endWeek === null || endWeek === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "endWeek");
        }


        // verify required parameter 'startMonth' is not null or undefined
        if (startMonth === null || startMonth === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "startMonth");
        }


        // verify required parameter 'endMonth' is not null or undefined
        if (endMonth === null || endMonth === undefined) {
            throw new RequiredError("AnnouncementApi", "getStatisticsDaily", "endMonth");
        }




        // Path Params
        const localVarPath = '/v3/announcement_stats/daily';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("start_date", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("end_date", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (startWeek !== undefined) {
            requestContext.setQueryParam("start_week", ObjectSerializer.serialize(startWeek, "string", ""));
        }

        // Query Params
        if (endWeek !== undefined) {
            requestContext.setQueryParam("end_week", ObjectSerializer.serialize(endWeek, "string", ""));
        }

        // Query Params
        if (startMonth !== undefined) {
            requestContext.setQueryParam("start_month", ObjectSerializer.serialize(startMonth, "string", ""));
        }

        // Query Params
        if (endMonth !== undefined) {
            requestContext.setQueryParam("end_month", ObjectSerializer.serialize(endMonth, "string", ""));
        }

        // Query Params
        if (announcementGroup !== undefined) {
            requestContext.setQueryParam("announcement_group", ObjectSerializer.serialize(announcementGroup, "string", ""));
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
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - monthly
     * @param apiToken 
     */
    public async getStatisticsMonthly(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/announcement_stats/monthly';

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
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * List announcement groups
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async listAnnouncementGroups(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v3/announcement_group';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * Schedule an announcement
     * @param apiToken 
     * @param scheduleAnnouncementData 
     */
    public async scheduleAnnouncement(apiToken?: string, scheduleAnnouncementData?: ScheduleAnnouncementData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/announcements';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scheduleAnnouncementData, "ScheduleAnnouncementData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * Update an announcement
     * @param uniqueId 
     * @param apiToken 
     * @param updateAnnouncementByIdData 
     */
    public async updateAnnouncementById(uniqueId: string, apiToken?: string, updateAnnouncementByIdData?: UpdateAnnouncementByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementApi", "updateAnnouncementById", "uniqueId");
        }




        // Path Params
        const localVarPath = '/v3/announcements/{unique_id}'
            .replace('{' + 'unique_id' + '}', encodeURIComponent(String(uniqueId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateAnnouncementByIdData, "UpdateAnnouncementByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param uniqueId 
     * @param apiToken 
     */
    public async viewAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementApi", "viewAnnouncementById", "uniqueId");
        }



        // Path Params
        const localVarPath = '/v3/announcements/{unique_id}'
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

}

export class AnnouncementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDetailedOpenRateOfAnnouncementGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDetailedOpenRateOfAnnouncementGroup(response: ResponseContext): Promise<GetDetailedOpenRateOfAnnouncementGroupResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetDetailedOpenRateOfAnnouncementGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenRateOfAnnouncementGroupResponse", ""
            ) as GetDetailedOpenRateOfAnnouncementGroupResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetDetailedOpenRateOfAnnouncementGroupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetDetailedOpenRateOfAnnouncementGroupResponse", ""
            ) as GetDetailedOpenRateOfAnnouncementGroupResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatistics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatistics(response: ResponseContext): Promise<GetStatisticsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetStatisticsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsResponse", ""
            ) as GetStatisticsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetStatisticsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsResponse", ""
            ) as GetStatisticsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatisticsDaily
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatisticsDaily(response: ResponseContext): Promise<GetStatisticsDailyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetStatisticsDailyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsDailyResponse", ""
            ) as GetStatisticsDailyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetStatisticsDailyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsDailyResponse", ""
            ) as GetStatisticsDailyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatisticsMonthly
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStatisticsMonthly(response: ResponseContext): Promise<GetStatisticsMonthlyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetStatisticsMonthlyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsMonthlyResponse", ""
            ) as GetStatisticsMonthlyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetStatisticsMonthlyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetStatisticsMonthlyResponse", ""
            ) as GetStatisticsMonthlyResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAnnouncementGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAnnouncementGroups(response: ResponseContext): Promise<ListAnnouncementGroupsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAnnouncementGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnnouncementGroupsResponse", ""
            ) as ListAnnouncementGroupsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAnnouncementGroupsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnnouncementGroupsResponse", ""
            ) as ListAnnouncementGroupsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to scheduleAnnouncement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async scheduleAnnouncement(response: ResponseContext): Promise<ScheduleAnnouncementResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ScheduleAnnouncementResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScheduleAnnouncementResponse", ""
            ) as ScheduleAnnouncementResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ScheduleAnnouncementResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScheduleAnnouncementResponse", ""
            ) as ScheduleAnnouncementResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAnnouncementById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAnnouncementById(response: ResponseContext): Promise<UpdateAnnouncementByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateAnnouncementByIdResponse", ""
            ) as UpdateAnnouncementByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateAnnouncementByIdResponse", ""
            ) as UpdateAnnouncementByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewAnnouncementById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewAnnouncementById(response: ResponseContext): Promise<ViewAnnouncementByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewAnnouncementByIdResponse", ""
            ) as ViewAnnouncementByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewAnnouncementByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewAnnouncementByIdResponse", ""
            ) as ViewAnnouncementByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
