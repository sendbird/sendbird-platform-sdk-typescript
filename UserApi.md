# Sendbird.UserApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRegistrationOrDeviceToken**](UserApi.md#addRegistrationOrDeviceToken) | **POST** /v3/users/{user_id}/push/{token_type} | Add a registration or device token
[**choosePushNotificationContentTemplate**](UserApi.md#choosePushNotificationContentTemplate) | **PUT** /v3/users/{user_id}/push/template | Choose a push notification content template
[**createUser**](UserApi.md#createUser) | **POST** /v3/users | Create a user
[**createUserToken**](UserApi.md#createUserToken) | **POST** /v3/users/{user_id}/token | Create user token
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /v3/users/{user_id} | Delete a user
[**leaveMyGroupChannels**](UserApi.md#leaveMyGroupChannels) | **PUT** /v3/users/{user_id}/my_group_channels/leave | Leave my group channels
[**listMyGroupChannels**](UserApi.md#listMyGroupChannels) | **GET** /v3/users/{user_id}/my_group_channels | List my group channels
[**listRegistrationOrDeviceTokens**](UserApi.md#listRegistrationOrDeviceTokens) | **GET** /v3/users/{user_id}/push/{token_type} | List registration or device tokens
[**listUsers**](UserApi.md#listUsers) | **GET** /v3/users | List users
[**markAllMessagesAsRead**](UserApi.md#markAllMessagesAsRead) | **PUT** /v3/users/{user_id}/mark_as_read_all | Mark all messages as read
[**registerAsOperatorToChannelsWithCustomChannelTypes**](UserApi.md#registerAsOperatorToChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/operating_channel_custom_types | Register as an operator to channels with custom channel types
[**removeRegistrationOrDeviceToken**](UserApi.md#removeRegistrationOrDeviceToken) | **DELETE** /v3/users/{user_id}/push | Remove a registration or device token - When unregistering all device tokens
[**removeRegistrationOrDeviceTokenByToken**](UserApi.md#removeRegistrationOrDeviceTokenByToken) | **DELETE** /v3/users/{user_id}/push/{token_type}/{token} | Remove a registration or device token - When unregistering a specific token
[**removeRegistrationOrDeviceTokenFromOwnerByToken**](UserApi.md#removeRegistrationOrDeviceTokenFromOwnerByToken) | **DELETE** /v3/push/device_tokens/{token_type}/{token} | Remove a registration or device token from an owner
[**resetPushPreferences**](UserApi.md#resetPushPreferences) | **DELETE** /v3/users/{user_id}/push_preference | Reset push preferences
[**updateChannelInvitationPreference**](UserApi.md#updateChannelInvitationPreference) | **PUT** /v3/users/{user_id}/channel_invitation_preference | Update channel invitation preference
[**updateCountPreferenceOfChannelByUrl**](UserApi.md#updateCountPreferenceOfChannelByUrl) | **PUT** /v3/users/{user_id}/count_preference/{channel_url} | Update count preference of a channel
[**updatePushPreferences**](UserApi.md#updatePushPreferences) | **PUT** /v3/users/{user_id}/push_preference | Update push preferences
[**updatePushPreferencesForChannelByUrl**](UserApi.md#updatePushPreferencesForChannelByUrl) | **PUT** /v3/users/{user_id}/push_preference/{channel_url} | Update push preferences for a channel
[**updateUserById**](UserApi.md#updateUserById) | **PUT** /v3/users/{user_id} | Update a user
[**viewChannelInvitationPreference**](UserApi.md#viewChannelInvitationPreference) | **GET** /v3/users/{user_id}/channel_invitation_preference | View channel invitation preference
[**viewCountPreferenceOfChannelByUrl**](UserApi.md#viewCountPreferenceOfChannelByUrl) | **GET** /v3/users/{user_id}/count_preference/{channel_url} | View count preference of a channel
[**viewNumberOfChannelsByJoinStatus**](UserApi.md#viewNumberOfChannelsByJoinStatus) | **GET** /v3/users/{user_id}/group_channel_count | View number of channels by join status
[**viewNumberOfChannelsWithUnreadMessages**](UserApi.md#viewNumberOfChannelsWithUnreadMessages) | **GET** /v3/users/{user_id}/unread_channel_count | View number of channels with unread messages
[**viewNumberOfUnreadItems**](UserApi.md#viewNumberOfUnreadItems) | **GET** /v3/users/{user_id}/unread_item_count | View number of unread items
[**viewNumberOfUnreadMessages**](UserApi.md#viewNumberOfUnreadMessages) | **GET** /v3/users/{user_id}/unread_message_count | View number of unread messages
[**viewPushPreferences**](UserApi.md#viewPushPreferences) | **GET** /v3/users/{user_id}/push_preference | View push preferences
[**viewPushPreferencesForChannelByUrl**](UserApi.md#viewPushPreferencesForChannelByUrl) | **GET** /v3/users/{user_id}/push_preference/{channel_url} | View push preferences for a channel
[**viewUserById**](UserApi.md#viewUserById) | **GET** /v3/users/{user_id} | View a user
[**viewWhoOwnsRegistrationOrDeviceTokenByToken**](UserApi.md#viewWhoOwnsRegistrationOrDeviceTokenByToken) | **GET** /v3/push/device_tokens/{token_type}/{token} | View who owns a registration or device token


# **addRegistrationOrDeviceToken**
> AddRegistrationOrDeviceTokenResponse addRegistrationOrDeviceToken()

## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiAddRegistrationOrDeviceTokenRequest = {
  // string
  userId: "user_id_example",
  // string
  tokenType: "token_type_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AddRegistrationOrDeviceTokenData (optional)
  addRegistrationOrDeviceTokenData: {
    gcmRegToken: "gcmRegToken_example",
    huaweiDeviceToken: "huaweiDeviceToken_example",
    apnsDeviceToken: "apnsDeviceToken_example",
  },
};

apiInstance.addRegistrationOrDeviceToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addRegistrationOrDeviceTokenData** | **AddRegistrationOrDeviceTokenData**|  |
 **userId** | [**string**] |  | defaults to undefined
 **tokenType** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AddRegistrationOrDeviceTokenResponse**

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

# **choosePushNotificationContentTemplate**
> ChoosePushNotificationContentTemplateResponse choosePushNotificationContentTemplate()

## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiChoosePushNotificationContentTemplateRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // any (optional)
  body: {},
};

apiInstance.choosePushNotificationContentTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ChoosePushNotificationContentTemplateResponse**

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

# **createUser**
> SendBirdUser createUser()

## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiCreateUserRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateUserData (optional)
  createUserData: {
    userId: "userId_example",
    nickname: "nickname_example",
    profileUrl: "profileUrl_example",
    profileFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    issueAccessToken: true,
    discoveryKeys: [
      "discoveryKeys_example",
    ],
    metadata: {},
  },
};

apiInstance.createUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserData** | **CreateUserData**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdUser**

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

## Create user token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiCreateUserTokenRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateUserTokenData (optional)
  createUserTokenData: {
    expiresAt: 3.14,
  },
};

apiInstance.createUserToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserTokenData** | **CreateUserTokenData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

# **deleteUserById**
> any deleteUserById()

## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiDeleteUserByIdRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
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

# **leaveMyGroupChannels**
> any leaveMyGroupChannels()

## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiLeaveMyGroupChannelsRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // LeaveMyGroupChannelsData (optional)
  leaveMyGroupChannelsData: {
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
 **leaveMyGroupChannelsData** | **LeaveMyGroupChannelsData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListMyGroupChannelsRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  distinctMode: "distinct_mode_example",
  // string (optional)
  publicMode: "public_mode_example",
  // string (optional)
  superMode: "super_mode_example",
  // string (optional)
  hiddenMode: "hidden_mode_example",
  // string (optional)
  memberStateFilter: "member_state_filter_example",
  // string (optional)
  unreadFilter: "unread_filter_example",
  // number (optional)
  createdAfter: 1,
  // number (optional)
  createdBefore: 1,
  // boolean (optional)
  showEmpty: true,
  // boolean (optional)
  showFrozen: true,
  // boolean (optional)
  showMember: true,
  // boolean (optional)
  showDeliveryReceipt: true,
  // boolean (optional)
  showReadReceipt: true,
  // string (optional)
  order: "order_example",
  // string (optional)
  metadataOrderKey: "metadata_order_key_example",
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  customTypeStartswith: "custom_type_startswith_example",
  // string (optional)
  channelUrls: "channel_urls_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  nameContains: "name_contains_example",
  // string (optional)
  nameStartswith: "name_startswith_example",
  // string (optional)
  membersExactlyIn: "members_exactly_in_example",
  // string (optional)
  membersIncludeIn: "members_include_in_example",
  // string (optional)
  queryType: "query_type_example",
  // string (optional)
  membersNickname: "members_nickname_example",
  // string (optional)
  membersNicknameContains: "members_nickname_contains_example",
  // string (optional)
  searchQuery: "search_query_example",
  // string (optional)
  searchFields: "search_fields_example",
  // string (optional)
  metadataKey: "metadata_key_example",
  // string (optional)
  metadataValues: "metadata_values_example",
  // string (optional)
  metadataValueStartswith: "metadata_value_startswith_example",
  // string (optional)
  metacounterKey: "metacounter_key_example",
  // string (optional)
  metacounterValues: "metacounter_values_example",
  // string (optional)
  metacounterValueGt: "metacounter_value_gt_example",
  // string (optional)
  metacounterValueGte: "metacounter_value_gte_example",
  // string (optional)
  metacounterValueLt: "metacounter_value_lt_example",
  // string (optional)
  metacounterValueLte: "metacounter_value_lte_example",
  // string (optional)
  customType: "custom_type_example",
};

apiInstance.listMyGroupChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **distinctMode** | [**string**] |  | (optional) defaults to undefined
 **publicMode** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**string**] |  | (optional) defaults to undefined
 **hiddenMode** | [**string**] |  | (optional) defaults to undefined
 **memberStateFilter** | [**string**] |  | (optional) defaults to undefined
 **unreadFilter** | [**string**] |  | (optional) defaults to undefined
 **createdAfter** | [**number**] |  | (optional) defaults to undefined
 **createdBefore** | [**number**] |  | (optional) defaults to undefined
 **showEmpty** | [**boolean**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **metadataOrderKey** | [**string**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **customTypeStartswith** | [**string**] |  | (optional) defaults to undefined
 **channelUrls** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **nameContains** | [**string**] |  | (optional) defaults to undefined
 **nameStartswith** | [**string**] |  | (optional) defaults to undefined
 **membersExactlyIn** | [**string**] |  | (optional) defaults to undefined
 **membersIncludeIn** | [**string**] |  | (optional) defaults to undefined
 **queryType** | [**string**] |  | (optional) defaults to undefined
 **membersNickname** | [**string**] |  | (optional) defaults to undefined
 **membersNicknameContains** | [**string**] |  | (optional) defaults to undefined
 **searchQuery** | [**string**] |  | (optional) defaults to undefined
 **searchFields** | [**string**] |  | (optional) defaults to undefined
 **metadataKey** | [**string**] |  | (optional) defaults to undefined
 **metadataValues** | [**string**] |  | (optional) defaults to undefined
 **metadataValueStartswith** | [**string**] |  | (optional) defaults to undefined
 **metacounterKey** | [**string**] |  | (optional) defaults to undefined
 **metacounterValues** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueGt** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueGte** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueLt** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueLte** | [**string**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined


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

## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListRegistrationOrDeviceTokensRequest = {
  // string
  userId: "user_id_example",
  // string
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
 **userId** | [**string**] |  | defaults to undefined
 **tokenType** | [**string**] |  | defaults to undefined
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

## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiListUsersRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  activeMode: "active_mode_example",
  // boolean (optional)
  showBot: true,
  // string (optional)
  userIds: "user_ids_example",
  // string (optional)
  nickname: "nickname_example",
  // string (optional)
  nicknameStartswith: "nickname_startswith_example",
  // string (optional)
  metadatakey: "metadatakey_example",
  // string (optional)
  metadatavaluesIn: "metadatavalues_in_example",
};

apiInstance.listUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **activeMode** | [**string**] |  | (optional) defaults to undefined
 **showBot** | [**boolean**] |  | (optional) defaults to undefined
 **userIds** | [**string**] |  | (optional) defaults to undefined
 **nickname** | [**string**] |  | (optional) defaults to undefined
 **nicknameStartswith** | [**string**] |  | (optional) defaults to undefined
 **metadatakey** | [**string**] |  | (optional) defaults to undefined
 **metadatavaluesIn** | [**string**] |  | (optional) defaults to undefined


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

## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiMarkAllMessagesAsReadRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // MarkAllMessagesAsReadData (optional)
  markAllMessagesAsReadData: {
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
 **markAllMessagesAsReadData** | **MarkAllMessagesAsReadData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

# **registerAsOperatorToChannelsWithCustomChannelTypes**
> any registerAsOperatorToChannelsWithCustomChannelTypes()

## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRegisterAsOperatorToChannelsWithCustomChannelTypesRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // RegisterAsOperatorToChannelsWithCustomChannelTypesData (optional)
  registerAsOperatorToChannelsWithCustomChannelTypesData: {
    channelCustomTypes: [
      "channelCustomTypes_example",
    ],
  },
};

apiInstance.registerAsOperatorToChannelsWithCustomChannelTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerAsOperatorToChannelsWithCustomChannelTypesData** | **RegisterAsOperatorToChannelsWithCustomChannelTypesData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

# **removeRegistrationOrDeviceToken**
> RemoveRegistrationOrDeviceTokenResponse removeRegistrationOrDeviceToken()

## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveRegistrationOrDeviceTokenRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeRegistrationOrDeviceToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveRegistrationOrDeviceTokenResponse**

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

# **removeRegistrationOrDeviceTokenByToken**
> RemoveRegistrationOrDeviceTokenByTokenResponse removeRegistrationOrDeviceTokenByToken()

## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveRegistrationOrDeviceTokenByTokenRequest = {
  // string
  userId: "user_id_example",
  // string
  tokenType: "token_type_example",
  // string
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeRegistrationOrDeviceTokenByToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **tokenType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveRegistrationOrDeviceTokenByTokenResponse**

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

# **removeRegistrationOrDeviceTokenFromOwnerByToken**
> RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse removeRegistrationOrDeviceTokenFromOwnerByToken()

## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiRemoveRegistrationOrDeviceTokenFromOwnerByTokenRequest = {
  // string
  tokenType: "token_type_example",
  // string
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeRegistrationOrDeviceTokenFromOwnerByToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse**

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
> ResetPushPreferencesResponse resetPushPreferences()

## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiResetPushPreferencesRequest = {
  // string
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
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ResetPushPreferencesResponse**

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

# **updateChannelInvitationPreference**
> UpdateChannelInvitationPreferenceResponse updateChannelInvitationPreference()

## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateChannelInvitationPreferenceRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateChannelInvitationPreferenceData (optional)
  updateChannelInvitationPreferenceData: {
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
 **updateChannelInvitationPreferenceData** | **UpdateChannelInvitationPreferenceData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

# **updateCountPreferenceOfChannelByUrl**
> UpdateCountPreferenceOfChannelByUrlResponse updateCountPreferenceOfChannelByUrl()

## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateCountPreferenceOfChannelByUrlRequest = {
  // string
  userId: "user_id_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateCountPreferenceOfChannelByUrlData (optional)
  updateCountPreferenceOfChannelByUrlData: {
    countPreference: "countPreference_example",
  },
};

apiInstance.updateCountPreferenceOfChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCountPreferenceOfChannelByUrlData** | **UpdateCountPreferenceOfChannelByUrlData**|  |
 **userId** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
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

## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdatePushPreferencesRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdatePushPreferencesData (optional)
  updatePushPreferencesData: {
    pushTriggerOption: "pushTriggerOption_example",
    doNotDisturb: true,
    startHour: 1,
    startMin: 1,
    endHour: 1,
    endMin: 1,
    snoozeEnabled: true,
    snoozeStartTs: 1,
    snoozeEndTs: 1,
    blockPushFromBots: true,
    pushBlockedBotIds: [
      "pushBlockedBotIds_example",
    ],
    timezone: "timezone_example",
    pushSound: "pushSound_example",
  },
};

apiInstance.updatePushPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePushPreferencesData** | **UpdatePushPreferencesData**|  |
 **userId** | [**string**] |  | defaults to undefined
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

# **updatePushPreferencesForChannelByUrl**
> UpdatePushPreferencesForChannelByUrlResponse updatePushPreferencesForChannelByUrl()

## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdatePushPreferencesForChannelByUrlRequest = {
  // string
  userId: "user_id_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdatePushPreferencesForChannelByUrlData (optional)
  updatePushPreferencesForChannelByUrlData: {
    pushTriggerOption: "pushTriggerOption_example",
    enable: true,
    pushSound: "pushSound_example",
  },
};

apiInstance.updatePushPreferencesForChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePushPreferencesForChannelByUrlData** | **UpdatePushPreferencesForChannelByUrlData**|  |
 **userId** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdatePushPreferencesForChannelByUrlResponse**

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

# **updateUserById**
> SendBirdUser updateUserById()

## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiUpdateUserByIdRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateUserByIdData (optional)
  updateUserByIdData: {
    userId: "userId_example",
    nickname: "nickname_example",
    profileUrl: "profileUrl_example",
    profileFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    issueAccessToken: true,
    issueSessionToken: true,
    sessionTokenExpiresAt: 1,
    isActive: true,
    lastSeenAt: 1,
    discoveryKeys: [
      "discoveryKeys_example",
    ],
    preferredLanguages: [
      "preferredLanguages_example",
    ],
    leaveAllWhenDeactivated: true,
  },
};

apiInstance.updateUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserByIdData** | **UpdateUserByIdData**|  |
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdUser**

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

# **viewChannelInvitationPreference**
> ViewChannelInvitationPreferenceResponse viewChannelInvitationPreference()

## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewChannelInvitationPreferenceRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewChannelInvitationPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewChannelInvitationPreferenceResponse**

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

# **viewCountPreferenceOfChannelByUrl**
> ViewCountPreferenceOfChannelByUrlResponse viewCountPreferenceOfChannelByUrl()

## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewCountPreferenceOfChannelByUrlRequest = {
  // string
  userId: "user_id_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewCountPreferenceOfChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewCountPreferenceOfChannelByUrlResponse**

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

# **viewNumberOfChannelsByJoinStatus**
> ViewNumberOfChannelsByJoinStatusResponse viewNumberOfChannelsByJoinStatus()

## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfChannelsByJoinStatusRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  state: "state_example",
};

apiInstance.viewNumberOfChannelsByJoinStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **state** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfChannelsByJoinStatusResponse**

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

## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfChannelsWithUnreadMessagesRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // Array<string> (optional)
  customTypes: [
    "custom_types_example",
  ],
  // string (optional)
  superMode: "super_mode_example",
};

apiInstance.viewNumberOfChannelsWithUnreadMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **customTypes** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **superMode** | [**string**] |  | (optional) defaults to undefined


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

# **viewNumberOfUnreadItems**
> ViewNumberOfUnreadItemsResponse viewNumberOfUnreadItems()

## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfUnreadItemsRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  customType: "custom_type_example",
  // string (optional)
  itemKeys: "item_keys_example",
};

apiInstance.viewNumberOfUnreadItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined
 **itemKeys** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfUnreadItemsResponse**

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

## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewNumberOfUnreadMessagesRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  superMode: "super_mode_example",
};

apiInstance.viewNumberOfUnreadMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**string**] |  | (optional) defaults to undefined


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

## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewPushPreferencesRequest = {
  // string
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
 **userId** | [**string**] |  | defaults to undefined
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

# **viewPushPreferencesForChannelByUrl**
> ViewPushPreferencesForChannelByUrlResponse viewPushPreferencesForChannelByUrl()

## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewPushPreferencesForChannelByUrlRequest = {
  // string
  userId: "user_id_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewPushPreferencesForChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewPushPreferencesForChannelByUrlResponse**

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

# **viewUserById**
> SendBirdUser viewUserById()

## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewUserByIdRequest = {
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  includeUnreadCount: true,
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  superMode: "super_mode_example",
};

apiInstance.viewUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **includeUnreadCount** | [**boolean**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdUser**

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

# **viewWhoOwnsRegistrationOrDeviceTokenByToken**
> Array<ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner> viewWhoOwnsRegistrationOrDeviceTokenByToken()

## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.UserApi(configuration);

let body:Sendbird.UserApiViewWhoOwnsRegistrationOrDeviceTokenByTokenRequest = {
  // string
  tokenType: "token_type_example",
  // string
  token: "token_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewWhoOwnsRegistrationOrDeviceTokenByToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner>**

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


