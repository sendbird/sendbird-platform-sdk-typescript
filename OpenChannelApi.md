# Sendbird.OpenChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnOpenChannel**](OpenChannelApi.md#createAnOpenChannel) | **POST** /v3/open_channels | Create an open channel
[**deleteAnOpenChannel**](OpenChannelApi.md#deleteAnOpenChannel) | **DELETE** /v3/open_channels/{channel_url} | Delete an open channel
[**getAnOpenChannel**](OpenChannelApi.md#getAnOpenChannel) | **GET** /v3/open_channels/{channel_url} | Get an open channel
[**listChannelOperators**](OpenChannelApi.md#listChannelOperators) | **GET** /v3/open_channels/{channel_url}/operators | List operators of an open channel
[**listOpenChannels**](OpenChannelApi.md#listOpenChannels) | **GET** /v3/open_channels | List open channels
[**registerOperators**](OpenChannelApi.md#registerOperators) | **POST** /v3/open_channels/{channel_url}/operators | Register operators to an open channel
[**unregisterOperators**](OpenChannelApi.md#unregisterOperators) | **DELETE** /v3/open_channels/{channel_url}/operators | Unregister operators from an open channel
[**updateAnOpenChannel**](OpenChannelApi.md#updateAnOpenChannel) | **PUT** /v3/open_channels/{channel_url} | Update an open channel


# **createAnOpenChannel**
> SendbirdOpenChannel createAnOpenChannel()

## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don't need invitations to join open channels, short-lived live events like concerts or live streams that don't require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiCreateAnOpenChannelRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateAnOpenChannelRequest (optional)
  createAnOpenChannelRequest: {
    isDynamicPartitioned: true,
    channelUrl: "channelUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    coverUrl: "coverUrl_example",
    customType: "customType_example",
    data: "data_example",
    isEphemeral: true,
    name: "name_example",
    operatorIds: [
      "operatorIds_example",
    ],
  },
};

apiInstance.createAnOpenChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAnOpenChannelRequest** | **CreateAnOpenChannelRequest**|  |
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

# **deleteAnOpenChannel**
> any deleteAnOpenChannel()

## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiDeleteAnOpenChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteAnOpenChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
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

# **getAnOpenChannel**
> SendbirdOpenChannel getAnOpenChannel()

## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiGetAnOpenChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean | Determines whether to include a list of operators in the response. (Default: false) (optional)
  includeOperators: true,
};

apiInstance.getAnOpenChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **includeOperators** | [**boolean**] | Determines whether to include a list of operators in the response. (Default: false) | (optional) defaults to undefined


### Return type

**SendbirdOpenChannel**

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

# **listChannelOperators**
> ListOperatorsResponse listChannelOperators()

## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiListChannelOperatorsRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listChannelOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListOperatorsResponse**

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

# **listOpenChannels**
> ListOpenChannelsResponse listOpenChannels()

## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiListOpenChannelsRequest = {
  // string (optional)
  token: "token_example",
  // string | Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended. (optional)
  channelUrls: "channel_urls_example",
  // number (optional)
  limit: 1,
  // string | Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types=urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type. (optional)
  customTypes: "custom_types_example",
  // string (optional)
  nameContains: "name_contains_example",
  // string (optional)
  urlContains: "url_contains_example",
  // boolean | Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true) (optional)
  showFrozen: true,
  // boolean | Determines whether to include channel metadata in the response. (Default: false) (optional)
  showMetadata: true,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listOpenChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] |  | (optional) defaults to undefined
 **channelUrls** | [**string**] | Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended. | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] | Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types&#x3D;urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type. | (optional) defaults to undefined
 **nameContains** | [**string**] |  | (optional) defaults to undefined
 **urlContains** | [**string**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] | Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true) | (optional) defaults to undefined
 **showMetadata** | [**boolean**] | Determines whether to include channel metadata in the response. (Default: false) | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListOpenChannelsResponse**

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

# **registerOperators**
> any registerOperators()

## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiRegisterOperatorsRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // RegisterOperatorsToAGroupChannelRequest (optional)
  registerOperatorsToAGroupChannelRequest: {
    operatorIds: [
      "operatorIds_example",
    ],
  },
};

apiInstance.registerOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerOperatorsToAGroupChannelRequest** | **RegisterOperatorsToAGroupChannelRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
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

# **unregisterOperators**
> any unregisterOperators()

## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiUnregisterOperatorsRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids=urlencoded_id_1,urlencoded_id_2.
  operatorIds: "operator_ids_example",
  // string (optional)
  deleteAll: "delete_all_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.unregisterOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **operatorIds** | [**string**] | Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2. | defaults to undefined
 **deleteAll** | [**string**] |  | (optional) defaults to undefined
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

# **updateAnOpenChannel**
> SendbirdOpenChannel updateAnOpenChannel()

## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.OpenChannelApi(configuration);

let body:Sendbird.OpenChannelApiUpdateAnOpenChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateAnOpenChannelRequest (optional)
  updateAnOpenChannelRequest: {
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    coverUrl: "coverUrl_example",
    customType: "customType_example",
    data: "data_example",
    name: "name_example",
    operatorIds: [
      "operatorIds_example",
    ],
  },
};

apiInstance.updateAnOpenChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAnOpenChannelRequest** | **UpdateAnOpenChannelRequest**|  |
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


