import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AddApnsPushConfigurationData } from '../models/AddApnsPushConfigurationData';
import { AddApnsPushConfigurationResponse } from '../models/AddApnsPushConfigurationResponse';
import { AddApnsPushConfigurationResponsePushConfigurations } from '../models/AddApnsPushConfigurationResponsePushConfigurations';
import { AddEmojiCategoriesResponse } from '../models/AddEmojiCategoriesResponse';
import { AddEmojiCategoriesResponseEmojiCategories } from '../models/AddEmojiCategoriesResponseEmojiCategories';
import { AddEmojisData } from '../models/AddEmojisData';
import { AddEmojisResponse } from '../models/AddEmojisResponse';
import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddExtraDataToMessageResponse } from '../models/AddExtraDataToMessageResponse';
import { AddFcmPushConfigurationData } from '../models/AddFcmPushConfigurationData';
import { AddFcmPushConfigurationResponse } from '../models/AddFcmPushConfigurationResponse';
import { AddFcmPushConfigurationResponsePushConfigurations } from '../models/AddFcmPushConfigurationResponsePushConfigurations';
import { AddHmsPushConfigurationData } from '../models/AddHmsPushConfigurationData';
import { AddHmsPushConfigurationResponse } from '../models/AddHmsPushConfigurationResponse';
import { AddHmsPushConfigurationResponsePushConfigurations } from '../models/AddHmsPushConfigurationResponsePushConfigurations';
import { AddIpToWhitelistData } from '../models/AddIpToWhitelistData';
import { AddIpToWhitelistResponse } from '../models/AddIpToWhitelistResponse';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddReactionToAMessageResponse } from '../models/AddReactionToAMessageResponse';
import { AddRegistrationOrDeviceTokenData } from '../models/AddRegistrationOrDeviceTokenData';
import { AddRegistrationOrDeviceTokenResponse } from '../models/AddRegistrationOrDeviceTokenResponse';
import { BanFromChannelsWithCustomChannelTypesData } from '../models/BanFromChannelsWithCustomChannelTypesData';
import { Blob } from '../models/Blob';
import { BlockUserData } from '../models/BlockUserData';
import { ChoosePushNotificationContentTemplateResponse } from '../models/ChoosePushNotificationContentTemplateResponse';
import { ChooseWhichEventsToSubscribeToData } from '../models/ChooseWhichEventsToSubscribeToData';
import { ChooseWhichEventsToSubscribeToResponse } from '../models/ChooseWhichEventsToSubscribeToResponse';
import { ChooseWhichEventsToSubscribeToResponseWebhook } from '../models/ChooseWhichEventsToSubscribeToResponseWebhook';
import { CreateBotData } from '../models/CreateBotData';
import { CreateBotResponse } from '../models/CreateBotResponse';
import { CreateBotResponseBot } from '../models/CreateBotResponseBot';
import { CreateChannelMetacounterData } from '../models/CreateChannelMetacounterData';
import { CreateChannelMetadataData } from '../models/CreateChannelMetadataData';
import { CreateChannelMetadataResponse } from '../models/CreateChannelMetadataResponse';
import { CreateUserData } from '../models/CreateUserData';
import { CreateUserMetadataData } from '../models/CreateUserMetadataData';
import { CreateUserMetadataResponse } from '../models/CreateUserMetadataResponse';
import { DeleteAllowedIpsFromWhitelistResponse } from '../models/DeleteAllowedIpsFromWhitelistResponse';
import { DeleteApnsCertificateByIdResponse } from '../models/DeleteApnsCertificateByIdResponse';
import { EnableReactionsData } from '../models/EnableReactionsData';
import { EnableReactionsResponse } from '../models/EnableReactionsResponse';
import { Function } from '../models/Function';
import { GcAcceptInvitationData } from '../models/GcAcceptInvitationData';
import { GcBanUserData } from '../models/GcBanUserData';
import { GcBanUserResponse } from '../models/GcBanUserResponse';
import { GcCheckIfMemberByIdResponse } from '../models/GcCheckIfMemberByIdResponse';
import { GcCreateChannelData } from '../models/GcCreateChannelData';
import { GcDeclineInvitationData } from '../models/GcDeclineInvitationData';
import { GcFreezeChannelData } from '../models/GcFreezeChannelData';
import { GcHideOrArchiveChannelData } from '../models/GcHideOrArchiveChannelData';
import { GcInviteAsMembersData } from '../models/GcInviteAsMembersData';
import { GcJoinChannelData } from '../models/GcJoinChannelData';
import { GcLeaveChannelData } from '../models/GcLeaveChannelData';
import { GcListBannedUsersResponse } from '../models/GcListBannedUsersResponse';
import { GcListChannelsResponse } from '../models/GcListChannelsResponse';
import { GcListMembersResponse } from '../models/GcListMembersResponse';
import { GcListMutedUsersResponse } from '../models/GcListMutedUsersResponse';
import { GcListOperatorsResponse } from '../models/GcListOperatorsResponse';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsDeliveredResponse } from '../models/GcMarkAllMessagesAsDeliveredResponse';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcMuteUserData } from '../models/GcMuteUserData';
import { GcRegisterOperatorsData } from '../models/GcRegisterOperatorsData';
import { GcRegisterOperatorsResponse } from '../models/GcRegisterOperatorsResponse';
import { GcResetChatHistoryData } from '../models/GcResetChatHistoryData';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateChannelByUrlData } from '../models/GcUpdateChannelByUrlData';
import { GcViewMuteByIdResponse } from '../models/GcViewMuteByIdResponse';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
import { GcViewNumberOfEachMembersUnreadMessagesResponseUnread } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponseUnread';
import { GenerateSecondaryApiTokenData } from '../models/GenerateSecondaryApiTokenData';
import { GenerateSecondaryApiTokenResponse } from '../models/GenerateSecondaryApiTokenResponse';
import { GetDetailedOpenRateOfAnnouncementByIdResponse } from '../models/GetDetailedOpenRateOfAnnouncementByIdResponse';
import { GetDetailedOpenRateOfAnnouncementGroupResponse } from '../models/GetDetailedOpenRateOfAnnouncementGroupResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponse } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import { GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus } from '../models/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus';
import { GetStatisticsDailyResponse } from '../models/GetStatisticsDailyResponse';
import { GetStatisticsDailyResponseStatistics } from '../models/GetStatisticsDailyResponseStatistics';
import { GetStatisticsMonthlyResponse } from '../models/GetStatisticsMonthlyResponse';
import { GetStatisticsResponse } from '../models/GetStatisticsResponse';
import { JoinChannelsData } from '../models/JoinChannelsData';
import { LeaveMyGroupChannelsData } from '../models/LeaveMyGroupChannelsData';
import { ListAllEmojisAndEmojiCategoriesResponse } from '../models/ListAllEmojisAndEmojiCategoriesResponse';
import { ListAllEmojisAndEmojiCategoriesResponseEmojiCategories } from '../models/ListAllEmojisAndEmojiCategoriesResponseEmojiCategories';
import { ListAllEmojisAndEmojiCategoriesResponseEmojis } from '../models/ListAllEmojisAndEmojiCategoriesResponseEmojis';
import { ListAnnouncementGroupsResponse } from '../models/ListAnnouncementGroupsResponse';
import { ListAnnouncementsResponse } from '../models/ListAnnouncementsResponse';
import { ListAnnouncementsResponseAnnouncements } from '../models/ListAnnouncementsResponseAnnouncements';
import { ListBannedChannelsResponse } from '../models/ListBannedChannelsResponse';
import { ListBannedChannelsResponseBannedChannels } from '../models/ListBannedChannelsResponseBannedChannels';
import { ListBlockedUsersResponse } from '../models/ListBlockedUsersResponse';
import { ListBotsResponse } from '../models/ListBotsResponse';
import { ListBotsResponseBots } from '../models/ListBotsResponseBots';
import { ListDataExportsByMessageChannelOrUserResponse } from '../models/ListDataExportsByMessageChannelOrUserResponse';
import { ListDataExportsByMessageChannelOrUserResponseExportedData } from '../models/ListDataExportsByMessageChannelOrUserResponseExportedData';
import { ListDataExportsByMessageChannelOrUserResponseFile } from '../models/ListDataExportsByMessageChannelOrUserResponseFile';
import { ListEmojisResponse } from '../models/ListEmojisResponse';
import { ListGdprRequestsResponse } from '../models/ListGdprRequestsResponse';
import { ListGdprRequestsResponseRequests } from '../models/ListGdprRequestsResponseRequests';
import { ListMessagesResponse } from '../models/ListMessagesResponse';
import { ListMessagesResponseMessages } from '../models/ListMessagesResponseMessages';
import { ListMessagesResponseOgTag } from '../models/ListMessagesResponseOgTag';
import { ListMessagesResponseOgTagOgImage } from '../models/ListMessagesResponseOgTagOgImage';
import { ListMessagesResponseSortedMetaarray } from '../models/ListMessagesResponseSortedMetaarray';
import { ListMessagesResponseUser } from '../models/ListMessagesResponseUser';
import { ListMessagesResponseUserMetadata } from '../models/ListMessagesResponseUserMetadata';
import { ListMutedChannelsResponse } from '../models/ListMutedChannelsResponse';
import { ListMyGroupChannelsResponse } from '../models/ListMyGroupChannelsResponse';
import { ListPushConfigurationsResponse } from '../models/ListPushConfigurationsResponse';
import { ListPushConfigurationsResponsePushConfigurations } from '../models/ListPushConfigurationsResponsePushConfigurations';
import { ListPushNotificationContentTemplatesResponse } from '../models/ListPushNotificationContentTemplatesResponse';
import { ListPushNotificationContentTemplatesResponsePushMessageTemplates } from '../models/ListPushNotificationContentTemplatesResponsePushMessageTemplates';
import { ListPushNotificationContentTemplatesResponseTemplate } from '../models/ListPushNotificationContentTemplatesResponseTemplate';
import { ListReactionsOfMessageResponse } from '../models/ListReactionsOfMessageResponse';
import { ListRegistrationOrDeviceTokensResponse } from '../models/ListRegistrationOrDeviceTokensResponse';
import { ListReportsOnChannelByUrlResponse } from '../models/ListReportsOnChannelByUrlResponse';
import { ListReportsOnMessageByIdResponse } from '../models/ListReportsOnMessageByIdResponse';
import { ListReportsOnMessageByIdResponseReportLogs } from '../models/ListReportsOnMessageByIdResponseReportLogs';
import { ListReportsOnUserByIdResponse } from '../models/ListReportsOnUserByIdResponse';
import { ListReportsResponse } from '../models/ListReportsResponse';
import { ListReportsResponseReportLogs } from '../models/ListReportsResponseReportLogs';
import { ListSecondaryApiTokensResponse } from '../models/ListSecondaryApiTokensResponse';
import { ListSecondaryApiTokensResponseApiTokens } from '../models/ListSecondaryApiTokensResponseApiTokens';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { MarkAllMessagesAsReadData } from '../models/MarkAllMessagesAsReadData';
import { ModelFile } from '../models/ModelFile';
import { MuteInChannelsWithCustomChannelTypesData } from '../models/MuteInChannelsWithCustomChannelTypesData';
import { OcBanUserData } from '../models/OcBanUserData';
import { OcBanUserResponse } from '../models/OcBanUserResponse';
import { OcCreateChannelData } from '../models/OcCreateChannelData';
import { OcFreezeChannelData } from '../models/OcFreezeChannelData';
import { OcListBannedUsersResponse } from '../models/OcListBannedUsersResponse';
import { OcListBannedUsersResponseBannedList } from '../models/OcListBannedUsersResponseBannedList';
import { OcListChannelsResponse } from '../models/OcListChannelsResponse';
import { OcListMutedUsersResponse } from '../models/OcListMutedUsersResponse';
import { OcListOperatorsResponse } from '../models/OcListOperatorsResponse';
import { OcListParticipantsResponse } from '../models/OcListParticipantsResponse';
import { OcMuteUserData } from '../models/OcMuteUserData';
import { OcRegisterOperatorsData } from '../models/OcRegisterOperatorsData';
import { OcUpdateBanByIdData } from '../models/OcUpdateBanByIdData';
import { OcUpdateChannelByUrlData } from '../models/OcUpdateChannelByUrlData';
import { OcViewMuteByIdResponse } from '../models/OcViewMuteByIdResponse';
import { RegisterAndScheduleDataExportData } from '../models/RegisterAndScheduleDataExportData';
import { RegisterAndScheduleDataExportResponse } from '../models/RegisterAndScheduleDataExportResponse';
import { RegisterAsOperatorToChannelsWithCustomChannelTypesData } from '../models/RegisterAsOperatorToChannelsWithCustomChannelTypesData';
import { RegisterGdprRequestData } from '../models/RegisterGdprRequestData';
import { RegisterGdprRequestResponse } from '../models/RegisterGdprRequestResponse';
import { RemovePushConfigurationByIdResponse } from '../models/RemovePushConfigurationByIdResponse';
import { RemoveReactionFromAMessageResponse } from '../models/RemoveReactionFromAMessageResponse';
import { RemoveRegistrationOrDeviceTokenByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenByTokenResponse';
import { RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse';
import { RemoveRegistrationOrDeviceTokenResponse } from '../models/RemoveRegistrationOrDeviceTokenResponse';
import { ReportChannelByUrlData } from '../models/ReportChannelByUrlData';
import { ReportChannelByUrlResponse } from '../models/ReportChannelByUrlResponse';
import { ReportMessageByIdData } from '../models/ReportMessageByIdData';
import { ReportMessageByIdResponse } from '../models/ReportMessageByIdResponse';
import { ReportUserByIdData } from '../models/ReportUserByIdData';
import { ReportUserByIdResponse } from '../models/ReportUserByIdResponse';
import { RetrieveAdvancedAnalyticsMetricsResponse } from '../models/RetrieveAdvancedAnalyticsMetricsResponse';
import { RetrieveIpWhitelistResponse } from '../models/RetrieveIpWhitelistResponse';
import { RetrieveListOfSubscribedEventsResponse } from '../models/RetrieveListOfSubscribedEventsResponse';
import { RetrieveListOfSubscribedEventsResponseWebhook } from '../models/RetrieveListOfSubscribedEventsResponseWebhook';
import { RevokeSecondaryApiTokenByTokenResponse } from '../models/RevokeSecondaryApiTokenByTokenResponse';
import { SBObject } from '../models/SBObject';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
import { ScheduleAnnouncementResponse } from '../models/ScheduleAnnouncementResponse';
import { ScheduleAnnouncementResponseCreateChannelOptions } from '../models/ScheduleAnnouncementResponseCreateChannelOptions';
import { ScheduleAnnouncementResponseMessage } from '../models/ScheduleAnnouncementResponseMessage';
import { SendBirdAdditionalProperties } from '../models/SendBirdAdditionalProperties';
import { SendBirdAdminMessage } from '../models/SendBirdAdminMessage';
import { SendBirdAppleCriticalAlertOptions } from '../models/SendBirdAppleCriticalAlertOptions';
import { SendBirdBaseChannel } from '../models/SendBirdBaseChannel';
import { SendBirdBaseMessageInstance } from '../models/SendBirdBaseMessageInstance';
import { SendBirdChannelResponse } from '../models/SendBirdChannelResponse';
import { SendBirdEmoji } from '../models/SendBirdEmoji';
import { SendBirdEmojiCategory } from '../models/SendBirdEmojiCategory';
import { SendBirdFileMessageParams } from '../models/SendBirdFileMessageParams';
import { SendBirdGroupChannel } from '../models/SendBirdGroupChannel';
import { SendBirdGroupChannelCollection } from '../models/SendBirdGroupChannelCollection';
import { SendBirdMember } from '../models/SendBirdMember';
import { SendBirdMessageMetaArray } from '../models/SendBirdMessageMetaArray';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendBirdOGImage } from '../models/SendBirdOGImage';
import { SendBirdOGMetaData } from '../models/SendBirdOGMetaData';
import { SendBirdOpenChannel } from '../models/SendBirdOpenChannel';
import { SendBirdPlugin } from '../models/SendBirdPlugin';
import { SendBirdPoll } from '../models/SendBirdPoll';
import { SendBirdPollDetails } from '../models/SendBirdPollDetails';
import { SendBirdPollOption } from '../models/SendBirdPollOption';
import { SendBirdPollUpdatedVoteCount } from '../models/SendBirdPollUpdatedVoteCount';
import { SendBirdReaction } from '../models/SendBirdReaction';
import { SendBirdRestrictionInfo } from '../models/SendBirdRestrictionInfo';
import { SendBirdSender } from '../models/SendBirdSender';
import { SendBirdThreadInfo } from '../models/SendBirdThreadInfo';
import { SendBirdThumbnailSBObject } from '../models/SendBirdThumbnailSBObject';
import { SendBirdThumbnailSize } from '../models/SendBirdThumbnailSize';
import { SendBirdUser } from '../models/SendBirdUser';
import { SendBirdUserMessageParams } from '../models/SendBirdUserMessageParams';
import { SendBotSMessageData } from '../models/SendBotSMessageData';
import { SendMessageData } from '../models/SendMessageData';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateAnnouncementByIdResponse } from '../models/UpdateAnnouncementByIdResponse';
import { UpdateAnnouncementByIdResponseMessage } from '../models/UpdateAnnouncementByIdResponseMessage';
import { UpdateApnsPushConfigurationByIdData } from '../models/UpdateApnsPushConfigurationByIdData';
import { UpdateApnsPushConfigurationByIdResponse } from '../models/UpdateApnsPushConfigurationByIdResponse';
import { UpdateBotByIdData } from '../models/UpdateBotByIdData';
import { UpdateBotByIdResponse } from '../models/UpdateBotByIdResponse';
import { UpdateChannelInvitationPreferenceData } from '../models/UpdateChannelInvitationPreferenceData';
import { UpdateChannelInvitationPreferenceResponse } from '../models/UpdateChannelInvitationPreferenceResponse';
import { UpdateChannelMetacounterData } from '../models/UpdateChannelMetacounterData';
import { UpdateChannelMetadataData } from '../models/UpdateChannelMetadataData';
import { UpdateCountPreferenceOfChannelByUrlData } from '../models/UpdateCountPreferenceOfChannelByUrlData';
import { UpdateCountPreferenceOfChannelByUrlResponse } from '../models/UpdateCountPreferenceOfChannelByUrlResponse';
import { UpdateDefaultChannelInvitationPreferenceData } from '../models/UpdateDefaultChannelInvitationPreferenceData';
import { UpdateDefaultChannelInvitationPreferenceResponse } from '../models/UpdateDefaultChannelInvitationPreferenceResponse';
import { UpdateEmojiCategoryUrlByIdData } from '../models/UpdateEmojiCategoryUrlByIdData';
import { UpdateEmojiUrlByKeyData } from '../models/UpdateEmojiUrlByKeyData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateExtraDataInMessageResponse } from '../models/UpdateExtraDataInMessageResponse';
import { UpdateFcmPushConfigurationByIdData } from '../models/UpdateFcmPushConfigurationByIdData';
import { UpdateFcmPushConfigurationByIdResponse } from '../models/UpdateFcmPushConfigurationByIdResponse';
import { UpdateHmsPushConfigurationByIdData } from '../models/UpdateHmsPushConfigurationByIdData';
import { UpdateHmsPushConfigurationByIdResponse } from '../models/UpdateHmsPushConfigurationByIdResponse';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { UpdatePushNotificationContentTemplateData } from '../models/UpdatePushNotificationContentTemplateData';
import { UpdatePushNotificationContentTemplateResponse } from '../models/UpdatePushNotificationContentTemplateResponse';
import { UpdatePushPreferencesData } from '../models/UpdatePushPreferencesData';
import { UpdatePushPreferencesForChannelByUrlData } from '../models/UpdatePushPreferencesForChannelByUrlData';
import { UpdatePushPreferencesForChannelByUrlResponse } from '../models/UpdatePushPreferencesForChannelByUrlResponse';
import { UpdatePushPreferencesResponse } from '../models/UpdatePushPreferencesResponse';
import { UpdateUserByIdData } from '../models/UpdateUserByIdData';
import { UpdateUserMetadataData } from '../models/UpdateUserMetadataData';
import { UpdateUserMetadataResponse } from '../models/UpdateUserMetadataResponse';
import { UseDefaultEmojisData } from '../models/UseDefaultEmojisData';
import { UseDefaultEmojisResponse } from '../models/UseDefaultEmojisResponse';
import { ViewAnnouncementByIdResponse } from '../models/ViewAnnouncementByIdResponse';
import { ViewBotByIdResponse } from '../models/ViewBotByIdResponse';
import { ViewChannelInvitationPreferenceResponse } from '../models/ViewChannelInvitationPreferenceResponse';
import { ViewCountPreferenceOfChannelByUrlResponse } from '../models/ViewCountPreferenceOfChannelByUrlResponse';
import { ViewDataExportByIdResponse } from '../models/ViewDataExportByIdResponse';
import { ViewDefaultChannelInvitationPreferenceResponse } from '../models/ViewDefaultChannelInvitationPreferenceResponse';
import { ViewGdprRequestByIdResponse } from '../models/ViewGdprRequestByIdResponse';
import { ViewNumberOfChannelsByJoinStatusResponse } from '../models/ViewNumberOfChannelsByJoinStatusResponse';
import { ViewNumberOfChannelsWithUnreadMessagesResponse } from '../models/ViewNumberOfChannelsWithUnreadMessagesResponse';
import { ViewNumberOfConcurrentConnectionsResponse } from '../models/ViewNumberOfConcurrentConnectionsResponse';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';
import { ViewNumberOfPeakConnectionsResponse } from '../models/ViewNumberOfPeakConnectionsResponse';
import { ViewNumberOfPeakConnectionsResponsePeakConnections } from '../models/ViewNumberOfPeakConnectionsResponsePeakConnections';
import { ViewNumberOfUnreadItemsResponse } from '../models/ViewNumberOfUnreadItemsResponse';
import { ViewNumberOfUnreadMessagesResponse } from '../models/ViewNumberOfUnreadMessagesResponse';
import { ViewPushConfigurationByIdResponse } from '../models/ViewPushConfigurationByIdResponse';
import { ViewPushNotificationContentTemplateResponse } from '../models/ViewPushNotificationContentTemplateResponse';
import { ViewPushNotificationContentTemplateResponsePushMessageTemplates } from '../models/ViewPushNotificationContentTemplateResponsePushMessageTemplates';
import { ViewPushPreferencesForChannelByUrlResponse } from '../models/ViewPushPreferencesForChannelByUrlResponse';
import { ViewPushPreferencesResponse } from '../models/ViewPushPreferencesResponse';
import { ViewSecondaryApiTokenByTokenResponse } from '../models/ViewSecondaryApiTokenByTokenResponse';
import { ViewTotalNumberOfMessagesInChannelResponse } from '../models/ViewTotalNumberOfMessagesInChannelResponse';
import { ViewUserMetadataResponse } from '../models/ViewUserMetadataResponse';
import { ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse } from '../models/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse';

