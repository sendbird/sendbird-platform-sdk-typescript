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


import { AddEmojiCategoriesResponse } from '../models/AddEmojiCategoriesResponse';
import { AddEmojisData } from '../models/AddEmojisData';
import { AddEmojisResponse } from '../models/AddEmojisResponse';
import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddExtraDataToMessageResponse } from '../models/AddExtraDataToMessageResponse';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddReactionToAMessageResponse } from '../models/AddReactionToAMessageResponse';
import { EnableReactionsData } from '../models/EnableReactionsData';
import { EnableReactionsResponse } from '../models/EnableReactionsResponse';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsDeliveredResponse } from '../models/GcMarkAllMessagesAsDeliveredResponse';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
import { ListAllEmojisAndEmojiCategoriesResponse } from '../models/ListAllEmojisAndEmojiCategoriesResponse';
import { ListAnnouncementsResponse } from '../models/ListAnnouncementsResponse';
import { ListEmojisResponse } from '../models/ListEmojisResponse';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListReactionsOfMessageResponse } from '../models/ListReactionsOfMessageResponse';
import { RemoveReactionFromAMessageResponse } from '../models/RemoveReactionFromAMessageResponse';
import { SendBirdEmoji } from '../models/SendBirdEmoji';
import { SendBirdEmojiCategory } from '../models/SendBirdEmojiCategory';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendMessageData } from '../models/SendMessageData';
import { TranslateMessageIntoOtherLanguagesData } from '../models/TranslateMessageIntoOtherLanguagesData';
import { UpdateEmojiCategoryUrlByIdData } from '../models/UpdateEmojiCategoryUrlByIdData';
import { UpdateEmojiUrlByKeyData } from '../models/UpdateEmojiUrlByKeyData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateExtraDataInMessageResponse } from '../models/UpdateExtraDataInMessageResponse';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { UseDefaultEmojisData } from '../models/UseDefaultEmojisData';
import { UseDefaultEmojisResponse } from '../models/UseDefaultEmojisResponse';
import { ViewTotalNumberOfMessagesInChannelResponse } from '../models/ViewTotalNumberOfMessagesInChannelResponse';

/**
 * no description
 */
