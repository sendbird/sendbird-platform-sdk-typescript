# Sendbird.AnnouncementApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduleAnAnnouncement**](AnnouncementApi.md#scheduleAnAnnouncement) | **POST** /v3/announcements | Schedule an announcement


# **scheduleAnAnnouncement**
> ScheduleAnAnnouncementResponse scheduleAnAnnouncement()

## Schedule an announcement  Creates an announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  [https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement](https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.AnnouncementApi(configuration);

let body:Sendbird.AnnouncementApiScheduleAnAnnouncementRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // ScheduleAnAnnouncementRequest (optional)
  scheduleAnAnnouncementRequest: {
    announcementGroup: "announcementGroup_example",
    assignSenderAsChannelInviter: true,
    ceaseAt: "ceaseAt_example",
    createChannel: true,
    createChannelOptions: {
      coverUrl: "coverUrl_example",
      customType: "customType_example",
      data: "data_example",
      distinct: true,
      name: "name_example",
    },
    enablePush: true,
    endAt: 1,
    keepChannelHiddenForSender: true,
    markAsRead: true,
    message: {
      content: "content_example",
      customType: "customType_example",
      data: "data_example",
      type: "type_example",
      userId: "userId_example",
    },
    resumeAt: "resumeAt_example",
    scheduledAt: 1,
    sendToFrozenChannels: true,
    targetAt: "targetAt_example",
    targetChannelType: "targetChannelType_example",
    targetCustomType: "targetCustomType_example",
    targetList: [
      "targetList_example",
    ],
    uniqueId: "uniqueId_example",
  },
};

apiInstance.scheduleAnAnnouncement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheduleAnAnnouncementRequest** | **ScheduleAnAnnouncementRequest**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ScheduleAnAnnouncementResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