import { ObservableAdvancedAnalyticsApi } from "./ObservableAPI";
import { AdvancedAnalyticsApiRequestFactory, AdvancedAnalyticsApiResponseProcessor} from "../apis/AdvancedAnalyticsApi";

export interface AdvancedAnalyticsApiRetrieveAdvancedAnalyticsMetricsRequest {
    /**
     * 
     * @type string
     * @memberof AdvancedAnalyticsApiretrieveAdvancedAnalyticsMetrics
     */
    apiToken?: string
}

export class ObjectAdvancedAnalyticsApi {
    private api: ObservableAdvancedAnalyticsApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedAnalyticsApiRequestFactory, responseProcessor?: AdvancedAnalyticsApiResponseProcessor) {
        this.api = new ObservableAdvancedAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
     * Retrieve Advanced analytics metrics
     * @param param the request object
     */
    public retrieveAdvancedAnalyticsMetrics(param: AdvancedAnalyticsApiRetrieveAdvancedAnalyticsMetricsRequest, options?: Configuration): Promise<RetrieveAdvancedAnalyticsMetricsResponse> {
        return this.api.retrieveAdvancedAnalyticsMetrics(param.apiToken,  options).toPromise();
    }

}

import { ObservableAnnouncementsApi } from "./ObservableAPI";
import { AnnouncementsApiRequestFactory, AnnouncementsApiResponseProcessor} from "../apis/AnnouncementsApi";

export interface AnnouncementsApiGetDetailedOpenRateOfAnnouncementByIdRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenRateOfAnnouncementById
     */
    uniqueId: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenRateOfAnnouncementById
     */
    apiToken?: string
}

export interface AnnouncementsApiGetDetailedOpenRateOfAnnouncementGroupRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenRateOfAnnouncementGroup
     */
    announcementGroup: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenRateOfAnnouncementGroup
     */
    apiToken?: string
}

export interface AnnouncementsApiGetDetailedOpenStatusOfAnnouncementByIdRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    uniqueId: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    apiToken?: string
    /**
     * 
     * @type number
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    next?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    uniqueIds?: Array<string>
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    channelUrls?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof AnnouncementsApigetDetailedOpenStatusOfAnnouncementById
     */
    hasOpened?: boolean
}

export interface AnnouncementsApiGetStatisticsRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatistics
     */
    apiToken?: string
}

export interface AnnouncementsApiGetStatisticsDailyRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    startDate: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    endDate: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    startWeek: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    endWeek: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    startMonth: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    endMonth: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsDaily
     */
    announcementGroup?: string
}

export interface AnnouncementsApiGetStatisticsMonthlyRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApigetStatisticsMonthly
     */
    apiToken?: string
}

export interface AnnouncementsApiListAnnouncementGroupsRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncementGroups
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncementGroups
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof AnnouncementsApilistAnnouncementGroups
     */
    limit?: number
}

export interface AnnouncementsApiListAnnouncementsRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncements
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncements
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof AnnouncementsApilistAnnouncements
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncements
     */
    order?: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncements
     */
    status?: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApilistAnnouncements
     */
    announcementGroup?: string
}

export interface AnnouncementsApiScheduleAnnouncementRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApischeduleAnnouncement
     */
    apiToken?: string
    /**
     * 
     * @type ScheduleAnnouncementData
     * @memberof AnnouncementsApischeduleAnnouncement
     */
    scheduleAnnouncementData?: ScheduleAnnouncementData
}

export interface AnnouncementsApiUpdateAnnouncementByIdRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApiupdateAnnouncementById
     */
    uniqueId: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApiupdateAnnouncementById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateAnnouncementByIdData
     * @memberof AnnouncementsApiupdateAnnouncementById
     */
    updateAnnouncementByIdData?: UpdateAnnouncementByIdData
}

export interface AnnouncementsApiViewAnnouncementByIdRequest {
    /**
     * 
     * @type string
     * @memberof AnnouncementsApiviewAnnouncementById
     */
    uniqueId: string
    /**
     * 
     * @type string
     * @memberof AnnouncementsApiviewAnnouncementById
     */
    apiToken?: string
}

export class ObjectAnnouncementsApi {
    private api: ObservableAnnouncementsApi

    public constructor(configuration: Configuration, requestFactory?: AnnouncementsApiRequestFactory, responseProcessor?: AnnouncementsApiResponseProcessor) {
        this.api = new ObservableAnnouncementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * Get detailed open rate of an announcement
     * @param param the request object
     */
    public getDetailedOpenRateOfAnnouncementById(param: AnnouncementsApiGetDetailedOpenRateOfAnnouncementByIdRequest, options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementByIdResponse> {
        return this.api.getDetailedOpenRateOfAnnouncementById(param.uniqueId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * Get detailed open rate of an announcement group
     * @param param the request object
     */
    public getDetailedOpenRateOfAnnouncementGroup(param: AnnouncementsApiGetDetailedOpenRateOfAnnouncementGroupRequest, options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementGroupResponse> {
        return this.api.getDetailedOpenRateOfAnnouncementGroup(param.announcementGroup, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * Get detailed open status of an announcement
     * @param param the request object
     */
    public getDetailedOpenStatusOfAnnouncementById(param: AnnouncementsApiGetDetailedOpenStatusOfAnnouncementByIdRequest, options?: Configuration): Promise<GetDetailedOpenStatusOfAnnouncementByIdResponse> {
        return this.api.getDetailedOpenStatusOfAnnouncementById(param.uniqueId, param.apiToken, param.limit, param.next, param.uniqueIds, param.channelUrls, param.hasOpened,  options).toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - weekly
     * @param param the request object
     */
    public getStatistics(param: AnnouncementsApiGetStatisticsRequest, options?: Configuration): Promise<GetStatisticsResponse> {
        return this.api.getStatistics(param.apiToken,  options).toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - daily
     * @param param the request object
     */
    public getStatisticsDaily(param: AnnouncementsApiGetStatisticsDailyRequest, options?: Configuration): Promise<GetStatisticsDailyResponse> {
        return this.api.getStatisticsDaily(param.startDate, param.endDate, param.startWeek, param.endWeek, param.startMonth, param.endMonth, param.apiToken, param.announcementGroup,  options).toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - monthly
     * @param param the request object
     */
    public getStatisticsMonthly(param: AnnouncementsApiGetStatisticsMonthlyRequest, options?: Configuration): Promise<GetStatisticsMonthlyResponse> {
        return this.api.getStatisticsMonthly(param.apiToken,  options).toPromise();
    }

    /**
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * List announcement groups
     * @param param the request object
     */
    public listAnnouncementGroups(param: AnnouncementsApiListAnnouncementGroupsRequest, options?: Configuration): Promise<ListAnnouncementGroupsResponse> {
        return this.api.listAnnouncementGroups(param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * List announcements
     * @param param the request object
     */
    public listAnnouncements(param: AnnouncementsApiListAnnouncementsRequest, options?: Configuration): Promise<ListAnnouncementsResponse> {
        return this.api.listAnnouncements(param.apiToken, param.token, param.limit, param.order, param.status, param.announcementGroup,  options).toPromise();
    }

    /**
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * Schedule an announcement
     * @param param the request object
     */
    public scheduleAnnouncement(param: AnnouncementsApiScheduleAnnouncementRequest, options?: Configuration): Promise<ScheduleAnnouncementResponse> {
        return this.api.scheduleAnnouncement(param.apiToken, param.scheduleAnnouncementData,  options).toPromise();
    }

    /**
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * Update an announcement
     * @param param the request object
     */
    public updateAnnouncementById(param: AnnouncementsApiUpdateAnnouncementByIdRequest, options?: Configuration): Promise<UpdateAnnouncementByIdResponse> {
        return this.api.updateAnnouncementById(param.uniqueId, param.apiToken, param.updateAnnouncementByIdData,  options).toPromise();
    }

    /**
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param param the request object
     */
    public viewAnnouncementById(param: AnnouncementsApiViewAnnouncementByIdRequest, options?: Configuration): Promise<ViewAnnouncementByIdResponse> {
        return this.api.viewAnnouncementById(param.uniqueId, param.apiToken,  options).toPromise();
    }

}

import { ObservableApplicationApi } from "./ObservableAPI";
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";

export interface ApplicationApiAddApnsPushConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiaddApnsPushConfiguration
     */
    apiToken?: string
    /**
     * 
     * @type AddApnsPushConfigurationData
     * @memberof ApplicationApiaddApnsPushConfiguration
     */
    addApnsPushConfigurationData?: AddApnsPushConfigurationData
}

export interface ApplicationApiAddFcmPushConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiaddFcmPushConfiguration
     */
    apiToken?: string
    /**
     * 
     * @type AddFcmPushConfigurationData
     * @memberof ApplicationApiaddFcmPushConfiguration
     */
    addFcmPushConfigurationData?: AddFcmPushConfigurationData
}

export interface ApplicationApiAddHmsPushConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiaddHmsPushConfiguration
     */
    apiToken?: string
    /**
     * 
     * @type AddHmsPushConfigurationData
     * @memberof ApplicationApiaddHmsPushConfiguration
     */
    addHmsPushConfigurationData?: AddHmsPushConfigurationData
}

export interface ApplicationApiAddIpToWhitelistRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiaddIpToWhitelist
     */
    apiToken?: string
    /**
     * 
     * @type AddIpToWhitelistData
     * @memberof ApplicationApiaddIpToWhitelist
     */
    addIpToWhitelistData?: AddIpToWhitelistData
}

export interface ApplicationApiDeleteAllowedIpsFromWhitelistRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof ApplicationApideleteAllowedIpsFromWhitelist
     */
    ipWhitelistAddresses: Array<string>
    /**
     * 
     * @type string
     * @memberof ApplicationApideleteAllowedIpsFromWhitelist
     */
    apiToken?: string
}

export interface ApplicationApiDeleteApnsCertificateByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApideleteApnsCertificateById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApideleteApnsCertificateById
     */
    apiToken?: string
}

export interface ApplicationApiGenerateSecondaryApiTokenRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApigenerateSecondaryApiToken
     */
    apiToken?: string
    /**
     * 
     * @type GenerateSecondaryApiTokenData
     * @memberof ApplicationApigenerateSecondaryApiToken
     */
    generateSecondaryApiTokenData?: GenerateSecondaryApiTokenData
}

export interface ApplicationApiListPushConfigurationsRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApilistPushConfigurations
     */
    pushType: string
    /**
     * 
     * @type string
     * @memberof ApplicationApilistPushConfigurations
     */
    apiToken?: string
}

export interface ApplicationApiListPushNotificationContentTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApilistPushNotificationContentTemplates
     */
    apiToken?: string
}

export interface ApplicationApiListSecondaryApiTokensRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApilistSecondaryApiTokens
     */
    apiToken?: string
}

export interface ApplicationApiRemovePushConfigurationByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiremovePushConfigurationById
     */
    pushType: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiremovePushConfigurationById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiremovePushConfigurationById
     */
    apiToken?: string
}

export interface ApplicationApiRetrieveIpWhitelistRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiretrieveIpWhitelist
     */
    apiToken?: string
}

export interface ApplicationApiRevokeSecondaryApiTokenByTokenRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApirevokeSecondaryApiTokenByToken
     */
    apiToken2: string
    /**
     * 
     * @type string
     * @memberof ApplicationApirevokeSecondaryApiTokenByToken
     */
    apiToken?: string
}

export interface ApplicationApiUpdateApnsPushConfigurationByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateApnsPushConfigurationById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateApnsPushConfigurationById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateApnsPushConfigurationByIdData
     * @memberof ApplicationApiupdateApnsPushConfigurationById
     */
    updateApnsPushConfigurationByIdData?: UpdateApnsPushConfigurationByIdData
}

export interface ApplicationApiUpdateDefaultChannelInvitationPreferenceRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateDefaultChannelInvitationPreference
     */
    apiToken?: string
    /**
     * 
     * @type UpdateDefaultChannelInvitationPreferenceData
     * @memberof ApplicationApiupdateDefaultChannelInvitationPreference
     */
    updateDefaultChannelInvitationPreferenceData?: UpdateDefaultChannelInvitationPreferenceData
}

