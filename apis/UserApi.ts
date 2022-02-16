// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { AddRegistrationOrDeviceTokenData } from '../models/AddRegistrationOrDeviceTokenData';
import { AddRegistrationOrDeviceTokenResponse } from '../models/AddRegistrationOrDeviceTokenResponse';
import { BanFromChannelsWithCustomChannelTypesData } from '../models/BanFromChannelsWithCustomChannelTypesData';
import { BlockUserData } from '../models/BlockUserData';
import { ChoosePushNotificationContentTemplateResponse } from '../models/ChoosePushNotificationContentTemplateResponse';
import { CreateUserData } from '../models/CreateUserData';
import { LeaveMyGroupChannelsData } from '../models/LeaveMyGroupChannelsData';
import { ListBannedChannelsResponse } from '../models/ListBannedChannelsResponse';
import { ListBlockedUsersResponse } from '../models/ListBlockedUsersResponse';
import { ListMutedChannelsResponse } from '../models/ListMutedChannelsResponse';
import { ListMyGroupChannelsResponse } from '../models/ListMyGroupChannelsResponse';
import { ListRegistrationOrDeviceTokensResponse } from '../models/ListRegistrationOrDeviceTokensResponse';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { MarkAllMessagesAsReadData } from '../models/MarkAllMessagesAsReadData';
import { MuteInChannelsWithCustomChannelTypesData } from '../models/MuteInChannelsWithCustomChannelTypesData';
import { RegisterAsOperatorToChannelsWithCustomChannelTypesData } from '../models/RegisterAsOperatorToChannelsWithCustomChannelTypesData';
import { RemoveRegistrationOrDeviceTokenByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenByTokenResponse';
import { RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse';
import { RemoveRegistrationOrDeviceTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenResponse';
import { SendBirdUser } from '../models/SendBirdUser';
import { UpdateChannelInvitationPreferenceData } from '../models/UpdateChannelInvitationPreferenceData';
import { UpdateChannelInvitationPreferenceResponse } from '../models/UpdateChannelInvitationPreferenceResponse';
import { UpdateCountPreferenceOfChannelByUrlData } from '../models/UpdateCountPreferenceOfChannelByUrlData';
import { UpdateCountPreferenceOfChannelByUrlResponse } from '../models/UpdateCountPreferenceOfChannelByUrlResponse';
import { UpdatePushPreferencesData } from '../models/UpdatePushPreferencesData';
import { UpdatePushPreferencesForChannelByUrlData } from '../models/UpdatePushPreferencesForChannelByUrlData';
import { UpdatePushPreferencesForChannelByUrlResponse } from '../models/UpdatePushPreferencesForChannelByUrlResponse';
import { UpdatePushPreferencesResponse } from '../models/UpdatePushPreferencesResponse';
import { UpdateUserByIdData } from '../models/UpdateUserByIdData';
import { ViewChannelInvitationPreferenceResponse } from '../models/ViewChannelInvitationPreferenceResponse';
import { ViewCountPreferenceOfChannelByUrlResponse } from '../models/ViewCountPreferenceOfChannelByUrlResponse';
import { ViewNumberOfChannelsByJoinStatusResponse } from '../models/ViewNumberOfChannelsByJoinStatusResponse';
import { ViewNumberOfChannelsWithUnreadMessagesResponse } from '../models/ViewNumberOfChannelsWithUnreadMessagesResponse';
import { ViewNumberOfUnreadItemsResponse } from '../models/ViewNumberOfUnreadItemsResponse';
import { ViewNumberOfUnreadMessagesResponse } from '../models/ViewNumberOfUnreadMessagesResponse';
import { ViewPushPreferencesForChannelByUrlResponse } from '../models/ViewPushPreferencesForChannelByUrlResponse';
import { ViewPushPreferencesResponse } from '../models/ViewPushPreferencesResponse';
import { ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse } from '../models/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse';

/**
 * no description
 */
export class UserApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * Add a registration or device token
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     * @param addRegistrationOrDeviceTokenData 
     */
    public async addRegistrationOrDeviceToken(apiToken: string, userId: string, tokenType: string, addRegistrationOrDeviceTokenData?: AddRegistrationOrDeviceTokenData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "addRegistrationOrDeviceToken", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "addRegistrationOrDeviceToken", "userId");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "addRegistrationOrDeviceToken", "tokenType");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/{token_type}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)));

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
            ObjectSerializer.serialize(addRegistrationOrDeviceTokenData, "AddRegistrationOrDeviceTokenData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * Ban from channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param banFromChannelsWithCustomChannelTypesData 
     */
    public async banFromChannelsWithCustomChannelTypes(apiToken: string, userId: string, banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "banFromChannelsWithCustomChannelTypes", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "banFromChannelsWithCustomChannelTypes", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/banned_channel_custom_types'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(banFromChannelsWithCustomChannelTypesData, "BanFromChannelsWithCustomChannelTypesData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * Block a user
     * @param apiToken 
     * @param userId 
     * @param blockUserData 
     */
    public async blockUser(apiToken: string, userId: string, blockUserData?: BlockUserData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "blockUser", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "blockUser", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/block'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(blockUserData, "BlockUserData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * Choose a push notification content template
     * @param apiToken 
     * @param userId 
     * @param body 
     */
    public async choosePushNotificationContentTemplate(apiToken: string, userId: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "choosePushNotificationContentTemplate", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "choosePushNotificationContentTemplate", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/template'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * Create a user
     * @param apiToken 
     * @param createUserData 
     */
    public async createUser(apiToken: string, createUserData?: CreateUserData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "createUser", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/users';

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
            ObjectSerializer.serialize(createUserData, "CreateUserData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * Delete a user
     * @param apiToken 
     * @param userId 
     */
    public async deleteUserById(apiToken: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "deleteUserById", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "deleteUserById", "userId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param apiToken 
     * @param userId 
     * @param leaveMyGroupChannelsData 
     */
    public async leaveMyGroupChannels(apiToken: string, userId: string, leaveMyGroupChannelsData?: LeaveMyGroupChannelsData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "leaveMyGroupChannels", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "leaveMyGroupChannels", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/my_group_channels/leave'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(leaveMyGroupChannelsData, "LeaveMyGroupChannelsData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List banned channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     */
    public async listBannedChannels(apiToken: string, userId: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listBannedChannels", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listBannedChannels", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/ban'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     * @param userIds 
     * @param metadatakey 
     * @param metadatavaluesIn 
     */
    public async listBlockedUsers(apiToken: string, userId: string, token?: string, limit?: number, userIds?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listBlockedUsers", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listBlockedUsers", "userId");
        }







        // Path Params
        const localVarPath = '/v3/users/{user_id}/block'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "string", ""));
        }

        // Query Params
        if (metadatakey !== undefined) {
            requestContext.setQueryParam("metadatakey", ObjectSerializer.serialize(metadatakey, "string", ""));
        }

        // Query Params
        if (metadatavaluesIn !== undefined) {
            requestContext.setQueryParam("metadatavalues_in", ObjectSerializer.serialize(metadatavaluesIn, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List muted channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     */
    public async listMutedChannels(apiToken: string, userId: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listMutedChannels", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listMutedChannels", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/mute'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param hiddenMode 
     * @param memberStateFilter 
     * @param unreadFilter 
     * @param createdAfter 
     * @param createdBefore 
     * @param showEmpty 
     * @param showFrozen 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param order 
     * @param metadataOrderKey 
     * @param customTypes 
     * @param customTypeStartswith 
     * @param channelUrls 
     * @param name 
     * @param nameContains 
     * @param nameStartswith 
     * @param membersExactlyIn 
     * @param membersIncludeIn 
     * @param queryType 
     * @param membersNickname 
     * @param membersNicknameContains 
     * @param searchQuery 
     * @param searchFields 
     * @param metadataKey 
     * @param metadataValues 
     * @param metadataValueStartswith 
     * @param metacounterKey 
     * @param metacounterValues 
     * @param metacounterValueGt 
     * @param metacounterValueGte 
     * @param metacounterValueLt 
     * @param metacounterValueLte 
     * @param customType 
     */
    public async listMyGroupChannels(apiToken: string, userId: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, hiddenMode?: string, memberStateFilter?: string, unreadFilter?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showFrozen?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, searchQuery?: string, searchFields?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, customType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listMyGroupChannels", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listMyGroupChannels", "userId");
        }










































        // Path Params
        const localVarPath = '/v3/users/{user_id}/my_group_channels'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
        if (distinctMode !== undefined) {
            requestContext.setQueryParam("distinct_mode", ObjectSerializer.serialize(distinctMode, "string", ""));
        }

        // Query Params
        if (publicMode !== undefined) {
            requestContext.setQueryParam("public_mode", ObjectSerializer.serialize(publicMode, "string", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "string", ""));
        }

        // Query Params
        if (hiddenMode !== undefined) {
            requestContext.setQueryParam("hidden_mode", ObjectSerializer.serialize(hiddenMode, "string", ""));
        }

        // Query Params
        if (memberStateFilter !== undefined) {
            requestContext.setQueryParam("member_state_filter", ObjectSerializer.serialize(memberStateFilter, "string", ""));
        }

        // Query Params
        if (unreadFilter !== undefined) {
            requestContext.setQueryParam("unread_filter", ObjectSerializer.serialize(unreadFilter, "string", ""));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "number", ""));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "number", ""));
        }

        // Query Params
        if (showEmpty !== undefined) {
            requestContext.setQueryParam("show_empty", ObjectSerializer.serialize(showEmpty, "boolean", ""));
        }

        // Query Params
        if (showFrozen !== undefined) {
            requestContext.setQueryParam("show_frozen", ObjectSerializer.serialize(showFrozen, "boolean", ""));
        }

        // Query Params
        if (showMember !== undefined) {
            requestContext.setQueryParam("show_member", ObjectSerializer.serialize(showMember, "boolean", ""));
        }

        // Query Params
        if (showDeliveryReceipt !== undefined) {
            requestContext.setQueryParam("show_delivery_receipt", ObjectSerializer.serialize(showDeliveryReceipt, "boolean", ""));
        }

        // Query Params
        if (showReadReceipt !== undefined) {
            requestContext.setQueryParam("show_read_receipt", ObjectSerializer.serialize(showReadReceipt, "boolean", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Query Params
        if (metadataOrderKey !== undefined) {
            requestContext.setQueryParam("metadata_order_key", ObjectSerializer.serialize(metadataOrderKey, "string", ""));
        }

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (customTypeStartswith !== undefined) {
            requestContext.setQueryParam("custom_type_startswith", ObjectSerializer.serialize(customTypeStartswith, "string", ""));
        }

        // Query Params
        if (channelUrls !== undefined) {
            requestContext.setQueryParam("channel_urls", ObjectSerializer.serialize(channelUrls, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (nameContains !== undefined) {
            requestContext.setQueryParam("name_contains", ObjectSerializer.serialize(nameContains, "string", ""));
        }

        // Query Params
        if (nameStartswith !== undefined) {
            requestContext.setQueryParam("name_startswith", ObjectSerializer.serialize(nameStartswith, "string", ""));
        }

        // Query Params
        if (membersExactlyIn !== undefined) {
            requestContext.setQueryParam("members_exactly_in", ObjectSerializer.serialize(membersExactlyIn, "string", ""));
        }

        // Query Params
        if (membersIncludeIn !== undefined) {
            requestContext.setQueryParam("members_include_in", ObjectSerializer.serialize(membersIncludeIn, "string", ""));
        }

        // Query Params
        if (queryType !== undefined) {
            requestContext.setQueryParam("query_type", ObjectSerializer.serialize(queryType, "string", ""));
        }

        // Query Params
        if (membersNickname !== undefined) {
            requestContext.setQueryParam("members_nickname", ObjectSerializer.serialize(membersNickname, "string", ""));
        }

        // Query Params
        if (membersNicknameContains !== undefined) {
            requestContext.setQueryParam("members_nickname_contains", ObjectSerializer.serialize(membersNicknameContains, "string", ""));
        }

        // Query Params
        if (searchQuery !== undefined) {
            requestContext.setQueryParam("search_query", ObjectSerializer.serialize(searchQuery, "string", ""));
        }

        // Query Params
        if (searchFields !== undefined) {
            requestContext.setQueryParam("search_fields", ObjectSerializer.serialize(searchFields, "string", ""));
        }

        // Query Params
        if (metadataKey !== undefined) {
            requestContext.setQueryParam("metadata_key", ObjectSerializer.serialize(metadataKey, "string", ""));
        }

        // Query Params
        if (metadataValues !== undefined) {
            requestContext.setQueryParam("metadata_values", ObjectSerializer.serialize(metadataValues, "string", ""));
        }

        // Query Params
        if (metadataValueStartswith !== undefined) {
            requestContext.setQueryParam("metadata_value_startswith", ObjectSerializer.serialize(metadataValueStartswith, "string", ""));
        }

        // Query Params
        if (metacounterKey !== undefined) {
            requestContext.setQueryParam("metacounter_key", ObjectSerializer.serialize(metacounterKey, "string", ""));
        }

        // Query Params
        if (metacounterValues !== undefined) {
            requestContext.setQueryParam("metacounter_values", ObjectSerializer.serialize(metacounterValues, "string", ""));
        }

        // Query Params
        if (metacounterValueGt !== undefined) {
            requestContext.setQueryParam("metacounter_value_gt", ObjectSerializer.serialize(metacounterValueGt, "string", ""));
        }

        // Query Params
        if (metacounterValueGte !== undefined) {
            requestContext.setQueryParam("metacounter_value_gte", ObjectSerializer.serialize(metacounterValueGte, "string", ""));
        }

        // Query Params
        if (metacounterValueLt !== undefined) {
            requestContext.setQueryParam("metacounter_value_lt", ObjectSerializer.serialize(metacounterValueLt, "string", ""));
        }

        // Query Params
        if (metacounterValueLte !== undefined) {
            requestContext.setQueryParam("metacounter_value_lte", ObjectSerializer.serialize(metacounterValueLte, "string", ""));
        }

        // Query Params
        if (customType !== undefined) {
            requestContext.setQueryParam("custom_type", ObjectSerializer.serialize(customType, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * List registration or device tokens
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     */
    public async listRegistrationOrDeviceTokens(apiToken: string, userId: string, tokenType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listRegistrationOrDeviceTokens", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listRegistrationOrDeviceTokens", "userId");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "listRegistrationOrDeviceTokens", "tokenType");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/{token_type}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * List users
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param activeMode 
     * @param showBot 
     * @param userIds 
     * @param nickname 
     * @param nicknameStartswith 
     * @param metadatakey 
     * @param metadatavaluesIn 
     */
    public async listUsers(apiToken: string, token?: string, limit?: number, activeMode?: string, showBot?: boolean, userIds?: string, nickname?: string, nicknameStartswith?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listUsers", "apiToken");
        }











        // Path Params
        const localVarPath = '/v3/users';

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
        if (activeMode !== undefined) {
            requestContext.setQueryParam("active_mode", ObjectSerializer.serialize(activeMode, "string", ""));
        }

        // Query Params
        if (showBot !== undefined) {
            requestContext.setQueryParam("show_bot", ObjectSerializer.serialize(showBot, "boolean", ""));
        }

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "string", ""));
        }

        // Query Params
        if (nickname !== undefined) {
            requestContext.setQueryParam("nickname", ObjectSerializer.serialize(nickname, "string", ""));
        }

        // Query Params
        if (nicknameStartswith !== undefined) {
            requestContext.setQueryParam("nickname_startswith", ObjectSerializer.serialize(nicknameStartswith, "string", ""));
        }

        // Query Params
        if (metadatakey !== undefined) {
            requestContext.setQueryParam("metadatakey", ObjectSerializer.serialize(metadatakey, "string", ""));
        }

        // Query Params
        if (metadatavaluesIn !== undefined) {
            requestContext.setQueryParam("metadatavalues_in", ObjectSerializer.serialize(metadatavaluesIn, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param apiToken 
     * @param userId 
     * @param markAllMessagesAsReadData 
     */
    public async markAllMessagesAsRead(apiToken: string, userId: string, markAllMessagesAsReadData?: MarkAllMessagesAsReadData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "markAllMessagesAsRead", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "markAllMessagesAsRead", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/mark_as_read_all'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(markAllMessagesAsReadData, "MarkAllMessagesAsReadData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * Mute in channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param muteInChannelsWithCustomChannelTypesData 
     */
    public async muteInChannelsWithCustomChannelTypes(apiToken: string, userId: string, muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "muteInChannelsWithCustomChannelTypes", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "muteInChannelsWithCustomChannelTypes", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/muted_channel_custom_types'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(muteInChannelsWithCustomChannelTypesData, "MuteInChannelsWithCustomChannelTypesData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * Register as an operator to channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param registerAsOperatorToChannelsWithCustomChannelTypesData 
     */
    public async registerAsOperatorToChannelsWithCustomChannelTypes(apiToken: string, userId: string, registerAsOperatorToChannelsWithCustomChannelTypesData?: RegisterAsOperatorToChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "registerAsOperatorToChannelsWithCustomChannelTypes", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "registerAsOperatorToChannelsWithCustomChannelTypes", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/operating_channel_custom_types'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(registerAsOperatorToChannelsWithCustomChannelTypesData, "RegisterAsOperatorToChannelsWithCustomChannelTypesData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering all device tokens
     * @param apiToken 
     * @param userId 
     */
    public async removeRegistrationOrDeviceToken(apiToken: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceToken", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceToken", "userId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering a specific token
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     * @param token 
     */
    public async removeRegistrationOrDeviceTokenByToken(apiToken: string, userId: string, tokenType: string, token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenByToken", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenByToken", "userId");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenByToken", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenByToken", "token");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/{token_type}/{token}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * Remove a registration or device token from an owner
     * @param apiToken 
     * @param tokenType 
     * @param token 
     */
    public async removeRegistrationOrDeviceTokenFromOwnerByToken(apiToken: string, tokenType: string, token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenFromOwnerByToken", "apiToken");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenFromOwnerByToken", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "removeRegistrationOrDeviceTokenFromOwnerByToken", "token");
        }


        // Path Params
        const localVarPath = '/v3/push/device_tokens/{token_type}/{token}'
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * Reset push preferences
     * @param apiToken 
     * @param userId 
     */
    public async resetPushPreferences(apiToken: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "resetPushPreferences", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "resetPushPreferences", "userId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * Unblock a user
     * @param apiToken 
     * @param userId 
     * @param targetId 
     */
    public async unblockUserById(apiToken: string, userId: string, targetId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "unblockUserById", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "unblockUserById", "userId");
        }


        // verify required parameter 'targetId' is not null or undefined
        if (targetId === null || targetId === undefined) {
            throw new RequiredError("UserApi", "unblockUserById", "targetId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/block/{target_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'target_id' + '}', encodeURIComponent(String(targetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * Update channel invitation preference
     * @param apiToken 
     * @param userId 
     * @param updateChannelInvitationPreferenceData 
     */
    public async updateChannelInvitationPreference(apiToken: string, userId: string, updateChannelInvitationPreferenceData?: UpdateChannelInvitationPreferenceData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "updateChannelInvitationPreference", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updateChannelInvitationPreference", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/channel_invitation_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(updateChannelInvitationPreferenceData, "UpdateChannelInvitationPreferenceData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * Update count preference of a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     * @param updateCountPreferenceOfChannelByUrlData 
     */
    public async updateCountPreferenceOfChannelByUrl(apiToken: string, userId: string, channelUrl: string, updateCountPreferenceOfChannelByUrlData?: UpdateCountPreferenceOfChannelByUrlData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "updateCountPreferenceOfChannelByUrl", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updateCountPreferenceOfChannelByUrl", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "updateCountPreferenceOfChannelByUrl", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/count_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
            ObjectSerializer.serialize(updateCountPreferenceOfChannelByUrlData, "UpdateCountPreferenceOfChannelByUrlData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * Update push preferences
     * @param apiToken 
     * @param userId 
     * @param updatePushPreferencesData 
     */
    public async updatePushPreferences(apiToken: string, userId: string, updatePushPreferencesData?: UpdatePushPreferencesData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferences", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferences", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(updatePushPreferencesData, "UpdatePushPreferencesData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * Update push preferences for a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     * @param updatePushPreferencesForChannelByUrlData 
     */
    public async updatePushPreferencesForChannelByUrl(apiToken: string, userId: string, channelUrl: string, updatePushPreferencesForChannelByUrlData?: UpdatePushPreferencesForChannelByUrlData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferencesForChannelByUrl", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferencesForChannelByUrl", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferencesForChannelByUrl", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
            ObjectSerializer.serialize(updatePushPreferencesForChannelByUrlData, "UpdatePushPreferencesForChannelByUrlData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * Update a user
     * @param apiToken 
     * @param userId 
     * @param updateUserByIdData 
     */
    public async updateUserById(apiToken: string, userId: string, updateUserByIdData?: UpdateUserByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "updateUserById", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updateUserById", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(updateUserByIdData, "UpdateUserByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * View channel invitation preference
     * @param apiToken 
     * @param userId 
     */
    public async viewChannelInvitationPreference(apiToken: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewChannelInvitationPreference", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewChannelInvitationPreference", "userId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/channel_invitation_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * View count preference of a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     */
    public async viewCountPreferenceOfChannelByUrl(apiToken: string, userId: string, channelUrl: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewCountPreferenceOfChannelByUrl", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewCountPreferenceOfChannelByUrl", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "viewCountPreferenceOfChannelByUrl", "channelUrl");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/count_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of channels by join status
     * @param apiToken 
     * @param userId 
     * @param state 
     */
    public async viewNumberOfChannelsByJoinStatus(apiToken: string, userId: string, state?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfChannelsByJoinStatus", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfChannelsByJoinStatus", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/group_channel_count'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * View number of channels with unread messages
     * @param apiToken 
     * @param userId 
     * @param customTypes 
     * @param superMode 
     */
    public async viewNumberOfChannelsWithUnreadMessages(apiToken: string, userId: string, customTypes?: Array<string>, superMode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfChannelsWithUnreadMessages", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfChannelsWithUnreadMessages", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/unread_channel_count'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "Array<string>", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * View number of unread items
     * @param apiToken 
     * @param userId 
     * @param customType 
     * @param itemKeys 
     */
    public async viewNumberOfUnreadItems(apiToken: string, userId: string, customType?: string, itemKeys?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfUnreadItems", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfUnreadItems", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/unread_item_count'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (customType !== undefined) {
            requestContext.setQueryParam("custom_type", ObjectSerializer.serialize(customType, "string", ""));
        }

        // Query Params
        if (itemKeys !== undefined) {
            requestContext.setQueryParam("item_keys", ObjectSerializer.serialize(itemKeys, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of unread messages
     * @param apiToken 
     * @param userId 
     * @param customTypes 
     * @param superMode 
     */
    public async viewNumberOfUnreadMessages(apiToken: string, userId: string, customTypes?: string, superMode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfUnreadMessages", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewNumberOfUnreadMessages", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/unread_message_count'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * View push preferences
     * @param apiToken 
     * @param userId 
     */
    public async viewPushPreferences(apiToken: string, userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferences", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferences", "userId");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * View push preferences for a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     */
    public async viewPushPreferencesForChannelByUrl(apiToken: string, userId: string, channelUrl: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferencesForChannelByUrl", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferencesForChannelByUrl", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferencesForChannelByUrl", "channelUrl");
        }


        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param apiToken 
     * @param userId 
     * @param includeUnreadCount 
     * @param customTypes 
     * @param superMode 
     */
    public async viewUserById(apiToken: string, userId: string, includeUnreadCount?: boolean, customTypes?: string, superMode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewUserById", "apiToken");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewUserById", "userId");
        }





        // Path Params
        const localVarPath = '/v3/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeUnreadCount !== undefined) {
            requestContext.setQueryParam("include_unread_count", ObjectSerializer.serialize(includeUnreadCount, "boolean", ""));
        }

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param apiToken 
     * @param tokenType 
     * @param token 
     */
    public async viewWhoOwnsRegistrationOrDeviceTokenByToken(apiToken: string, tokenType: string, token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "viewWhoOwnsRegistrationOrDeviceTokenByToken", "apiToken");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "viewWhoOwnsRegistrationOrDeviceTokenByToken", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "viewWhoOwnsRegistrationOrDeviceTokenByToken", "token");
        }


        // Path Params
        const localVarPath = '/v3/push/device_tokens/{token_type}/{token}'
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class UserApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRegistrationOrDeviceToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addRegistrationOrDeviceToken(response: ResponseContext): Promise<AddRegistrationOrDeviceTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddRegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddRegistrationOrDeviceTokenResponse", ""
            ) as AddRegistrationOrDeviceTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddRegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddRegistrationOrDeviceTokenResponse", ""
            ) as AddRegistrationOrDeviceTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to banFromChannelsWithCustomChannelTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async banFromChannelsWithCustomChannelTypes(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to blockUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockUser(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to choosePushNotificationContentTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async choosePushNotificationContentTemplate(response: ResponseContext): Promise<ChoosePushNotificationContentTemplateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChoosePushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChoosePushNotificationContentTemplateResponse", ""
            ) as ChoosePushNotificationContentTemplateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChoosePushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChoosePushNotificationContentTemplateResponse", ""
            ) as ChoosePushNotificationContentTemplateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUser(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUserById(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to leaveMyGroupChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async leaveMyGroupChannels(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to listBannedChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBannedChannels(response: ResponseContext): Promise<ListBannedChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListBannedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBannedChannelsResponse", ""
            ) as ListBannedChannelsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListBannedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBannedChannelsResponse", ""
            ) as ListBannedChannelsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBlockedUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBlockedUsers(response: ResponseContext): Promise<ListBlockedUsersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListBlockedUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBlockedUsersResponse", ""
            ) as ListBlockedUsersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListBlockedUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListBlockedUsersResponse", ""
            ) as ListBlockedUsersResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMutedChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMutedChannels(response: ResponseContext): Promise<ListMutedChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMutedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMutedChannelsResponse", ""
            ) as ListMutedChannelsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListMutedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMutedChannelsResponse", ""
            ) as ListMutedChannelsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMyGroupChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMyGroupChannels(response: ResponseContext): Promise<ListMyGroupChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMyGroupChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMyGroupChannelsResponse", ""
            ) as ListMyGroupChannelsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListMyGroupChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMyGroupChannelsResponse", ""
            ) as ListMyGroupChannelsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRegistrationOrDeviceTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRegistrationOrDeviceTokens(response: ResponseContext): Promise<ListRegistrationOrDeviceTokensResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRegistrationOrDeviceTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRegistrationOrDeviceTokensResponse", ""
            ) as ListRegistrationOrDeviceTokensResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListRegistrationOrDeviceTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRegistrationOrDeviceTokensResponse", ""
            ) as ListRegistrationOrDeviceTokensResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUsers(response: ResponseContext): Promise<ListUsersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListUsersResponse", ""
            ) as ListUsersResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to markAllMessagesAsRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async markAllMessagesAsRead(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to muteInChannelsWithCustomChannelTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async muteInChannelsWithCustomChannelTypes(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to registerAsOperatorToChannelsWithCustomChannelTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerAsOperatorToChannelsWithCustomChannelTypes(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to removeRegistrationOrDeviceToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeRegistrationOrDeviceToken(response: ResponseContext): Promise<RemoveRegistrationOrDeviceTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveRegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveRegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRegistrationOrDeviceTokenByToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeRegistrationOrDeviceTokenByToken(response: ResponseContext): Promise<RemoveRegistrationOrDeviceTokenByTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveRegistrationOrDeviceTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenByTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenByTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveRegistrationOrDeviceTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenByTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenByTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRegistrationOrDeviceTokenFromOwnerByToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeRegistrationOrDeviceTokenFromOwnerByToken(response: ResponseContext): Promise<RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse", ""
            ) as RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetPushPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resetPushPreferences(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to unblockUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unblockUserById(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to updateChannelInvitationPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateChannelInvitationPreference(response: ResponseContext): Promise<UpdateChannelInvitationPreferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateChannelInvitationPreferenceResponse", ""
            ) as UpdateChannelInvitationPreferenceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateChannelInvitationPreferenceResponse", ""
            ) as UpdateChannelInvitationPreferenceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCountPreferenceOfChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCountPreferenceOfChannelByUrl(response: ResponseContext): Promise<UpdateCountPreferenceOfChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateCountPreferenceOfChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCountPreferenceOfChannelByUrlResponse", ""
            ) as UpdateCountPreferenceOfChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateCountPreferenceOfChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCountPreferenceOfChannelByUrlResponse", ""
            ) as UpdateCountPreferenceOfChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePushPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePushPreferences(response: ResponseContext): Promise<UpdatePushPreferencesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePushPreferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesResponse", ""
            ) as UpdatePushPreferencesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePushPreferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesResponse", ""
            ) as UpdatePushPreferencesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePushPreferencesForChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePushPreferencesForChannelByUrl(response: ResponseContext): Promise<UpdatePushPreferencesForChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePushPreferencesForChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesForChannelByUrlResponse", ""
            ) as UpdatePushPreferencesForChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePushPreferencesForChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesForChannelByUrlResponse", ""
            ) as UpdatePushPreferencesForChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUserById(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewChannelInvitationPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewChannelInvitationPreference(response: ResponseContext): Promise<ViewChannelInvitationPreferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewChannelInvitationPreferenceResponse", ""
            ) as ViewChannelInvitationPreferenceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewChannelInvitationPreferenceResponse", ""
            ) as ViewChannelInvitationPreferenceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewCountPreferenceOfChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewCountPreferenceOfChannelByUrl(response: ResponseContext): Promise<ViewCountPreferenceOfChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewCountPreferenceOfChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewCountPreferenceOfChannelByUrlResponse", ""
            ) as ViewCountPreferenceOfChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewCountPreferenceOfChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewCountPreferenceOfChannelByUrlResponse", ""
            ) as ViewCountPreferenceOfChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfChannelsByJoinStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfChannelsByJoinStatus(response: ResponseContext): Promise<ViewNumberOfChannelsByJoinStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfChannelsByJoinStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfChannelsByJoinStatusResponse", ""
            ) as ViewNumberOfChannelsByJoinStatusResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfChannelsByJoinStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfChannelsByJoinStatusResponse", ""
            ) as ViewNumberOfChannelsByJoinStatusResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfChannelsWithUnreadMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfChannelsWithUnreadMessages(response: ResponseContext): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfChannelsWithUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfChannelsWithUnreadMessagesResponse", ""
            ) as ViewNumberOfChannelsWithUnreadMessagesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfChannelsWithUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfChannelsWithUnreadMessagesResponse", ""
            ) as ViewNumberOfChannelsWithUnreadMessagesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfUnreadItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfUnreadItems(response: ResponseContext): Promise<ViewNumberOfUnreadItemsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfUnreadItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfUnreadItemsResponse", ""
            ) as ViewNumberOfUnreadItemsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfUnreadItemsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfUnreadItemsResponse", ""
            ) as ViewNumberOfUnreadItemsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewNumberOfUnreadMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewNumberOfUnreadMessages(response: ResponseContext): Promise<ViewNumberOfUnreadMessagesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewNumberOfUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfUnreadMessagesResponse", ""
            ) as ViewNumberOfUnreadMessagesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewNumberOfUnreadMessagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewNumberOfUnreadMessagesResponse", ""
            ) as ViewNumberOfUnreadMessagesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewPushPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewPushPreferences(response: ResponseContext): Promise<ViewPushPreferencesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewPushPreferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesResponse", ""
            ) as ViewPushPreferencesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewPushPreferencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesResponse", ""
            ) as ViewPushPreferencesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewPushPreferencesForChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewPushPreferencesForChannelByUrl(response: ResponseContext): Promise<ViewPushPreferencesForChannelByUrlResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewPushPreferencesForChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesForChannelByUrlResponse", ""
            ) as ViewPushPreferencesForChannelByUrlResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewPushPreferencesForChannelByUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesForChannelByUrlResponse", ""
            ) as ViewPushPreferencesForChannelByUrlResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewUserById(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewWhoOwnsRegistrationOrDeviceTokenByToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewWhoOwnsRegistrationOrDeviceTokenByToken(response: ResponseContext): Promise<ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse", ""
            ) as ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse", ""
            ) as ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
