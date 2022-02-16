// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ListReportsOnChannelByUrlResponse } from '../models/ListReportsOnChannelByUrlResponse';
import { ListReportsOnMessageByIdResponse } from '../models/ListReportsOnMessageByIdResponse';
import { ListReportsOnUserByIdResponse } from '../models/ListReportsOnUserByIdResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ReportChannelByUrlData } from '../models/ReportChannelByUrlData';
import { ReportChannelByUrlResponse } from '../models/ReportChannelByUrlResponse';
import { ReportMessageByIdData } from '../models/ReportMessageByIdData';
import { ReportMessageByIdResponse } from '../models/ReportMessageByIdResponse';
import { ReportUserByIdData } from '../models/ReportUserByIdData';
import { ReportUserByIdResponse } from '../models/ReportUserByIdResponse';

/**
 * no description
 */
export class ReportContentSubjectApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * List reports
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param startTs 
     * @param endTs 
     */
    public async listReports(apiToken: string, token?: string, limit?: number, startTs?: number, endTs?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReports", "apiToken");
        }






        // Path Params
        const localVarPath = '/v3/report';

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
        if (startTs !== undefined) {
            requestContext.setQueryParam("start_ts", ObjectSerializer.serialize(startTs, "number", ""));
        }

        // Query Params
        if (endTs !== undefined) {
            requestContext.setQueryParam("end_ts", ObjectSerializer.serialize(endTs, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * List reports on a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public async listReportsOnChannelByUrl(apiToken: string, channelType: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnChannelByUrl", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnChannelByUrl", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnChannelByUrl", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/report/{channel_type}/{channel_url}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

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
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * List reports on a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param token 
     * @param limit 
     */
    public async listReportsOnMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnMessageById", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/report/{channel_type}/{channel_url}/messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

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
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * List reports on a user
     * @param apiToken 
     * @param offendingUserId 
     * @param token 
     * @param limit 
     */
    public async listReportsOnUserById(apiToken: string, offendingUserId: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnUserById", "apiToken");
        }


        // verify required parameter 'offendingUserId' is not null or undefined
        if (offendingUserId === null || offendingUserId === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "listReportsOnUserById", "offendingUserId");
        }




        // Path Params
        const localVarPath = '/v3/report/users/{offending_user_id}'
            .replace('{' + 'offending_user_id' + '}', encodeURIComponent(String(offendingUserId)));

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
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * Report a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param reportChannelByUrlData 
     */
    public async reportChannelByUrl(apiToken: string, channelType: string, channelUrl: string, reportChannelByUrlData?: ReportChannelByUrlData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportChannelByUrl", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportChannelByUrl", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportChannelByUrl", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/report/{channel_type}/{channel_url}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

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
            ObjectSerializer.serialize(reportChannelByUrlData, "ReportChannelByUrlData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * Report a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param reportMessageByIdData 
     */
    public async reportMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, reportMessageByIdData?: ReportMessageByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportMessageById", "messageId");
        }



        // Path Params
        const localVarPath = '/v3/report/{channel_type}/{channel_url}/messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

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
            ObjectSerializer.serialize(reportMessageByIdData, "ReportMessageByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * Report a user
     * @param apiToken 
     * @param offendingUserId 
     * @param reportUserByIdData 
     */
    public async reportUserById(apiToken: string, offendingUserId: string, reportUserByIdData?: ReportUserByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportUserById", "apiToken");
        }


        // verify required parameter 'offendingUserId' is not null or undefined
        if (offendingUserId === null || offendingUserId === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "reportUserById", "offendingUserId");
        }



        // Path Params
        const localVarPath = '/v3/report/users/{offending_user_id}'
            .replace('{' + 'offending_user_id' + '}', encodeURIComponent(String(offendingUserId)));

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
            ObjectSerializer.serialize(reportUserByIdData, "ReportUserByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * View a moderated message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     */
    public async viewModeratedMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "viewModeratedMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "viewModeratedMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "viewModeratedMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("ReportContentSubjectApi", "viewModeratedMessageById", "messageId");
        }


        // Path Params
        const localVarPath = '/v3/report/{channel_type}/{channel_url}/profanity_messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class ReportContentSubjectApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReports
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReports(response: ResponseContext): Promise<ListReportsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsResponse", ""
            ) as ListReportsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsResponse", ""
            ) as ListReportsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReportsOnChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReportsOnChannelByUrl(response: ResponseContext): Promise<ListReportsOnChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListReportsOnChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnChannelByUrlResponse", ""
            ) as ListReportsOnChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListReportsOnChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnChannelByUrlResponse", ""
            ) as ListReportsOnChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReportsOnMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReportsOnMessageById(response: ResponseContext): Promise<ListReportsOnMessageByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListReportsOnMessageByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnMessageByIdResponse", ""
            ) as ListReportsOnMessageByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListReportsOnMessageByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnMessageByIdResponse", ""
            ) as ListReportsOnMessageByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReportsOnUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReportsOnUserById(response: ResponseContext): Promise<ListReportsOnUserByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListReportsOnUserByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnUserByIdResponse", ""
            ) as ListReportsOnUserByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListReportsOnUserByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReportsOnUserByIdResponse", ""
            ) as ListReportsOnUserByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reportChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reportChannelByUrl(response: ResponseContext): Promise<ReportChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReportChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportChannelByUrlResponse", ""
            ) as ReportChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReportChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportChannelByUrlResponse", ""
            ) as ReportChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reportMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reportMessageById(response: ResponseContext): Promise<ReportMessageByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReportMessageByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportMessageByIdResponse", ""
            ) as ReportMessageByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReportMessageByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportMessageByIdResponse", ""
            ) as ReportMessageByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reportUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reportUserById(response: ResponseContext): Promise<ReportUserByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReportUserByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportUserByIdResponse", ""
            ) as ReportUserByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReportUserByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReportUserByIdResponse", ""
            ) as ReportUserByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewModeratedMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewModeratedMessageById(response: ResponseContext): Promise<{ [key: string]: string; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: string; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: string; }", ""
            ) as { [key: string]: string; };
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
