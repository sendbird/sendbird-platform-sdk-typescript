import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AcceptAnInvitationRequest } from '../models/AcceptAnInvitationRequest';
import { AddARegistrationOrDeviceTokenRequest } from '../models/AddARegistrationOrDeviceTokenRequest';
import { AddARegistrationOrDeviceTokenResponse } from '../models/AddARegistrationOrDeviceTokenResponse';
import { AddExtraDataToAMessageRequest } from '../models/AddExtraDataToAMessageRequest';
import { AddExtraDataToAMessageResponse } from '../models/AddExtraDataToAMessageResponse';
import { BlockAUserRequest } from '../models/BlockAUserRequest';
import { BlockAUserResponse } from '../models/BlockAUserResponse';
import { CheckIfMemberResponse } from '../models/CheckIfMemberResponse';
import { ChooseAPushNotificationContentTemplateRequest } from '../models/ChooseAPushNotificationContentTemplateRequest';
import { ChooseAPushNotificationContentTemplateResponse } from '../models/ChooseAPushNotificationContentTemplateResponse';
import { CreateABotRequest } from '../models/CreateABotRequest';
import { CreateABotResponse } from '../models/CreateABotResponse';
import { CreateABotResponseBot } from '../models/CreateABotResponseBot';
import { CreateABotResponseBotStyle } from '../models/CreateABotResponseBotStyle';
import { CreateAChannelMetadataRequest } from '../models/CreateAChannelMetadataRequest';
import { CreateAChannelMetadataResponse } from '../models/CreateAChannelMetadataResponse';
import { CreateAGroupChannelRequest } from '../models/CreateAGroupChannelRequest';
import { CreateAUserRequest } from '../models/CreateAUserRequest';
import { CreateAnOpenChannelRequest } from '../models/CreateAnOpenChannelRequest';
import { CreateUserTokenRequest } from '../models/CreateUserTokenRequest';
import { CreateUserTokenResponse } from '../models/CreateUserTokenResponse';
import { FreezeAGroupChannelRequest } from '../models/FreezeAGroupChannelRequest';
import { FreezeAnOpenChannelRequest } from '../models/FreezeAnOpenChannelRequest';
import { GetAGroupChannelResponse } from '../models/GetAGroupChannelResponse';
import { GetAGroupChannelResponseAllOf } from '../models/GetAGroupChannelResponseAllOf';
import { GetChannelInvitationPreferenceResponse } from '../models/GetChannelInvitationPreferenceResponse';
import { GetTotalNumberOfMessagesInAChannelResponse } from '../models/GetTotalNumberOfMessagesInAChannelResponse';
import { GroupChannelListMembersResponse } from '../models/GroupChannelListMembersResponse';
import { GroupChatListChannelsResponse } from '../models/GroupChatListChannelsResponse';
import { HideAChannelRequest } from '../models/HideAChannelRequest';
import { InviteAsMembersRequest } from '../models/InviteAsMembersRequest';
import { InviteAsMembersResponse } from '../models/InviteAsMembersResponse';
import { InviteAsMembersResponseAllOf } from '../models/InviteAsMembersResponseAllOf';
import { JoinAChannelRequest } from '../models/JoinAChannelRequest';
import { JoinChannelsRequest } from '../models/JoinChannelsRequest';
import { LeaveAChannelRequest } from '../models/LeaveAChannelRequest';
import { LeaveMyGroupChannelsRequest } from '../models/LeaveMyGroupChannelsRequest';
import { ListBlockedUsersResponse } from '../models/ListBlockedUsersResponse';
import { ListBotsResponse } from '../models/ListBotsResponse';
import { ListBotsResponseBotsInner } from '../models/ListBotsResponseBotsInner';
import { ListBotsResponseBotsInnerAi } from '../models/ListBotsResponseBotsInnerAi';
import { ListBotsResponseBotsInnerBot } from '../models/ListBotsResponseBotsInnerBot';
import { ListBotsResponseBotsInnerBotStyle } from '../models/ListBotsResponseBotsInnerBotStyle';
import { ListBotsResponseBotsInnerBotStyleColor } from '../models/ListBotsResponseBotsInnerBotStyleColor';
import { ListBotsResponseBotsInnerFirstMessagesInner } from '../models/ListBotsResponseBotsInnerFirstMessagesInner';
import { ListBotsResponseBotsInnerFirstMessagesInnerData } from '../models/ListBotsResponseBotsInnerFirstMessagesInnerData';
import { ListBotsResponseBotsInnerSafeguard } from '../models/ListBotsResponseBotsInnerSafeguard';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListMyGroupChannelsResponse } from '../models/ListMyGroupChannelsResponse';
import { ListOpenChannelsResponse } from '../models/ListOpenChannelsResponse';
import { ListOperatorsResponse } from '../models/ListOperatorsResponse';
import { ListRegistrationOrDeviceTokensResponse } from '../models/ListRegistrationOrDeviceTokensResponse';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { MarkAllMessagesAsReadRequest } from '../models/MarkAllMessagesAsReadRequest';
import { MarkChannelMessagesAsReadRequest } from '../models/MarkChannelMessagesAsReadRequest';
import { MigrateMessagesAdminMessageRequest } from '../models/MigrateMessagesAdminMessageRequest';
import { MigrateMessagesFileMessageRequest } from '../models/MigrateMessagesFileMessageRequest';
import { MigrateMessagesFileMessageRequestThumbnailsInner } from '../models/MigrateMessagesFileMessageRequestThumbnailsInner';
import { MigrateMessagesRequest } from '../models/MigrateMessagesRequest';
import { MigrateMessagesRequestMessagesInner } from '../models/MigrateMessagesRequestMessagesInner';
import { MigrateMessagesTextMessageRequest } from '../models/MigrateMessagesTextMessageRequest';
import { RegisterOperatorsToAGroupChannelRequest } from '../models/RegisterOperatorsToAGroupChannelRequest';
import { RemoveARegistrationOrDeviceTokenResponse } from '../models/RemoveARegistrationOrDeviceTokenResponse';
import { RemoveAllRegistrationOrDeviceTokenResponse } from '../models/RemoveAllRegistrationOrDeviceTokenResponse';
import { ResetChatHistoryRequest } from '../models/ResetChatHistoryRequest';
import { ResetChatHistoryResponse } from '../models/ResetChatHistoryResponse';
import { ScheduleAnAnnouncementRequest } from '../models/ScheduleAnAnnouncementRequest';
import { ScheduleAnAnnouncementRequestCreateChannelOptions } from '../models/ScheduleAnAnnouncementRequestCreateChannelOptions';
import { ScheduleAnAnnouncementRequestMessage } from '../models/ScheduleAnAnnouncementRequestMessage';
import { ScheduleAnAnnouncementResponse } from '../models/ScheduleAnAnnouncementResponse';
import { ScheduleAnAnnouncementResponseMessage } from '../models/ScheduleAnAnnouncementResponseMessage';
import { SendABotMessageRequest } from '../models/SendABotMessageRequest';
import { SendAMessageRequest } from '../models/SendAMessageRequest';
import { SendAdminMessageRequestBody } from '../models/SendAdminMessageRequestBody';
import { SendFileMessageRequestBody } from '../models/SendFileMessageRequestBody';
import { SendTextMessageRequestBody } from '../models/SendTextMessageRequestBody';
import { SendTextMessageRequestBodyPushMessageTemplate } from '../models/SendTextMessageRequestBodyPushMessageTemplate';
import { SendTextMessageRequestBodyPushMessageTemplateOneOf } from '../models/SendTextMessageRequestBodyPushMessageTemplateOneOf';
import { SendbirdBasicUserInfo } from '../models/SendbirdBasicUserInfo';
import { SendbirdDisappearingMessage } from '../models/SendbirdDisappearingMessage';
import { SendbirdExtendedMessagePayload } from '../models/SendbirdExtendedMessagePayload';
import { SendbirdFile } from '../models/SendbirdFile';
import { SendbirdGroupChannel } from '../models/SendbirdGroupChannel';
import { SendbirdGroupChannelDetail } from '../models/SendbirdGroupChannelDetail';
import { SendbirdGroupChannelDetailChannel } from '../models/SendbirdGroupChannelDetailChannel';
import { SendbirdMember } from '../models/SendbirdMember';
import { SendbirdMessageResponse } from '../models/SendbirdMessageResponse';
import { SendbirdMessageResponseMessageEvents } from '../models/SendbirdMessageResponseMessageEvents';
import { SendbirdOpenChannel } from '../models/SendbirdOpenChannel';
import { SendbirdParentMessageInfo } from '../models/SendbirdParentMessageInfo';
import { SendbirdPushTriggerOption } from '../models/SendbirdPushTriggerOption';
import { SendbirdReaction } from '../models/SendbirdReaction';
import { SendbirdSmsFallback } from '../models/SendbirdSmsFallback';
import { SendbirdSortedMetaarrayInner } from '../models/SendbirdSortedMetaarrayInner';
import { SendbirdThumbnail } from '../models/SendbirdThumbnail';
import { SendbirdUser } from '../models/SendbirdUser';
import { StartTypingIndicatorsRequest } from '../models/StartTypingIndicatorsRequest';
import { UpdateAChannelMetadataRequest } from '../models/UpdateAChannelMetadataRequest';
import { UpdateAGroupChannelRequest } from '../models/UpdateAGroupChannelRequest';
import { UpdateAMessageRequest } from '../models/UpdateAMessageRequest';
import { UpdateAUserRequest } from '../models/UpdateAUserRequest';
import { UpdateAnOpenChannelRequest } from '../models/UpdateAnOpenChannelRequest';
import { UpdateChannelInvitationPreferenceRequest } from '../models/UpdateChannelInvitationPreferenceRequest';
import { UpdateChannelInvitationPreferenceResponse } from '../models/UpdateChannelInvitationPreferenceResponse';
import { UpdateCountPreferenceOfAChannelRequest } from '../models/UpdateCountPreferenceOfAChannelRequest';
import { UpdateCountPreferenceOfChannelByUrlResponse } from '../models/UpdateCountPreferenceOfChannelByUrlResponse';
import { UpdateExtraDataInAMessageRequest } from '../models/UpdateExtraDataInAMessageRequest';
import { UpdateExtraDataInAMessageResponse } from '../models/UpdateExtraDataInAMessageResponse';
import { UpdatePushPreferencesForAChannelRequest } from '../models/UpdatePushPreferencesForAChannelRequest';
import { UpdatePushPreferencesForAChannelResponse } from '../models/UpdatePushPreferencesForAChannelResponse';
import { UpdatePushPreferencesRequest } from '../models/UpdatePushPreferencesRequest';
import { UpdatePushPreferencesResponse } from '../models/UpdatePushPreferencesResponse';
import { ViewCountPreferenceOfAChannelResponse } from '../models/ViewCountPreferenceOfAChannelResponse';
import { ViewNumberOfChannelsWithUnreadMessagesResponse } from '../models/ViewNumberOfChannelsWithUnreadMessagesResponse';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';
import { ViewNumberOfUnreadMessagesResponse } from '../models/ViewNumberOfUnreadMessagesResponse';
import { ViewPushPreferencesForAChannelResponse } from '../models/ViewPushPreferencesForAChannelResponse';
import { ViewPushPreferencesResponse } from '../models/ViewPushPreferencesResponse';
import { ObservableAnnouncementApi } from './ObservableAPI';

