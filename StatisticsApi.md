# .StatisticsApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveAdvancedAnalyticsMetrics**](StatisticsApi.md#retrieveAdvancedAnalyticsMetrics) | **GET** /v3/statistics/metric | Retrieve Advanced analytics metrics
[**viewNumberOfConcurrentConnections**](StatisticsApi.md#viewNumberOfConcurrentConnections) | **GET** /v3/applications/ccu | View number of concurrent connections
[**viewNumberOfDailyActiveUsers**](StatisticsApi.md#viewNumberOfDailyActiveUsers) | **GET** /v3/applications/dau | View number of daily active users
[**viewNumberOfMonthlyActiveUsers**](StatisticsApi.md#viewNumberOfMonthlyActiveUsers) | **GET** /v3/applications/mau | View number of monthly active users
[**viewNumberOfPeakConnections**](StatisticsApi.md#viewNumberOfPeakConnections) | **GET** /v3/applications/peak_connections | View number of peak connections


# **retrieveAdvancedAnalyticsMetrics**
> RetrieveAdvancedAnalyticsMetricsResponse retrieveAdvancedAnalyticsMetrics()

## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatisticsApi(configuration);

let body:.StatisticsApiRetrieveAdvancedAnalyticsMetricsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.retrieveAdvancedAnalyticsMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**RetrieveAdvancedAnalyticsMetricsResponse**

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

# **viewNumberOfConcurrentConnections**
> ViewNumberOfConcurrentConnectionsResponse viewNumberOfConcurrentConnections()

## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatisticsApi(configuration);

let body:.StatisticsApiViewNumberOfConcurrentConnectionsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewNumberOfConcurrentConnections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ViewNumberOfConcurrentConnectionsResponse**

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

# **viewNumberOfDailyActiveUsers**
> ViewNumberOfDailyActiveUsersResponse viewNumberOfDailyActiveUsers()

## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatisticsApi(configuration);

let body:.StatisticsApiViewNumberOfDailyActiveUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  date: "date_example",
};

apiInstance.viewNumberOfDailyActiveUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **date** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfDailyActiveUsersResponse**

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

# **viewNumberOfMonthlyActiveUsers**
> ViewNumberOfMonthlyActiveUsersResponse viewNumberOfMonthlyActiveUsers()

## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatisticsApi(configuration);

let body:.StatisticsApiViewNumberOfMonthlyActiveUsersRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  date: "date_example",
};

apiInstance.viewNumberOfMonthlyActiveUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **date** | [**string**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfMonthlyActiveUsersResponse**

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

# **viewNumberOfPeakConnections**
> ViewNumberOfPeakConnectionsResponse viewNumberOfPeakConnections()

## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatisticsApi(configuration);

let body:.StatisticsApiViewNumberOfPeakConnectionsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  timeDimension: "time_dimension_example",
  // number
  startYear: 1,
  // number
  startMonth: 1,
  // number
  endYear: 1,
  // number
  endMonth: 1,
  // number (optional)
  startDay: 1,
  // number (optional)
  endDay: 1,
};

apiInstance.viewNumberOfPeakConnections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **timeDimension** | [**string**] |  | defaults to undefined
 **startYear** | [**number**] |  | defaults to undefined
 **startMonth** | [**number**] |  | defaults to undefined
 **endYear** | [**number**] |  | defaults to undefined
 **endMonth** | [**number**] |  | defaults to undefined
 **startDay** | [**number**] |  | (optional) defaults to undefined
 **endDay** | [**number**] |  | (optional) defaults to undefined


### Return type

**ViewNumberOfPeakConnectionsResponse**

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


