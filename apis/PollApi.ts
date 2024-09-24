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


import { SendBirdPoll } from '../models/SendBirdPoll';
import { SendBirdPollOption } from '../models/SendBirdPollOption';
import { V3PollsGetRequest } from '../models/V3PollsGetRequest';
import { V3PollsPollIdDeleteRequest } from '../models/V3PollsPollIdDeleteRequest';
import { V3PollsPollIdDeleteRequest1 } from '../models/V3PollsPollIdDeleteRequest1';
import { V3PollsPollIdOptionsOptionIdDeleteRequest } from '../models/V3PollsPollIdOptionsOptionIdDeleteRequest';
import { V3PollsPollIdOptionsOptionIdVotersGet200Response } from '../models/V3PollsPollIdOptionsOptionIdVotersGet200Response';
import { V3PollsPollIdOptionsOptionIdVotersGetRequest } from '../models/V3PollsPollIdOptionsOptionIdVotersGetRequest';
import { V3PollsPollIdVotePutRequest } from '../models/V3PollsPollIdVotePutRequest';

/**
 * no description
 */
export class PollApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## List polls This action retrieves a paginated list of both open and closed polls in an application or a specific channel. To retrieve polls in a specific channel, the channel_url must be specified. https://sendbird.com/docs/chat/v3/platform-api/message/polls/list-polls  -----------------------------
     * List polls
     * @param apiToken 
     * @param channelUrl 
     * @param channelType 
     * @param token 
     * @param limit 
     */
    public async v3PollsGet(apiToken?: string, channelUrl?: string, channelType?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v3/polls'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'limit' + '}', encodeURIComponent(String(limit)));

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
     * ## Close a poll This action closes a poll and prevents users from voting any further. https://sendbird.com/docs/chat/v3/platform-api/message/polls/close-a-poll -----------------------------  
     * Close a poll
     * @param pollId 
     * @param apiToken 
     */
    public async v3PollsPollIdClosePut(pollId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdClosePut", "pollId");
        }



        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/close'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * ## Delete a poll This action deletes a poll. Once a poll is deleted, you can't retrieve its data. https://sendbird.com/docs/chat/v3/platform-api/message/polls/delete-a-poll -----------------------------  
     * Delete a poll
     * @param pollId 
     * @param apiToken 
     */
    public async v3PollsPollIdDelete(pollId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdDelete", "pollId");
        }



        // Path Params
        const localVarPath = '/v3/polls/{poll_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

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
     * ## Get a poll This action retrieves information on a specific poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/get-a-poll -----------------------------
     * Get a poll
     * @param pollId 
     * @param apiToken 
     * @param v3PollsPollIdDeleteRequest 
     */
    public async v3PollsPollIdGet(pollId: number, apiToken?: string, v3PollsPollIdDeleteRequest?: V3PollsPollIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdGet", "pollId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(v3PollsPollIdDeleteRequest, "V3PollsPollIdDeleteRequest", ""),
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
     * ## Delete a poll option This action deletes an option from a poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/delete-a-poll-option ----------------------------- 
     * Delete a poll option
     * @param pollId 
     * @param optionId 
     * @param apiToken 
     */
    public async v3PollsPollIdOptionsOptionIdDelete(pollId: number, optionId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdDelete", "pollId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdDelete", "optionId");
        }



        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/options/{option_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)))
            .replace('{' + 'option_id' + '}', encodeURIComponent(String(optionId)));

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
     * ## Get a poll option This action retrieves a poll option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/get-a-poll-option -----------------------------  
     * Get a poll option
     * @param pollId 
     * @param optionId 
     * @param apiToken 
     */
    public async v3PollsPollIdOptionsOptionIdGet(pollId: number, optionId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdGet", "pollId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdGet", "optionId");
        }



        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/options/{option_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)))
            .replace('{' + 'option_id' + '}', encodeURIComponent(String(optionId)));

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
     * ## Update a poll option This action updates the content of a poll option. Voting for an option doesn't update the option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/update-a-poll-option -----------------------------  
     * Update a poll option
     * @param pollId 
     * @param optionId 
     * @param apiToken 
     * @param v3PollsPollIdOptionsOptionIdDeleteRequest 
     */
    public async v3PollsPollIdOptionsOptionIdPut(pollId: number, optionId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdPut", "pollId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdPut", "optionId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/options/{option_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)))
            .replace('{' + 'option_id' + '}', encodeURIComponent(String(optionId)));

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
            ObjectSerializer.serialize(v3PollsPollIdOptionsOptionIdDeleteRequest, "V3PollsPollIdOptionsOptionIdDeleteRequest", ""),
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
     * ## List voters of a poll option This action retrieves a list of users who voted for a poll option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/list-voters-of-a-poll-option  -----------------------------  
     * List voters of a poll option
     * @param pollId 
     * @param optionId 
     * @param apiToken 
     * @param v3PollsPollIdOptionsOptionIdVotersGetRequest 
     */
    public async v3PollsPollIdOptionsOptionIdVotersGet(pollId: number, optionId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdVotersGetRequest?: V3PollsPollIdOptionsOptionIdVotersGetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdVotersGet", "pollId");
        }


        // verify required parameter 'optionId' is not null or undefined
        if (optionId === null || optionId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsOptionIdVotersGet", "optionId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/options/{option_id}/voters'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)))
            .replace('{' + 'option_id' + '}', encodeURIComponent(String(optionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(v3PollsPollIdOptionsOptionIdVotersGetRequest, "V3PollsPollIdOptionsOptionIdVotersGetRequest", ""),
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
     * ## Add a poll option This action adds a new option to a poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/add-a-poll-option -----------------------------  
     * Add a poll option
     * @param pollId 
     * @param apiToken 
     * @param v3PollsPollIdOptionsOptionIdDeleteRequest 
     */
    public async v3PollsPollIdOptionsPost(pollId: number, apiToken?: string, v3PollsPollIdOptionsOptionIdDeleteRequest?: V3PollsPollIdOptionsOptionIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdOptionsPost", "pollId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/options'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

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
            ObjectSerializer.serialize(v3PollsPollIdOptionsOptionIdDeleteRequest, "V3PollsPollIdOptionsOptionIdDeleteRequest", ""),
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
     * ## Update a poll This action updates information of a poll. To change the content of a poll option, see the update a poll option page. https://sendbird.com/docs/chat/v3/platform-api/message/polls/update-a-poll -----------------------------  
     * Update a poll
     * @param pollId 
     * @param apiToken 
     * @param v3PollsPollIdDeleteRequest1 
     */
    public async v3PollsPollIdPut(pollId: number, apiToken?: string, v3PollsPollIdDeleteRequest1?: V3PollsPollIdDeleteRequest1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdPut", "pollId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

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
            ObjectSerializer.serialize(v3PollsPollIdDeleteRequest1, "V3PollsPollIdDeleteRequest1", ""),
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
     * ## Cast or cancel a vote This action adds or removes a vote from a poll option, changing the number of votes given to each option. Use this action to override a previous vote and update the user's final choice of poll options. https://sendbird.com/docs/chat/v3/platform-api/message/polls/cast-or-cancel-a-vote -----------------------------  
     * Cast or cancel a vote
     * @param pollId 
     * @param apiToken 
     * @param v3PollsPollIdVotePutRequest 
     */
    public async v3PollsPollIdVotePut(pollId: number, apiToken?: string, v3PollsPollIdVotePutRequest?: V3PollsPollIdVotePutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pollId' is not null or undefined
        if (pollId === null || pollId === undefined) {
            throw new RequiredError("PollApi", "v3PollsPollIdVotePut", "pollId");
        }




        // Path Params
        const localVarPath = '/v3/polls/{poll_id}/vote'
            .replace('{' + 'poll_id' + '}', encodeURIComponent(String(pollId)));

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
            ObjectSerializer.serialize(v3PollsPollIdVotePutRequest, "V3PollsPollIdVotePutRequest", ""),
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
     * ## Create a poll This action creates a poll with at least one option.You can configure various settings for your poll, including when the poll will close and whether to allow voting for multiple options. After creating a poll, to share the poll with other users in a channel, the poll must be sent as a message. https://sendbird.com/docs/chat/v3/platform-api/message/polls/create-a-poll -----------------------------
     * Create a poll
     * @param title 
     * @param options 
     * @param apiToken 
     * @param v3PollsGetRequest 
     */
    public async v3PollsPost(title: string, options: Array<string>, apiToken?: string, v3PollsGetRequest?: V3PollsGetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'title' is not null or undefined
        if (title === null || title === undefined) {
            throw new RequiredError("PollApi", "v3PollsPost", "title");
        }


        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new RequiredError("PollApi", "v3PollsPost", "options");
        }




        // Path Params
        const localVarPath = '/v3/polls'
            .replace('{' + 'title' + '}', encodeURIComponent(String(title)))
            .replace('{' + 'options' + '}', encodeURIComponent(String(options)));

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
            ObjectSerializer.serialize(v3PollsGetRequest, "V3PollsGetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PollApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsGet(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdClosePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdClosePut(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdDelete(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to v3PollsPollIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdGet(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdOptionsOptionIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdOptionsOptionIdDelete(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to v3PollsPollIdOptionsOptionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdOptionsOptionIdGet(response: ResponseContext): Promise<SendBirdPollOption > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPollOption = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPollOption", ""
            ) as SendBirdPollOption;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPollOption = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPollOption", ""
            ) as SendBirdPollOption;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdOptionsOptionIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdOptionsOptionIdPut(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdOptionsOptionIdVotersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdOptionsOptionIdVotersGet(response: ResponseContext): Promise<V3PollsPollIdOptionsOptionIdVotersGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3PollsPollIdOptionsOptionIdVotersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3PollsPollIdOptionsOptionIdVotersGet200Response", ""
            ) as V3PollsPollIdOptionsOptionIdVotersGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3PollsPollIdOptionsOptionIdVotersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3PollsPollIdOptionsOptionIdVotersGet200Response", ""
            ) as V3PollsPollIdOptionsOptionIdVotersGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdOptionsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdOptionsPost(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdPut(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPollIdVotePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPollIdVotePut(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3PollsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3PollsPost(response: ResponseContext): Promise<SendBirdPoll > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdPoll = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdPoll", ""
            ) as SendBirdPoll;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
