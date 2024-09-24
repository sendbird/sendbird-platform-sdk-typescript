# Sendbird.DeleteAPinApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ChannelTypeChannelUrlMessagesMessageIdPinDelete**](DeleteAPinApi.md#v3ChannelTypeChannelUrlMessagesMessageIdPinDelete) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/pin | Delete a pin


# **v3ChannelTypeChannelUrlMessagesMessageIdPinDelete**
> SendBirdChannelResponse v3ChannelTypeChannelUrlMessagesMessageIdPinDelete()

## Delete a pin Unpin a message from its channel. -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.DeleteAPinApi(configuration);

let body:Sendbird.DeleteAPinApiV3ChannelTypeChannelUrlMessagesMessageIdPinDeleteRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // number
  messageId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3ChannelTypeChannelUrlMessagesMessageIdPinDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdChannelResponse**

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


