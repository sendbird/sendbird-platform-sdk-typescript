# Sendbird.UserApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addARegistrationOrDeviceToken**](UserApi.md#addARegistrationOrDeviceToken) | **POST** /v3/users/{user_id}/push/{token_type} | Add a registration or device token
[**chooseAPushNotificationContentTemplate**](UserApi.md#chooseAPushNotificationContentTemplate) | **PUT** /v3/users/{user_id}/push/template | Choose a push notification content template
[**createAUser**](UserApi.md#createAUser) | **POST** /v3/users | Create a user
[**createUserToken**](UserApi.md#createUserToken) | **POST** /v3/users/{user_id}/token | Create user token
[**deleteAUser**](UserApi.md#deleteAUser) | **DELETE** /v3/users/{user_id} | Delete a user
[**getChannelInvitationPreference**](UserApi.md#getChannelInvitationPreference) | **GET** /v3/users/{user_id}/channel_invitation_preference | Get channel invitation preference
[**leaveMyGroupChannels**](UserApi.md#leaveMyGroupChannels) | **PUT** /v3/users/{user_id}/my_group_channels/leave | Leave my group channels
[**listMyGroupChannels**](UserApi.md#listMyGroupChannels) | **GET** /v3/users/{user_id}/my_group_channels | List my group channels
[**listRegistrationOrDeviceTokens**](UserApi.md#listRegistrationOrDeviceTokens) | **GET** /v3/users/{user_id}/push/{token_type} | List registration or device tokens
[**listUsers**](UserApi.md#listUsers) | **GET** /v3/users | List users
[**markAllMessagesAsRead**](UserApi.md#markAllMessagesAsRead) | **PUT** /v3/users/{user_id}/mark_as_read_all | Mark all messages as read
[**removeARegistrationOrDeviceTokenFromAnOwner**](UserApi.md#removeARegistrationOrDeviceTokenFromAnOwner) | **DELETE** /v3/push/device_tokens/{token_type}/{token} | Remove a registration or device token from an owner
[**removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken**](UserApi.md#removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken) | **DELETE** /v3/users/{user_id}/push/{token_type}/{token} | Remove a registration or device token - When unregistering a specific token
[**removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens**](UserApi.md#removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens) | **DELETE** /v3/users/{user_id}/push | Remove a registration or device token - When unregistering all device tokens
[**resetPushPreferences**](UserApi.md#resetPushPreferences) | **DELETE** /v3/users/{user_id}/push_preference | Reset push preferences
[**updateAUser**](UserApi.md#updateAUser) | **PUT** /v3/users/{user_id} | Update a user
[**updateChannelInvitationPreference**](UserApi.md#updateChannelInvitationPreference) | **PUT** /v3/users/{user_id}/channel_invitation_preference | Update channel invitation preference
[**updateCountPreferenceOfAChannel**](UserApi.md#updateCountPreferenceOfAChannel) | **PUT** /v3/users/{user_id}/count_preference/{channel_url} | Update count preference of a channel
[**updatePushPreferences**](UserApi.md#updatePushPreferences) | **PUT** /v3/users/{user_id}/push_preference | Update push preferences
[**updatePushPreferencesForAChannel**](UserApi.md#updatePushPreferencesForAChannel) | **PUT** /v3/users/{user_id}/push_preference/{channel_url} | Update push preferences for a channel
[**viewAUser**](UserApi.md#viewAUser) | **GET** /v3/users/{user_id} | View a user
[**viewCountPreferenceOfAChannel**](UserApi.md#viewCountPreferenceOfAChannel) | **GET** /v3/users/{user_id}/count_preference/{channel_url} | View count preference of a channel
[**viewNumberOfChannelsWithUnreadMessages**](UserApi.md#viewNumberOfChannelsWithUnreadMessages) | **GET** /v3/users/{user_id}/unread_channel_count | View number of channels with unread messages
[**viewNumberOfUnreadMessages**](UserApi.md#viewNumberOfUnreadMessages) | **GET** /v3/users/{user_id}/unread_message_count | View number of unread messages
[**viewPushPreferences**](UserApi.md#viewPushPreferences) | **GET** /v3/users/{user_id}/push_preference | View push preferences
[**viewPushPreferencesForAChannel**](UserApi.md#viewPushPreferencesForAChannel) | **GET** /v3/users/{user_id}/push_preference/{channel_url} | View push preferences for a channel
[**viewWhoOwnsARegistrationOrDeviceToken**](UserApi.md#viewWhoOwnsARegistrationOrDeviceToken) | **GET** /v3/push/device_tokens/{token_type}/{token} | View who owns a registration or device token


# **addARegistrationOrDeviceToken**
> AddARegistrationOrDeviceTokenResponse addARegistrationOrDeviceToken()

## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiAddARegistrationOrDeviceTokenRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  tokenType: "token_type_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AddARegistrationOrDeviceTokenRequest (optional)
  addARegistrationOrDeviceTokenRequest: {
    apnsDeviceToken: "apnsDeviceToken_example",
    gcmRegToken: "gcmRegToken_example",
    huaweiDeviceToken: "huaweiDeviceToken_example",
  },
};

apiInstance.addARegistrationOrDeviceToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addARegistrationOrDeviceTokenRequest** | **AddARegistrationOrDeviceTokenRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **tokenType** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AddARegistrationOrDeviceTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **chooseAPushNotificationContentTemplate**
> ChooseAPushNotificationContentTemplateResponse chooseAPushNotificationContentTemplate()

## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiChooseAPushNotificationContentTemplateRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // ChooseAPushNotificationContentTemplateRequest (optional)
  chooseAPushNotificationContentTemplateRequest: {
    name: "name_example",
  },
};

apiInstance.chooseAPushNotificationContentTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chooseAPushNotificationContentTemplateRequest** | **ChooseAPushNotificationContentTemplateRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ChooseAPushNotificationContentTemplateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAUser**
> SendbirdUser createAUser()

## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiCreateAUserRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateAUserRequest (optional)
  createAUserRequest: {
    discoveryKeys: [
      "discoveryKeys_example",
    ],
    issueAccessToken: true,
    metadata: {},
    nickname: "nickname_example",
    profileFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    profileUrl: "profileUrl_example",
    userId: "userId_example",
  },
};

apiInstance.createAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAUserRequest** | **CreateAUserRequest**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUserToken**
> CreateUserTokenResponse createUserToken()

## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiCreateUserTokenRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateUserTokenRequest (optional)
  createUserTokenRequest: {
    expiresAt: 1,
  },
};

apiInstance.createUserToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserTokenRequest** | **CreateUserTokenRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CreateUserTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAUser**
> any deleteAUser()

## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiDeleteAUserRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChannelInvitationPreference**
> GetChannelInvitationPreferenceResponse getChannelInvitationPreference()

## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiGetChannelInvitationPreferenceRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getChannelInvitationPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetChannelInvitationPreferenceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **leaveMyGroupChannels**
> any leaveMyGroupChannels()

## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiLeaveMyGroupChannelsRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // LeaveMyGroupChannelsRequest (optional)
  leaveMyGroupChannelsRequest: {
    customType: "customType_example",
  },
};

apiInstance.leaveMyGroupChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leaveMyGroupChannelsRequest** | **LeaveMyGroupChannelsRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMyGroupChannels**
> ListMyGroupChannelsResponse listMyGroupChannels()

## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListMyGroupChannelsRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string
  apiToken: "{{API_TOKEN}}",
  // string | Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0. (optional)
  token: "token_example",
  // number | Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10) (optional)
  limit: 10,
  // 'all' | 'distinct' | 'nondistinct' (optional)
  distinctMode: "all",
  // 'all' | 'private' | 'public' (optional)
  publicMode: "all",
  // 'all' | 'super' | 'nonsuper' (optional)
  superMode: "all",
  // number | Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format. (optional)
  createdAfter: 1234567890123,
  // number | Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format. (optional)
  createdBefore: 1234567890123,
  // boolean (optional)
  showEmpty: false,
  // boolean (optional)
  showMember: false,
  // boolean (optional)
  showDeliveryReceipt: false,
  // boolean (optional)
  showReadReceipt: false,
  // boolean (optional)
  showMetadata: false,
  // boolean (optional)
  showFrozen: false,
  // 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical' (optional)
  order: "chronological",
  // string | Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key. (optional)
  metadataOrderKey: "metadata_order_key_example",
  // string | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. (optional)
  customTypes: "custom_types_example",
  // string | Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended. (optional)
  customTypeStartswith: "custom_type_startswith_example",
  // string | Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended. (optional)
  channelUrls: "channel_urls_example",
  // string | Specifies one or more group channel names. (optional)
  name: "name_example",
  // string | Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. (optional)
  nameContains: "name_contains_example",
  // string | Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. (optional)
  nameStartswith: "name_startswith_example",
  // string | Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. (optional)
  membersExactlyIn: "members_exactly_in_example",
  // string | Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. (optional)
  membersIncludeIn: "members_include_in_example",
  // string | Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND) (optional)
  queryType: "query_type_example",
  // string | Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended. (optional)
  membersNickname: "members_nickname_example",
  // string | Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues. (optional)
  membersNicknameContains: "members_nickname_contains_example",
  // string | Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified. (optional)
  metadataKey: "metadata_key_example",
  // string | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified. (optional)
  metadataValues: "metadata_values_example",
  // string | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified. (optional)
  metadataValueStartswith: "metadata_value_startswith_example",
  // string | Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified. (optional)
  metacounterKey: "metacounter_key_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValues: "metacounter_values_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueGt: "metacounter_value_gt_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueGte: "metacounter_value_gte_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueLt: "metacounter_value_lt_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueLte: "metacounter_value_lte_example",
  // boolean | Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response. (optional)
  includeSortedMetaarrayInLastMessage: false,
  // string | (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded. (optional)
  customType: "ANNOUNCEMENT",
  // boolean | (Deprecated) Superseded by show_read_receipt. (optional)
  readReceipt: false,
  // boolean | (Deprecated) Superseded by show_member. (optional)
  member: true,
  // boolean | (Deprecated) Superseded by distinct_mode. (optional)
  isDistinct: true,
  // string | (Deprecated) Superseded by members_exactly_in. (optional)
  membersIn: "members_in_example",
  // string | (Deprecated) Restricts the search scope to only retrieve the target user's group channels. It's recommended to use the list group channels by user action instead. (optional)
  userId2: "user_id_example",
};

apiInstance.listMyGroupChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | defaults to undefined
 **token** | [**string**] | Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0. | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10) | (optional) defaults to undefined
 **distinctMode** | [**&#39;all&#39; | &#39;distinct&#39; | &#39;nondistinct&#39;**]**Array<&#39;all&#39; &#124; &#39;distinct&#39; &#124; &#39;nondistinct&#39;>** |  | (optional) defaults to undefined
 **publicMode** | [**&#39;all&#39; | &#39;private&#39; | &#39;public&#39;**]**Array<&#39;all&#39; &#124; &#39;private&#39; &#124; &#39;public&#39;>** |  | (optional) defaults to undefined
 **superMode** | [**&#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;**]**Array<&#39;all&#39; &#124; &#39;super&#39; &#124; &#39;nonsuper&#39;>** |  | (optional) defaults to undefined
 **createdAfter** | [**number**] | Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format. | (optional) defaults to undefined
 **createdBefore** | [**number**] | Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format. | (optional) defaults to undefined
 **showEmpty** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showMetadata** | [**boolean**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] |  | (optional) defaults to undefined
 **order** | [**&#39;chronological&#39; | &#39;latest_last_message&#39; | &#39;channel_name_alphabetical&#39; | &#39;metadata_value_alphabetical&#39;**]**Array<&#39;chronological&#39; &#124; &#39;latest_last_message&#39; &#124; &#39;channel_name_alphabetical&#39; &#124; &#39;metadata_value_alphabetical&#39;>** |  | (optional) defaults to undefined
 **metadataOrderKey** | [**string**] | Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key. | (optional) defaults to undefined
 **customTypes** | [**string**] | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. | (optional) defaults to undefined
 **customTypeStartswith** | [**string**] | Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended. | (optional) defaults to undefined
 **channelUrls** | [**string**] | Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended. | (optional) defaults to undefined
 **name** | [**string**] | Specifies one or more group channel names. | (optional) defaults to undefined
 **nameContains** | [**string**] | Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | (optional) defaults to undefined
 **nameStartswith** | [**string**] | Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | (optional) defaults to undefined
 **membersExactlyIn** | [**string**] | Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | (optional) defaults to undefined
 **membersIncludeIn** | [**string**] | Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | (optional) defaults to undefined
 **queryType** | [**string**] | Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND) | (optional) defaults to undefined
 **membersNickname** | [**string**] | Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended. | (optional) defaults to undefined
 **membersNicknameContains** | [**string**] | Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues. | (optional) defaults to undefined
 **metadataKey** | [**string**] | Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified. | (optional) defaults to undefined
 **metadataValues** | [**string**] | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified. | (optional) defaults to undefined
 **metadataValueStartswith** | [**string**] | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified. | (optional) defaults to undefined
 **metacounterKey** | [**string**] | Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified. | (optional) defaults to undefined
 **metacounterValues** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueGt** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueGte** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueLt** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueLte** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **includeSortedMetaarrayInLastMessage** | [**boolean**] | Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response. | (optional) defaults to undefined
 **customType** | [**string**] | (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded. | (optional) defaults to undefined
 **readReceipt** | [**boolean**] | (Deprecated) Superseded by show_read_receipt. | (optional) defaults to undefined
 **member** | [**boolean**] | (Deprecated) Superseded by show_member. | (optional) defaults to undefined
 **isDistinct** | [**boolean**] | (Deprecated) Superseded by distinct_mode. | (optional) defaults to undefined
 **membersIn** | [**string**] | (Deprecated) Superseded by members_exactly_in. | (optional) defaults to undefined
 **userId2** | [**string**] | (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead. | (optional) defaults to undefined


### Return type

**ListMyGroupChannelsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRegistrationOrDeviceTokens**
> ListRegistrationOrDeviceTokensResponse listRegistrationOrDeviceTokens()

## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListRegistrationOrDeviceTokensRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  tokenType: "token_type_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listRegistrationOrDeviceTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **tokenType** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListRegistrationOrDeviceTokensResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUsers**
> ListUsersResponse listUsers()

## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListUsersRequest = {
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // 'activated' | 'deactivated' | 'all' | Specifies the activation status of the users in the list. Acceptable values are `activated`, `deactivated`, and `all`. (Default: `activated`) (optional)
  activeMode: "activated",
  // boolean | Determines whether to include bots in the list. (Default: true) (optional)
  showBot: true,
  // string | Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids=urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret. (optional)
  userIds: "user_ids_example",
  // string (optional)
  nickname: "nickname_example",
  // string (optional)
  nicknameStartswith: "nickname_startswith_example",
  // string (optional)
  metadatakey: "metadatakey_example",
  // string | Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, `?metadatavalues_in=urlencoded_value_1, urlencoded_value_2`). This parameter should be specified in conjunction with the `metadatakey` above. (optional)
  metadatavaluesIn: "metadatavalues_in_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **activeMode** | [**&#39;activated&#39; | &#39;deactivated&#39; | &#39;all&#39;**]**Array<&#39;activated&#39; &#124; &#39;deactivated&#39; &#124; &#39;all&#39;>** | Specifies the activation status of the users in the list. Acceptable values are &#x60;activated&#x60;, &#x60;deactivated&#x60;, and &#x60;all&#x60;. (Default: &#x60;activated&#x60;) | (optional) defaults to undefined
 **showBot** | [**boolean**] | Determines whether to include bots in the list. (Default: true) | (optional) defaults to undefined
 **userIds** | [**string**] | Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids&#x3D;urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret. | (optional) defaults to undefined
 **nickname** | [**string**] |  | (optional) defaults to undefined
 **nicknameStartswith** | [**string**] |  | (optional) defaults to undefined
 **metadatakey** | [**string**] |  | (optional) defaults to undefined
 **metadatavaluesIn** | [**string**] | Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, &#x60;?metadatavalues_in&#x3D;urlencoded_value_1, urlencoded_value_2&#x60;). This parameter should be specified in conjunction with the &#x60;metadatakey&#x60; above. | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListUsersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **markAllMessagesAsRead**
> any markAllMessagesAsRead()

## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiMarkAllMessagesAsReadRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // MarkAllMessagesAsReadRequest (optional)
  markAllMessagesAsReadRequest: {
    channelUrls: [
      "channelUrls_example",
    ],
  },
};

apiInstance.markAllMessagesAsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markAllMessagesAsReadRequest** | **MarkAllMessagesAsReadRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeARegistrationOrDeviceTokenFromAnOwner**
> Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> removeARegistrationOrDeviceTokenFromAnOwner()

## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveARegistrationOrDeviceTokenFromAnOwnerRequest = {
  // string | (Required) 
  tokenType: "token_type_example",
  // string | (Required) 
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeARegistrationOrDeviceTokenFromAnOwner(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | [**string**] | (Required)  | defaults to undefined
 **token** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken**
> RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken()

## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  tokenType: "token_type_example",
  // string | (Required) 
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeARegistrationOrDeviceTokenWhenUnregisteringASpecificToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **tokenType** | [**string**] | (Required)  | defaults to undefined
 **token** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveARegistrationOrDeviceTokenWhenUnregisteringASpecificTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens**
> RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens()

## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveARegistrationOrDeviceTokenWhenUnregisteringAllDeviceTokensResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetPushPreferences**
> any resetPushPreferences()

## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiResetPushPreferencesRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.resetPushPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAUser**
> SendbirdUser updateAUser()

## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateAUserRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateAUserRequest (optional)
  updateAUserRequest: {
    discoveryKeys: [
      "discoveryKeys_example",
    ],
    isActive: true,
    issueAccessToken: true,
    lastSeenAt: 1,
    leaveAllWhenDeactivated: true,
    nickname: "nickname_example",
    preferredLanguages: [
      "preferredLanguages_example",
    ],
    profileFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    profileUrl: "profileUrl_example",
  },
};

apiInstance.updateAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAUserRequest** | **UpdateAUserRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateChannelInvitationPreference**
> UpdateChannelInvitationPreferenceResponse updateChannelInvitationPreference()

## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateChannelInvitationPreferenceRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateChannelInvitationPreferenceRequest (optional)
  updateChannelInvitationPreferenceRequest: {
    autoAccept: true,
  },
};

apiInstance.updateChannelInvitationPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChannelInvitationPreferenceRequest** | **UpdateChannelInvitationPreferenceRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdateChannelInvitationPreferenceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCountPreferenceOfAChannel**
> UpdateCountPreferenceOfChannelByUrlResponse updateCountPreferenceOfAChannel()

## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateCountPreferenceOfAChannelRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateCountPreferenceOfAChannelRequest (optional)
  updateCountPreferenceOfAChannelRequest: {
    countPreference: "false",
  },
};

apiInstance.updateCountPreferenceOfAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCountPreferenceOfAChannelRequest** | **UpdateCountPreferenceOfAChannelRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdateCountPreferenceOfChannelByUrlResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePushPreferences**
> UpdatePushPreferencesResponse updatePushPreferences()

## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdatePushPreferencesRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdatePushPreferencesRequest (optional)
  updatePushPreferencesRequest: {
    blockPushFromBots: true,
    doNotDisturb: true,
    enablePushForReplies: true,
    endHour: 1,
    endMin: 1,
    pushBlockedBotIds: [
      "pushBlockedBotIds_example",
    ],
    pushSound: "pushSound_example",
    pushTriggerOption: "pushTriggerOption_example",
    snoozeEnabled: true,
    snoozeEndTs: 1,
    snoozeStartTs: 1,
    startHour: 1,
    startMin: 1,
    timezone: "timezone_example",
  },
};

apiInstance.updatePushPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePushPreferencesRequest** | **UpdatePushPreferencesRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdatePushPreferencesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePushPreferencesForAChannel**
> UpdatePushPreferencesForAChannelResponse updatePushPreferencesForAChannel()

## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdatePushPreferencesForAChannelRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdatePushPreferencesForAChannelRequest (optional)
  updatePushPreferencesForAChannelRequest: {
    pushTriggerOption: "default",
    pushSound: "pushSound_example",
  },
};

apiInstance.updatePushPreferencesForAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePushPreferencesForAChannelRequest** | **UpdatePushPreferencesForAChannelRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdatePushPreferencesForAChannelResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewAUser**
> SendbirdUser viewAUser()

## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewAUserRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // boolean (optional)
  includeUnreadCount: true,
  // string (optional)
  customTypes: "custom_types_example",
  // 'all' | 'super' | 'nonsuper' | Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are `all`, `super`, and `nonsuper`. This parameter should be specified in conjunction with `include_unread_count` above. (Default: `all`) (optional)
  superMode: "all",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **includeUnreadCount** | [**boolean**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**&#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;**]**Array<&#39;all&#39; &#124; &#39;super&#39; &#124; &#39;nonsuper&#39;>** | Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. This parameter should be specified in conjunction with &#x60;include_unread_count&#x60; above. (Default: &#x60;all&#x60;) | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewCountPreferenceOfAChannel**
> ViewCountPreferenceOfAChannelResponse viewCountPreferenceOfAChannel()

## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewCountPreferenceOfAChannelRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewCountPreferenceOfAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewCountPreferenceOfAChannelResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewNumberOfChannelsWithUnreadMessages**
> ViewNumberOfChannelsWithUnreadMessagesResponse viewNumberOfChannelsWithUnreadMessages()

## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfChannelsWithUnreadMessagesRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  customTypes: "custom_types_example",
  // 'all' | 'super' | 'nonsuper' | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all) (optional)
  superMode: "all",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewNumberOfChannelsWithUnreadMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**&#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;**]**Array<&#39;all&#39; &#124; &#39;super&#39; &#124; &#39;nonsuper&#39;>** | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all) | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfChannelsWithUnreadMessagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewNumberOfUnreadMessages**
> ViewNumberOfUnreadMessagesResponse viewNumberOfUnreadMessages()

## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfUnreadMessagesRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. (optional)
  customTypes: "custom_types_example",
  // string | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are `all`, `super`, and `nonsuper`. (Default: `all`) (optional)
  superMode: "super_mode_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewNumberOfUnreadMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **customTypes** | [**string**] | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. | (optional) defaults to undefined
 **superMode** | [**string**] | Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. (Default: &#x60;all&#x60;) | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfUnreadMessagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewPushPreferences**
> ViewPushPreferencesResponse viewPushPreferences()

## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewPushPreferencesRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewPushPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewPushPreferencesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewPushPreferencesForAChannel**
> ViewPushPreferencesForAChannelResponse viewPushPreferencesForAChannel()

## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewPushPreferencesForAChannelRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewPushPreferencesForAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewPushPreferencesForAChannelResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewWhoOwnsARegistrationOrDeviceToken**
> Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner> viewWhoOwnsARegistrationOrDeviceToken()

## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewWhoOwnsARegistrationOrDeviceTokenRequest = {
  // string | (Required) 
  tokenType: "token_type_example",
  // string | (Required) 
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewWhoOwnsARegistrationOrDeviceToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | [**string**] | (Required)  | defaults to undefined
 **token** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ViewWhoOwnsARegistrationOrDeviceTokenResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


