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
import { SendABotMessageResponse } from '../models/SendABotMessageResponse';
import { SendAMessageRequest } from '../models/SendAMessageRequest';
import { SendAMessageRequestPushMessageTemplate } from '../models/SendAMessageRequestPushMessageTemplate';
import { SendAMessageRequestPushMessageTemplateOneOf } from '../models/SendAMessageRequestPushMessageTemplateOneOf';
import { SendAdminMessageRequestBody } from '../models/SendAdminMessageRequestBody';
import { SendFileMessageRequestBody } from '../models/SendFileMessageRequestBody';
import { SendTextMessageRequestBody } from '../models/SendTextMessageRequestBody';
import { SendTextMessageRequestBodyPushMessageTemplate } from '../models/SendTextMessageRequestBodyPushMessageTemplate';
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

import { ObservableAnnouncementApi } from "./ObservableAPI";
import { AnnouncementApiRequestFactory, AnnouncementApiResponseProcessor} from "../apis/AnnouncementApi";

export interface AnnouncementApiScheduleAnAnnouncementRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementApischeduleAnAnnouncement
     */
    apiToken?: string
    /**
     * 
     * @type ScheduleAnAnnouncementRequest
     * @memberof AnnouncementApischeduleAnAnnouncement
     */
    scheduleAnAnnouncementRequest?: ScheduleAnAnnouncementRequest
}

export class ObjectAnnouncementApi {
    private api: ObservableAnnouncementApi

    public constructor(configuration: Configuration, requestFactory?: AnnouncementApiRequestFactory, responseProcessor?: AnnouncementApiResponseProcessor) {
        this.api = new ObservableAnnouncementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Schedule an announcement  Creates an announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  [https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement](https://sendbird.com/docs/chat/platform-api/v3/message/announcements/create-an-announcement#1-create-an-announcement)
     * Schedule an announcement
     * @param param the request object
     */
    public scheduleAnAnnouncement(param: AnnouncementApiScheduleAnAnnouncementRequest = {}, options?: Configuration): Promise<ScheduleAnAnnouncementResponse> {
        return this.api.scheduleAnAnnouncement(param.apiToken, param.scheduleAnAnnouncementRequest,  options).toPromise();
    }

}

import { ObservableBotApi } from "./ObservableAPI";
import { BotApiRequestFactory, BotApiResponseProcessor} from "../apis/BotApi";

export interface BotApiCreateABotRequest {
    /**
     * 
     * @type string
     * @memberof BotApicreateABot
     */
    apiToken?: string
    /**
     * 
     * @type CreateABotRequest
     * @memberof BotApicreateABot
     */
    createABotRequest?: CreateABotRequest
}

export interface BotApiJoinChannelsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof BotApijoinChannels
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotApijoinChannels
     */
    apiToken?: string
    /**
     * 
     * @type JoinChannelsRequest
     * @memberof BotApijoinChannels
     */
    joinChannelsRequest?: JoinChannelsRequest
}

export interface BotApiLeaveAGroupChannelRequest {
    /**
     * 
     * @type string
     * @memberof BotApileaveAGroupChannel
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof BotApileaveAGroupChannel
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotApileaveAGroupChannel
     */
    apiToken?: string
}

export interface BotApiLeaveGroupChannelsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof BotApileaveGroupChannels
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotApileaveGroupChannels
     */
    apiToken?: string
}

export interface BotApiListBotsRequest {
    /**
     * 
     * @type string
     * @memberof BotApilistBots
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof BotApilistBots
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof BotApilistBots
     */
    apiToken?: string
}

export interface BotApiSendABotMessageRequest {
    /**
     * (Required) 
     * @type string
     * @memberof BotApisendABotMessage
     */
    botUserid: string
    /**
     * Specifies the type of message to send. MESG for text message, FILE for file message.
     * @type string
     * @memberof BotApisendABotMessage
     */
    messageType: string
    /**
     * Specifies the URL of the channel to send the message to.
     * @type string
     * @memberof BotApisendABotMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof BotApisendABotMessage
     */
    apiToken?: string
    /**
     * Specifies the content of the message. * This property is required when message_type is MESG.
     * @type string
     * @memberof BotApisendABotMessage
     */
    message?: string
    /**
     * * This property is available when message_type is MESG.
     * @type Array&lt;string&gt;
     * @memberof BotApisendABotMessage
     */
    mentioned?: Array<string>
    /**
     * 
     * @type SendbirdExtendedMessagePayload
     * @memberof BotApisendABotMessage
     */
    extendedMessagePayload?: SendbirdExtendedMessagePayload
    /**
     * When sending a single file with a message, specifies the data of the file to upload to the Sendbird server in raw binary format. When sending a request containing a file, change the value of the content-type header to multipart/form-data;boundary&#x3D;{your_unique_boundary_string} in the request. * This property is required when message_type is FILE. * This doesn&#39;t allow a converted base64-encoded string from a file as its value.
     * @type HttpFile
     * @memberof BotApisendABotMessage
     */
    file?: HttpFile
    /**
     * Determines whether to require an authentication key to verify if the file is being properly accessed. Only the user who uploaded the file or users who are in the channel where the file was uploaded should have access. The authentication key managed internally by the Sendbird system is generated every time a user logs in to the Sendbird server and is valid for three days starting from the last login. If set to false, Sendbird tries to access a file without any key. To access encrypted files, such as the files in the Sendbird server which are by default encrypted, the property must be set to true. (Default: false) The require_auth parameter only works if the file or URL is managed by Sendbird, which means that when you upload files using multipart format or provide URLs that point to the files hosted on the Sendbird server. However, if the file is hosted on a server or service that is not managed by Sendbird, access control and authentication for the file should be handled by the respective server or service hosting the file. * This property is available when message_type is FILE.
     * @type boolean
     * @memberof BotApisendABotMessage
     */
    requireAuth?: boolean
    /**
     * * This property is available when message_type is FILE.
     * @type string
     * @memberof BotApisendABotMessage
     */
    mentionType?: string
    /**
     * * This property is available when message_type is FILE.
     * @type Array&lt;string&gt;
     * @memberof BotApisendABotMessage
     */
    mentionedUserIds?: Array<string>
    /**
     * * This property is available when message_type is FILE.
     * @type boolean
     * @memberof BotApisendABotMessage
     */
    isSilent?: boolean
    /**
     * 
     * @type Array&lt;SendbirdSortedMetaarrayInner&gt;
     * @memberof BotApisendABotMessage
     */
    sortedMetaarray?: Array<SendbirdSortedMetaarrayInner>
    /**
     * * This property is available when message_type is FILE.
     * @type string
     * @memberof BotApisendABotMessage
     */
    apnsBundleId?: string
    /**
     * * This property is available when message_type is FILE.
     * @type any
     * @memberof BotApisendABotMessage
     */
    appleCriticalAlertOptions?: any
    /**
     * * This property is available when message_type is FILE.
     * @type string
     * @memberof BotApisendABotMessage
     */
    sound?: string
    /**
     * * This property is available when message_type is FILE.
     * @type number
     * @memberof BotApisendABotMessage
     */
    volume?: number
    /**
     * 
     * @type number
     * @memberof BotApisendABotMessage
     */
    createdAt?: number
    /**
     * 
     * @type string
     * @memberof BotApisendABotMessage
     */
    customType?: string
    /**
     * 
     * @type string
     * @memberof BotApisendABotMessage
     */
    data?: string
    /**
     * 
     * @type string
     * @memberof BotApisendABotMessage
     */
    dedupId?: string
    /**
     * 
     * @type boolean
     * @memberof BotApisendABotMessage
     */
    markAsRead?: boolean
    /**
     * 
     * @type boolean
     * @memberof BotApisendABotMessage
     */
    sendPush?: boolean
}

export class ObjectBotApi {
    private api: ObservableBotApi

