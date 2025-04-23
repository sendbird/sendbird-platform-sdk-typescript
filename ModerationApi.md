# Sendbird.ModerationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockAUser**](ModerationApi.md#blockAUser) | **POST** /v3/users/{user_id}/block | Block a user
[**freezeAGroupChannel**](ModerationApi.md#freezeAGroupChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a group channel
[**freezeAnOpenChannel**](ModerationApi.md#freezeAnOpenChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze an open channel
[**listBlockedUsers**](ModerationApi.md#listBlockedUsers) | **GET** /v3/users/{user_id}/block | List blocked users
[**unblockAUser**](ModerationApi.md#unblockAUser) | **DELETE** /v3/users/{user_id}/block/{target_id} | Unblock a user


# **blockAUser**
> BlockAUserResponse blockAUser()

## Block a user  A user can block another user if the user doesn't wish to receive any messages or notifications from the blocked user in a 1-to-1 group channel. In a 1-to-N group channel, the user can still receive messages from the blocked user, but this depends on the UI settings of the chat view. In any case, notifications from the blocked user won't be delivered to the 1-to-N group channel. You can choose whether or not the user can view [which users are blocked](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users) in the channel UI.  Sendbird application provides two blocking options: include or exclude blocked users when sending invitations, and turn on or off notifications from blocked users. [Explicit and classic block modes](https://sendbird.com/docs/chat/platform-api/v3/deprecated#2-explicit-and-classic-block-modes) have been deprecated and are only supported for customers who started using them before they were deprecated.  - **Include or exclude blocked users when sending invitations**: Determines whether or not to automatically filter out blocked users when a user invites a group of users to a new group channel. By default, blocked users are included when sending invitations. The value of this option can be changed by Sendbird if your Sendbird application isn't integrated to the client app. If you want to change the value, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      - **Turn on or off notifications from blocked users**: Determines whether or not to receive message notifications from the blocked user in a specific 1-to-N group channel where they are both members. By default, a user doesn't receive notifications from blocked users. The value of this option can be set individually per channel. If you want to use this option, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).       > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      The following tables explain what happens to a user's chat experience when the user blocks another user in a 1-to-1 or 1-to-N group channel. In the case of a 1-to-1 group channel, the block mode is only maintained with the original members. If other than the original members are added, the rules for 1-to-N group channel begin to apply.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ModerationApi(configuration);

let body:Sendbird.ModerationApiBlockAUserRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // BlockAUserRequest (optional)
  blockAUserRequest: {
    targetId: "targetId_example",
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.blockAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockAUserRequest** | **BlockAUserRequest**|  |
 **userId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**BlockAUserResponse**

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

# **freezeAGroupChannel**
> SendbirdGroupChannelDetail freezeAGroupChannel()

## Freeze a group channel  Freezes or unfreezes a group channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ModerationApi(configuration);

let body:Sendbird.ModerationApiFreezeAGroupChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // FreezeAGroupChannelRequest (optional)
  freezeAGroupChannelRequest: {
    freeze: true,
  },
};

apiInstance.freezeAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **freezeAGroupChannelRequest** | **FreezeAGroupChannelRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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

# **freezeAnOpenChannel**
> SendbirdOpenChannel freezeAnOpenChannel()

## Freeze an open channel  Freezes or unfreezes an open channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ModerationApi(configuration);

let body:Sendbird.ModerationApiFreezeAnOpenChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // FreezeAGroupChannelRequest (optional)
  freezeAGroupChannelRequest: {
    freeze: true,
  },
};

apiInstance.freezeAnOpenChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **freezeAGroupChannelRequest** | **FreezeAGroupChannelRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdOpenChannel**

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

# **listBlockedUsers**
> ListBlockedUsersResponse listBlockedUsers()

## List blocked by and blocking users  This action retrieves a list of users who are either blocked by a specific user or a list of users who are blocking a specific user.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users)  `user_id`   Type: string   Description: Specifies the unique ID of the target user.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ModerationApi(configuration);

let body:Sendbird.ModerationApiListBlockedUsersRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The `me` in the values refers to the user specified in the parameter. (Default: blocked_by_me) (optional)
  list: "list_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string | Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs. (optional)
  userIds: "user_ids_example",
  // string (optional)
  metadatakey: "metadatakey_example",
  // string (optional)
  metadatavaluesIn: "metadatavalues_in_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listBlockedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **list** | [**string**] | Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The &#x60;me&#x60; in the values refers to the user specified in the parameter. (Default: blocked_by_me) | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **userIds** | [**string**] | Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs. | (optional) defaults to undefined
 **metadatakey** | [**string**] |  | (optional) defaults to undefined
 **metadatavaluesIn** | [**string**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListBlockedUsersResponse**

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

# **unblockAUser**
> any unblockAUser()

## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/unblock-a-user#1-unblock-a-user

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ModerationApi(configuration);

let body:Sendbird.ModerationApiUnblockAUserRequest = {
  // string | (Required) 
  userId: "user_id_example",
  // string | (Required) 
  targetId: "target_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.unblockAUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | (Required)  | defaults to undefined
 **targetId** | [**string**] | (Required)  | defaults to undefined
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


