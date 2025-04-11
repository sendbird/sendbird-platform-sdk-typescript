import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AcceptAnInvitationRequest } from '../models/AcceptAnInvitationRequest';
import { CreateAGroupChannelRequest } from '../models/CreateAGroupChannelRequest';
import { CreateAGroupChannelResponse } from '../models/CreateAGroupChannelResponse';
import { CreateAGroupChannelResponseChannel } from '../models/CreateAGroupChannelResponseChannel';
import { GroupChatListChannelsResponse } from '../models/GroupChatListChannelsResponse';
import { HideAChannelRequest } from '../models/HideAChannelRequest';
import { InviteAsMembersRequest } from '../models/InviteAsMembersRequest';
import { InviteAsMembersResponse } from '../models/InviteAsMembersResponse';
import { InviteAsMembersResponseAllOf } from '../models/InviteAsMembersResponseAllOf';
import { JoinAChannelRequest } from '../models/JoinAChannelRequest';
import { SendbirdBasicUserInfo } from '../models/SendbirdBasicUserInfo';
import { SendbirdDisappearingMessage } from '../models/SendbirdDisappearingMessage';
import { SendbirdFile } from '../models/SendbirdFile';
import { SendbirdGroupChannel } from '../models/SendbirdGroupChannel';
import { SendbirdGroupChannelDetail } from '../models/SendbirdGroupChannelDetail';
import { SendbirdGroupChannelDetailChannel } from '../models/SendbirdGroupChannelDetailChannel';
import { SendbirdMember } from '../models/SendbirdMember';
import { SendbirdMessageResponse } from '../models/SendbirdMessageResponse';
import { SendbirdMessageResponseMentionedUsersInner } from '../models/SendbirdMessageResponseMentionedUsersInner';
import { SendbirdMessageResponseMentionedUsersInnerMetadata } from '../models/SendbirdMessageResponseMentionedUsersInnerMetadata';
import { SendbirdMessageResponseUser } from '../models/SendbirdMessageResponseUser';
import { SendbirdParentMessageInfo } from '../models/SendbirdParentMessageInfo';
import { SendbirdSmsFallback } from '../models/SendbirdSmsFallback';
import { SendbirdThumbnail } from '../models/SendbirdThumbnail';
import { SendbirdUser } from '../models/SendbirdUser';
import { StartTypingIndicatorsRequest } from '../models/StartTypingIndicatorsRequest';
import { StopTypingIndicatorsRequest } from '../models/StopTypingIndicatorsRequest';
import { UpdateAGroupChannelRequest } from '../models/UpdateAGroupChannelRequest';

import { ObservableGroupChannelApi } from "./ObservableAPI";
import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor} from "../apis/GroupChannelApi";

export interface GroupChannelApiAcceptAnInvitationRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiacceptAnInvitation
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApiacceptAnInvitation
     */
    apiToken?: string
    /**
     * 
     * @type AcceptAnInvitationRequest
     * @memberof GroupChannelApiacceptAnInvitation
     */
    acceptAnInvitationRequest?: AcceptAnInvitationRequest
}

export interface GroupChannelApiCreateAGroupChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApicreateAGroupChannel
     */
    apiToken?: string
    /**
     * 
     * @type CreateAGroupChannelRequest
     * @memberof GroupChannelApicreateAGroupChannel
     */
    createAGroupChannelRequest?: CreateAGroupChannelRequest
}

export interface GroupChannelApiDeleteAGroupChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApideleteAGroupChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApideleteAGroupChannel
     */
    apiToken?: string
}

export interface GroupChannelApiGetAGroupChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigetAGroupChannel
     */
    channelUrl: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigetAGroupChannel
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigetAGroupChannel
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigetAGroupChannel
     */
    showMember?: boolean
    /**
     * Restricts the member list to members who are activated or deactivated in the channel. This parameter is only effective if the parameter show_member is true. Acceptable values are all, activated, and deactivated. (default: all)
     * @type &#39;all&#39; | &#39;activated&#39; | &#39;deactivated&#39;
     * @memberof GroupChannelApigetAGroupChannel
     */
    memberActiveMode?: 'all' | 'activated' | 'deactivated'
    /**
     * 
     * @type string
     * @memberof GroupChannelApigetAGroupChannel
     */
    apiToken?: string
}