export interface ApplicationApiUpdateFcmPushConfigurationByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateFcmPushConfigurationById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateFcmPushConfigurationById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateFcmPushConfigurationByIdData
     * @memberof ApplicationApiupdateFcmPushConfigurationById
     */
    updateFcmPushConfigurationByIdData?: UpdateFcmPushConfigurationByIdData
}

export interface ApplicationApiUpdateHmsPushConfigurationByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateHmsPushConfigurationById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdateHmsPushConfigurationById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateHmsPushConfigurationByIdData
     * @memberof ApplicationApiupdateHmsPushConfigurationById
     */
    updateHmsPushConfigurationByIdData?: UpdateHmsPushConfigurationByIdData
}

export interface ApplicationApiUpdatePushNotificationContentTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdatePushNotificationContentTemplate
     */
    templateName: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiupdatePushNotificationContentTemplate
     */
    apiToken?: string
    /**
     * 
     * @type UpdatePushNotificationContentTemplateData
     * @memberof ApplicationApiupdatePushNotificationContentTemplate
     */
    updatePushNotificationContentTemplateData?: UpdatePushNotificationContentTemplateData
}

export interface ApplicationApiViewDefaultChannelInvitationPreferenceRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewDefaultChannelInvitationPreference
     */
    apiToken?: string
}

export interface ApplicationApiViewNumberOfConcurrentConnectionsRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfConcurrentConnections
     */
    apiToken?: string
}

export interface ApplicationApiViewNumberOfDailyActiveUsersRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfDailyActiveUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfDailyActiveUsers
     */
    date?: string
}

export interface ApplicationApiViewNumberOfMonthlyActiveUsersRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfMonthlyActiveUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfMonthlyActiveUsers
     */
    date?: string
}

export interface ApplicationApiViewNumberOfPeakConnectionsRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    timeDimension: string
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    startYear: number
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    startMonth: number
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    endYear: number
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    endMonth: number
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    apiToken?: string
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    startDay?: number
    /**
     * 
     * @type number
     * @memberof ApplicationApiviewNumberOfPeakConnections
     */
    endDay?: number
}

export interface ApplicationApiViewPushConfigurationByIdRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewPushConfigurationById
     */
    pushType: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewPushConfigurationById
     */
    providerId: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewPushConfigurationById
     */
    apiToken?: string
}

export interface ApplicationApiViewPushNotificationContentTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewPushNotificationContentTemplate
     */
    templateName: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewPushNotificationContentTemplate
     */
    apiToken?: string
}

export interface ApplicationApiViewSecondaryApiTokenByTokenRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewSecondaryApiTokenByToken
     */
    apiToken2: string
    /**
     * 
     * @type string
     * @memberof ApplicationApiviewSecondaryApiTokenByToken
     */
    apiToken?: string
}