export class MessageApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
     * Add emoji categories
     * @param apiToken 
     * @param body 
     */
    public async addEmojiCategories(apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/emoji_categories';

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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * Add emojis
     * @param apiToken 
     * @param addEmojisData 
     */
    public async addEmojis(apiToken?: string, addEmojisData?: AddEmojisData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/emojis';

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
            ObjectSerializer.serialize(addEmojisData, "AddEmojisData", ""),
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
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
     * Add extra data to a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param addExtraDataToMessageData 
     */
    public async addExtraDataToMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addExtraDataToMessageData?: AddExtraDataToMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "addExtraDataToMessage", "messageId");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * Add a reaction to a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param addReactionToAMessageData 
     */
    public async addReactionToAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addReactionToAMessageData?: AddReactionToAMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "addReactionToAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "addReactionToAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "addReactionToAMessage", "messageId");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * Delete an emoji
     * @param emojiKey 
     * @param apiToken 
     */
    public async deleteEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiKey' is not null or undefined
        if (emojiKey === null || emojiKey === undefined) {
            throw new RequiredError("MessageApi", "deleteEmojiByKey", "emojiKey");
        }



        // Path Params
        const localVarPath = '/v3/emojis/{emoji_key}'
            .replace('{' + 'emoji_key' + '}', encodeURIComponent(String(emojiKey)));

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
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * Delete an emoji category
     * @param emojiCategoryId 
     * @param apiToken 
     */
    public async deleteEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiCategoryId' is not null or undefined
        if (emojiCategoryId === null || emojiCategoryId === undefined) {
            throw new RequiredError("MessageApi", "deleteEmojiCategoryById", "emojiCategoryId");
        }



        // Path Params
        const localVarPath = '/v3/emoji_categories/{emoji_category_id}'
            .replace('{' + 'emoji_category_id' + '}', encodeURIComponent(String(emojiCategoryId)));

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
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * Delete a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     */
    public async deleteMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "deleteMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "deleteMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "deleteMessageById", "messageId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * Enable reactions
     * @param apiToken 
     * @param enableReactionsData 
     */
    public async enableReactions(apiToken?: string, enableReactionsData?: EnableReactionsData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/settings/reactions';

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
            ObjectSerializer.serialize(enableReactionsData, "EnableReactionsData", ""),
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
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * Mark all messages as delivered
     * @param channelUrl 
     * @param apiToken 
     * @param gcMarkAllMessagesAsDeliveredData 
     */
    public async gcMarkAllMessagesAsDelivered(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "gcMarkAllMessagesAsDelivered", "channelUrl");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param channelUrl 
     * @param apiToken 
     * @param gcMarkAllMessagesAsReadData 
     */
    public async gcMarkAllMessagesAsRead(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "gcMarkAllMessagesAsRead", "channelUrl");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * View number of each member's unread messages
     * @param channelUrl 
     * @param apiToken 
     * @param userIds 
     */
    public async gcViewNumberOfEachMembersUnreadMessages(channelUrl: string, apiToken?: string, userIds?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "gcViewNumberOfEachMembersUnreadMessages", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/messages/unread_count'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "Array<string>", ""));
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
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * Get an emoji
     * @param emojiKey 
     * @param apiToken 
     */
    public async getEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiKey' is not null or undefined
        if (emojiKey === null || emojiKey === undefined) {
            throw new RequiredError("MessageApi", "getEmojiByKey", "emojiKey");
        }



        // Path Params
        const localVarPath = '/v3/emojis/{emoji_key}'
            .replace('{' + 'emoji_key' + '}', encodeURIComponent(String(emojiKey)));

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
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * Get an emoji category
     * @param emojiCategoryId 
     * @param apiToken 
     */
    public async getEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiCategoryId' is not null or undefined
        if (emojiCategoryId === null || emojiCategoryId === undefined) {
            throw new RequiredError("MessageApi", "getEmojiCategoryById", "emojiCategoryId");
        }



        // Path Params
        const localVarPath = '/v3/emoji_categories/{emoji_category_id}'
            .replace('{' + 'emoji_category_id' + '}', encodeURIComponent(String(emojiCategoryId)));

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
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * List all emojis and emoji categories
     * @param apiToken 
     */
    public async listAllEmojisAndEmojiCategories(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/emoji_categories';

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
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * List announcements
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param order 
     * @param status 
     * @param announcementGroup 
     */
    public async listAnnouncements(apiToken?: string, token?: string, limit?: number, order?: string, status?: string, announcementGroup?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * List emojis
     * @param apiToken 
     */
    public async listEmojis(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/emojis';

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
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
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
     * @param includeReplyType One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL
     * @param includeParentMessageInfo 
     * @param withSortedMetaArray 
     * @param showSubchannelMessagesOnly 
     * @param userId 
     * @param customType 
     * @param withMetaArray 
     */
    public async listMessages(channelType: string, channelUrl: string, apiToken?: string, messageTs?: string, messageId?: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: string, customTypes?: string, messageType?: string, includingRemoved?: boolean, includeReactions?: boolean, includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL', includeParentMessageInfo?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, customType?: string, withMetaArray?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "listMessages", "channelUrl");
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
            requestContext.setQueryParam("message_ts", ObjectSerializer.serialize(messageTs, "string", ""));
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
        if (includeReplyType !== undefined) {
            requestContext.setQueryParam("include_reply_type", ObjectSerializer.serialize(includeReplyType, "'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL'", ""));
        }

        // Query Params
        if (includeParentMessageInfo !== undefined) {
            requestContext.setQueryParam("include_parent_message_info", ObjectSerializer.serialize(includeParentMessageInfo, "boolean", ""));
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * List reactions of a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param listUsers 
     */
    public async listReactionsOfMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, listUsers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "listReactionsOfMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "listReactionsOfMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "listReactionsOfMessage", "messageId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * Migrate messages
     * @param targetChannelUrl 
     * @param apiToken 
     * @param body 
     */
    public async migrateMessagesByUrl(targetChannelUrl: string, apiToken?: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'targetChannelUrl' is not null or undefined
        if (targetChannelUrl === null || targetChannelUrl === undefined) {
            throw new RequiredError("MessageApi", "migrateMessagesByUrl", "targetChannelUrl");
        }




        // Path Params
        const localVarPath = '/v3/migration/{target_channel_url}'
            .replace('{' + 'target_channel_url' + '}', encodeURIComponent(String(targetChannelUrl)));

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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * Remove extra data from a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param keys 
     */
    public async removeExtraDataFromMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, keys?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "removeExtraDataFromMessage", "messageId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * Remove a reaction from a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param userId 
     * @param reaction 
     */
    public async removeReactionFromAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, userId?: string, reaction?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "removeReactionFromAMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "removeReactionFromAMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "removeReactionFromAMessage", "messageId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * Send a message
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param sendMessageData 
     */
    public async sendMessage(channelType: string, channelUrl: string, apiToken?: string, sendMessageData?: SendMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "sendMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "sendMessage", "channelUrl");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * Translate a message into other languages
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param translateMessageIntoOtherLanguagesData 
     */
    public async translateMessageIntoOtherLanguages(channelType: string, channelUrl: string, messageId: string, apiToken?: string, translateMessageIntoOtherLanguagesData?: TranslateMessageIntoOtherLanguagesData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "translateMessageIntoOtherLanguages", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "translateMessageIntoOtherLanguages", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "translateMessageIntoOtherLanguages", "messageId");
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
            ObjectSerializer.serialize(translateMessageIntoOtherLanguagesData, "TranslateMessageIntoOtherLanguagesData", ""),
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
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * Update an emoji category URL
     * @param emojiCategoryId 
     * @param apiToken 
     * @param updateEmojiCategoryUrlByIdData 
     */
    public async updateEmojiCategoryUrlById(emojiCategoryId: string, apiToken?: string, updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiCategoryId' is not null or undefined
        if (emojiCategoryId === null || emojiCategoryId === undefined) {
            throw new RequiredError("MessageApi", "updateEmojiCategoryUrlById", "emojiCategoryId");
        }




        // Path Params
        const localVarPath = '/v3/emoji_categories/{emoji_category_id}'
            .replace('{' + 'emoji_category_id' + '}', encodeURIComponent(String(emojiCategoryId)));

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
            ObjectSerializer.serialize(updateEmojiCategoryUrlByIdData, "UpdateEmojiCategoryUrlByIdData", ""),
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
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * Update an emoji URL
     * @param emojiKey 
     * @param apiToken 
     * @param updateEmojiUrlByKeyData 
     */
    public async updateEmojiUrlByKey(emojiKey: string, apiToken?: string, updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emojiKey' is not null or undefined
        if (emojiKey === null || emojiKey === undefined) {
            throw new RequiredError("MessageApi", "updateEmojiUrlByKey", "emojiKey");
        }




        // Path Params
        const localVarPath = '/v3/emojis/{emoji_key}'
            .replace('{' + 'emoji_key' + '}', encodeURIComponent(String(emojiKey)));

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
            ObjectSerializer.serialize(updateEmojiUrlByKeyData, "UpdateEmojiUrlByKeyData", ""),
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
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * Update extra data in a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param updateExtraDataInMessageData 
     */
    public async updateExtraDataInMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateExtraDataInMessageData?: UpdateExtraDataInMessageData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInMessage", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInMessage", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "updateExtraDataInMessage", "messageId");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * Update a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param updateMessageByIdData 
     */
    public async updateMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateMessageByIdData?: UpdateMessageByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "updateMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "updateMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "updateMessageById", "messageId");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * Use default emojis
     * @param apiToken 
     * @param useDefaultEmojisData 
     */
    public async useDefaultEmojis(apiToken?: string, useDefaultEmojisData?: UseDefaultEmojisData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/settings/use_default_emoji';

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
            ObjectSerializer.serialize(useDefaultEmojisData, "UseDefaultEmojisData", ""),
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
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * View a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param withSortedMetaArray 
     * @param withMetaArray 
     * @param includeParentMessageInfo 
     */
    public async viewMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, withSortedMetaArray?: boolean, withMetaArray?: boolean, includeParentMessageInfo?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "viewMessageById", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "viewMessageById", "channelUrl");
        }


        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("MessageApi", "viewMessageById", "messageId");
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

        // Query Params
        if (includeParentMessageInfo !== undefined) {
            requestContext.setQueryParam("include_parent_message_info", ObjectSerializer.serialize(includeParentMessageInfo, "boolean", ""));
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
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * View total number of messages in a channel
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     */
    public async viewTotalNumberOfMessagesInChannel(channelType: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MessageApi", "viewTotalNumberOfMessagesInChannel", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MessageApi", "viewTotalNumberOfMessagesInChannel", "channelUrl");
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
     * @params response Response returned by the server for a request to addEmojiCategories
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addEmojiCategories(response: ResponseContext): Promise<AddEmojiCategoriesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddEmojiCategoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEmojiCategoriesResponse", ""
            ) as AddEmojiCategoriesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddEmojiCategoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEmojiCategoriesResponse", ""
            ) as AddEmojiCategoriesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addEmojis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addEmojis(response: ResponseContext): Promise<AddEmojisResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEmojisResponse", ""
            ) as AddEmojisResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddEmojisResponse", ""
            ) as AddEmojisResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
     * @params response Response returned by the server for a request to deleteEmojiByKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmojiByKey(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmojiCategoryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmojiCategoryById(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to enableReactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableReactions(response: ResponseContext): Promise<EnableReactionsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnableReactionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnableReactionsResponse", ""
            ) as EnableReactionsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EnableReactionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnableReactionsResponse", ""
            ) as EnableReactionsResponse;
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
     * @params response Response returned by the server for a request to getEmojiByKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmojiByKey(response: ResponseContext): Promise<SendBirdEmoji > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdEmoji = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmoji", ""
            ) as SendBirdEmoji;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdEmoji = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmoji", ""
            ) as SendBirdEmoji;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmojiCategoryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmojiCategoryById(response: ResponseContext): Promise<SendBirdEmojiCategory > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdEmojiCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmojiCategory", ""
            ) as SendBirdEmojiCategory;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdEmojiCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmojiCategory", ""
            ) as SendBirdEmojiCategory;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllEmojisAndEmojiCategories
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAllEmojisAndEmojiCategories(response: ResponseContext): Promise<ListAllEmojisAndEmojiCategoriesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAllEmojisAndEmojiCategoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAllEmojisAndEmojiCategoriesResponse", ""
            ) as ListAllEmojisAndEmojiCategoriesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAllEmojisAndEmojiCategoriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAllEmojisAndEmojiCategoriesResponse", ""
            ) as ListAllEmojisAndEmojiCategoriesResponse;
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
     * @params response Response returned by the server for a request to listEmojis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listEmojis(response: ResponseContext): Promise<ListEmojisResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEmojisResponse", ""
            ) as ListEmojisResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEmojisResponse", ""
            ) as ListEmojisResponse;
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
     * @params response Response returned by the server for a request to migrateMessagesByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async migrateMessagesByUrl(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
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
     * @params response Response returned by the server for a request to updateEmojiCategoryUrlById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmojiCategoryUrlById(response: ResponseContext): Promise<SendBirdEmojiCategory > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdEmojiCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmojiCategory", ""
            ) as SendBirdEmojiCategory;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdEmojiCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmojiCategory", ""
            ) as SendBirdEmojiCategory;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmojiUrlByKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmojiUrlByKey(response: ResponseContext): Promise<SendBirdEmoji > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdEmoji = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmoji", ""
            ) as SendBirdEmoji;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdEmoji = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdEmoji", ""
            ) as SendBirdEmoji;
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
     * @params response Response returned by the server for a request to useDefaultEmojis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async useDefaultEmojis(response: ResponseContext): Promise<UseDefaultEmojisResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UseDefaultEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UseDefaultEmojisResponse", ""
            ) as UseDefaultEmojisResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UseDefaultEmojisResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UseDefaultEmojisResponse", ""
            ) as UseDefaultEmojisResponse;
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
