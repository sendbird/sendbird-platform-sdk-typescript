# .AnnouncementsApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetailedOpenRateOfAnnouncementById**](AnnouncementsApi.md#getDetailedOpenRateOfAnnouncementById) | **GET** /v3/announcement_open_rate/{unique_id} | Get detailed open rate of an announcement
[**getDetailedOpenRateOfAnnouncementGroup**](AnnouncementsApi.md#getDetailedOpenRateOfAnnouncementGroup) | **GET** /v3/announcement_open_rate_by_group/{announcement_group} | Get detailed open rate of an announcement group
[**getDetailedOpenStatusOfAnnouncementById**](AnnouncementsApi.md#getDetailedOpenStatusOfAnnouncementById) | **GET** /v3/announcement_open_status/{unique_id} | Get detailed open status of an announcement
[**getStatistics**](AnnouncementsApi.md#getStatistics) | **GET** /v3/announcement_stats/weekly | Get statistics - weekly
[**getStatisticsDaily**](AnnouncementsApi.md#getStatisticsDaily) | **GET** /v3/announcement_stats/daily | Get statistics - daily
[**getStatisticsMonthly**](AnnouncementsApi.md#getStatisticsMonthly) | **GET** /v3/announcement_stats/monthly | Get statistics - monthly
[**listAnnouncementGroups**](AnnouncementsApi.md#listAnnouncementGroups) | **GET** /v3/announcement_group | List announcement groups
[**listAnnouncements**](AnnouncementsApi.md#listAnnouncements) | **GET** /v3/announcements | List announcements
[**scheduleAnnouncement**](AnnouncementsApi.md#scheduleAnnouncement) | **POST** /v3/announcements | Schedule an announcement
[**updateAnnouncementById**](AnnouncementsApi.md#updateAnnouncementById) | **PUT** /v3/announcements/{unique_id} | Update an announcement
[**viewAnnouncementById**](AnnouncementsApi.md#viewAnnouncementById) | **GET** /v3/announcements/{unique_id} | View an announcement


# **getDetailedOpenRateOfAnnouncementById**
> GetDetailedOpenRateOfAnnouncementByIdResponse getDetailedOpenRateOfAnnouncementById()

## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetDetailedOpenRateOfAnnouncementByIdRequest = {
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
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetDetailedOpenRateOfAnnouncementGroupRequest = {
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
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetDetailedOpenStatusOfAnnouncementByIdRequest = {
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

# **getStatistics**
> GetStatisticsResponse getStatistics()

## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetStatisticsRequest = {
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
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetStatisticsDailyRequest = {
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
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiGetStatisticsMonthlyRequest = {
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

# **listAnnouncementGroups**
> ListAnnouncementGroupsResponse listAnnouncementGroups()

## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiListAnnouncementGroupsRequest = {
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
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiListAnnouncementsRequest = {
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

# **scheduleAnnouncement**
> ScheduleAnnouncementResponse scheduleAnnouncement()

## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiScheduleAnnouncementRequest = {
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

# **updateAnnouncementById**
> UpdateAnnouncementByIdResponse updateAnnouncementById()

## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiUpdateAnnouncementByIdRequest = {
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

# **viewAnnouncementById**
> ViewAnnouncementByIdResponse viewAnnouncementById()

## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnnouncementsApi(configuration);

let body:.AnnouncementsApiViewAnnouncementByIdRequest = {
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