    public constructor(configuration: Configuration, requestFactory?: BotApiRequestFactory, responseProcessor?: BotApiResponseProcessor) {
        this.api = new ObservableBotApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a bot  Creates a new bot within an application. Creating a bot is similar to creating a normal user, except a callback URL should be specified for a bot to receive events.  > **Note**: The bot must first [join a group channel](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels) to interact with users. In group channels, you can also invite a bot through the [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) action.      [https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot](https://sendbird.com/docs/chat/platform-api/v3/bot/creating-a-bot/create-a-bot#1-create-a-bot)
     * Create a bot
     * @param param the request object
     */
    public createABot(param: BotApiCreateABotRequest = {}, options?: Configuration): Promise<CreateABotResponse> {
        return this.api.createABot(param.apiToken, param.createABotRequest,  options).toPromise();
    }

    /**
     * ## Join channels  Makes a bot join one or more group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/join-channels#1-join-channels)
     * Join channels
     * @param param the request object
     */
    public joinChannels(param: BotApiJoinChannelsRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.joinChannels(param.botUserid, param.apiToken, param.joinChannelsRequest,  options).toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave a specific channel  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving a specific channel
     * @param param the request object
     */
    public leaveAGroupChannel(param: BotApiLeaveAGroupChannelRequest, options?: Configuration): Promise<any> {
        return this.api.leaveAGroupChannel(param.channelUrl, param.botUserid, param.apiToken,  options).toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave all group channels.  [https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels](https://sendbird.com/docs/chat/platform-api/v3/bot/managing-a-bot/leave-channels#1-leave-channels)
     * Leave channels - When leaving all channels
     * @param param the request object
     */
    public leaveGroupChannels(param: BotApiLeaveGroupChannelsRequest, options?: Configuration): Promise<any> {
        return this.api.leaveGroupChannels(param.botUserid, param.apiToken,  options).toPromise();
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/platform-api/v3/bot/listing-bots/list-bots#1-list-bots
     * List bots
     * @param param the request object
     */
    public listBots(param: BotApiListBotsRequest = {}, options?: Configuration): Promise<ListBotsResponse> {
        return this.api.listBots(param.token, param.limit, param.apiToken,  options).toPromise();
    }

    /**
     * ## Send a bot message  Sends a bot message to a group channel.  [https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message](https://sendbird.com/docs/chat/platform-api/v3/bot/sending-a-bot-message/send-a-bot-message#1-send-a-bot-message)  `bot_userid`   Type: string   Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param param the request object
     */
    public sendABotMessage(param: BotApiSendABotMessageRequest, options?: Configuration): Promise<SendABotMessageResponse> {
        return this.api.sendABotMessage(param.botUserid, param.messageType, param.channelUrl, param.apiToken, param.message, param.mentioned, param.extendedMessagePayload, param.file, param.requireAuth, param.mentionType, param.mentionedUserIds, param.isSilent, param.sortedMetaarray, param.apnsBundleId, param.appleCriticalAlertOptions, param.sound, param.volume, param.createdAt, param.customType, param.data, param.dedupId, param.markAsRead, param.sendPush,  options).toPromise();
    }

}

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

export interface GroupChannelApiCancelTheRegistrationOfOperatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApicancelTheRegistrationOfOperators
     */
    channelUrl: string
    /**
     * Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2.
     * @type string
     * @memberof GroupChannelApicancelTheRegistrationOfOperators
     */
    operatorIds: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApicancelTheRegistrationOfOperators
     */
    deleteAll?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApicancelTheRegistrationOfOperators
     */
    apiToken?: string
}

export interface GroupChannelApiCheckIfMemberRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApicheckIfMember
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApicheckIfMember
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApicheckIfMember
     */
    apiToken?: string
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
    userId?: string
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

export interface GroupChannelApiLeaveAChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApileaveAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApileaveAChannel
     */
    apiToken?: string
    /**
     * 
     * @type LeaveAChannelRequest
     * @memberof GroupChannelApileaveAChannel
     */
    leaveAChannelRequest?: LeaveAChannelRequest
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
}

export interface GroupChannelApiListMembersRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApilistMembers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApilistMembers
     */
    token?: string
    /**
     * Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @type number
     * @memberof GroupChannelApilistMembers
     */
    limit?: number
    /**
     * Specifies the unique ID of a user. If &#x60;user_id&#x60; is provided, the response will include two additional boolean properties about each user in the members list. - &#x60;is_blocking_me&#x60;: Indicates whether the listed user is blocking the user specified in the user_id parameter. - &#x60;is_blocked_by_me&#x60;: Indicates whether the listed user is blocked by the user specified in the user_id parameter.
     * @type string
     * @memberof GroupChannelApilistMembers
     */
    userId?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistMembers
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistMembers
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApilistMembers
     */
    showMemberIsMuted?: boolean
    /**
     * Specifies the method to sort a list of results. Acceptable values are the following: - &#x60;member_nickname_alphabetical&#x60; (default): sorts by the member nicknames in alphabetical order. - &#x60;operator_then_member_alphabetical&#x60;: sorts by the operational role and member nickname in alphabetical order where channel operators are listed before channel members.
     * @type &#39;member_nickname_alphabetical&#39; | &#39;operator_then_member_alphabetical&#39;
     * @memberof GroupChannelApilistMembers
     */
    order?: 'member_nickname_alphabetical' | 'operator_then_member_alphabetical'
    /**
     * Restricts the search scope to only retrieve operators or non-operator members of the channel. Acceptable values are the following: - &#x60;all&#x60; (default): no filter is applied to the list. - &#x60;operator&#x60;: only channel operators are retrieved. - &#x60;nonoperator&#x60;: all channel members, except channel operators, are retrieved.
     * @type &#39;all&#39; | &#39;operator&#39; | &#39;nonoperator&#39;
     * @memberof GroupChannelApilistMembers
     */
    operatorFilter?: 'all' | 'operator' | 'nonoperator'
    /**
     * Restricts the search scope to retrieve members based on if they have accepted an invitation or if they were invited by a friend. Acceptable values are &#x60;invited_only&#x60;, &#x60;joined_only&#x60;, &#x60;invited_by_friend&#x60;, &#x60;invited_by_non_friend&#x60;, and &#x60;all&#x60;. (Default: &#x60;all&#x60;)
     * @type &#39;all&#39; | &#39;invited_only&#39; | &#39;joined_only&#39; | &#39;invited_by_friend&#39; | &#39;invited_by_non_friend&#39;
     * @memberof GroupChannelApilistMembers
     */
    memberStateFilter?: 'all' | 'invited_only' | 'joined_only' | 'invited_by_friend' | 'invited_by_non_friend'
    /**
     * Restricts the search scope to retrieve members who are muted or unmuted in the channel. Acceptable values are &#x60;all&#x60;, &#x60;muted&#x60;, and &#x60;unmuted&#x60;. (Default: &#x60;all&#x60;)
     * @type &#39;all&#39; | &#39;muted&#39; | &#39;unmuted&#39;
     * @memberof GroupChannelApilistMembers
     */
    mutedMemberFilter?: 'all' | 'muted' | 'unmuted'
    /**
     * Restricts the search scope to retrieve members who are activated or deactivated in the channel. Acceptable values are &#x60;all&#x60;, &#x60;activated&#x60;, and &#x60;deactivated&#x60;. (default: &#x60;activated&#x60;)
     * @type &#39;activated&#39; | &#39;deactivated&#39;
     * @memberof GroupChannelApilistMembers
     */
    memberActiveModeFilter?: 'activated' | 'deactivated'
    /**
     * Searches for members whose nicknames start with the specified value. Urlencoding the value is recommended.
     * @type string
     * @memberof GroupChannelApilistMembers
     */
    nicknameStartswith?: string
    /**
     * Determines whether to include information about the push preference of each member, such as &#x60;push_enabled&#x60;, &#x60;push_trigger_option&#x60;, and &#x60;do_not_disturb&#x60;. (Default: &#x60;false&#x60;)
     * @type boolean
     * @memberof GroupChannelApilistMembers
     */
    includePushPreference?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApilistMembers
     */
    apiToken?: string
}

export interface GroupChannelApiListOperatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApilistOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApilistOperators
     */
    token?: string
    /**
     * Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @type number
     * @memberof GroupChannelApilistOperators
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof GroupChannelApilistOperators
     */
    apiToken?: string
}

export interface GroupChannelApiRegisterOperatorsToAGroupChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiregisterOperatorsToAGroupChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApiregisterOperatorsToAGroupChannel
     */
    apiToken?: string
    /**
     * 
     * @type RegisterOperatorsToAGroupChannelRequest
     * @memberof GroupChannelApiregisterOperatorsToAGroupChannel
     */
    registerOperatorsToAGroupChannelRequest?: RegisterOperatorsToAGroupChannelRequest
}

export interface GroupChannelApiResetChatHistoryRequest {
    /**
     * (Required) 
     * @type string
     * @memberof GroupChannelApiresetChatHistory
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApiresetChatHistory
     */
    apiToken?: string
    /**
     * 
     * @type ResetChatHistoryRequest
     * @memberof GroupChannelApiresetChatHistory
     */
    resetChatHistoryRequest?: ResetChatHistoryRequest
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
     * @type StartTypingIndicatorsRequest
     * @memberof GroupChannelApistopTypingIndicators
     */
    startTypingIndicatorsRequest?: StartTypingIndicatorsRequest
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
    userId: string
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
     * ## Unregister operators from a group channel  You can unregister operators in a group channel but keep them in the channel as members using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-a-group-channel#1-unregister-operators-from-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param param the request object
     */
    public cancelTheRegistrationOfOperators(param: GroupChannelApiCancelTheRegistrationOfOperatorsRequest, options?: Configuration): Promise<any> {
        return this.api.cancelTheRegistrationOfOperators(param.channelUrl, param.operatorIds, param.deleteAll, param.apiToken,  options).toPromise();
    }

