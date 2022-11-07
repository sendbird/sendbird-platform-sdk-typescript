# Sendbird.DataExportApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDataExportsByMessageChannelOrUser**](DataExportApi.md#listDataExportsByMessageChannelOrUser) | **GET** /v3/export/{data_type} | List data exports by message, channel, or user
[**registerAndScheduleDataExport**](DataExportApi.md#registerAndScheduleDataExport) | **POST** /v3/export/{data_type} | Register and schedule a data export
[**viewDataExportById**](DataExportApi.md#viewDataExportById) | **GET** /v3/export/{data_type}/{request_id} | View a data export


# **listDataExportsByMessageChannelOrUser**
> ListDataExportsByMessageChannelOrUserResponse listDataExportsByMessageChannelOrUser()

## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.DataExportApi(configuration);

let body:Sendbird.DataExportApiListDataExportsByMessageChannelOrUserRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  dataType: "data_type_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listDataExportsByMessageChannelOrUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **dataType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**ListDataExportsByMessageChannelOrUserResponse**

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

# **registerAndScheduleDataExport**
> RegisterAndScheduleDataExportResponse registerAndScheduleDataExport()

## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.DataExportApi(configuration);

let body:Sendbird.DataExportApiRegisterAndScheduleDataExportRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  dataType: "data_type_example",
  // RegisterAndScheduleDataExportData (optional)
  registerAndScheduleDataExportData: {
    startTs: 1,
    endTs: 1,
    format: "format_example",
    csvDelimiter: "csvDelimiter_example",
    timezone: "timezone_example",
    senderIds: [
      "senderIds_example",
    ],
    excludeSenderIds: [
      "excludeSenderIds_example",
    ],
    channelUrls: [
      "channelUrls_example",
    ],
    excludeChannelUrls: [
      "excludeChannelUrls_example",
    ],
    userIds: [
      "userIds_example",
    ],
    showReadReceipt: true,
    showChannelMetadata: true,
    neighboringMessageLimit: 1,
  },
};

apiInstance.registerAndScheduleDataExport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerAndScheduleDataExportData** | **RegisterAndScheduleDataExportData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **dataType** | [**string**] |  | defaults to undefined


### Return type

**RegisterAndScheduleDataExportResponse**

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

# **viewDataExportById**
> ViewDataExportByIdResponse viewDataExportById()

## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.DataExportApi(configuration);

let body:Sendbird.DataExportApiViewDataExportByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  dataType: "data_type_example",
  // string
  requestId: "request_id_example",
};

apiInstance.viewDataExportById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **dataType** | [**string**] |  | defaults to undefined
 **requestId** | [**string**] |  | defaults to undefined


### Return type

**ViewDataExportByIdResponse**

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


