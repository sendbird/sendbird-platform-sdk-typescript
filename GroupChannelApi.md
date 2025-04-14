# Sendbird.GroupChannelApi

All URIs are relative to *https://api-APP_ID.sendbird.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptAnInvitation**](GroupChannelApi.md#acceptAnInvitation) | **PUT** /v3/group_channels/{channel_url}/accept | Accept an invitation
[**createAGroupChannel**](GroupChannelApi.md#createAGroupChannel) | **POST** /v3/group_channels | Create a group channel
[**deleteAGroupChannel**](GroupChannelApi.md#deleteAGroupChannel) | **DELETE** /v3/group_channels/{channel_url} | Delete a group channel
[**getAGroupChannel**](GroupChannelApi.md#getAGroupChannel) | **GET** /v3/group_channels/{channel_url} | Get a group channel
[**hideAChannel**](GroupChannelApi.md#hideAChannel) | **PUT** /v3/group_channels/{channel_url}/hide | Hide a channel
[**inviteAsMembers**](GroupChannelApi.md#inviteAsMembers) | **POST** /v3/group_channels/{channel_url}/invite | Invite as members
[**joinAChannel**](GroupChannelApi.md#joinAChannel) | **PUT** /v3/group_channels/{channel_url}/join | Join a channel
[**listChannels**](GroupChannelApi.md#listChannels) | **GET** /v3/group_channels | List channels
[**startTypingIndicators**](GroupChannelApi.md#startTypingIndicators) | **POST** /v3/group_channels/{channel_url}/typing | Start typing indicators
[**stopTypingIndicators**](GroupChannelApi.md#stopTypingIndicators) | **DELETE** /v3/group_channels/{channel_url}/typing | Stop typing indicators
[**unhideAChannel**](GroupChannelApi.md#unhideAChannel) | **DELETE** /v3/group_channels/{channel_url}/hide | Unhide a channel
[**updateAGroupChannel**](GroupChannelApi.md#updateAGroupChannel) | **PUT** /v3/group_channels/{channel_url} | Update a group channel


# **acceptAnInvitation**
> SendbirdGroupChannelDetail acceptAnInvitation()

## Accept an invitation  Accepts an invitation from a group channel for a user to join. A single user may join up to 2,000 group channels, and any invitation to a user who is at capacity will be automatically canceled. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: This action is only available when the `auto_accept` property of an application is set to **false**. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) action, or the [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference) action.      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiAcceptAnInvitationRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // AcceptAnInvitationRequest (optional)
  acceptAnInvitationRequest: {
    accessCode: "accessCode_example",
    userId: "userId_example",
  },
};

apiInstance.acceptAnInvitation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptAnInvitationRequest** | **AcceptAnInvitationRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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

# **createAGroupChannel**
> SendbirdGroupChannelDetail createAGroupChannel()

## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiCreateAGroupChannelRequest = {
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // CreateAGroupChannelRequest (optional)
  createAGroupChannelRequest: {
    accessCode: "accessCode_example",
    blockSdkUserChannelJoin: true,
    channelUrl: "channelUrl_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    coverUrl: "coverUrl_example",
    customType: "customType_example",
    data: "data_example",
    hiddenStatus: {},
    invitationStatus: {},
    inviterId: "inviterId_example",
    isDistinct: true,
    isEphemeral: true,
    isPublic: true,
    isSuper: true,
    name: "name_example",
    operatorIds: [
      "operatorIds_example",
    ],
    strict: true,
    userIds: [
      "userIds_example",
    ],
    users: [
      {
        accessToken: "accessToken_example",
        createdAt: 1,
        discoveryKeys: [
          "discoveryKeys_example",
        ],
        hasEverLoggedIn: true,
        isActive: true,
        isHideMeFromFriends: true,
        isOnline: true,
        isShadowBlocked: true,
        lastSeenAt: 1,
        locale: "locale_example",
        metadata: {},
        nickname: "nickname_example",
        preferredLanguages: [
          "preferredLanguages_example",
        ],
        profileUrl: "profileUrl_example",
        requireAuthForProfileImage: true,
        userId: "userId_example",
        state: "",
      },
    ],
  },
};

apiInstance.createAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAGroupChannelRequest** | **CreateAGroupChannelRequest**|  |
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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

# **deleteAGroupChannel**
> any deleteAGroupChannel()

## Delete a group channel  You can delete a group channel or a Supergroup channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiDeleteAGroupChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.deleteAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **getAGroupChannel**
> SendbirdGroupChannelDetail getAGroupChannel()

## Get a group channel  This action retrieves information about a specific [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use the optional query parameters to determine whether to include delivery receipt, read receipt, or member information in the response.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-a-group-channel#1-get-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiGetAGroupChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // boolean (optional)
  showDeliveryReceipt: true,
  // boolean (optional)
  showReadReceipt: true,
  // boolean (optional)
  showMember: true,
  // 'all' | 'activated' | 'deactivated' | Restricts the member list to members who are activated or deactivated in the channel. This parameter is only effective if the parameter show_member is true. Acceptable values are all, activated, and deactivated. (default: all) (optional)
  memberActiveMode: "all",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.getAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] |  | defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **memberActiveMode** | [**&#39;all&#39; | &#39;activated&#39; | &#39;deactivated&#39;**]**Array<&#39;all&#39; &#124; &#39;activated&#39; &#124; &#39;deactivated&#39;>** | Restricts the member list to members who are activated or deactivated in the channel. This parameter is only effective if the parameter show_member is true. Acceptable values are all, activated, and deactivated. (default: all) | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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

# **hideAChannel**
> any hideAChannel()

## Hide a channel  This action allows you to hide a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) from a user's channel list. Hiding a channel gives users the ability to archive channels so that they can focus on channels that need the most attention.  With this API, you can allow users to hide a channel from themselves or from all channel members. You can also determine whether to have the channel remain hidden when a new message is sent to the channel. Note that only group channels can be hidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiHideAChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // HideAChannelRequest (optional)
  hideAChannelRequest: {
    allowAutoUnhide: true,
    hidePreviousMessages: true,
    shouldHideAll: true,
    userId: "userId_example",
  },
};

apiInstance.hideAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hideAChannelRequest** | **HideAChannelRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **inviteAsMembers**
> InviteAsMembersResponse inviteAsMembers()

## Invite as members  Invites one or more users as members to a group channel. Users can join a group channel immediately after receiving an invitation, without having to accept it. To give users an option to accept or decline an invitation, see [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) or [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference). See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: By default, [blocked users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users) are included when sending invitations. If you wish to exclude blocked users, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiInviteAsMembersRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // InviteAsMembersRequest (optional)
  inviteAsMembersRequest: {
    hiddenStatus: {},
    invitationStatus: {},
    inviterId: "inviterId_example",
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.inviteAsMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteAsMembersRequest** | **InviteAsMembersRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**InviteAsMembersResponse**

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

# **joinAChannel**
> SendbirdGroupChannelDetail joinAChannel()

## Join a channel  This API allows a user to join a [public](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-group-channel-types) group channel. Users can only join public group channels where the `is_public` property is set to `true` using this API. A single user can join up to 2,000 group channels, and a user who reaches the capacity can’t join a new channel. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel)

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiJoinAChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // JoinAChannelRequest (optional)
  joinAChannelRequest: {
    userId: "userId_example",
    accessCode: "accessCode_example",
  },
};

apiInstance.joinAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinAChannelRequest** | **JoinAChannelRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Join a channel |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listChannels**
> GroupChatListChannelsResponse listChannels()

## List group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you want to retrieve a list of group channels that a specific user has joined, use the [list group channels by user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user) action under the User section.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels#1-list-group-channels

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiListChannelsRequest = {
  // string
  apiToken: "{{API_TOKEN}}",
  // string | Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0. (optional)
  token: "token_example",
  // number | Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10) (optional)
  limit: 10,
  // 'all' | 'distinct' | 'nondistinct' (optional)
  distinctMode: "all",
  // 'all' | 'private' | 'public' (optional)
  publicMode: "all",
  // 'all' | 'super' | 'nonsuper' (optional)
  superMode: "all",
  // number | Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format. (optional)
  createdAfter: 1234567890123,
  // number | Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format. (optional)
  createdBefore: 1234567890123,
  // boolean (optional)
  showEmpty: false,
  // boolean (optional)
  showMember: false,
  // boolean (optional)
  showDeliveryReceipt: false,
  // boolean (optional)
  showReadReceipt: false,
  // boolean (optional)
  showMetadata: false,
  // boolean (optional)
  showFrozen: false,
  // 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical' (optional)
  order: "chronological",
  // string | Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key. (optional)
  metadataOrderKey: "metadata_order_key_example",
  // string | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. (optional)
  customTypes: "custom_types_example",
  // string | Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended. (optional)
  customTypeStartswith: "custom_type_startswith_example",
  // string | Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended. (optional)
  channelUrls: "channel_urls_example",
  // string | Specifies one or more group channel names. (optional)
  name: "name_example",
  // string | Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. (optional)
  nameContains: "name_contains_example",
  // string | Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. (optional)
  nameStartswith: "name_startswith_example",
  // string | Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. (optional)
  membersExactlyIn: "members_exactly_in_example",
  // string | Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. (optional)
  membersIncludeIn: "members_include_in_example",
  // string | Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND) (optional)
  queryType: "query_type_example",
  // string | Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended. (optional)
  membersNickname: "members_nickname_example",
  // string | Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues. (optional)
  membersNicknameContains: "members_nickname_contains_example",
  // string | Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified. (optional)
  metadataKey: "metadata_key_example",
  // string | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified. (optional)
  metadataValues: "metadata_values_example",
  // string | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified. (optional)
  metadataValueStartswith: "metadata_value_startswith_example",
  // string | Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified. (optional)
  metacounterKey: "metacounter_key_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValues: "metacounter_values_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueGt: "metacounter_value_gt_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueGte: "metacounter_value_gte_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueLt: "metacounter_value_lt_example",
  // string | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. (optional)
  metacounterValueLte: "metacounter_value_lte_example",
  // boolean | Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response. (optional)
  includeSortedMetaarrayInLastMessage: false,
  // string | (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded. (optional)
  customType: "ANNOUNCEMENT",
  // boolean | (Deprecated) Superseded by show_read_receipt. (optional)
  readReceipt: false,
  // boolean | (Deprecated) Superseded by show_member. (optional)
  member: true,
  // boolean | (Deprecated) Superseded by distinct_mode. (optional)
  isDistinct: true,
  // string | (Deprecated) Superseded by members_exactly_in. (optional)
  membersIn: "members_in_example",
  // string | (Deprecated) Restricts the search scope to only retrieve the target user's group channels. It's recommended to use the list group channels by user action instead. (optional)
  userId: "user_id_example",
};

apiInstance.listChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiToken** | [**string**] |  | defaults to undefined
 **token** | [**string**] | Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0. | (optional) defaults to undefined
 **limit** | [**number**] | Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10) | (optional) defaults to undefined
 **distinctMode** | [**&#39;all&#39; | &#39;distinct&#39; | &#39;nondistinct&#39;**]**Array<&#39;all&#39; &#124; &#39;distinct&#39; &#124; &#39;nondistinct&#39;>** |  | (optional) defaults to undefined
 **publicMode** | [**&#39;all&#39; | &#39;private&#39; | &#39;public&#39;**]**Array<&#39;all&#39; &#124; &#39;private&#39; &#124; &#39;public&#39;>** |  | (optional) defaults to undefined
 **superMode** | [**&#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;**]**Array<&#39;all&#39; &#124; &#39;super&#39; &#124; &#39;nonsuper&#39;>** |  | (optional) defaults to undefined
 **createdAfter** | [**number**] | Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format. | (optional) defaults to undefined
 **createdBefore** | [**number**] | Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format. | (optional) defaults to undefined
 **showEmpty** | [**boolean**] |  | (optional) defaults to undefined
 **showMember** | [**boolean**] |  | (optional) defaults to undefined
 **showDeliveryReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showReadReceipt** | [**boolean**] |  | (optional) defaults to undefined
 **showMetadata** | [**boolean**] |  | (optional) defaults to undefined
 **showFrozen** | [**boolean**] |  | (optional) defaults to undefined
 **order** | [**&#39;chronological&#39; | &#39;latest_last_message&#39; | &#39;channel_name_alphabetical&#39; | &#39;metadata_value_alphabetical&#39;**]**Array<&#39;chronological&#39; &#124; &#39;latest_last_message&#39; &#124; &#39;channel_name_alphabetical&#39; &#124; &#39;metadata_value_alphabetical&#39;>** |  | (optional) defaults to undefined
 **metadataOrderKey** | [**string**] | Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key. | (optional) defaults to undefined
 **customTypes** | [**string**] | Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type. | (optional) defaults to undefined
 **customTypeStartswith** | [**string**] | Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended. | (optional) defaults to undefined
 **channelUrls** | [**string**] | Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended. | (optional) defaults to undefined
 **name** | [**string**] | Specifies one or more group channel names. | (optional) defaults to undefined
 **nameContains** | [**string**] | Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | (optional) defaults to undefined
 **nameStartswith** | [**string**] | Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended. | (optional) defaults to undefined
 **membersExactlyIn** | [**string**] | Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | (optional) defaults to undefined
 **membersIncludeIn** | [**string**] | Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended. | (optional) defaults to undefined
 **queryType** | [**string**] | Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND) | (optional) defaults to undefined
 **membersNickname** | [**string**] | Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended. | (optional) defaults to undefined
 **membersNicknameContains** | [**string**] | Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues. | (optional) defaults to undefined
 **metadataKey** | [**string**] | Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified. | (optional) defaults to undefined
 **metadataValues** | [**string**] | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified. | (optional) defaults to undefined
 **metadataValueStartswith** | [**string**] | Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified. | (optional) defaults to undefined
 **metacounterKey** | [**string**] | Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified. | (optional) defaults to undefined
 **metacounterValues** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueGt** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueGte** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueLt** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **metacounterValueLte** | [**string**] | Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified. | (optional) defaults to undefined
 **includeSortedMetaarrayInLastMessage** | [**boolean**] | Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response. | (optional) defaults to undefined
 **customType** | [**string**] | (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded. | (optional) defaults to undefined
 **readReceipt** | [**boolean**] | (Deprecated) Superseded by show_read_receipt. | (optional) defaults to undefined
 **member** | [**boolean**] | (Deprecated) Superseded by show_member. | (optional) defaults to undefined
 **isDistinct** | [**boolean**] | (Deprecated) Superseded by distinct_mode. | (optional) defaults to undefined
 **membersIn** | [**string**] | (Deprecated) Superseded by members_exactly_in. | (optional) defaults to undefined
 **userId** | [**string**] | (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead. | (optional) defaults to undefined


### Return type

**GroupChatListChannelsResponse**

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

# **startTypingIndicators**
> any startTypingIndicators()

## Start typing indicators  You can start showing a typing indicator using this API. Seeing whether other users are typing can help a more interactive conversation environment by showing real-time engagement of other users.  If you're looking for an easy way to show typing indicators on your app, check out Sendbird UIKit for a ready-to-use UI feature that can be customized to fit your needs.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/start-typing-indicators#1-start-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiStartTypingIndicatorsRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // StartTypingIndicatorsRequest (optional)
  startTypingIndicatorsRequest: {
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.startTypingIndicators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTypingIndicatorsRequest** | **StartTypingIndicatorsRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **stopTypingIndicators**
> any stopTypingIndicators()

## Stop typing indicators  You can stop showing a typing indicator using this API. To signal that a user is no longer typing, you can let the indicator disappear when the user sends a message or completely deletes the message text.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/stop-typing-indicators#1-stop-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiStopTypingIndicatorsRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // StopTypingIndicatorsRequest (optional)
  stopTypingIndicatorsRequest: {
    userIds: [
      "userIds_example",
    ],
  },
};

apiInstance.stopTypingIndicators(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopTypingIndicatorsRequest** | **StopTypingIndicatorsRequest**|  |
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **unhideAChannel**
> any unhideAChannel()

## Unhide a channel  This action lets a hidden [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) reappear on the channel list of a specific user or every member in the group channel. Hiding or unhiding a channel lets users organize their channel list based on those that require the most attention. Note that only group channels can be hidden or unhidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to unhide or unarchive.

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiUnhideAChannelRequest = {
  // string | (Required) 
  channelUrl: "channel_url_example",
  // string | (Required)  (optional)
  userId: "user_id_example",
  // boolean (optional)
  shouldUnhideAll: true,
  // string (optional)
  apiToken: "{{API_TOKEN}}",
};

apiInstance.unhideAChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelUrl** | [**string**] | (Required)  | defaults to undefined
 **userId** | [**string**] | (Required)  | (optional) defaults to undefined
 **shouldUnhideAll** | [**boolean**] |  | (optional) defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


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

# **updateAGroupChannel**
> SendbirdGroupChannelDetail updateAGroupChannel()

## Update a group channel  You can update information about a group channel or a Supergroup channel using this API. You can't make any changes to the members of a channel with this API. To change members, see [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) instead. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-a-group-channel#1-update-a-group-channel

### Example


```typescript
import { Sendbird } from 'sendbird-platform-sdk';
import * as fs from 'fs';

const configuration = Sendbird.createConfiguration();
const apiInstance = new Sendbird.GroupChannelApi(configuration);

let body:Sendbird.GroupChannelApiUpdateAGroupChannelRequest = {
  // string
  channelUrl: "channel_url_example",
  // string (optional)
  apiToken: "{{API_TOKEN}}",
  // UpdateAGroupChannelRequest (optional)
  updateAGroupChannelRequest: {
    accessCode: "accessCode_example",
    coverFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    coverUrl: "coverUrl_example",
    customType: "customType_example",
    data: "data_example",
    isDistinct: true,
    isPublic: true,
    isSuper: true,
    name: "name_example",
    operatorIds: [
      "operatorIds_example",
    ],
  },
};

apiInstance.updateAGroupChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAGroupChannelRequest** | **UpdateAGroupChannelRequest**|  |
 **channelUrl** | [**string**] |  | defaults to undefined
 **apiToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**SendbirdGroupChannelDetail**

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