    /**
     * ## Check if user is a member  Checks if a user is a member of a group channel.  > **Note**: See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.      [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member)
     * Check if member
     * @param param the request object
     */
    public checkIfMember(param: GroupChannelApiCheckIfMemberRequest, options?: Configuration): Promise<CheckIfMemberResponse> {
        return this.api.checkIfMember(param.channelUrl, param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel
     * Create a group channel
     * @param param the request object
     */
    public createAGroupChannel(param: GroupChannelApiCreateAGroupChannelRequest = {}, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
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
    public getAGroupChannel(param: GroupChannelApiGetAGroupChannelRequest, options?: Configuration): Promise<GetAGroupChannelResponse> {
        return this.api.getAGroupChannel(param.channelUrl, param.showDeliveryReceipt, param.showReadReceipt, param.showMember, param.memberActiveMode, param.userId, param.apiToken,  options).toPromise();
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
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param param the request object
     */
    public leaveAChannel(param: GroupChannelApiLeaveAChannelRequest, options?: Configuration): Promise<any> {
        return this.api.leaveAChannel(param.channelUrl, param.apiToken, param.leaveAChannelRequest,  options).toPromise();
    }

    /**
     * ## List group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you want to retrieve a list of group channels that a specific user has joined, use the [list group channels by user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user) action under the User section.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels#1-list-group-channels
     * List channels
     * @param param the request object
     */
    public listChannels(param: GroupChannelApiListChannelsRequest, options?: Configuration): Promise<GroupChatListChannelsResponse> {
        return this.api.listChannels(param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage,  options).toPromise();
    }

    /**
     * ## List members  Retrieves a list of members of a group channel.  > **Note**: See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.      [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/list-members-of-a-group-channel#1-list-members-of-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/list-members-of-a-group-channel#1-list-members-of-a-group-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of members of.
     * List members
     * @param param the request object
     */
    public listMembers(param: GroupChannelApiListMembersRequest, options?: Configuration): Promise<GroupChannelListMembersResponse> {
        return this.api.listMembers(param.channelUrl, param.token, param.limit, param.userId, param.showDeliveryReceipt, param.showReadReceipt, param.showMemberIsMuted, param.order, param.operatorFilter, param.memberStateFilter, param.mutedMemberFilter, param.memberActiveModeFilter, param.nicknameStartswith, param.includePushPreference, param.apiToken,  options).toPromise();
    }

    /**
     * ## List operators  You can retrieve a list of operators of a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-a-group-channel#1-list-operators-of-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param param the request object
     */
    public listOperators(param: GroupChannelApiListOperatorsRequest, options?: Configuration): Promise<ListOperatorsResponse> {
        return this.api.listOperators(param.channelUrl, param.token, param.limit, param.apiToken,  options).toPromise();
    }

    /**
     * ## Register operators to a group channel  You can register one or more operators to a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-a-group-channel#1-register-operators-to-a-group-channel
     * Register operators to a group channel
     * @param param the request object
     */
    public registerOperatorsToAGroupChannel(param: GroupChannelApiRegisterOperatorsToAGroupChannelRequest, options?: Configuration): Promise<any> {
        return this.api.registerOperatorsToAGroupChannel(param.channelUrl, param.apiToken, param.registerOperatorsToAGroupChannelRequest,  options).toPromise();
    }

    /**
     * ## Reset chat history  This action resets the properties related to a specific user's chat history in a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel), clearing existing messages in a channel from only the specified user's end. Because this action doesn't delete messages from the Sendbird database, other members in the channel can still retrieve and see the messages.  This action clears the messages for the specified user by updating the `last_message` and `read_receipt` properties of the [group channel resource](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-list-of-properties-for-group-channels) in addition to other internally managed data such as the count of a user's unread messages.  Using the `reset_all` property, you can also reset the properties related to the chat history of all members in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/reset-chat-history#1-reset-chat-history
     * Reset chat history
     * @param param the request object
     */
    public resetChatHistory(param: GroupChannelApiResetChatHistoryRequest, options?: Configuration): Promise<ResetChatHistoryResponse> {
        return this.api.resetChatHistory(param.channelUrl, param.apiToken, param.resetChatHistoryRequest,  options).toPromise();
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
        return this.api.stopTypingIndicators(param.channelUrl, param.apiToken, param.startTypingIndicatorsRequest,  options).toPromise();
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

import { ObservableMessageApi } from "./ObservableAPI";
import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";

export interface MessageApiAddExtraDataToAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApiaddExtraDataToAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiaddExtraDataToAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiaddExtraDataToAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessageApiaddExtraDataToAMessage
     */
    apiToken?: string
    /**
     * 
     * @type AddExtraDataToAMessageRequest
     * @memberof MessageApiaddExtraDataToAMessage
     */
    addExtraDataToAMessageRequest?: AddExtraDataToAMessageRequest
}

export interface MessageApiDeleteAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApideleteAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApideleteAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApideleteAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessageApideleteAMessage
     */
    apiToken?: string
}

export interface MessageApiGetAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApigetAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApigetAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApigetAMessage
     */
    messageId: string
    /**
     * 
     * @type boolean
     * @memberof MessageApigetAMessage
     */
    includeReactions?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApigetAMessage
     */
    includeThreadInfo?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApigetAMessage
     */
    includeParentMessageInfo?: boolean
    /**
     * Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @type boolean
     * @memberof MessageApigetAMessage
     */
    includePollDetails?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApigetAMessage
     */
    withSortedMetaArray?: boolean
    /**
     * 
     * @type string
     * @memberof MessageApigetAMessage
     */
    apiToken?: string
}

export interface MessageApiGetTotalNumberOfMessagesInAChannelRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApigetTotalNumberOfMessagesInAChannel
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApigetTotalNumberOfMessagesInAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessageApigetTotalNumberOfMessagesInAChannel
     */
    apiToken?: string
}

export interface MessageApiListMessagesRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApilistMessages
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApilistMessages
     */
    channelUrl: string
    /**
     * Specifies the timestamp to be the reference point of the query in Unix milliseconds. Either this or the message_id parameter below should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_ts and the default value for both prev_limit and next_limit is 15.
     * @type number
     * @memberof MessageApilistMessages
     */
    messageTs: number
    /**
     * Specifies the unique ID of the message to be the reference point of the query. Either this or the message_ts parameter above should be specified in your query URL to retrieve a list. It fetches messages that were sent prior to and after the specified message_id and the default value for both prev_limit and next_limit is 15.
     * @type number
     * @memberof MessageApilistMessages
     */
    messageId: number
    /**
     * Specifies the number of previously sent messages to retrieve before message_ts. For example, if message_ts&#x3D;1484202848298, then prev_limit&#x3D;50 returns 50 messages sent by 1484202848297 (message_ts - 1). Acceptable values range from 0 to 200. (Default: 15)
     * @type number
     * @memberof MessageApilistMessages
     */
    prevLimit?: number
    /**
     * Specifies the number of sent messages to retrieve after message_ts. For example, if message_ts&#x3D;1484202848298, then next_limit&#x3D;50 returns 50 messages sent from 1484202848299 (message_ts + 1). Acceptable values range from 0 to 200. (Default: 15)
     * @type number
     * @memberof MessageApilistMessages
     */
    nextLimit?: number
    /**
     * Determines whether to include messages sent exactly on the specified message_ts in the results. (Default: true)
     * @type boolean
     * @memberof MessageApilistMessages
     */
    include?: boolean
    /**
     * Determines whether to sort the results in reverse chronological order. If set to true, messages appear in reverse chronological order where the newest comes first and the oldest last. (Default: false)
     * @type boolean
     * @memberof MessageApilistMessages
     */
    reverse?: boolean
    /**
     * Restricts the search scope to only retrieve messages sent by the user with the specified ID.
     * @type string
     * @memberof MessageApilistMessages
     */
    senderId?: string
    /**
     * Restricts the search scope to only retrieve messages sent by one or more users with the specified IDs listed in a comma-separated string.
     * @type string
     * @memberof MessageApilistMessages
     */
    senderIds?: string
    /**
     * 
     * @type &#39;all&#39; | &#39;operator&#39; | &#39;nonoperator&#39;
     * @memberof MessageApilistMessages
     */
    operatorFilter?: 'all' | 'operator' | 'nonoperator'
    /**
     * Specifies a comma-separated string of one or more custom message types to retrieve. The value set to this parameter can serve as a filter as follows: - A string of specific custom types: Messages with the corresponding custom types are returned. - Empty like &amp;custom_types&#x3D;&amp;...: Messages whose custom_type property is empty or has a value of null are returned. - An asterisk (\\*) (default): All messages are returned regardless of their custom_type.
     * @type string
     * @memberof MessageApilistMessages
     */
    customTypes?: string
    /**
     * 
     * @type &#39;MESG&#39; | &#39;FILE&#39; | &#39;ADMM&#39;
     * @memberof MessageApilistMessages
     */
    messageType?: 'MESG' | 'FILE' | 'ADMM'
    /**
     * 
     * @type boolean
     * @memberof MessageApilistMessages
     */
    includingRemoved?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApilistMessages
     */
    includeReactions?: boolean
    /**
     * One of following values: NONE, ALL, ONLY_REPLY_TO_CHANNEL
     * @type &#39;NONE&#39; | &#39;ALL&#39; | &#39;ONLY_REPLY_TO_CHANNEL&#39;
     * @memberof MessageApilistMessages
     */
    includeReplyType?: 'NONE' | 'ALL' | 'ONLY_REPLY_TO_CHANNEL'
    /**
     * 
     * @type boolean
     * @memberof MessageApilistMessages
     */
    includeParentMessageInfo?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApilistMessages
     */
    includeThreadInfo?: boolean
    /**
     * Determines whether to include all properties of a poll resource with a full list of options in the results. If set to false, a selection of poll resource properties consisting of id, title, close_at, created_at, updated_at, status, and message_id are returned. (Default: false) * To use this property, the polls feature should be turned on in Settings &gt; Chat &gt; Features on Sendbird Dashboard.
     * @type boolean
     * @memberof MessageApilistMessages
     */
    includePollDetails?: boolean
    /**
     * Determines whether to include the sorted_metaarray property in the response. (Default: false)
     * @type boolean
     * @memberof MessageApilistMessages
     */
    withSortedMetaArray?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessageApilistMessages
     */
    showSubchannelMessagesOnly?: boolean
    /**
     * 
     * @type string
     * @memberof MessageApilistMessages
     */
    userId?: string
    /**
     * 
     * @type string
     * @memberof MessageApilistMessages
     */
    apiToken?: string
}

export interface MessageApiMarkChannelMessagesAsReadRequest {
    /**
     * (Required) 
     * @type string
     * @memberof MessageApimarkChannelMessagesAsRead
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessageApimarkChannelMessagesAsRead
     */
    apiToken?: string
    /**
     * 
     * @type MarkChannelMessagesAsReadRequest
     * @memberof MessageApimarkChannelMessagesAsRead
     */
    markChannelMessagesAsReadRequest?: MarkChannelMessagesAsReadRequest
}

export interface MessageApiMigrateMessagesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof MessageApimigrateMessages
     */
    targetChannelUrl: string
    /**
     * 
     * @type string
     * @memberof MessageApimigrateMessages
     */
    apiToken?: string
    /**
     * 
     * @type MigrateMessagesRequest
     * @memberof MessageApimigrateMessages
     */
    migrateMessagesRequest?: MigrateMessagesRequest
}

export interface MessageApiRemoveExtraDataFromAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApiremoveExtraDataFromAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiremoveExtraDataFromAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiremoveExtraDataFromAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessageApiremoveExtraDataFromAMessage
     */
    keys?: string
    /**
     * 
     * @type string
     * @memberof MessageApiremoveExtraDataFromAMessage
     */
    apiToken?: string
}