import { AnnouncementApiRequestFactory, AnnouncementApiResponseProcessor} from "../apis/AnnouncementApi";
export class PromiseAnnouncementApi {
    private api: ObservableAnnouncementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnouncementApiRequestFactory,
        responseProcessor?: AnnouncementApiResponseProcessor
    ) {
        this.api = new ObservableAnnouncementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Schedule an announcement  Creates an announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  [https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement](https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement)
     * Schedule an announcement
     * @param apiToken 
     * @param scheduleAnAnnouncementRequest 
     */
    public scheduleAnAnnouncement(apiToken?: string, scheduleAnAnnouncementRequest?: ScheduleAnAnnouncementRequest, _options?: Configuration): Promise<ScheduleAnAnnouncementResponse> {
        const result = this.api.scheduleAnAnnouncement(apiToken, scheduleAnAnnouncementRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBotApi } from './ObservableAPI';

import { BotApiRequestFactory, BotApiResponseProcessor} from "../apis/BotApi";
export class PromiseBotApi {
    private api: ObservableBotApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BotApiRequestFactory,
        responseProcessor?: BotApiResponseProcessor
    ) {
        this.api = new ObservableBotApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a bot  Creates a new bot within an application. Creating a bot is similar to creating a normal user, except a callback URL should be specified for a bot to receive events.  > **Note**: The bot must first [join a group channel](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels) to interact with users. In group channels, you can also invite a bot through the [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) action.      [https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot](https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot)
     * Create a bot
     * @param apiToken 
     * @param createABotRequest 
     */
    public createABot(apiToken?: string, createABotRequest?: CreateABotRequest, _options?: Configuration): Promise<CreateABotResponse> {
        const result = this.api.createABot(apiToken, createABotRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Join channels  Makes a bot join one or more group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels)
     * Join channels
     * @param botUserid (Required) 
     * @param apiToken 
     * @param joinChannelsRequest 
     */
    public joinChannels(botUserid: string, apiToken?: string, joinChannelsRequest?: JoinChannelsRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.joinChannels(botUserid, apiToken, joinChannelsRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave a specific channel  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving a specific channel
     * @param channelUrl 
     * @param botUserid (Required) 
     * @param apiToken 
     */
    public leaveAGroupChannel(channelUrl: string, botUserid: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.leaveAGroupChannel(channelUrl, botUserid, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave all group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving all channels
     * @param botUserid (Required) 
     * @param apiToken 
     */
    public leaveGroupChannels(botUserid: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.leaveGroupChannels(botUserid, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/platform-api/v3/bot/listing-bots/list-bots#1-list-bots
     * List bots
     * @param token 
     * @param limit 
     * @param apiToken 
     */
    public listBots(token?: string, limit?: number, apiToken?: string, _options?: Configuration): Promise<ListBotsResponse> {
        const result = this.api.listBots(token, limit, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Send a bot message  Sends a bot message to a group channel.  [https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message](https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message)  `bot_userid`   Type: string   Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param botUserid (Required) 
     * @param apiToken 
     * @param sendABotMessageRequest 
     */
    public sendABotMessage(botUserid: string, apiToken?: string, sendABotMessageRequest?: SendABotMessageRequest, _options?: Configuration): Promise<SendbirdMessageResponse> {
        const result = this.api.sendABotMessage(botUserid, apiToken, sendABotMessageRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGroupChannelApi } from './ObservableAPI';

import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor} from "../apis/GroupChannelApi";
export class PromiseGroupChannelApi {
    private api: ObservableGroupChannelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupChannelApiRequestFactory,
        responseProcessor?: GroupChannelApiResponseProcessor
    ) {
        this.api = new ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Accept an invitation  Accepts an invitation from a group channel for a user to join. A single user may join up to 2,000 group channels, and any invitation to a user who is at capacity will be automatically canceled. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: This action is only available when the `auto_accept` property of an application is set to **false**. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) action, or the [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference) action.      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation)
     * Accept an invitation
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param acceptAnInvitationRequest 
     */
    public acceptAnInvitation(channelUrl: string, apiToken?: string, acceptAnInvitationRequest?: AcceptAnInvitationRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.acceptAnInvitation(channelUrl, apiToken, acceptAnInvitationRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Unregister operators from a group channel  You can unregister operators in a group channel but keep them in the channel as members using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-a-group-channel#1-unregister-operators-from-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param channelUrl (Required) 
     * @param operatorIds Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2.
     * @param deleteAll 
     * @param apiToken 
     */
    public cancelTheRegistrationOfOperators(channelUrl: string, operatorIds: string, deleteAll?: boolean, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.cancelTheRegistrationOfOperators(channelUrl, operatorIds, deleteAll, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Check if user is a member  Checks if a user is a member of a group channel.  > **Note**: See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.      [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member)
     * Check if member
     * @param channelUrl (Required) 
     * @param userId (Required) 
     * @param apiToken 
     */
    public checkIfMember(channelUrl: string, userId: string, apiToken?: string, _options?: Configuration): Promise<CheckIfMemberResponse> {
        const result = this.api.checkIfMember(channelUrl, userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel
     * Create a group channel
     * @param apiToken 
     * @param createAGroupChannelRequest 
     */
    public createAGroupChannel(apiToken?: string, createAGroupChannelRequest?: CreateAGroupChannelRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.createAGroupChannel(apiToken, createAGroupChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a group channel  You can delete a group channel or a Supergroup channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel)
     * Delete a group channel
     * @param channelUrl 
     * @param apiToken 
     */
    public deleteAGroupChannel(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAGroupChannel(channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get a group channel  This action retrieves information about a specific [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use the optional query parameters to determine whether to include delivery receipt, read receipt, or member information in the response.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-a-group-channel#1-get-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve.
     * Get a group channel
     * @param channelUrl 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMember 
     * @param memberActiveMode Restricts the member list to members who are activated or deactivated in the channel. This parameter is only effective if the parameter show_member is true. Acceptable values are all, activated, and deactivated. (default: all)
     * @param userId 
     * @param apiToken 
     */
    public getAGroupChannel(channelUrl: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMember?: boolean, memberActiveMode?: 'all' | 'activated' | 'deactivated', userId?: string, apiToken?: string, _options?: Configuration): Promise<GetAGroupChannelResponse> {
        const result = this.api.getAGroupChannel(channelUrl, showDeliveryReceipt, showReadReceipt, showMember, memberActiveMode, userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Hide a channel  This action allows you to hide a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) from a user's channel list. Hiding a channel gives users the ability to archive channels so that they can focus on channels that need the most attention.  With this API, you can allow users to hide a channel from themselves or from all channel members. You can also determine whether to have the channel remain hidden when a new message is sent to the channel. Note that only group channels can be hidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel)
     * Hide a channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param hideAChannelRequest 
     */
    public hideAChannel(channelUrl: string, apiToken?: string, hideAChannelRequest?: HideAChannelRequest, _options?: Configuration): Promise<any> {
        const result = this.api.hideAChannel(channelUrl, apiToken, hideAChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Invite as members  Invites one or more users as members to a group channel. Users can join a group channel immediately after receiving an invitation, without having to accept it. To give users an option to accept or decline an invitation, see [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) or [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference). See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: By default, [blocked users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users) are included when sending invitations. If you wish to exclude blocked users, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members)
     * Invite as members
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param inviteAsMembersRequest 
     */
    public inviteAsMembers(channelUrl: string, apiToken?: string, inviteAsMembersRequest?: InviteAsMembersRequest, _options?: Configuration): Promise<InviteAsMembersResponse> {
        const result = this.api.inviteAsMembers(channelUrl, apiToken, inviteAsMembersRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Join a channel  This API allows a user to join a [public](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-group-channel-types) group channel. Users can only join public group channels where the `is_public` property is set to `true` using this API. A single user can join up to 2,000 group channels, and a user who reaches the capacity can’t join a new channel. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel)
     * Join a channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param joinAChannelRequest 
     */
    public joinAChannel(channelUrl: string, apiToken?: string, joinAChannelRequest?: JoinAChannelRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.joinAChannel(channelUrl, apiToken, joinAChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param channelUrl 
     * @param apiToken 
     * @param leaveAChannelRequest 
     */
    public leaveAChannel(channelUrl: string, apiToken?: string, leaveAChannelRequest?: LeaveAChannelRequest, _options?: Configuration): Promise<any> {
        const result = this.api.leaveAChannel(channelUrl, apiToken, leaveAChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## List group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you want to retrieve a list of group channels that a specific user has joined, use the [list group channels by user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user) action under the User section.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels#1-list-group-channels
     * List channels
     * @param apiToken 
     * @param token Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param createdAfter Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @param createdBefore Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @param showEmpty 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMetadata 
     * @param showFrozen 
     * @param order 
     * @param metadataOrderKey Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param customTypeStartswith Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @param channelUrls Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param name Specifies one or more group channel names.
     * @param nameContains Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param nameStartswith Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param membersExactlyIn Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param membersIncludeIn Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param queryType Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @param membersNickname Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @param membersNicknameContains Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @param metadataKey Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @param metadataValues Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metadataValueStartswith Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metacounterKey Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @param metacounterValues Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param includeSortedMetaarrayInLastMessage Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     */
    public listChannels(apiToken: string, token?: string, limit?: number, distinctMode?: 'all' | 'distinct' | 'nondistinct', publicMode?: 'all' | 'private' | 'public', superMode?: 'all' | 'super' | 'nonsuper', createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical', metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, _options?: Configuration): Promise<GroupChatListChannelsResponse> {
        const result = this.api.listChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, _options);
        return result.toPromise();
    }

    /**
     * ## List members  Retrieves a list of members of a group channel.  > **Note**: See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.      [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/list-members-of-a-group-channel#1-list-members-of-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/list-members-of-a-group-channel#1-list-members-of-a-group-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of members of.
     * List members
     * @param channelUrl (Required) 
     * @param token 
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param userId Specifies the unique ID of a user. If &#x60;user_id&#x60; is provided, the response will include two additional boolean properties about each user in the members list. - &#x60;is_blocking_me&#x60;: Indicates whether the listed user is blocking the user specified in the user_id parameter. - &#x60;is_blocked_by_me&#x60;: Indicates whether the listed user is blocked by the user specified in the user_id parameter.
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMemberIsMuted 
     * @param order Specifies the method to sort a list of results. Acceptable values are the following: - &#x60;member_nickname_alphabetical&#x60; (default): sorts by the member nicknames in alphabetical order. - &#x60;operator_then_member_alphabetical&#x60;: sorts by the operational role and member nickname in alphabetical order where channel operators are listed before channel members.
     * @param operatorFilter Restricts the search scope to only retrieve operators or non-operator members of the channel. Acceptable values are the following: - &#x60;all&#x60; (default): no filter is applied to the list. - &#x60;operator&#x60;: only channel operators are retrieved. - &#x60;nonoperator&#x60;: all channel members, except channel operators, are retrieved.
     * @param memberStateFilter Restricts the search scope to retrieve members based on if they have accepted an invitation or if they were invited by a friend. Acceptable values are &#x60;invited_only&#x60;, &#x60;joined_only&#x60;, &#x60;invited_by_friend&#x60;, &#x60;invited_by_non_friend&#x60;, and &#x60;all&#x60;. (Default: &#x60;all&#x60;)
     * @param mutedMemberFilter Restricts the search scope to retrieve members who are muted or unmuted in the channel. Acceptable values are &#x60;all&#x60;, &#x60;muted&#x60;, and &#x60;unmuted&#x60;. (Default: &#x60;all&#x60;)
     * @param memberActiveModeFilter Restricts the search scope to retrieve members who are activated or deactivated in the channel. Acceptable values are &#x60;all&#x60;, &#x60;activated&#x60;, and &#x60;deactivated&#x60;. (default: &#x60;activated&#x60;)
     * @param nicknameStartswith Searches for members whose nicknames start with the specified value. Urlencoding the value is recommended.
     * @param includePushPreference Determines whether to include information about the push preference of each member, such as &#x60;push_enabled&#x60;, &#x60;push_trigger_option&#x60;, and &#x60;do_not_disturb&#x60;. (Default: &#x60;false&#x60;)
     * @param apiToken 
     */
    public listMembers(channelUrl: string, token?: string, limit?: number, userId?: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMemberIsMuted?: boolean, order?: 'member_nickname_alphabetical' | 'operator_then_member_alphabetical', operatorFilter?: 'all' | 'operator' | 'nonoperator', memberStateFilter?: 'all' | 'invited_only' | 'joined_only' | 'invited_by_friend' | 'invited_by_non_friend', mutedMemberFilter?: 'all' | 'muted' | 'unmuted', memberActiveModeFilter?: 'activated' | 'deactivated', nicknameStartswith?: string, includePushPreference?: boolean, apiToken?: string, _options?: Configuration): Promise<GroupChannelListMembersResponse> {
        const result = this.api.listMembers(channelUrl, token, limit, userId, showDeliveryReceipt, showReadReceipt, showMemberIsMuted, order, operatorFilter, memberStateFilter, mutedMemberFilter, memberActiveModeFilter, nicknameStartswith, includePushPreference, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List operators  You can retrieve a list of operators of a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-a-group-channel#1-list-operators-of-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param channelUrl (Required) 
     * @param token 
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param apiToken 
     */
    public listOperators(channelUrl: string, token?: string, limit?: number, apiToken?: string, _options?: Configuration): Promise<ListOperatorsResponse> {
        const result = this.api.listOperators(channelUrl, token, limit, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators to a group channel  You can register one or more operators to a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-a-group-channel#1-register-operators-to-a-group-channel
     * Register operators to a group channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param registerOperatorsToAGroupChannelRequest 
     */
    public registerOperatorsToAGroupChannel(channelUrl: string, apiToken?: string, registerOperatorsToAGroupChannelRequest?: RegisterOperatorsToAGroupChannelRequest, _options?: Configuration): Promise<any> {
        const result = this.api.registerOperatorsToAGroupChannel(channelUrl, apiToken, registerOperatorsToAGroupChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Reset chat history  This action resets the properties related to a specific user's chat history in a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel), clearing existing messages in a channel from only the specified user's end. Because this action doesn't delete messages from the Sendbird database, other members in the channel can still retrieve and see the messages.  This action clears the messages for the specified user by updating the `last_message` and `read_receipt` properties of the [group channel resource](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-list-of-properties-for-group-channels) in addition to other internally managed data such as the count of a user's unread messages.  Using the `reset_all` property, you can also reset the properties related to the chat history of all members in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/reset-chat-history#1-reset-chat-history
     * Reset chat history
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param resetChatHistoryRequest 
     */
    public resetChatHistory(channelUrl: string, apiToken?: string, resetChatHistoryRequest?: ResetChatHistoryRequest, _options?: Configuration): Promise<ResetChatHistoryResponse> {
        const result = this.api.resetChatHistory(channelUrl, apiToken, resetChatHistoryRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Start typing indicators  You can start showing a typing indicator using this API. Seeing whether other users are typing can help a more interactive conversation environment by showing real-time engagement of other users.  If you're looking for an easy way to show typing indicators on your app, check out Sendbird UIKit for a ready-to-use UI feature that can be customized to fit your needs.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/start-typing-indicators#1-start-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Start typing indicators
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param startTypingIndicatorsRequest 
     */
    public startTypingIndicators(channelUrl: string, apiToken?: string, startTypingIndicatorsRequest?: StartTypingIndicatorsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.startTypingIndicators(channelUrl, apiToken, startTypingIndicatorsRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Stop typing indicators  You can stop showing a typing indicator using this API. To signal that a user is no longer typing, you can let the indicator disappear when the user sends a message or completely deletes the message text.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/stop-typing-indicators#1-stop-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Stop typing indicators
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param startTypingIndicatorsRequest 
     */
    public stopTypingIndicators(channelUrl: string, apiToken?: string, startTypingIndicatorsRequest?: StartTypingIndicatorsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.stopTypingIndicators(channelUrl, apiToken, startTypingIndicatorsRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Unhide a channel  This action lets a hidden [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) reappear on the channel list of a specific user or every member in the group channel. Hiding or unhiding a channel lets users organize their channel list based on those that require the most attention. Note that only group channels can be hidden or unhidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide a channel
     * @param channelUrl (Required) 
     * @param userId (Required) 
     * @param shouldUnhideAll 
     * @param apiToken 
     */
    public unhideAChannel(channelUrl: string, userId: string, shouldUnhideAll?: boolean, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.unhideAChannel(channelUrl, userId, shouldUnhideAll, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a group channel  You can update information about a group channel or a Supergroup channel using this API. You can't make any changes to the members of a channel with this API. To change members, see [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) instead. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-a-group-channel#1-update-a-group-channel
     * Update a group channel
     * @param channelUrl 
     * @param apiToken 
     * @param updateAGroupChannelRequest 
     */
    public updateAGroupChannel(channelUrl: string, apiToken?: string, updateAGroupChannelRequest?: UpdateAGroupChannelRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.updateAGroupChannel(channelUrl, apiToken, updateAGroupChannelRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMessageApi } from './ObservableAPI';

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class PromiseMessageApi {
    private api: ObservableMessageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-add-metadata#1-add-metadata ----------------------------
     * Add extra data to a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param addExtraDataToAMessageRequest 
     */
    public addExtraDataToAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, apiToken?: string, addExtraDataToAMessageRequest?: AddExtraDataToAMessageRequest, _options?: Configuration): Promise<AddExtraDataToAMessageResponse> {
        const result = this.api.addExtraDataToAMessage(channelType, channelUrl, messageId, apiToken, addExtraDataToAMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/delete-a-message#1-delete-a-message ----------------------------
     * Delete a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     */
    public deleteAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAMessage(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get a message  Retrieves information on a specific message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-a-message#1-get-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * Get a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param includeReactions 
     * @param includeThreadInfo 
     * @param includeParentMessageInfo 
     * @param includePollDetails Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @param withSortedMetaArray 
     * @param apiToken 
     */
    public getAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, includeReactions?: boolean, includeThreadInfo?: boolean, includeParentMessageInfo?: boolean, includePollDetails?: boolean, withSortedMetaArray?: boolean, apiToken?: string, _options?: Configuration): Promise<SendbirdMessageResponse> {
        const result = this.api.getAMessage(channelType, channelUrl, messageId, includeReactions, includeThreadInfo, includeParentMessageInfo, includePollDetails, withSortedMetaArray, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get total number of messages in a channel  Retrieves the total number of messages in a specific channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-total-number-of-messages-in-a-channel#1-get-total-number-of-messages-in-a-channel ----------------------------
     * Get total number of messages in a channel
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public getTotalNumberOfMessagesInAChannel(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, _options?: Configuration): Promise<GetTotalNumberOfMessagesInAChannelResponse> {
        const result = this.api.getTotalNumberOfMessagesInAChannel(channelType, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List messages  You can retrieve a list of past messages of a specific channel with this API.  By default, this action returns a list of messages in the order they were created. Replies in threaded messages are also listed in the chronological order of their creation like other messages, not grouped with their parent messages.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/list-messages#1-list-messages  `channel_type`   Type: string   Description: Specifies the type of the channel. Either open_channels or group_channels.   `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageTs Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15.
     * @param messageId Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15.
     * @param prevLimit Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts&#x3D;1484202848298, then prev_limit&#x3D;50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15)
     * @param nextLimit Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts&#x3D;1484202848298, then next_limit&#x3D;50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15)
     * @param include Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true)
     * @param reverse Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false)
     * @param senderId Restricts the search scope to only retrieve messages sent by the user with the specified ID.
     * @param senderIds Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string.
     * @param operatorFilter 
     * @param customTypes Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &amp;custom_types&#x3D;&amp;...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type.
     * @param messageType 
     * @param includingRemoved 
     * @param includeReactions 
     * @param includeReplyType One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL
     * @param includeParentMessageInfo 
     * @param includeThreadInfo 
     * @param includePollDetails Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @param withSortedMetaArray Determines whether to include the sorted_metaarray property in the response. (Default: false)
     * @param showSubchannelMessagesOnly 
     * @param userId 
     * @param apiToken 
     */
    public listMessages(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageTs: number, messageId: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: 'all' | 'operator' | 'nonoperator', customTypes?: string, messageType?: 'MESG' | 'FILE' | 'ADMM', includingRemoved?: boolean, includeReactions?: boolean, includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL', includeParentMessageInfo?: boolean, includeThreadInfo?: boolean, includePollDetails?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, apiToken?: string, _options?: Configuration): Promise<ListMessagesResponse> {
        const result = this.api.listMessages(channelType, channelUrl, messageTs, messageId, prevLimit, nextLimit, include, reverse, senderId, senderIds, operatorFilter, customTypes, messageType, includingRemoved, includeReactions, includeReplyType, includeParentMessageInfo, includeThreadInfo, includePollDetails, withSortedMetaArray, showSubchannelMessagesOnly, userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a specific user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/message/read-receipts/mark-all-messages-as-read-message#1-mark-all-messages-as-read
     * Mark all messages as read
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param markChannelMessagesAsReadRequest 
     */
    public markChannelMessagesAsRead(channelUrl: string, apiToken?: string, markChannelMessagesAsReadRequest?: MarkChannelMessagesAsReadRequest, _options?: Configuration): Promise<any> {
        const result = this.api.markChannelMessagesAsRead(channelUrl, apiToken, markChannelMessagesAsReadRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).      There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user).      2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically.      3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.       https://sendbird.com/docs/chat/platform-api/v3/message/migration/migrate-messages#1-migrate-messages
     * Migrate messages
     * @param targetChannelUrl (Required) 
     * @param apiToken 
     * @param migrateMessagesRequest 
     */
    public migrateMessages(targetChannelUrl: string, apiToken?: string, migrateMessagesRequest?: MigrateMessagesRequest, _options?: Configuration): Promise<any> {
        const result = this.api.migrateMessages(targetChannelUrl, apiToken, migrateMessagesRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-remove-metadata#1-remove-metadata ----------------------------
     * Remove extra data from a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param keys 
     * @param apiToken 
     */
    public removeExtraDataFromAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, keys?: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeExtraDataFromAMessage(channelType, channelUrl, messageId, keys, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Send a message  You can use this action to send a text message, a file message, or an admin message to a specific channel. Sendbird Chat SDKs and the platform API allows you to upload any type of files in messages to the Sendbird server. See [Message Overview](https://sendbird.com/docs/chat/platform-api/v3/message/message-overview) for more information on each message type. Messages are sent between client devices running the Sendbird Chat SDK or UIKit as well as programmatically from businesses to their customers. For instance, a delivery app can automatically send a message like \"Arriving in one minute!\" on behalf of a delivery driver.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message#1-send-a-message ----------------------------
     * Send a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param sendAMessageRequest 
     */
    public sendAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, sendAMessageRequest?: SendAMessageRequest, _options?: Configuration): Promise<SendbirdMessageResponse> {
        const result = this.api.sendAMessage(channelType, channelUrl, apiToken, sendAMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update a message  Updates specific information on a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/update-a-message#1-update-a-message ----------------------------
     * Update a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param updateAMessageRequest 
     */
    public updateAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, apiToken?: string, updateAMessageRequest?: UpdateAMessageRequest, _options?: Configuration): Promise<SendbirdMessageResponse> {
        const result = this.api.updateAMessage(channelType, channelUrl, messageId, apiToken, updateAMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-update-metadata#1-update-metadata ----------------------------
     * Update extra data in a message
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param messageId (Required) 
     * @param apiToken 
     * @param updateExtraDataInAMessageRequest 
     */
    public updateExtraDataInAMessage(channelType: 'open_channels' | 'group_channels', channelUrl: string, messageId: string, apiToken?: string, updateExtraDataInAMessageRequest?: UpdateExtraDataInAMessageRequest, _options?: Configuration): Promise<UpdateExtraDataInAMessageResponse> {
        const result = this.api.updateExtraDataInAMessage(channelType, channelUrl, messageId, apiToken, updateExtraDataInAMessageRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataApi } from './ObservableAPI';

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";
export class PromiseMetadataApi {
    private api: ObservableMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-create-metadata#1-create-metadata ----------------------------
     * Create a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param createAChannelMetadataRequest 
     */
    public createAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, createAChannelMetadataRequest?: CreateAChannelMetadataRequest, _options?: Configuration): Promise<CreateAChannelMetadataResponse> {
        const result = this.api.createAChannelMetadata(channelType, channelUrl, apiToken, createAChannelMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-delete-metadata#1-delete-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param key 
     * @param apiToken 
     */
    public deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, key?: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-update-metadata#1-update-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updateAChannelMetadataRequest 
     */
    public updateAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, updateAChannelMetadataRequest?: UpdateAChannelMetadataRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateAChannelMetadata(channelType, channelUrl, apiToken, updateAChannelMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-get-metadata#1-get-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param key 
     * @param keys In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended.
     * @param apiToken 
     */
    public viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, key?: string, keys?: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(channelType, channelUrl, key, keys, apiToken, _options);
        return result.toPromise();
    }


}



import { ObservableModerationApi } from './ObservableAPI';

import { ModerationApiRequestFactory, ModerationApiResponseProcessor} from "../apis/ModerationApi";
export class PromiseModerationApi {
    private api: ObservableModerationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ModerationApiRequestFactory,
        responseProcessor?: ModerationApiResponseProcessor
    ) {
        this.api = new ObservableModerationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Block a user  A user can block another user if the user doesn't wish to receive any messages or notifications from the blocked user in a 1-to-1 group channel. In a 1-to-N group channel, the user can still receive messages from the blocked user, but this depends on the UI settings of the chat view. In any case, notifications from the blocked user won't be delivered to the 1-to-N group channel. You can choose whether or not the user can view [which users are blocked](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users) in the channel UI.  Sendbird application provides two blocking options: include or exclude blocked users when sending invitations, and turn on or off notifications from blocked users. [Explicit and classic block modes](https://sendbird.com/docs/chat/platform-api/v3/deprecated#2-explicit-and-classic-block-modes) have been deprecated and are only supported for customers who started using them before they were deprecated.  - **Include or exclude blocked users when sending invitations**: Determines whether or not to automatically filter out blocked users when a user invites a group of users to a new group channel. By default, blocked users are included when sending invitations. The value of this option can be changed by Sendbird if your Sendbird application isn't integrated to the client app. If you want to change the value, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      - **Turn on or off notifications from blocked users**: Determines whether or not to receive message notifications from the blocked user in a specific 1-to-N group channel where they are both members. By default, a user doesn't receive notifications from blocked users. The value of this option can be set individually per channel. If you want to use this option, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).       > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      The following tables explain what happens to a user's chat experience when the user blocks another user in a 1-to-1 or 1-to-N group channel. In the case of a 1-to-1 group channel, the block mode is only maintained with the original members. If other than the original members are added, the rules for 1-to-N group channel begin to apply.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users)
     * Block a user
     * @param userId (Required) 
     * @param apiToken 
     * @param blockAUserRequest 
     */
    public blockAUser(userId: string, apiToken?: string, blockAUserRequest?: BlockAUserRequest, _options?: Configuration): Promise<BlockAUserResponse> {
        const result = this.api.blockAUser(userId, apiToken, blockAUserRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze a group channel  Freezes or unfreezes a group channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel)
     * Freeze a group channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param freezeAGroupChannelRequest 
     */
    public freezeAGroupChannel(channelUrl: string, apiToken?: string, freezeAGroupChannelRequest?: FreezeAGroupChannelRequest, _options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        const result = this.api.freezeAGroupChannel(channelUrl, apiToken, freezeAGroupChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze an open channel  Freezes or unfreezes an open channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel)
     * Freeze an open channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param freezeAnOpenChannelRequest 
     */
    public freezeAnOpenChannel(channelUrl: string, apiToken?: string, freezeAnOpenChannelRequest?: FreezeAnOpenChannelRequest, _options?: Configuration): Promise<SendbirdOpenChannel> {
        const result = this.api.freezeAnOpenChannel(channelUrl, apiToken, freezeAnOpenChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## List blocked by and blocking users  This action retrieves a list of users who are either blocked by a specific user or a list of users who are blocking a specific user.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users)  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param userId (Required) 
     * @param list Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The &#x60;me&#x60; in the values refers to the user specified in the parameter. (Default: blocked_by_me)
     * @param token 
     * @param limit 
     * @param userIds Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs.
     * @param metadatakey 
     * @param metadatavaluesIn 
     * @param apiToken 
     */
    public listBlockedUsers(userId: string, list?: 'blocked_by_me' | 'blocking_me', token?: string, limit?: number, userIds?: string, metadatakey?: string, metadatavaluesIn?: string, apiToken?: string, _options?: Configuration): Promise<ListBlockedUsersResponse> {
        const result = this.api.listBlockedUsers(userId, list, token, limit, userIds, metadatakey, metadatavaluesIn, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/unblock-a-user#1-unblock-a-user
     * Unblock a user
     * @param userId (Required) 
     * @param targetId (Required) 
     * @param apiToken 
     */
    public unblockAUser(userId: string, targetId: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.unblockAUser(userId, targetId, apiToken, _options);
        return result.toPromise();
    }


}



import { ObservableOpenChannelApi } from './ObservableAPI';

import { OpenChannelApiRequestFactory, OpenChannelApiResponseProcessor} from "../apis/OpenChannelApi";
export class PromiseOpenChannelApi {
    private api: ObservableOpenChannelApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpenChannelApiRequestFactory,
        responseProcessor?: OpenChannelApiResponseProcessor
    ) {
        this.api = new ObservableOpenChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don't need invitations to join open channels, short-lived live events like concerts or live streams that don't require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)
     * Create an open channel
     * @param apiToken 
     * @param createAnOpenChannelRequest 
     */
    public createAnOpenChannel(apiToken?: string, createAnOpenChannelRequest?: CreateAnOpenChannelRequest, _options?: Configuration): Promise<SendbirdOpenChannel> {
        const result = this.api.createAnOpenChannel(apiToken, createAnOpenChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel
     * Delete an open channel
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public deleteAnOpenChannel(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAnOpenChannel(channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)
     * Get an open channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param includeOperators Determines whether to include a list of operators in the response. (Default: false)
     */
    public getAnOpenChannel(channelUrl: string, apiToken?: string, includeOperators?: boolean, _options?: Configuration): Promise<SendbirdOpenChannel> {
        const result = this.api.getAnOpenChannel(channelUrl, apiToken, includeOperators, _options);
        return result.toPromise();
    }

    /**
     * ## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators of an open channel
     * @param channelUrl (Required) 
     * @param token 
     * @param limit 
     * @param apiToken 
     */
    public listChannelOperators(channelUrl: string, token?: string, limit?: number, apiToken?: string, _options?: Configuration): Promise<ListOperatorsResponse> {
        const result = this.api.listChannelOperators(channelUrl, token, limit, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)
     * List open channels
     * @param token 
     * @param channelUrls Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param limit 
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types&#x3D;urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type.
     * @param nameContains 
     * @param urlContains 
     * @param showFrozen Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true)
     * @param showMetadata Determines whether to include channel metadata in the response. (Default: false)
     * @param apiToken 
     */
    public listOpenChannels(token?: string, channelUrls?: string, limit?: number, customTypes?: string, nameContains?: string, urlContains?: string, showFrozen?: boolean, showMetadata?: boolean, apiToken?: string, _options?: Configuration): Promise<ListOpenChannelsResponse> {
        const result = this.api.listOpenChannels(token, channelUrls, limit, customTypes, nameContains, urlContains, showFrozen, showMetadata, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel
     * Register operators to an open channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param registerOperatorsToAGroupChannelRequest 
     */
    public registerOperators(channelUrl: string, apiToken?: string, registerOperatorsToAGroupChannelRequest?: RegisterOperatorsToAGroupChannelRequest, _options?: Configuration): Promise<any> {
        const result = this.api.registerOperators(channelUrl, apiToken, registerOperatorsToAGroupChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * Unregister operators from an open channel
     * @param channelUrl (Required) 
     * @param operatorIds Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2.
     * @param deleteAll Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn&#39;t effective and doesn&#39;t need to be specified in the request. (Default: false)
     * @param apiToken 
     */
    public unregisterOperators(channelUrl: string, operatorIds: string, deleteAll?: boolean, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.unregisterOperators(channelUrl, operatorIds, deleteAll, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel
     * Update an open channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updateAnOpenChannelRequest 
     */
    public updateAnOpenChannel(channelUrl: string, apiToken?: string, updateAnOpenChannelRequest?: UpdateAnOpenChannelRequest, _options?: Configuration): Promise<SendbirdOpenChannel> {
        const result = this.api.updateAnOpenChannel(channelUrl, apiToken, updateAnOpenChannelRequest, _options);
        return result.toPromise();
    }


}



import { ObservableStatisticsApi } from './ObservableAPI';

import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor} from "../apis/StatisticsApi";
export class PromiseStatisticsApi {
    private api: ObservableStatisticsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatisticsApiRequestFactory,
        responseProcessor?: StatisticsApiResponseProcessor
    ) {
        this.api = new ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users)
     * View number of daily active users
     * @param date YYYY-MM-DD
     * @param apiToken 
     */
    public viewNumberOfDailyActiveUsers(date?: string, apiToken?: string, _options?: Configuration): Promise<ViewNumberOfDailyActiveUsersResponse> {
        const result = this.api.viewNumberOfDailyActiveUsers(date, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users)
     * View number of monthly active users
     * @param date YYYY-MM-DD
     * @param apiToken 
     */
    public viewNumberOfMonthlyActiveUsers(date?: string, apiToken?: string, _options?: Configuration): Promise<ViewNumberOfMonthlyActiveUsersResponse> {
        const result = this.api.viewNumberOfMonthlyActiveUsers(date, apiToken, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * Add a registration or device token
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param apiToken 
     * @param addARegistrationOrDeviceTokenRequest 
     */
    public addARegistrationOrDeviceToken(userId: string, tokenType: 'gcm' | 'huawei' | 'apns', apiToken?: string, addARegistrationOrDeviceTokenRequest?: AddARegistrationOrDeviceTokenRequest, _options?: Configuration): Promise<AddARegistrationOrDeviceTokenResponse> {
        const result = this.api.addARegistrationOrDeviceToken(userId, tokenType, apiToken, addARegistrationOrDeviceTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template
     * Choose a push notification content template
     * @param userId (Required) 
     * @param apiToken 
     * @param chooseAPushNotificationContentTemplateRequest 
     */
    public chooseAPushNotificationContentTemplate(userId: string, apiToken?: string, chooseAPushNotificationContentTemplateRequest?: ChooseAPushNotificationContentTemplateRequest, _options?: Configuration): Promise<ChooseAPushNotificationContentTemplateResponse> {
        const result = this.api.chooseAPushNotificationContentTemplate(userId, apiToken, chooseAPushNotificationContentTemplateRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user
     * Create a user
     * @param apiToken 
     * @param createAUserRequest 
     */
    public createAUser(apiToken?: string, createAUserRequest?: CreateAUserRequest, _options?: Configuration): Promise<SendbirdUser> {
        const result = this.api.createAUser(apiToken, createAUserRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token
     * Create user token
     * @param userId (Required) 
     * @param apiToken 
     * @param createUserTokenRequest 
     */
    public createUserToken(userId: string, apiToken?: string, createUserTokenRequest?: CreateUserTokenRequest, _options?: Configuration): Promise<CreateUserTokenResponse> {
        const result = this.api.createUserToken(userId, apiToken, createUserTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)
     * Delete a user
     * @param userId (Required) 
     * @param apiToken 
     */
    public deleteAUser(userId: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAUser(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)
     * Get channel invitation preference
     * @param userId (Required) 
     * @param apiToken 
     */
    public getChannelInvitationPreference(userId: string, apiToken?: string, _options?: Configuration): Promise<GetChannelInvitationPreferenceResponse> {
        const result = this.api.getChannelInvitationPreference(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param userId (Required) 
     * @param apiToken 
     * @param leaveMyGroupChannelsRequest 
     */
    public leaveMyGroupChannels(userId: string, apiToken?: string, leaveMyGroupChannelsRequest?: LeaveMyGroupChannelsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.leaveMyGroupChannels(userId, apiToken, leaveMyGroupChannelsRequest, _options);
        return result.toPromise();
    }

    /**
     * ## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param userId (Required) 
     * @param apiToken 
     * @param token Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param createdAfter Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @param createdBefore Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @param showEmpty 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMetadata 
     * @param showFrozen 
     * @param order 
     * @param metadataOrderKey Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param customTypeStartswith Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @param channelUrls Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param name Specifies one or more group channel names.
     * @param nameContains Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param nameStartswith Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param membersExactlyIn Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param membersIncludeIn Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param queryType Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @param membersNickname Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @param membersNicknameContains Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @param membersNicknameStartswith Searches for group channels with members whose nicknames begin with the specified value. This parameter isn&#39;t case-sensitive. URL encoding the value is recommended.
     * @param searchQuery Searches for group channels where the specified query string matches the channel name or the nickname of the member. This parameter isn&#39;t case-sensitive and should be specified in conjunction with the search_fields parameter below. URL encoding the value is recommended.
     * @param searchFields Specifies a comma-separated string of one or more search fields to apply to the query, which restricts the results within the specified fields (OR search condition). Acceptable values are channel_name and member_nickname. This is effective only when the search_query parameter above is specified. (Default: channel_name, member_nickname together)
     * @param metadataKey Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @param metadataValues Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metadataValueStartswith Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param metacounterKey Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @param metacounterValues Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueGte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param metacounterValueLte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param includeSortedMetaarrayInLastMessage Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @param hiddenMode Restricts the search scope to group channels that match a specific hidden_status and operating behavior
     * @param unreadFilter Restricts the search scope to only retrieve group channels with one or more unread messages. This filter doesn&#39;t support Supergroup channels. Acceptable values are all and unread_message. (Default: all)
     * @param memberStateFilter 
     */
    public listMyGroupChannels(userId: string, apiToken: string, token?: string, limit?: number, distinctMode?: 'all' | 'distinct' | 'nondistinct', publicMode?: 'all' | 'private' | 'public', superMode?: 'all' | 'super' | 'nonsuper', createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical', metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, membersNicknameStartswith?: string, searchQuery?: string, searchFields?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, hiddenMode?: 'unhidden_only' | 'hidden_only' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide' | 'all', unreadFilter?: 'all' | 'unread_message', memberStateFilter?: 'all' | 'invited_only' | 'joined_only' | 'invited_by_friend' | 'invited_by_non_friend', _options?: Configuration): Promise<ListMyGroupChannelsResponse> {
        const result = this.api.listMyGroupChannels(userId, apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, membersNicknameStartswith, searchQuery, searchFields, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, hiddenMode, unreadFilter, memberStateFilter, _options);
        return result.toPromise();
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens
     * List registration or device tokens
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param apiToken 
     */
    public listRegistrationOrDeviceTokens(userId: string, tokenType: 'gcm' | 'huawei' | 'apns', apiToken?: string, _options?: Configuration): Promise<ListRegistrationOrDeviceTokensResponse> {
        const result = this.api.listRegistrationOrDeviceTokens(userId, tokenType, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users
     * List users
     * @param token 
     * @param limit 
     * @param activeMode Specifies the activation status of the users in the list. Acceptable values are &#x60;activated&#x60;, &#x60;deactivated&#x60;, and &#x60;all&#x60;. (Default: &#x60;activated&#x60;)
     * @param showBot Determines whether to include bots in the list. (Default: true)
     * @param userIds Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids&#x3D;urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
     * @param nickname 
     * @param nicknameStartswith 
     * @param metadatakey 
     * @param metadatavaluesIn Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, &#x60;?metadatavalues_in&#x3D;urlencoded_value_1, urlencoded_value_2&#x60;). This parameter should be specified in conjunction with the &#x60;metadatakey&#x60; above.
     * @param apiToken 
     */
    public listUsers(token?: string, limit?: number, activeMode?: 'activated' | 'deactivated' | 'all', showBot?: boolean, userIds?: string, nickname?: string, nicknameStartswith?: string, metadatakey?: string, metadatavaluesIn?: string, apiToken?: string, _options?: Configuration): Promise<ListUsersResponse> {
        const result = this.api.listUsers(token, limit, activeMode, showBot, userIds, nickname, nicknameStartswith, metadatakey, metadatavaluesIn, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * Mark all messages as read
     * @param userId (Required) 
     * @param apiToken 
     * @param markAllMessagesAsReadRequest 
     */
    public markAllMessagesAsRead(userId: string, apiToken?: string, markAllMessagesAsReadRequest?: MarkAllMessagesAsReadRequest, _options?: Configuration): Promise<any> {
        const result = this.api.markAllMessagesAsRead(userId, apiToken, markAllMessagesAsReadRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering a specific token
     * @param userId (Required) 
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public removeARegistrationOrDeviceToken(userId: string, tokenType: 'gcm' | 'huawei' | 'apns', token: string, apiToken?: string, _options?: Configuration): Promise<RemoveARegistrationOrDeviceTokenResponse> {
        const result = this.api.removeARegistrationOrDeviceToken(userId, tokenType, token, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner
     * Remove a registration or device token from an owner
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public removeARegistrationOrDeviceTokenFromAnOwner(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<Array<MarkChannelMessagesAsReadRequest>> {
        const result = this.api.removeARegistrationOrDeviceTokenFromAnOwner(tokenType, token, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering all device tokens
     * @param userId (Required) 
     * @param apiToken 
     */
    public removeAllRegistrationOrDeviceToken(userId: string, apiToken?: string, _options?: Configuration): Promise<RemoveAllRegistrationOrDeviceTokenResponse> {
        const result = this.api.removeAllRegistrationOrDeviceToken(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)
     * Reset push preferences
     * @param userId (Required) 
     * @param apiToken 
     */
    public resetPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<any> {
        const result = this.api.resetPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)
     * Update a user
     * @param userId (Required) 
     * @param apiToken 
     * @param updateAUserRequest 
     */
    public updateAUser(userId: string, apiToken?: string, updateAUserRequest?: UpdateAUserRequest, _options?: Configuration): Promise<SendbirdUser> {
        const result = this.api.updateAUser(userId, apiToken, updateAUserRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference
     * Update channel invitation preference
     * @param userId (Required) 
     * @param apiToken 
     * @param updateChannelInvitationPreferenceRequest 
     */
    public updateChannelInvitationPreference(userId: string, apiToken?: string, updateChannelInvitationPreferenceRequest?: UpdateChannelInvitationPreferenceRequest, _options?: Configuration): Promise<UpdateChannelInvitationPreferenceResponse> {
        const result = this.api.updateChannelInvitationPreference(userId, apiToken, updateChannelInvitationPreferenceRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel
     * Update count preference of a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updateCountPreferenceOfAChannelRequest 
     */
    public updateCountPreferenceOfAChannel(userId: string, channelUrl: string, apiToken?: string, updateCountPreferenceOfAChannelRequest?: UpdateCountPreferenceOfAChannelRequest, _options?: Configuration): Promise<UpdateCountPreferenceOfChannelByUrlResponse> {
        const result = this.api.updateCountPreferenceOfAChannel(userId, channelUrl, apiToken, updateCountPreferenceOfAChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)
     * Update push preferences
     * @param userId (Required) 
     * @param apiToken 
     * @param updatePushPreferencesRequest 
     */
    public updatePushPreferences(userId: string, apiToken?: string, updatePushPreferencesRequest?: UpdatePushPreferencesRequest, _options?: Configuration): Promise<UpdatePushPreferencesResponse> {
        const result = this.api.updatePushPreferences(userId, apiToken, updatePushPreferencesRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)
     * Update push preferences for a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updatePushPreferencesForAChannelRequest 
     */
    public updatePushPreferencesForAChannel(userId: string, channelUrl: string, apiToken?: string, updatePushPreferencesForAChannelRequest?: UpdatePushPreferencesForAChannelRequest, _options?: Configuration): Promise<UpdatePushPreferencesForAChannelResponse> {
        const result = this.api.updatePushPreferencesForAChannel(userId, channelUrl, apiToken, updatePushPreferencesForAChannelRequest, _options);
        return result.toPromise();
    }

    /**
     * ## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param userId (Required) 
     * @param includeUnreadCount 
     * @param customTypes 
     * @param superMode Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. This parameter should be specified in conjunction with &#x60;include_unread_count&#x60; above. (Default: &#x60;all&#x60;)
     * @param apiToken 
     */
    public viewAUser(userId: string, includeUnreadCount?: boolean, customTypes?: string, superMode?: 'all' | 'super' | 'nonsuper', apiToken?: string, _options?: Configuration): Promise<SendbirdUser> {
        const result = this.api.viewAUser(userId, includeUnreadCount, customTypes, superMode, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel
     * View count preference of a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public viewCountPreferenceOfAChannel(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<ViewCountPreferenceOfAChannelResponse> {
        const result = this.api.viewCountPreferenceOfAChannel(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages
     * View number of channels with unread messages
     * @param userId (Required) 
     * @param customTypes 
     * @param superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
     * @param apiToken 
     */
    public viewNumberOfChannelsWithUnreadMessages(userId: string, customTypes?: string, superMode?: 'all' | 'super' | 'nonsuper', apiToken?: string, _options?: Configuration): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse> {
        const result = this.api.viewNumberOfChannelsWithUnreadMessages(userId, customTypes, superMode, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.
     * View number of unread messages
     * @param userId (Required) 
     * @param customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. (Default: &#x60;all&#x60;)
     * @param apiToken 
     */
    public viewNumberOfUnreadMessages(userId: string, customTypes?: string, superMode?: string, apiToken?: string, _options?: Configuration): Promise<ViewNumberOfUnreadMessagesResponse> {
        const result = this.api.viewNumberOfUnreadMessages(userId, customTypes, superMode, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)
     * View push preferences
     * @param userId (Required) 
     * @param apiToken 
     */
    public viewPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<ViewPushPreferencesResponse> {
        const result = this.api.viewPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)
     * View push preferences for a channel
     * @param userId (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     */
    public viewPushPreferencesForAChannel(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<ViewPushPreferencesForAChannelResponse> {
        const result = this.api.viewPushPreferencesForAChannel(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param tokenType (Required) 
     * @param token (Required) 
     * @param apiToken 
     */
    public viewWhoOwnsARegistrationOrDeviceToken(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<Array<MarkChannelMessagesAsReadRequest>> {
        const result = this.api.viewWhoOwnsARegistrationOrDeviceToken(tokenType, token, apiToken, _options);
        return result.toPromise();
    }


}



