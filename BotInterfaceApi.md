# .BotInterfaceApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBot**](BotInterfaceApi.md#createBot) | **POST** /v3/bots | Create a bot
[**deleteBotById**](BotInterfaceApi.md#deleteBotById) | **DELETE** /v3/bots/{bot_userid} | Delete a bot
[**joinChannels**](BotInterfaceApi.md#joinChannels) | **POST** /v3/bots/{bot_userid}/channels | Join channels
[**leaveChannels**](BotInterfaceApi.md#leaveChannels) | **DELETE** /v3/bots/{bot_userid}/channels | Leave channels - When leaving all channels
[**leaveChannelsByUrl**](BotInterfaceApi.md#leaveChannelsByUrl) | **DELETE** /v3/bots/{bot_userid}/channels/{channel_url} | Leave channels - When leaving a channel by its channel URL
[**listBots**](BotInterfaceApi.md#listBots) | **GET** /v3/bots | List bots
[**sendBotsMessage**](BotInterfaceApi.md#sendBotsMessage) | **POST** /v3/bots/{bot_userid}/send | Send a bot&#39;s message
[**updateBotById**](BotInterfaceApi.md#updateBotById) | **PUT** /v3/bots/{bot_userid} | Update a bot
[**viewBotById**](BotInterfaceApi.md#viewBotById) | **GET** /v3/bots/{bot_userid} | View a bot


# **createBot**
> InlineResponse20066Bots createBot()

## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiCreateBotRequest = {
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

**InlineResponse20066Bots**

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
> void deleteBotById()

## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiDeleteBotByIdRequest = {
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

**void**

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
> SendBirdGroupChannelCollection joinChannels()

## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiJoinChannelsRequest = {
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

**SendBirdGroupChannelCollection**

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
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiLeaveChannelsRequest = {
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
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **leaveChannelsByUrl**
> void leaveChannelsByUrl()

## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiLeaveChannelsByUrlRequest = {
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

**void**

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
> InlineResponse20066 listBots()

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiListBotsRequest = {
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

**InlineResponse20066**

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
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiSendBotsMessageRequest = {
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
 **botUserid** | [**string**] |  | defaults to undefined
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

# **updateBotById**
> InlineResponse20066Bots updateBotById()

## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiUpdateBotByIdRequest = {
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

**InlineResponse20066Bots**

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
> InlineResponse20066Bots viewBotById()

## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BotInterfaceApi(configuration);

let body:.BotInterfaceApiViewBotByIdRequest = {
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

**InlineResponse20066Bots**

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