export class ObjectApplicationApi {
    private api: ObservableApplicationApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor) {
        this.api = new ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
     * Add an APNs push configuration
     * @param param the request object
     */
    public addApnsPushConfiguration(param: ApplicationApiAddApnsPushConfigurationRequest, options?: Configuration): Promise<AddApnsPushConfigurationResponse> {
        return this.api.addApnsPushConfiguration(param.apiToken, param.addApnsPushConfigurationData,  options).toPromise();
    }

    /**
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * Add a FCM push configuration
     * @param param the request object
     */
    public addFcmPushConfiguration(param: ApplicationApiAddFcmPushConfigurationRequest, options?: Configuration): Promise<AddFcmPushConfigurationResponse> {
        return this.api.addFcmPushConfiguration(param.apiToken, param.addFcmPushConfigurationData,  options).toPromise();
    }

    /**
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * Add an HMS push configuration
     * @param param the request object
     */
    public addHmsPushConfiguration(param: ApplicationApiAddHmsPushConfigurationRequest, options?: Configuration): Promise<AddHmsPushConfigurationResponse> {
        return this.api.addHmsPushConfiguration(param.apiToken, param.addHmsPushConfigurationData,  options).toPromise();
    }

    /**
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * Add an IP to a whitelist
     * @param param the request object
     */
    public addIpToWhitelist(param: ApplicationApiAddIpToWhitelistRequest, options?: Configuration): Promise<AddIpToWhitelistResponse> {
        return this.api.addIpToWhitelist(param.apiToken, param.addIpToWhitelistData,  options).toPromise();
    }

    /**
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * Delete allowed IPs from a whitelist
     * @param param the request object
     */
    public deleteAllowedIpsFromWhitelist(param: ApplicationApiDeleteAllowedIpsFromWhitelistRequest, options?: Configuration): Promise<DeleteAllowedIpsFromWhitelistResponse> {
        return this.api.deleteAllowedIpsFromWhitelist(param.ipWhitelistAddresses, param.apiToken,  options).toPromise();
    }

    /**
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * Delete an APNs certificate
     * @param param the request object
     */
    public deleteApnsCertificateById(param: ApplicationApiDeleteApnsCertificateByIdRequest, options?: Configuration): Promise<DeleteApnsCertificateByIdResponse> {
        return this.api.deleteApnsCertificateById(param.providerId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * Generate a secondary API token
     * @param param the request object
     */
    public generateSecondaryApiToken(param: ApplicationApiGenerateSecondaryApiTokenRequest, options?: Configuration): Promise<GenerateSecondaryApiTokenResponse> {
        return this.api.generateSecondaryApiToken(param.apiToken, param.generateSecondaryApiTokenData,  options).toPromise();
    }

    /**
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * List push configurations
     * @param param the request object
     */
    public listPushConfigurations(param: ApplicationApiListPushConfigurationsRequest, options?: Configuration): Promise<ListPushConfigurationsResponse> {
        return this.api.listPushConfigurations(param.pushType, param.apiToken,  options).toPromise();
    }

    /**
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * List push notification content templates
     * @param param the request object
     */
    public listPushNotificationContentTemplates(param: ApplicationApiListPushNotificationContentTemplatesRequest, options?: Configuration): Promise<ListPushNotificationContentTemplatesResponse> {
        return this.api.listPushNotificationContentTemplates(param.apiToken,  options).toPromise();
    }

    /**
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * List secondary API tokens
     * @param param the request object
     */
    public listSecondaryApiTokens(param: ApplicationApiListSecondaryApiTokensRequest, options?: Configuration): Promise<ListSecondaryApiTokensResponse> {
        return this.api.listSecondaryApiTokens(param.apiToken,  options).toPromise();
    }

    /**
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * Remove a push configuration
     * @param param the request object
     */
    public removePushConfigurationById(param: ApplicationApiRemovePushConfigurationByIdRequest, options?: Configuration): Promise<RemovePushConfigurationByIdResponse> {
        return this.api.removePushConfigurationById(param.pushType, param.providerId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * Retrieve an IP whitelist
     * @param param the request object
     */
    public retrieveIpWhitelist(param: ApplicationApiRetrieveIpWhitelistRequest, options?: Configuration): Promise<RetrieveIpWhitelistResponse> {
        return this.api.retrieveIpWhitelist(param.apiToken,  options).toPromise();
    }

    /**
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * Revoke a secondary API token
     * @param param the request object
     */
    public revokeSecondaryApiTokenByToken(param: ApplicationApiRevokeSecondaryApiTokenByTokenRequest, options?: Configuration): Promise<RevokeSecondaryApiTokenByTokenResponse> {
        return this.api.revokeSecondaryApiTokenByToken(param.apiToken2, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * Update an APNs push configuration
     * @param param the request object
     */
    public updateApnsPushConfigurationById(param: ApplicationApiUpdateApnsPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateApnsPushConfigurationByIdResponse> {
        return this.api.updateApnsPushConfigurationById(param.providerId, param.apiToken, param.updateApnsPushConfigurationByIdData,  options).toPromise();
    }

    /**
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * Update default channel invitation preference
     * @param param the request object
     */
    public updateDefaultChannelInvitationPreference(param: ApplicationApiUpdateDefaultChannelInvitationPreferenceRequest, options?: Configuration): Promise<UpdateDefaultChannelInvitationPreferenceResponse> {
        return this.api.updateDefaultChannelInvitationPreference(param.apiToken, param.updateDefaultChannelInvitationPreferenceData,  options).toPromise();
    }

    /**
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * Update a FCM push configuration
     * @param param the request object
     */
    public updateFcmPushConfigurationById(param: ApplicationApiUpdateFcmPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateFcmPushConfigurationByIdResponse> {
        return this.api.updateFcmPushConfigurationById(param.providerId, param.apiToken, param.updateFcmPushConfigurationByIdData,  options).toPromise();
    }

    /**
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * Update an HMS push configuration
     * @param param the request object
     */
    public updateHmsPushConfigurationById(param: ApplicationApiUpdateHmsPushConfigurationByIdRequest, options?: Configuration): Promise<UpdateHmsPushConfigurationByIdResponse> {
        return this.api.updateHmsPushConfigurationById(param.providerId, param.apiToken, param.updateHmsPushConfigurationByIdData,  options).toPromise();
    }

    /**
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * Update a push notification content template
     * @param param the request object
     */
    public updatePushNotificationContentTemplate(param: ApplicationApiUpdatePushNotificationContentTemplateRequest, options?: Configuration): Promise<UpdatePushNotificationContentTemplateResponse> {
        return this.api.updatePushNotificationContentTemplate(param.templateName, param.apiToken, param.updatePushNotificationContentTemplateData,  options).toPromise();
    }

    /**
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * View default channel invitation preference
     * @param param the request object
     */
    public viewDefaultChannelInvitationPreference(param: ApplicationApiViewDefaultChannelInvitationPreferenceRequest, options?: Configuration): Promise<ViewDefaultChannelInvitationPreferenceResponse> {
        return this.api.viewDefaultChannelInvitationPreference(param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * View number of concurrent connections
     * @param param the request object
     */
    public viewNumberOfConcurrentConnections(param: ApplicationApiViewNumberOfConcurrentConnectionsRequest, options?: Configuration): Promise<ViewNumberOfConcurrentConnectionsResponse> {
        return this.api.viewNumberOfConcurrentConnections(param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * View number of daily active users
     * @param param the request object
     */
    public viewNumberOfDailyActiveUsers(param: ApplicationApiViewNumberOfDailyActiveUsersRequest, options?: Configuration): Promise<ViewNumberOfDailyActiveUsersResponse> {
        return this.api.viewNumberOfDailyActiveUsers(param.apiToken, param.date,  options).toPromise();
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * View number of monthly active users
     * @param param the request object
     */
    public viewNumberOfMonthlyActiveUsers(param: ApplicationApiViewNumberOfMonthlyActiveUsersRequest, options?: Configuration): Promise<ViewNumberOfMonthlyActiveUsersResponse> {
        return this.api.viewNumberOfMonthlyActiveUsers(param.apiToken, param.date,  options).toPromise();
    }

    /**
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * View number of peak connections
     * @param param the request object
     */
    public viewNumberOfPeakConnections(param: ApplicationApiViewNumberOfPeakConnectionsRequest, options?: Configuration): Promise<ViewNumberOfPeakConnectionsResponse> {
        return this.api.viewNumberOfPeakConnections(param.timeDimension, param.startYear, param.startMonth, param.endYear, param.endMonth, param.apiToken, param.startDay, param.endDay,  options).toPromise();
    }

    /**
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * View a push configuration
     * @param param the request object
     */
    public viewPushConfigurationById(param: ApplicationApiViewPushConfigurationByIdRequest, options?: Configuration): Promise<ViewPushConfigurationByIdResponse> {
        return this.api.viewPushConfigurationById(param.pushType, param.providerId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * View a push notification content template
     * @param param the request object
     */
    public viewPushNotificationContentTemplate(param: ApplicationApiViewPushNotificationContentTemplateRequest, options?: Configuration): Promise<ViewPushNotificationContentTemplateResponse> {
        return this.api.viewPushNotificationContentTemplate(param.templateName, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * View a secondary API token
     * @param param the request object
     */
    public viewSecondaryApiTokenByToken(param: ApplicationApiViewSecondaryApiTokenByTokenRequest, options?: Configuration): Promise<ViewSecondaryApiTokenByTokenResponse> {
        return this.api.viewSecondaryApiTokenByToken(param.apiToken2, param.apiToken,  options).toPromise();
    }

}

import { ObservableBotInterfaceApi } from "./ObservableAPI";
import { BotInterfaceApiRequestFactory, BotInterfaceApiResponseProcessor} from "../apis/BotInterfaceApi";

export interface BotInterfaceApiCreateBotRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApicreateBot
     */
    apiToken?: string
    /**
     * 
     * @type CreateBotData
     * @memberof BotInterfaceApicreateBot
     */
    createBotData?: CreateBotData
}

export interface BotInterfaceApiDeleteBotByIdRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApideleteBotById
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApideleteBotById
     */
    apiToken?: string
}

export interface BotInterfaceApiJoinChannelsRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApijoinChannels
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApijoinChannels
     */
    apiToken?: string
    /**
     * 
     * @type JoinChannelsData
     * @memberof BotInterfaceApijoinChannels
     */
    joinChannelsData?: JoinChannelsData
}

export interface BotInterfaceApiLeaveChannelsRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannels
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannels
     */
    channelUrl?: string
}

export interface BotInterfaceApiLeaveChannelsByUrlRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannelsByUrl
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannelsByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApileaveChannelsByUrl
     */
    apiToken?: string
}

export interface BotInterfaceApiListBotsRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApilistBots
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApilistBots
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof BotInterfaceApilistBots
     */
    limit?: number
}

export interface BotInterfaceApiSendBotsMessageRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApisendBotsMessage
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApisendBotsMessage
     */
    apiToken?: string
    /**
     * 
     * @type SendBotSMessageData
     * @memberof BotInterfaceApisendBotsMessage
     */
    sendBotSMessageData?: SendBotSMessageData
}

export interface BotInterfaceApiUpdateBotByIdRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApiupdateBotById
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApiupdateBotById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateBotByIdData
     * @memberof BotInterfaceApiupdateBotById
     */
    updateBotByIdData?: UpdateBotByIdData
}

export interface BotInterfaceApiViewBotByIdRequest {
    /**
     * 
     * @type string
     * @memberof BotInterfaceApiviewBotById
     */
    botUserid: string
    /**
     * 
     * @type string
     * @memberof BotInterfaceApiviewBotById
     */
    apiToken?: string
}

export class ObjectBotInterfaceApi {
    private api: ObservableBotInterfaceApi

    public constructor(configuration: Configuration, requestFactory?: BotInterfaceApiRequestFactory, responseProcessor?: BotInterfaceApiResponseProcessor) {
        this.api = new ObservableBotInterfaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * Create a bot
     * @param param the request object
     */
    public createBot(param: BotInterfaceApiCreateBotRequest, options?: Configuration): Promise<CreateBotResponse> {
        return this.api.createBot(param.apiToken, param.createBotData,  options).toPromise();
    }

    /**
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * Delete a bot
     * @param param the request object
     */
    public deleteBotById(param: BotInterfaceApiDeleteBotByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBotById(param.botUserid, param.apiToken,  options).toPromise();
    }

    /**
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * Join channels
     * @param param the request object
     */
    public joinChannels(param: BotInterfaceApiJoinChannelsRequest, options?: Configuration): Promise<SendBirdGroupChannelCollection> {
        return this.api.joinChannels(param.botUserid, param.apiToken, param.joinChannelsData,  options).toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving all channels
     * @param param the request object
     */
    public leaveChannels(param: BotInterfaceApiLeaveChannelsRequest, options?: Configuration): Promise<void> {
        return this.api.leaveChannels(param.botUserid, param.apiToken, param.channelUrl,  options).toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving a channel by its channel URL
     * @param param the request object
     */
    public leaveChannelsByUrl(param: BotInterfaceApiLeaveChannelsByUrlRequest, options?: Configuration): Promise<void> {
        return this.api.leaveChannelsByUrl(param.botUserid, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * List bots
     * @param param the request object
     */
    public listBots(param: BotInterfaceApiListBotsRequest, options?: Configuration): Promise<ListBotsResponse> {
        return this.api.listBots(param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param param the request object
     */
    public sendBotsMessage(param: BotInterfaceApiSendBotsMessageRequest, options?: Configuration): Promise<SendBirdMessageResponse> {
        return this.api.sendBotsMessage(param.botUserid, param.apiToken, param.sendBotSMessageData,  options).toPromise();
    }

    /**
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * Update a bot
     * @param param the request object
     */
    public updateBotById(param: BotInterfaceApiUpdateBotByIdRequest, options?: Configuration): Promise<UpdateBotByIdResponse> {
        return this.api.updateBotById(param.botUserid, param.apiToken, param.updateBotByIdData,  options).toPromise();
    }

    /**
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * View a bot
     * @param param the request object
     */
    public viewBotById(param: BotInterfaceApiViewBotByIdRequest, options?: Configuration): Promise<ViewBotByIdResponse> {
        return this.api.viewBotById(param.botUserid, param.apiToken,  options).toPromise();
    }

}

import { ObservableDataExportApi } from "./ObservableAPI";
import { DataExportApiRequestFactory, DataExportApiResponseProcessor} from "../apis/DataExportApi";

export interface DataExportApiListDataExportsByMessageChannelOrUserRequest {
    /**
     * 
     * @type string
     * @memberof DataExportApilistDataExportsByMessageChannelOrUser
     */
    dataType: string
    /**
     * 
     * @type string
     * @memberof DataExportApilistDataExportsByMessageChannelOrUser
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof DataExportApilistDataExportsByMessageChannelOrUser
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof DataExportApilistDataExportsByMessageChannelOrUser
     */
    limit?: number
}

export interface DataExportApiRegisterAndScheduleDataExportRequest {
    /**
     * 
     * @type string
     * @memberof DataExportApiregisterAndScheduleDataExport
     */
    dataType: string
    /**
     * 
     * @type string
     * @memberof DataExportApiregisterAndScheduleDataExport
     */
    apiToken?: string
    /**
     * 
     * @type RegisterAndScheduleDataExportData
     * @memberof DataExportApiregisterAndScheduleDataExport
     */
    registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData
}

export interface DataExportApiViewDataExportByIdRequest {
    /**
     * 
     * @type string
     * @memberof DataExportApiviewDataExportById
     */
    dataType: string
    /**
     * 
     * @type string
     * @memberof DataExportApiviewDataExportById
     */
    requestId: string
    /**
     * 
     * @type string
     * @memberof DataExportApiviewDataExportById
     */
    apiToken?: string
}

export class ObjectDataExportApi {
    private api: ObservableDataExportApi

    public constructor(configuration: Configuration, requestFactory?: DataExportApiRequestFactory, responseProcessor?: DataExportApiResponseProcessor) {
        this.api = new ObservableDataExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
     * List data exports by message, channel, or user
     * @param param the request object
     */
    public listDataExportsByMessageChannelOrUser(param: DataExportApiListDataExportsByMessageChannelOrUserRequest, options?: Configuration): Promise<ListDataExportsByMessageChannelOrUserResponse> {
        return this.api.listDataExportsByMessageChannelOrUser(param.dataType, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * Register and schedule a data export
     * @param param the request object
     */
    public registerAndScheduleDataExport(param: DataExportApiRegisterAndScheduleDataExportRequest, options?: Configuration): Promise<RegisterAndScheduleDataExportResponse> {
        return this.api.registerAndScheduleDataExport(param.dataType, param.apiToken, param.registerAndScheduleDataExportData,  options).toPromise();
    }

    /**
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * View a data export
     * @param param the request object
     */
    public viewDataExportById(param: DataExportApiViewDataExportByIdRequest, options?: Configuration): Promise<ViewDataExportByIdResponse> {
        return this.api.viewDataExportById(param.dataType, param.requestId, param.apiToken,  options).toPromise();
    }

}

import { ObservableDataPrivacyApi } from "./ObservableAPI";
import { DataPrivacyApiRequestFactory, DataPrivacyApiResponseProcessor} from "../apis/DataPrivacyApi";

export interface DataPrivacyApiCancelTheRegistrationOfGdprRequestByIdRequest {
    /**
     * 
     * @type string
     * @memberof DataPrivacyApicancelTheRegistrationOfGdprRequestById
     */
    requestId: string
    /**
     * 
     * @type string
     * @memberof DataPrivacyApicancelTheRegistrationOfGdprRequestById
     */
    apiToken?: string
}

export interface DataPrivacyApiListGdprRequestsRequest {
    /**
     * 
     * @type string
     * @memberof DataPrivacyApilistGdprRequests
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof DataPrivacyApilistGdprRequests
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof DataPrivacyApilistGdprRequests
     */
    limit?: number
}

export interface DataPrivacyApiRegisterGdprRequestRequest {
    /**
     * 
     * @type string
     * @memberof DataPrivacyApiregisterGdprRequest
     */
    apiToken?: string
    /**
     * 
     * @type RegisterGdprRequestData
     * @memberof DataPrivacyApiregisterGdprRequest
     */
    registerGdprRequestData?: RegisterGdprRequestData
}

export interface DataPrivacyApiViewGdprRequestByIdRequest {
    /**
     * 
     * @type string
     * @memberof DataPrivacyApiviewGdprRequestById
     */
    requestId: string
    /**
     * 
     * @type string
     * @memberof DataPrivacyApiviewGdprRequestById
     */
    apiToken?: string
}

export class ObjectDataPrivacyApi {
    private api: ObservableDataPrivacyApi

    public constructor(configuration: Configuration, requestFactory?: DataPrivacyApiRequestFactory, responseProcessor?: DataPrivacyApiResponseProcessor) {
        this.api = new ObservableDataPrivacyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
     * Cancel the registration of a GDPR request
     * @param param the request object
     */
    public cancelTheRegistrationOfGdprRequestById(param: DataPrivacyApiCancelTheRegistrationOfGdprRequestByIdRequest, options?: Configuration): Promise<void> {
        return this.api.cancelTheRegistrationOfGdprRequestById(param.requestId, param.apiToken,  options).toPromise();
    }

    /**
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * List GDPR requests
     * @param param the request object
     */
    public listGdprRequests(param: DataPrivacyApiListGdprRequestsRequest, options?: Configuration): Promise<ListGdprRequestsResponse> {
        return this.api.listGdprRequests(param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * Register a GDPR request
     * @param param the request object
     */
    public registerGdprRequest(param: DataPrivacyApiRegisterGdprRequestRequest, options?: Configuration): Promise<RegisterGdprRequestResponse> {
        return this.api.registerGdprRequest(param.apiToken, param.registerGdprRequestData,  options).toPromise();
    }

    /**
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * View a GDPR request
     * @param param the request object
     */
    public viewGdprRequestById(param: DataPrivacyApiViewGdprRequestByIdRequest, options?: Configuration): Promise<ViewGdprRequestByIdResponse> {
        return this.api.viewGdprRequestById(param.requestId, param.apiToken,  options).toPromise();
    }

}

import { ObservableEmojisApi } from "./ObservableAPI";
import { EmojisApiRequestFactory, EmojisApiResponseProcessor} from "../apis/EmojisApi";

export interface EmojisApiAddEmojiCategoriesRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApiaddEmojiCategories
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof EmojisApiaddEmojiCategories
     */
    body?: any
}

export interface EmojisApiAddEmojisRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApiaddEmojis
     */
    apiToken?: string
    /**
     * 
     * @type AddEmojisData
     * @memberof EmojisApiaddEmojis
     */
    addEmojisData?: AddEmojisData
}

export interface EmojisApiDeleteEmojiByKeyRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApideleteEmojiByKey
     */
    emojiKey: string
    /**
     * 
     * @type string
     * @memberof EmojisApideleteEmojiByKey
     */
    apiToken?: string
}

export interface EmojisApiDeleteEmojiCategoryByIdRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApideleteEmojiCategoryById
     */
    emojiCategoryId: string
    /**
     * 
     * @type string
     * @memberof EmojisApideleteEmojiCategoryById
     */
    apiToken?: string
}

export interface EmojisApiEnableReactionsRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApienableReactions
     */
    apiToken?: string
    /**
     * 
     * @type EnableReactionsData
     * @memberof EmojisApienableReactions
     */
    enableReactionsData?: EnableReactionsData
}

export interface EmojisApiGetEmojiByKeyRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApigetEmojiByKey
     */
    emojiKey: string
    /**
     * 
     * @type string
     * @memberof EmojisApigetEmojiByKey
     */
    apiToken?: string
}

export interface EmojisApiGetEmojiCategoryByIdRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApigetEmojiCategoryById
     */
    emojiCategoryId: string
    /**
     * 
     * @type string
     * @memberof EmojisApigetEmojiCategoryById
     */
    apiToken?: string
}

export interface EmojisApiListAllEmojisAndEmojiCategoriesRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApilistAllEmojisAndEmojiCategories
     */
    apiToken?: string
}

export interface EmojisApiListEmojisRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApilistEmojis
     */
    apiToken?: string
}

export interface EmojisApiUpdateEmojiCategoryUrlByIdRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApiupdateEmojiCategoryUrlById
     */
    emojiCategoryId: string
    /**
     * 
     * @type string
     * @memberof EmojisApiupdateEmojiCategoryUrlById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateEmojiCategoryUrlByIdData
     * @memberof EmojisApiupdateEmojiCategoryUrlById
     */
    updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData
}

export interface EmojisApiUpdateEmojiUrlByKeyRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApiupdateEmojiUrlByKey
     */
    emojiKey: string
    /**
     * 
     * @type string
     * @memberof EmojisApiupdateEmojiUrlByKey
     */
    apiToken?: string
    /**
     * 
     * @type UpdateEmojiUrlByKeyData
     * @memberof EmojisApiupdateEmojiUrlByKey
     */
    updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData
}

export interface EmojisApiUseDefaultEmojisRequest {
    /**
     * 
     * @type string
     * @memberof EmojisApiuseDefaultEmojis
     */
    apiToken?: string
    /**
     * 
     * @type UseDefaultEmojisData
     * @memberof EmojisApiuseDefaultEmojis
     */
    useDefaultEmojisData?: UseDefaultEmojisData
}

export class ObjectEmojisApi {
    private api: ObservableEmojisApi

    public constructor(configuration: Configuration, requestFactory?: EmojisApiRequestFactory, responseProcessor?: EmojisApiResponseProcessor) {
        this.api = new ObservableEmojisApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
     * Add emoji categories
     * @param param the request object
     */
    public addEmojiCategories(param: EmojisApiAddEmojiCategoriesRequest, options?: Configuration): Promise<AddEmojiCategoriesResponse> {
        return this.api.addEmojiCategories(param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * Add emojis
     * @param param the request object
     */
    public addEmojis(param: EmojisApiAddEmojisRequest, options?: Configuration): Promise<AddEmojisResponse> {
        return this.api.addEmojis(param.apiToken, param.addEmojisData,  options).toPromise();
    }

    /**
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * Delete an emoji
     * @param param the request object
     */
    public deleteEmojiByKey(param: EmojisApiDeleteEmojiByKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEmojiByKey(param.emojiKey, param.apiToken,  options).toPromise();
    }

    /**
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * Delete an emoji category
     * @param param the request object
     */
    public deleteEmojiCategoryById(param: EmojisApiDeleteEmojiCategoryByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEmojiCategoryById(param.emojiCategoryId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * Enable reactions
     * @param param the request object
     */
    public enableReactions(param: EmojisApiEnableReactionsRequest, options?: Configuration): Promise<EnableReactionsResponse> {
        return this.api.enableReactions(param.apiToken, param.enableReactionsData,  options).toPromise();
    }

    /**
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * Get an emoji
     * @param param the request object
     */
    public getEmojiByKey(param: EmojisApiGetEmojiByKeyRequest, options?: Configuration): Promise<SendBirdEmoji> {
        return this.api.getEmojiByKey(param.emojiKey, param.apiToken,  options).toPromise();
    }

    /**
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * Get an emoji category
     * @param param the request object
     */
    public getEmojiCategoryById(param: EmojisApiGetEmojiCategoryByIdRequest, options?: Configuration): Promise<SendBirdEmojiCategory> {
        return this.api.getEmojiCategoryById(param.emojiCategoryId, param.apiToken,  options).toPromise();
    }

    /**
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * List all emojis and emoji categories
     * @param param the request object
     */
    public listAllEmojisAndEmojiCategories(param: EmojisApiListAllEmojisAndEmojiCategoriesRequest, options?: Configuration): Promise<ListAllEmojisAndEmojiCategoriesResponse> {
        return this.api.listAllEmojisAndEmojiCategories(param.apiToken,  options).toPromise();
    }

    /**
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * List emojis
     * @param param the request object
     */
    public listEmojis(param: EmojisApiListEmojisRequest, options?: Configuration): Promise<ListEmojisResponse> {
        return this.api.listEmojis(param.apiToken,  options).toPromise();
    }

    /**
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * Update an emoji category URL
     * @param param the request object
     */
    public updateEmojiCategoryUrlById(param: EmojisApiUpdateEmojiCategoryUrlByIdRequest, options?: Configuration): Promise<SendBirdEmojiCategory> {
        return this.api.updateEmojiCategoryUrlById(param.emojiCategoryId, param.apiToken, param.updateEmojiCategoryUrlByIdData,  options).toPromise();
    }

    /**
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * Update an emoji URL
     * @param param the request object
     */
    public updateEmojiUrlByKey(param: EmojisApiUpdateEmojiUrlByKeyRequest, options?: Configuration): Promise<SendBirdEmoji> {
        return this.api.updateEmojiUrlByKey(param.emojiKey, param.apiToken, param.updateEmojiUrlByKeyData,  options).toPromise();
    }

    /**
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * Use default emojis
     * @param param the request object
     */
    public useDefaultEmojis(param: EmojisApiUseDefaultEmojisRequest, options?: Configuration): Promise<UseDefaultEmojisResponse> {
        return this.api.useDefaultEmojis(param.apiToken, param.useDefaultEmojisData,  options).toPromise();
    }

}

import { ObservableGroupChannelApi } from "./ObservableAPI";
import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor} from "../apis/GroupChannelApi";

export interface GroupChannelApiGcAcceptInvitationRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcAcceptInvitation
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcAcceptInvitation
     */
    apiToken?: string
    /**
     * 
     * @type GcAcceptInvitationData
     * @memberof GroupChannelApigcAcceptInvitation
     */
    gcAcceptInvitationData?: GcAcceptInvitationData
}

export interface GroupChannelApiGcBanUserRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcBanUser
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcBanUser
     */
    apiToken?: string
    /**
     * 
     * @type GcBanUserData
     * @memberof GroupChannelApigcBanUser
     */
    gcBanUserData?: GcBanUserData
}

export interface GroupChannelApiGcCancelTheRegistrationOfOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCancelTheRegistrationOfOperators
     */
    channelUrl: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof GroupChannelApigcCancelTheRegistrationOfOperators
     */
    operatorIds: Array<string>
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCancelTheRegistrationOfOperators
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcCancelTheRegistrationOfOperators
     */
    deleteAll?: boolean
}

export interface GroupChannelApiGcCheckIfMemberByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCheckIfMemberById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCheckIfMemberById
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCheckIfMemberById
     */
    apiToken?: string
}

export interface GroupChannelApiGcCreateChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcCreateChannel
     */
    apiToken?: string
    /**
     * 
     * @type GcCreateChannelData
     * @memberof GroupChannelApigcCreateChannel
     */
    gcCreateChannelData?: GcCreateChannelData
}

export interface GroupChannelApiGcDeclineInvitationRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcDeclineInvitation
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcDeclineInvitation
     */
    apiToken?: string
    /**
     * 
     * @type GcDeclineInvitationData
     * @memberof GroupChannelApigcDeclineInvitation
     */
    gcDeclineInvitationData?: GcDeclineInvitationData
}

export interface GroupChannelApiGcDeleteChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcDeleteChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcDeleteChannelByUrl
     */
    apiToken?: string
}

export interface GroupChannelApiGcFreezeChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcFreezeChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcFreezeChannel
     */
    apiToken?: string
    /**
     * 
     * @type GcFreezeChannelData
     * @memberof GroupChannelApigcFreezeChannel
     */
    gcFreezeChannelData?: GcFreezeChannelData
}

export interface GroupChannelApiGcHideOrArchiveChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcHideOrArchiveChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcHideOrArchiveChannel
     */
    apiToken?: string
    /**
     * 
     * @type GcHideOrArchiveChannelData
     * @memberof GroupChannelApigcHideOrArchiveChannel
     */
    gcHideOrArchiveChannelData?: GcHideOrArchiveChannelData
}

export interface GroupChannelApiGcInviteAsMembersRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcInviteAsMembers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcInviteAsMembers
     */
    apiToken?: string
    /**
     * 
     * @type GcInviteAsMembersData
     * @memberof GroupChannelApigcInviteAsMembers
     */
    gcInviteAsMembersData?: GcInviteAsMembersData
}

export interface GroupChannelApiGcJoinChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcJoinChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcJoinChannel
     */
    apiToken?: string
    /**
     * 
     * @type GcJoinChannelData
     * @memberof GroupChannelApigcJoinChannel
     */
    gcJoinChannelData?: GcJoinChannelData
}

export interface GroupChannelApiGcLeaveChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcLeaveChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcLeaveChannel
     */
    apiToken?: string
    /**
     * 
     * @type GcLeaveChannelData
     * @memberof GroupChannelApigcLeaveChannel
     */
    gcLeaveChannelData?: GcLeaveChannelData
}

export interface GroupChannelApiGcListBannedUsersRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListBannedUsers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListBannedUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListBannedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListBannedUsers
     */
    limit?: number
}

export interface GroupChannelApiGcListChannelsRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListChannels
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    distinctMode?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    publicMode?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    superMode?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListChannels
     */
    createdAfter?: number
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListChannels
     */
    createdBefore?: number
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showEmpty?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showMember?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showMetadata?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    showFrozen?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    order?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metadataOrderKey?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    customTypeStartswith?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    channelUrls?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    nameContains?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    nameStartswith?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    membersExactlyIn?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    membersIncludeIn?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    queryType?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    membersNickname?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    membersNicknameContains?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metadataKey?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metadataValues?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metadataValueStartswith?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterKey?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterValues?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterValueGt?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterValueGte?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterValueLt?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    metacounterValueLte?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    includeSortedMetaarrayInLastMessage?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    customType?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    readReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    member?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListChannels
     */
    isDistinct?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    membersIn?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListChannels
     */
    userId?: string
}

export interface GroupChannelApiGcListMembersRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListMembers
     */
    limit?: number
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListMembers
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcListMembers
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    order?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    operatorFilter?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    memberStateFilter?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    mutedMemberFilter?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMembers
     */
    nicknameStartswith?: string
}

export interface GroupChannelApiGcListMutedUsersRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMutedUsers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMutedUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListMutedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListMutedUsers
     */
    limit?: number
}

