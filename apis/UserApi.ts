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


import { AddARegistrationOrDeviceTokenRequest } from '../models/AddARegistrationOrDeviceTokenRequest';
import { AddARegistrationOrDeviceTokenResponse } from '../models/AddARegistrationOrDeviceTokenResponse';
import { ChooseAPushNotificationContentTemplateRequest } from '../models/ChooseAPushNotificationContentTemplateRequest';
import { ChooseAPushNotificationContentTemplateResponse } from '../models/ChooseAPushNotificationContentTemplateResponse';
import { CreateAUserRequest } from '../models/CreateAUserRequest';
import { CreateUserTokenRequest } from '../models/CreateUserTokenRequest';
import { CreateUserTokenResponse } from '../models/CreateUserTokenResponse';
import { GetChannelInvitationPreferenceResponse } from '../models/GetChannelInvitationPreferenceResponse';
import { LeaveMyGroupChannelsRequest } from '../models/LeaveMyGroupChannelsRequest';
import { ListMyGroupChannelsResponse } from '../models/ListMyGroupChannelsResponse';
import { ListRegistrationOrDeviceTokensResponse } from '../models/ListRegistrationOrDeviceTokensResponse';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { MarkAllMessagesAsReadRequest } from '../models/MarkAllMessagesAsReadRequest';
import { RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse } from '../models/RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse';
import { RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse } from '../models/RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse';
import { SendbirdUser } from '../models/SendbirdUser';
import { UpdateAUserRequest } from '../models/UpdateAUserRequest';
import { UpdateChannelInvitationPreferenceRequest } from '../models/UpdateChannelInvitationPreferenceRequest';
import { UpdateChannelInvitationPreferenceResponse } from '../models/UpdateChannelInvitationPreferenceResponse';
import { UpdateCountPreferenceOfAChannelRequest } from '../models/UpdateCountPreferenceOfAChannelRequest';
import { UpdateCountPreferenceOfChannelByUrlResponse } from '../models/UpdateCountPreferenceOfChannelByUrlResponse';
import { UpdatePushPreferencesForAChannelRequest } from '../models/UpdatePushPreferencesForAChannelRequest';
import { UpdatePushPreferencesForAChannelResponse } from '../models/UpdatePushPreferencesForAChannelResponse';
import { UpdatePushPreferencesRequest } from '../models/UpdatePushPreferencesRequest';
import { UpdatePushPreferencesResponse } from '../models/UpdatePushPreferencesResponse';
import { ViewCountPreferenceOfAChannelResponse } from '../models/ViewCountPreferenceOfAChannelResponse';
import { ViewNumberOfChannelsWithUnreadMessagesResponse } from '../models/ViewNumberOfChannelsWithUnreadMessagesResponse';
import { ViewNumberOfUnreadMessagesResponse } from '../models/ViewNumberOfUnreadMessagesResponse';
import { ViewPushPreferencesForAChannelResponse } from '../models/ViewPushPreferencesForAChannelResponse';
import { ViewPushPreferencesResponse } from '../models/ViewPushPreferencesResponse';
import { ViewWhoOwnsARegistrationOrDeviceTokenResponseInner } from '../models/ViewWhoOwnsARegistrationOrDeviceTokenResponseInner';

/**
 * no description
 */