export interface MessageApiSendAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApisendAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApisendAMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessageApisendAMessage
     */
    apiToken?: string
    /**
     * 
     * @type SendAMessageRequest
     * @memberof MessageApisendAMessage
     */
    sendAMessageRequest?: SendAMessageRequest
}

export interface MessageApiUpdateAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApiupdateAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiupdateAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiupdateAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessageApiupdateAMessage
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAMessageRequest
     * @memberof MessageApiupdateAMessage
     */
    updateAMessageRequest?: UpdateAMessageRequest
}

export interface MessageApiUpdateExtraDataInAMessageRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MessageApiupdateExtraDataInAMessage
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiupdateExtraDataInAMessage
     */
    channelUrl: string
    /**
     * (Required) 
     * @type string
     * @memberof MessageApiupdateExtraDataInAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessageApiupdateExtraDataInAMessage
     */
    apiToken?: string
    /**
     * 
     * @type UpdateExtraDataInAMessageRequest
     * @memberof MessageApiupdateExtraDataInAMessage
     */
    updateExtraDataInAMessageRequest?: UpdateExtraDataInAMessageRequest
}

export class ObjectMessageApi {
    private api: ObservableMessageApi

    public constructor(configuration: Configuration, requestFactory?: MessageApiRequestFactory, responseProcessor?: MessageApiResponseProcessor) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-add-metadata#1-add-metadata ----------------------------
     * Add extra data to a message
     * @param param the request object
     */
    public addExtraDataToAMessage(param: MessageApiAddExtraDataToAMessageRequest, options?: Configuration): Promise<AddExtraDataToAMessageResponse> {
        return this.api.addExtraDataToAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.addExtraDataToAMessageRequest,  options).toPromise();
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/delete-a-message#1-delete-a-message ----------------------------
     * Delete a message
     * @param param the request object
     */
    public deleteAMessage(param: MessageApiDeleteAMessageRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get a message  Retrieves information on a specific message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-a-message#1-get-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * Get a message
     * @param param the request object
     */
    public getAMessage(param: MessageApiGetAMessageRequest, options?: Configuration): Promise<SendbirdMessageResponse> {
        return this.api.getAMessage(param.channelType, param.channelUrl, param.messageId, param.includeReactions, param.includeThreadInfo, param.includeParentMessageInfo, param.includePollDetails, param.withSortedMetaArray, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get total number of messages in a channel  Retrieves the total number of messages in a specific channel.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/get-total-number-of-messages-in-a-channel#1-get-total-number-of-messages-in-a-channel ----------------------------
     * Get total number of messages in a channel
     * @param param the request object
     */
    public getTotalNumberOfMessagesInAChannel(param: MessageApiGetTotalNumberOfMessagesInAChannelRequest, options?: Configuration): Promise<GetTotalNumberOfMessagesInAChannelResponse> {
        return this.api.getTotalNumberOfMessagesInAChannel(param.channelType, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## List messages  You can retrieve a list of past messages of a specific channel with this API.  By default, this action returns a list of messages in the order they were created. Replies in threaded messages are also listed in the chronological order of their creation like other messages, not grouped with their parent messages.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/list-messages#1-list-messages  `channel_type`   Type: string   Description: Specifies the type of the channel. Either open_channels or group_channels.   `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param param the request object
     */
    public listMessages(param: MessageApiListMessagesRequest, options?: Configuration): Promise<ListMessagesResponse> {
        return this.api.listMessages(param.channelType, param.channelUrl, param.messageTs, param.messageId, param.prevLimit, param.nextLimit, param.include, param.reverse, param.senderId, param.senderIds, param.operatorFilter, param.customTypes, param.messageType, param.includingRemoved, param.includeReactions, param.includeReplyType, param.includeParentMessageInfo, param.includeThreadInfo, param.includePollDetails, param.withSortedMetaArray, param.showSubchannelMessagesOnly, param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a specific user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/message/read-receipts/mark-all-messages-as-read-message#1-mark-all-messages-as-read
     * Mark all messages as read
     * @param param the request object
     */
    public markChannelMessagesAsRead(param: MessageApiMarkChannelMessagesAsReadRequest, options?: Configuration): Promise<any> {
        return this.api.markChannelMessagesAsRead(param.channelUrl, param.apiToken, param.markChannelMessagesAsReadRequest,  options).toPromise();
    }

    /**
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).      There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user).      2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically.      3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.       https://sendbird.com/docs/chat/platform-api/v3/message/migration/migrate-messages#1-migrate-messages
     * Migrate messages
     * @param param the request object
     */
    public migrateMessages(param: MessageApiMigrateMessagesRequest, options?: Configuration): Promise<any> {
        return this.api.migrateMessages(param.targetChannelUrl, param.apiToken, param.migrateMessagesRequest,  options).toPromise();
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-remove-metadata#1-remove-metadata ----------------------------
     * Remove extra data from a message
     * @param param the request object
     */
    public removeExtraDataFromAMessage(param: MessageApiRemoveExtraDataFromAMessageRequest, options?: Configuration): Promise<any> {
        return this.api.removeExtraDataFromAMessage(param.channelType, param.channelUrl, param.messageId, param.keys, param.apiToken,  options).toPromise();
    }

    /**
     * ## Send a message  You can use this action to send a text message, a file message, or an admin message to a specific channel. Sendbird Chat SDKs and the platform API allows you to upload any type of files in messages to the Sendbird server. See [Message Overview](https://sendbird.com/docs/chat/platform-api/v3/message/message-overview) for more information on each message type. Messages are sent between client devices running the Sendbird Chat SDK or UIKit as well as programmatically from businesses to their customers. For instance, a delivery app can automatically send a message like \"Arriving in one minute!\" on behalf of a delivery driver.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message#1-send-a-message ----------------------------
     * Send a message
     * @param param the request object
     */
    public sendAMessage(param: MessageApiSendAMessageRequest, options?: Configuration): Promise<SendbirdMessageResponse> {
        return this.api.sendAMessage(param.channelType, param.channelUrl, param.apiToken, param.sendAMessageRequest,  options).toPromise();
    }

    /**
     * ## Update a message  Updates specific information on a message.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/update-a-message#1-update-a-message ----------------------------
     * Update a message
     * @param param the request object
     */
    public updateAMessage(param: MessageApiUpdateAMessageRequest, options?: Configuration): Promise<SendbirdMessageResponse> {
        return this.api.updateAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateAMessageRequest,  options).toPromise();
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/message-update-metadata#1-update-metadata ----------------------------
     * Update extra data in a message
     * @param param the request object
     */
    public updateExtraDataInAMessage(param: MessageApiUpdateExtraDataInAMessageRequest, options?: Configuration): Promise<UpdateExtraDataInAMessageResponse> {
        return this.api.updateExtraDataInAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateExtraDataInAMessageRequest,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";

export interface MetadataApiCreateAChannelMetadataRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MetadataApicreateAChannelMetadata
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MetadataApicreateAChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MetadataApicreateAChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type CreateAChannelMetadataRequest
     * @memberof MetadataApicreateAChannelMetadata
     */
    createAChannelMetadataRequest?: CreateAChannelMetadataRequest
}

export interface MetadataApiDeleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadataRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MetadataApideleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MetadataApideleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MetadataApideleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata
     */
    key?: string
    /**
     * 
     * @type string
     * @memberof MetadataApideleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata
     */
    apiToken?: string
}

export interface MetadataApiUpdateAChannelMetadataRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MetadataApiupdateAChannelMetadata
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MetadataApiupdateAChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateAChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAChannelMetadataRequest
     * @memberof MetadataApiupdateAChannelMetadata
     */
    updateAChannelMetadataRequest?: UpdateAChannelMetadataRequest
}

export interface MetadataApiViewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadataRequest {
    /**
     * (Required) 
     * @type &#39;open_channels&#39; | &#39;group_channels&#39;
     * @memberof MetadataApiviewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     */
    channelType: 'open_channels' | 'group_channels'
    /**
     * (Required) 
     * @type string
     * @memberof MetadataApiviewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MetadataApiviewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     */
    key?: string
    /**
     * In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended.
     * @type string
     * @memberof MetadataApiviewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     */
    keys?: string
    /**
     * 
     * @type string
     * @memberof MetadataApiviewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     */
    apiToken?: string
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-create-metadata#1-create-metadata ----------------------------
     * Create a channel metadata
     * @param param the request object
     */
    public createAChannelMetadata(param: MetadataApiCreateAChannelMetadataRequest, options?: Configuration): Promise<CreateAChannelMetadataResponse> {
        return this.api.createAChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.createAChannelMetadataRequest,  options).toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-delete-metadata#1-delete-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param param the request object
     */
    public deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(param: MetadataApiDeleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadataRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(param.channelType, param.channelUrl, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-update-metadata#1-update-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param param the request object
     */
    public updateAChannelMetadata(param: MetadataApiUpdateAChannelMetadataRequest, options?: Configuration): Promise<any> {
        return this.api.updateAChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.updateAChannelMetadataRequest,  options).toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-get-metadata#1-get-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param param the request object
     */
    public viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(param: MetadataApiViewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadataRequest, options?: Configuration): Promise<any> {
        return this.api.viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(param.channelType, param.channelUrl, param.key, param.keys, param.apiToken,  options).toPromise();
    }

}

import { ObservableModerationApi } from "./ObservableAPI";
import { ModerationApiRequestFactory, ModerationApiResponseProcessor} from "../apis/ModerationApi";

export interface ModerationApiBlockAUserRequest {
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApiblockAUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof ModerationApiblockAUser
     */
    apiToken?: string
    /**
     * 
     * @type BlockAUserRequest
     * @memberof ModerationApiblockAUser
     */
    blockAUserRequest?: BlockAUserRequest
}

export interface ModerationApiFreezeAGroupChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApifreezeAGroupChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ModerationApifreezeAGroupChannel
     */
    apiToken?: string
    /**
     * 
     * @type FreezeAGroupChannelRequest
     * @memberof ModerationApifreezeAGroupChannel
     */
    freezeAGroupChannelRequest?: FreezeAGroupChannelRequest
}

export interface ModerationApiFreezeAnOpenChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApifreezeAnOpenChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ModerationApifreezeAnOpenChannel
     */
    apiToken?: string
    /**
     * 
     * @type FreezeAnOpenChannelRequest
     * @memberof ModerationApifreezeAnOpenChannel
     */
    freezeAnOpenChannelRequest?: FreezeAnOpenChannelRequest
}

export interface ModerationApiListBlockedUsersRequest {
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    userId: string
    /**
     * Specifies whether to retrieve a list of users who are blocked by the specified user or a list of users who are blocking the specified user. Acceptable values are blocked_by_me and blocking_me. The &#x60;me&#x60; in the values refers to the user specified in the parameter. (Default: blocked_by_me)
     * @type &#39;blocked_by_me&#39; | &#39;blocking_me&#39;
     * @memberof ModerationApilistBlockedUsers
     */
    list?: 'blocked_by_me' | 'blocking_me'
    /**
     * 
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ModerationApilistBlockedUsers
     */
    limit?: number
    /**
     * Specifies the user IDs of the blocked or blocking users to search for. The value should be a comma-separated string that consists of multiple URL encoded user IDs.
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    userIds?: string
    /**
     * 
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    metadatakey?: string
    /**
     * 
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    metadatavaluesIn?: string
    /**
     * 
     * @type string
     * @memberof ModerationApilistBlockedUsers
     */
    apiToken?: string
}

export interface ModerationApiUnblockAUserRequest {
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApiunblockAUser
     */
    userId: string
    /**
     * (Required) 
     * @type string
     * @memberof ModerationApiunblockAUser
     */
    targetId: string
    /**
     * 
     * @type string
     * @memberof ModerationApiunblockAUser
     */
    apiToken?: string
}

export class ObjectModerationApi {
    private api: ObservableModerationApi

    public constructor(configuration: Configuration, requestFactory?: ModerationApiRequestFactory, responseProcessor?: ModerationApiResponseProcessor) {
        this.api = new ObservableModerationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Block a user  A user can block another user if the user doesn't wish to receive any messages or notifications from the blocked user in a 1-to-1 group channel. In a 1-to-N group channel, the user can still receive messages from the blocked user, but this depends on the UI settings of the chat view. In any case, notifications from the blocked user won't be delivered to the 1-to-N group channel. You can choose whether or not the user can view [which users are blocked](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users) in the channel UI.  Sendbird application provides two blocking options: include or exclude blocked users when sending invitations, and turn on or off notifications from blocked users. [Explicit and classic block modes](https://sendbird.com/docs/chat/platform-api/v3/deprecated#2-explicit-and-classic-block-modes) have been deprecated and are only supported for customers who started using them before they were deprecated.  - **Include or exclude blocked users when sending invitations**: Determines whether or not to automatically filter out blocked users when a user invites a group of users to a new group channel. By default, blocked users are included when sending invitations. The value of this option can be changed by Sendbird if your Sendbird application isn't integrated to the client app. If you want to change the value, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      - **Turn on or off notifications from blocked users**: Determines whether or not to receive message notifications from the blocked user in a specific 1-to-N group channel where they are both members. By default, a user doesn't receive notifications from blocked users. The value of this option can be set individually per channel. If you want to use this option, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).       > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      The following tables explain what happens to a user's chat experience when the user blocks another user in a 1-to-1 or 1-to-N group channel. In the case of a 1-to-1 group channel, the block mode is only maintained with the original members. If other than the original members are added, the rules for 1-to-N group channel begin to apply.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users#1-block-users)
     * Block a user
     * @param param the request object
     */
    public blockAUser(param: ModerationApiBlockAUserRequest, options?: Configuration): Promise<BlockAUserResponse> {
        return this.api.blockAUser(param.userId, param.apiToken, param.blockAUserRequest,  options).toPromise();
    }

    /**
     * ## Freeze a group channel  Freezes or unfreezes a group channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel)
     * Freeze a group channel
     * @param param the request object
     */
    public freezeAGroupChannel(param: ModerationApiFreezeAGroupChannelRequest, options?: Configuration): Promise<SendbirdGroupChannelDetail> {
        return this.api.freezeAGroupChannel(param.channelUrl, param.apiToken, param.freezeAGroupChannelRequest,  options).toPromise();
    }

    /**
     * ## Freeze an open channel  Freezes or unfreezes an open channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-an-open-channel#1-freeze-an-open-channel)
     * Freeze an open channel
     * @param param the request object
     */
    public freezeAnOpenChannel(param: ModerationApiFreezeAnOpenChannelRequest, options?: Configuration): Promise<SendbirdOpenChannel> {
        return this.api.freezeAnOpenChannel(param.channelUrl, param.apiToken, param.freezeAnOpenChannelRequest,  options).toPromise();
    }

    /**
     * ## List blocked by and blocking users  This action retrieves a list of users who are either blocked by a specific user or a list of users who are blocking a specific user.  [https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users](https://sendbird.com/docs/chat/platform-api/v3/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users#1-list-blocked-by-and-blocking-users)  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param param the request object
     */
    public listBlockedUsers(param: ModerationApiListBlockedUsersRequest, options?: Configuration): Promise<ListBlockedUsersResponse> {
        return this.api.listBlockedUsers(param.userId, param.list, param.token, param.limit, param.userIds, param.metadatakey, param.metadatavaluesIn, param.apiToken,  options).toPromise();
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/unblock-a-user#1-unblock-a-user
     * Unblock a user
     * @param param the request object
     */
    public unblockAUser(param: ModerationApiUnblockAUserRequest, options?: Configuration): Promise<any> {
        return this.api.unblockAUser(param.userId, param.targetId, param.apiToken,  options).toPromise();
    }

}

import { ObservableOpenChannelApi } from "./ObservableAPI";
import { OpenChannelApiRequestFactory, OpenChannelApiResponseProcessor} from "../apis/OpenChannelApi";

export interface OpenChannelApiCreateAnOpenChannelRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApicreateAnOpenChannel
     */
    apiToken?: string
    /**
     * 
     * @type CreateAnOpenChannelRequest
     * @memberof OpenChannelApicreateAnOpenChannel
     */
    createAnOpenChannelRequest?: CreateAnOpenChannelRequest
}

export interface OpenChannelApiDeleteAnOpenChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApideleteAnOpenChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApideleteAnOpenChannel
     */
    apiToken?: string
}

export interface OpenChannelApiGetAnOpenChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApigetAnOpenChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApigetAnOpenChannel
     */
    apiToken?: string
    /**
     * Determines whether to include a list of operators in the response. (Default: false)
     * @type boolean
     * @memberof OpenChannelApigetAnOpenChannel
     */
    includeOperators?: boolean
}

export interface OpenChannelApiListChannelOperatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApilistChannelOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistChannelOperators
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApilistChannelOperators
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistChannelOperators
     */
    apiToken?: string
}

export interface OpenChannelApiListOpenChannelsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    token?: string
    /**
     * Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    channelUrls?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApilistOpenChannels
     */
    limit?: number
    /**
     * Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types&#x3D;urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type.
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    nameContains?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    urlContains?: string
    /**
     * Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true)
     * @type boolean
     * @memberof OpenChannelApilistOpenChannels
     */
    showFrozen?: boolean
    /**
     * Determines whether to include channel metadata in the response. (Default: false)
     * @type boolean
     * @memberof OpenChannelApilistOpenChannels
     */
    showMetadata?: boolean
    /**
     * 
     * @type string
     * @memberof OpenChannelApilistOpenChannels
     */
    apiToken?: string
}

export interface OpenChannelApiRegisterOperatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApiregisterOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiregisterOperators
     */
    apiToken?: string
    /**
     * 
     * @type RegisterOperatorsToAGroupChannelRequest
     * @memberof OpenChannelApiregisterOperators
     */
    registerOperatorsToAGroupChannelRequest?: RegisterOperatorsToAGroupChannelRequest
}

export interface OpenChannelApiUnregisterOperatorsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApiunregisterOperators
     */
    channelUrl: string
    /**
     * Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2.
     * @type string
     * @memberof OpenChannelApiunregisterOperators
     */
    operatorIds: string
    /**
     * Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn&#39;t effective and doesn&#39;t need to be specified in the request. (Default: false)
     * @type boolean
     * @memberof OpenChannelApiunregisterOperators
     */
    deleteAll?: boolean
    /**
     * 
     * @type string
     * @memberof OpenChannelApiunregisterOperators
     */
    apiToken?: string
}

export interface OpenChannelApiUpdateAnOpenChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof OpenChannelApiupdateAnOpenChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiupdateAnOpenChannel
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAnOpenChannelRequest
     * @memberof OpenChannelApiupdateAnOpenChannel
     */
    updateAnOpenChannelRequest?: UpdateAnOpenChannelRequest
}

export class ObjectOpenChannelApi {
    private api: ObservableOpenChannelApi

    public constructor(configuration: Configuration, requestFactory?: OpenChannelApiRequestFactory, responseProcessor?: OpenChannelApiResponseProcessor) {
        this.api = new ObservableOpenChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don't need invitations to join open channels, short-lived live events like concerts or live streams that don't require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)
     * Create an open channel
     * @param param the request object
     */
    public createAnOpenChannel(param: OpenChannelApiCreateAnOpenChannelRequest = {}, options?: Configuration): Promise<SendbirdOpenChannel> {
        return this.api.createAnOpenChannel(param.apiToken, param.createAnOpenChannelRequest,  options).toPromise();
    }

    /**
     * ## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel
     * Delete an open channel
     * @param param the request object
     */
    public deleteAnOpenChannel(param: OpenChannelApiDeleteAnOpenChannelRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAnOpenChannel(param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)
     * Get an open channel
     * @param param the request object
     */
    public getAnOpenChannel(param: OpenChannelApiGetAnOpenChannelRequest, options?: Configuration): Promise<SendbirdOpenChannel> {
        return this.api.getAnOpenChannel(param.channelUrl, param.apiToken, param.includeOperators,  options).toPromise();
    }

    /**
     * ## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators of an open channel
     * @param param the request object
     */
    public listChannelOperators(param: OpenChannelApiListChannelOperatorsRequest, options?: Configuration): Promise<ListOperatorsResponse> {
        return this.api.listChannelOperators(param.channelUrl, param.token, param.limit, param.apiToken,  options).toPromise();
    }

    /**
     * ## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)
     * List open channels
     * @param param the request object
     */
    public listOpenChannels(param: OpenChannelApiListOpenChannelsRequest = {}, options?: Configuration): Promise<ListOpenChannelsResponse> {
        return this.api.listOpenChannels(param.token, param.channelUrls, param.limit, param.customTypes, param.nameContains, param.urlContains, param.showFrozen, param.showMetadata, param.apiToken,  options).toPromise();
    }

    /**
     * ## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel
     * Register operators to an open channel
     * @param param the request object
     */
    public registerOperators(param: OpenChannelApiRegisterOperatorsRequest, options?: Configuration): Promise<any> {
        return this.api.registerOperators(param.channelUrl, param.apiToken, param.registerOperatorsToAGroupChannelRequest,  options).toPromise();
    }

    /**
     * ## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * Unregister operators from an open channel
     * @param param the request object
     */
    public unregisterOperators(param: OpenChannelApiUnregisterOperatorsRequest, options?: Configuration): Promise<any> {
        return this.api.unregisterOperators(param.channelUrl, param.operatorIds, param.deleteAll, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel
     * Update an open channel
     * @param param the request object
     */
    public updateAnOpenChannel(param: OpenChannelApiUpdateAnOpenChannelRequest, options?: Configuration): Promise<SendbirdOpenChannel> {
        return this.api.updateAnOpenChannel(param.channelUrl, param.apiToken, param.updateAnOpenChannelRequest,  options).toPromise();
    }

}

import { ObservableStatisticsApi } from "./ObservableAPI";
import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor} from "../apis/StatisticsApi";

export interface StatisticsApiViewNumberOfDailyActiveUsersRequest {
    /**
     * YYYY-MM-DD
     * @type string
     * @memberof StatisticsApiviewNumberOfDailyActiveUsers
     */
    date?: string
    /**
     * 
     * @type string
     * @memberof StatisticsApiviewNumberOfDailyActiveUsers
     */
    apiToken?: string
}

export interface StatisticsApiViewNumberOfMonthlyActiveUsersRequest {
    /**
     * YYYY-MM-DD
     * @type string
     * @memberof StatisticsApiviewNumberOfMonthlyActiveUsers
     */
    date?: string
    /**
     * 
     * @type string
     * @memberof StatisticsApiviewNumberOfMonthlyActiveUsers
     */
    apiToken?: string
}

export class ObjectStatisticsApi {
    private api: ObservableStatisticsApi

    public constructor(configuration: Configuration, requestFactory?: StatisticsApiRequestFactory, responseProcessor?: StatisticsApiResponseProcessor) {
        this.api = new ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users)
     * View number of daily active users
     * @param param the request object
     */
    public viewNumberOfDailyActiveUsers(param: StatisticsApiViewNumberOfDailyActiveUsersRequest = {}, options?: Configuration): Promise<ViewNumberOfDailyActiveUsersResponse> {
        return this.api.viewNumberOfDailyActiveUsers(param.date, param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users)
     * View number of monthly active users
     * @param param the request object
     */
    public viewNumberOfMonthlyActiveUsers(param: StatisticsApiViewNumberOfMonthlyActiveUsersRequest = {}, options?: Configuration): Promise<ViewNumberOfMonthlyActiveUsersResponse> {
        return this.api.viewNumberOfMonthlyActiveUsers(param.date, param.apiToken,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiAddARegistrationOrDeviceTokenRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiaddARegistrationOrDeviceToken
     */
    userId: string
    /**
     * (Required) 
     * @type &#39;gcm&#39; | &#39;huawei&#39; | &#39;apns&#39;
     * @memberof UserApiaddARegistrationOrDeviceToken
     */
    tokenType: 'gcm' | 'huawei' | 'apns'
    /**
     * 
     * @type string
     * @memberof UserApiaddARegistrationOrDeviceToken
     */
    apiToken?: string
    /**
     * 
     * @type AddARegistrationOrDeviceTokenRequest
     * @memberof UserApiaddARegistrationOrDeviceToken
     */
    addARegistrationOrDeviceTokenRequest?: AddARegistrationOrDeviceTokenRequest
}

export interface UserApiChooseAPushNotificationContentTemplateRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApichooseAPushNotificationContentTemplate
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApichooseAPushNotificationContentTemplate
     */
    apiToken?: string
    /**
     * 
     * @type ChooseAPushNotificationContentTemplateRequest
     * @memberof UserApichooseAPushNotificationContentTemplate
     */
    chooseAPushNotificationContentTemplateRequest?: ChooseAPushNotificationContentTemplateRequest
}

export interface UserApiCreateAUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApicreateAUser
     */
    apiToken?: string
    /**
     * 
     * @type CreateAUserRequest
     * @memberof UserApicreateAUser
     */
    createAUserRequest?: CreateAUserRequest
}

export interface UserApiCreateUserTokenRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApicreateUserToken
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApicreateUserToken
     */
    apiToken?: string
    /**
     * 
     * @type CreateUserTokenRequest
     * @memberof UserApicreateUserToken
     */
    createUserTokenRequest?: CreateUserTokenRequest
}

export interface UserApiDeleteAUserRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApideleteAUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApideleteAUser
     */
    apiToken?: string
}

export interface UserApiGetChannelInvitationPreferenceRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApigetChannelInvitationPreference
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApigetChannelInvitationPreference
     */
    apiToken?: string
}

export interface UserApiLeaveMyGroupChannelsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApileaveMyGroupChannels
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApileaveMyGroupChannels
     */
    apiToken?: string
    /**
     * 
     * @type LeaveMyGroupChannelsRequest
     * @memberof UserApileaveMyGroupChannels
     */
    leaveMyGroupChannelsRequest?: LeaveMyGroupChannelsRequest
}

export interface UserApiListMyGroupChannelsRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    apiToken: string
    /**
     * Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    token?: string
    /**
     * Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @type number
     * @memberof UserApilistMyGroupChannels
     */
    limit?: number
    /**
     * 
     * @type &#39;all&#39; | &#39;distinct&#39; | &#39;nondistinct&#39;
     * @memberof UserApilistMyGroupChannels
     */
    distinctMode?: 'all' | 'distinct' | 'nondistinct'
    /**
     * 
     * @type &#39;all&#39; | &#39;private&#39; | &#39;public&#39;
     * @memberof UserApilistMyGroupChannels
     */
    publicMode?: 'all' | 'private' | 'public'
    /**
     * 
     * @type &#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;
     * @memberof UserApilistMyGroupChannels
     */
    superMode?: 'all' | 'super' | 'nonsuper'
    /**
     * Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @type number
     * @memberof UserApilistMyGroupChannels
     */
    createdAfter?: number
    /**
     * Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @type number
     * @memberof UserApilistMyGroupChannels
     */
    createdBefore?: number
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showEmpty?: boolean
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showMember?: boolean
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showMetadata?: boolean
    /**
     * 
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    showFrozen?: boolean
    /**
     * 
     * @type &#39;chronological&#39; | &#39;latest_last_message&#39; | &#39;channel_name_alphabetical&#39; | &#39;metadata_value_alphabetical&#39;
     * @memberof UserApilistMyGroupChannels
     */
    order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical'
    /**
     * Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataOrderKey?: string
    /**
     * Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    customTypes?: string
    /**
     * Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    customTypeStartswith?: string
    /**
     * Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    channelUrls?: string
    /**
     * Specifies one or more group channel names.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    name?: string
    /**
     * Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    nameContains?: string
    /**
     * Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    nameStartswith?: string
    /**
     * Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersExactlyIn?: string
    /**
     * Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersIncludeIn?: string
    /**
     * Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    queryType?: string
    /**
     * Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersNickname?: string
    /**
     * Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersNicknameContains?: string
    /**
     * Searches for group channels with members whose nicknames begin with the specified value. This parameter isn&#39;t case-sensitive. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersNicknameStartswith?: string
    /**
     * Searches for group channels where the specified query string matches the channel name or the nickname of the member. This parameter isn&#39;t case-sensitive and should be specified in conjunction with the search_fields parameter below. URL encoding the value is recommended.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    searchQuery?: string
    /**
     * Specifies a comma-separated string of one or more search fields to apply to the query, which restricts the results within the specified fields (OR search condition). Acceptable values are channel_name and member_nickname. This is effective only when the search_query parameter above is specified. (Default: channel_name, member_nickname together)
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    searchFields?: string
    /**
     * Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataKey?: string
    /**
     * Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataValues?: string
    /**
     * Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataValueStartswith?: string
    /**
     * Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterKey?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValues?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueGt?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueGte?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueLt?: string
    /**
     * Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueLte?: string
    /**
     * Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @type boolean
     * @memberof UserApilistMyGroupChannels
     */
    includeSortedMetaarrayInLastMessage?: boolean
    /**
     * Restricts the search scope to group channels that match a specific hidden_status and operating behavior
     * @type &#39;unhidden_only&#39; | &#39;hidden_only&#39; | &#39;hidden_allow_auto_unhide&#39; | &#39;hidden_prevent_auto_unhide&#39; | &#39;all&#39;
     * @memberof UserApilistMyGroupChannels
     */
    hiddenMode?: 'unhidden_only' | 'hidden_only' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide' | 'all'
    /**
     * Restricts the search scope to only retrieve group channels with one or more unread messages. This filter doesn&#39;t support Supergroup channels. Acceptable values are all and unread_message. (Default: all)
     * @type &#39;all&#39; | &#39;unread_message&#39;
     * @memberof UserApilistMyGroupChannels
     */
    unreadFilter?: 'all' | 'unread_message'
    /**
     * 
     * @type &#39;all&#39; | &#39;invited_only&#39; | &#39;joined_only&#39; | &#39;invited_by_friend&#39; | &#39;invited_by_non_friend&#39;
     * @memberof UserApilistMyGroupChannels
     */
    memberStateFilter?: 'all' | 'invited_only' | 'joined_only' | 'invited_by_friend' | 'invited_by_non_friend'
}