export interface GroupChannelApiGcListOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListOperators
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcListOperators
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof GroupChannelApigcListOperators
     */
    limit?: number
}

export interface GroupChannelApiGcMuteUserRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcMuteUser
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcMuteUser
     */
    apiToken?: string
    /**
     * 
     * @type GcMuteUserData
     * @memberof GroupChannelApigcMuteUser
     */
    gcMuteUserData?: GcMuteUserData
}

export interface GroupChannelApiGcRegisterOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcRegisterOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcRegisterOperators
     */
    apiToken?: string
    /**
     * 
     * @type GcRegisterOperatorsData
     * @memberof GroupChannelApigcRegisterOperators
     */
    gcRegisterOperatorsData?: GcRegisterOperatorsData
}

export interface GroupChannelApiGcResetChatHistoryRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcResetChatHistory
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcResetChatHistory
     */
    apiToken?: string
    /**
     * 
     * @type GcResetChatHistoryData
     * @memberof GroupChannelApigcResetChatHistory
     */
    gcResetChatHistoryData?: GcResetChatHistoryData
}

export interface GroupChannelApiGcUnbanUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnbanUserById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnbanUserById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnbanUserById
     */
    apiToken?: string
}

export interface GroupChannelApiGcUnhideOrUnarchiveChannelRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnhideOrUnarchiveChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnhideOrUnarchiveChannel
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnhideOrUnarchiveChannel
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcUnhideOrUnarchiveChannel
     */
    shouldUnhideAll?: boolean
}

export interface GroupChannelApiGcUnmuteUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnmuteUserById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnmuteUserById
     */
    mutedUserId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUnmuteUserById
     */
    apiToken?: string
}

export interface GroupChannelApiGcUpdateBanByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUpdateBanById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUpdateBanById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUpdateBanById
     */
    apiToken?: string
    /**
     * 
     * @type GcUpdateBanByIdData
     * @memberof GroupChannelApigcUpdateBanById
     */
    gcUpdateBanByIdData?: GcUpdateBanByIdData
}

export interface GroupChannelApiGcUpdateChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUpdateChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcUpdateChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type GcUpdateChannelByUrlData
     * @memberof GroupChannelApigcUpdateChannelByUrl
     */
    gcUpdateChannelByUrlData?: GcUpdateChannelByUrlData
}

export interface GroupChannelApiGcViewBanByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewBanById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewBanById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewBanById
     */
    apiToken?: string
}

export interface GroupChannelApiGcViewChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    showDeliveryReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    showReadReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    showMember?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    readReceipt?: boolean
    /**
     * 
     * @type boolean
     * @memberof GroupChannelApigcViewChannelByUrl
     */
    member?: boolean
}

export interface GroupChannelApiGcViewMuteByIdRequest {
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewMuteById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewMuteById
     */
    mutedUserId: string
    /**
     * 
     * @type string
     * @memberof GroupChannelApigcViewMuteById
     */
    apiToken?: string
}

export class ObjectGroupChannelApi {
    private api: ObservableGroupChannelApi

    public constructor(configuration: Configuration, requestFactory?: GroupChannelApiRequestFactory, responseProcessor?: GroupChannelApiResponseProcessor) {
        this.api = new ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
     * Accept an invitation
     * @param param the request object
     */
    public gcAcceptInvitation(param: GroupChannelApiGcAcceptInvitationRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcAcceptInvitation(param.channelUrl, param.apiToken, param.gcAcceptInvitationData,  options).toPromise();
    }

    /**
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param param the request object
     */
    public gcBanUser(param: GroupChannelApiGcBanUserRequest, options?: Configuration): Promise<GcBanUserResponse> {
        return this.api.gcBanUser(param.channelUrl, param.apiToken, param.gcBanUserData,  options).toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param param the request object
     */
    public gcCancelTheRegistrationOfOperators(param: GroupChannelApiGcCancelTheRegistrationOfOperatorsRequest, options?: Configuration): Promise<void> {
        return this.api.gcCancelTheRegistrationOfOperators(param.channelUrl, param.operatorIds, param.apiToken, param.deleteAll,  options).toPromise();
    }

    /**
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * Check if member
     * @param param the request object
     */
    public gcCheckIfMemberById(param: GroupChannelApiGcCheckIfMemberByIdRequest, options?: Configuration): Promise<GcCheckIfMemberByIdResponse> {
        return this.api.gcCheckIfMemberById(param.channelUrl, param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * Create a channel
     * @param param the request object
     */
    public gcCreateChannel(param: GroupChannelApiGcCreateChannelRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcCreateChannel(param.apiToken, param.gcCreateChannelData,  options).toPromise();
    }

    /**
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * Decline an invitation
     * @param param the request object
     */
    public gcDeclineInvitation(param: GroupChannelApiGcDeclineInvitationRequest, options?: Configuration): Promise<void> {
        return this.api.gcDeclineInvitation(param.channelUrl, param.apiToken, param.gcDeclineInvitationData,  options).toPromise();
    }

    /**
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param param the request object
     */
    public gcDeleteChannelByUrl(param: GroupChannelApiGcDeleteChannelByUrlRequest, options?: Configuration): Promise<void> {
        return this.api.gcDeleteChannelByUrl(param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param param the request object
     */
    public gcFreezeChannel(param: GroupChannelApiGcFreezeChannelRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcFreezeChannel(param.channelUrl, param.apiToken, param.gcFreezeChannelData,  options).toPromise();
    }

    /**
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * Hide or archive a channel
     * @param param the request object
     */
    public gcHideOrArchiveChannel(param: GroupChannelApiGcHideOrArchiveChannelRequest, options?: Configuration): Promise<void> {
        return this.api.gcHideOrArchiveChannel(param.channelUrl, param.apiToken, param.gcHideOrArchiveChannelData,  options).toPromise();
    }

    /**
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * Invite as members
     * @param param the request object
     */
    public gcInviteAsMembers(param: GroupChannelApiGcInviteAsMembersRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcInviteAsMembers(param.channelUrl, param.apiToken, param.gcInviteAsMembersData,  options).toPromise();
    }

    /**
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * Join a channel
     * @param param the request object
     */
    public gcJoinChannel(param: GroupChannelApiGcJoinChannelRequest, options?: Configuration): Promise<void> {
        return this.api.gcJoinChannel(param.channelUrl, param.apiToken, param.gcJoinChannelData,  options).toPromise();
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param param the request object
     */
    public gcLeaveChannel(param: GroupChannelApiGcLeaveChannelRequest, options?: Configuration): Promise<void> {
        return this.api.gcLeaveChannel(param.channelUrl, param.apiToken, param.gcLeaveChannelData,  options).toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param param the request object
     */
    public gcListBannedUsers(param: GroupChannelApiGcListBannedUsersRequest, options?: Configuration): Promise<GcListBannedUsersResponse> {
        return this.api.gcListBannedUsers(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------
     * List channels
     * @param param the request object
     */
    public gcListChannels(param: GroupChannelApiGcListChannelsRequest, options?: Configuration): Promise<GcListChannelsResponse> {
        return this.api.gcListChannels(param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage, param.customType, param.readReceipt, param.member, param.isDistinct, param.membersIn, param.userId,  options).toPromise();
    }

    /**
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * List members
     * @param param the request object
     */
    public gcListMembers(param: GroupChannelApiGcListMembersRequest, options?: Configuration): Promise<GcListMembersResponse> {
        return this.api.gcListMembers(param.channelUrl, param.apiToken, param.token, param.limit, param.showDeliveryReceipt, param.showReadReceipt, param.order, param.operatorFilter, param.memberStateFilter, param.mutedMemberFilter, param.nicknameStartswith,  options).toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param param the request object
     */
    public gcListMutedUsers(param: GroupChannelApiGcListMutedUsersRequest, options?: Configuration): Promise<GcListMutedUsersResponse> {
        return this.api.gcListMutedUsers(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param param the request object
     */
    public gcListOperators(param: GroupChannelApiGcListOperatorsRequest, options?: Configuration): Promise<GcListOperatorsResponse> {
        return this.api.gcListOperators(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * Mute a user
     * @param param the request object
     */
    public gcMuteUser(param: GroupChannelApiGcMuteUserRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcMuteUser(param.channelUrl, param.apiToken, param.gcMuteUserData,  options).toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * Register operators
     * @param param the request object
     */
    public gcRegisterOperators(param: GroupChannelApiGcRegisterOperatorsRequest, options?: Configuration): Promise<GcRegisterOperatorsResponse> {
        return this.api.gcRegisterOperators(param.channelUrl, param.apiToken, param.gcRegisterOperatorsData,  options).toPromise();
    }

    /**
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * Reset chat history
     * @param param the request object
     */
    public gcResetChatHistory(param: GroupChannelApiGcResetChatHistoryRequest, options?: Configuration): Promise<void> {
        return this.api.gcResetChatHistory(param.channelUrl, param.apiToken, param.gcResetChatHistoryData,  options).toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param param the request object
     */
    public gcUnbanUserById(param: GroupChannelApiGcUnbanUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.gcUnbanUserById(param.channelUrl, param.bannedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide or unarchive a channel
     * @param param the request object
     */
    public gcUnhideOrUnarchiveChannel(param: GroupChannelApiGcUnhideOrUnarchiveChannelRequest, options?: Configuration): Promise<void> {
        return this.api.gcUnhideOrUnarchiveChannel(param.channelUrl, param.userId, param.apiToken, param.shouldUnhideAll,  options).toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param param the request object
     */
    public gcUnmuteUserById(param: GroupChannelApiGcUnmuteUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.gcUnmuteUserById(param.channelUrl, param.mutedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param param the request object
     */
    public gcUpdateBanById(param: GroupChannelApiGcUpdateBanByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.gcUpdateBanById(param.channelUrl, param.bannedUserId, param.apiToken, param.gcUpdateBanByIdData,  options).toPromise();
    }

    /**
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param param the request object
     */
    public gcUpdateChannelByUrl(param: GroupChannelApiGcUpdateChannelByUrlRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcUpdateChannelByUrl(param.channelUrl, param.apiToken, param.gcUpdateChannelByUrlData,  options).toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param param the request object
     */
    public gcViewBanById(param: GroupChannelApiGcViewBanByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.gcViewBanById(param.channelUrl, param.bannedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * View a channel
     * @param param the request object
     */
    public gcViewChannelByUrl(param: GroupChannelApiGcViewChannelByUrlRequest, options?: Configuration): Promise<SendBirdGroupChannel> {
        return this.api.gcViewChannelByUrl(param.channelUrl, param.apiToken, param.showDeliveryReceipt, param.showReadReceipt, param.showMember, param.readReceipt, param.member,  options).toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param param the request object
     */
    public gcViewMuteById(param: GroupChannelApiGcViewMuteByIdRequest, options?: Configuration): Promise<GcViewMuteByIdResponse> {
        return this.api.gcViewMuteById(param.channelUrl, param.mutedUserId, param.apiToken,  options).toPromise();
    }

}

import { ObservableMessagesApi } from "./ObservableAPI";
import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";

export interface MessagesApiAddExtraDataToMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiaddExtraDataToMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddExtraDataToMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddExtraDataToMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddExtraDataToMessage
     */
    apiToken?: string
    /**
     * 
     * @type AddExtraDataToMessageData
     * @memberof MessagesApiaddExtraDataToMessage
     */
    addExtraDataToMessageData?: AddExtraDataToMessageData
}

export interface MessagesApiAddReactionToAMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiaddReactionToAMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddReactionToAMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddReactionToAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiaddReactionToAMessage
     */
    apiToken?: string
    /**
     * 
     * @type AddReactionToAMessageData
     * @memberof MessagesApiaddReactionToAMessage
     */
    addReactionToAMessageData?: AddReactionToAMessageData
}

export interface MessagesApiDeleteMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApideleteMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApideleteMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApideleteMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApideleteMessageById
     */
    apiToken?: string
}

export interface MessagesApiGcMarkAllMessagesAsDeliveredRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigcMarkAllMessagesAsDelivered
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApigcMarkAllMessagesAsDelivered
     */
    apiToken?: string
    /**
     * 
     * @type GcMarkAllMessagesAsDeliveredData
     * @memberof MessagesApigcMarkAllMessagesAsDelivered
     */
    gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData
}

export interface MessagesApiGcMarkAllMessagesAsReadRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigcMarkAllMessagesAsRead
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApigcMarkAllMessagesAsRead
     */
    apiToken?: string
    /**
     * 
     * @type GcMarkAllMessagesAsReadData
     * @memberof MessagesApigcMarkAllMessagesAsRead
     */
    gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData
}

export interface MessagesApiGcViewNumberOfEachMembersUnreadMessagesRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigcViewNumberOfEachMembersUnreadMessages
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApigcViewNumberOfEachMembersUnreadMessages
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof MessagesApigcViewNumberOfEachMembersUnreadMessages
     */
    userIds?: string
}

export interface MessagesApiListMessagesRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    channelUrl: string
    /**
     * 
     * @type number
     * @memberof MessagesApilistMessages
     */
    messageTs: number
    /**
     * 
     * @type number
     * @memberof MessagesApilistMessages
     */
    messageId: number
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    apiToken?: string
    /**
     * 
     * @type number
     * @memberof MessagesApilistMessages
     */
    prevLimit?: number
    /**
     * 
     * @type number
     * @memberof MessagesApilistMessages
     */
    nextLimit?: number
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    include?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    reverse?: boolean
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    senderId?: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    senderIds?: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    operatorFilter?: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    messageType?: string
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    includingRemoved?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    includeReactions?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    withSortedMetaArray?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    showSubchannelMessagesOnly?: boolean
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    userId?: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistMessages
     */
    customType?: string
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistMessages
     */
    withMetaArray?: boolean
}

export interface MessagesApiListReactionsOfMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApilistReactionsOfMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistReactionsOfMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistReactionsOfMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApilistReactionsOfMessage
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof MessagesApilistReactionsOfMessage
     */
    listUsers?: boolean
}

export interface MessagesApiRemoveExtraDataFromMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveExtraDataFromMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveExtraDataFromMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveExtraDataFromMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveExtraDataFromMessage
     */
    apiToken?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof MessagesApiremoveExtraDataFromMessage
     */
    keys?: Array<string>
}

export interface MessagesApiRemoveReactionFromAMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    userId?: string
    /**
     * 
     * @type string
     * @memberof MessagesApiremoveReactionFromAMessage
     */
    reaction?: string
}

export interface MessagesApiSendMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApisendMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApisendMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApisendMessage
     */
    apiToken?: string
    /**
     * 
     * @type SendMessageData
     * @memberof MessagesApisendMessage
     */
    sendMessageData?: SendMessageData
}

export interface MessagesApiTranslateMessageIntoOtherLanguagesRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApitranslateMessageIntoOtherLanguages
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApitranslateMessageIntoOtherLanguages
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApitranslateMessageIntoOtherLanguages
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApitranslateMessageIntoOtherLanguages
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof MessagesApitranslateMessageIntoOtherLanguages
     */
    body?: any
}

export interface MessagesApiUpdateExtraDataInMessageRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateExtraDataInMessage
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateExtraDataInMessage
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateExtraDataInMessage
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateExtraDataInMessage
     */
    apiToken?: string
    /**
     * 
     * @type UpdateExtraDataInMessageData
     * @memberof MessagesApiupdateExtraDataInMessage
     */
    updateExtraDataInMessageData?: UpdateExtraDataInMessageData
}

export interface MessagesApiUpdateMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiupdateMessageById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateMessageByIdData
     * @memberof MessagesApiupdateMessageById
     */
    updateMessageByIdData?: UpdateMessageByIdData
}

export interface MessagesApiViewMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiviewMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiviewMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiviewMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof MessagesApiviewMessageById
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof MessagesApiviewMessageById
     */
    withSortedMetaArray?: boolean
    /**
     * 
     * @type boolean
     * @memberof MessagesApiviewMessageById
     */
    withMetaArray?: boolean
}

export interface MessagesApiViewTotalNumberOfMessagesInChannelRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApiviewTotalNumberOfMessagesInChannel
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof MessagesApiviewTotalNumberOfMessagesInChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof MessagesApiviewTotalNumberOfMessagesInChannel
     */
    apiToken?: string
}

export class ObjectMessagesApi {
    private api: ObservableMessagesApi

    public constructor(configuration: Configuration, requestFactory?: MessagesApiRequestFactory, responseProcessor?: MessagesApiResponseProcessor) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
     * Add extra data to a message
     * @param param the request object
     */
    public addExtraDataToMessage(param: MessagesApiAddExtraDataToMessageRequest, options?: Configuration): Promise<AddExtraDataToMessageResponse> {
        return this.api.addExtraDataToMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.addExtraDataToMessageData,  options).toPromise();
    }

    /**
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * Add a reaction to a message
     * @param param the request object
     */
    public addReactionToAMessage(param: MessagesApiAddReactionToAMessageRequest, options?: Configuration): Promise<AddReactionToAMessageResponse> {
        return this.api.addReactionToAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.addReactionToAMessageData,  options).toPromise();
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * Delete a message
     * @param param the request object
     */
    public deleteMessageById(param: MessagesApiDeleteMessageByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * Mark all messages as delivered
     * @param param the request object
     */
    public gcMarkAllMessagesAsDelivered(param: MessagesApiGcMarkAllMessagesAsDeliveredRequest, options?: Configuration): Promise<GcMarkAllMessagesAsDeliveredResponse> {
        return this.api.gcMarkAllMessagesAsDelivered(param.channelUrl, param.apiToken, param.gcMarkAllMessagesAsDeliveredData,  options).toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param param the request object
     */
    public gcMarkAllMessagesAsRead(param: MessagesApiGcMarkAllMessagesAsReadRequest, options?: Configuration): Promise<void> {
        return this.api.gcMarkAllMessagesAsRead(param.channelUrl, param.apiToken, param.gcMarkAllMessagesAsReadData,  options).toPromise();
    }

    /**
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * View number of each member's unread messages
     * @param param the request object
     */
    public gcViewNumberOfEachMembersUnreadMessages(param: MessagesApiGcViewNumberOfEachMembersUnreadMessagesRequest, options?: Configuration): Promise<GcViewNumberOfEachMembersUnreadMessagesResponse> {
        return this.api.gcViewNumberOfEachMembersUnreadMessages(param.channelUrl, param.apiToken, param.userIds,  options).toPromise();
    }

    /**
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param param the request object
     */
    public listMessages(param: MessagesApiListMessagesRequest, options?: Configuration): Promise<ListMessagesResponse> {
        return this.api.listMessages(param.channelType, param.channelUrl, param.messageTs, param.messageId, param.apiToken, param.prevLimit, param.nextLimit, param.include, param.reverse, param.senderId, param.senderIds, param.operatorFilter, param.customTypes, param.messageType, param.includingRemoved, param.includeReactions, param.withSortedMetaArray, param.showSubchannelMessagesOnly, param.userId, param.customType, param.withMetaArray,  options).toPromise();
    }

    /**
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * List reactions of a message
     * @param param the request object
     */
    public listReactionsOfMessage(param: MessagesApiListReactionsOfMessageRequest, options?: Configuration): Promise<ListReactionsOfMessageResponse> {
        return this.api.listReactionsOfMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.listUsers,  options).toPromise();
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * Remove extra data from a message
     * @param param the request object
     */
    public removeExtraDataFromMessage(param: MessagesApiRemoveExtraDataFromMessageRequest, options?: Configuration): Promise<void> {
        return this.api.removeExtraDataFromMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.keys,  options).toPromise();
    }

    /**
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * Remove a reaction from a message
     * @param param the request object
     */
    public removeReactionFromAMessage(param: MessagesApiRemoveReactionFromAMessageRequest, options?: Configuration): Promise<RemoveReactionFromAMessageResponse> {
        return this.api.removeReactionFromAMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.userId, param.reaction,  options).toPromise();
    }

    /**
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * Send a message
     * @param param the request object
     */
    public sendMessage(param: MessagesApiSendMessageRequest, options?: Configuration): Promise<SendBirdMessageResponse> {
        return this.api.sendMessage(param.channelType, param.channelUrl, param.apiToken, param.sendMessageData,  options).toPromise();
    }

    /**
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * Translate a message into other languages
     * @param param the request object
     */
    public translateMessageIntoOtherLanguages(param: MessagesApiTranslateMessageIntoOtherLanguagesRequest, options?: Configuration): Promise<SendBirdMessageResponse> {
        return this.api.translateMessageIntoOtherLanguages(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * Update extra data in a message
     * @param param the request object
     */
    public updateExtraDataInMessage(param: MessagesApiUpdateExtraDataInMessageRequest, options?: Configuration): Promise<UpdateExtraDataInMessageResponse> {
        return this.api.updateExtraDataInMessage(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateExtraDataInMessageData,  options).toPromise();
    }

    /**
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * Update a message
     * @param param the request object
     */
    public updateMessageById(param: MessagesApiUpdateMessageByIdRequest, options?: Configuration): Promise<SendBirdMessageResponse> {
        return this.api.updateMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.updateMessageByIdData,  options).toPromise();
    }

    /**
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * View a message
     * @param param the request object
     */
    public viewMessageById(param: MessagesApiViewMessageByIdRequest, options?: Configuration): Promise<SendBirdMessageResponse> {
        return this.api.viewMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.withSortedMetaArray, param.withMetaArray,  options).toPromise();
    }

    /**
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * View total number of messages in a channel
     * @param param the request object
     */
    public viewTotalNumberOfMessagesInChannel(param: MessagesApiViewTotalNumberOfMessagesInChannelRequest, options?: Configuration): Promise<ViewTotalNumberOfMessagesInChannelResponse> {
        return this.api.viewTotalNumberOfMessagesInChannel(param.channelType, param.channelUrl, param.apiToken,  options).toPromise();
    }

}

import { ObservableMigrationApi } from "./ObservableAPI";
import { MigrationApiRequestFactory, MigrationApiResponseProcessor} from "../apis/MigrationApi";

export interface MigrationApiMigrateMessagesByUrlRequest {
    /**
     * 
     * @type string
     * @memberof MigrationApimigrateMessagesByUrl
     */
    targetChannelUrl: string
    /**
     * 
     * @type string
     * @memberof MigrationApimigrateMessagesByUrl
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof MigrationApimigrateMessagesByUrl
     */
    body?: any
}

export class ObjectMigrationApi {
    private api: ObservableMigrationApi

    public constructor(configuration: Configuration, requestFactory?: MigrationApiRequestFactory, responseProcessor?: MigrationApiResponseProcessor) {
        this.api = new ObservableMigrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * Migrate messages
     * @param param the request object
     */
    public migrateMessagesByUrl(param: MigrationApiMigrateMessagesByUrlRequest, options?: Configuration): Promise<void> {
        return this.api.migrateMessagesByUrl(param.targetChannelUrl, param.apiToken, param.body,  options).toPromise();
    }

}

import { ObservableOpenChannelApi } from "./ObservableAPI";
import { OpenChannelApiRequestFactory, OpenChannelApiResponseProcessor} from "../apis/OpenChannelApi";

export interface OpenChannelApiOcBanUserRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocBanUser
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocBanUser
     */
    apiToken?: string
    /**
     * 
     * @type OcBanUserData
     * @memberof OpenChannelApiocBanUser
     */
    ocBanUserData?: OcBanUserData
}

export interface OpenChannelApiOcCancelTheRegistrationOfOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocCancelTheRegistrationOfOperators
     */
    channelUrl: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof OpenChannelApiocCancelTheRegistrationOfOperators
     */
    operatorIds: Array<string>
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocCancelTheRegistrationOfOperators
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof OpenChannelApiocCancelTheRegistrationOfOperators
     */
    deleteAll?: boolean
}

export interface OpenChannelApiOcCreateChannelRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocCreateChannel
     */
    apiToken?: string
    /**
     * 
     * @type OcCreateChannelData
     * @memberof OpenChannelApiocCreateChannel
     */
    ocCreateChannelData?: OcCreateChannelData
}

export interface OpenChannelApiOcDeleteChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocDeleteChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocDeleteChannelByUrl
     */
    apiToken?: string
}

export interface OpenChannelApiOcFreezeChannelRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocFreezeChannel
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocFreezeChannel
     */
    apiToken?: string
    /**
     * 
     * @type OcFreezeChannelData
     * @memberof OpenChannelApiocFreezeChannel
     */
    ocFreezeChannelData?: OcFreezeChannelData
}

export interface OpenChannelApiOcListBannedUsersRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListBannedUsers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListBannedUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListBannedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApiocListBannedUsers
     */
    limit?: number
}

export interface OpenChannelApiOcListChannelsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApiocListChannels
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    nameContains?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    urlContains?: string
    /**
     * 
     * @type boolean
     * @memberof OpenChannelApiocListChannels
     */
    showFrozen?: boolean
    /**
     * 
     * @type boolean
     * @memberof OpenChannelApiocListChannels
     */
    showMetadata?: boolean
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListChannels
     */
    customType?: string
}

export interface OpenChannelApiOcListMutedUsersRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListMutedUsers
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListMutedUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListMutedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApiocListMutedUsers
     */
    limit?: number
}

export interface OpenChannelApiOcListOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListOperators
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListOperators
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApiocListOperators
     */
    limit?: number
}

export interface OpenChannelApiOcListParticipantsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListParticipants
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListParticipants
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocListParticipants
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof OpenChannelApiocListParticipants
     */
    limit?: number
}

export interface OpenChannelApiOcMuteUserRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocMuteUser
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocMuteUser
     */
    apiToken?: string
    /**
     * 
     * @type OcMuteUserData
     * @memberof OpenChannelApiocMuteUser
     */
    ocMuteUserData?: OcMuteUserData
}

export interface OpenChannelApiOcRegisterOperatorsRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocRegisterOperators
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocRegisterOperators
     */
    apiToken?: string
    /**
     * 
     * @type OcRegisterOperatorsData
     * @memberof OpenChannelApiocRegisterOperators
     */
    ocRegisterOperatorsData?: OcRegisterOperatorsData
}

export interface OpenChannelApiOcUnbanUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnbanUserById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnbanUserById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnbanUserById
     */
    apiToken?: string
}

export interface OpenChannelApiOcUnmuteUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnmuteUserById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnmuteUserById
     */
    mutedUserId: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUnmuteUserById
     */
    apiToken?: string
}

export interface OpenChannelApiOcUpdateBanByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUpdateBanById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUpdateBanById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUpdateBanById
     */
    apiToken?: string
    /**
     * 
     * @type OcUpdateBanByIdData
     * @memberof OpenChannelApiocUpdateBanById
     */
    ocUpdateBanByIdData?: OcUpdateBanByIdData
}

export interface OpenChannelApiOcUpdateChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUpdateChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocUpdateChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type OcUpdateChannelByUrlData
     * @memberof OpenChannelApiocUpdateChannelByUrl
     */
    ocUpdateChannelByUrlData?: OcUpdateChannelByUrlData
}

export interface OpenChannelApiOcViewBanByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewBanById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewBanById
     */
    bannedUserId: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewBanById
     */
    apiToken?: string
}

export interface OpenChannelApiOcViewChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewChannelByUrl
     */
    apiToken?: string
}

export interface OpenChannelApiOcViewMuteByIdRequest {
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewMuteById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewMuteById
     */
    mutedUserId: string
    /**
     * 
     * @type string
     * @memberof OpenChannelApiocViewMuteById
     */
    apiToken?: string
}

export class ObjectOpenChannelApi {
    private api: ObservableOpenChannelApi

