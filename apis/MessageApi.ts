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


import { AddExtraDataToAMessageRequest } from '../models/AddExtraDataToAMessageRequest';
import { AddExtraDataToAMessageResponse } from '../models/AddExtraDataToAMessageResponse';
import { GetTotalNumberOfMessagesInAChannelResponse } from '../models/GetTotalNumberOfMessagesInAChannelResponse';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { MarkChannelMessagesAsReadRequest } from '../models/MarkChannelMessagesAsReadRequest';
import { MigrateMessagesRequest } from '../models/MigrateMessagesRequest';
import { SendAMessageRequest } from '../models/SendAMessageRequest';
import { SendbirdMessageResponse } from '../models/SendbirdMessageResponse';
import { UpdateAMessageRequest } from '../models/UpdateAMessageRequest';
import { UpdateExtraDataInAMessageRequest } from '../models/UpdateExtraDataInAMessageRequest';
import { UpdateExtraDataInAMessageResponse } from '../models/UpdateExtraDataInAMessageResponse';

/**
 * no description
 */
export class MessageApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-add-metadata#1-add-metadata ----------------------------
     * Add extra data to a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param addExtraDataToAMessageRequest 
     */
    public async addExtraDataToAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, apiToken?: string, addExtraDataToAMessageRequest?: AddExtraDataToAMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToAMessage", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

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
            ObjectSerializer.serialize(addExtraDataToAMessageRequest, "AddExtraDataToAMessageRequest", ""),
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
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/delete-a-message#1-delete-a-message ----------------------------
     * Delete a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     */
    public async deleteAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "deleteAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "deleteAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "deleteAMessage", "messageId");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

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
     * ## Get a message  Retrieves information on a specific message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-a-message#1-get-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * Get a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param includeReactions 
     * @param includeThreadInfo 
     * @param includeParentMessageInfo 
     * @param includePollDetails Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @param withSortedMetaArray 
     * @param apiToken 
     */
    public async getAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, includeReactions?: boolean, includeThreadInfo?: boolean, includeParentMessageInfo?: boolean, includePollDetails?: boolean, withSortedMetaArray?: boolean, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "getAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "getAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "getAMessage", "messageId");
        }








        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeReactions !== undefined) {
            requestContext.setQueryParam("include_reactions", ObjectSerializer.serialize(includeReactions, "boolean", ""));
        }

        // Query Params
        if (includeThreadInfo !== undefined) {
            requestContext.setQueryParam("include_thread_info", ObjectSerializer.serialize(includeThreadInfo, "boolean", ""));
        }

        // Query Params
        if (includeParentMessageInfo !== undefined) {
            requestContext.setQueryParam("include_parent_message_info", ObjectSerializer.serialize(includeParentMessageInfo, "boolean", ""));
        }

        // Query Params
        if (includePollDetails !== undefined) {
            requestContext.setQueryParam("include_poll_details", ObjectSerializer.serialize(includePollDetails, "boolean", ""));
        }

        // Query Params
        if (withSortedMetaArray !== undefined) {
            requestContext.setQueryParam("with_sorted_meta_array", ObjectSerializer.serialize(withSortedMetaArray, "boolean", ""));
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
     * ## Get total number of messages in a channel  Retrieves the total number of messages in a specific channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-total-number-of-messages-in-a-channel#1-get-total-number-of-messages-in-a-channel ----------------------------
     * Get total number of messages in a channel
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public async getTotalNumberOfMessagesInAChannel(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "getTotalNumberOfMessagesInAChannel", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "getTotalNumberOfMessagesInAChannel", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/total_count'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * ## List messages  You can retrieve a list of past messages of a specific channel with this API.  By default, this action returns a list of messages in the order they were created. Replies in threaded messages are also listed in the chronological order of their creation like other messages, not grouped with their parent messages.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/list-messages#1-list-messages  `channel_type`   Type: string   Description: Specifies the type of the channel. Either open_channels or group_channels.   `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageTs Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15.
     * @param messageId Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15.
     * @param prevLimit Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts&#x3D;1484202848298, then prev_limit&#x3D;50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15)
     * @param nextLimit Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts&#x3D;1484202848298, then next_limit&#x3D;50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15)
     * @param include Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true)
     * @param reverse Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false)
     * @param senderId Restricts the search scope to only retrieve messages sent by the user with the specified ID.
     * @param senderIds Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string.
     * @param operatorFilter 
     * @param customTypes Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &amp;custom_types&#x3D;&amp;...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type.
     * @param messageType 
     * @param includingRemoved 
     * @param includeReactions 
     * @param includeReplyType One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL
     * @param includeParentMessageInfo 
     * @param includeThreadInfo 
     * @param includePollDetails Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @param withSortedMetaArray Determines whether to include the sorted_metaarray property in the response. (Default: false)
     * @param showSubchannelMessagesOnly 
     * @param userId 
     * @param apiToken 
     */
    public async listMessages(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageTs: number, messageId: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: 'all' | 'operator' | 'nonoperator', customTypes?: string, messageType?: 'MESG' | 'FILE' | 'ADMM', includingRemoved?: boolean, includeReactions?: boolean, includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL', includeParentMessageInfo?: boolean, includeThreadInfo?: boolean, includePollDetails?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "channelUrl");
        }


        // verify required parameter 'messageTs' is not null or undefined
        if (messageTs === null || messageTs === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "messageTs");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "messageId");
        }





















        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (messageTs !== undefined) {
            requestContext.setQueryParam("message_ts", ObjectSerializer.serialize(messageTs, "number", "int64"));
        }

        // Query Params
        if (messageId !== undefined) {
            requestContext.setQueryParam("message_id", ObjectSerializer.serialize(messageId, "number", "int64"));
        }

        // Query Params
        if (prevLimit !== undefined) {
            requestContext.setQueryParam("prev_limit", ObjectSerializer.serialize(prevLimit, "number", ""));
        }

        // Query Params
        if (nextLimit !== undefined) {
            requestContext.setQueryParam("next_limit", ObjectSerializer.serialize(nextLimit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "boolean", ""));
        }

        // Query Params
        if (reverse !== undefined) {
            requestContext.setQueryParam("reverse", ObjectSerializer.serialize(reverse, "boolean", ""));
        }

        // Query Params
        if (senderId !== undefined) {
            requestContext.setQueryParam("sender_id", ObjectSerializer.serialize(senderId, "string", ""));
        }

        // Query Params
        if (senderIds !== undefined) {
            requestContext.setQueryParam("sender_ids", ObjectSerializer.serialize(senderIds, "string", ""));
        }

        // Query Params
        if (operatorFilter !== undefined) {
            requestContext.setQueryParam("operator_filter", ObjectSerializer.serialize(operatorFilter, "'all' | 'operator' | 'nonoperator'", ""));
        }

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (messageType !== undefined) {
            requestContext.setQueryParam("message_type", ObjectSerializer.serialize(messageType, "'MESG' | 'FILE' | 'ADMM'", ""));
        }

        // Query Params
        if (includingRemoved !== undefined) {
            requestContext.setQueryParam("including_removed", ObjectSerializer.serialize(includingRemoved, "boolean", ""));
        }

        // Query Params
        if (includeReactions !== undefined) {
            requestContext.setQueryParam("include_reactions", ObjectSerializer.serialize(includeReactions, "boolean", ""));
        }

        // Query Params
        if (includeReplyType !== undefined) {
            requestContext.setQueryParam("include_reply_type", ObjectSerializer.serialize(includeReplyType, "'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL'", ""));
        }

        // Query Params
        if (includeParentMessageInfo !== undefined) {
            requestContext.setQueryParam("include_parent_message_info", ObjectSerializer.serialize(includeParentMessageInfo, "boolean", ""));
        }

        // Query Params
        if (includeThreadInfo !== undefined) {
            requestContext.setQueryParam("include_thread_info", ObjectSerializer.serialize(includeThreadInfo, "boolean", ""));
        }

        // Query Params
        if (includePollDetails !== undefined) {
            requestContext.setQueryParam("include_poll_details", ObjectSerializer.serialize(includePollDetails, "boolean", ""));
        }

        // Query Params
        if (withSortedMetaArray !== undefined) {
            requestContext.setQueryParam("with_sorted_meta_array", ObjectSerializer.serialize(withSortedMetaArray, "boolean", ""));
        }

        // Query Params
        if (showSubchannelMessagesOnly !== undefined) {
            requestContext.setQueryParam("show_subchannel_messages_only", ObjectSerializer.serialize(showSubchannelMessagesOnly, "boolean", ""));
        }

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId, "string", ""));
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
     * ## Mark all messages as read  Marks all messages in a group channel as read for a specific user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/message/read-receipts/mark-all-messages-as-read-message#1-mark-all-messages-as-read
     * Mark all messages as read
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param markChannelMessagesAsReadRequest 
     */
    public async markChannelMessagesAsRead(channelUrl: string, apiToken?: string, markChannelMessagesAsReadRequest?: MarkChannelMessagesAsReadRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "markChannelMessagesAsRead", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/messages/mark_as_read'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(markChannelMessagesAsReadRequest, "MarkChannelMessagesAsReadRequest", ""),
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
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).      There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user).      2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically.      3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.       https://sendbird.com/docs/chat/platform-api/v3/message/migration/migrate-messages#1-migrate-messages
     * Migrate messages
     * @param targetChannelUrl (Required) 
     * @param apiToken 
     * @param migrateMessagesRequest 
     */
    public async migrateMessages(targetChannelUrl: string, apiToken?: string, migrateMessagesRequest?: MigrateMessagesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetChannelUrl' is not null or undefined
        if (targetChannelUrl === null || targetChannelUrl === undefined) {
            throw new RequiredError("MessageApi", "migrateMessages", "targetChannelUrl");
        }




        // Path Params
        const localVarPath = '/v3/migration/{target_channel_url}'
            .replace('{' + 'target_channel_url' + '}', encodeURIComponent(String(targetChannelUrl)));

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
            ObjectSerializer.serialize(migrateMessagesRequest, "MigrateMessagesRequest", ""),
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
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-remove-metadata#1-remove-metadata ----------------------------
     * Remove extra data from a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param keys 
     * @param apiToken 
     */
    public async removeExtraDataFromAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, keys?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromAMessage", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (keys !== undefined) {
            requestContext.setQueryParam("keys", ObjectSerializer.serialize(keys, "string", ""));
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
     * ## Send a message  You can use this action to send a text message, a file message, or an admin message to a specific channel. Sendbird Chat SDKs and the platform API allows you to upload any type of files in messages to the Sendbird server. See [Message Overview](https://sendbird.com/docs/chat/platform-api/v3/message/message-overview) for more information on each message type. Messages are sent between client devices running the Sendbird Chat SDK or UIKit as well as programmatically from businesses to their customers. For instance, a delivery app can automatically send a message like \"Arriving in one minute!\" on behalf of a delivery driver.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message#1-send-a-message ----------------------------
     * Send a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param sendAMessageRequest 
     */
    public async sendAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, sendAMessageRequest?: SendAMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "sendAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "sendAMessage", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

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
            ObjectSerializer.serialize(sendAMessageRequest, "SendAMessageRequest", ""),
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
     * ## Update a message  Updates specific information on a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/update-a-message#1-update-a-message ----------------------------
     * Update a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param updateAMessageRequest 
     */
    public async updateAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, apiToken?: string, updateAMessageRequest?: UpdateAMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "updateAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "updateAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "updateAMessage", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateAMessageRequest, "UpdateAMessageRequest", ""),
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
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-update-metadata#1-update-metadata ----------------------------
     * Update extra data in a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param updateExtraDataInAMessageRequest 
     */
    public async updateExtraDataInAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: number, apiToken?: string, updateExtraDataInAMessageRequest?: UpdateExtraDataInAMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInAMessage", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateExtraDataInAMessageRequest, "UpdateExtraDataInAMessageRequest", ""),
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