export interface UserApiListRegistrationOrDeviceTokensRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApilistRegistrationOrDeviceTokens
     */
    userId: string
    /**
     * (Required) 
     * @type &#39;gcm&#39; | &#39;huawei&#39; | &#39;apns&#39;
     * @memberof UserApilistRegistrationOrDeviceTokens
     */
    tokenType: 'gcm' | 'huawei' | 'apns'
    /**
     * 
     * @type string
     * @memberof UserApilistRegistrationOrDeviceTokens
     */
    apiToken?: string
}

export interface UserApiListUsersRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof UserApilistUsers
     */
    limit?: number
    /**
     * Specifies the activation status of the users in the list. Acceptable values are &#x60;activated&#x60;, &#x60;deactivated&#x60;, and &#x60;all&#x60;. (Default: &#x60;activated&#x60;)
     * @type &#39;activated&#39; | &#39;deactivated&#39; | &#39;all&#39;
     * @memberof UserApilistUsers
     */
    activeMode?: 'activated' | 'deactivated' | 'all'
    /**
     * Determines whether to include bots in the list. (Default: true)
     * @type boolean
     * @memberof UserApilistUsers
     */
    showBot?: boolean
    /**
     * Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids&#x3D;urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
     * @type string
     * @memberof UserApilistUsers
     */
    userIds?: string
    /**
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    nickname?: string
    /**
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    nicknameStartswith?: string
    /**
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    metadatakey?: string
    /**
     * Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, &#x60;?metadatavalues_in&#x3D;urlencoded_value_1, urlencoded_value_2&#x60;). This parameter should be specified in conjunction with the &#x60;metadatakey&#x60; above.
     * @type string
     * @memberof UserApilistUsers
     */
    metadatavaluesIn?: string
    /**
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    apiToken?: string
}

export interface UserApiMarkAllMessagesAsReadRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApimarkAllMessagesAsRead
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApimarkAllMessagesAsRead
     */
    apiToken?: string
    /**
     * 
     * @type MarkAllMessagesAsReadRequest
     * @memberof UserApimarkAllMessagesAsRead
     */
    markAllMessagesAsReadRequest?: MarkAllMessagesAsReadRequest
}

