# Sendbird.ApplicationApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addApnsPushConfiguration**](ApplicationApi.md#addApnsPushConfiguration) | **POST** /v3/applications/push/apns | Add an APNs push configuration
[**addFcmPushConfiguration**](ApplicationApi.md#addFcmPushConfiguration) | **POST** /v3/applications/push/fcm | Add a FCM push configuration
[**addHmsPushConfiguration**](ApplicationApi.md#addHmsPushConfiguration) | **POST** /v3/applications/push/hms | Add an HMS push configuration
[**addIpToWhitelist**](ApplicationApi.md#addIpToWhitelist) | **PUT** /v3/applications/settings/ip_whitelist | Add an IP to a whitelist
[**banUsersInChannelsWithCustomChannelType**](ApplicationApi.md#banUsersInChannelsWithCustomChannelType) | **POST** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | Ban users in channels with a custom channel type
[**configureAutoEventMessages**](ApplicationApi.md#configureAutoEventMessages) | **PUT** /v3/applications/settings/auto_event_message | Configure auto event message settings
[**deleteAllowedIpsFromWhitelist**](ApplicationApi.md#deleteAllowedIpsFromWhitelist) | **DELETE** /v3/applications/settings/ip_whitelist | Delete allowed IPs from a whitelist
[**deleteApnsCertificateById**](ApplicationApi.md#deleteApnsCertificateById) | **DELETE** /v3/applications/push/apns/cert/{provider_id} | Delete an APNs certificate
[**generateSecondaryApiToken**](ApplicationApi.md#generateSecondaryApiToken) | **POST** /v3/applications/api_tokens | Generate a secondary API token
[**listAutoEventMessages**](ApplicationApi.md#listAutoEventMessages) | **GET** /v3/applications/settings/auto_event_message | List auto event messages
[**listBannedUsersInChannelsWithCustomChannelType**](ApplicationApi.md#listBannedUsersInChannelsWithCustomChannelType) | **GET** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | List banned users in channels with a custom channel type
[**listMutedUsersInChannelsWithCustomChannelType**](ApplicationApi.md#listMutedUsersInChannelsWithCustomChannelType) | **GET** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | List muted users in channels with a custom channel type
[**listPushConfigurations**](ApplicationApi.md#listPushConfigurations) | **GET** /v3/applications/push/{push_type} | List push configurations
[**listPushNotificationContentTemplates**](ApplicationApi.md#listPushNotificationContentTemplates) | **GET** /v3/applications/push/message_templates | List push notification content templates
[**listSecondaryApiTokens**](ApplicationApi.md#listSecondaryApiTokens) | **GET** /v3/applications/api_tokens | List secondary API tokens
[**muteUsersInChannelsWithCustomChannelType**](ApplicationApi.md#muteUsersInChannelsWithCustomChannelType) | **POST** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | Mute users in channels with a custom channel type
[**removePushConfigurationById**](ApplicationApi.md#removePushConfigurationById) | **DELETE** /v3/applications/push/{push_type}/{provider_id} | Remove a push configuration
[**retrieveIpWhitelist**](ApplicationApi.md#retrieveIpWhitelist) | **GET** /v3/applications/settings/ip_whitelist | Retrieve an IP whitelist
[**revokeSecondaryApiTokenByToken**](ApplicationApi.md#revokeSecondaryApiTokenByToken) | **DELETE** /v3/applications/api_tokens/{api_token} | Revoke a secondary API token
[**setDomainFilter**](ApplicationApi.md#setDomainFilter) | **PUT** /v3/applications/settings_global/{custom_type} | Message moderation
[**unbanUsersInChannelsWithCustomChannelType**](ApplicationApi.md#unbanUsersInChannelsWithCustomChannelType) | **DELETE** /v3/applications/settings_by_channel_custom_type/{custom_type}/ban | Unban users in channels with a custom channel type
[**unmuteUsersInChannelsWithCustomChannelType**](ApplicationApi.md#unmuteUsersInChannelsWithCustomChannelType) | **DELETE** /v3/applications/settings_by_channel_custom_type/{custom_type}/mute | Unmute users in channels with a custom channel type
[**updateApnsPushConfigurationById**](ApplicationApi.md#updateApnsPushConfigurationById) | **PUT** /v3/applications/push/apns/{provider_id} | Update an APNs push configuration
[**updateDefaultChannelInvitationPreference**](ApplicationApi.md#updateDefaultChannelInvitationPreference) | **PUT** /v3/applications/default_channel_invitation_preference | Update default channel invitation preference
[**updateFcmPushConfigurationById**](ApplicationApi.md#updateFcmPushConfigurationById) | **PUT** /v3/applications/push/fcm/{provider_id} | Update a FCM push configuration
[**updateHmsPushConfigurationById**](ApplicationApi.md#updateHmsPushConfigurationById) | **PUT** /v3/applications/push/hms/{provider_id} | Update an HMS push configuration
[**updatePushNotificationContentTemplate**](ApplicationApi.md#updatePushNotificationContentTemplate) | **PUT** /v3/applications/push/message_templates/{template_name} | Update a push notification content template
[**viewDefaultChannelInvitationPreference**](ApplicationApi.md#viewDefaultChannelInvitationPreference) | **GET** /v3/applications/default_channel_invitation_preference | View default channel invitation preference
[**viewPushConfigurationById**](ApplicationApi.md#viewPushConfigurationById) | **GET** /v3/applications/push/{push_type}/{provider_id} | View a push configuration
[**viewPushNotificationContentTemplate**](ApplicationApi.md#viewPushNotificationContentTemplate) | **GET** /v3/applications/push/message_templates/{template_name} | View a push notification content template
[**viewSecondaryApiTokenByToken**](ApplicationApi.md#viewSecondaryApiTokenByToken) | **GET** /v3/applications/api_tokens/{api_token} | View a secondary API token


# **addApnsPushConfiguration**
> AddApnsPushConfigurationResponse addApnsPushConfiguration()

## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiAddApnsPushConfigurationRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddApnsPushConfigurationData (optional)
  addApnsPushConfigurationData: {
    apnsCert: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    apnsCertEnvType: "apnsCertEnvType_example",
    apnsCertPassword: "apnsCertPassword_example",
    hasUnreadCountBadge: true,
    contentAvailable: true,
    mutableContent: true,
    pushSound: "pushSound_example",
    apnsType: "apnsType_example",
  },
};

apiInstance.addApnsPushConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addApnsPushConfigurationData** | **AddApnsPushConfigurationData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddApnsPushConfigurationResponse**

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

# **addFcmPushConfiguration**
> AddFcmPushConfigurationResponse addFcmPushConfiguration()

## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiAddFcmPushConfigurationRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddFcmPushConfigurationData (optional)
  addFcmPushConfigurationData: {
    apiKey: "apiKey_example",
    pushSound: "pushSound_example",
  },
};

apiInstance.addFcmPushConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addFcmPushConfigurationData** | **AddFcmPushConfigurationData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddFcmPushConfigurationResponse**

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

# **addHmsPushConfiguration**
> AddHmsPushConfigurationResponse addHmsPushConfiguration()

## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiAddHmsPushConfigurationRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddHmsPushConfigurationData (optional)
  addHmsPushConfigurationData: {
    huaweiAppId: "huaweiAppId_example",
    huaweiAppSecret: "huaweiAppSecret_example",
    pushSound: "pushSound_example",
  },
};

apiInstance.addHmsPushConfiguration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addHmsPushConfigurationData** | **AddHmsPushConfigurationData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddHmsPushConfigurationResponse**

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

# **addIpToWhitelist**
> AddIpToWhitelistResponse addIpToWhitelist()

## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiAddIpToWhitelistRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddIpToWhitelistData (optional)
  addIpToWhitelistData: {
    ipWhitelistAddresses: [
      "ipWhitelistAddresses_example",
    ],
  },
};

apiInstance.addIpToWhitelist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addIpToWhitelistData** | **AddIpToWhitelistData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddIpToWhitelistResponse**

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

# **banUsersInChannelsWithCustomChannelType**
> any banUsersInChannelsWithCustomChannelType()

## Ban specified users in channels with a custom channel type at once.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiBanUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // BanUsersInChannelsWithCustomChannelTypeData (optional)
  banUsersInChannelsWithCustomChannelTypeData: {
    bannedList: [
      {
        userId: "userId_example",
        seconds: 3.14,
        description: "description_example",
      },
    ],
    onDemandUpsert: true,
  },
};

apiInstance.banUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **banUsersInChannelsWithCustomChannelTypeData** | **BanUsersInChannelsWithCustomChannelTypeData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **configureAutoEventMessages**
> SendBirdAutoEventMessageSettings configureAutoEventMessages()

## Configure auto event message settings  Determines whether to automatically send event messages to group channels when events take place in an application. You can choose which auto event message to receive on the Sendbird Dashboard  https://sendbird.com/docs/chat/v3/platform-api/application/managing-auto-event-messages/configure-auto-event-message-settings ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiConfigureAutoEventMessagesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // ConfigureAutoEventData (optional)
  configureAutoEventData: {
    autoEventMessage: {
      userLeave: {},
      userJoin: {},
      channelCreate: {},
      channelChange: {},
    },
  },
};

apiInstance.configureAutoEventMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configureAutoEventData** | **ConfigureAutoEventData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**SendBirdAutoEventMessageSettings**

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

# **deleteAllowedIpsFromWhitelist**
> DeleteAllowedIpsFromWhitelistResponse deleteAllowedIpsFromWhitelist()

## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiDeleteAllowedIpsFromWhitelistRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // Array<string>
  ipWhitelistAddresses: [
    "ip_whitelist_addresses_example",
  ],
};

apiInstance.deleteAllowedIpsFromWhitelist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **ipWhitelistAddresses** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**DeleteAllowedIpsFromWhitelistResponse**

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

# **deleteApnsCertificateById**
> DeleteApnsCertificateByIdResponse deleteApnsCertificateById()

## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiDeleteApnsCertificateByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  providerId: "provider_id_example",
};

apiInstance.deleteApnsCertificateById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**DeleteApnsCertificateByIdResponse**

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

# **generateSecondaryApiToken**
> GenerateSecondaryApiTokenResponse generateSecondaryApiToken()

## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiGenerateSecondaryApiTokenRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // GenerateSecondaryApiTokenData (optional)
  generateSecondaryApiTokenData: {
    HTTP_API_TOKEN: "HTTP_API_TOKEN_example",
  },
};

apiInstance.generateSecondaryApiToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSecondaryApiTokenData** | **GenerateSecondaryApiTokenData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**GenerateSecondaryApiTokenResponse**

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

# **listAutoEventMessages**
> SendBirdAutoEventMessageSettings listAutoEventMessages()

## List auto event messages  Retrieves a list of auto event messages that are sent in a specified application and indicates which ones are in use. Auto event messages are Admin messages that are automatically generated when a specific event occurs.  https://sendbird.com/docs/chat/v3/platform-api/application/managing-auto-event-messages/list-auto-event-messages ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListAutoEventMessagesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listAutoEventMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**SendBirdAutoEventMessageSettings**

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

# **listBannedUsersInChannelsWithCustomChannelType**
> CustomTypeListBannedUsersResponse listBannedUsersInChannelsWithCustomChannelType()

## Retrieves a list of users banned from channels with the specified custom channel type.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListBannedUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listBannedUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**CustomTypeListBannedUsersResponse**

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

# **listMutedUsersInChannelsWithCustomChannelType**
> ListMutedUsersInChannelsWithCustomChannelType200Response listMutedUsersInChannelsWithCustomChannelType()

## Retrieves a list of the muted users in channels with a custom channel type.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListMutedUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.listMutedUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**ListMutedUsersInChannelsWithCustomChannelType200Response**

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

# **listPushConfigurations**
> ListPushConfigurationsResponse listPushConfigurations()

## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListPushConfigurationsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  pushType: "push_type_example",
};

apiInstance.listPushConfigurations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **pushType** | [**string**] |  | defaults to undefined


### Return type

**ListPushConfigurationsResponse**

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

# **listPushNotificationContentTemplates**
> ListPushNotificationContentTemplatesResponse listPushNotificationContentTemplates()

## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListPushNotificationContentTemplatesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listPushNotificationContentTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListPushNotificationContentTemplatesResponse**

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

# **listSecondaryApiTokens**
> ListSecondaryApiTokensResponse listSecondaryApiTokens()

## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiListSecondaryApiTokensRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listSecondaryApiTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListSecondaryApiTokensResponse**

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

# **muteUsersInChannelsWithCustomChannelType**
> any muteUsersInChannelsWithCustomChannelType()

## Mutes specified users in channels with a custom channel type at once.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiMuteUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // MuteUsersInChannelsWithCustomChannelTypeData (optional)
  muteUsersInChannelsWithCustomChannelTypeData: {
    userIds: [
      "userIds_example",
    ],
    seconds: 3.14,
    description: "description_example",
    onDemandUpsert: true,
  },
};

apiInstance.muteUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteUsersInChannelsWithCustomChannelTypeData** | **MuteUsersInChannelsWithCustomChannelTypeData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **removePushConfigurationById**
> RemovePushConfigurationByIdResponse removePushConfigurationById()

## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiRemovePushConfigurationByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  pushType: "push_type_example",
  // string
  providerId: "provider_id_example",
};

apiInstance.removePushConfigurationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **pushType** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**RemovePushConfigurationByIdResponse**

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

# **retrieveIpWhitelist**
> RetrieveIpWhitelistResponse retrieveIpWhitelist()

## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiRetrieveIpWhitelistRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.retrieveIpWhitelist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**RetrieveIpWhitelistResponse**

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

# **revokeSecondaryApiTokenByToken**
> RevokeSecondaryApiTokenByTokenResponse revokeSecondaryApiTokenByToken()

## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiRevokeSecondaryApiTokenByTokenRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  apiToken2: "api_token_example",
};

apiInstance.revokeSecondaryApiTokenByToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **apiToken2** | [**string**] |  | defaults to undefined


### Return type

**RevokeSecondaryApiTokenByTokenResponse**

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

# **setDomainFilter**
> SendBirdChannelResponse setDomainFilter()

## 

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiSetDomainFilterRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // SetDomainFilterData (optional)
  setDomainFilterData: {
    domainFilter: {
      domains: [
        "domains_example",
      ],
      type: 1,
      shouldCheckGlobal: true,
    },
    profanityFilter: {
      keywords: [
        "keywords_example",
      ],
      regexFilters: [
        {
          regex: "regex_example",
        },
      ],
      type: 1,
      shouldCheckGlobal: true,
    },
    profanityTriggeredModeration: {
      count: 1,
      duration: 1,
      action: 1,
    },
    imageModeration: {
      type: 1,
      softBlock: true,
      limits: {
        adult: 1,
        spoof: 1,
        medical: 1,
        violence: 1,
        racy: 1,
      },
      checkUrls: true,
    },
  },
};

apiInstance.setDomainFilter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setDomainFilterData** | **SetDomainFilterData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined


### Return type

**SendBirdChannelResponse**

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

# **unbanUsersInChannelsWithCustomChannelType**
> any unbanUsersInChannelsWithCustomChannelType()

## Unban specified users in channels with a custom channel type at once.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUnbanUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // Array<string>
  userIds: [
    "user_ids_example",
  ],
};

apiInstance.unbanUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined
 **userIds** | **Array&lt;string&gt;** |  | defaults to undefined


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

# **unmuteUsersInChannelsWithCustomChannelType**
> any unmuteUsersInChannelsWithCustomChannelType()

## Unmute specified users in channels with a custom channel type at once.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUnmuteUsersInChannelsWithCustomChannelTypeRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  customType: "custom_type_example",
  // Array<string>
  userIds: [
    "user_ids_example",
  ],
};

apiInstance.unmuteUsersInChannelsWithCustomChannelType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **customType** | [**string**] |  | defaults to undefined
 **userIds** | **Array&lt;string&gt;** |  | defaults to undefined


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

# **updateApnsPushConfigurationById**
> UpdateApnsPushConfigurationByIdResponse updateApnsPushConfigurationById()

## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUpdateApnsPushConfigurationByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  providerId: "provider_id_example",
  // UpdateApnsPushConfigurationByIdData (optional)
  updateApnsPushConfigurationByIdData: {
    providerId: "providerId_example",
    apnsCert: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    apnsCertEnvType: "apnsCertEnvType_example",
    apnsCertPassword: "apnsCertPassword_example",
    hasUnreadCountBadge: true,
    contentAvailable: true,
    mutableContent: true,
    pushSound: "pushSound_example",
    apnsType: "apnsType_example",
  },
};

apiInstance.updateApnsPushConfigurationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateApnsPushConfigurationByIdData** | **UpdateApnsPushConfigurationByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**UpdateApnsPushConfigurationByIdResponse**

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

# **updateDefaultChannelInvitationPreference**
> UpdateDefaultChannelInvitationPreferenceResponse updateDefaultChannelInvitationPreference()

## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUpdateDefaultChannelInvitationPreferenceRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // UpdateDefaultChannelInvitationPreferenceData (optional)
  updateDefaultChannelInvitationPreferenceData: {
    autoAccept: true,
  },
};

apiInstance.updateDefaultChannelInvitationPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDefaultChannelInvitationPreferenceData** | **UpdateDefaultChannelInvitationPreferenceData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**UpdateDefaultChannelInvitationPreferenceResponse**

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

# **updateFcmPushConfigurationById**
> UpdateFcmPushConfigurationByIdResponse updateFcmPushConfigurationById()

## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUpdateFcmPushConfigurationByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  providerId: "provider_id_example",
  // UpdateFcmPushConfigurationByIdData (optional)
  updateFcmPushConfigurationByIdData: {
    providerId: "providerId_example",
    apiKey: "apiKey_example",
    pushSound: "pushSound_example",
  },
};

apiInstance.updateFcmPushConfigurationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFcmPushConfigurationByIdData** | **UpdateFcmPushConfigurationByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**UpdateFcmPushConfigurationByIdResponse**

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

# **updateHmsPushConfigurationById**
> UpdateHmsPushConfigurationByIdResponse updateHmsPushConfigurationById()

## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUpdateHmsPushConfigurationByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  providerId: "provider_id_example",
  // UpdateHmsPushConfigurationByIdData (optional)
  updateHmsPushConfigurationByIdData: {
    providerId: "providerId_example",
    huaweiAppId: "huaweiAppId_example",
    huaweiAppSecret: "huaweiAppSecret_example",
    pushSound: "pushSound_example",
  },
};

apiInstance.updateHmsPushConfigurationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateHmsPushConfigurationByIdData** | **UpdateHmsPushConfigurationByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**UpdateHmsPushConfigurationByIdResponse**

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

# **updatePushNotificationContentTemplate**
> UpdatePushNotificationContentTemplateResponse updatePushNotificationContentTemplate()

## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiUpdatePushNotificationContentTemplateRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  templateName: "template_name_example",
  // UpdatePushNotificationContentTemplateData (optional)
  updatePushNotificationContentTemplateData: {
    templateName: "templateName_example",
    template: "template_example",
    templateMESG: "templateMESG_example",
    templateFILE: "templateFILE_example",
    templateADMN: "templateADMN_example",
  },
};

apiInstance.updatePushNotificationContentTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePushNotificationContentTemplateData** | **UpdatePushNotificationContentTemplateData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **templateName** | [**string**] |  | defaults to undefined


### Return type

**UpdatePushNotificationContentTemplateResponse**

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

# **viewDefaultChannelInvitationPreference**
> ViewDefaultChannelInvitationPreferenceResponse viewDefaultChannelInvitationPreference()

## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiViewDefaultChannelInvitationPreferenceRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.viewDefaultChannelInvitationPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ViewDefaultChannelInvitationPreferenceResponse**

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

# **viewPushConfigurationById**
> ViewPushConfigurationByIdResponse viewPushConfigurationById()

## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiViewPushConfigurationByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  pushType: "push_type_example",
  // string
  providerId: "provider_id_example",
};

apiInstance.viewPushConfigurationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **pushType** | [**string**] |  | defaults to undefined
 **providerId** | [**string**] |  | defaults to undefined


### Return type

**ViewPushConfigurationByIdResponse**

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

# **viewPushNotificationContentTemplate**
> ViewPushNotificationContentTemplateResponse viewPushNotificationContentTemplate()

## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiViewPushNotificationContentTemplateRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  templateName: "template_name_example",
};

apiInstance.viewPushNotificationContentTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **templateName** | [**string**] |  | defaults to undefined


### Return type

**ViewPushNotificationContentTemplateResponse**

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

# **viewSecondaryApiTokenByToken**
> ViewSecondaryApiTokenByTokenResponse viewSecondaryApiTokenByToken()

## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.ApplicationApi(configuration);

let body:Sendbird.ApplicationApiViewSecondaryApiTokenByTokenRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  apiToken2: "api_token_example",
};

apiInstance.viewSecondaryApiTokenByToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **apiToken2** | [**string**] |  | defaults to undefined


### Return type

**ViewSecondaryApiTokenByTokenResponse**

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


