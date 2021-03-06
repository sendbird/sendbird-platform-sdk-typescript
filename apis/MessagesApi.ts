// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddExtraDataToMessageResponse } from '../models/AddExtraDataToMessageResponse';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddReactionToAMessageResponse } from '../models/AddReactionToAMessageResponse';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsDeliveredResponse } from '../models/GcMarkAllMessagesAsDeliveredResponse';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListReactionsOfMessageResponse } from '../models/ListReactionsOfMessageResponse';
import { RemoveReactionFromAMessageResponse } from '../models/RemoveReactionFromAMessageResponse';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendMessageData } from '../models/SendMessageData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateExtraDataInMessageResponse } from '../models/UpdateExtraDataInMessageResponse';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { ViewTotalNumberOfMessagesInChannelResponse } from '../models/ViewTotalNumberOfMessagesInChannelResponse';

/**
 * no description
 */
export class MessagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
     * Add extra data to a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param addExtraDataToMessageData 
     */
    public async addExtraDataToMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, addExtraDataToMessageData?: AddExtraDataToMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "addExtraDataToMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "addExtraDataToMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "addExtraDataToMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "addExtraDataToMessage", "messageId");
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
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addExtraDataToMessageData, "AddExtraDataToMessageData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * Add a reaction to a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param addReactionToAMessageData 
     */
    public async addReactionToAMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, addReactionToAMessageData?: AddReactionToAMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "addReactionToAMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "addReactionToAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "addReactionToAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "addReactionToAMessage", "messageId");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions'
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
            ObjectSerializer.serialize(addReactionToAMessageData, "AddReactionToAMessageData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * Delete a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     */
    public async deleteMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "deleteMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "deleteMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "deleteMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "deleteMessageById", "messageId");
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
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * Mark all messages as delivered
     * @param apiToken 
     * @param channelUrl 
     * @param gcMarkAllMessagesAsDeliveredData 
     */
    public async gcMarkAllMessagesAsDelivered(apiToken: string, channelUrl: string, gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "gcMarkAllMessagesAsDelivered", "apiToken");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "gcMarkAllMessagesAsDelivered", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/messages/mark_as_delivered'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

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
            ObjectSerializer.serialize(gcMarkAllMessagesAsDeliveredData, "GcMarkAllMessagesAsDeliveredData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param apiToken 
     * @param channelUrl 
     * @param gcMarkAllMessagesAsReadData 
     */
    public async gcMarkAllMessagesAsRead(apiToken: string, channelUrl: string, gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "gcMarkAllMessagesAsRead", "apiToken");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "gcMarkAllMessagesAsRead", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/messages/mark_as_read'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

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
            ObjectSerializer.serialize(gcMarkAllMessagesAsReadData, "GcMarkAllMessagesAsReadData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * View number of each member's unread messages
     * @param apiToken 
     * @param channelUrl 
     * @param userIds 
     */
    public async gcViewNumberOfEachMembersUnreadMessages(apiToken: string, channelUrl: string, userIds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "gcViewNumberOfEachMembersUnreadMessages", "apiToken");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "gcViewNumberOfEachMembersUnreadMessages", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/messages/unread_count'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageTs 
     * @param messageId 
     * @param prevLimit 
     * @param nextLimit 
     * @param include 
     * @param reverse 
     * @param senderId 
     * @param senderIds 
     * @param operatorFilter 
     * @param customTypes 
     * @param messageType 
     * @param includingRemoved 
     * @param includeReactions 
     * @param withSortedMetaArray 
     * @param showSubchannelMessagesOnly 
     * @param userId 
     * @param customType 
     * @param withMetaArray 
     */
    public async listMessages(apiToken: string, channelType: string, channelUrl: string, messageTs?: number, messageId?: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: string, customTypes?: string, messageType?: string, includingRemoved?: boolean, includeReactions?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, customType?: string, withMetaArray?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "listMessages", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "listMessages", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "listMessages", "channelUrl");
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
            requestContext.setQueryParam("message_ts", ObjectSerializer.serialize(messageTs, "number", ""));
        }

        // Query Params
        if (messageId !== undefined) {
            requestContext.setQueryParam("message_id", ObjectSerializer.serialize(messageId, "number", ""));
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
            requestContext.setQueryParam("operator_filter", ObjectSerializer.serialize(operatorFilter, "string", ""));
        }

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (messageType !== undefined) {
            requestContext.setQueryParam("message_type", ObjectSerializer.serialize(messageType, "string", ""));
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

        // Query Params
        if (customType !== undefined) {
            requestContext.setQueryParam("custom_type", ObjectSerializer.serialize(customType, "string", ""));
        }

        // Query Params
        if (withMetaArray !== undefined) {
            requestContext.setQueryParam("with_meta_array", ObjectSerializer.serialize(withMetaArray, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * List reactions of a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param listUsers 
     */
    public async listReactionsOfMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, listUsers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "listReactionsOfMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "listReactionsOfMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "listReactionsOfMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "listReactionsOfMessage", "messageId");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (listUsers !== undefined) {
            requestContext.setQueryParam("list_users", ObjectSerializer.serialize(listUsers, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * Remove extra data from a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param keys 
     */
    public async removeExtraDataFromMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "removeExtraDataFromMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "removeExtraDataFromMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "removeExtraDataFromMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "removeExtraDataFromMessage", "messageId");
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
            requestContext.setQueryParam("keys", ObjectSerializer.serialize(keys, "Array<string>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * Remove a reaction from a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param userId 
     * @param reaction 
     */
    public async removeReactionFromAMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, userId?: string, reaction?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "removeReactionFromAMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "removeReactionFromAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "removeReactionFromAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "removeReactionFromAMessage", "messageId");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId, "string", ""));
        }

        // Query Params
        if (reaction !== undefined) {
            requestContext.setQueryParam("reaction", ObjectSerializer.serialize(reaction, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * Send a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param sendMessageData 
     */
    public async sendMessage(apiToken: string, channelType: string, channelUrl: string, sendMessageData?: SendMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "sendMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "sendMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "sendMessage", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages'
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
            ObjectSerializer.serialize(sendMessageData, "SendMessageData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * Translate a message into other languages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param body 
     */
    public async translateMessageIntoOtherLanguages(apiToken: string, channelType: string, channelUrl: string, messageId: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "translateMessageIntoOtherLanguages", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "translateMessageIntoOtherLanguages", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "translateMessageIntoOtherLanguages", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "translateMessageIntoOtherLanguages", "messageId");
        }



        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/{message_id}/translation'
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
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * Update extra data in a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param updateExtraDataInMessageData 
     */
    public async updateExtraDataInMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, updateExtraDataInMessageData?: UpdateExtraDataInMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "updateExtraDataInMessage", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "updateExtraDataInMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "updateExtraDataInMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "updateExtraDataInMessage", "messageId");
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
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateExtraDataInMessageData, "UpdateExtraDataInMessageData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * Update a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param updateMessageByIdData 
     */
    public async updateMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, updateMessageByIdData?: UpdateMessageByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "updateMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "updateMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "updateMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "updateMessageById", "messageId");
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
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateMessageByIdData, "UpdateMessageByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * View a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param withSortedMetaArray 
     * @param withMetaArray 
     */
    public async viewMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, withSortedMetaArray?: boolean, withMetaArray?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "viewMessageById", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "viewMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "viewMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessagesApi", "viewMessageById", "messageId");
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
        if (withSortedMetaArray !== undefined) {
            requestContext.setQueryParam("with_sorted_meta_array", ObjectSerializer.serialize(withSortedMetaArray, "boolean", ""));
        }

        // Query Params
        if (withMetaArray !== undefined) {
            requestContext.setQueryParam("with_meta_array", ObjectSerializer.serialize(withMetaArray, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * View total number of messages in a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     */
    public async viewTotalNumberOfMessagesInChannel(apiToken: string, channelType: string, channelUrl: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("MessagesApi", "viewTotalNumberOfMessagesInChannel", "apiToken");
        }


        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessagesApi", "viewTotalNumberOfMessagesInChannel", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessagesApi", "viewTotalNumberOfMessagesInChannel", "channelUrl");
        }


        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/messages/total_count'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class MessagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addExtraDataToMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addExtraDataToMessage(response: ResponseContext): Promise<AddExtraDataToMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddExtraDataToMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddExtraDataToMessageResponse", ""
            ) as AddExtraDataToMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddExtraDataToMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddExtraDataToMessageResponse", ""
            ) as AddExtraDataToMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addReactionToAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addReactionToAMessage(response: ResponseContext): Promise<AddReactionToAMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddReactionToAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddReactionToAMessageResponse", ""
            ) as AddReactionToAMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddReactionToAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddReactionToAMessageResponse", ""
            ) as AddReactionToAMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMessageById(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to gcMarkAllMessagesAsDelivered
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcMarkAllMessagesAsDelivered(response: ResponseContext): Promise<GcMarkAllMessagesAsDeliveredResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GcMarkAllMessagesAsDeliveredResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcMarkAllMessagesAsDeliveredResponse", ""
            ) as GcMarkAllMessagesAsDeliveredResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GcMarkAllMessagesAsDeliveredResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcMarkAllMessagesAsDeliveredResponse", ""
            ) as GcMarkAllMessagesAsDeliveredResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcMarkAllMessagesAsRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcMarkAllMessagesAsRead(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to gcViewNumberOfEachMembersUnreadMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcViewNumberOfEachMembersUnreadMessages(response: ResponseContext): Promise<GcViewNumberOfEachMembersUnreadMessagesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GcViewNumberOfEachMembersUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcViewNumberOfEachMembersUnreadMessagesResponse", ""
            ) as GcViewNumberOfEachMembersUnreadMessagesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GcViewNumberOfEachMembersUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcViewNumberOfEachMembersUnreadMessagesResponse", ""
            ) as GcViewNumberOfEachMembersUnreadMessagesResponse;
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
     * @params response Response returned by the server for a request to listReactionsOfMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listReactionsOfMessage(response: ResponseContext): Promise<ListReactionsOfMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListReactionsOfMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReactionsOfMessageResponse", ""
            ) as ListReactionsOfMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListReactionsOfMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListReactionsOfMessageResponse", ""
            ) as ListReactionsOfMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeExtraDataFromMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeExtraDataFromMessage(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to removeReactionFromAMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeReactionFromAMessage(response: ResponseContext): Promise<RemoveReactionFromAMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveReactionFromAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveReactionFromAMessageResponse", ""
            ) as RemoveReactionFromAMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveReactionFromAMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveReactionFromAMessageResponse", ""
            ) as RemoveReactionFromAMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendMessage(response: ResponseContext): Promise<SendBirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateMessageIntoOtherLanguages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateMessageIntoOtherLanguages(response: ResponseContext): Promise<SendBirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateExtraDataInMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateExtraDataInMessage(response: ResponseContext): Promise<UpdateExtraDataInMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateExtraDataInMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateExtraDataInMessageResponse", ""
            ) as UpdateExtraDataInMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateExtraDataInMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateExtraDataInMessageResponse", ""
            ) as UpdateExtraDataInMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateMessageById(response: ResponseContext): Promise<SendBirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewMessageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewMessageById(response: ResponseContext): Promise<SendBirdMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdMessageResponse", ""
            ) as SendBirdMessageResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewTotalNumberOfMessagesInChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewTotalNumberOfMessagesInChannel(response: ResponseContext): Promise<ViewTotalNumberOfMessagesInChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewTotalNumberOfMessagesInChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewTotalNumberOfMessagesInChannelResponse", ""
            ) as ViewTotalNumberOfMessagesInChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewTotalNumberOfMessagesInChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewTotalNumberOfMessagesInChannelResponse", ""
            ) as ViewTotalNumberOfMessagesInChannelResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