export interface UserApiRemoveARegistrationOrDeviceTokenRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceToken
     */
    userId: string
    /**
     * (Required) 
     * @type &#39;gcm&#39; | &#39;huawei&#39; | &#39;apns&#39;
     * @memberof UserApiremoveARegistrationOrDeviceToken
     */
    tokenType: 'gcm' | 'huawei' | 'apns'
    /**
     * (Required) 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceToken
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceToken
     */
    apiToken?: string
}

export interface UserApiRemoveARegistrationOrDeviceTokenFromAnOwnerRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceTokenFromAnOwner
     */
    tokenType: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceTokenFromAnOwner
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveARegistrationOrDeviceTokenFromAnOwner
     */
    apiToken?: string
}

export interface UserApiRemoveAllRegistrationOrDeviceTokenRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiremoveAllRegistrationOrDeviceToken
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveAllRegistrationOrDeviceToken
     */
    apiToken?: string
}

export interface UserApiResetPushPreferencesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiresetPushPreferences
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiresetPushPreferences
     */
    apiToken?: string
}

export interface UserApiUpdateAUserRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdateAUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateAUser
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAUserRequest
     * @memberof UserApiupdateAUser
     */
    updateAUserRequest?: UpdateAUserRequest
}

export interface UserApiUpdateChannelInvitationPreferenceRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdateChannelInvitationPreference
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateChannelInvitationPreference
     */
    apiToken?: string
    /**
     * 
     * @type UpdateChannelInvitationPreferenceRequest
     * @memberof UserApiupdateChannelInvitationPreference
     */
    updateChannelInvitationPreferenceRequest?: UpdateChannelInvitationPreferenceRequest
}

export interface UserApiUpdateCountPreferenceOfAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfAChannel
     */
    userId: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfAChannel
     */
    apiToken?: string
    /**
     * 
     * @type UpdateCountPreferenceOfAChannelRequest
     * @memberof UserApiupdateCountPreferenceOfAChannel
     */
    updateCountPreferenceOfAChannelRequest?: UpdateCountPreferenceOfAChannelRequest
}

export interface UserApiUpdatePushPreferencesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdatePushPreferences
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdatePushPreferences
     */
    apiToken?: string
    /**
     * 
     * @type UpdatePushPreferencesRequest
     * @memberof UserApiupdatePushPreferences
     */
    updatePushPreferencesRequest?: UpdatePushPreferencesRequest
}

export interface UserApiUpdatePushPreferencesForAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdatePushPreferencesForAChannel
     */
    userId: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiupdatePushPreferencesForAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiupdatePushPreferencesForAChannel
     */
    apiToken?: string
    /**
     * 
     * @type UpdatePushPreferencesForAChannelRequest
     * @memberof UserApiupdatePushPreferencesForAChannel
     */
    updatePushPreferencesForAChannelRequest?: UpdatePushPreferencesForAChannelRequest
}

export interface UserApiViewAUserRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewAUser
     */
    userId: string
    /**
     * 
     * @type boolean
     * @memberof UserApiviewAUser
     */
    includeUnreadCount?: boolean
    /**
     * 
     * @type string
     * @memberof UserApiviewAUser
     */
    customTypes?: string
    /**
     * Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. This parameter should be specified in conjunction with &#x60;include_unread_count&#x60; above. (Default: &#x60;all&#x60;)
     * @type &#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;
     * @memberof UserApiviewAUser
     */
    superMode?: 'all' | 'super' | 'nonsuper'
    /**
     * 
     * @type string
     * @memberof UserApiviewAUser
     */
    apiToken?: string
}

export interface UserApiViewCountPreferenceOfAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewCountPreferenceOfAChannel
     */
    userId: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewCountPreferenceOfAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiviewCountPreferenceOfAChannel
     */
    apiToken?: string
}

export interface UserApiViewNumberOfChannelsWithUnreadMessagesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    customTypes?: string
    /**
     * Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
     * @type &#39;all&#39; | &#39;super&#39; | &#39;nonsuper&#39;
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    superMode?: 'all' | 'super' | 'nonsuper'
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    apiToken?: string
}

export interface UserApiViewNumberOfUnreadMessagesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    userId: string
    /**
     * Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    customTypes?: string
    /**
     * Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are &#x60;all&#x60;, &#x60;super&#x60;, and &#x60;nonsuper&#x60;. (Default: &#x60;all&#x60;)
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    superMode?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    apiToken?: string
}

export interface UserApiViewPushPreferencesRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewPushPreferences
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewPushPreferences
     */
    apiToken?: string
}

export interface UserApiViewPushPreferencesForAChannelRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewPushPreferencesForAChannel
     */
    userId: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewPushPreferencesForAChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiviewPushPreferencesForAChannel
     */
    apiToken?: string
}