export interface GroupChannelApiHideAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApihideAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApihideAChannel
     */
    apiToken?: string
    /**
     * 
     * @type HideAChannelRequest
     * @memberof GroupChannelApihideAChannel
     */
    hideAChannelRequest?: HideAChannelRequest
}

export interface GroupChannelApiInviteAsMembersRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiinviteAsMembers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApiinviteAsMembers
     */
    apiToken?: string
    /**
     * 
     * @type InviteAsMembersRequest
     * @memberof GroupChannelApiinviteAsMembers
     */
    inviteAsMembersRequest?: InviteAsMembersRequest
}

export interface GroupChannelApiJoinAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApijoinAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApijoinAChannel
     */
    apiToken?: string
    /**
     * 
     * @type JoinAChannelRequest
     * @memberof GroupChannelApijoinAChannel
     */
    joinAChannelRequest?: JoinAChannelRequest
}

export interface GroupChannelApiListChannelsRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    apiToken: string
    /**
     * Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    token?: string
    /**
     * Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @type number
     * @memberof GroupChannelApilistChannels
     */
    limit?: number
    /**
     * 
     * @type &#39;all&#39; | &#39;distinct&#39; | &#39;nondistinct&#39;
     * @memberof GroupChannelApilistChannels
     */
    distinctMode?: 'all' | 'distinct' | 'nondistinct'
    /**
     * 
     * @type &#39;all&#39; | &#39;private&#39; | &#39;public&#39;
     * @memberof GroupChannelApilistChannels
     */
    publicMode?: 'all' | 'private' | 'public'
    /**
     * 
     * @type &#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;
     * @memberof GroupChannelApilistChannels
     */
    superMode?: 'all' | 'super' | 'nonsuper'
    /**
     * Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @type number
     * @memberof GroupChannelApilistChannels
     */
    createdAfter?: number
    /**
     * Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @type number
     * @memberof GroupChannelApilistChannels
     */
    createdBefore?: number
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showEmpty?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showMember?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showMetadata?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    showFrozen?: boolean
    /**
     * 
     * @type &#39;chronological&#39; | &#39;latest_last_message&#39; | &#39;channel_name_alphabetical&#39; | &#39;metadata_value_alphabetical&#39;
     * @memberof GroupChannelApilistChannels
     */
    order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical'
    /**
     * Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metadataOrderKey?: string
    /**
     * Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    customTypes?: string
    /**
     * Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    customTypeStartswith?: string
    /**
     * Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    channelUrls?: string
    /**
     * Specifies one or more group channel names.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    name?: string
    /**
     * Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    nameContains?: string
    /**
     * Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    nameStartswith?: string
    /**
     * Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    membersExactlyIn?: string
    /**
     * Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    membersIncludeIn?: string
    /**
     * Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    queryType?: string
    /**
     * Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    membersNickname?: string
    /**
     * Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    membersNicknameContains?: string
    /**
     * Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metadataKey?: string
    /**
     * Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metadataValues?: string
    /**
     * Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metadataValueStartswith?: string
    /**
     * Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterKey?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterValues?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterValueGt?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterValueGte?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterValueLt?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    metacounterValueLte?: string
    /**
     * Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    includeSortedMetaarrayInLastMessage?: boolean
    /**
     * (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    customType?: string
    /**
     * (Deprecated) Superseded by show_read_receipt.
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    readReceipt?: boolean
    /**
     * (Deprecated) Superseded by show_member.
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    member?: boolean
    /**
     * (Deprecated) Superseded by distinct_mode.
     * @type boolean
     * @memberof GroupChannelApilistChannels
     */
    isDistinct?: boolean
    /**
     * (Deprecated) Superseded by members_exactly_in.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    membersIn?: string
    /**
     * (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead.
     * @type string
     * @memberof GroupChannelApilistChannels
     */
    userId?: string
}

export interface GroupChannelApiStartTypingIndicatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApistartTypingIndicators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApistartTypingIndicators
     */
    apiToken?: string
    /**
     * 
     * @type StartTypingIndicatorsRequest
     * @memberof GroupChannelApistartTypingIndicators
     */
    startTypingIndicatorsRequest?: StartTypingIndicatorsRequest
}

export interface GroupChannelApiStopTypingIndicatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApistopTypingIndicators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApistopTypingIndicators
     */
    apiToken?: string
    /**
     * 
     * @type StopTypingIndicatorsRequest
     * @memberof GroupChannelApistopTypingIndicators
     */
    stopTypingIndicatorsRequest?: StopTypingIndicatorsRequest
}

export interface GroupChannelApiUnhideAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiunhideAChannel
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiunhideAChannel
     */
    userId?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApiunhideAChannel
     */
    shouldUnhideAll?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApiunhideAChannel
     */
    apiToken?: string
}

export interface GroupChannelApiUpdateAGroupChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApiupdateAGroupChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApiupdateAGroupChannel
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAGroupChannelRequest
     * @memberof GroupChannelApiupdateAGroupChannel
     */
    updateAGroupChannelRequest?: UpdateAGroupChannelRequest
}

export class ObjectGroupChannelApi {
    private api: ObservableGroupChannelApi

