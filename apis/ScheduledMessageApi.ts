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


import { V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest } from '../models/V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest';
import { V3ScheduledMessagesCountGet200Response } from '../models/V3ScheduledMessagesCountGet200Response';
import { V3ScheduledMessagesGet200Response } from '../models/V3ScheduledMessagesGet200Response';

/**
 * no description
 */
export class ScheduledMessageApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Send a scheduled message immediately This action sends a scheduled message immediately. A user can only send their own scheduled messages immediately. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/send-a-scheduled-message-immediately -----------------------------  
     * Send a scheduled message immediately
     * @param channelType 
     * @param channelUrl 
     * @param scheduledMessageId 
     * @param apiToken 
     */
    public async v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(channelType: string, channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost", "channelUrl");
        }


        // verify required parameter 'scheduledMessageId' is not null or undefined
        if (scheduledMessageId === null || scheduledMessageId === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost", "scheduledMessageId");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/scheduled_messages/{scheduled_message_id}/send_now'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'scheduled_message_id' + '}', encodeURIComponent(String(scheduledMessageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * ## Create a scheduled message This action creates a new scheduled message. If a user leaves the channel before the scheduled time for the message to be sent, the scheduled message will be removed. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/create-a-scheduled-message -----------------------------  
     * Create a scheduled message
     * @param channelUrl 
     * @param apiToken 
     * @param v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest 
     */
    public async v3GroupChannelsChannelUrlScheduledMessagesPost(channelUrl: string, apiToken?: string, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesPost", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/scheduled_messages'
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
            ObjectSerializer.serialize(v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, "V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest", ""),
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
     * ## Cancel a scheduled message This action cancels a message that a user has scheduled to send at a later time. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/cancel-a-scheduled-message -----------------------------                      
     * Cancel a scheduled message
     * @param channelUrl 
     * @param scheduledMessageId 
     * @param apiToken 
     */
    public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete", "channelUrl");
        }


        // verify required parameter 'scheduledMessageId' is not null or undefined
        if (scheduledMessageId === null || scheduledMessageId === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete", "scheduledMessageId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'scheduled_message_id' + '}', encodeURIComponent(String(scheduledMessageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * ## View a scheduled message This action retrieves information on a specific scheduled message. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/view-a-scheduled-message -----------------------------                      
     * View a scheduled message
     * @param channelUrl 
     * @param scheduledMessageId 
     * @param apiToken 
     */
    public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(channelUrl: string, scheduledMessageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet", "channelUrl");
        }


        // verify required parameter 'scheduledMessageId' is not null or undefined
        if (scheduledMessageId === null || scheduledMessageId === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet", "scheduledMessageId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'scheduled_message_id' + '}', encodeURIComponent(String(scheduledMessageId)));

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
     * ## Update a scheduled message This action updates information on a specific scheduled message. You can’t change the message type. Update operation should be done at least 5 minutes prior to the original scheduled time. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/update-a-scheduled-message -----------------------------      
     * Update a scheduled message
     * @param channelUrl 
     * @param scheduledMessageId 
     * @param apiToken 
     * @param v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest 
     */
    public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(channelUrl: string, scheduledMessageId: number, apiToken?: string, v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest?: V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost", "channelUrl");
        }


        // verify required parameter 'scheduledMessageId' is not null or undefined
        if (scheduledMessageId === null || scheduledMessageId === undefined) {
            throw new RequiredError("ScheduledMessageApi", "v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost", "scheduledMessageId");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'scheduled_message_id' + '}', encodeURIComponent(String(scheduledMessageId)));

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
            ObjectSerializer.serialize(v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest, "V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest", ""),
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
     * ## View number of scheduled messages This action retrieves the total number of scheduled messages that a user has. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/view-number-of-scheduled-messages -----------------------------  
     * View number of scheduled messages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param senderId 
     * @param status 
     * @param messageType 
     */
    public async v3ScheduledMessagesCountGet(apiToken?: string, channelType?: string, channelUrl?: string, senderId?: string, status?: Array<any>, messageType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/v3/scheduled_messages/count'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'sender_id' + '}', encodeURIComponent(String(senderId)))
            .replace('{' + 'status[]' + '}', encodeURIComponent(String(status)))
            .replace('{' + 'message_type' + '}', encodeURIComponent(String(messageType)));

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
     * ## List scheduled messages This action retrieves a list of scheduled messages. A user can only see the list of their own scheduled messages. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/list-scheduled-messages -----------------------------  
     * List scheduled messages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param senderId 
     * @param token 
     * @param limit 
     * @param order 
     * @param reverse 
     * @param status 
     * @param messageType 
     */
    public async v3ScheduledMessagesGet(apiToken?: string, channelType?: string, channelUrl?: string, senderId?: string, token?: string, limit?: number, order?: string, reverse?: boolean, status?: Array<any>, messageType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/v3/scheduled_messages'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'sender_id' + '}', encodeURIComponent(String(senderId)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'limit' + '}', encodeURIComponent(String(limit)))
            .replace('{' + 'order' + '}', encodeURIComponent(String(order)))
            .replace('{' + 'reverse' + '}', encodeURIComponent(String(reverse)))
            .replace('{' + 'status[]' + '}', encodeURIComponent(String(status)))
            .replace('{' + 'message_type' + '}', encodeURIComponent(String(messageType)));

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

export class ScheduledMessageApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GroupChannelsChannelUrlScheduledMessagesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GroupChannelsChannelUrlScheduledMessagesPost(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ScheduledMessagesCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ScheduledMessagesCountGet(response: ResponseContext): Promise<V3ScheduledMessagesCountGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesCountGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesCountGet200Response", ""
            ) as V3ScheduledMessagesCountGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesCountGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesCountGet200Response", ""
            ) as V3ScheduledMessagesCountGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ScheduledMessagesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ScheduledMessagesGet(response: ResponseContext): Promise<V3ScheduledMessagesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ScheduledMessagesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ScheduledMessagesGet200Response", ""
            ) as V3ScheduledMessagesGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
