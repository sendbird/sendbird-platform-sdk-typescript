# .BotApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBot**](BotApi.md#createBot) | **POST** /v3/bots | Create a bot
[**deleteBotById**](BotApi.md#deleteBotById) | **DELETE** /v3/bots/{bot_userid} | Delete a bot
[**joinChannels**](BotApi.md#joinChannels) | **POST** /v3/bots/{bot_userid}/channels | Join channels
[**leaveChannels**](BotApi.md#leaveChannels) | **DELETE** /v3/bots/{bot_userid}/channels | Leave channels - When leaving all channels
[**leaveChannelsByUrl**](BotApi.md#leaveChannelsByUrl) | **DELETE** /v3/bots/{bot_userid}/channels/{channel_url} | Leave channels - When leaving a channel by its channel URL
[**listBots**](BotApi.md#listBots) | **GET** /v3/bots | List bots
[**sendBotsMessage**](BotApi.md#sendBotsMessage) | **POST** /v3/bots/{bot_userid}/send | Send a bot&#39;s message
[**updateBotById**](BotApi.md#updateBotById) | **PUT** /v3/bots/{bot_userid} | Update a bot
[**viewBotById**](BotApi.md#viewBotById) | **GET** /v3/bots/{bot_userid} | View a bot


# **createBot**
> CreateBotResponse createBot()

## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiCreateBotRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // CreateBotData (optional)
  createBotData: {
    botUserid: "botUserid_example",
    botNickname: "botNickname_example",
    botProfileUrl: "botProfileUrl_example",
    botType: "botType_example",
    botCallbackUrl: "botCallbackUrl_example",
    isPrivacyMode: true,
    enableMarkAsRead: true,
    showMember: true,
    channelInvitationPreference: 1,
  },
};

apiInstance.createBot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBotData** | **CreateBotData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**CreateBotResponse**

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

# **deleteBotById**
> any deleteBotById()

## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiDeleteBotByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
};

apiInstance.deleteBotById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined


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

# **joinChannels**
> JoinChannelsResponse joinChannels()

## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiJoinChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
  // JoinChannelsData (optional)
  joinChannelsData: {
    botUserid: "botUserid_example",
    channelUrls: [
      "channelUrls_example",
    ],
  },
};

apiInstance.joinChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinChannelsData** | **JoinChannelsData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined


### Return type

**JoinChannelsResponse**

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

# **leaveChannels**
> void leaveChannels()

## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiLeaveChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  channelUrl: "channel_url_example",
};

apiInstance.leaveChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | (optional) defaults to undefined


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

# **leaveChannelsByUrl**
> any leaveChannelsByUrl()

## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiLeaveChannelsByUrlRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
  // string
  channelUrl: "channel_url_example",
};

apiInstance.leaveChannelsByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined


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

# **listBots**
> ListBotsResponse listBots()

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiListBotsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listBots(body).then((data:any) => {
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

**ListBotsResponse**

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

# **sendBotsMessage**
> SendBirdMessageResponse sendBotsMessage()

## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiSendBotsMessageRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
  // SendBotSMessageData (optional)
  sendBotSMessageData: {
    message: "message_example",
    channelUrl: "channelUrl_example",
    customType: "customType_example",
    data: "data_example",
    sendPush: true,
    mentioned: [
      1,
    ],
    markAsRead: true,
    dedupId: "dedupId_example",
    createdAt: 1,
  },
};

apiInstance.sendBotsMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendBotSMessageData** | **SendBotSMessageData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined


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

# **updateBotById**
> UpdateBotByIdResponse updateBotById()

## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiUpdateBotByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
  // UpdateBotByIdData (optional)
  updateBotByIdData: {
    botUserid: "botUserid_example",
    botNickname: "botNickname_example",
    botProfileUrl: "botProfileUrl_example",
    botCallbackUrl: "botCallbackUrl_example",
    isPrivacyMode: true,
    enableMarkAsRead: true,
    showMember: true,
    channelInvitationPreference: 1,
  },
};

apiInstance.updateBotById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBotByIdData** | **UpdateBotByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined


### Return type

**UpdateBotByIdResponse**

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

# **viewBotById**
> ViewBotByIdResponse viewBotById()

## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotApi(configuration);

let body:.BotApiViewBotByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  botUserid: "bot_userid_example",
};

apiInstance.viewBotById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] |  | defaults to undefined


### Return type

**ViewBotByIdResponse**

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


