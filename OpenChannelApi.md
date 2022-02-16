# .OpenChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocBanUser**](OpenChannelApi.md#ocBanUser) | **POST** /v3/open_channels/{channel_url}/ban | Ban a user
[**ocCancelTheRegistrationOfOperators**](OpenChannelApi.md#ocCancelTheRegistrationOfOperators) | **DELETE** /v3/open_channels/{channel_url}/operators | Cancel the registration of operators
[**ocCreateChannel**](OpenChannelApi.md#ocCreateChannel) | **POST** /v3/open_channels | Create a channel
[**ocDeleteChannelByUrl**](OpenChannelApi.md#ocDeleteChannelByUrl) | **DELETE** /v3/open_channels/{channel_url} | Delete a channel
[**ocFreezeChannel**](OpenChannelApi.md#ocFreezeChannel) | **PUT** /v3/open_channels/{channel_url}/freeze | Freeze a channel
[**ocListBannedUsers**](OpenChannelApi.md#ocListBannedUsers) | **GET** /v3/open_channels/{channel_url}/ban | List banned users
[**ocListChannels**](OpenChannelApi.md#ocListChannels) | **GET** /v3/open_channels | List channels
[**ocListMutedUsers**](OpenChannelApi.md#ocListMutedUsers) | **GET** /v3/open_channels/{channel_url}/mute | List muted users
[**ocListOperators**](OpenChannelApi.md#ocListOperators) | **GET** /v3/open_channels/{channel_url}/operators | List operators
[**ocListParticipants**](OpenChannelApi.md#ocListParticipants) | **GET** /v3/open_channels/{channel_url}/participants | List participants
[**ocMuteUser**](OpenChannelApi.md#ocMuteUser) | **POST** /v3/open_channels/{channel_url}/mute | Mute a user
[**ocRegisterOperators**](OpenChannelApi.md#ocRegisterOperators) | **POST** /v3/open_channels/{channel_url}/operators | Register operators
[**ocUnbanUserById**](OpenChannelApi.md#ocUnbanUserById) | **DELETE** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**ocUnmuteUserById**](OpenChannelApi.md#ocUnmuteUserById) | **DELETE** /v3/open_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**ocUpdateBanById**](OpenChannelApi.md#ocUpdateBanById) | **PUT** /v3/open_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**ocUpdateChannelByUrl**](OpenChannelApi.md#ocUpdateChannelByUrl) | **PUT** /v3/open_channels/{channel_url} | Update a channel
[**ocViewBanById**](OpenChannelApi.md#ocViewBanById) | **GET** /v3/open_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**ocViewChannelByUrl**](OpenChannelApi.md#ocViewChannelByUrl) | **GET** /v3/open_channels/{channel_url} | View a channel
[**ocViewMuteById**](OpenChannelApi.md#ocViewMuteById) | **GET** /v3/open_channels/{channel_url}/mute/{muted_user_id} | View a mute


# **ocBanUser**
> OcBanUserResponse ocBanUser()

## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcBanUserRequest = {
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

# **ocCancelTheRegistrationOfOperators**
> void ocCancelTheRegistrationOfOperators()

## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcCancelTheRegistrationOfOperatorsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // Array<string>
  operatorIds: [
    "operator_ids_example",
  ],
  // boolean (optional)
  deleteAll: true,
};

apiInstance.ocCancelTheRegistrationOfOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **operatorIds** | **Array&lt;string&gt;** |  | defaults to undefined
 **deleteAll** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ocCreateChannel**
> SendBirdOpenChannel ocCreateChannel()

## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcCreateChannelRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // OcCreateChannelData (optional)
  ocCreateChannelData: {
    name: "name_example",
    channelUrl: "channelUrl_example",
    coverUrl: "coverUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    customType: "customType_example",
    data: "data_example",
    isEphemeral: true,
    isDynamicPartitioned2HowDynamicPartitioningWorks: true,
    operatorIds: [
      1,
    ],
    operators: [
      "operators_example",
    ],
  },
};

apiInstance.ocCreateChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocCreateChannelData** | **OcCreateChannelData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


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

# **ocDeleteChannelByUrl**
> void ocDeleteChannelByUrl()

## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcDeleteChannelByUrlRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
};

apiInstance.ocDeleteChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


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
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcFreezeChannelRequest = {
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
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcListBannedUsersRequest = {
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

# **ocListChannels**
> OcListChannelsResponse ocListChannels()

## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcListChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  nameContains: "name_contains_example",
  // string (optional)
  urlContains: "url_contains_example",
  // boolean (optional)
  showFrozen: true,
  // boolean (optional)
  showMetadata: true,
  // string (optional)
  customType: "custom_type_example",
};

apiInstance.ocListChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **nameContains** | [**string**] |  | (optional) defaults to undefined
 **urlContains** | [**string**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] |  | (optional) defaults to undefined
 **showMetadata** | [**boolean**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined


### Return type

**OcListChannelsResponse**

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
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcListMutedUsersRequest = {
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

# **ocListOperators**
> OcListOperatorsResponse ocListOperators()

## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcListOperatorsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.ocListOperators(body).then((data:any) => {
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

**OcListOperatorsResponse**

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

# **ocListParticipants**
> OcListParticipantsResponse ocListParticipants()

## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcListParticipantsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.ocListParticipants(body).then((data:any) => {
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

**OcListParticipantsResponse**

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
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcMuteUserRequest = {
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

# **ocRegisterOperators**
> void ocRegisterOperators()

## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcRegisterOperatorsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // OcRegisterOperatorsData (optional)
  ocRegisterOperatorsData: {
    channelUrl: "channelUrl_example",
    operatorIds: [
      1,
    ],
  },
};

apiInstance.ocRegisterOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocRegisterOperatorsData** | **OcRegisterOperatorsData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ocUnbanUserById**
> void ocUnbanUserById()

## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcUnbanUserByIdRequest = {
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

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ocUnmuteUserById**
> void ocUnmuteUserById()

## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcUnmuteUserByIdRequest = {
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

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ocUpdateBanById**
> SendBirdUser ocUpdateBanById()

## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcUpdateBanByIdRequest = {
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

# **ocUpdateChannelByUrl**
> SendBirdOpenChannel ocUpdateChannelByUrl()

## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcUpdateChannelByUrlRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
  // OcUpdateChannelByUrlData (optional)
  ocUpdateChannelByUrlData: {
    channelUrl: "channelUrl_example",
    name: "name_example",
    coverUrl: "coverUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    customType: "customType_example",
    data: "data_example",
    operatorIds: [
      1,
    ],
    operators: [
      "operators_example",
    ],
  },
};

apiInstance.ocUpdateChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ocUpdateChannelByUrlData** | **OcUpdateChannelByUrlData**|  |
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

# **ocViewBanById**
> SendBirdUser ocViewBanById()

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcViewBanByIdRequest = {
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

# **ocViewChannelByUrl**
> SendBirdOpenChannel ocViewChannelByUrl()

## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcViewChannelByUrlRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
};

apiInstance.ocViewChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


### Return type

**SendBirdOpenChannel**

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
const apiInstance = new .OpenChannelApi(configuration);

let body:.OpenChannelApiOcViewMuteByIdRequest = {
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


