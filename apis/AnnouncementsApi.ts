// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { GetDetailedOpenRateOfAnnouncementByIdResponse } from '../models/GetDetailedOpenRateOfAnnouncementByIdResponse';
import { GetDetailedOpenRateOfAnnouncementGroupResponse } from '../models/GetDetailedOpenRateOfAnnouncementGroupResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponse } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import { GetStatisticsDailyResponse } from '../models/GetStatisticsDailyResponse';
import { GetStatisticsMonthlyResponse } from '../models/GetStatisticsMonthlyResponse';
import { GetStatisticsResponse } from '../models/GetStatisticsResponse';
import { ListAnnouncementGroupsResponse } from '../models/ListAnnouncementGroupsResponse';
import { ListAnnouncementsResponse } from '../models/ListAnnouncementsResponse';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
import { ScheduleAnnouncementResponse } from '../models/ScheduleAnnouncementResponse';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateAnnouncementByIdResponse } from '../models/UpdateAnnouncementByIdResponse';
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';

/**
 * no description
 */
export class AnnouncementsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * Get detailed open rate of an announcement
     * @param apiToken 
     * @param uniqueId 
     */
    public async getDetailedOpenRateOfAnnouncementById(apiToken: string, uniqueId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenRateOfAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenRateOfAnnouncementById", "uniqueId");
        }


        // Path Params
        const localVarPath = '/v3/announcement_open_rate/{unique_id}'
            .replace('{' + 'unique_id' + '}', encodeURIComponent(String(uniqueId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * Get detailed open rate of an announcement group
     * @param apiToken 
     * @param announcementGroup 
     */
    public async getDetailedOpenRateOfAnnouncementGroup(apiToken: string, announcementGroup: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenRateOfAnnouncementGroup", "apiToken");
        }


        // verify required parameter 'announcementGroup' is not null or undefined
        if (announcementGroup === null || announcementGroup === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenRateOfAnnouncementGroup", "announcementGroup");
        }


        // Path Params
        const localVarPath = '/v3/announcement_open_rate_by_group/{announcement_group}'
            .replace('{' + 'announcement_group' + '}', encodeURIComponent(String(announcementGroup)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * Get detailed open status of an announcement
     * @param apiToken 
     * @param uniqueId 
     * @param limit 
     * @param next 
     * @param uniqueIds 
     * @param channelUrls 
     * @param hasOpened 
     */
    public async getDetailedOpenStatusOfAnnouncementById(apiToken: string, uniqueId: string, limit?: number, next?: string, uniqueIds?: Array<string>, channelUrls?: Array<string>, hasOpened?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenStatusOfAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementsApi", "getDetailedOpenStatusOfAnnouncementById", "uniqueId");
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



        return requestContext;
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - weekly
     * @param apiToken 
     */
    public async getStatistics(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatistics", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/announcement_stats/weekly';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - daily
     * @param apiToken 
     * @param startDate 
     * @param endDate 
     * @param startWeek 
     * @param endWeek 
     * @param startMonth 
     * @param endMonth 
     * @param announcementGroup 
     */
    public async getStatisticsDaily(apiToken: string, startDate: string, endDate: string, startWeek: string, endWeek: string, startMonth: string, endMonth: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "apiToken");
        }


        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "startDate");
        }


        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "endDate");
        }


        // verify required parameter 'startWeek' is not null or undefined
        if (startWeek === null || startWeek === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "startWeek");
        }


        // verify required parameter 'endWeek' is not null or undefined
        if (endWeek === null || endWeek === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "endWeek");
        }


        // verify required parameter 'startMonth' is not null or undefined
        if (startMonth === null || startMonth === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "startMonth");
        }


        // verify required parameter 'endMonth' is not null or undefined
        if (endMonth === null || endMonth === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsDaily", "endMonth");
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



        return requestContext;
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - monthly
     * @param apiToken 
     */
    public async getStatisticsMonthly(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "getStatisticsMonthly", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/announcement_stats/monthly';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * List announcement groups
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async listAnnouncementGroups(apiToken: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "listAnnouncementGroups", "apiToken");
        }




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



        return requestContext;
    }

    /**
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * List announcements
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param order 
     * @param status 
     * @param announcementGroup 
     */
    public async listAnnouncements(apiToken: string, token?: string, limit?: number, order?: string, status?: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "listAnnouncements", "apiToken");
        }







        // Path Params
        const localVarPath = '/v3/announcements';

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

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }

        // Query Params
        if (announcementGroup !== undefined) {
            requestContext.setQueryParam("announcement_group", ObjectSerializer.serialize(announcementGroup, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * Schedule an announcement
     * @param apiToken 
     * @param scheduleAnnouncementData 
     */
    public async scheduleAnnouncement(apiToken: string, scheduleAnnouncementData?: ScheduleAnnouncementData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "scheduleAnnouncement", "apiToken");
        }



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


        return requestContext;
    }

    /**
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * Update an announcement
     * @param apiToken 
     * @param uniqueId 
     * @param updateAnnouncementByIdData 
     */
    public async updateAnnouncementById(apiToken: string, uniqueId: string, updateAnnouncementByIdData?: UpdateAnnouncementByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "updateAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementsApi", "updateAnnouncementById", "uniqueId");
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


        return requestContext;
    }

    /**
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param apiToken 
     * @param uniqueId 
     */
    public async viewAnnouncementById(apiToken: string, uniqueId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementsApi", "viewAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementsApi", "viewAnnouncementById", "uniqueId");
        }


        // Path Params
        const localVarPath = '/v3/announcements/{unique_id}'
            .replace('{' + 'unique_id' + '}', encodeURIComponent(String(uniqueId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class AnnouncementsApiResponseProcessor {

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
     * @params response Response returned by the server for a request to listAnnouncements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAnnouncements(response: ResponseContext): Promise<ListAnnouncementsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAnnouncementsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnnouncementsResponse", ""
            ) as ListAnnouncementsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAnnouncementsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAnnouncementsResponse", ""
            ) as ListAnnouncementsResponse;
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
