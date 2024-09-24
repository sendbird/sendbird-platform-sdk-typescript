# Sendbird.PushNotificationsApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ApplicationsPushSettingsGet**](PushNotificationsApi.md#v3ApplicationsPushSettingsGet) | **GET** /v3/applications/push/settings | Check push notifications
[**v3ApplicationsPushSettingsPut**](PushNotificationsApi.md#v3ApplicationsPushSettingsPut) | **PUT** /v3/applications/push/settings | Turn on push notifications


# **v3ApplicationsPushSettingsGet**
> V3ApplicationsPushSettingsGet200Response v3ApplicationsPushSettingsGet()

## Check push notifications Shows whether the push notifications feature is turned on for an application. https://sendbird.com/docs/chat/v3/platform-api/application/managing-notifications/check-push-notifications -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PushNotificationsApi(configuration);

let body:Sendbird.PushNotificationsApiV3ApplicationsPushSettingsGetRequest = {
  // string (optional)
  apiToken: "Api-Token_example",
};

apiInstance.v3ApplicationsPushSettingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**V3ApplicationsPushSettingsGet200Response**

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

# **v3ApplicationsPushSettingsPut**
> ListPushConfigurationsResponse v3ApplicationsPushSettingsPut()

## Turn on push notifications Determines whether to turn on the push notifications feature for an application. https://sendbird.com/docs/chat/v3/platform-api/application/managing-notifications/turn-on-push-notifications -----------------------------  

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.PushNotificationsApi(configuration);

let body:Sendbird.PushNotificationsApiV3ApplicationsPushSettingsPutRequest = {
  // string (optional)
  apiToken: "Api-Token_example",
  // V3ApplicationsPushSettingsGetRequest (optional)
  v3ApplicationsPushSettingsGetRequest: {
    pushEnabled: true,
  },
};

apiInstance.v3ApplicationsPushSettingsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3ApplicationsPushSettingsGetRequest** | **V3ApplicationsPushSettingsGetRequest**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListPushConfigurationsResponse**

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