export class MessageApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addExtraDataToAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addExtraDataToAMessage(response: ResponseContext): Promise<AddExtraDataToAMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddExtraDataToAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddExtraDataToAMessageResponse", ""
            ) as AddExtraDataToAMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddExtraDataToAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddExtraDataToAMessageResponse", ""
            ) as AddExtraDataToAMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAMessage(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAMessage(response: ResponseContext): Promise<SendbirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTotalNumberOfMessagesInAChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTotalNumberOfMessagesInAChannel(response: ResponseContext): Promise<GetTotalNumberOfMessagesInAChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTotalNumberOfMessagesInAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTotalNumberOfMessagesInAChannelResponse", ""
            ) as GetTotalNumberOfMessagesInAChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetTotalNumberOfMessagesInAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTotalNumberOfMessagesInAChannelResponse", ""
            ) as GetTotalNumberOfMessagesInAChannelResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMessages(response: ResponseContext): Promise<ListMessagesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMessagesResponse", ""
            ) as ListMessagesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMessagesResponse", ""
            ) as ListMessagesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to markChannelMessagesAsRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async markChannelMessagesAsRead(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to migrateMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async migrateMessages(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to removeExtraDataFromAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeExtraDataFromAMessage(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to sendAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendAMessage(response: ResponseContext): Promise<SendbirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAMessage(response: ResponseContext): Promise<SendbirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdMessageResponse", ""
            ) as SendbirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateExtraDataInAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateExtraDataInAMessage(response: ResponseContext): Promise<UpdateExtraDataInAMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateExtraDataInAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateExtraDataInAMessageResponse", ""
            ) as UpdateExtraDataInAMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateExtraDataInAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateExtraDataInAMessageResponse", ""
            ) as UpdateExtraDataInAMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
