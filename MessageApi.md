# .MessageApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmojiCategories**](MessageApi.md#addEmojiCategories) | **POST** /v3/emoji_categories | Add emoji categories
[**addEmojis**](MessageApi.md#addEmojis) | **POST** /v3/emojis | Add emojis
[**addExtraDataToMessage**](MessageApi.md#addExtraDataToMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Add extra data to a message
[**addReactionToAMessage**](MessageApi.md#addReactionToAMessage) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Add a reaction to a message
[**deleteEmojiByKey**](MessageApi.md#deleteEmojiByKey) | **DELETE** /v3/emojis/{emoji_key} | Delete an emoji
[**deleteEmojiCategoryById**](MessageApi.md#deleteEmojiCategoryById) | **DELETE** /v3/emoji_categories/{emoji_category_id} | Delete an emoji category
[**deleteMessageById**](MessageApi.md#deleteMessageById) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id} | Delete a message
[**enableReactions**](MessageApi.md#enableReactions) | **PUT** /v3/applications/settings/reactions | Enable reactions
[**gcMarkAllMessagesAsDelivered**](MessageApi.md#gcMarkAllMessagesAsDelivered) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_delivered | Mark all messages as delivered
[**gcMarkAllMessagesAsRead**](MessageApi.md#gcMarkAllMessagesAsRead) | **PUT** /v3/group_channels/{channel_url}/messages/mark_as_read | Mark all messages as read
[**gcViewNumberOfEachMembersUnreadMessages**](MessageApi.md#gcViewNumberOfEachMembersUnreadMessages) | **GET** /v3/group_channels/{channel_url}/messages/unread_count | View number of each member&#39;s unread messages
[**getEmojiByKey**](MessageApi.md#getEmojiByKey) | **GET** /v3/emojis/{emoji_key} | Get an emoji
[**getEmojiCategoryById**](MessageApi.md#getEmojiCategoryById) | **GET** /v3/emoji_categories/{emoji_category_id} | Get an emoji category
[**getStatistics**](MessageApi.md#getStatistics) | **GET** /v3/announcement_stats/weekly | Get statistics - weekly
[**getStatisticsDaily**](MessageApi.md#getStatisticsDaily) | **GET** /v3/announcement_stats/daily | Get statistics - daily
[**getStatisticsMonthly**](MessageApi.md#getStatisticsMonthly) | **GET** /v3/announcement_stats/monthly | Get statistics - monthly
[**listAllEmojisAndEmojiCategories**](MessageApi.md#listAllEmojisAndEmojiCategories) | **GET** /v3/emoji_categories | List all emojis and emoji categories
[**listAnnouncementGroups**](MessageApi.md#listAnnouncementGroups) | **GET** /v3/announcement_group | List announcement groups
[**listAnnouncements**](MessageApi.md#listAnnouncements) | **GET** /v3/announcements | List announcements
[**listEmojis**](MessageApi.md#listEmojis) | **GET** /v3/emojis | List emojis
[**listMessages**](MessageApi.md#listMessages) | **GET** /v3/{channel_type}/{channel_url}/messages | List messages
[**listReactionsOfMessage**](MessageApi.md#listReactionsOfMessage) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | List reactions of a message
[**migrateMessagesByUrl**](MessageApi.md#migrateMessagesByUrl) | **POST** /v3/migration/{target_channel_url} | Migrate messages
[**removeExtraDataFromMessage**](MessageApi.md#removeExtraDataFromMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Remove extra data from a message
[**removeReactionFromAMessage**](MessageApi.md#removeReactionFromAMessage) | **DELETE** /v3/{channel_type}/{channel_url}/messages/{message_id}/reactions | Remove a reaction from a message
[**scheduleAnnouncement**](MessageApi.md#scheduleAnnouncement) | **POST** /v3/announcements | Schedule an announcement
[**sendMessage**](MessageApi.md#sendMessage) | **POST** /v3/{channel_type}/{channel_url}/messages | Send a message
[**translateMessageIntoOtherLanguages**](MessageApi.md#translateMessageIntoOtherLanguages) | **POST** /v3/{channel_type}/{channel_url}/messages/{message_id}/translation | Translate a message into other languages
[**updateAnnouncementById**](MessageApi.md#updateAnnouncementById) | **PUT** /v3/announcements/{unique_id} | Update an announcement
[**updateEmojiCategoryUrlById**](MessageApi.md#updateEmojiCategoryUrlById) | **PUT** /v3/emoji_categories/{emoji_category_id} | Update an emoji category URL
[**updateEmojiUrlByKey**](MessageApi.md#updateEmojiUrlByKey) | **PUT** /v3/emojis/{emoji_key} | Update an emoji URL
[**updateExtraDataInMessage**](MessageApi.md#updateExtraDataInMessage) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray | Update extra data in a message
[**updateMessageById**](MessageApi.md#updateMessageById) | **PUT** /v3/{channel_type}/{channel_url}/messages/{message_id} | Update a message
[**useDefaultEmojis**](MessageApi.md#useDefaultEmojis) | **PUT** /v3/applications/settings/use_default_emoji | Use default emojis
[**viewMessageById**](MessageApi.md#viewMessageById) | **GET** /v3/{channel_type}/{channel_url}/messages/{message_id} | View a message
[**viewTotalNumberOfMessagesInChannel**](MessageApi.md#viewTotalNumberOfMessagesInChannel) | **GET** /v3/{channel_type}/{channel_url}/messages/total_count | View total number of messages in a channel


# **addEmojiCategories**
> AddEmojiCategoriesResponse addEmojiCategories()

## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiAddEmojiCategoriesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // any (optional)
  body: {},
};

apiInstance.addEmojiCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddEmojiCategoriesResponse**

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

# **addEmojis**
> AddEmojisResponse addEmojis()

## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiAddEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddEmojisData (optional)
  addEmojisData: {
    emojiCategoryId: 1,
    emojis: [
      {},
    ],
  },
};

apiInstance.addEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addEmojisData** | **AddEmojisData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddEmojisResponse**

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

# **addExtraDataToMessage**
> AddExtraDataToMessageResponse addExtraDataToMessage()

## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiAddExtraDataToMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiAddReactionToAMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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

# **deleteEmojiByKey**
> void deleteEmojiByKey()

## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiDeleteEmojiByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
};

apiInstance.deleteEmojiByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


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

# **deleteEmojiCategoryById**
> any deleteEmojiCategoryById()

## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiDeleteEmojiCategoryByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
};

apiInstance.deleteEmojiCategoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


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

# **deleteMessageById**
> any deleteMessageById()

## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiDeleteMessageByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
};

apiInstance.deleteMessageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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

# **enableReactions**
> EnableReactionsResponse enableReactions()

## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiEnableReactionsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // EnableReactionsData (optional)
  enableReactionsData: {
    enabled: true,
  },
};

apiInstance.enableReactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enableReactionsData** | **EnableReactionsData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**EnableReactionsResponse**

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

# **gcMarkAllMessagesAsDelivered**
> GcMarkAllMessagesAsDeliveredResponse gcMarkAllMessagesAsDelivered()

## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGcMarkAllMessagesAsDeliveredRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


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
> any gcMarkAllMessagesAsRead()

## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGcMarkAllMessagesAsReadRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


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

# **gcViewNumberOfEachMembersUnreadMessages**
> GcViewNumberOfEachMembersUnreadMessagesResponse gcViewNumberOfEachMembersUnreadMessages()

## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGcViewNumberOfEachMembersUnreadMessagesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelUrl: "channel_url_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
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

# **getEmojiByKey**
> SendBirdEmoji getEmojiByKey()

## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGetEmojiByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
};

apiInstance.getEmojiByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmoji**

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

# **getEmojiCategoryById**
> SendBirdEmojiCategory getEmojiCategoryById()

## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGetEmojiCategoryByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
};

apiInstance.getEmojiCategoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmojiCategory**

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

# **getStatistics**
> GetStatisticsResponse getStatistics()

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGetStatisticsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**GetStatisticsResponse**

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

# **getStatisticsDaily**
> GetStatisticsDailyResponse getStatisticsDaily()

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGetStatisticsDailyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  startDate: "start_date_example",
  // string
  endDate: "end_date_example",
  // string
  startWeek: "start_week_example",
  // string
  endWeek: "end_week_example",
  // string
  startMonth: "start_month_example",
  // string
  endMonth: "end_month_example",
  // string (optional)
  announcementGroup: "announcement_group_example",
};

apiInstance.getStatisticsDaily(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **startDate** | [**string**] |  | defaults to undefined
 **endDate** | [**string**] |  | defaults to undefined
 **startWeek** | [**string**] |  | defaults to undefined
 **endWeek** | [**string**] |  | defaults to undefined
 **startMonth** | [**string**] |  | defaults to undefined
 **endMonth** | [**string**] |  | defaults to undefined
 **announcementGroup** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetStatisticsDailyResponse**

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

# **getStatisticsMonthly**
> GetStatisticsMonthlyResponse getStatisticsMonthly()

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiGetStatisticsMonthlyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getStatisticsMonthly(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**GetStatisticsMonthlyResponse**

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

# **listAllEmojisAndEmojiCategories**
> ListAllEmojisAndEmojiCategoriesResponse listAllEmojisAndEmojiCategories()

## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListAllEmojisAndEmojiCategoriesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listAllEmojisAndEmojiCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListAllEmojisAndEmojiCategoriesResponse**

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

# **listAnnouncementGroups**
> ListAnnouncementGroupsResponse listAnnouncementGroups()

## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListAnnouncementGroupsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listAnnouncementGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**ListAnnouncementGroupsResponse**

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

# **listAnnouncements**
> ListAnnouncementsResponse listAnnouncements()

## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListAnnouncementsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  order: "order_example",
  // string (optional)
  status: "status_example",
  // string (optional)
  announcementGroup: "announcement_group_example",
};

apiInstance.listAnnouncements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **announcementGroup** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListAnnouncementsResponse**

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

# **listEmojis**
> ListEmojisResponse listEmojis()

## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListEmojisResponse**

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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListMessagesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  messageTs: "message_ts_example",
  // number (optional)
  messageId: 1,
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageTs** | [**string**] |  | (optional) defaults to undefined
 **messageId** | [**number**] |  | (optional) defaults to undefined
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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiListReactionsOfMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
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

# **migrateMessagesByUrl**
> void migrateMessagesByUrl()

## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiMigrateMessagesByUrlRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  targetChannelUrl: "target_channel_url_example",
  // any (optional)
  body: {},
};

apiInstance.migrateMessagesByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **targetChannelUrl** | [**string**] |  | defaults to undefined


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

# **removeExtraDataFromMessage**
> any removeExtraDataFromMessage()

## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiRemoveExtraDataFromMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
 **keys** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **removeReactionFromAMessage**
> RemoveReactionFromAMessageResponse removeReactionFromAMessage()

## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiRemoveReactionFromAMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
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

# **scheduleAnnouncement**
> ScheduleAnnouncementResponse scheduleAnnouncement()

## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiScheduleAnnouncementRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // ScheduleAnnouncementData (optional)
  scheduleAnnouncementData: {
    message: "message_example",
    messageType: "messageType_example",
    messageUserId: "messageUserId_example",
    messageContent: "messageContent_example",
    targetAt: "targetAt_example",
    targetList: [
      "targetList_example",
    ],
    targetChannelType: "targetChannelType_example",
    uniqueId: "uniqueId_example",
    messageCustomType: "messageCustomType_example",
    messageData: "messageData_example",
    createChannel: true,
    announcementGroup: "announcementGroup_example",
    createChannelOptions: "createChannelOptions_example",
    createChannelOptionsName: "createChannelOptionsName_example",
    createChannelOptionsCoverUrl: "createChannelOptionsCoverUrl_example",
    createChannelOptionsCustomType: "createChannelOptionsCustomType_example",
    createChannelOptionsData: "createChannelOptionsData_example",
    createChannelOptionsDistinct: "createChannelOptionsDistinct_example",
    scheduledAt: 1,
    ceaseAt: "ceaseAt_example",
    resumeAt: "resumeAt_example",
    endAt: 1,
    enablePush: true,
    assignSenderAsChannelInviter: true,
  },
};

apiInstance.scheduleAnnouncement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduleAnnouncementData** | **ScheduleAnnouncementData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ScheduleAnnouncementResponse**

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

# **sendMessage**
> SendBirdMessageResponse sendMessage()

## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiSendMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiTranslateMessageIntoOtherLanguagesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
  // TranslateMessageIntoOtherLanguagesData (optional)
  translateMessageIntoOtherLanguagesData: {
    targetLangs: [
      "targetLangs_example",
    ],
  },
};

apiInstance.translateMessageIntoOtherLanguages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translateMessageIntoOtherLanguagesData** | **TranslateMessageIntoOtherLanguagesData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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

# **updateAnnouncementById**
> UpdateAnnouncementByIdResponse updateAnnouncementById()

## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUpdateAnnouncementByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  uniqueId: "unique_id_example",
  // UpdateAnnouncementByIdData (optional)
  updateAnnouncementByIdData: {
    uniqueId: "uniqueId_example",
    action: "action_example",
    announcementGroup: "announcementGroup_example",
    createChannel: true,
    createChannelOptionsName: "createChannelOptionsName_example",
    createChannelOptionsCoverUrl: "createChannelOptionsCoverUrl_example",
    createChannelOptionsCustomType: "createChannelOptionsCustomType_example",
    createChannelOptionsData: "createChannelOptionsData_example",
    createChannelOptionsDistinct: "createChannelOptionsDistinct_example",
    messageUserId: "messageUserId_example",
    messageContent: "messageContent_example",
    messageData: "messageData_example",
    enablePush: true,
    scheduledAt: 1,
    endAt: 1,
    ceaseAt: "ceaseAt_example",
    resumeAt: "resumeAt_example",
  },
};

apiInstance.updateAnnouncementById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAnnouncementByIdData** | **UpdateAnnouncementByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **uniqueId** | [**string**] |  | defaults to undefined


### Return type

**UpdateAnnouncementByIdResponse**

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

# **updateEmojiCategoryUrlById**
> SendBirdEmojiCategory updateEmojiCategoryUrlById()

## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUpdateEmojiCategoryUrlByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
  // UpdateEmojiCategoryUrlByIdData (optional)
  updateEmojiCategoryUrlByIdData: {
    emojiCategoryId: 1,
    url: "url_example",
  },
};

apiInstance.updateEmojiCategoryUrlById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmojiCategoryUrlByIdData** | **UpdateEmojiCategoryUrlByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmojiCategory**

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

# **updateEmojiUrlByKey**
> SendBirdEmoji updateEmojiUrlByKey()

## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUpdateEmojiUrlByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
  // UpdateEmojiUrlByKeyData (optional)
  updateEmojiUrlByKeyData: {
    emojiKey: "emojiKey_example",
    url: "url_example",
  },
};

apiInstance.updateEmojiUrlByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmojiUrlByKeyData** | **UpdateEmojiUrlByKeyData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmoji**

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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUpdateExtraDataInMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUpdateMessageByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
      "mentionedUserIds_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined


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

# **useDefaultEmojis**
> UseDefaultEmojisResponse useDefaultEmojis()

## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiUseDefaultEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // UseDefaultEmojisData (optional)
  useDefaultEmojisData: {
    useDefaultEmoji: true,
  },
};

apiInstance.useDefaultEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useDefaultEmojisData** | **UseDefaultEmojisData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**UseDefaultEmojisResponse**

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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiViewMessageByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
  // string
  messageId: "message_id_example",
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
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
 **messageId** | [**string**] |  | defaults to undefined
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
const apiInstance = new .MessageApi(configuration);

let body:.MessageApiViewTotalNumberOfMessagesInChannelRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  channelType: "channel_type_example",
  // string
  channelUrl: "channel_url_example",
};

apiInstance.viewTotalNumberOfMessagesInChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **channelType** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


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


