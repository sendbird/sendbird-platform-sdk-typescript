# .EmojisApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmojiCategories**](EmojisApi.md#addEmojiCategories) | **POST** /v3/emoji_categories | Add emoji categories
[**addEmojis**](EmojisApi.md#addEmojis) | **POST** /v3/emojis | Add emojis
[**deleteEmojiByKey**](EmojisApi.md#deleteEmojiByKey) | **DELETE** /v3/emojis/{emoji_key} | Delete an emoji
[**deleteEmojiCategoryById**](EmojisApi.md#deleteEmojiCategoryById) | **DELETE** /v3/emoji_categories/{emoji_category_id} | Delete an emoji category
[**enableReactions**](EmojisApi.md#enableReactions) | **PUT** /v3/applications/settings/reactions | Enable reactions
[**getEmojiByKey**](EmojisApi.md#getEmojiByKey) | **GET** /v3/emojis/{emoji_key} | Get an emoji
[**getEmojiCategoryById**](EmojisApi.md#getEmojiCategoryById) | **GET** /v3/emoji_categories/{emoji_category_id} | Get an emoji category
[**listAllEmojisAndEmojiCategories**](EmojisApi.md#listAllEmojisAndEmojiCategories) | **GET** /v3/emoji_categories | List all emojis and emoji categories
[**listEmojis**](EmojisApi.md#listEmojis) | **GET** /v3/emojis | List emojis
[**updateEmojiCategoryUrlById**](EmojisApi.md#updateEmojiCategoryUrlById) | **PUT** /v3/emoji_categories/{emoji_category_id} | Update an emoji category URL
[**updateEmojiUrlByKey**](EmojisApi.md#updateEmojiUrlByKey) | **PUT** /v3/emojis/{emoji_key} | Update an emoji URL
[**useDefaultEmojis**](EmojisApi.md#useDefaultEmojis) | **PUT** /v3/applications/settings/use_default_emoji | Use default emojis


# **addEmojiCategories**
> AddEmojiCategoriesResponse addEmojiCategories()

## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiAddEmojiCategoriesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // any (optional)
  body: {},
};

apiInstance.addEmojiCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddEmojiCategoriesResponse**

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

# **addEmojis**
> AddEmojisResponse addEmojis()

## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiAddEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // AddEmojisData (optional)
  addEmojisData: {
    emojiCategoryId: 1,
    emojis: [
      "emojis_example",
    ],
  },
};

apiInstance.addEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addEmojisData** | **AddEmojisData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**AddEmojisResponse**

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

# **deleteEmojiByKey**
> void deleteEmojiByKey()

## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiDeleteEmojiByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
};

apiInstance.deleteEmojiByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmojiCategoryById**
> void deleteEmojiCategoryById()

## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiDeleteEmojiCategoryByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
};

apiInstance.deleteEmojiCategoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableReactions**
> EnableReactionsResponse enableReactions()

## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiEnableReactionsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // EnableReactionsData (optional)
  enableReactionsData: {
    enabled: true,
  },
};

apiInstance.enableReactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enableReactionsData** | **EnableReactionsData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**EnableReactionsResponse**

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

# **getEmojiByKey**
> SendBirdEmoji getEmojiByKey()

## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiGetEmojiByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
};

apiInstance.getEmojiByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmoji**

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

# **getEmojiCategoryById**
> SendBirdEmojiCategory getEmojiCategoryById()

## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiGetEmojiCategoryByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
};

apiInstance.getEmojiCategoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmojiCategory**

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

# **listAllEmojisAndEmojiCategories**
> ListAllEmojisAndEmojiCategoriesResponse listAllEmojisAndEmojiCategories()

## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiListAllEmojisAndEmojiCategoriesRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listAllEmojisAndEmojiCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListAllEmojisAndEmojiCategoriesResponse**

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

# **listEmojis**
> ListEmojisResponse listEmojis()

## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiListEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
};

apiInstance.listEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**ListEmojisResponse**

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

# **updateEmojiCategoryUrlById**
> SendBirdEmojiCategory updateEmojiCategoryUrlById()

## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiUpdateEmojiCategoryUrlByIdRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiCategoryId: "emoji_category_id_example",
  // UpdateEmojiCategoryUrlByIdData (optional)
  updateEmojiCategoryUrlByIdData: {
    emojiCategoryId: 1,
    url: "url_example",
  },
};

apiInstance.updateEmojiCategoryUrlById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmojiCategoryUrlByIdData** | **UpdateEmojiCategoryUrlByIdData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiCategoryId** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmojiCategory**

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

# **updateEmojiUrlByKey**
> SendBirdEmoji updateEmojiUrlByKey()

## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiUpdateEmojiUrlByKeyRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string
  emojiKey: "emoji_key_example",
  // UpdateEmojiUrlByKeyData (optional)
  updateEmojiUrlByKeyData: {
    emojiKey: "emojiKey_example",
    url: "url_example",
  },
};

apiInstance.updateEmojiUrlByKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEmojiUrlByKeyData** | **UpdateEmojiUrlByKeyData**|  |
 **apiToken** | [**string**] |  | defaults to undefined
 **emojiKey** | [**string**] |  | defaults to undefined


### Return type

**SendBirdEmoji**

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

# **useDefaultEmojis**
> UseDefaultEmojisResponse useDefaultEmojis()

## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmojisApi(configuration);

let body:.EmojisApiUseDefaultEmojisRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // UseDefaultEmojisData (optional)
  useDefaultEmojisData: {
    useDefaultEmoji: true,
  },
};

apiInstance.useDefaultEmojis(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useDefaultEmojisData** | **UseDefaultEmojisData**|  |
 **apiToken** | [**string**] |  | defaults to undefined


### Return type

**UseDefaultEmojisResponse**

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


