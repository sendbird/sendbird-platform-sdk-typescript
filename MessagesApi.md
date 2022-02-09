# .MessagesApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExtraDataToMessage**](MessagesApi.md#addExtraDataToMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**addReactionToAMessage**](MessagesApi.md#addReactionToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Add a reaction to a message
[**deleteMessageById**](MessagesApi.md#deleteMessageById) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**gcMarkAllMessagesAsDelivered**](MessagesApi.md#gcMarkAllMessagesAsDelivered) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_delivered | Mark all messages as delivered
[**gcMarkAllMessagesAsRead**](MessagesApi.md#gcMarkAllMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**gcViewNumberOfEachMembersUnreadMessages**](MessagesApi.md#gcViewNumberOfEachMembersUnreadMessages) | **GET** /v3/group_channels/{channel_url}/messages/unread_count | View number of each member&#39;s unread messages
[**listMessages**](MessagesApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**listReactionsOfMessage**](MessagesApi.md#listReactionsOfMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | List reactions of a message
[**removeExtraDataFromMessage**](MessagesApi.md#removeExtraDataFromMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**removeReactionFromAMessage**](MessagesApi.md#removeReactionFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Remove a reaction from a message
[**sendMessage**](MessagesApi.md#sendMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**translateMessageIntoOtherLanguages**](MessagesApi.md#translateMessageIntoOtherLanguages) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/translation | Translate a message into other languages
[**updateExtraDataInMessage**](MessagesApi.md#updateExtraDataInMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message
[**updateMessageById**](MessagesApi.md#updateMessageById) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**viewMessageById**](MessagesApi.md#viewMessageById) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | View a message
[**viewTotalNumberOfMessagesInChannel**](MessagesApi.md#viewTotalNumberOfMessagesInChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | View total number of messages in a channel


# **addExtraDataToMessage**
> AddExtraDataToMessageResponse addExtraDataToMessage()

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiAddExtraDataToMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AddExtraDataToMessageData (optional)
  addExtraDataToMessageData: {
    channelType: "channelType_example",
    channelUrl: "channelUrl_example",
    messageId: 1,
    sortedMetaarray: "sortedMetaarray_example",
  },
};

apiInstance.addExtraDataToMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addExtraDataToMessageData** | **AddExtraDataToMessageData**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AddExtraDataToMessageResponse**

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

# **addReactionToAMessage**
> AddReactionToAMessageResponse addReactionToAMessage()

## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiAddReactionToAMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AddReactionToAMessageData (optional)
  addReactionToAMessageData: {
    channelType: "channelType_example",
    channelUrl: "channelUrl_example",
    messageId: 1,
    userId: "userId_example",
    reaction: "reaction_example",
  },
};

apiInstance.addReactionToAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addReactionToAMessageData** | **AddReactionToAMessageData**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**AddReactionToAMessageResponse**

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

# **deleteMessageById**
> void deleteMessageById()

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiDeleteMessageByIdRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteMessageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **gcMarkAllMessagesAsDelivered**
> GcMarkAllMessagesAsDeliveredResponse gcMarkAllMessagesAsDelivered()

## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGcMarkAllMessagesAsDeliveredRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcMarkAllMessagesAsDeliveredData (optional)
  gcMarkAllMessagesAsDeliveredData: {
    applicationId: "applicationId_example",
    channelUrl: "channelUrl_example",
    userId: "userId_example",
  },
};

apiInstance.gcMarkAllMessagesAsDelivered(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcMarkAllMessagesAsDeliveredData** | **GcMarkAllMessagesAsDeliveredData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**GcMarkAllMessagesAsDeliveredResponse**

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

# **gcMarkAllMessagesAsRead**
> void gcMarkAllMessagesAsRead()

## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGcMarkAllMessagesAsReadRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcMarkAllMessagesAsReadData (optional)
  gcMarkAllMessagesAsReadData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    timestamp: 1,
  },
};

apiInstance.gcMarkAllMessagesAsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcMarkAllMessagesAsReadData** | **GcMarkAllMessagesAsReadData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **gcViewNumberOfEachMembersUnreadMessages**
> GcViewNumberOfEachMembersUnreadMessagesResponse gcViewNumberOfEachMembersUnreadMessages()

## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiGcViewNumberOfEachMembersUnreadMessagesRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  userIds: "user_ids_example",
};

apiInstance.gcViewNumberOfEachMembersUnreadMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **userIds** | [**string**] |  | (optional) defaults to undefined


### Return type

**GcViewNumberOfEachMembersUnreadMessagesResponse**

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

## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiListMessagesRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // number
  messageTs: 1,
  // number
  messageId: 1,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // number (optional)
  prevLimit: 1,
  // number (optional)
  nextLimit: 1,
  // boolean (optional)
  include: true,
  // boolean (optional)
  reverse: true,
  // string (optional)
  senderId: "sender_id_example",
  // string (optional)
  senderIds: "sender_ids_example",
  // string (optional)
  operatorFilter: "operator_filter_example",
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  messageType: "message_type_example",
  // boolean (optional)
  includingRemoved: true,
  // boolean (optional)
  includeReactions: true,
  // boolean (optional)
  withSortedMetaArray: true,
  // boolean (optional)
  showSubchannelMessagesOnly: true,
  // string (optional)
  userId: "user_id_example",
  // string (optional)
  customType: "custom_type_example",
  // boolean (optional)
  withMetaArray: true,
};

apiInstance.listMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageTs** | [**number**] |  | defaults to undefined
 **messageId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **prevLimit** | [**number**] |  | (optional) defaults to undefined
 **nextLimit** | [**number**] |  | (optional) defaults to undefined
 **include** | [**boolean**] |  | (optional) defaults to undefined
 **reverse** | [**boolean**] |  | (optional) defaults to undefined
 **senderId** | [**string**] |  | (optional) defaults to undefined
 **senderIds** | [**string**] |  | (optional) defaults to undefined
 **operatorFilter** | [**string**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **messageType** | [**string**] |  | (optional) defaults to undefined
 **includingRemoved** | [**boolean**] |  | (optional) defaults to undefined
 **includeReactions** | [**boolean**] |  | (optional) defaults to undefined
 **withSortedMetaArray** | [**boolean**] |  | (optional) defaults to undefined
 **showSubchannelMessagesOnly** | [**boolean**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined
 **withMetaArray** | [**boolean**] |  | (optional) defaults to undefined


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

# **listReactionsOfMessage**
> ListReactionsOfMessageResponse listReactionsOfMessage()

## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiListReactionsOfMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  listUsers: true,
};

apiInstance.listReactionsOfMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **listUsers** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ListReactionsOfMessageResponse**

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

# **removeExtraDataFromMessage**
> void removeExtraDataFromMessage()

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiRemoveExtraDataFromMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // Array<string> (optional)
  keys: [
    "keys_example",
  ],
};

apiInstance.removeExtraDataFromMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **keys** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **removeReactionFromAMessage**
> RemoveReactionFromAMessageResponse removeReactionFromAMessage()

## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiRemoveReactionFromAMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  userId: "user_id_example",
  // string (optional)
  reaction: "reaction_example",
};

apiInstance.removeReactionFromAMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **reaction** | [**string**] |  | (optional) defaults to undefined


### Return type

**RemoveReactionFromAMessageResponse**

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

# **sendMessage**
> SendBirdMessageResponse sendMessage()

## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiSendMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // SendMessageData (optional)
  sendMessageData: {
    userId: "userId_example",
    channelType: "channelType_example",
    channelUrl: "channelUrl_example",
    messageType: "messageType_example",
    message: "message_example",
    customType: "customType_example",
    data: "data_example",
    sendPush: true,
    mentionType: "mentionType_example",
    mentionedUserIds: [
      "mentionedUserIds_example",
    ],
    isSilent: true,
    sortedMetaarray: "sortedMetaarray_example",
    createdAt: 1,
    dedupId: "dedupId_example",
    apnsBundleId: "apnsBundleId_example",
    sound: "sound_example",
    volume: 3.14,
  },
};

