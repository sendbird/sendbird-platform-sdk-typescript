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
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';

/**
 * no description
 */
export class AnnouncementApiRequestFactory extends BaseAPIRequestFactory {

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
            throw new RequiredError("AnnouncementApi", "getDetailedOpenRateOfAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementApi", "getDetailedOpenRateOfAnnouncementById", "uniqueId");
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
            throw new RequiredError("AnnouncementApi", "getDetailedOpenRateOfAnnouncementGroup", "apiToken");
        }


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
            throw new RequiredError("AnnouncementApi", "getDetailedOpenStatusOfAnnouncementById", "apiToken");
        }


        // verify required parameter 'uniqueId' is not null or undefined
        if (uniqueId === null || uniqueId === undefined) {
            throw new RequiredError("AnnouncementApi", "getDetailedOpenStatusOfAnnouncementById", "uniqueId");
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
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param apiToken 
     * @param uniqueId 
     */
    public async viewAnnouncementById(apiToken: string, uniqueId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("AnnouncementApi", "viewAnnouncementById", "apiToken");
        }


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



        return requestContext;
    }

}

export class AnnouncementApiResponseProcessor {

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