    public constructor(configuration: Configuration, requestFactory?: GroupChannelApiRequestFactory, responseProcessor?: GroupChannelApiResponseProcessor) {
        this.api = new ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Accept an invitation  Accepts an invitation from a group channel for a user to join. A single user may join up to 2,000 group channels, and any invitation to a user who is at capacity will be automatically canceled. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: This action is only available when the `auto_accept` property of an application is set to **false**. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) action, or the [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference) action.      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation)
     * Accept an invitation
     * @param param the request object
     */
    public acceptAnInvitation(param: GroupChannelApiAcceptAnInvitationRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.acceptAnInvitation(param.channelUrl, param.apiToken, param.acceptAnInvitationRequest,  options).toPromise();
    }

    /**
     * ## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel
     * Create a group channel
     * @param param the request object
     */
    public createAGroupChannel(param: GroupChannelApiCreateAGroupChannelRequest = {}, options?: Configuration): Promise<CreateAGroupChannelResponse> {
        return this.api.createAGroupChannel(param.apiToken, param.createAGroupChannelRequest,  options).toPromise();
    }

    /**
     * ## Delete a group channel  You can delete a group channel or a Supergroup channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel)
     * Delete a group channel
     * @param param the request object
     */
    public deleteAGroupChannel(param: GroupChannelApiDeleteAGroupChannelRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAGroupChannel(param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get a group channel  This action retrieves information about a specific [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use the optional query parameters to determine whether to include delivery receipt, read receipt, or member information in the response.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-a-group-channel#1-get-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve.
     * Get a group channel
     * @param param the request object
     */
    public getAGroupChannel(param: GroupChannelApiGetAGroupChannelRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.getAGroupChannel(param.channelUrl, param.showDeliveryReceipt, param.showReadReceipt, param.showMember, param.memberActiveMode, param.apiToken,  options).toPromise();
    }

    /**
     * ## Hide a channel  This action allows you to hide a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) from a user's channel list. Hiding a channel gives users the ability to archive channels so that they can focus on channels that need the most attention.  With this API, you can allow users to hide a channel from themselves or from all channel members. You can also determine whether to have the channel remain hidden when a new message is sent to the channel. Note that only group channels can be hidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel)
     * Hide a channel
     * @param param the request object
     */
    public hideAChannel(param: GroupChannelApiHideAChannelRequest, options?: Configuration): Promise<any> {
        return this.api.hideAChannel(param.channelUrl, param.apiToken, param.hideAChannelRequest,  options).toPromise();
    }

    /**
     * ## Invite as members  Invites one or more users as members to a group channel. Users can join a group channel immediately after receiving an invitation, without having to accept it. To give users an option to accept or decline an invitation, see [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) or [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference). See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: By default, [blocked users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users) are included when sending invitations. If you wish to exclude blocked users, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members)
     * Invite as members
     * @param param the request object
     */
    public inviteAsMembers(param: GroupChannelApiInviteAsMembersRequest, options?: Configuration): Promise<InviteAsMembersResponse> {
        return this.api.inviteAsMembers(param.channelUrl, param.apiToken, param.inviteAsMembersRequest,  options).toPromise();
    }

    /**
     * ## Join a channel  This API allows a user to join a [public](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-group-channel-types) group channel. Users can only join public group channels where the `is_public` property is set to `true` using this API. A single user can join up to 2,000 group channels, and a user who reaches the capacity can’t join a new channel. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel)
     * Join a channel
     * @param param the request object
     */
    public joinAChannel(param: GroupChannelApiJoinAChannelRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.joinAChannel(param.channelUrl, param.apiToken, param.joinAChannelRequest,  options).toPromise();
    }

    /**
     * ## List group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you want to retrieve a list of group channels that a specific user has joined, use the [list group channels by user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user) action under the User section.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels#1-list-group-channels
     * List channels
     * @param param the request object
     */
    public listChannels(param: GroupChannelApiListChannelsRequest, options?: Configuration): Promise<GroupChatListChannelsResponse> {
        return this.api.listChannels(param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage, param.customType, param.readReceipt, param.member, param.isDistinct, param.membersIn, param.userId,  options).toPromise();
    }

    /**
     * ## Start typing indicators  You can start showing a typing indicator using this API. Seeing whether other users are typing can help a more interactive conversation environment by showing real-time engagement of other users.  If you're looking for an easy way to show typing indicators on your app, check out Sendbird UIKit for a ready-to-use UI feature that can be customized to fit your needs.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/start-typing-indicators#1-start-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Start typing indicators
     * @param param the request object
     */
    public startTypingIndicators(param: GroupChannelApiStartTypingIndicatorsRequest, options?: Configuration): Promise<any> {
        return this.api.startTypingIndicators(param.channelUrl, param.apiToken, param.startTypingIndicatorsRequest,  options).toPromise();
    }

    /**
     * ## Stop typing indicators  You can stop showing a typing indicator using this API. To signal that a user is no longer typing, you can let the indicator disappear when the user sends a message or completely deletes the message text.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/stop-typing-indicators#1-stop-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Stop typing indicators
     * @param param the request object
     */
    public stopTypingIndicators(param: GroupChannelApiStopTypingIndicatorsRequest, options?: Configuration): Promise<any> {
        return this.api.stopTypingIndicators(param.channelUrl, param.apiToken, param.stopTypingIndicatorsRequest,  options).toPromise();
    }

    /**
     * ## Unhide a channel  This action lets a hidden [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) reappear on the channel list of a specific user or every member in the group channel. Hiding or unhiding a channel lets users organize their channel list based on those that require the most attention. Note that only group channels can be hidden or unhidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide a channel
     * @param param the request object
     */
    public unhideAChannel(param: GroupChannelApiUnhideAChannelRequest, options?: Configuration): Promise<any> {
        return this.api.unhideAChannel(param.channelUrl, param.userId, param.shouldUnhideAll, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a group channel  You can update information about a group channel or a Supergroup channel using this API. You can't make any changes to the members of a channel with this API. To change members, see [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) instead. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-a-group-channel#1-update-a-group-channel
     * Update a group channel
     * @param param the request object
     */
    public updateAGroupChannel(param: GroupChannelApiUpdateAGroupChannelRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.updateAGroupChannel(param.channelUrl, param.apiToken, param.updateAGroupChannelRequest,  options).toPromise();
    }

}
