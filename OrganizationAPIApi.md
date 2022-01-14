# .OrganizationAPIApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](OrganizationAPIApi.md#createApplication) | **POST** /api/v2/applications | Create an application
[**deleteApplicationById**](OrganizationAPIApi.md#deleteApplicationById) | **DELETE** /api/v2/applications/{app_id} | Delete an application
[**listApplications**](OrganizationAPIApi.md#listApplications) | **GET** /api/v2/applications | List applications
[**viewApplicationById**](OrganizationAPIApi.md#viewApplicationById) | **GET** /api/v2/applications/{app_id} | View an application


# **createApplication**
> InlineResponse200Results createApplication()

## Create an application  Creates a new application under your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-create-an-application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationAPIApi(configuration);

let body:.OrganizationAPIApiCreateApplicationRequest = {
  // string (optional)
  SENDBIRDORGANIZATIONAPITOKEN: "{{ORG_API_TOKEN}}",
  // any (optional)
  body: {},
};

apiInstance.createApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **SENDBIRDORGANIZATIONAPITOKEN** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200Results**

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

# **deleteApplicationById**
> void deleteApplicationById()

## Delete an application  Deletes the specified application.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-delete-an-application ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationAPIApi(configuration);

let body:.OrganizationAPIApiDeleteApplicationByIdRequest = {
  // string
  appId: "app_id_example",
  // string (optional)
  SENDBIRDORGANIZATIONAPITOKEN: "{{ORG_API_TOKEN}}",
};

apiInstance.deleteApplicationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **SENDBIRDORGANIZATIONAPITOKEN** | [**string**] |  | (optional) defaults to undefined


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

# **listApplications**
> InlineResponse200 listApplications()

## List applications  Retrieves a list of applications of your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-list-applications ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationAPIApi(configuration);

let body:.OrganizationAPIApiListApplicationsRequest = {
  // string (optional)
  SENDBIRDORGANIZATIONAPITOKEN: "{{ORG_API_TOKEN}}",
};

apiInstance.listApplications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SENDBIRDORGANIZATIONAPITOKEN** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200**

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

# **viewApplicationById**
> InlineResponse200Results viewApplicationById()

## View an application  Retrieves information about an application with a specified application ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-view-an-application ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationAPIApi(configuration);

let body:.OrganizationAPIApiViewApplicationByIdRequest = {
  // string
  appId: "app_id_example",
  // string (optional)
  SENDBIRDORGANIZATIONAPITOKEN: "{{ORG_API_TOKEN}}",
};

apiInstance.viewApplicationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **SENDBIRDORGANIZATIONAPITOKEN** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200Results**

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


