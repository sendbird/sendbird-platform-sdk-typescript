# Sendbird.BotApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createABot**](BotApi.md#createABot) | **POST** /v3/bots | Create a bot
[**joinChannels**](BotApi.md#joinChannels) | **POST** /v3/bots/{bot_userid}/channels | Join channels
[**leaveAGroupChannel**](BotApi.md#leaveAGroupChannel) | **DELETE** /v3/bots/{bot_userid}/channels/{channel_url} | Leave channels - When leaving a specific channel
[**leaveGroupChannels**](BotApi.md#leaveGroupChannels) | **DELETE** /v3/bots/{bot_userid}/channels | Leave channels - When leaving all channels
[**listBots**](BotApi.md#listBots) | **GET** /v3/bots | List bots
[**sendABotMessage**](BotApi.md#sendABotMessage) | **POST** /v3/bots/{bot_userid}/send | Send a bot&#39;s message


# **createABot**
> CreateABotResponse createABot()

## Create a bot  Creates a new bot within an application. Creating a bot is similar to creating a normal user, except a callback URL should be specified for a bot to receive events.  > **Note**: The bot must first [join a group channel](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels) to interact with users. In group channels, you can also invite a bot through the [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) action.      [https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot](https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiCreateABotRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateABotRequest (optional)
  createABotRequest: {
    botCallbackUrl: "botCallbackUrl_example",
    botNickname: "botNickname_example",
    botProfileUrl: "botProfileUrl_example",
    botType: "botType_example",
    botUserid: "botUserid_example",
    isPrivacyMode: true,
    channelInvitationPreference: 1,
    enableMarkAsRead: true,
    showMember: true,
  },
};

apiInstance.createABot(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createABotRequest** | **CreateABotRequest**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**CreateABotResponse**

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

# **joinChannels**
> SendbirdGroupChannelDetail joinChannels()

## Join channels  Makes a bot join one or more group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiJoinChannelsRequest = {
  // string | (Required) 
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // JoinChannelsRequest (optional)
  joinChannelsRequest: {
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
 **joinChannelsRequest** | **JoinChannelsRequest**|  |
 **botUserid** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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

# **leaveAGroupChannel**
> any leaveAGroupChannel()

## Leave channels  Makes a bot leave a specific channel  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiLeaveAGroupChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string | (Required) 
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.leaveAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **botUserid** | [**string**] | (Required)  | defaults to undefined
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

# **leaveGroupChannels**
> any leaveGroupChannels()

## Leave channels  Makes a bot leave all group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiLeaveGroupChannelsRequest = {
  // string | (Required) 
  botUserid: "bot_userid_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.leaveGroupChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | [**string**] | (Required)  | defaults to undefined
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

## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/platform-api/v3/bot/listing-bots/list-bots#1-list-bots

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiListBotsRequest = {
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listBots(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **sendABotMessage**
> SendABotMessageResponse sendABotMessage()

## Send a bot message  Sends a bot message to a group channel.  [https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message](https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message)  `bot_userid`   Type: string   Description: Specifies the ID of the bot to send a message.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.BotApi(configuration);

let body:Sendbird.BotApiSendABotMessageRequest = {
  // string | (Required) 
  botUserid: "bot_userid_example",
  // string | Specifies the type of message to send. MESG for text message, FILE for file message.
  messageType: "MESG",
  // string | Specifies the URL of the channel to send the message to.
  channelUrl: "channelUrl_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string | Specifies the content of the message. * This property is required when message_type is MESG. (optional)
  message: "message_example",
  // Array<string> | * This property is available when message_type is MESG. (optional)
  mentioned: [
    "mentioned_example",
  ],
  // SendbirdExtendedMessagePayload (optional)
  extendedMessagePayload: {
    customView: {},
    suggestedReplies: [
      "suggestedReplies_example",
    ],
  },
  // HttpFile | When sending a single file with a message, specifies the data of the file to upload to the Sendbird server in raw binary format. When sending a request containing a file, change the value of the content-type header to multipart/form-data;boundary={your_unique_boundary_string} in the request. * This property is required when message_type is FILE. * This doesn't allow a converted base64-encoded string from a file as its value. (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // boolean | Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file. * This property is available when message_type is FILE. (optional)
  requireAuth: true,
  // string | * This property is available when message_type is FILE. (optional)
  mentionType: "users",
  // Array<string> | * This property is available when message_type is FILE. (optional)
  mentionedUserIds: [
    "mentionedUserIds_example",
  ],
  // boolean | * This property is available when message_type is FILE. (optional)
  isSilent: true,
  // Array<SendbirdSortedMetaarrayInner> (optional)
  sortedMetaarray: [
    {
      key: "key_example",
      value: [
        "value_example",
      ],
    },
  ],
  // string | * This property is available when message_type is FILE. (optional)
  apnsBundleId: "apnsBundleId_example",
  // any | * This property is available when message_type is FILE. (optional)
  appleCriticalAlertOptions: {},
  // string | * This property is available when message_type is FILE. (optional)
  sound: "sound_example",
  // number | * This property is available when message_type is FILE. (optional)
  volume: 3.14,
  // number (optional)
  createdAt: 1,
  // string (optional)
  customType: "customType_example",
  // string (optional)
  data: "data_example",
  // string (optional)
  dedupId: "dedupId_example",
  // boolean (optional)
  markAsRead: true,
  // boolean (optional)
  sendPush: true,
};

apiInstance.sendABotMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **botUserid** | [**string**] | (Required)  | defaults to undefined
 **messageType** | [**string**]**Array<&#39;MESG&#39; &#124; &#39;FILE&#39;>** | Specifies the type of message to send. MESG for text message, FILE for file message. | defaults to undefined
 **channelUrl** | [**string**] | Specifies the URL of the channel to send the message to. | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **message** | [**string**] | Specifies the content of the message. * This property is required when message_type is MESG. | (optional) defaults to undefined
 **mentioned** | **Array&lt;string&gt;** | * This property is available when message_type is MESG. | (optional) defaults to undefined
 **extendedMessagePayload** | **SendbirdExtendedMessagePayload** |  | (optional) defaults to undefined
 **file** | [**HttpFile**] | When sending a single file with a message, specifies the data of the file to upload to the Sendbird server in raw binary format. When sending a request containing a file, change the value of the content-type header to multipart/form-data;boundary&#x3D;{your_unique_boundary_string} in the request. * This property is required when message_type is FILE. * This doesn&#39;t allow a converted base64-encoded string from a file as its value. | (optional) defaults to undefined
 **requireAuth** | [**boolean**] | Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file. * This property is available when message_type is FILE. | (optional) defaults to undefined
 **mentionType** | [**string**]**Array<&#39;users&#39; &#124; &#39;channel&#39;>** | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **mentionedUserIds** | **Array&lt;string&gt;** | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **isSilent** | [**boolean**] | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **sortedMetaarray** | **Array&lt;SendbirdSortedMetaarrayInner&gt;** |  | (optional) defaults to undefined
 **apnsBundleId** | [**string**] | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **appleCriticalAlertOptions** | **any** | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **sound** | [**string**] | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **volume** | [**number**] | * This property is available when message_type is FILE. | (optional) defaults to undefined
 **createdAt** | [**number**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined
 **data** | [**string**] |  | (optional) defaults to undefined
 **dedupId** | [**string**] |  | (optional) defaults to undefined
 **markAsRead** | [**boolean**] |  | (optional) defaults to undefined
 **sendPush** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**SendABotMessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


