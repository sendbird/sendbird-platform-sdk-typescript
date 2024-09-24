# Sendbird.ScheduledMessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost**](ScheduledMessageApi.md#v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost) | **POST** /v3/{channel_type}/{channel_url}/scheduled_messages/{scheduled_message_id}/send_now | Send a scheduled message immediately
[**v3GroupChannelsChannelUrlScheduledMessagesPost**](ScheduledMessageApi.md#v3GroupChannelsChannelUrlScheduledMessagesPost) | **POST** /v3/group_channels/{channel_url}/scheduled_messages | Create a scheduled message
[**v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete**](ScheduledMessageApi.md#v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete) | **DELETE** /v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id} | Cancel a scheduled message
[**v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet**](ScheduledMessageApi.md#v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet) | **GET** /v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id} | View a scheduled message
[**v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost**](ScheduledMessageApi.md#v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost) | **POST** /v3/group_channels/{channel_url}/scheduled_messages/{scheduled_message_id} | Update a scheduled message
[**v3ScheduledMessagesCountGet**](ScheduledMessageApi.md#v3ScheduledMessagesCountGet) | **GET** /v3/scheduled_messages/count | View number of scheduled messages
[**v3ScheduledMessagesGet**](ScheduledMessageApi.md#v3ScheduledMessagesGet) | **GET** /v3/scheduled_messages | List scheduled messages


# **v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost**
> any v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost()

## Send a scheduled message immediately This action sends a scheduled message immediately. A user can only send their own scheduled messages immediately. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/send-a-scheduled-message-immediately -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPostRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // number
  scheduledMessageId: ,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3ChannelTypeChannelUrlScheduledMessagesScheduledMessageIdSendNowPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **scheduledMessageId** | **number** |  | defaults to undefined
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

# **v3GroupChannelsChannelUrlScheduledMessagesPost**
> V3ScheduledMessagesGet200Response v3GroupChannelsChannelUrlScheduledMessagesPost()

## Create a scheduled message This action creates a new scheduled message. If a user leaves the channel before the scheduled time for the message to be sent, the scheduled message will be removed. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/create-a-scheduled-message -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesPostRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "Api-Token_example",
  // V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest (optional)
  v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest: {
    messageType: "messageType_example",
    userId: "userId_example",
    message: "message_example",
    file: "file_example",
    url: "url_example",
    scheduledAt: 3.14,
    customType: "customType_example",
    data: "data_example",
    sendPush: true,
    mentionType: "mentionType_example",
    mentionedUserIds: [
      "mentionedUserIds_example",
    ],
    isSilent: true,
    markAsRead: true,
    sortedMetaarray: [
      {},
    ],
    dedupId: "dedupId_example",
    apnsBundleId: "apnsBundleId_example",
    appleCriticalAlertOptions: {},
    sound: "sound_example",
null,
  },
};

apiInstance.v3GroupChannelsChannelUrlScheduledMessagesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest** | **V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesGet200Response**

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

# **v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete**
> V3ScheduledMessagesGet200Response v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete()

## Cancel a scheduled message This action cancels a message that a user has scheduled to send at a later time. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/cancel-a-scheduled-message -----------------------------                      

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest = {
  // string
  channelUrl: "channel_url_example",
  // number
  scheduledMessageId: ,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **scheduledMessageId** | **number** |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesGet200Response**

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

# **v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet**
> V3ScheduledMessagesGet200Response v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet()

## View a scheduled message This action retrieves information on a specific scheduled message. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/view-a-scheduled-message -----------------------------                      

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGetRequest = {
  // string
  channelUrl: "channel_url_example",
  // number
  scheduledMessageId: ,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **scheduledMessageId** | **number** |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesGet200Response**

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

# **v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost**
> V3ScheduledMessagesGet200Response v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost()

## Update a scheduled message This action updates information on a specific scheduled message. You can’t change the message type. Update operation should be done at least 5 minutes prior to the original scheduled time. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/update-a-scheduled-message -----------------------------      

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPostRequest = {
  // string
  channelUrl: "channel_url_example",
  // number
  scheduledMessageId: ,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest (optional)
  v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest: {
    messageType: "messageType_example",
    userId: "userId_example",
    message: "message_example",
    file: "file_example",
    url: "url_example",
    scheduledAt: 3.14,
    customType: "customType_example",
    data: "data_example",
    sendPush: true,
    mentionType: "mentionType_example",
    mentionedUserIds: [
      "mentionedUserIds_example",
    ],
    isSilent: true,
    markAsRead: true,
    sortedMetaarray: [
      {},
    ],
    dedupId: "dedupId_example",
    apnsBundleId: "apnsBundleId_example",
    appleCriticalAlertOptions: {},
    sound: "sound_example",
null,
  },
};

apiInstance.v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest** | **V3GroupChannelsChannelUrlScheduledMessagesScheduledMessageIdDeleteRequest**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **scheduledMessageId** | **number** |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesGet200Response**

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

# **v3ScheduledMessagesCountGet**
> V3ScheduledMessagesCountGet200Response v3ScheduledMessagesCountGet()

## View number of scheduled messages This action retrieves the total number of scheduled messages that a user has. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/view-number-of-scheduled-messages -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3ScheduledMessagesCountGetRequest = {
  // string (optional)
  apiToken: "Api-Token_example",
  // string (optional)
  channelType: "channel_type_example",
  // string (optional)
  channelUrl: "channel_url_example",
  // string (optional)
  senderId: "sender_id_example",
  // Array<any> (optional)
  status: [
    {},
  ],
  // string (optional)
  messageType: "message_type_example",
};

apiInstance.v3ScheduledMessagesCountGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **channelType** | [**string**] |  | (optional) defaults to undefined
 **channelUrl** | [**string**] |  | (optional) defaults to undefined
 **senderId** | [**string**] |  | (optional) defaults to undefined
 **status** | **Array&lt;any&gt;** |  | (optional) defaults to undefined
 **messageType** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesCountGet200Response**

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

# **v3ScheduledMessagesGet**
> V3ScheduledMessagesGet200Response v3ScheduledMessagesGet()

## List scheduled messages This action retrieves a list of scheduled messages. A user can only see the list of their own scheduled messages. https://sendbird.com/docs/chat/v3/platform-api/message/scheduled-messages/list-scheduled-messages -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ScheduledMessageApi(configuration);

let body:Sendbird.ScheduledMessageApiV3ScheduledMessagesGetRequest = {
  // string (optional)
  apiToken: "Api-Token_example",
  // string (optional)
  channelType: "channel_type_example",
  // string (optional)
  channelUrl: "channel_url_example",
  // string (optional)
  senderId: "sender_id_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: ,
  // string (optional)
  order: "order_example",
  // boolean (optional)
  reverse: true,
  // Array<any> (optional)
  status: [
    {},
  ],
  // string (optional)
  messageType: "message_type_example",
};

apiInstance.v3ScheduledMessagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **channelType** | [**string**] |  | (optional) defaults to undefined
 **channelUrl** | [**string**] |  | (optional) defaults to undefined
 **senderId** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | **number** |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **reverse** | [**boolean**] |  | (optional) defaults to undefined
 **status** | **Array&lt;any&gt;** |  | (optional) defaults to undefined
 **messageType** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ScheduledMessagesGet200Response**

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