    public constructor(configuration: Configuration, requestFactory?: OpenChannelApiRequestFactory, responseProcessor?: OpenChannelApiResponseProcessor) {
        this.api = new ObservableOpenChannelApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param param the request object
     */
    public ocBanUser(param: OpenChannelApiOcBanUserRequest, options?: Configuration): Promise<OcBanUserResponse> {
        return this.api.ocBanUser(param.channelUrl, param.apiToken, param.ocBanUserData,  options).toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param param the request object
     */
    public ocCancelTheRegistrationOfOperators(param: OpenChannelApiOcCancelTheRegistrationOfOperatorsRequest, options?: Configuration): Promise<void> {
        return this.api.ocCancelTheRegistrationOfOperators(param.channelUrl, param.operatorIds, param.apiToken, param.deleteAll,  options).toPromise();
    }

    /**
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * Create a channel
     * @param param the request object
     */
    public ocCreateChannel(param: OpenChannelApiOcCreateChannelRequest, options?: Configuration): Promise<SendBirdOpenChannel> {
        return this.api.ocCreateChannel(param.apiToken, param.ocCreateChannelData,  options).toPromise();
    }

    /**
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param param the request object
     */
    public ocDeleteChannelByUrl(param: OpenChannelApiOcDeleteChannelByUrlRequest, options?: Configuration): Promise<void> {
        return this.api.ocDeleteChannelByUrl(param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param param the request object
     */
    public ocFreezeChannel(param: OpenChannelApiOcFreezeChannelRequest, options?: Configuration): Promise<SendBirdOpenChannel> {
        return this.api.ocFreezeChannel(param.channelUrl, param.apiToken, param.ocFreezeChannelData,  options).toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param param the request object
     */
    public ocListBannedUsers(param: OpenChannelApiOcListBannedUsersRequest, options?: Configuration): Promise<OcListBannedUsersResponse> {
        return this.api.ocListBannedUsers(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * List channels
     * @param param the request object
     */
    public ocListChannels(param: OpenChannelApiOcListChannelsRequest, options?: Configuration): Promise<OcListChannelsResponse> {
        return this.api.ocListChannels(param.apiToken, param.token, param.limit, param.customTypes, param.nameContains, param.urlContains, param.showFrozen, param.showMetadata, param.customType,  options).toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param param the request object
     */
    public ocListMutedUsers(param: OpenChannelApiOcListMutedUsersRequest, options?: Configuration): Promise<OcListMutedUsersResponse> {
        return this.api.ocListMutedUsers(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param param the request object
     */
    public ocListOperators(param: OpenChannelApiOcListOperatorsRequest, options?: Configuration): Promise<OcListOperatorsResponse> {
        return this.api.ocListOperators(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * List participants
     * @param param the request object
     */
    public ocListParticipants(param: OpenChannelApiOcListParticipantsRequest, options?: Configuration): Promise<OcListParticipantsResponse> {
        return this.api.ocListParticipants(param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * Mute a user
     * @param param the request object
     */
    public ocMuteUser(param: OpenChannelApiOcMuteUserRequest, options?: Configuration): Promise<SendBirdOpenChannel> {
        return this.api.ocMuteUser(param.channelUrl, param.apiToken, param.ocMuteUserData,  options).toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * Register operators
     * @param param the request object
     */
    public ocRegisterOperators(param: OpenChannelApiOcRegisterOperatorsRequest, options?: Configuration): Promise<void> {
        return this.api.ocRegisterOperators(param.channelUrl, param.apiToken, param.ocRegisterOperatorsData,  options).toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param param the request object
     */
    public ocUnbanUserById(param: OpenChannelApiOcUnbanUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.ocUnbanUserById(param.channelUrl, param.bannedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param param the request object
     */
    public ocUnmuteUserById(param: OpenChannelApiOcUnmuteUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.ocUnmuteUserById(param.channelUrl, param.mutedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param param the request object
     */
    public ocUpdateBanById(param: OpenChannelApiOcUpdateBanByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.ocUpdateBanById(param.channelUrl, param.bannedUserId, param.apiToken, param.ocUpdateBanByIdData,  options).toPromise();
    }

    /**
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param param the request object
     */
    public ocUpdateChannelByUrl(param: OpenChannelApiOcUpdateChannelByUrlRequest, options?: Configuration): Promise<SendBirdOpenChannel> {
        return this.api.ocUpdateChannelByUrl(param.channelUrl, param.apiToken, param.ocUpdateChannelByUrlData,  options).toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param param the request object
     */
    public ocViewBanById(param: OpenChannelApiOcViewBanByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.ocViewBanById(param.channelUrl, param.bannedUserId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * View a channel
     * @param param the request object
     */
    public ocViewChannelByUrl(param: OpenChannelApiOcViewChannelByUrlRequest, options?: Configuration): Promise<SendBirdOpenChannel> {
        return this.api.ocViewChannelByUrl(param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param param the request object
     */
    public ocViewMuteById(param: OpenChannelApiOcViewMuteByIdRequest, options?: Configuration): Promise<OcViewMuteByIdResponse> {
        return this.api.ocViewMuteById(param.channelUrl, param.mutedUserId, param.apiToken,  options).toPromise();
    }

}

import { ObservableReportContentSubjectApi } from "./ObservableAPI";
import { ReportContentSubjectApiRequestFactory, ReportContentSubjectApiResponseProcessor} from "../apis/ReportContentSubjectApi";

export interface ReportContentSubjectApiListReportsRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReports
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReports
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReports
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReports
     */
    startTs?: number
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReports
     */
    endTs?: number
}

export interface ReportContentSubjectApiListReportsOnChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnChannelByUrl
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnChannelByUrl
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReportsOnChannelByUrl
     */
    limit?: number
}

export interface ReportContentSubjectApiListReportsOnMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReportsOnMessageById
     */
    limit?: number
}

export interface ReportContentSubjectApiListReportsOnUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnUserById
     */
    offendingUserId: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnUserById
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApilistReportsOnUserById
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof ReportContentSubjectApilistReportsOnUserById
     */
    limit?: number
}

export interface ReportContentSubjectApiReportChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportChannelByUrl
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type ReportChannelByUrlData
     * @memberof ReportContentSubjectApireportChannelByUrl
     */
    reportChannelByUrlData?: ReportChannelByUrlData
}

export interface ReportContentSubjectApiReportMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportMessageById
     */
    apiToken?: string
    /**
     * 
     * @type ReportMessageByIdData
     * @memberof ReportContentSubjectApireportMessageById
     */
    reportMessageByIdData?: ReportMessageByIdData
}

export interface ReportContentSubjectApiReportUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportUserById
     */
    offendingUserId: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApireportUserById
     */
    apiToken?: string
    /**
     * 
     * @type ReportUserByIdData
     * @memberof ReportContentSubjectApireportUserById
     */
    reportUserByIdData?: ReportUserByIdData
}

export interface ReportContentSubjectApiViewModeratedMessageByIdRequest {
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApiviewModeratedMessageById
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApiviewModeratedMessageById
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApiviewModeratedMessageById
     */
    messageId: string
    /**
     * 
     * @type string
     * @memberof ReportContentSubjectApiviewModeratedMessageById
     */
    apiToken?: string
}

export class ObjectReportContentSubjectApi {
    private api: ObservableReportContentSubjectApi

    public constructor(configuration: Configuration, requestFactory?: ReportContentSubjectApiRequestFactory, responseProcessor?: ReportContentSubjectApiResponseProcessor) {
        this.api = new ObservableReportContentSubjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * List reports
     * @param param the request object
     */
    public listReports(param: ReportContentSubjectApiListReportsRequest, options?: Configuration): Promise<ListReportsResponse> {
        return this.api.listReports(param.apiToken, param.token, param.limit, param.startTs, param.endTs,  options).toPromise();
    }

    /**
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * List reports on a channel
     * @param param the request object
     */
    public listReportsOnChannelByUrl(param: ReportContentSubjectApiListReportsOnChannelByUrlRequest, options?: Configuration): Promise<ListReportsOnChannelByUrlResponse> {
        return this.api.listReportsOnChannelByUrl(param.channelType, param.channelUrl, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * List reports on a message
     * @param param the request object
     */
    public listReportsOnMessageById(param: ReportContentSubjectApiListReportsOnMessageByIdRequest, options?: Configuration): Promise<ListReportsOnMessageByIdResponse> {
        return this.api.listReportsOnMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * List reports on a user
     * @param param the request object
     */
    public listReportsOnUserById(param: ReportContentSubjectApiListReportsOnUserByIdRequest, options?: Configuration): Promise<ListReportsOnUserByIdResponse> {
        return this.api.listReportsOnUserById(param.offendingUserId, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * Report a channel
     * @param param the request object
     */
    public reportChannelByUrl(param: ReportContentSubjectApiReportChannelByUrlRequest, options?: Configuration): Promise<ReportChannelByUrlResponse> {
        return this.api.reportChannelByUrl(param.channelType, param.channelUrl, param.apiToken, param.reportChannelByUrlData,  options).toPromise();
    }

    /**
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * Report a message
     * @param param the request object
     */
    public reportMessageById(param: ReportContentSubjectApiReportMessageByIdRequest, options?: Configuration): Promise<ReportMessageByIdResponse> {
        return this.api.reportMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken, param.reportMessageByIdData,  options).toPromise();
    }

    /**
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * Report a user
     * @param param the request object
     */
    public reportUserById(param: ReportContentSubjectApiReportUserByIdRequest, options?: Configuration): Promise<ReportUserByIdResponse> {
        return this.api.reportUserById(param.offendingUserId, param.apiToken, param.reportUserByIdData,  options).toPromise();
    }

    /**
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * View a moderated message
     * @param param the request object
     */
    public viewModeratedMessageById(param: ReportContentSubjectApiViewModeratedMessageByIdRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.viewModeratedMessageById(param.channelType, param.channelUrl, param.messageId, param.apiToken,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiAddRegistrationOrDeviceTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiaddRegistrationOrDeviceToken
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiaddRegistrationOrDeviceToken
     */
    tokenType: string
    /**
     * 
     * @type string
     * @memberof UserApiaddRegistrationOrDeviceToken
     */
    apiToken?: string
    /**
     * 
     * @type AddRegistrationOrDeviceTokenData
     * @memberof UserApiaddRegistrationOrDeviceToken
     */
    addRegistrationOrDeviceTokenData?: AddRegistrationOrDeviceTokenData
}

export interface UserApiBanFromChannelsWithCustomChannelTypesRequest {
    /**
     * 
     * @type string
     * @memberof UserApibanFromChannelsWithCustomChannelTypes
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApibanFromChannelsWithCustomChannelTypes
     */
    apiToken?: string
    /**
     * 
     * @type BanFromChannelsWithCustomChannelTypesData
     * @memberof UserApibanFromChannelsWithCustomChannelTypes
     */
    banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData
}

export interface UserApiBlockUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApiblockUser
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiblockUser
     */
    apiToken?: string
    /**
     * 
     * @type BlockUserData
     * @memberof UserApiblockUser
     */
    blockUserData?: BlockUserData
}

export interface UserApiChoosePushNotificationContentTemplateRequest {
    /**
     * 
     * @type string
     * @memberof UserApichoosePushNotificationContentTemplate
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApichoosePushNotificationContentTemplate
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof UserApichoosePushNotificationContentTemplate
     */
    body?: any
}

export interface UserApiCreateUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApicreateUser
     */
    apiToken?: string
    /**
     * 
     * @type CreateUserData
     * @memberof UserApicreateUser
     */
    createUserData?: CreateUserData
}

export interface UserApiDeleteUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApideleteUserById
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApideleteUserById
     */
    apiToken?: string
}

export interface UserApiLeaveMyGroupChannelsRequest {
    /**
     * 
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
     * @type LeaveMyGroupChannelsData
     * @memberof UserApileaveMyGroupChannels
     */
    leaveMyGroupChannelsData?: LeaveMyGroupChannelsData
}

export interface UserApiListBannedChannelsRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistBannedChannels
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistBannedChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApilistBannedChannels
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof UserApilistBannedChannels
     */
    limit?: number
}

export interface UserApiListBlockedUsersRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof UserApilistBlockedUsers
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    userIds?: string
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    metadatakey?: string
    /**
     * 
     * @type string
     * @memberof UserApilistBlockedUsers
     */
    metadatavaluesIn?: string
}

export interface UserApiListMutedChannelsRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistMutedChannels
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistMutedChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMutedChannels
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof UserApilistMutedChannels
     */
    limit?: number
}

export interface UserApiListMyGroupChannelsRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    token?: string
    /**
     * 
     * @type number
     * @memberof UserApilistMyGroupChannels
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    distinctMode?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    publicMode?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    superMode?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    hiddenMode?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    memberStateFilter?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    unreadFilter?: string
    /**
     * 
     * @type number
     * @memberof UserApilistMyGroupChannels
     */
    createdAfter?: number
    /**
     * 
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
    showFrozen?: boolean
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
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    order?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataOrderKey?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    customTypeStartswith?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    channelUrls?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    nameContains?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    nameStartswith?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersExactlyIn?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersIncludeIn?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    queryType?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersNickname?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    membersNicknameContains?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    searchQuery?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    searchFields?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataKey?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataValues?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metadataValueStartswith?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterKey?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValues?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueGt?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueGte?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueLt?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    metacounterValueLte?: string
    /**
     * 
     * @type string
     * @memberof UserApilistMyGroupChannels
     */
    customType?: string
}

export interface UserApiListRegistrationOrDeviceTokensRequest {
    /**
     * 
     * @type string
     * @memberof UserApilistRegistrationOrDeviceTokens
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApilistRegistrationOrDeviceTokens
     */
    tokenType: string
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
    apiToken?: string
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
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    activeMode?: string
    /**
     * 
     * @type boolean
     * @memberof UserApilistUsers
     */
    showBot?: boolean
    /**
     * 
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
     * 
     * @type string
     * @memberof UserApilistUsers
     */
    metadatavaluesIn?: string
}

export interface UserApiMarkAllMessagesAsReadRequest {
    /**
     * 
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
     * @type MarkAllMessagesAsReadData
     * @memberof UserApimarkAllMessagesAsRead
     */
    markAllMessagesAsReadData?: MarkAllMessagesAsReadData
}

export interface UserApiMuteInChannelsWithCustomChannelTypesRequest {
    /**
     * 
     * @type string
     * @memberof UserApimuteInChannelsWithCustomChannelTypes
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApimuteInChannelsWithCustomChannelTypes
     */
    apiToken?: string
    /**
     * 
     * @type MuteInChannelsWithCustomChannelTypesData
     * @memberof UserApimuteInChannelsWithCustomChannelTypes
     */
    muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData
}

export interface UserApiRegisterAsOperatorToChannelsWithCustomChannelTypesRequest {
    /**
     * 
     * @type string
     * @memberof UserApiregisterAsOperatorToChannelsWithCustomChannelTypes
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiregisterAsOperatorToChannelsWithCustomChannelTypes
     */
    apiToken?: string
    /**
     * 
     * @type RegisterAsOperatorToChannelsWithCustomChannelTypesData
     * @memberof UserApiregisterAsOperatorToChannelsWithCustomChannelTypes
     */
    registerAsOperatorToChannelsWithCustomChannelTypesData?: RegisterAsOperatorToChannelsWithCustomChannelTypesData
}

export interface UserApiRemoveRegistrationOrDeviceTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceToken
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceToken
     */
    apiToken?: string
}

export interface UserApiRemoveRegistrationOrDeviceTokenByTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenByToken
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenByToken
     */
    tokenType: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenByToken
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenByToken
     */
    apiToken?: string
}

export interface UserApiRemoveRegistrationOrDeviceTokenFromOwnerByTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenFromOwnerByToken
     */
    tokenType: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenFromOwnerByToken
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveRegistrationOrDeviceTokenFromOwnerByToken
     */
    apiToken?: string
}

export interface UserApiResetPushPreferencesRequest {
    /**
     * 
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

export interface UserApiUnblockUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApiunblockUserById
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiunblockUserById
     */
    targetId: string
    /**
     * 
     * @type string
     * @memberof UserApiunblockUserById
     */
    apiToken?: string
}

export interface UserApiUpdateChannelInvitationPreferenceRequest {
    /**
     * 
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
     * @type UpdateChannelInvitationPreferenceData
     * @memberof UserApiupdateChannelInvitationPreference
     */
    updateChannelInvitationPreferenceData?: UpdateChannelInvitationPreferenceData
}

export interface UserApiUpdateCountPreferenceOfChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfChannelByUrl
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateCountPreferenceOfChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type UpdateCountPreferenceOfChannelByUrlData
     * @memberof UserApiupdateCountPreferenceOfChannelByUrl
     */
    updateCountPreferenceOfChannelByUrlData?: UpdateCountPreferenceOfChannelByUrlData
}

export interface UserApiUpdatePushPreferencesRequest {
    /**
     * 
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
     * @type UpdatePushPreferencesData
     * @memberof UserApiupdatePushPreferences
     */
    updatePushPreferencesData?: UpdatePushPreferencesData
}

export interface UserApiUpdatePushPreferencesForChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof UserApiupdatePushPreferencesForChannelByUrl
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdatePushPreferencesForChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiupdatePushPreferencesForChannelByUrl
     */
    apiToken?: string
    /**
     * 
     * @type UpdatePushPreferencesForChannelByUrlData
     * @memberof UserApiupdatePushPreferencesForChannelByUrl
     */
    updatePushPreferencesForChannelByUrlData?: UpdatePushPreferencesForChannelByUrlData
}

export interface UserApiUpdateUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApiupdateUserById
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiupdateUserById
     */
    apiToken?: string
    /**
     * 
     * @type UpdateUserByIdData
     * @memberof UserApiupdateUserById
     */
    updateUserByIdData?: UpdateUserByIdData
}

export interface UserApiViewChannelInvitationPreferenceRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewChannelInvitationPreference
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewChannelInvitationPreference
     */
    apiToken?: string
}

export interface UserApiViewCountPreferenceOfChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewCountPreferenceOfChannelByUrl
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewCountPreferenceOfChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiviewCountPreferenceOfChannelByUrl
     */
    apiToken?: string
}

export interface UserApiViewNumberOfChannelsByJoinStatusRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsByJoinStatus
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsByJoinStatus
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsByJoinStatus
     */
    state?: string
}

export interface UserApiViewNumberOfChannelsWithUnreadMessagesRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    apiToken?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    customTypes?: Array<string>
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfChannelsWithUnreadMessages
     */
    superMode?: string
}

export interface UserApiViewNumberOfUnreadItemsRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadItems
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadItems
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadItems
     */
    customType?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadItems
     */
    itemKeys?: string
}

export interface UserApiViewNumberOfUnreadMessagesRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewNumberOfUnreadMessages
     */
    superMode?: string
}

export interface UserApiViewPushPreferencesRequest {
    /**
     * 
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

export interface UserApiViewPushPreferencesForChannelByUrlRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewPushPreferencesForChannelByUrl
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewPushPreferencesForChannelByUrl
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserApiviewPushPreferencesForChannelByUrl
     */
    apiToken?: string
}

export interface UserApiViewUserByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewUserById
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserApiviewUserById
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof UserApiviewUserById
     */
    includeUnreadCount?: boolean
    /**
     * 
     * @type string
     * @memberof UserApiviewUserById
     */
    customTypes?: string
    /**
     * 
     * @type string
     * @memberof UserApiviewUserById
     */
    superMode?: string
}

export interface UserApiViewWhoOwnsRegistrationOrDeviceTokenByTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiviewWhoOwnsRegistrationOrDeviceTokenByToken
     */
    tokenType: string
    /**
     * 
     * @type string
     * @memberof UserApiviewWhoOwnsRegistrationOrDeviceTokenByToken
     */
    token: string
    /**
     * 
     * @type string
     * @memberof UserApiviewWhoOwnsRegistrationOrDeviceTokenByToken
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
    public addRegistrationOrDeviceToken(param: UserApiAddRegistrationOrDeviceTokenRequest, options?: Configuration): Promise<AddRegistrationOrDeviceTokenResponse> {
        return this.api.addRegistrationOrDeviceToken(param.userId, param.tokenType, param.apiToken, param.addRegistrationOrDeviceTokenData,  options).toPromise();
    }

    /**
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * Ban from channels with custom channel types
     * @param param the request object
     */
    public banFromChannelsWithCustomChannelTypes(param: UserApiBanFromChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<void> {
        return this.api.banFromChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.banFromChannelsWithCustomChannelTypesData,  options).toPromise();
    }

    /**
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * Block a user
     * @param param the request object
     */
    public blockUser(param: UserApiBlockUserRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.blockUser(param.userId, param.apiToken, param.blockUserData,  options).toPromise();
    }

    /**
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * Choose a push notification content template
     * @param param the request object
     */
    public choosePushNotificationContentTemplate(param: UserApiChoosePushNotificationContentTemplateRequest, options?: Configuration): Promise<ChoosePushNotificationContentTemplateResponse> {
        return this.api.choosePushNotificationContentTemplate(param.userId, param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * Create a user
     * @param param the request object
     */
    public createUser(param: UserApiCreateUserRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.createUser(param.apiToken, param.createUserData,  options).toPromise();
    }

    /**
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * Delete a user
     * @param param the request object
     */
    public deleteUserById(param: UserApiDeleteUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserById(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param param the request object
     */
    public leaveMyGroupChannels(param: UserApiLeaveMyGroupChannelsRequest, options?: Configuration): Promise<void> {
        return this.api.leaveMyGroupChannels(param.userId, param.apiToken, param.leaveMyGroupChannelsData,  options).toPromise();
    }

    /**
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List banned channels
     * @param param the request object
     */
    public listBannedChannels(param: UserApiListBannedChannelsRequest, options?: Configuration): Promise<ListBannedChannelsResponse> {
        return this.api.listBannedChannels(param.userId, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param param the request object
     */
    public listBlockedUsers(param: UserApiListBlockedUsersRequest, options?: Configuration): Promise<ListBlockedUsersResponse> {
        return this.api.listBlockedUsers(param.userId, param.apiToken, param.token, param.limit, param.userIds, param.metadatakey, param.metadatavaluesIn,  options).toPromise();
    }

    /**
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List muted channels
     * @param param the request object
     */
    public listMutedChannels(param: UserApiListMutedChannelsRequest, options?: Configuration): Promise<ListMutedChannelsResponse> {
        return this.api.listMutedChannels(param.userId, param.apiToken, param.token, param.limit,  options).toPromise();
    }

    /**
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param param the request object
     */
    public listMyGroupChannels(param: UserApiListMyGroupChannelsRequest, options?: Configuration): Promise<ListMyGroupChannelsResponse> {
        return this.api.listMyGroupChannels(param.userId, param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.hiddenMode, param.memberStateFilter, param.unreadFilter, param.createdAfter, param.createdBefore, param.showEmpty, param.showFrozen, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.searchQuery, param.searchFields, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.customType,  options).toPromise();
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * List registration or device tokens
     * @param param the request object
     */
    public listRegistrationOrDeviceTokens(param: UserApiListRegistrationOrDeviceTokensRequest, options?: Configuration): Promise<ListRegistrationOrDeviceTokensResponse> {
        return this.api.listRegistrationOrDeviceTokens(param.userId, param.tokenType, param.apiToken,  options).toPromise();
    }

    /**
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * List users
     * @param param the request object
     */
    public listUsers(param: UserApiListUsersRequest, options?: Configuration): Promise<ListUsersResponse> {
        return this.api.listUsers(param.apiToken, param.token, param.limit, param.activeMode, param.showBot, param.userIds, param.nickname, param.nicknameStartswith, param.metadatakey, param.metadatavaluesIn,  options).toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param param the request object
     */
    public markAllMessagesAsRead(param: UserApiMarkAllMessagesAsReadRequest, options?: Configuration): Promise<void> {
        return this.api.markAllMessagesAsRead(param.userId, param.apiToken, param.markAllMessagesAsReadData,  options).toPromise();
    }

    /**
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * Mute in channels with custom channel types
     * @param param the request object
     */
    public muteInChannelsWithCustomChannelTypes(param: UserApiMuteInChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<void> {
        return this.api.muteInChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.muteInChannelsWithCustomChannelTypesData,  options).toPromise();
    }

    /**
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * Register as an operator to channels with custom channel types
     * @param param the request object
     */
    public registerAsOperatorToChannelsWithCustomChannelTypes(param: UserApiRegisterAsOperatorToChannelsWithCustomChannelTypesRequest, options?: Configuration): Promise<void> {
        return this.api.registerAsOperatorToChannelsWithCustomChannelTypes(param.userId, param.apiToken, param.registerAsOperatorToChannelsWithCustomChannelTypesData,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering all device tokens
     * @param param the request object
     */
    public removeRegistrationOrDeviceToken(param: UserApiRemoveRegistrationOrDeviceTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenResponse> {
        return this.api.removeRegistrationOrDeviceToken(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering a specific token
     * @param param the request object
     */
    public removeRegistrationOrDeviceTokenByToken(param: UserApiRemoveRegistrationOrDeviceTokenByTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenByTokenResponse> {
        return this.api.removeRegistrationOrDeviceTokenByToken(param.userId, param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * Remove a registration or device token from an owner
     * @param param the request object
     */
    public removeRegistrationOrDeviceTokenFromOwnerByToken(param: UserApiRemoveRegistrationOrDeviceTokenFromOwnerByTokenRequest, options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse> {
        return this.api.removeRegistrationOrDeviceTokenFromOwnerByToken(param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

    /**
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * Reset push preferences
     * @param param the request object
     */
    public resetPushPreferences(param: UserApiResetPushPreferencesRequest, options?: Configuration): Promise<void> {
        return this.api.resetPushPreferences(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * Unblock a user
     * @param param the request object
     */
    public unblockUserById(param: UserApiUnblockUserByIdRequest, options?: Configuration): Promise<void> {
        return this.api.unblockUserById(param.userId, param.targetId, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * Update channel invitation preference
     * @param param the request object
     */
    public updateChannelInvitationPreference(param: UserApiUpdateChannelInvitationPreferenceRequest, options?: Configuration): Promise<UpdateChannelInvitationPreferenceResponse> {
        return this.api.updateChannelInvitationPreference(param.userId, param.apiToken, param.updateChannelInvitationPreferenceData,  options).toPromise();
    }

    /**
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * Update count preference of a channel
     * @param param the request object
     */
    public updateCountPreferenceOfChannelByUrl(param: UserApiUpdateCountPreferenceOfChannelByUrlRequest, options?: Configuration): Promise<UpdateCountPreferenceOfChannelByUrlResponse> {
        return this.api.updateCountPreferenceOfChannelByUrl(param.userId, param.channelUrl, param.apiToken, param.updateCountPreferenceOfChannelByUrlData,  options).toPromise();
    }

    /**
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * Update push preferences
     * @param param the request object
     */
    public updatePushPreferences(param: UserApiUpdatePushPreferencesRequest, options?: Configuration): Promise<UpdatePushPreferencesResponse> {
        return this.api.updatePushPreferences(param.userId, param.apiToken, param.updatePushPreferencesData,  options).toPromise();
    }

    /**
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * Update push preferences for a channel
     * @param param the request object
     */
    public updatePushPreferencesForChannelByUrl(param: UserApiUpdatePushPreferencesForChannelByUrlRequest, options?: Configuration): Promise<UpdatePushPreferencesForChannelByUrlResponse> {
        return this.api.updatePushPreferencesForChannelByUrl(param.userId, param.channelUrl, param.apiToken, param.updatePushPreferencesForChannelByUrlData,  options).toPromise();
    }

    /**
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * Update a user
     * @param param the request object
     */
    public updateUserById(param: UserApiUpdateUserByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.updateUserById(param.userId, param.apiToken, param.updateUserByIdData,  options).toPromise();
    }

    /**
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * View channel invitation preference
     * @param param the request object
     */
    public viewChannelInvitationPreference(param: UserApiViewChannelInvitationPreferenceRequest, options?: Configuration): Promise<ViewChannelInvitationPreferenceResponse> {
        return this.api.viewChannelInvitationPreference(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * View count preference of a channel
     * @param param the request object
     */
    public viewCountPreferenceOfChannelByUrl(param: UserApiViewCountPreferenceOfChannelByUrlRequest, options?: Configuration): Promise<ViewCountPreferenceOfChannelByUrlResponse> {
        return this.api.viewCountPreferenceOfChannelByUrl(param.userId, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of channels by join status
     * @param param the request object
     */
    public viewNumberOfChannelsByJoinStatus(param: UserApiViewNumberOfChannelsByJoinStatusRequest, options?: Configuration): Promise<ViewNumberOfChannelsByJoinStatusResponse> {
        return this.api.viewNumberOfChannelsByJoinStatus(param.userId, param.apiToken, param.state,  options).toPromise();
    }

    /**
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * View number of channels with unread messages
     * @param param the request object
     */
    public viewNumberOfChannelsWithUnreadMessages(param: UserApiViewNumberOfChannelsWithUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse> {
        return this.api.viewNumberOfChannelsWithUnreadMessages(param.userId, param.apiToken, param.customTypes, param.superMode,  options).toPromise();
    }

    /**
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * View number of unread items
     * @param param the request object
     */
    public viewNumberOfUnreadItems(param: UserApiViewNumberOfUnreadItemsRequest, options?: Configuration): Promise<ViewNumberOfUnreadItemsResponse> {
        return this.api.viewNumberOfUnreadItems(param.userId, param.apiToken, param.customType, param.itemKeys,  options).toPromise();
    }

    /**
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of unread messages
     * @param param the request object
     */
    public viewNumberOfUnreadMessages(param: UserApiViewNumberOfUnreadMessagesRequest, options?: Configuration): Promise<ViewNumberOfUnreadMessagesResponse> {
        return this.api.viewNumberOfUnreadMessages(param.userId, param.apiToken, param.customTypes, param.superMode,  options).toPromise();
    }

    /**
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * View push preferences
     * @param param the request object
     */
    public viewPushPreferences(param: UserApiViewPushPreferencesRequest, options?: Configuration): Promise<ViewPushPreferencesResponse> {
        return this.api.viewPushPreferences(param.userId, param.apiToken,  options).toPromise();
    }

    /**
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * View push preferences for a channel
     * @param param the request object
     */
    public viewPushPreferencesForChannelByUrl(param: UserApiViewPushPreferencesForChannelByUrlRequest, options?: Configuration): Promise<ViewPushPreferencesForChannelByUrlResponse> {
        return this.api.viewPushPreferencesForChannelByUrl(param.userId, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param param the request object
     */
    public viewUserById(param: UserApiViewUserByIdRequest, options?: Configuration): Promise<SendBirdUser> {
        return this.api.viewUserById(param.userId, param.apiToken, param.includeUnreadCount, param.customTypes, param.superMode,  options).toPromise();
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param param the request object
     */
    public viewWhoOwnsRegistrationOrDeviceTokenByToken(param: UserApiViewWhoOwnsRegistrationOrDeviceTokenByTokenRequest, options?: Configuration): Promise<ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponse> {
        return this.api.viewWhoOwnsRegistrationOrDeviceTokenByToken(param.tokenType, param.token, param.apiToken,  options).toPromise();
    }

}

import { ObservableUserChannelMetadataApi } from "./ObservableAPI";
import { UserChannelMetadataApiRequestFactory, UserChannelMetadataApiResponseProcessor} from "../apis/UserChannelMetadataApi";

export interface UserChannelMetadataApiCreateChannelMetacounterRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetacounter
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetacounter
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetacounter
     */
    apiToken?: string
    /**
     * 
     * @type CreateChannelMetacounterData
     * @memberof UserChannelMetadataApicreateChannelMetacounter
     */
    createChannelMetacounterData?: CreateChannelMetacounterData
}

export interface UserChannelMetadataApiCreateChannelMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetadata
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type CreateChannelMetadataData
     * @memberof UserChannelMetadataApicreateChannelMetadata
     */
    createChannelMetadataData?: CreateChannelMetadataData
}

export interface UserChannelMetadataApiCreateUserMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateUserMetadata
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApicreateUserMetadata
     */
    apiToken?: string
    /**
     * 
     * @type CreateUserMetadataData
     * @memberof UserChannelMetadataApicreateUserMetadata
     */
    createUserMetadataData?: CreateUserMetadataData
}

export interface UserChannelMetadataApiDeleteChannelMetacounterRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounter
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounter
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounter
     */
    apiToken?: string
}

export interface UserChannelMetadataApiDeleteChannelMetacounterByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounterByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounterByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounterByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetacounterByKey
     */
    apiToken?: string
}

export interface UserChannelMetadataApiDeleteChannelMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadata
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadata
     */
    key?: string
}

export interface UserChannelMetadataApiDeleteChannelMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadataByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadataByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteChannelMetadataByKey
     */
    apiToken?: string
}

export interface UserChannelMetadataApiDeleteUserMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadata
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadata
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadata
     */
    key?: string
}

export interface UserChannelMetadataApiDeleteUserMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadataByKey
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApideleteUserMetadataByKey
     */
    apiToken?: string
}

export interface UserChannelMetadataApiUpdateChannelMetacounterRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounter
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounter
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounter
     */
    apiToken?: string
    /**
     * 
     * @type UpdateChannelMetacounterData
     * @memberof UserChannelMetadataApiupdateChannelMetacounter
     */
    updateChannelMetacounterData?: UpdateChannelMetacounterData
}

export interface UserChannelMetadataApiUpdateChannelMetacounterByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounterByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounterByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounterByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetacounterByKey
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof UserChannelMetadataApiupdateChannelMetacounterByKey
     */
    body?: any
}

export interface UserChannelMetadataApiUpdateChannelMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadata
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type UpdateChannelMetadataData
     * @memberof UserChannelMetadataApiupdateChannelMetadata
     */
    updateChannelMetadataData?: UpdateChannelMetadataData
}

export interface UserChannelMetadataApiUpdateChannelMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadataByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadataByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateChannelMetadataByKey
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof UserChannelMetadataApiupdateChannelMetadataByKey
     */
    body?: any
}

export interface UserChannelMetadataApiUpdateUserMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateUserMetadata
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateUserMetadata
     */
    apiToken?: string
    /**
     * 
     * @type UpdateUserMetadataData
     * @memberof UserChannelMetadataApiupdateUserMetadata
     */
    updateUserMetadataData?: UpdateUserMetadataData
}

export interface UserChannelMetadataApiUpdateUserMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateUserMetadataByKey
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateUserMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiupdateUserMetadataByKey
     */
    apiToken?: string
    /**
     * 
     * @type any
     * @memberof UserChannelMetadataApiupdateUserMetadataByKey
     */
    body?: any
}

export interface UserChannelMetadataApiViewChannelMetacounterRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounter
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounter
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounter
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounter
     */
    key?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof UserChannelMetadataApiviewChannelMetacounter
     */
    keys?: Array<string>
}

export interface UserChannelMetadataApiViewChannelMetacounterByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounterByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounterByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounterByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetacounterByKey
     */
    apiToken?: string
}

export interface UserChannelMetadataApiViewChannelMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadata
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadata
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadata
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadata
     */
    key?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof UserChannelMetadataApiviewChannelMetadata
     */
    keys?: Array<string>
}

export interface UserChannelMetadataApiViewChannelMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadataByKey
     */
    channelType: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadataByKey
     */
    channelUrl: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewChannelMetadataByKey
     */
    apiToken?: string
}

export interface UserChannelMetadataApiViewUserMetadataRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadata
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadata
     */
    apiToken?: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadata
     */
    key?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof UserChannelMetadataApiviewUserMetadata
     */
    keys?: Array<string>
}

export interface UserChannelMetadataApiViewUserMetadataByKeyRequest {
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadataByKey
     */
    userId: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadataByKey
     */
    key: string
    /**
     * 
     * @type string
     * @memberof UserChannelMetadataApiviewUserMetadataByKey
     */
    apiToken?: string
}

export class ObjectUserChannelMetadataApi {
    private api: ObservableUserChannelMetadataApi

    public constructor(configuration: Configuration, requestFactory?: UserChannelMetadataApiRequestFactory, responseProcessor?: UserChannelMetadataApiResponseProcessor) {
        this.api = new ObservableUserChannelMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a channel metacounter  Creates a channel metacounter's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------
     * Create a channel metacounter
     * @param param the request object
     */
    public createChannelMetacounter(param: UserChannelMetadataApiCreateChannelMetacounterRequest, options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        return this.api.createChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.createChannelMetacounterData,  options).toPromise();
    }

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * Create a channel metadata
     * @param param the request object
     */
    public createChannelMetadata(param: UserChannelMetadataApiCreateChannelMetadataRequest, options?: Configuration): Promise<CreateChannelMetadataResponse> {
        return this.api.createChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.createChannelMetadataData,  options).toPromise();
    }

    /**
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * Create a user metadata
     * @param param the request object
     */
    public createUserMetadata(param: UserChannelMetadataApiCreateUserMetadataRequest, options?: Configuration): Promise<CreateUserMetadataResponse> {
        return this.api.createUserMetadata(param.userId, param.apiToken, param.createUserMetadataData,  options).toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * @param param the request object
     */
    public deleteChannelMetacounter(param: UserChannelMetadataApiDeleteChannelMetacounterRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChannelMetacounter(param.channelType, param.channelUrl, param.apiToken,  options).toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * @param param the request object
     */
    public deleteChannelMetacounterByKey(param: UserChannelMetadataApiDeleteChannelMetacounterByKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param param the request object
     */
    public deleteChannelMetadata(param: UserChannelMetadataApiDeleteChannelMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.key,  options).toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * @param param the request object
     */
    public deleteChannelMetadataByKey(param: UserChannelMetadataApiDeleteChannelMetadataByKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting all items of a user metadata
     * @param param the request object
     */
    public deleteUserMetadata(param: UserChannelMetadataApiDeleteUserMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserMetadata(param.userId, param.apiToken, param.key,  options).toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * @param param the request object
     */
    public deleteUserMetadataByKey(param: UserChannelMetadataApiDeleteUserMetadataByKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserMetadataByKey(param.userId, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * @param param the request object
     */
    public updateChannelMetacounter(param: UserChannelMetadataApiUpdateChannelMetacounterRequest, options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        return this.api.updateChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.updateChannelMetacounterData,  options).toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * @param param the request object
     */
    public updateChannelMetacounterByKey(param: UserChannelMetadataApiUpdateChannelMetacounterByKeyRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.updateChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param param the request object
     */
    public updateChannelMetadata(param: UserChannelMetadataApiUpdateChannelMetadataRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.updateChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.updateChannelMetadataData,  options).toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * @param param the request object
     */
    public updateChannelMetadataByKey(param: UserChannelMetadataApiUpdateChannelMetadataByKeyRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.updateChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * @param param the request object
     */
    public updateUserMetadata(param: UserChannelMetadataApiUpdateUserMetadataRequest, options?: Configuration): Promise<UpdateUserMetadataResponse> {
        return this.api.updateUserMetadata(param.userId, param.apiToken, param.updateUserMetadataData,  options).toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * @param param the request object
     */
    public updateUserMetadataByKey(param: UserChannelMetadataApiUpdateUserMetadataByKeyRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.updateUserMetadataByKey(param.userId, param.key, param.apiToken, param.body,  options).toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * @param param the request object
     */
    public viewChannelMetacounter(param: UserChannelMetadataApiViewChannelMetacounterRequest, options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        return this.api.viewChannelMetacounter(param.channelType, param.channelUrl, param.apiToken, param.key, param.keys,  options).toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * @param param the request object
     */
    public viewChannelMetacounterByKey(param: UserChannelMetadataApiViewChannelMetacounterByKeyRequest, options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        return this.api.viewChannelMetacounterByKey(param.channelType, param.channelUrl, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param param the request object
     */
    public viewChannelMetadata(param: UserChannelMetadataApiViewChannelMetadataRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.viewChannelMetadata(param.channelType, param.channelUrl, param.apiToken, param.key, param.keys,  options).toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * @param param the request object
     */
    public viewChannelMetadataByKey(param: UserChannelMetadataApiViewChannelMetadataByKeyRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.viewChannelMetadataByKey(param.channelType, param.channelUrl, param.key, param.apiToken,  options).toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving all items of a user metadata
     * @param param the request object
     */
    public viewUserMetadata(param: UserChannelMetadataApiViewUserMetadataRequest, options?: Configuration): Promise<ViewUserMetadataResponse> {
        return this.api.viewUserMetadata(param.userId, param.apiToken, param.key, param.keys,  options).toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * @param param the request object
     */
    public viewUserMetadataByKey(param: UserChannelMetadataApiViewUserMetadataByKeyRequest, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.viewUserMetadataByKey(param.userId, param.key, param.apiToken,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";

export interface WebhooksApiChooseWhichEventsToSubscribeToRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApichooseWhichEventsToSubscribeTo
     */
    apiToken?: string
    /**
     * 
     * @type ChooseWhichEventsToSubscribeToData
     * @memberof WebhooksApichooseWhichEventsToSubscribeTo
     */
    chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData
}

export interface WebhooksApiRetrieveListOfSubscribedEventsRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieveListOfSubscribedEvents
     */
    apiToken?: string
    /**
     * 
     * @type boolean
     * @memberof WebhooksApiretrieveListOfSubscribedEvents
     */
    displayAllWebhookCategories?: boolean
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * Choose which events to subscribe to
     * @param param the request object
     */
    public chooseWhichEventsToSubscribeTo(param: WebhooksApiChooseWhichEventsToSubscribeToRequest, options?: Configuration): Promise<ChooseWhichEventsToSubscribeToResponse> {
        return this.api.chooseWhichEventsToSubscribeTo(param.apiToken, param.chooseWhichEventsToSubscribeToData,  options).toPromise();
    }

    /**
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * Retrieve a list of subscribed events
     * @param param the request object
     */
    public retrieveListOfSubscribedEvents(param: WebhooksApiRetrieveListOfSubscribedEventsRequest, options?: Configuration): Promise<RetrieveListOfSubscribedEventsResponse> {
        return this.api.retrieveListOfSubscribedEvents(param.apiToken, param.displayAllWebhookCategories,  options).toPromise();
    }

}
