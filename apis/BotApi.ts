// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateABotRequest } from '../models/CreateABotRequest';
import { CreateABotResponse } from '../models/CreateABotResponse';
import { JoinChannelsRequest } from '../models/JoinChannelsRequest';
import { ListBotsResponse } from '../models/ListBotsResponse';
import { SendABotMessageResponse } from '../models/SendABotMessageResponse';
import { SendbirdExtendedMessagePayload } from '../models/SendbirdExtendedMessagePayload';
import { SendbirdGroupChannelDetail } from '../models/SendbirdGroupChannelDetail';
import { SendbirdSortedMetaarrayInner } from '../models/SendbirdSortedMetaarrayInner';
import { UpdateBotByIdData } from '../models/UpdateBotByIdData';
import { UpdateBotByIdResponse } from '../models/UpdateBotByIdResponse';
import { ViewBotByIdResponse } from '../models/ViewBotByIdResponse';

/**
 * no description
 */
export class BotApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Create a bot  Creates a new bot within an application. Creating a bot is similar to creating a normal user, except a callback URL should be specified for a bot to receive events.  > **Note**: The bot must first [join a group channel](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels) to interact with users. In group channels, you can also invite a bot through the [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) action.      [https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot](https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot)
     * Create a bot
     * @param apiToken 
     * @param createABotRequest 
     */
    public async createABot(apiToken?: string, createABotRequest?: CreateABotRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/bots';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createABotRequest, "CreateABotRequest", ""),
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
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * Delete a bot
     * @param botUserid 
     * @param apiToken 
     */
    public async deleteBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "deleteBotById", "botUserid");
        }



        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

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
     * ## Join channels  Makes a bot join one or more group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels)
     * Join channels
     * @param botUserid (Required) 
     * @param apiToken 
     * @param joinChannelsRequest 
     */
    public async joinChannels(botUserid: string, apiToken?: string, joinChannelsRequest?: JoinChannelsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "joinChannels", "botUserid");
        }




        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}/channels'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(joinChannelsRequest, "JoinChannelsRequest", ""),
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
     * ## Leave channels  Makes a bot leave a specific channel  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving a specific channel
     * @param channelUrl 
     * @param botUserid (Required) 
     * @param apiToken 
     */
    public async leaveAGroupChannel(channelUrl: string, botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("BotApi", "leaveAGroupChannel", "channelUrl");
        }


        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "leaveAGroupChannel", "botUserid");
        }



        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}/channels/{channel_url}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Leave channels  Makes a bot leave all group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving all channels
     * @param botUserid (Required) 
     * @param apiToken 
     */
    public async leaveGroupChannels(botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "leaveGroupChannels", "botUserid");
        }



        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}/channels'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/platform-api/v3/bot/listing-bots/list-bots#1-list-bots
     * List bots
     * @param token 
     * @param limit 
     * @param apiToken 
     */
    public async listBots(token?: string, limit?: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v3/bots';

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Send a bot message  Sends a bot message to a group channel.  [https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message](https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message)  `bot_userid`   Type: string   Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param botUserid (Required) 
     * @param messageType Specifies the type of message to send. MESG for text message, FILE for file message.
     * @param channelUrl Specifies the URL of the channel to send the message to.
     * @param apiToken 
     * @param message Specifies the content of the message. * This property is required when message_type is MESG.
     * @param mentioned * This property is available when message_type is MESG.
     * @param extendedMessagePayload 
     * @param file When sending a single file with a message, specifies the data of the file to upload to the Sendbird server in raw binary format. When sending a request containing a file, change the value of the content-type header to multipart/form-data;boundary&#x3D;{your_unique_boundary_string} in the request. * This property is required when message_type is FILE. * This doesn&#39;t allow a converted base64-encoded string from a file as its value.
     * @param requireAuth Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file. * This property is available when message_type is FILE.
     * @param mentionType * This property is available when message_type is FILE.
     * @param mentionedUserIds * This property is available when message_type is FILE.
     * @param isSilent * This property is available when message_type is FILE.
     * @param sortedMetaarray 
     * @param apnsBundleId * This property is available when message_type is FILE.
     * @param appleCriticalAlertOptions * This property is available when message_type is FILE.
     * @param sound * This property is available when message_type is FILE.
     * @param volume * This property is available when message_type is FILE.
     * @param createdAt 
     * @param customType 
     * @param data 
     * @param dedupId 
     * @param markAsRead 
     * @param sendPush 
     */
    public async sendABotMessage(botUserid: string, messageType: string, channelUrl: string, apiToken?: string, message?: string, mentioned?: Array<string>, extendedMessagePayload?: SendbirdExtendedMessagePayload, file?: HttpFile, requireAuth?: boolean, mentionType?: string, mentionedUserIds?: Array<string>, isSilent?: boolean, sortedMetaarray?: Array<SendbirdSortedMetaarrayInner>, apnsBundleId?: string, appleCriticalAlertOptions?: any, sound?: string, volume?: number, createdAt?: number, customType?: string, data?: string, dedupId?: string, markAsRead?: boolean, sendPush?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "sendABotMessage", "botUserid");
        }


        // verify required parameter 'messageType' is not null or undefined
        if (messageType === null || messageType === undefined) {
            throw new RequiredError("BotApi", "sendABotMessage", "messageType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("BotApi", "sendABotMessage", "channelUrl");
        }






















        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}/send'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (messageType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('message_type', messageType as any);
        }
        if (channelUrl !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('channel_url', channelUrl as any);
        }
        if (message !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('message', message as any);
        }
        if (mentioned) {
            // TODO: replace .append with .set
            localVarFormParams.append('mentioned', mentioned.join(COLLECTION_FORMATS["csv"]));
        }
        if (extendedMessagePayload !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('extended_message_payload', extendedMessagePayload as any);
        }
        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file.data, file.name);
             }
        }
        if (requireAuth !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('require_auth', requireAuth.toString());
        }
        if (mentionType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('mention_type', mentionType as any);
        }
        if (mentionedUserIds) {
            // TODO: replace .append with .set
            localVarFormParams.append('mentioned_user_ids', mentionedUserIds.join(COLLECTION_FORMATS["csv"]));
        }
        if (isSilent !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('is_silent', isSilent.toString());
        }
        if (sortedMetaarray) {
            // TODO: replace .append with .set
            localVarFormParams.append('sorted_metaarray', sortedMetaarray.join(COLLECTION_FORMATS["csv"]));
        }
        if (apnsBundleId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('apns_bundle_id', apnsBundleId as any);
        }
        if (appleCriticalAlertOptions !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('apple_critical_alert_options', appleCriticalAlertOptions as any);
        }
        if (sound !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('sound', sound as any);
        }
        if (volume !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('volume', volume as any);
        }
        if (createdAt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('created_at', createdAt as any);
        }
        if (customType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('custom_type', customType as any);
        }
        if (data !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('data', data as any);
        }
        if (dedupId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('dedup_id', dedupId as any);
        }
        if (markAsRead !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('mark_as_read', markAsRead.toString());
        }
        if (sendPush !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('send_push', sendPush.toString());
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * Update a bot
     * @param botUserid 
     * @param apiToken 
     * @param updateBotByIdData 
     */
    public async updateBotById(botUserid: string, apiToken?: string, updateBotByIdData?: UpdateBotByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "updateBotById", "botUserid");
        }




        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

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
            ObjectSerializer.serialize(updateBotByIdData, "UpdateBotByIdData", ""),
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
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * View a bot
     * @param botUserid 
     * @param apiToken 
     */
    public async viewBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'botUserid' is not null or undefined
        if (botUserid === null || botUserid === undefined) {
            throw new RequiredError("BotApi", "viewBotById", "botUserid");
        }



        // Path Params
        const localVarPath = '/v3/bots/{bot_userid}'
            .replace('{' + 'bot_userid' + '}', encodeURIComponent(String(botUserid)));

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