apiInstance.sendMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageData** | **SendMessageData**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdMessageResponse**

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

# **translateMessageIntoOtherLanguages**
> SendBirdMessageResponse translateMessageIntoOtherLanguages()

## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiTranslateMessageIntoOtherLanguagesRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // any (optional)
  body: {},
};

apiInstance.translateMessageIntoOtherLanguages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdMessageResponse**

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

# **updateExtraDataInMessage**
> UpdateExtraDataInMessageResponse updateExtraDataInMessage()

## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiUpdateExtraDataInMessageRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateExtraDataInMessageData (optional)
  updateExtraDataInMessageData: {
    channelType: "channelType_example",
    channelUrl: "channelUrl_example",
    messageId: 1,
    sortedMetaarray: "sortedMetaarray_example",
    mode: "mode_example",
    upsert: true,
  },
};

apiInstance.updateExtraDataInMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExtraDataInMessageData** | **UpdateExtraDataInMessageData**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**UpdateExtraDataInMessageResponse**

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

# **updateMessageById**
> SendBirdMessageResponse updateMessageById()

## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiUpdateMessageByIdRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateMessageByIdData (optional)
  updateMessageByIdData: {
    channelType: "channelType_example",
    channelUrl: "channelUrl_example",
    messageId: 1,
    messageType: "messageType_example",
    message: "message_example",
    customType: "customType_example",
    data: "data_example",
    mentionType: "mentionType_example",
    mentionedUserIds: [
      1,
    ],
  },
};

apiInstance.updateMessageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMessageByIdData** | **UpdateMessageByIdData**|  |
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdMessageResponse**

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

# **viewMessageById**
> SendBirdMessageResponse viewMessageById()

## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiViewMessageByIdRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  withSortedMetaArray: true,
  // boolean (optional)
  withMetaArray: true,
};

apiInstance.viewMessageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **withSortedMetaArray** | [**boolean**] |  | (optional) defaults to undefined
 **withMetaArray** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**SendBirdMessageResponse**

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

# **viewTotalNumberOfMessagesInChannel**
> ViewTotalNumberOfMessagesInChannelResponse viewTotalNumberOfMessagesInChannel()

## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiViewTotalNumberOfMessagesInChannelRequest = {
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewTotalNumberOfMessagesInChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewTotalNumberOfMessagesInChannelResponse**

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


