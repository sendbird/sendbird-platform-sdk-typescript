# Sendbird.BotApi

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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiCreateBotRequest = {
  // string (optional)
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
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiDeleteBotByIdRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteBotById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | [**string**] |  | defaults to undefined
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

# **joinChannels**
> JoinChannelsResponse joinChannels()

## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiJoinChannelsRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
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
 **botUserid** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiLeaveChannelsRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
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
 **botUserid** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiLeaveChannelsByUrlRequest = {
  // string
  botUserid: "bot_userid_example",
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.leaveChannelsByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | [**string**] |  | defaults to undefined
 **channelUrl** | [**string**] |  | defaults to undefined
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

# **listBots**
> ListBotsResponse listBots()

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiListBotsRequest = {
  // string (optional)
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
 **apiToken** | [**string**] |  | (optional) defaults to undefined
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
> SendBirdBotsMessageResponse sendBotsMessage()

## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiSendBotsMessageRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // SendBotSMessageData (optional)
  sendBotSMessageData: {
    message: "message_example",
    channelUrl: "channelUrl_example",
    customType: "customType_example",
    data: "data_example",
    sendPush: true,
    mentioned: [
      "mentioned_example",
    ],
    markAsRead: true,
    dedupId: "dedupId_example",
    createdAt: 1,
    extendedMessagePayload: {
      suggestedReplies: [
        "suggestedReplies_example",
      ],
      customView: {},
    },
    targetMessageId: 1,
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
 **botUserid** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdBotsMessageResponse**

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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiUpdateBotByIdRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
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
 **botUserid** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiViewBotByIdRequest = {
  // string
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewBotById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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