export class BotApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createABot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createABot(response: ResponseContext): Promise<CreateABotResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateABotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateABotResponse", ""
            ) as CreateABotResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateABotResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateABotResponse", ""
            ) as CreateABotResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBotById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBotById(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to joinChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async joinChannels(response: ResponseContext): Promise<SendbirdGroupChannelDetail > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdGroupChannelDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdGroupChannelDetail", ""
            ) as SendbirdGroupChannelDetail;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdGroupChannelDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdGroupChannelDetail", ""
            ) as SendbirdGroupChannelDetail;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to leaveAGroupChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leaveAGroupChannel(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to leaveGroupChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leaveGroupChannels(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to listBots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBots(response: ResponseContext): Promise<ListBotsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListBotsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBotsResponse", ""
            ) as ListBotsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListBotsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBotsResponse", ""
            ) as ListBotsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendABotMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendABotMessage(response: ResponseContext): Promise<SendABotMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendABotMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendABotMessageResponse", ""
            ) as SendABotMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendABotMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendABotMessageResponse", ""
            ) as SendABotMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBotById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBotById(response: ResponseContext): Promise<UpdateBotByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateBotByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateBotByIdResponse", ""
            ) as UpdateBotByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateBotByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateBotByIdResponse", ""
            ) as UpdateBotByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewBotById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewBotById(response: ResponseContext): Promise<ViewBotByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewBotByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewBotByIdResponse", ""
            ) as ViewBotByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewBotByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewBotByIdResponse", ""
            ) as ViewBotByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
