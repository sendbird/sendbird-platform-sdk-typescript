# Sendbird.PollApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3PollsGet**](PollApi.md#v3PollsGet) | **GET** /v3/polls | List polls
[**v3PollsPollIdClosePut**](PollApi.md#v3PollsPollIdClosePut) | **PUT** /v3/polls/{poll_id}/close | Close a poll
[**v3PollsPollIdDelete**](PollApi.md#v3PollsPollIdDelete) | **DELETE** /v3/polls/{poll_id} | Delete a poll
[**v3PollsPollIdGet**](PollApi.md#v3PollsPollIdGet) | **GET** /v3/polls/{poll_id} | Get a poll
[**v3PollsPollIdOptionsOptionIdDelete**](PollApi.md#v3PollsPollIdOptionsOptionIdDelete) | **DELETE** /v3/polls/{poll_id}/options/{option_id} | Delete a poll option
[**v3PollsPollIdOptionsOptionIdGet**](PollApi.md#v3PollsPollIdOptionsOptionIdGet) | **GET** /v3/polls/{poll_id}/options/{option_id} | Get a poll option
[**v3PollsPollIdOptionsOptionIdPut**](PollApi.md#v3PollsPollIdOptionsOptionIdPut) | **PUT** /v3/polls/{poll_id}/options/{option_id} | Update a poll option
[**v3PollsPollIdOptionsOptionIdVotersGet**](PollApi.md#v3PollsPollIdOptionsOptionIdVotersGet) | **GET** /v3/polls/{poll_id}/options/{option_id}/voters | List voters of a poll option
[**v3PollsPollIdOptionsPost**](PollApi.md#v3PollsPollIdOptionsPost) | **POST** /v3/polls/{poll_id}/options | Add a poll option
[**v3PollsPollIdPut**](PollApi.md#v3PollsPollIdPut) | **PUT** /v3/polls/{poll_id} | Update a poll
[**v3PollsPollIdVotePut**](PollApi.md#v3PollsPollIdVotePut) | **PUT** /v3/polls/{poll_id}/vote | Cast or cancel a vote
[**v3PollsPost**](PollApi.md#v3PollsPost) | **POST** /v3/polls | Create a poll


# **v3PollsGet**
> SendBirdPoll v3PollsGet()

## List polls This action retrieves a paginated list of both open and closed polls in an application or a specific channel. To retrieve polls in a specific channel, the channel_url must be specified. https://sendbird.com/docs/chat/v3/platform-api/message/polls/list-polls  -----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsGetRequest = {
  // string (optional)
  apiToken: "Api-Token_example",
  // string (optional)
  channelUrl: "channel_url_example",
  // string (optional)
  channelType: "channel_type_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.v3PollsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **channelUrl** | [**string**] |  | (optional) defaults to undefined
 **channelType** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdClosePut**
> SendBirdPoll v3PollsPollIdClosePut()

## Close a poll This action closes a poll and prevents users from voting any further. https://sendbird.com/docs/chat/v3/platform-api/message/polls/close-a-poll -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdClosePutRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3PollsPollIdClosePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdDelete**
> any v3PollsPollIdDelete()

## Delete a poll This action deletes a poll. Once a poll is deleted, you can't retrieve its data. https://sendbird.com/docs/chat/v3/platform-api/message/polls/delete-a-poll -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdDeleteRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3PollsPollIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | [**number**] |  | defaults to undefined
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

# **v3PollsPollIdGet**
> SendBirdPoll v3PollsPollIdGet()

## Get a poll This action retrieves information on a specific poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/get-a-poll -----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdGetRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdDeleteRequest (optional)
  v3PollsPollIdDeleteRequest: {
    channelUrl: "channelUrl_example",
    channelType: "channelType_example",
    showPartialVoterList: true,
  },
};

apiInstance.v3PollsPollIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdDeleteRequest** | **V3PollsPollIdDeleteRequest**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdOptionsOptionIdDelete**
> any v3PollsPollIdOptionsOptionIdDelete()

## Delete a poll option This action deletes an option from a poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/delete-a-poll-option ----------------------------- 

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdOptionsOptionIdDeleteRequest = {
  // number
  pollId: 1,
  // number
  optionId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3PollsPollIdOptionsOptionIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | [**number**] |  | defaults to undefined
 **optionId** | [**number**] |  | defaults to undefined
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

# **v3PollsPollIdOptionsOptionIdGet**
> SendBirdPollOption v3PollsPollIdOptionsOptionIdGet()

## Get a poll option This action retrieves a poll option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/get-a-poll-option -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdOptionsOptionIdGetRequest = {
  // number
  pollId: 1,
  // number
  optionId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3PollsPollIdOptionsOptionIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | [**number**] |  | defaults to undefined
 **optionId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPollOption**

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

# **v3PollsPollIdOptionsOptionIdPut**
> SendBirdPoll v3PollsPollIdOptionsOptionIdPut()

## Update a poll option This action updates the content of a poll option. Voting for an option doesn't update the option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/update-a-poll-option -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdOptionsOptionIdPutRequest = {
  // number
  pollId: 1,
  // number
  optionId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdOptionsOptionIdDeleteRequest (optional)
  v3PollsPollIdOptionsOptionIdDeleteRequest: {
    text: "text_example",
    createdBy: "createdBy_example",
  },
};

apiInstance.v3PollsPollIdOptionsOptionIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdOptionsOptionIdDeleteRequest** | **V3PollsPollIdOptionsOptionIdDeleteRequest**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **optionId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdOptionsOptionIdVotersGet**
> V3PollsPollIdOptionsOptionIdVotersGet200Response v3PollsPollIdOptionsOptionIdVotersGet()

## List voters of a poll option This action retrieves a list of users who voted for a poll option. https://sendbird.com/docs/chat/v3/platform-api/message/polls/list-voters-of-a-poll-option  -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdOptionsOptionIdVotersGetRequest = {
  // number
  pollId: 1,
  // number
  optionId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdOptionsOptionIdVotersGetRequest (optional)
  v3PollsPollIdOptionsOptionIdVotersGetRequest: {
    token: "token_example",
    limit: 1,
  },
};

apiInstance.v3PollsPollIdOptionsOptionIdVotersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdOptionsOptionIdVotersGetRequest** | **V3PollsPollIdOptionsOptionIdVotersGetRequest**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **optionId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3PollsPollIdOptionsOptionIdVotersGet200Response**

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

# **v3PollsPollIdOptionsPost**
> SendBirdPoll v3PollsPollIdOptionsPost()

## Add a poll option This action adds a new option to a poll. https://sendbird.com/docs/chat/v3/platform-api/message/polls/add-a-poll-option -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdOptionsPostRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdOptionsOptionIdDeleteRequest (optional)
  v3PollsPollIdOptionsOptionIdDeleteRequest: {
    text: "text_example",
    createdBy: "createdBy_example",
  },
};

apiInstance.v3PollsPollIdOptionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdOptionsOptionIdDeleteRequest** | **V3PollsPollIdOptionsOptionIdDeleteRequest**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdPut**
> SendBirdPoll v3PollsPollIdPut()

## Update a poll This action updates information of a poll. To change the content of a poll option, see the update a poll option page. https://sendbird.com/docs/chat/v3/platform-api/message/polls/update-a-poll -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdPutRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdDeleteRequest1 (optional)
  v3PollsPollIdDeleteRequest1: {
    title: "title_example",
    allowUserSuggestion: true,
    allowMultipleVotes: true,
null,
    allocreatedBywMultipleVotes: "allocreatedBywMultipleVotes_example",
    data: {},
  },
};

apiInstance.v3PollsPollIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdDeleteRequest1** | **V3PollsPollIdDeleteRequest1**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPollIdVotePut**
> SendBirdPoll v3PollsPollIdVotePut()

## Cast or cancel a vote This action adds or removes a vote from a poll option, changing the number of votes given to each option. Use this action to override a previous vote and update the user's final choice of poll options. https://sendbird.com/docs/chat/v3/platform-api/message/polls/cast-or-cancel-a-vote -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPollIdVotePutRequest = {
  // number
  pollId: 1,
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsPollIdVotePutRequest (optional)
  v3PollsPollIdVotePutRequest: {
    userId: "userId_example",
    optionIds: [
      1,
    ],
  },
};

apiInstance.v3PollsPollIdVotePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsPollIdVotePutRequest** | **V3PollsPollIdVotePutRequest**|  |
 **pollId** | [**number**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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

# **v3PollsPost**
> SendBirdPoll v3PollsPost()

## Create a poll This action creates a poll with at least one option.You can configure various settings for your poll, including when the poll will close and whether to allow voting for multiple options. After creating a poll, to share the poll with other users in a channel, the poll must be sent as a message. https://sendbird.com/docs/chat/v3/platform-api/message/polls/create-a-poll -----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PollApi(configuration);

let body:Sendbird.PollApiV3PollsPostRequest = {
  // string
  title: "title_example",
  // Array<string>
  options: [
    "options_example",
  ],
  // string (optional)
  apiToken: "Api-Token_example",
  // V3PollsGetRequest (optional)
  v3PollsGetRequest: {
    title: "title_example",
    options: [
      "options_example",
    ],
    allowUserSuggestion: true,
    allowMultipleVotes: true,
null,
    createdBy: "createdBy_example",
    data: {},
  },
};

apiInstance.v3PollsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3PollsGetRequest** | **V3PollsGetRequest**|  |
 **title** | [**string**] |  | defaults to undefined
 **options** | **Array&lt;string&gt;** |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdPoll**

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


