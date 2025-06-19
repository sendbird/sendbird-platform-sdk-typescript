# Sendbird.MetadataApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAChannelMetadata**](MetadataApi.md#createAChannelMetadata) | **POST** /v3/{channel_type}/{channel_url}/metadata | Create a channel metadata
[**deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata**](MetadataApi.md#deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata) | **DELETE** /v3/{channel_type}/{channel_url}/metadata | Delete a channel metadata - When deleting all items of a channel metadata
[**updateAChannelMetadata**](MetadataApi.md#updateAChannelMetadata) | **PUT** /v3/{channel_type}/{channel_url}/metadata | Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
[**viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata**](MetadataApi.md#viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata) | **GET** /v3/{channel_type}/{channel_url}/metadata | View a channel metadata - When retrieving all items of a channel metadata


# **createAChannelMetadata**
> CreateAChannelMetadataResponse createAChannelMetadata()

## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-create-metadata#1-create-metadata ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MetadataApi(configuration);

let body:Sendbird.MetadataApiCreateAChannelMetadataRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateAChannelMetadataRequest (optional)
  createAChannelMetadataRequest: {
    includeTs: true,
    metadata: {},
  },
};

apiInstance.createAChannelMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAChannelMetadataRequest** | **CreateAChannelMetadataRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CreateAChannelMetadataResponse**

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

# **deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata**
> any deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata()

## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-delete-metadata#1-delete-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MetadataApi(configuration);

let body:Sendbird.MetadataApiDeleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadataRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  key: "key_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
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

# **updateAChannelMetadata**
> any updateAChannelMetadata()

## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-update-metadata#1-update-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MetadataApi(configuration);

let body:Sendbird.MetadataApiUpdateAChannelMetadataRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateAChannelMetadataRequest (optional)
  updateAChannelMetadataRequest: {
    metadata: {},
    upsert: true,
  },
};

apiInstance.updateAChannelMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAChannelMetadataRequest** | **UpdateAChannelMetadataRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
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

# **viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata**
> any viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata()

## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-get-metadata#1-get-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MetadataApi(configuration);

let body:Sendbird.MetadataApiViewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadataRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  key: "key_example",
  // string | In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended. (optional)
  keys: "keys_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **key** | [**string**] |  | (optional) defaults to undefined
 **keys** | [**string**] | In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended. | (optional) defaults to undefined
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


