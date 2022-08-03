# .WebhookApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chooseWhichEventsToSubscribeTo**](WebhookApi.md#chooseWhichEventsToSubscribeTo) | **PUT** /v3/applications/settings/webhook | Choose which events to subscribe to
[**retrieveListOfSubscribedEvents**](WebhookApi.md#retrieveListOfSubscribedEvents) | **GET** /v3/applications/settings/webhook | Retrieve a list of subscribed events


# **chooseWhichEventsToSubscribeTo**
> ChooseWhichEventsToSubscribeToResponse chooseWhichEventsToSubscribeTo()

## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiChooseWhichEventsToSubscribeToRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // ChooseWhichEventsToSubscribeToData (optional)
  chooseWhichEventsToSubscribeToData: {
    enabled: true,
    url: "url_example",
    includeMembers: true,
    enabledEvents: [
      "enabledEvents_example",
    ],
  },
};

apiInstance.chooseWhichEventsToSubscribeTo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chooseWhichEventsToSubscribeToData** | **ChooseWhichEventsToSubscribeToData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ChooseWhichEventsToSubscribeToResponse**

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

# **retrieveListOfSubscribedEvents**
> RetrieveListOfSubscribedEventsResponse retrieveListOfSubscribedEvents()

## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiRetrieveListOfSubscribedEventsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  displayAllWebhookCategories: true,
};

apiInstance.retrieveListOfSubscribedEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **displayAllWebhookCategories** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**RetrieveListOfSubscribedEventsResponse**

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


