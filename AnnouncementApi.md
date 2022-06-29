# .AnnouncementApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementById**](AnnouncementApi.md#getDetailedOpenRateOfAnnouncementById) | **GET** /v3/announcement_open_rate/{unique_id} | Get detailed open rate of an announcement
[**getDetailedOpenRateOfAnnouncementGroup**](AnnouncementApi.md#getDetailedOpenRateOfAnnouncementGroup) | **GET** /v3/announcement_open_rate_by_group/{announcement_group} | Get detailed open rate of an announcement group
[**getDetailedOpenStatusOfAnnouncementById**](AnnouncementApi.md#getDetailedOpenStatusOfAnnouncementById) | **GET** /v3/announcement_open_status/{unique_id} | Get detailed open status of an announcement
[**viewAnnouncementById**](AnnouncementApi.md#viewAnnouncementById) | **GET** /v3/announcements/{unique_id} | View an announcement


# **getDetailedOpenRateOfAnnouncementById**
> GetDetailedOpenRateOfAnnouncementByIdResponse getDetailedOpenRateOfAnnouncementById()

## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementApi(configuration);

let body:.AnnouncementApiGetDetailedOpenRateOfAnnouncementByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  uniqueId: "unique_id_example",
};

apiInstance.getDetailedOpenRateOfAnnouncementById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **uniqueId** | [**string**] |  | defaults to undefined


### Return type

**GetDetailedOpenRateOfAnnouncementByIdResponse**

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

# **getDetailedOpenRateOfAnnouncementGroup**
> GetDetailedOpenRateOfAnnouncementGroupResponse getDetailedOpenRateOfAnnouncementGroup()

## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementApi(configuration);

let body:.AnnouncementApiGetDetailedOpenRateOfAnnouncementGroupRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  announcementGroup: "announcement_group_example",
};

apiInstance.getDetailedOpenRateOfAnnouncementGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **announcementGroup** | [**string**] |  | defaults to undefined


### Return type

**GetDetailedOpenRateOfAnnouncementGroupResponse**

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

# **getDetailedOpenStatusOfAnnouncementById**
> GetDetailedOpenStatusOfAnnouncementByIdResponse getDetailedOpenStatusOfAnnouncementById()

## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementApi(configuration);

let body:.AnnouncementApiGetDetailedOpenStatusOfAnnouncementByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  uniqueId: "unique_id_example",
  // number (optional)
  limit: 1,
  // string (optional)
  next: "next_example",
  // Array<string> (optional)
  uniqueIds: [
    "unique_ids_example",
  ],
  // Array<string> (optional)
  channelUrls: [
    "channel_urls_example",
  ],
  // boolean (optional)
  hasOpened: true,
};

apiInstance.getDetailedOpenStatusOfAnnouncementById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **uniqueId** | [**string**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **next** | [**string**] |  | (optional) defaults to undefined
 **uniqueIds** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **channelUrls** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **hasOpened** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**GetDetailedOpenStatusOfAnnouncementByIdResponse**

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

# **viewAnnouncementById**
> ViewAnnouncementByIdResponse viewAnnouncementById()

## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementApi(configuration);

let body:.AnnouncementApiViewAnnouncementByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  uniqueId: "unique_id_example",
};

apiInstance.viewAnnouncementById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **uniqueId** | [**string**] |  | defaults to undefined


### Return type

**ViewAnnouncementByIdResponse**

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


