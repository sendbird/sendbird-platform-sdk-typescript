# .GroupChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gcAcceptInvitation**](GroupChannelApi.md#gcAcceptInvitation) | **PUT** /v3/group_channels/{channel_url}/accept | Accept an invitation
[**gcBanUser**](GroupChannelApi.md#gcBanUser) | **POST** /v3/group_channels/{channel_url}/ban | Ban a user
[**gcCancelTheRegistrationOfOperators**](GroupChannelApi.md#gcCancelTheRegistrationOfOperators) | **DELETE** /v3/group_channels/{channel_url}/operators | Cancel the registration of operators
[**gcCheckIfMemberById**](GroupChannelApi.md#gcCheckIfMemberById) | **GET** /v3/group_channels/{channel_url}/members/{user_id} | Check if member
[**gcCreateChannel**](GroupChannelApi.md#gcCreateChannel) | **POST** /v3/group_channels | Create a channel
[**gcDeclineInvitation**](GroupChannelApi.md#gcDeclineInvitation) | **PUT** /v3/group_channels/{channel_url}/decline | Decline an invitation
[**gcDeleteChannelByUrl**](GroupChannelApi.md#gcDeleteChannelByUrl) | **DELETE** /v3/group_channels/{channel_url} | Delete a channel
[**gcFreezeChannel**](GroupChannelApi.md#gcFreezeChannel) | **PUT** /v3/group_channels/{channel_url}/freeze | Freeze a channel
[**gcHideOrArchiveChannel**](GroupChannelApi.md#gcHideOrArchiveChannel) | **PUT** /v3/group_channels/{channel_url}/hide | Hide or archive a channel
[**gcInviteAsMembers**](GroupChannelApi.md#gcInviteAsMembers) | **POST** /v3/group_channels/{channel_url}/invite | Invite as members
[**gcJoinChannel**](GroupChannelApi.md#gcJoinChannel) | **PUT** /v3/group_channels/{channel_url}/join | Join a channel
[**gcLeaveChannel**](GroupChannelApi.md#gcLeaveChannel) | **PUT** /v3/group_channels/{channel_url}/leave | Leave a channel
[**gcListBannedUsers**](GroupChannelApi.md#gcListBannedUsers) | **GET** /v3/group_channels/{channel_url}/ban | List banned users
[**gcListChannels**](GroupChannelApi.md#gcListChannels) | **GET** /v3/group_channels | List channels
[**gcListMembers**](GroupChannelApi.md#gcListMembers) | **GET** /v3/group_channels/{channel_url}/members | List members
[**gcListMutedUsers**](GroupChannelApi.md#gcListMutedUsers) | **GET** /v3/group_channels/{channel_url}/mute | List muted users
[**gcListOperators**](GroupChannelApi.md#gcListOperators) | **GET** /v3/group_channels/{channel_url}/operators | List operators
[**gcMuteUser**](GroupChannelApi.md#gcMuteUser) | **POST** /v3/group_channels/{channel_url}/mute | Mute a user
[**gcRegisterOperators**](GroupChannelApi.md#gcRegisterOperators) | **POST** /v3/group_channels/{channel_url}/operators | Register operators
[**gcResetChatHistory**](GroupChannelApi.md#gcResetChatHistory) | **PUT** /v3/group_channels/{channel_url}/reset_user_history | Reset chat history
[**gcUnbanUserById**](GroupChannelApi.md#gcUnbanUserById) | **DELETE** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Unban a user
[**gcUnhideOrUnarchiveChannel**](GroupChannelApi.md#gcUnhideOrUnarchiveChannel) | **DELETE** /v3/group_channels/{channel_url}/hide | Unhide or unarchive a channel
[**gcUnmuteUserById**](GroupChannelApi.md#gcUnmuteUserById) | **DELETE** /v3/group_channels/{channel_url}/mute/{muted_user_id} | Unmute a user
[**gcUpdateBanById**](GroupChannelApi.md#gcUpdateBanById) | **PUT** /v3/group_channels/{channel_url}/ban/{banned_user_id} | Update a ban
[**gcUpdateChannelByUrl**](GroupChannelApi.md#gcUpdateChannelByUrl) | **PUT** /v3/group_channels/{channel_url} | Update a channel
[**gcViewBanById**](GroupChannelApi.md#gcViewBanById) | **GET** /v3/group_channels/{channel_url}/ban/{banned_user_id} | View a ban
[**gcViewChannelByUrl**](GroupChannelApi.md#gcViewChannelByUrl) | **GET** /v3/group_channels/{channel_url} | View a channel
[**gcViewMuteById**](GroupChannelApi.md#gcViewMuteById) | **GET** /v3/group_channels/{channel_url}/mute/{muted_user_id} | View a mute


# **gcAcceptInvitation**
> SendBirdGroupChannel gcAcceptInvitation()

## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcAcceptInvitationRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcAcceptInvitationData (optional)
  gcAcceptInvitationData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    accessCode: "accessCode_example",
  },
};

apiInstance.gcAcceptInvitation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcAcceptInvitationData** | **GcAcceptInvitationData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcBanUser**
> InlineResponse20033BannedList gcBanUser()

## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcBanUserRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcBanUserData (optional)
  gcBanUserData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    agentId: "agentId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcBanUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcBanUserData** | **GcBanUserData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20033BannedList**

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

# **gcCancelTheRegistrationOfOperators**
> void gcCancelTheRegistrationOfOperators()

## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcCancelTheRegistrationOfOperatorsRequest = {
  // string
  channelUrl: "channel_url_example",
  // Array<string>
  operatorIds: [
    "operator_ids_example",
  ],
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  deleteAll: true,
};

apiInstance.gcCancelTheRegistrationOfOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **operatorIds** | **Array&lt;string&gt;** |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **deleteAll** | [**boolean**] |  | (optional) defaults to undefined


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

# **gcCheckIfMemberById**
> InlineResponse20037 gcCheckIfMemberById()

## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcCheckIfMemberByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcCheckIfMemberById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20037**

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

# **gcCreateChannel**
> SendBirdGroupChannel gcCreateChannel()

## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcCreateChannelRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcCreateChannelData (optional)
  gcCreateChannelData: {
    userIds: [
      1,
    ],
    users: [
      1,
    ],
    name: "name_example",
    channelUrl: "channelUrl_example",
    coverUrl: "coverUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    customType: "customType_example",
    data: "data_example",
    isDistinct: true,
    isPublic: true,
    isSuper: true,
    isEphemeral: true,
    accessCode: "accessCode_example",
    inviterId: "inviterId_example",
    strict: true,
    invitationStatus: [
      "invitationStatus_example",
    ],
    hiddenStatus: [
      "hiddenStatus_example",
    ],
    operatorIds: [
      1,
    ],
    blockSdkUserChannelJoin: true,
  },
};

apiInstance.gcCreateChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcCreateChannelData** | **GcCreateChannelData**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcDeclineInvitation**
> void gcDeclineInvitation()

## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcDeclineInvitationRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcDeclineInvitationData (optional)
  gcDeclineInvitationData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
  },
};

apiInstance.gcDeclineInvitation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcDeclineInvitationData** | **GcDeclineInvitationData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gcDeleteChannelByUrl**
> void gcDeleteChannelByUrl()

## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcDeleteChannelByUrlRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcDeleteChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **gcFreezeChannel**
> SendBirdGroupChannel gcFreezeChannel()

## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcFreezeChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcFreezeChannelData (optional)
  gcFreezeChannelData: {
    channelUrl: "channelUrl_example",
    freeze: true,
  },
};

apiInstance.gcFreezeChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcFreezeChannelData** | **GcFreezeChannelData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcHideOrArchiveChannel**
> void gcHideOrArchiveChannel()

## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcHideOrArchiveChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcHideOrArchiveChannelData (optional)
  gcHideOrArchiveChannelData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    allowAutoUnhide: true,
    shouldHideAll: true,
    hidePreviousMessages: true,
  },
};

apiInstance.gcHideOrArchiveChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcHideOrArchiveChannelData** | **GcHideOrArchiveChannelData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gcInviteAsMembers**
> SendBirdGroupChannel gcInviteAsMembers()

## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcInviteAsMembersRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcInviteAsMembersData (optional)
  gcInviteAsMembersData: {
    channelUrl: "channelUrl_example",
    userIds: [
      1,
    ],
    users: [
      1,
    ],
    invitationStatus: [
      "invitationStatus_example",
    ],
    hiddenStatus: [
      "hiddenStatus_example",
    ],
  },
};

apiInstance.gcInviteAsMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcInviteAsMembersData** | **GcInviteAsMembersData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcJoinChannel**
> void gcJoinChannel()

## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcJoinChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcJoinChannelData (optional)
  gcJoinChannelData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    accessCode: "accessCode_example",
  },
};

apiInstance.gcJoinChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcJoinChannelData** | **GcJoinChannelData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gcLeaveChannel**
> void gcLeaveChannel()

## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcLeaveChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcLeaveChannelData (optional)
  gcLeaveChannelData: {
    channelUrl: "channelUrl_example",
    userIds: [
      1,
    ],
    shouldLeaveAll: true,
  },
};

apiInstance.gcLeaveChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcLeaveChannelData** | **GcLeaveChannelData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gcListBannedUsers**
> InlineResponse20033 gcListBannedUsers()

## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcListBannedUsersRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.gcListBannedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20033**

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

# **gcListChannels**
> InlineResponse20017 gcListChannels()

## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcListChannelsRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // string (optional)
  distinctMode: "distinct_mode_example",
  // string (optional)
  publicMode: "public_mode_example",
  // string (optional)
  superMode: "super_mode_example",
  // number (optional)
  createdAfter: 1,
  // number (optional)
  createdBefore: 1,
  // boolean (optional)
  showEmpty: true,
  // boolean (optional)
  showMember: true,
  // boolean (optional)
  showDeliveryReceipt: true,
  // boolean (optional)
  showReadReceipt: true,
  // boolean (optional)
  showMetadata: true,
  // boolean (optional)
  showFrozen: true,
  // string (optional)
  order: "order_example",
  // string (optional)
  metadataOrderKey: "metadata_order_key_example",
  // string (optional)
  customTypes: "custom_types_example",
  // string (optional)
  customTypeStartswith: "custom_type_startswith_example",
  // string (optional)
  channelUrls: "channel_urls_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  nameContains: "name_contains_example",
  // string (optional)
  nameStartswith: "name_startswith_example",
  // string (optional)
  membersExactlyIn: "members_exactly_in_example",
  // string (optional)
  membersIncludeIn: "members_include_in_example",
  // string (optional)
  queryType: "query_type_example",
  // string (optional)
  membersNickname: "members_nickname_example",
  // string (optional)
  membersNicknameContains: "members_nickname_contains_example",
  // string (optional)
  metadataKey: "metadata_key_example",
  // string (optional)
  metadataValues: "metadata_values_example",
  // string (optional)
  metadataValueStartswith: "metadata_value_startswith_example",
  // string (optional)
  metacounterKey: "metacounter_key_example",
  // string (optional)
  metacounterValues: "metacounter_values_example",
  // string (optional)
  metacounterValueGt: "metacounter_value_gt_example",
  // string (optional)
  metacounterValueGte: "metacounter_value_gte_example",
  // string (optional)
  metacounterValueLt: "metacounter_value_lt_example",
  // string (optional)
  metacounterValueLte: "metacounter_value_lte_example",
  // boolean (optional)
  includeSortedMetaarrayInLastMessage: true,
  // string (optional)
  customType: "custom_type_example",
  // boolean (optional)
  readReceipt: true,
  // boolean (optional)
  member: true,
  // boolean (optional)
  isDistinct: true,
  // string (optional)
  membersIn: "members_in_example",
  // string (optional)
  userId: "user_id_example",
};

apiInstance.gcListChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **distinctMode** | [**string**] |  | (optional) defaults to undefined
 **publicMode** | [**string**] |  | (optional) defaults to undefined
 **superMode** | [**string**] |  | (optional) defaults to undefined
 **createdAfter** | [**number**] |  | (optional) defaults to undefined
 **createdBefore** | [**number**] |  | (optional) defaults to undefined
 **showEmpty** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showMetadata** | [**boolean**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **metadataOrderKey** | [**string**] |  | (optional) defaults to undefined
 **customTypes** | [**string**] |  | (optional) defaults to undefined
 **customTypeStartswith** | [**string**] |  | (optional) defaults to undefined
 **channelUrls** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **nameContains** | [**string**] |  | (optional) defaults to undefined
 **nameStartswith** | [**string**] |  | (optional) defaults to undefined
 **membersExactlyIn** | [**string**] |  | (optional) defaults to undefined
 **membersIncludeIn** | [**string**] |  | (optional) defaults to undefined
 **queryType** | [**string**] |  | (optional) defaults to undefined
 **membersNickname** | [**string**] |  | (optional) defaults to undefined
 **membersNicknameContains** | [**string**] |  | (optional) defaults to undefined
 **metadataKey** | [**string**] |  | (optional) defaults to undefined
 **metadataValues** | [**string**] |  | (optional) defaults to undefined
 **metadataValueStartswith** | [**string**] |  | (optional) defaults to undefined
 **metacounterKey** | [**string**] |  | (optional) defaults to undefined
 **metacounterValues** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueGt** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueGte** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueLt** | [**string**] |  | (optional) defaults to undefined
 **metacounterValueLte** | [**string**] |  | (optional) defaults to undefined
 **includeSortedMetaarrayInLastMessage** | [**boolean**] |  | (optional) defaults to undefined
 **customType** | [**string**] |  | (optional) defaults to undefined
 **readReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined
 **isDistinct** | [**boolean**] |  | (optional) defaults to undefined
 **membersIn** | [**string**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20017**

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

# **gcListMembers**
> InlineResponse20036 gcListMembers()

## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcListMembersRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
  // boolean (optional)
  showDeliveryReceipt: true,
  // boolean (optional)
  showReadReceipt: true,
  // string (optional)
  order: "order_example",
  // string (optional)
  operatorFilter: "operator_filter_example",
  // string (optional)
  memberStateFilter: "member_state_filter_example",
  // string (optional)
  mutedMemberFilter: "muted_member_filter_example",
  // string (optional)
  nicknameStartswith: "nickname_startswith_example",
};

apiInstance.gcListMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **order** | [**string**] |  | (optional) defaults to undefined
 **operatorFilter** | [**string**] |  | (optional) defaults to undefined
 **memberStateFilter** | [**string**] |  | (optional) defaults to undefined
 **mutedMemberFilter** | [**string**] |  | (optional) defaults to undefined
 **nicknameStartswith** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20036**

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

# **gcListMutedUsers**
> InlineResponse20031 gcListMutedUsers()

## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcListMutedUsersRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.gcListMutedUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20031**

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

# **gcListOperators**
> InlineResponse20034 gcListOperators()

## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcListOperatorsRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // string (optional)
  token: "token_example",
  // number (optional)
  limit: 1,
};

apiInstance.gcListOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20034**

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

# **gcMuteUser**
> SendBirdGroupChannel gcMuteUser()

## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcMuteUserRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcMuteUserData (optional)
  gcMuteUserData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcMuteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcMuteUserData** | **GcMuteUserData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcRegisterOperators**
> InlineResponse20038 gcRegisterOperators()

## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcRegisterOperatorsRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcRegisterOperatorsData (optional)
  gcRegisterOperatorsData: {
    channelUrl: "channelUrl_example",
    operatorIds: [
      1,
    ],
  },
};

apiInstance.gcRegisterOperators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcRegisterOperatorsData** | **GcRegisterOperatorsData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20038**

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

# **gcResetChatHistory**
> void gcResetChatHistory()

## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcResetChatHistoryRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcResetChatHistoryData (optional)
  gcResetChatHistoryData: {
    channelUrl: "channelUrl_example",
    userId: "userId_example",
    resetAll: true,
  },
};

apiInstance.gcResetChatHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcResetChatHistoryData** | **GcResetChatHistoryData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gcUnbanUserById**
> void gcUnbanUserById()

## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcUnbanUserByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcUnbanUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **gcUnhideOrUnarchiveChannel**
> void gcUnhideOrUnarchiveChannel()

## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcUnhideOrUnarchiveChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  userId: "user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  shouldUnhideAll: true,
};

apiInstance.gcUnhideOrUnarchiveChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **shouldUnhideAll** | [**boolean**] |  | (optional) defaults to undefined


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

# **gcUnmuteUserById**
> void gcUnmuteUserById()

## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcUnmuteUserByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcUnmuteUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **gcUpdateBanById**
> SendBirdUser gcUpdateBanById()

## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcUpdateBanByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcUpdateBanByIdData (optional)
  gcUpdateBanByIdData: {
    channelUrl: "channelUrl_example",
    bannedUserId: "bannedUserId_example",
    seconds: 1,
    description: "description_example",
  },
};

apiInstance.gcUpdateBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcUpdateBanByIdData** | **GcUpdateBanByIdData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdUser**

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

# **gcUpdateChannelByUrl**
> SendBirdGroupChannel gcUpdateChannelByUrl()

## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcUpdateChannelByUrlRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // GcUpdateChannelByUrlData (optional)
  gcUpdateChannelByUrlData: {
    channelUrl: "channelUrl_example",
    name: "name_example",
    coverUrl: "coverUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    customType: "customType_example",
    data: "data_example",
    isDistinct: true,
    isPublic: true,
    accessCode: "accessCode_example",
    operatorIds: [
      1,
    ],
  },
};

apiInstance.gcUpdateChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gcUpdateChannelByUrlData** | **GcUpdateChannelByUrlData**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcViewBanById**
> SendBirdUser gcViewBanById()

## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcViewBanByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  bannedUserId: "banned_user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcViewBanById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **bannedUserId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendBirdUser**

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

# **gcViewChannelByUrl**
> SendBirdGroupChannel gcViewChannelByUrl()

## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcViewChannelByUrlRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // boolean (optional)
  showDeliveryReceipt: true,
  // boolean (optional)
  showReadReceipt: true,
  // boolean (optional)
  showMember: true,
  // boolean (optional)
  readReceipt: true,
  // boolean (optional)
  member: true,
};

apiInstance.gcViewChannelByUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **readReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **member** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**SendBirdGroupChannel**

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

# **gcViewMuteById**
> InlineResponse20035 gcViewMuteById()

## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChannelApi(configuration);

let body:.GroupChannelApiGcViewMuteByIdRequest = {
  // string
  channelUrl: "channel_url_example",
  // string
  mutedUserId: "muted_user_id_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.gcViewMuteById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **mutedUserId** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse20035**

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


