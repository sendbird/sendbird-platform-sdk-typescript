# .ModerationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**banFromChannelsWithCustomChannelTypes**](ModerationApi.md#banFromChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/banned_channel_custom_types | Ban from channels with custom channel types
[**blockUser**](ModerationApi.md#blockUser) | **POST** /v3/users/{user_id}/block | Block a user
[**gcBanUser**](ModerationApi.md#gcBanUser) | **POST** /v3/group_channels/{channel_url}/ban | Ban a user
[**gcFreezeChannel**](ModerationApi.md#gcFreezeChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a channel
[**gcListBannedUsers**](ModerationApi.md#gcListBannedUsers) | **GET** /v3/group_channels/{channel_url}/ban | List banned users
[**gcListMutedUsers**](ModerationApi.md#gcListMutedUsers) | **GET** /v3/group_channels/{channel_url}/mute | List muted users
[**gcMuteUser**](ModerationApi.md#gcMuteUser) | **POST** /v3/group_channels/{channel_url}/mute | Mute a user
[**gcUnbanUserById**](ModerationApi.md#gcUnbanUserById) | **DELETE** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**gcUnmuteUserById**](ModerationApi.md#gcUnmuteUserById) | **DELETE** /v3/group_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**gcUpdateBanById**](ModerationApi.md#gcUpdateBanById) | **PUT** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**gcViewBanById**](ModerationApi.md#gcViewBanById) | **GET** /v3/group_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**gcViewMuteById**](ModerationApi.md#gcViewMuteById) | **GET** /v3/group_channels/{channel_url}/mute/{muted_user_id} | View a mute
[**listBannedChannels**](ModerationApi.md#listBannedChannels) | **GET** /v3/users/{user_id}/ban | List banned channels
[**listBlockedUsers**](ModerationApi.md#listBlockedUsers) | **GET** /v3/users/{user_id}/block | List blocked users
[**listMutedChannels**](ModerationApi.md#listMutedChannels) | **GET** /v3/users/{user_id}/mute | List muted channels
[**muteInChannelsWithCustomChannelTypes**](ModerationApi.md#muteInChannelsWithCustomChannelTypes) | **POST** /v3/users/{user_id}/muted_channel_custom_types | Mute in channels with custom channel types
[**ocBanUser**](ModerationApi.md#ocBanUser) | **POST** /v3/open_channels/{channel_url}/ban | Ban a user
[**ocFreezeChannel**](ModerationApi.md#ocFreezeChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze a channel
[**ocListBannedUsers**](ModerationApi.md#ocListBannedUsers) | **GET** /v3/open_channels/{channel_url}/ban | List banned users
[**ocListMutedUsers**](ModerationApi.md#ocListMutedUsers) | **GET** /v3/open_channels/{channel_url}/mute | List muted users
[**ocMuteUser**](ModerationApi.md#ocMuteUser) | **POST** /v3/open_channels/{channel_url}/mute | Mute a user
[**ocUnbanUserById**](ModerationApi.md#ocUnbanUserById) | **DELETE** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**ocUnmuteUserById**](ModerationApi.md#ocUnmuteUserById) | **DELETE** /v3/open_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**ocUpdateBanById**](ModerationApi.md#ocUpdateBanById) | **PUT** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**ocViewBanById**](ModerationApi.md#ocViewBanById) | **GET** /v3/open_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**ocViewMuteById**](ModerationApi.md#ocViewMuteById) | **GET** /v3/open_channels/{channel_url}/mute/{muted_user_id} | View a mute
[**unblockUserById**](ModerationApi.md#unblockUserById) | **DELETE** /v3/users/{user_id}/block/{target_id} | Unblock a user


# **banFromChannelsWithCustomChannelTypes**
> any banFromChannelsWithCustomChannelTypes()

## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiBanFromChannelsWithCustomChannelTypesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // BanFromChannelsWithCustomChannelTypesData (optional)
  banFromChannelsWithCustomChannelTypesData: {
    channelCustomTypes: [
      "channelCustomTypes_example",
    ],
  },
};

apiInstance.banFromChannelsWithCustomChannelTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **banFromChannelsWithCustomChannelTypesData** | **BanFromChannelsWithCustomChannelTypesData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


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

# **blockUser**
> BlockUserResponse blockUser()

## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiBlockUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // BlockUserData (optional)
  blockUserData: {
    userId: "userId_example",
    targetId: "targetId_example",
    userIds: [
      "userIds_example",
    ],
    users: [
      "users_example",
    ],
  },
};

apiInstance.blockUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockUserData** | **BlockUserData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**BlockUserResponse**

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

# **gcBanUser**
> GcBanUserResponse gcBanUser()

## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcBanUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // GcBanUserData (optional)
  gcBanUserData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    agentId: "agentId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcBanUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcBanUserData** | **GcBanUserData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**GcBanUserResponse**

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

# **gcFreezeChannel**
> SendBirdGroupChannel gcFreezeChannel()

## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcFreezeChannelRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // GcFreezeChannelData (optional)
  gcFreezeChannelData: {
    channelUrl: "channelUrl_example",
    freeze: true,
  },
};

apiInstance.gcFreezeChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcFreezeChannelData** | **GcFreezeChannelData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcListBannedUsers**
> GcListBannedUsersResponse gcListBannedUsers()

## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcListBannedUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.gcListBannedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**GcListBannedUsersResponse**

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

# **gcListMutedUsers**
> GcListMutedUsersResponse gcListMutedUsers()

## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcListMutedUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.gcListMutedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**GcListMutedUsersResponse**

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

# **gcMuteUser**
> SendBirdGroupChannel gcMuteUser()

## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcMuteUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // GcMuteUserData (optional)
  gcMuteUserData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcMuteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcMuteUserData** | **GcMuteUserData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcUnbanUserById**
> OcDeleteChannelByUrl200Response gcUnbanUserById()

## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcUnbanUserByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
};

apiInstance.gcUnbanUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcDeleteChannelByUrl200Response**

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

# **gcUnmuteUserById**
> OcDeleteChannelByUrl200Response gcUnmuteUserById()

## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcUnmuteUserByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
};

apiInstance.gcUnmuteUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcDeleteChannelByUrl200Response**

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

# **gcUpdateBanById**
> GcUpdateBanByIdResponse gcUpdateBanById()

## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcUpdateBanByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
  // GcUpdateBanByIdData (optional)
  gcUpdateBanByIdData: {
    channelUrl: "channelUrl_example",
    bannedUserId: "bannedUserId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcUpdateBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcUpdateBanByIdData** | **GcUpdateBanByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**GcUpdateBanByIdResponse**

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

# **gcViewBanById**
> GcViewBanByIdResponse gcViewBanById()

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcViewBanByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
};

apiInstance.gcViewBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**GcViewBanByIdResponse**

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

# **gcViewMuteById**
> GcViewMuteByIdResponse gcViewMuteById()

## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiGcViewMuteByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
};

apiInstance.gcViewMuteById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined


### Return type

**GcViewMuteByIdResponse**

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

# **listBannedChannels**
> ListBannedChannelsResponse listBannedChannels()

## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiListBannedChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listBannedChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**ListBannedChannelsResponse**

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

# **listBlockedUsers**
> ListBlockedUsersResponse listBlockedUsers()

## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiListBlockedUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  userIds: "user_ids_example",
  // string (optional)
  metadatakey: "metadatakey_example",
  // string (optional)
  metadatavaluesIn: "metadatavalues_in_example",
};

apiInstance.listBlockedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **userIds** | [**string**] |  | (optional) defaults to undefined
 **metadatakey** | [**string**] |  | (optional) defaults to undefined
 **metadatavaluesIn** | [**string**] |  | (optional) defaults to undefined


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

# **listMutedChannels**
> ListMutedChannelsResponse listMutedChannels()

## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiListMutedChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listMutedChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**ListMutedChannelsResponse**

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

# **muteInChannelsWithCustomChannelTypes**
> any muteInChannelsWithCustomChannelTypes()

## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiMuteInChannelsWithCustomChannelTypesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // MuteInChannelsWithCustomChannelTypesData (optional)
  muteInChannelsWithCustomChannelTypesData: {
    channelCustomTypes: [
      "channelCustomTypes_example",
    ],
  },
};

apiInstance.muteInChannelsWithCustomChannelTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteInChannelsWithCustomChannelTypesData** | **MuteInChannelsWithCustomChannelTypesData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


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

# **ocBanUser**
> OcBanUserResponse ocBanUser()

## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcBanUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // OcBanUserData (optional)
  ocBanUserData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    agentId: "agentId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.ocBanUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocBanUserData** | **OcBanUserData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**OcBanUserResponse**

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

# **ocFreezeChannel**
> SendBirdOpenChannel ocFreezeChannel()

## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcFreezeChannelRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // OcFreezeChannelData (optional)
  ocFreezeChannelData: {
    channelUrl: "channelUrl_example",
    freeze: true,
  },
};

apiInstance.ocFreezeChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocFreezeChannelData** | **OcFreezeChannelData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**SendBirdOpenChannel**

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

# **ocListBannedUsers**
> OcListBannedUsersResponse ocListBannedUsers()

## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcListBannedUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.ocListBannedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**OcListBannedUsersResponse**

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

# **ocListMutedUsers**
> OcListMutedUsersResponse ocListMutedUsers()

## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcListMutedUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.ocListMutedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**OcListMutedUsersResponse**

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

# **ocMuteUser**
> SendBirdOpenChannel ocMuteUser()

## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcMuteUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // OcMuteUserData (optional)
  ocMuteUserData: {
    userId: "userId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.ocMuteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocMuteUserData** | **OcMuteUserData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**SendBirdOpenChannel**

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

# **ocUnbanUserById**
> OcDeleteChannelByUrl200Response ocUnbanUserById()

## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcUnbanUserByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
};

apiInstance.ocUnbanUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcDeleteChannelByUrl200Response**

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

# **ocUnmuteUserById**
> OcDeleteChannelByUrl200Response ocUnmuteUserById()

## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcUnmuteUserByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
};

apiInstance.ocUnmuteUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcDeleteChannelByUrl200Response**

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

# **ocUpdateBanById**
> OcUpdateBanByIdResponse ocUpdateBanById()

## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcUpdateBanByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
  // OcUpdateBanByIdData (optional)
  ocUpdateBanByIdData: {
    channelUrl: "channelUrl_example",
    bannedUserId: "bannedUserId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.ocUpdateBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocUpdateBanByIdData** | **OcUpdateBanByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcUpdateBanByIdResponse**

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

# **ocViewBanById**
> OcViewBanByIdResponse ocViewBanById()

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcViewBanByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
};

apiInstance.ocViewBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcViewBanByIdResponse**

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

# **ocViewMuteById**
> OcViewMuteByIdResponse ocViewMuteById()

## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiOcViewMuteByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
};

apiInstance.ocViewMuteById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined


### Return type

**OcViewMuteByIdResponse**

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

# **unblockUserById**
> any unblockUserById()

## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ModerationApi(configuration);

let body:.ModerationApiUnblockUserByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  userId: "user_id_example",
  // string
  targetId: "target_id_example",
};

apiInstance.unblockUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **targetId** | [**string**] |  | defaults to undefined


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