export class UserApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * Add a registration or device token
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param apiToken 
     * @param addARegistrationOrDeviceTokenRequest 
     */
    public async addARegistrationOrDeviceToken(userId: string, tokenType: string, apiToken?: string, addARegistrationOrDeviceTokenRequest?: AddARegistrationOrDeviceTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "addARegistrationOrDeviceToken", "userId");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "addARegistrationOrDeviceToken", "tokenType");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/{token_type}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)));

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
            ObjectSerializer.serialize(addARegistrationOrDeviceTokenRequest, "AddARegistrationOrDeviceTokenRequest", ""),
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
     * ## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template
     * Choose a push notification content template
     * @param userId (Required) 
     * @param apiToken 
     * @param chooseAPushNotificationContentTemplateRequest 
     */
    public async chooseAPushNotificationContentTemplate(userId: string, apiToken?: string, chooseAPushNotificationContentTemplateRequest?: ChooseAPushNotificationContentTemplateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "chooseAPushNotificationContentTemplate", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/push/template'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(chooseAPushNotificationContentTemplateRequest, "ChooseAPushNotificationContentTemplateRequest", ""),
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
     * ## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user
     * Create a user
     * @param apiToken 
     * @param createAUserRequest 
     */
    public async createAUser(apiToken?: string, createAUserRequest?: CreateAUserRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/users';

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
            ObjectSerializer.serialize(createAUserRequest, "CreateAUserRequest", ""),
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
     * ## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token
     * Create user token
     * @param userId (Required) 
     * @param apiToken 
     * @param createUserTokenRequest 
     */
    public async createUserToken(userId: string, apiToken?: string, createUserTokenRequest?: CreateUserTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "createUserToken", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/token'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(createUserTokenRequest, "CreateUserTokenRequest", ""),
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
     * ## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)
     * Delete a user
     * @param userId (Required) 
     * @param apiToken 
     */
    public async deleteAUser(userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "deleteAUser", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * ## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)
     * Get channel invitation preference
     * @param userId (Required) 
     * @param apiToken 
     */
    public async getChannelInvitationPreference(userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "getChannelInvitationPreference", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/channel_invitation_preference'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * ## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param userId (Required) 
     * @param apiToken 
     * @param leaveMyGroupChannelsRequest 
     */
    public async leaveMyGroupChannels(userId: string, apiToken?: string, leaveMyGroupChannelsRequest?: LeaveMyGroupChannelsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(leaveMyGroupChannelsRequest, "LeaveMyGroupChannelsRequest", ""),
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
     * ## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param userId (Required) 
     * @param apiToken 
     * @param token Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param createdAfter Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @param createdBefore Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @param showEmpty 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMetadata 
     * @param showFrozen 
     * @param order 
     * @param metadataOrderKey Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param customTypeStartswith Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @param channelUrls Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param name Specifies one or more group channel names.
     * @param nameContains Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param nameStartswith Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param membersExactlyIn Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param membersIncludeIn Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param queryType Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @param membersNickname Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @param membersNicknameContains Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @param metadataKey Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @param metadataValues Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metadataValueStartswith Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metacounterKey Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @param metacounterValues Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param includeSortedMetaarrayInLastMessage Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @param customType (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded.
     * @param readReceipt (Deprecated) Superseded by show_read_receipt.
     * @param member (Deprecated) Superseded by show_member.
     * @param isDistinct (Deprecated) Superseded by distinct_mode.
     * @param membersIn (Deprecated) Superseded by members_exactly_in.
     * @param userId2 (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead.
     */
    public async listMyGroupChannels(userId: string, apiToken: string, token?: string, limit?: number, distinctMode?: 'all' | 'distinct' | 'nondistinct', publicMode?: 'all' | 'private' | 'public', superMode?: 'all' | 'super' | 'nonsuper', createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical', metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId2?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "listMyGroupChannels", "userId");
        }


        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("UserApi", "listMyGroupChannels", "apiToken");
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
            requestContext.setQueryParam("distinct_mode", ObjectSerializer.serialize(distinctMode, "'all' | 'distinct' | 'nondistinct'", ""));
        }

        // Query Params
        if (publicMode !== undefined) {
            requestContext.setQueryParam("public_mode", ObjectSerializer.serialize(publicMode, "'all' | 'private' | 'public'", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "'all' | 'super' | 'nonsuper'", ""));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "number", "int64"));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "number", "int64"));
        }

        // Query Params
        if (showEmpty !== undefined) {
            requestContext.setQueryParam("show_empty", ObjectSerializer.serialize(showEmpty, "boolean", ""));
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
        if (showMetadata !== undefined) {
            requestContext.setQueryParam("show_metadata", ObjectSerializer.serialize(showMetadata, "boolean", ""));
        }

        // Query Params
        if (showFrozen !== undefined) {
            requestContext.setQueryParam("show_frozen", ObjectSerializer.serialize(showFrozen, "boolean", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical'", ""));
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
        if (includeSortedMetaarrayInLastMessage !== undefined) {
            requestContext.setQueryParam("include_sorted_metaarray_in_last_message", ObjectSerializer.serialize(includeSortedMetaarrayInLastMessage, "boolean", ""));
        }

        // Query Params
        if (customType !== undefined) {
            requestContext.setQueryParam("custom_type", ObjectSerializer.serialize(customType, "string", ""));
        }

        // Query Params
        if (readReceipt !== undefined) {
            requestContext.setQueryParam("read_receipt", ObjectSerializer.serialize(readReceipt, "boolean", ""));
        }

        // Query Params
        if (member !== undefined) {
            requestContext.setQueryParam("member", ObjectSerializer.serialize(member, "boolean", ""));
        }

        // Query Params
        if (isDistinct !== undefined) {
            requestContext.setQueryParam("is_distinct", ObjectSerializer.serialize(isDistinct, "boolean", ""));
        }

        // Query Params
        if (membersIn !== undefined) {
            requestContext.setQueryParam("members_in", ObjectSerializer.serialize(membersIn, "string", ""));
        }

        // Query Params
        if (userId2 !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId2, "string", ""));
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
     * ## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens
     * List registration or device tokens
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param apiToken 
     */
    public async listRegistrationOrDeviceTokens(userId: string, tokenType: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users
     * List users
     * @param token 
     * @param limit 
     * @param activeMode Specifies the activation status of the users in the list. Acceptable values are &#x60;activated&#x60;, &#x60;deactivated&#x60;, and &#x60;all&#x60;. (Default: &#x60;activated&#x60;)
     * @param showBot Determines whether to include bots in the list. (Default: true)
     * @param userIds Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids&#x3D;urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
     * @param nickname 
     * @param nicknameStartswith 
     * @param metadatakey 
     * @param metadatavaluesIn Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, &#x60;?metadatavalues_in&#x3D;urlencoded_value_1, urlencoded_value_2&#x60;). This parameter should be specified in conjunction with the &#x60;metadatakey&#x60; above.
     * @param apiToken 
     */
    public async listUsers(token?: string, limit?: number, activeMode?: 'activated' | 'deactivated' | 'all', showBot?: boolean, userIds?: string, nickname?: string, nicknameStartswith?: string, metadatakey?: string, metadatavaluesIn?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











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
            requestContext.setQueryParam("active_mode", ObjectSerializer.serialize(activeMode, "'activated' | 'deactivated' | 'all'", ""));
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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * Mark all messages as read
     * @param userId (Required) 
     * @param apiToken 
     * @param markAllMessagesAsReadRequest 
     */
    public async markAllMessagesAsRead(userId: string, apiToken?: string, markAllMessagesAsReadRequest?: MarkAllMessagesAsReadRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(markAllMessagesAsReadRequest, "MarkAllMessagesAsReadRequest", ""),
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
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner
     * Remove a registration or device token from an owner
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public async removeARegistrationOrDeviceTokenFromAnOwner(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenFromAnOwner", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenFromAnOwner", "token");
        }



        // Path Params
        const localVarPath = '/v3/push/device_tokens/{token_type}/{token}'
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

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
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering a specific token
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public async removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken(userId: string, tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken", "userId");
        }


        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken", "token");
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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering all device tokens
     * @param userId (Required) 
     * @param apiToken 
     */
    public async removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens(userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens", "userId");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * ## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)
     * Reset push preferences
     * @param userId (Required) 
     * @param apiToken 
     */
    public async resetPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)
     * Update a user
     * @param userId (Required) 
     * @param apiToken 
     * @param updateAUserRequest 
     */
    public async updateAUser(userId: string, apiToken?: string, updateAUserRequest?: UpdateAUserRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updateAUser", "userId");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
            ObjectSerializer.serialize(updateAUserRequest, "UpdateAUserRequest", ""),
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
     * ## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference
     * Update channel invitation preference
     * @param userId (Required) 
     * @param apiToken 
     * @param updateChannelInvitationPreferenceRequest 
     */
    public async updateChannelInvitationPreference(userId: string, apiToken?: string, updateChannelInvitationPreferenceRequest?: UpdateChannelInvitationPreferenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateChannelInvitationPreferenceRequest, "UpdateChannelInvitationPreferenceRequest", ""),
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
     * ## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel
     * Update count preference of a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updateCountPreferenceOfAChannelRequest 
     */
    public async updateCountPreferenceOfAChannel(userId: string, channelUrl: string, apiToken?: string, updateCountPreferenceOfAChannelRequest?: UpdateCountPreferenceOfAChannelRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updateCountPreferenceOfAChannel", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "updateCountPreferenceOfAChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/count_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
            ObjectSerializer.serialize(updateCountPreferenceOfAChannelRequest, "UpdateCountPreferenceOfAChannelRequest", ""),
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
     * ## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)
     * Update push preferences
     * @param userId (Required) 
     * @param apiToken 
     * @param updatePushPreferencesRequest 
     */
    public async updatePushPreferences(userId: string, apiToken?: string, updatePushPreferencesRequest?: UpdatePushPreferencesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePushPreferencesRequest, "UpdatePushPreferencesRequest", ""),
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
     * ## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)
     * Update push preferences for a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updatePushPreferencesForAChannelRequest 
     */
    public async updatePushPreferencesForAChannel(userId: string, channelUrl: string, apiToken?: string, updatePushPreferencesForAChannelRequest?: UpdatePushPreferencesForAChannelRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferencesForAChannel", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "updatePushPreferencesForAChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
            ObjectSerializer.serialize(updatePushPreferencesForAChannelRequest, "UpdatePushPreferencesForAChannelRequest", ""),
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
     * ## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param userId (Required) 
     * @param includeUnreadCount 
     * @param customTypes 
     * @param superMode Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. This parameter should be specified in conjunction with &#x60;include_unread_count&#x60; above. (Default: &#x60;all&#x60;)
     * @param apiToken 
     */
    public async viewAUser(userId: string, includeUnreadCount?: boolean, customTypes?: string, superMode?: 'all' | 'super' | 'nonsuper', apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewAUser", "userId");
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
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "'all' | 'super' | 'nonsuper'", ""));
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
     * ## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel
     * View count preference of a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public async viewCountPreferenceOfAChannel(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewCountPreferenceOfAChannel", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "viewCountPreferenceOfAChannel", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/count_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
     * ## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages
     * View number of channels with unread messages
     * @param userId (Required) 
     * @param customTypes 
     * @param superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
     * @param apiToken 
     */
    public async viewNumberOfChannelsWithUnreadMessages(userId: string, customTypes?: string, superMode?: 'all' | 'super' | 'nonsuper', apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "'all' | 'super' | 'nonsuper'", ""));
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
     * ## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.
     * View number of unread messages
     * @param userId (Required) 
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. (Default: &#x60;all&#x60;)
     * @param apiToken 
     */
    public async viewNumberOfUnreadMessages(userId: string, customTypes?: string, superMode?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)
     * View push preferences
     * @param userId (Required) 
     * @param apiToken 
     */
    public async viewPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

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
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)
     * View push preferences for a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public async viewPushPreferencesForAChannel(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferencesForAChannel", "userId");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("UserApi", "viewPushPreferencesForAChannel", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/users/{user_id}/push_preference/{channel_url}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)))
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
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public async viewWhoOwnsARegistrationOrDeviceToken(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tokenType' is not null or undefined
        if (tokenType === null || tokenType === undefined) {
            throw new RequiredError("UserApi", "viewWhoOwnsARegistrationOrDeviceToken", "tokenType");
        }


        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("UserApi", "viewWhoOwnsARegistrationOrDeviceToken", "token");
        }



        // Path Params
        const localVarPath = '/v3/push/device_tokens/{token_type}/{token}'
            .replace('{' + 'token_type' + '}', encodeURIComponent(String(tokenType)))
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

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

}

export class UserApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addARegistrationOrDeviceToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addARegistrationOrDeviceToken(response: ResponseContext): Promise<AddARegistrationOrDeviceTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddARegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddARegistrationOrDeviceTokenResponse", ""
            ) as AddARegistrationOrDeviceTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddARegistrationOrDeviceTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddARegistrationOrDeviceTokenResponse", ""
            ) as AddARegistrationOrDeviceTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to chooseAPushNotificationContentTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async chooseAPushNotificationContentTemplate(response: ResponseContext): Promise<ChooseAPushNotificationContentTemplateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChooseAPushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChooseAPushNotificationContentTemplateResponse", ""
            ) as ChooseAPushNotificationContentTemplateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChooseAPushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChooseAPushNotificationContentTemplateResponse", ""
            ) as ChooseAPushNotificationContentTemplateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAUser(response: ResponseContext): Promise<SendbirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUserToken(response: ResponseContext): Promise<CreateUserTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateUserTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateUserTokenResponse", ""
            ) as CreateUserTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateUserTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateUserTokenResponse", ""
            ) as CreateUserTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAUser(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getChannelInvitationPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChannelInvitationPreference(response: ResponseContext): Promise<GetChannelInvitationPreferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChannelInvitationPreferenceResponse", ""
            ) as GetChannelInvitationPreferenceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChannelInvitationPreferenceResponse", ""
            ) as GetChannelInvitationPreferenceResponse;
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
     public async leaveMyGroupChannels(response: ResponseContext): Promise<any > {
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
     public async markAllMessagesAsRead(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to removeARegistrationOrDeviceTokenFromAnOwner
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeARegistrationOrDeviceTokenFromAnOwner(response: ResponseContext): Promise<Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>", ""
            ) as Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>", ""
            ) as Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken(response: ResponseContext): Promise<RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse", ""
            ) as RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse", ""
            ) as RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens(response: ResponseContext): Promise<RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse", ""
            ) as RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse", ""
            ) as RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse;
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
     public async resetPushPreferences(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to updateAUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAUser(response: ResponseContext): Promise<SendbirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
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
     * @params response Response returned by the server for a request to updateCountPreferenceOfAChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCountPreferenceOfAChannel(response: ResponseContext): Promise<UpdateCountPreferenceOfChannelByUrlResponse > {
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
     * @params response Response returned by the server for a request to updatePushPreferencesForAChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePushPreferencesForAChannel(response: ResponseContext): Promise<UpdatePushPreferencesForAChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePushPreferencesForAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesForAChannelResponse", ""
            ) as UpdatePushPreferencesForAChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePushPreferencesForAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushPreferencesForAChannelResponse", ""
            ) as UpdatePushPreferencesForAChannelResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewAUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewAUser(response: ResponseContext): Promise<SendbirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendbirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendbirdUser", ""
            ) as SendbirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewCountPreferenceOfAChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewCountPreferenceOfAChannel(response: ResponseContext): Promise<ViewCountPreferenceOfAChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewCountPreferenceOfAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewCountPreferenceOfAChannelResponse", ""
            ) as ViewCountPreferenceOfAChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewCountPreferenceOfAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewCountPreferenceOfAChannelResponse", ""
            ) as ViewCountPreferenceOfAChannelResponse;
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
     * @params response Response returned by the server for a request to viewPushPreferencesForAChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewPushPreferencesForAChannel(response: ResponseContext): Promise<ViewPushPreferencesForAChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewPushPreferencesForAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesForAChannelResponse", ""
            ) as ViewPushPreferencesForAChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewPushPreferencesForAChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushPreferencesForAChannelResponse", ""
            ) as ViewPushPreferencesForAChannelResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewWhoOwnsARegistrationOrDeviceToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewWhoOwnsARegistrationOrDeviceToken(response: ResponseContext): Promise<Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>", ""
            ) as Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>", ""
            ) as Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