export interface UserApiViewWhoOwnsARegistrationOrDeviceTokenRequest {
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewWhoOwnsARegistrationOrDeviceToken
     */
    tokenType: string
    /**
     * (Required) 
     * @type string
     * @memberof UserApiviewWhoOwnsARegistrationOrDeviceToken
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiviewWhoOwnsARegistrationOrDeviceToken
     */
    apiToken?: string
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * Add a registration or device token
     * @param param the request object
     */
    public addARegistrationOrDeviceToken(param: UserApiAddARegistrationOrDeviceTokenRequest, options?: Configuration): Promise<AddARegistrationOrDeviceTokenResponse> {
        return this.api.addARegistrationOrDeviceToken(param.userId, param.tokenType, param.apiToken, param.addARegistrationOrDeviceTokenRequest,  options).toPromise();
    }

    /**
     * ## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template
     * Choose a push notification content template
     * @param param the request object
     */
    public chooseAPushNotificationContentTemplate(param: UserApiChooseAPushNotificationContentTemplateRequest, options?: Configuration): Promise<ChooseAPushNotificationContentTemplateResponse> {
        return this.api.chooseAPushNotificationContentTemplate(param.userId, param.apiToken, param.chooseAPushNotificationContentTemplateRequest,  options).toPromise();
    }

    /**
     * ## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user
     * Create a user
     * @param param the request object
     */
    public createAUser(param: UserApiCreateAUserRequest = {}, options?: Configuration): Promise<SendbirdUser> {
        return this.api.createAUser(param.apiToken, param.createAUserRequest,  options).toPromise();
    }

    /**
     * ## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token
     * Create user token
     * @param param the request object
     */
    public createUserToken(param: UserApiCreateUserTokenRequest, options?: Configuration): Promise<CreateUserTokenResponse> {
        return this.api.createUserToken(param.userId, param.apiToken, param.createUserTokenRequest,  options).toPromise();
    }

    /**
     * ## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)
     * Delete a user
     * @param param the request object
     */
    public deleteAUser(param: UserApiDeleteAUserRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAUser(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)
     * Get channel invitation preference
     * @param param the request object
     */
    public getChannelInvitationPreference(param: UserApiGetChannelInvitationPreferenceRequest, options?: Configuration): Promise<GetChannelInvitationPreferenceResponse> {
        return this.api.getChannelInvitationPreference(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param param the request object
     */
    public leaveMyGroupChannels(param: UserApiLeaveMyGroupChannelsRequest, options?: Configuration): Promise<any> {
        return this.api.leaveMyGroupChannels(param.userId, param.apiToken, param.leaveMyGroupChannelsRequest,  options).toPromise();
    }

    /**
     * ## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param param the request object
     */
    public listMyGroupChannels(param: UserApiListMyGroupChannelsRequest, options?: Configuration): Promise<ListMyGroupChannelsResponse> {
        return this.api.listMyGroupChannels(param.userId, param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.membersNicknameStartswith, param.searchQuery, param.searchFields, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage, param.hiddenMode, param.unreadFilter, param.memberStateFilter,  options).toPromise();
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens
     * List registration or device tokens
     * @param param the request object
     */
    public listRegistrationOrDeviceTokens(param: UserApiListRegistrationOrDeviceTokensRequest, options?: Configuration): Promise<ListRegistrationOrDeviceTokensResponse> {
        return this.api.listRegistrationOrDeviceTokens(param.userId, param.tokenType, param.apiToken,  options).toPromise();
    }

    /**
     * ## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users
     * List users
     * @param param the request object
     */
    public listUsers(param: UserApiListUsersRequest = {}, options?: Configuration): Promise<ListUsersResponse> {
        return this.api.listUsers(param.token, param.limit, param.activeMode, param.showBot, param.userIds, param.nickname, param.nicknameStartswith, param.metadatakey, param.metadatavaluesIn, param.apiToken,  options).toPromise();
    }

    /**
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * Mark all messages as read
     * @param param the request object
     */
    public markAllMessagesAsRead(param: UserApiMarkAllMessagesAsReadRequest, options?: Configuration): Promise<any> {
        return this.api.markAllMessagesAsRead(param.userId, param.apiToken, param.markAllMessagesAsReadRequest,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering a specific token
     * @param param the request object
     */
    public removeARegistrationOrDeviceToken(param: UserApiRemoveARegistrationOrDeviceTokenRequest, options?: Configuration): Promise<RemoveARegistrationOrDeviceTokenResponse> {
        return this.api.removeARegistrationOrDeviceToken(param.userId, param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner
     * Remove a registration or device token from an owner
     * @param param the request object
     */
    public removeARegistrationOrDeviceTokenFromAnOwner(param: UserApiRemoveARegistrationOrDeviceTokenFromAnOwnerRequest, options?: Configuration): Promise<Array<MarkChannelMessagesAsReadRequest>> {
        return this.api.removeARegistrationOrDeviceTokenFromAnOwner(param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * Remove a registration or device token - When unregistering all device tokens
     * @param param the request object
     */
    public removeAllRegistrationOrDeviceToken(param: UserApiRemoveAllRegistrationOrDeviceTokenRequest, options?: Configuration): Promise<RemoveAllRegistrationOrDeviceTokenResponse> {
        return this.api.removeAllRegistrationOrDeviceToken(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)
     * Reset push preferences
     * @param param the request object
     */
    public resetPushPreferences(param: UserApiResetPushPreferencesRequest, options?: Configuration): Promise<any> {
        return this.api.resetPushPreferences(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)
     * Update a user
     * @param param the request object
     */
    public updateAUser(param: UserApiUpdateAUserRequest, options?: Configuration): Promise<SendbirdUser> {
        return this.api.updateAUser(param.userId, param.apiToken, param.updateAUserRequest,  options).toPromise();
    }

    /**
     * ## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference
     * Update channel invitation preference
     * @param param the request object
     */
    public updateChannelInvitationPreference(param: UserApiUpdateChannelInvitationPreferenceRequest, options?: Configuration): Promise<UpdateChannelInvitationPreferenceResponse> {
        return this.api.updateChannelInvitationPreference(param.userId, param.apiToken, param.updateChannelInvitationPreferenceRequest,  options).toPromise();
    }

    /**
     * ## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel
     * Update count preference of a channel
     * @param param the request object
     */
    public updateCountPreferenceOfAChannel(param: UserApiUpdateCountPreferenceOfAChannelRequest, options?: Configuration): Promise<UpdateCountPreferenceOfChannelByUrlResponse> {
        return this.api.updateCountPreferenceOfAChannel(param.userId, param.channelUrl, param.apiToken, param.updateCountPreferenceOfAChannelRequest,  options).toPromise();
    }

    /**
     * ## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)
     * Update push preferences
     * @param param the request object
     */
    public updatePushPreferences(param: UserApiUpdatePushPreferencesRequest, options?: Configuration): Promise<UpdatePushPreferencesResponse> {
        return this.api.updatePushPreferences(param.userId, param.apiToken, param.updatePushPreferencesRequest,  options).toPromise();
    }

    /**
     * ## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)
     * Update push preferences for a channel
     * @param param the request object
     */
    public updatePushPreferencesForAChannel(param: UserApiUpdatePushPreferencesForAChannelRequest, options?: Configuration): Promise<UpdatePushPreferencesForAChannelResponse> {
        return this.api.updatePushPreferencesForAChannel(param.userId, param.channelUrl, param.apiToken, param.updatePushPreferencesForAChannelRequest,  options).toPromise();
    }

    /**
     * ## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param param the request object
     */
    public viewAUser(param: UserApiViewAUserRequest, options?: Configuration): Promise<SendbirdUser> {
        return this.api.viewAUser(param.userId, param.includeUnreadCount, param.customTypes, param.superMode, param.apiToken,  options).toPromise();
    }

    /**
     * ## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel
     * View count preference of a channel
     * @param param the request object
     */
    public viewCountPreferenceOfAChannel(param: UserApiViewCountPreferenceOfAChannelRequest, options?: Configuration): Promise<ViewCountPreferenceOfAChannelResponse> {
        return this.api.viewCountPreferenceOfAChannel(param.userId, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages
     * View number of channels with unread messages
     * @param param the request object
     */
    public viewNumberOfChannelsWithUnreadMessages(param: UserApiViewNumberOfChannelsWithUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse> {
        return this.api.viewNumberOfChannelsWithUnreadMessages(param.userId, param.customTypes, param.superMode, param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.
     * View number of unread messages
     * @param param the request object
     */
    public viewNumberOfUnreadMessages(param: UserApiViewNumberOfUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfUnreadMessagesResponse> {
        return this.api.viewNumberOfUnreadMessages(param.userId, param.customTypes, param.superMode, param.apiToken,  options).toPromise();
    }

    /**
     * ## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)
     * View push preferences
     * @param param the request object
     */
    public viewPushPreferences(param: UserApiViewPushPreferencesRequest, options?: Configuration): Promise<ViewPushPreferencesResponse> {
        return this.api.viewPushPreferences(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)
     * View push preferences for a channel
     * @param param the request object
     */
    public viewPushPreferencesForAChannel(param: UserApiViewPushPreferencesForAChannelRequest, options?: Configuration): Promise<ViewPushPreferencesForAChannelResponse> {
        return this.api.viewPushPreferencesForAChannel(param.userId, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param param the request object
     */
    public viewWhoOwnsARegistrationOrDeviceToken(param: UserApiViewWhoOwnsARegistrationOrDeviceTokenRequest, options?: Configuration): Promise<Array<MarkChannelMessagesAsReadRequest>> {
        return this.api.viewWhoOwnsARegistrationOrDeviceToken(param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

}
