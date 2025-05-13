# Sendbird.MessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExtraDataToAMessage**](MessageApi.md#addExtraDataToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**deleteAMessage**](MessageApi.md#deleteAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**getAMessage**](MessageApi.md#getAMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | Get a message
[**getTotalNumberOfMessagesInAChannel**](MessageApi.md#getTotalNumberOfMessagesInAChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | Get total number of messages in a channel
[**listMessages**](MessageApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**markChannelMessagesAsRead**](MessageApi.md#markChannelMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**migrateMessages**](MessageApi.md#migrateMessages) | **POST** /v3/migration/{target_channel_url} | Migrate messages
[**removeExtraDataFromAMessage**](MessageApi.md#removeExtraDataFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**sendAMessage**](MessageApi.md#sendAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**updateAMessage**](MessageApi.md#updateAMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**updateExtraDataInAMessage**](MessageApi.md#updateExtraDataInAMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message


# **addExtraDataToAMessage**
> AddExtraDataToAMessageResponse addExtraDataToAMessage()

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-add-metadata#1-add-metadata ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiAddExtraDataToAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AddExtraDataToAMessageRequest (optional)
  addExtraDataToAMessageRequest: {
    sortedMetaarray: [
      {
        key: "key_example",
        value: [
          "value_example",
        ],
      },
    ],
  },
};

apiInstance.addExtraDataToAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addExtraDataToAMessageRequest** | **AddExtraDataToAMessageRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AddExtraDataToAMessageResponse**

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

# **deleteAMessage**
> any deleteAMessage()

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/delete-a-message#1-delete-a-message ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiDeleteAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
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

# **getAMessage**
> SendbirdMessageResponse getAMessage()

## Get a message  Retrieves information on a specific message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-a-message#1-get-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiGetAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // boolean (optional)
  includeReactions: true,
  // boolean (optional)
  includeThreadInfo: true,
  // boolean (optional)
  includeParentMessageInfo: true,
  // boolean | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings > Chat > Features on Sendbird Dashboard. (optional)
  includePollDetails: true,
  // boolean (optional)
  withSortedMetaArray: true,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
 **includeReactions** | [**boolean**] |  | (optional) defaults to undefined
 **includeThreadInfo** | [**boolean**] |  | (optional) defaults to undefined
 **includeParentMessageInfo** | [**boolean**] |  | (optional) defaults to undefined
 **includePollDetails** | [**boolean**] | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard. | (optional) defaults to undefined
 **withSortedMetaArray** | [**boolean**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdMessageResponse**

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

# **getTotalNumberOfMessagesInAChannel**
> GetTotalNumberOfMessagesInAChannelResponse getTotalNumberOfMessagesInAChannel()

## Get total number of messages in a channel  Retrieves the total number of messages in a specific channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-total-number-of-messages-in-a-channel#1-get-total-number-of-messages-in-a-channel ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiGetTotalNumberOfMessagesInAChannelRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getTotalNumberOfMessagesInAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetTotalNumberOfMessagesInAChannelResponse**

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

# **listMessages**
> ListMessagesResponse listMessages()

## List messages  You can retrieve a list of past messages of a specific channel with this API.  By default, this action returns a list of messages in the order they were created. Replies in threaded messages are also listed in the chronological order of their creation like other messages, not grouped with their parent messages.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/list-messages#1-list-messages  `channel_type`   Type: string   Description: Specifies the type of the channel. Either open_channels or group_channels.   `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of past messages.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiListMessagesRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // number | Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15.
  messageTs: 1,
  // number | Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15.
  messageId: 1,
  // number | Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts=1484202848298, then prev_limit=50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15) (optional)
  prevLimit: 1,
  // number | Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts=1484202848298, then next_limit=50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15) (optional)
  nextLimit: 1,
  // boolean | Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true) (optional)
  include: true,
  // boolean | Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false) (optional)
  reverse: true,
  // string | Restricts the search scope to only retrieve messages sent by the user with the specified ID. (optional)
  senderId: "sender_id_example",
  // string | Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string. (optional)
  senderIds: "sender_ids_example",
  // 'all' | 'operator' | 'nonoperator' (optional)
  operatorFilter: "all",
  // string | Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &custom_types=&...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type. (optional)
  customTypes: "custom_types_example",
  // 'MESG' | 'FILE' | 'ADMM' (optional)
  messageType: "MESG",
  // boolean (optional)
  includingRemoved: true,
  // boolean (optional)
  includeReactions: true,
  // 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL' | One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL (optional)
  includeReplyType: "NONE",
  // boolean (optional)
  includeParentMessageInfo: true,
  // boolean (optional)
  includeThreadInfo: true,
  // boolean | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings > Chat > Features on Sendbird Dashboard. (optional)
  includePollDetails: true,
  // boolean | Determines whether to include the sorted_metaarray property in the response. (Default: false) (optional)
  withSortedMetaArray: true,
  // boolean (optional)
  showSubchannelMessagesOnly: true,
  // string (optional)
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageTs** | [**number**] | Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15. | defaults to undefined
 **messageId** | [**number**] | Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15. | defaults to undefined
 **prevLimit** | [**number**] | Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts&#x3D;1484202848298, then prev_limit&#x3D;50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15) | (optional) defaults to undefined
 **nextLimit** | [**number**] | Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts&#x3D;1484202848298, then next_limit&#x3D;50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15) | (optional) defaults to undefined
 **include** | [**boolean**] | Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true) | (optional) defaults to undefined
 **reverse** | [**boolean**] | Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false) | (optional) defaults to undefined
 **senderId** | [**string**] | Restricts the search scope to only retrieve messages sent by the user with the specified ID. | (optional) defaults to undefined
 **senderIds** | [**string**] | Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string. | (optional) defaults to undefined
 **operatorFilter** | [**&#39;all&#39; | &#39;operator&#39; | &#39;nonoperator&#39;**]**Array<&#39;all&#39; &#124; &#39;operator&#39; &#124; &#39;nonoperator&#39;>** |  | (optional) defaults to undefined
 **customTypes** | [**string**] | Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &amp;custom_types&#x3D;&amp;...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type. | (optional) defaults to undefined
 **messageType** | [**&#39;MESG&#39; | &#39;FILE&#39; | &#39;ADMM&#39;**]**Array<&#39;MESG&#39; &#124; &#39;FILE&#39; &#124; &#39;ADMM&#39;>** |  | (optional) defaults to undefined
 **includingRemoved** | [**boolean**] |  | (optional) defaults to undefined
 **includeReactions** | [**boolean**] |  | (optional) defaults to undefined
 **includeReplyType** | [**&#39;NONE&#39; | &#39;ALL&#39; | &#39;ONLY_REPLY_TO_CHANNEL&#39;**]**Array<&#39;NONE&#39; &#124; &#39;ALL&#39; &#124; &#39;ONLY_REPLY_TO_CHANNEL&#39;>** | One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL | (optional) defaults to undefined
 **includeParentMessageInfo** | [**boolean**] |  | (optional) defaults to undefined
 **includeThreadInfo** | [**boolean**] |  | (optional) defaults to undefined
 **includePollDetails** | [**boolean**] | Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard. | (optional) defaults to undefined
 **withSortedMetaArray** | [**boolean**] | Determines whether to include the sorted_metaarray property in the response. (Default: false) | (optional) defaults to undefined
 **showSubchannelMessagesOnly** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListMessagesResponse**

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

# **markChannelMessagesAsRead**
> any markChannelMessagesAsRead()

## Mark all messages as read  Marks all messages in a group channel as read for a specific user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/message/read-receipts/mark-all-messages-as-read-message#1-mark-all-messages-as-read

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiMarkChannelMessagesAsReadRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // MarkChannelMessagesAsReadRequest (optional)
  markChannelMessagesAsReadRequest: {
    userId: "userId_example",
  },
};

apiInstance.markChannelMessagesAsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChannelMessagesAsReadRequest** | **MarkChannelMessagesAsReadRequest**|  |
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

# **migrateMessages**
> any migrateMessages()

## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).      There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user).      2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically.      3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.       https://sendbird.com/docs/chat/platform-api/v3/message/migration/migrate-messages#1-migrate-messages

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiMigrateMessagesRequest = {
  // string | (Required) 
  targetChannelUrl: "target_channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // MigrateMessagesRequest (optional)
  migrateMessagesRequest: {
    messages: [
      null,
    ],
    updateReadTs: true,
    rewindReadTs: true,
  },
};

apiInstance.migrateMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrateMessagesRequest** | **MigrateMessagesRequest**|  |
 **targetChannelUrl** | [**string**] | (Required)  | defaults to undefined
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

# **removeExtraDataFromAMessage**
> any removeExtraDataFromAMessage()

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-remove-metadata#1-remove-metadata ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiRemoveExtraDataFromAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // string (optional)
  keys: "keys_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.removeExtraDataFromAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
 **keys** | [**string**] |  | (optional) defaults to undefined
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

# **sendAMessage**
> SendbirdMessageResponse sendAMessage()

## Send a message  You can use this action to send a text message, a file message, or an admin message to a specific channel. Sendbird Chat SDKs and the platform API allows you to upload any type of files in messages to the Sendbird server. See [Message Overview](https://sendbird.com/docs/chat/platform-api/v3/message/message-overview) for more information on each message type. Messages are sent between client devices running the Sendbird Chat SDK or UIKit as well as programmatically from businesses to their customers. For instance, a delivery app can automatically send a message like \"Arriving in one minute!\" on behalf of a delivery driver.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message#1-send-a-message ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiSendAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // SendAMessageRequest (optional)
  sendAMessageRequest: null,
};

apiInstance.sendAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendAMessageRequest** | **SendAMessageRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdMessageResponse**

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

# **updateAMessage**
> SendbirdMessageResponse updateAMessage()

## Update a message  Updates specific information on a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/update-a-message#1-update-a-message ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiUpdateAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateAMessageRequest (optional)
  updateAMessageRequest: {
    customType: "customType_example",
    data: "data_example",
    mentionType: "mentionType_example",
    mentionedUserIds: [
      "mentionedUserIds_example",
    ],
    message: "message_example",
    url: "url_example",
    messageType: "MESG",
  },
};

apiInstance.updateAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAMessageRequest** | **UpdateAMessageRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdMessageResponse**

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

# **updateExtraDataInAMessage**
> UpdateExtraDataInAMessageResponse updateExtraDataInAMessage()

## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-update-metadata#1-update-metadata ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.MessageApi(configuration);

let body:Sendbird.MessageApiUpdateExtraDataInAMessageRequest = {
  // 'open_channels' | 'group_channels' | (Required) 
  channelType: "open_channels",
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required) 
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateExtraDataInAMessageRequest (optional)
  updateExtraDataInAMessageRequest: {
    mode: "mode_example",
    sortedMetaarray: [
      {
        key: "key_example",
        value: [
          "value_example",
        ],
      },
    ],
    upsert: true,
  },
};

apiInstance.updateExtraDataInAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExtraDataInAMessageRequest** | **UpdateExtraDataInAMessageRequest**|  |
 **channelType** | [**&#39;open_channels&#39; | &#39;group_channels&#39;**]**Array<&#39;open_channels&#39; &#124; &#39;group_channels&#39;>** | (Required)  | defaults to undefined
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **messageId** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdateExtraDataInAMessageResponse**

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


