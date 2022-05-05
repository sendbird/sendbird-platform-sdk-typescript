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
import { BlockUserResponse } from '../models/BlockUserResponse';
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
import { GcResetChatHistoryResponse } from '../models/GcResetChatHistoryResponse';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateBanByIdResponse } from '../models/GcUpdateBanByIdResponse';
import { GcUpdateChannelByUrlData } from '../models/GcUpdateChannelByUrlData';
import { GcViewBanByIdResponse } from '../models/GcViewBanByIdResponse';
import { GcViewMuteByIdResponse } from '../models/GcViewMuteByIdResponse';
import { GcViewNumberOfEachMembersUnreadMessagesResponse } from '../models/GcViewNumberOfEachMembersUnreadMessagesResponse';
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
import { InlineResponse200 } from '../models/InlineResponse200';
import { JoinChannelsData } from '../models/JoinChannelsData';
import { JoinChannelsResponse } from '../models/JoinChannelsResponse';
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
import { OcUpdateBanByIdResponse } from '../models/OcUpdateBanByIdResponse';
import { OcUpdateChannelByUrlData } from '../models/OcUpdateChannelByUrlData';
import { OcViewBanByIdResponse } from '../models/OcViewBanByIdResponse';
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
import { ResetPushPreferencesResponse } from '../models/ResetPushPreferencesResponse';
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
import { SendBirdGroupChannelCreatedBy } from '../models/SendBirdGroupChannelCreatedBy';
import { SendBirdGroupChannelDisappearingMessage } from '../models/SendBirdGroupChannelDisappearingMessage';
import { SendBirdGroupChannelSmsFallback } from '../models/SendBirdGroupChannelSmsFallback';
import { SendBirdMember } from '../models/SendBirdMember';
import { SendBirdMessageMetaArray } from '../models/SendBirdMessageMetaArray';
import { SendBirdMessageResponse } from '../models/SendBirdMessageResponse';
import { SendBirdMessageResponseMentionedUsers } from '../models/SendBirdMessageResponseMentionedUsers';
import { SendBirdMessageResponseUser } from '../models/SendBirdMessageResponseUser';
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
import { UpdateExtraDataInMessageResponseSortedMetaarray } from '../models/UpdateExtraDataInMessageResponseSortedMetaarray';
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
import { ObservableAdvancedAnalyticsApi } from './ObservableAPI';

import { AdvancedAnalyticsApiRequestFactory, AdvancedAnalyticsApiResponseProcessor} from "../apis/AdvancedAnalyticsApi";
export class PromiseAdvancedAnalyticsApi {
    private api: ObservableAdvancedAnalyticsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedAnalyticsApiRequestFactory,
        responseProcessor?: AdvancedAnalyticsApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
     * Retrieve Advanced analytics metrics
     * @param apiToken 
     */
    public retrieveAdvancedAnalyticsMetrics(apiToken: string, _options?: Configuration): Promise<RetrieveAdvancedAnalyticsMetricsResponse> {
        const result = this.api.retrieveAdvancedAnalyticsMetrics(apiToken, _options);
        return result.toPromise();
    }


}



import { ObservableAnnouncementsApi } from './ObservableAPI';

import { AnnouncementsApiRequestFactory, AnnouncementsApiResponseProcessor} from "../apis/AnnouncementsApi";
export class PromiseAnnouncementsApi {
    private api: ObservableAnnouncementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnnouncementsApiRequestFactory,
        responseProcessor?: AnnouncementsApiResponseProcessor
    ) {
        this.api = new ObservableAnnouncementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * Get detailed open rate of an announcement
     * @param apiToken 
     * @param uniqueId 
     */
    public getDetailedOpenRateOfAnnouncementById(apiToken: string, uniqueId: string, _options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementByIdResponse> {
        const result = this.api.getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId, _options);
        return result.toPromise();
    }

    /**
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * Get detailed open rate of an announcement group
     * @param apiToken 
     * @param announcementGroup 
     */
    public getDetailedOpenRateOfAnnouncementGroup(apiToken: string, announcementGroup: string, _options?: Configuration): Promise<GetDetailedOpenRateOfAnnouncementGroupResponse> {
        const result = this.api.getDetailedOpenRateOfAnnouncementGroup(apiToken, announcementGroup, _options);
        return result.toPromise();
    }

    /**
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * Get detailed open status of an announcement
     * @param apiToken 
     * @param uniqueId 
     * @param limit 
     * @param next 
     * @param uniqueIds 
     * @param channelUrls 
     * @param hasOpened 
     */
    public getDetailedOpenStatusOfAnnouncementById(apiToken: string, uniqueId: string, limit?: number, next?: string, uniqueIds?: Array<string>, channelUrls?: Array<string>, hasOpened?: boolean, _options?: Configuration): Promise<GetDetailedOpenStatusOfAnnouncementByIdResponse> {
        const result = this.api.getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, limit, next, uniqueIds, channelUrls, hasOpened, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - weekly
     * @param apiToken 
     */
    public getStatistics(apiToken: string, _options?: Configuration): Promise<GetStatisticsResponse> {
        const result = this.api.getStatistics(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - daily
     * @param apiToken 
     * @param startDate 
     * @param endDate 
     * @param startWeek 
     * @param endWeek 
     * @param startMonth 
     * @param endMonth 
     * @param announcementGroup 
     */
    public getStatisticsDaily(apiToken: string, startDate: string, endDate: string, startWeek: string, endWeek: string, startMonth: string, endMonth: string, announcementGroup?: string, _options?: Configuration): Promise<GetStatisticsDailyResponse> {
        const result = this.api.getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, announcementGroup, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - monthly
     * @param apiToken 
     */
    public getStatisticsMonthly(apiToken: string, _options?: Configuration): Promise<GetStatisticsMonthlyResponse> {
        const result = this.api.getStatisticsMonthly(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * List announcement groups
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listAnnouncementGroups(apiToken: string, token?: string, limit?: number, _options?: Configuration): Promise<ListAnnouncementGroupsResponse> {
        const result = this.api.listAnnouncementGroups(apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * List announcements
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param order 
     * @param status 
     * @param announcementGroup 
     */
    public listAnnouncements(apiToken: string, token?: string, limit?: number, order?: string, status?: string, announcementGroup?: string, _options?: Configuration): Promise<ListAnnouncementsResponse> {
        const result = this.api.listAnnouncements(apiToken, token, limit, order, status, announcementGroup, _options);
        return result.toPromise();
    }

    /**
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * Schedule an announcement
     * @param apiToken 
     * @param scheduleAnnouncementData 
     */
    public scheduleAnnouncement(apiToken: string, scheduleAnnouncementData?: ScheduleAnnouncementData, _options?: Configuration): Promise<ScheduleAnnouncementResponse> {
        const result = this.api.scheduleAnnouncement(apiToken, scheduleAnnouncementData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * Update an announcement
     * @param apiToken 
     * @param uniqueId 
     * @param updateAnnouncementByIdData 
     */
    public updateAnnouncementById(apiToken: string, uniqueId: string, updateAnnouncementByIdData?: UpdateAnnouncementByIdData, _options?: Configuration): Promise<UpdateAnnouncementByIdResponse> {
        const result = this.api.updateAnnouncementById(apiToken, uniqueId, updateAnnouncementByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param apiToken 
     * @param uniqueId 
     */
    public viewAnnouncementById(apiToken: string, uniqueId: string, _options?: Configuration): Promise<ViewAnnouncementByIdResponse> {
        const result = this.api.viewAnnouncementById(apiToken, uniqueId, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationApi } from './ObservableAPI';

import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";
export class PromiseApplicationApi {
    private api: ObservableApplicationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationApiRequestFactory,
        responseProcessor?: ApplicationApiResponseProcessor
    ) {
        this.api = new ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
     * Add an APNs push configuration
     * @param apiToken 
     * @param addApnsPushConfigurationData 
     */
    public addApnsPushConfiguration(apiToken: string, addApnsPushConfigurationData?: AddApnsPushConfigurationData, _options?: Configuration): Promise<AddApnsPushConfigurationResponse> {
        const result = this.api.addApnsPushConfiguration(apiToken, addApnsPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * Add a FCM push configuration
     * @param apiToken 
     * @param addFcmPushConfigurationData 
     */
    public addFcmPushConfiguration(apiToken: string, addFcmPushConfigurationData?: AddFcmPushConfigurationData, _options?: Configuration): Promise<AddFcmPushConfigurationResponse> {
        const result = this.api.addFcmPushConfiguration(apiToken, addFcmPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * Add an HMS push configuration
     * @param apiToken 
     * @param addHmsPushConfigurationData 
     */
    public addHmsPushConfiguration(apiToken: string, addHmsPushConfigurationData?: AddHmsPushConfigurationData, _options?: Configuration): Promise<AddHmsPushConfigurationResponse> {
        const result = this.api.addHmsPushConfiguration(apiToken, addHmsPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * Add an IP to a whitelist
     * @param apiToken 
     * @param addIpToWhitelistData 
     */
    public addIpToWhitelist(apiToken: string, addIpToWhitelistData?: AddIpToWhitelistData, _options?: Configuration): Promise<AddIpToWhitelistResponse> {
        const result = this.api.addIpToWhitelist(apiToken, addIpToWhitelistData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * Delete allowed IPs from a whitelist
     * @param apiToken 
     * @param ipWhitelistAddresses 
     */
    public deleteAllowedIpsFromWhitelist(apiToken: string, ipWhitelistAddresses: Array<string>, _options?: Configuration): Promise<DeleteAllowedIpsFromWhitelistResponse> {
        const result = this.api.deleteAllowedIpsFromWhitelist(apiToken, ipWhitelistAddresses, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * Delete an APNs certificate
     * @param apiToken 
     * @param providerId 
     */
    public deleteApnsCertificateById(apiToken: string, providerId: string, _options?: Configuration): Promise<DeleteApnsCertificateByIdResponse> {
        const result = this.api.deleteApnsCertificateById(apiToken, providerId, _options);
        return result.toPromise();
    }

    /**
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * Generate a secondary API token
     * @param apiToken 
     * @param generateSecondaryApiTokenData 
     */
    public generateSecondaryApiToken(apiToken: string, generateSecondaryApiTokenData?: GenerateSecondaryApiTokenData, _options?: Configuration): Promise<GenerateSecondaryApiTokenResponse> {
        const result = this.api.generateSecondaryApiToken(apiToken, generateSecondaryApiTokenData, _options);
        return result.toPromise();
    }

    /**
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * List push configurations
     * @param apiToken 
     * @param pushType 
     */
    public listPushConfigurations(apiToken: string, pushType: string, _options?: Configuration): Promise<ListPushConfigurationsResponse> {
        const result = this.api.listPushConfigurations(apiToken, pushType, _options);
        return result.toPromise();
    }

    /**
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * List push notification content templates
     * @param apiToken 
     */
    public listPushNotificationContentTemplates(apiToken: string, _options?: Configuration): Promise<ListPushNotificationContentTemplatesResponse> {
        const result = this.api.listPushNotificationContentTemplates(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * List secondary API tokens
     * @param apiToken 
     */
    public listSecondaryApiTokens(apiToken: string, _options?: Configuration): Promise<ListSecondaryApiTokensResponse> {
        const result = this.api.listSecondaryApiTokens(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * Remove a push configuration
     * @param apiToken 
     * @param pushType 
     * @param providerId 
     */
    public removePushConfigurationById(apiToken: string, pushType: string, providerId: string, _options?: Configuration): Promise<RemovePushConfigurationByIdResponse> {
        const result = this.api.removePushConfigurationById(apiToken, pushType, providerId, _options);
        return result.toPromise();
    }

    /**
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * Retrieve an IP whitelist
     * @param apiToken 
     */
    public retrieveIpWhitelist(apiToken: string, _options?: Configuration): Promise<RetrieveIpWhitelistResponse> {
        const result = this.api.retrieveIpWhitelist(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * Revoke a secondary API token
     * @param apiToken 
     * @param apiToken2 
     */
    public revokeSecondaryApiTokenByToken(apiToken: string, apiToken2: string, _options?: Configuration): Promise<RevokeSecondaryApiTokenByTokenResponse> {
        const result = this.api.revokeSecondaryApiTokenByToken(apiToken, apiToken2, _options);
        return result.toPromise();
    }

    /**
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * Update an APNs push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateApnsPushConfigurationByIdData 
     */
    public updateApnsPushConfigurationById(apiToken: string, providerId: string, updateApnsPushConfigurationByIdData?: UpdateApnsPushConfigurationByIdData, _options?: Configuration): Promise<UpdateApnsPushConfigurationByIdResponse> {
        const result = this.api.updateApnsPushConfigurationById(apiToken, providerId, updateApnsPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * Update default channel invitation preference
     * @param apiToken 
     * @param updateDefaultChannelInvitationPreferenceData 
     */
    public updateDefaultChannelInvitationPreference(apiToken: string, updateDefaultChannelInvitationPreferenceData?: UpdateDefaultChannelInvitationPreferenceData, _options?: Configuration): Promise<UpdateDefaultChannelInvitationPreferenceResponse> {
        const result = this.api.updateDefaultChannelInvitationPreference(apiToken, updateDefaultChannelInvitationPreferenceData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * Update a FCM push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateFcmPushConfigurationByIdData 
     */
    public updateFcmPushConfigurationById(apiToken: string, providerId: string, updateFcmPushConfigurationByIdData?: UpdateFcmPushConfigurationByIdData, _options?: Configuration): Promise<UpdateFcmPushConfigurationByIdResponse> {
        const result = this.api.updateFcmPushConfigurationById(apiToken, providerId, updateFcmPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * Update an HMS push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateHmsPushConfigurationByIdData 
     */
    public updateHmsPushConfigurationById(apiToken: string, providerId: string, updateHmsPushConfigurationByIdData?: UpdateHmsPushConfigurationByIdData, _options?: Configuration): Promise<UpdateHmsPushConfigurationByIdResponse> {
        const result = this.api.updateHmsPushConfigurationById(apiToken, providerId, updateHmsPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * Update a push notification content template
     * @param apiToken 
     * @param templateName 
     * @param updatePushNotificationContentTemplateData 
     */
    public updatePushNotificationContentTemplate(apiToken: string, templateName: string, updatePushNotificationContentTemplateData?: UpdatePushNotificationContentTemplateData, _options?: Configuration): Promise<UpdatePushNotificationContentTemplateResponse> {
        const result = this.api.updatePushNotificationContentTemplate(apiToken, templateName, updatePushNotificationContentTemplateData, _options);
        return result.toPromise();
    }

    /**
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * View default channel invitation preference
     * @param apiToken 
     */
    public viewDefaultChannelInvitationPreference(apiToken: string, _options?: Configuration): Promise<ViewDefaultChannelInvitationPreferenceResponse> {
        const result = this.api.viewDefaultChannelInvitationPreference(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * View number of concurrent connections
     * @param apiToken 
     */
    public viewNumberOfConcurrentConnections(apiToken: string, _options?: Configuration): Promise<ViewNumberOfConcurrentConnectionsResponse> {
        const result = this.api.viewNumberOfConcurrentConnections(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * View number of daily active users
     * @param apiToken 
     * @param date 
     */
    public viewNumberOfDailyActiveUsers(apiToken: string, date?: string, _options?: Configuration): Promise<ViewNumberOfDailyActiveUsersResponse> {
        const result = this.api.viewNumberOfDailyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * View number of monthly active users
     * @param apiToken 
     * @param date 
     */
    public viewNumberOfMonthlyActiveUsers(apiToken: string, date?: string, _options?: Configuration): Promise<ViewNumberOfMonthlyActiveUsersResponse> {
        const result = this.api.viewNumberOfMonthlyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    }

    /**
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * View number of peak connections
     * @param apiToken 
     * @param timeDimension 
     * @param startYear 
     * @param startMonth 
     * @param endYear 
     * @param endMonth 
     * @param startDay 
     * @param endDay 
     */
    public viewNumberOfPeakConnections(apiToken: string, timeDimension: string, startYear: number, startMonth: number, endYear: number, endMonth: number, startDay?: number, endDay?: number, _options?: Configuration): Promise<ViewNumberOfPeakConnectionsResponse> {
        const result = this.api.viewNumberOfPeakConnections(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, startDay, endDay, _options);
        return result.toPromise();
    }

    /**
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * View a push configuration
     * @param apiToken 
     * @param pushType 
     * @param providerId 
     */
    public viewPushConfigurationById(apiToken: string, pushType: string, providerId: string, _options?: Configuration): Promise<ViewPushConfigurationByIdResponse> {
        const result = this.api.viewPushConfigurationById(apiToken, pushType, providerId, _options);
        return result.toPromise();
    }

    /**
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * View a push notification content template
     * @param apiToken 
     * @param templateName 
     */
    public viewPushNotificationContentTemplate(apiToken: string, templateName: string, _options?: Configuration): Promise<ViewPushNotificationContentTemplateResponse> {
        const result = this.api.viewPushNotificationContentTemplate(apiToken, templateName, _options);
        return result.toPromise();
    }

    /**
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * View a secondary API token
     * @param apiToken 
     * @param apiToken2 
     */
    public viewSecondaryApiTokenByToken(apiToken: string, apiToken2: string, _options?: Configuration): Promise<ViewSecondaryApiTokenByTokenResponse> {
        const result = this.api.viewSecondaryApiTokenByToken(apiToken, apiToken2, _options);
        return result.toPromise();
    }


}



import { ObservableBotInterfaceApi } from './ObservableAPI';

import { BotInterfaceApiRequestFactory, BotInterfaceApiResponseProcessor} from "../apis/BotInterfaceApi";
export class PromiseBotInterfaceApi {
    private api: ObservableBotInterfaceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BotInterfaceApiRequestFactory,
        responseProcessor?: BotInterfaceApiResponseProcessor
    ) {
        this.api = new ObservableBotInterfaceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * Create a bot
     * @param apiToken 
     * @param createBotData 
     */
    public createBot(apiToken: string, createBotData?: CreateBotData, _options?: Configuration): Promise<CreateBotResponse> {
        const result = this.api.createBot(apiToken, createBotData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * Delete a bot
     * @param apiToken 
     * @param botUserid 
     */
    public deleteBotById(apiToken: string, botUserid: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteBotById(apiToken, botUserid, _options);
        return result.toPromise();
    }

    /**
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * Join channels
     * @param apiToken 
     * @param botUserid 
     * @param joinChannelsData 
     */
    public joinChannels(apiToken: string, botUserid: string, joinChannelsData?: JoinChannelsData, _options?: Configuration): Promise<JoinChannelsResponse> {
        const result = this.api.joinChannels(apiToken, botUserid, joinChannelsData, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving all channels
     * @param apiToken 
     * @param botUserid 
     * @param channelUrl 
     */
    public leaveChannels(apiToken: string, botUserid: string, channelUrl?: string, _options?: Configuration): Promise<void> {
        const result = this.api.leaveChannels(apiToken, botUserid, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving a channel by its channel URL
     * @param apiToken 
     * @param botUserid 
     * @param channelUrl 
     */
    public leaveChannelsByUrl(apiToken: string, botUserid: string, channelUrl: string, _options?: Configuration): Promise<any> {
        const result = this.api.leaveChannelsByUrl(apiToken, botUserid, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * List bots
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listBots(apiToken: string, token?: string, limit?: number, _options?: Configuration): Promise<ListBotsResponse> {
        const result = this.api.listBots(apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param apiToken 
     * @param botUserid 
     * @param sendBotSMessageData 
     */
    public sendBotsMessage(apiToken: string, botUserid: string, sendBotSMessageData?: SendBotSMessageData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.sendBotsMessage(apiToken, botUserid, sendBotSMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * Update a bot
     * @param apiToken 
     * @param botUserid 
     * @param updateBotByIdData 
     */
    public updateBotById(apiToken: string, botUserid: string, updateBotByIdData?: UpdateBotByIdData, _options?: Configuration): Promise<UpdateBotByIdResponse> {
        const result = this.api.updateBotById(apiToken, botUserid, updateBotByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * View a bot
     * @param apiToken 
     * @param botUserid 
     */
    public viewBotById(apiToken: string, botUserid: string, _options?: Configuration): Promise<ViewBotByIdResponse> {
        const result = this.api.viewBotById(apiToken, botUserid, _options);
        return result.toPromise();
    }


}



import { ObservableDataExportApi } from './ObservableAPI';

import { DataExportApiRequestFactory, DataExportApiResponseProcessor} from "../apis/DataExportApi";
export class PromiseDataExportApi {
    private api: ObservableDataExportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataExportApiRequestFactory,
        responseProcessor?: DataExportApiResponseProcessor
    ) {
        this.api = new ObservableDataExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
     * List data exports by message, channel, or user
     * @param apiToken 
     * @param dataType 
     * @param token 
     * @param limit 
     */
    public listDataExportsByMessageChannelOrUser(apiToken: string, dataType: string, token?: string, limit?: number, _options?: Configuration): Promise<ListDataExportsByMessageChannelOrUserResponse> {
        const result = this.api.listDataExportsByMessageChannelOrUser(apiToken, dataType, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * Register and schedule a data export
     * @param apiToken 
     * @param dataType 
     * @param registerAndScheduleDataExportData 
     */
    public registerAndScheduleDataExport(apiToken: string, dataType: string, registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData, _options?: Configuration): Promise<RegisterAndScheduleDataExportResponse> {
        const result = this.api.registerAndScheduleDataExport(apiToken, dataType, registerAndScheduleDataExportData, _options);
        return result.toPromise();
    }

    /**
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * View a data export
     * @param apiToken 
     * @param dataType 
     * @param requestId 
     */
    public viewDataExportById(apiToken: string, dataType: string, requestId: string, _options?: Configuration): Promise<ViewDataExportByIdResponse> {
        const result = this.api.viewDataExportById(apiToken, dataType, requestId, _options);
        return result.toPromise();
    }


}



import { ObservableDataPrivacyApi } from './ObservableAPI';

import { DataPrivacyApiRequestFactory, DataPrivacyApiResponseProcessor} from "../apis/DataPrivacyApi";
export class PromiseDataPrivacyApi {
    private api: ObservableDataPrivacyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataPrivacyApiRequestFactory,
        responseProcessor?: DataPrivacyApiResponseProcessor
    ) {
        this.api = new ObservableDataPrivacyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
     * Cancel the registration of a GDPR request
     * @param apiToken 
     * @param requestId 
     */
    public cancelTheRegistrationOfGdprRequestById(apiToken: string, requestId: string, _options?: Configuration): Promise<void> {
        const result = this.api.cancelTheRegistrationOfGdprRequestById(apiToken, requestId, _options);
        return result.toPromise();
    }

    /**
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * List GDPR requests
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listGdprRequests(apiToken: string, token?: string, limit?: number, _options?: Configuration): Promise<ListGdprRequestsResponse> {
        const result = this.api.listGdprRequests(apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * Register a GDPR request
     * @param apiToken 
     * @param registerGdprRequestData 
     */
    public registerGdprRequest(apiToken: string, registerGdprRequestData?: RegisterGdprRequestData, _options?: Configuration): Promise<RegisterGdprRequestResponse> {
        const result = this.api.registerGdprRequest(apiToken, registerGdprRequestData, _options);
        return result.toPromise();
    }

    /**
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * View a GDPR request
     * @param apiToken 
     * @param requestId 
     */
    public viewGdprRequestById(apiToken: string, requestId: string, _options?: Configuration): Promise<ViewGdprRequestByIdResponse> {
        const result = this.api.viewGdprRequestById(apiToken, requestId, _options);
        return result.toPromise();
    }


}



import { ObservableEmojisApi } from './ObservableAPI';

import { EmojisApiRequestFactory, EmojisApiResponseProcessor} from "../apis/EmojisApi";
export class PromiseEmojisApi {
    private api: ObservableEmojisApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmojisApiRequestFactory,
        responseProcessor?: EmojisApiResponseProcessor
    ) {
        this.api = new ObservableEmojisApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
     * Add emoji categories
     * @param apiToken 
     * @param body 
     */
    public addEmojiCategories(apiToken: string, body?: any, _options?: Configuration): Promise<AddEmojiCategoriesResponse> {
        const result = this.api.addEmojiCategories(apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * Add emojis
     * @param apiToken 
     * @param addEmojisData 
     */
    public addEmojis(apiToken: string, addEmojisData?: AddEmojisData, _options?: Configuration): Promise<AddEmojisResponse> {
        const result = this.api.addEmojis(apiToken, addEmojisData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * Delete an emoji
     * @param apiToken 
     * @param emojiKey 
     */
    public deleteEmojiByKey(apiToken: string, emojiKey: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEmojiByKey(apiToken, emojiKey, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * Delete an emoji category
     * @param apiToken 
     * @param emojiCategoryId 
     */
    public deleteEmojiCategoryById(apiToken: string, emojiCategoryId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteEmojiCategoryById(apiToken, emojiCategoryId, _options);
        return result.toPromise();
    }

    /**
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * Enable reactions
     * @param apiToken 
     * @param enableReactionsData 
     */
    public enableReactions(apiToken: string, enableReactionsData?: EnableReactionsData, _options?: Configuration): Promise<EnableReactionsResponse> {
        const result = this.api.enableReactions(apiToken, enableReactionsData, _options);
        return result.toPromise();
    }

    /**
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * Get an emoji
     * @param apiToken 
     * @param emojiKey 
     */
    public getEmojiByKey(apiToken: string, emojiKey: string, _options?: Configuration): Promise<SendBirdEmoji> {
        const result = this.api.getEmojiByKey(apiToken, emojiKey, _options);
        return result.toPromise();
    }

    /**
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * Get an emoji category
     * @param apiToken 
     * @param emojiCategoryId 
     */
    public getEmojiCategoryById(apiToken: string, emojiCategoryId: string, _options?: Configuration): Promise<SendBirdEmojiCategory> {
        const result = this.api.getEmojiCategoryById(apiToken, emojiCategoryId, _options);
        return result.toPromise();
    }

    /**
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * List all emojis and emoji categories
     * @param apiToken 
     */
    public listAllEmojisAndEmojiCategories(apiToken: string, _options?: Configuration): Promise<ListAllEmojisAndEmojiCategoriesResponse> {
        const result = this.api.listAllEmojisAndEmojiCategories(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * List emojis
     * @param apiToken 
     */
    public listEmojis(apiToken: string, _options?: Configuration): Promise<ListEmojisResponse> {
        const result = this.api.listEmojis(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * Update an emoji category URL
     * @param apiToken 
     * @param emojiCategoryId 
     * @param updateEmojiCategoryUrlByIdData 
     */
    public updateEmojiCategoryUrlById(apiToken: string, emojiCategoryId: string, updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData, _options?: Configuration): Promise<SendBirdEmojiCategory> {
        const result = this.api.updateEmojiCategoryUrlById(apiToken, emojiCategoryId, updateEmojiCategoryUrlByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * Update an emoji URL
     * @param apiToken 
     * @param emojiKey 
     * @param updateEmojiUrlByKeyData 
     */
    public updateEmojiUrlByKey(apiToken: string, emojiKey: string, updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData, _options?: Configuration): Promise<SendBirdEmoji> {
        const result = this.api.updateEmojiUrlByKey(apiToken, emojiKey, updateEmojiUrlByKeyData, _options);
        return result.toPromise();
    }

    /**
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * Use default emojis
     * @param apiToken 
     * @param useDefaultEmojisData 
     */
    public useDefaultEmojis(apiToken: string, useDefaultEmojisData?: UseDefaultEmojisData, _options?: Configuration): Promise<UseDefaultEmojisResponse> {
        const result = this.api.useDefaultEmojis(apiToken, useDefaultEmojisData, _options);
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
     * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
     * Accept an invitation
     * @param apiToken 
     * @param channelUrl 
     * @param gcAcceptInvitationData 
     */
    public gcAcceptInvitation(apiToken: string, channelUrl: string, gcAcceptInvitationData?: GcAcceptInvitationData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcAcceptInvitation(apiToken, channelUrl, gcAcceptInvitationData, _options);
        return result.toPromise();
    }

    /**
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param apiToken 
     * @param channelUrl 
     * @param gcBanUserData 
     */
    public gcBanUser(apiToken: string, channelUrl: string, gcBanUserData?: GcBanUserData, _options?: Configuration): Promise<GcBanUserResponse> {
        const result = this.api.gcBanUser(apiToken, channelUrl, gcBanUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param apiToken 
     * @param channelUrl 
     * @param operatorIds 
     * @param deleteAll 
     */
    public gcCancelTheRegistrationOfOperators(apiToken: string, channelUrl: string, operatorIds: Array<string>, deleteAll?: boolean, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, deleteAll, _options);
        return result.toPromise();
    }

    /**
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * Check if member
     * @param apiToken 
     * @param channelUrl 
     * @param userId 
     */
    public gcCheckIfMemberById(apiToken: string, channelUrl: string, userId: string, _options?: Configuration): Promise<GcCheckIfMemberByIdResponse> {
        const result = this.api.gcCheckIfMemberById(apiToken, channelUrl, userId, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * Create a channel
     * @param apiToken 
     * @param gcCreateChannelData 
     */
    public gcCreateChannel(apiToken: string, gcCreateChannelData?: GcCreateChannelData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcCreateChannel(apiToken, gcCreateChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * Decline an invitation
     * @param apiToken 
     * @param channelUrl 
     * @param gcDeclineInvitationData 
     */
    public gcDeclineInvitation(apiToken: string, channelUrl: string, gcDeclineInvitationData?: GcDeclineInvitationData, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcDeclineInvitation(apiToken, channelUrl, gcDeclineInvitationData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param apiToken 
     * @param channelUrl 
     */
    public gcDeleteChannelByUrl(apiToken: string, channelUrl: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcDeleteChannelByUrl(apiToken, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param apiToken 
     * @param channelUrl 
     * @param gcFreezeChannelData 
     */
    public gcFreezeChannel(apiToken: string, channelUrl: string, gcFreezeChannelData?: GcFreezeChannelData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcFreezeChannel(apiToken, channelUrl, gcFreezeChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * Hide or archive a channel
     * @param apiToken 
     * @param channelUrl 
     * @param gcHideOrArchiveChannelData 
     */
    public gcHideOrArchiveChannel(apiToken: string, channelUrl: string, gcHideOrArchiveChannelData?: GcHideOrArchiveChannelData, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcHideOrArchiveChannel(apiToken, channelUrl, gcHideOrArchiveChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * Invite as members
     * @param apiToken 
     * @param channelUrl 
     * @param gcInviteAsMembersData 
     */
    public gcInviteAsMembers(apiToken: string, channelUrl: string, gcInviteAsMembersData?: GcInviteAsMembersData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcInviteAsMembers(apiToken, channelUrl, gcInviteAsMembersData, _options);
        return result.toPromise();
    }

    /**
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * Join a channel
     * @param apiToken 
     * @param channelUrl 
     * @param gcJoinChannelData 
     */
    public gcJoinChannel(apiToken: string, channelUrl: string, gcJoinChannelData?: GcJoinChannelData, _options?: Configuration): Promise<void> {
        const result = this.api.gcJoinChannel(apiToken, channelUrl, gcJoinChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param apiToken 
     * @param channelUrl 
     * @param gcLeaveChannelData 
     */
    public gcLeaveChannel(apiToken: string, channelUrl: string, gcLeaveChannelData?: GcLeaveChannelData, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcLeaveChannel(apiToken, channelUrl, gcLeaveChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public gcListBannedUsers(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<GcListBannedUsersResponse> {
        const result = this.api.gcListBannedUsers(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------
     * List channels
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param createdAfter 
     * @param createdBefore 
     * @param showEmpty 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMetadata 
     * @param showFrozen 
     * @param order 
     * @param metadataOrderKey 
     * @param customTypes 
     * @param customTypeStartswith 
     * @param channelUrls 
     * @param name 
     * @param nameContains 
     * @param nameStartswith 
     * @param membersExactlyIn 
     * @param membersIncludeIn 
     * @param queryType 
     * @param membersNickname 
     * @param membersNicknameContains 
     * @param metadataKey 
     * @param metadataValues 
     * @param metadataValueStartswith 
     * @param metacounterKey 
     * @param metacounterValues 
     * @param metacounterValueGt 
     * @param metacounterValueGte 
     * @param metacounterValueLt 
     * @param metacounterValueLte 
     * @param includeSortedMetaarrayInLastMessage 
     * @param customType 
     * @param readReceipt 
     * @param member 
     * @param isDistinct 
     * @param membersIn 
     * @param userId 
     */
    public gcListChannels(apiToken: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId?: string, _options?: Configuration): Promise<GcListChannelsResponse> {
        const result = this.api.gcListChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options);
        return result.toPromise();
    }

    /**
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * List members
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param order 
     * @param operatorFilter 
     * @param memberStateFilter 
     * @param mutedMemberFilter 
     * @param nicknameStartswith 
     */
    public gcListMembers(apiToken: string, channelUrl: string, token?: string, limit?: number, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, operatorFilter?: string, memberStateFilter?: string, mutedMemberFilter?: string, nicknameStartswith?: string, _options?: Configuration): Promise<GcListMembersResponse> {
        const result = this.api.gcListMembers(apiToken, channelUrl, token, limit, showDeliveryReceipt, showReadReceipt, order, operatorFilter, memberStateFilter, mutedMemberFilter, nicknameStartswith, _options);
        return result.toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public gcListMutedUsers(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<GcListMutedUsersResponse> {
        const result = this.api.gcListMutedUsers(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public gcListOperators(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<GcListOperatorsResponse> {
        const result = this.api.gcListOperators(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * Mute a user
     * @param apiToken 
     * @param channelUrl 
     * @param gcMuteUserData 
     */
    public gcMuteUser(apiToken: string, channelUrl: string, gcMuteUserData?: GcMuteUserData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcMuteUser(apiToken, channelUrl, gcMuteUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * Register operators
     * @param apiToken 
     * @param channelUrl 
     * @param gcRegisterOperatorsData 
     */
    public gcRegisterOperators(apiToken: string, channelUrl: string, gcRegisterOperatorsData?: GcRegisterOperatorsData, _options?: Configuration): Promise<GcRegisterOperatorsResponse> {
        const result = this.api.gcRegisterOperators(apiToken, channelUrl, gcRegisterOperatorsData, _options);
        return result.toPromise();
    }

    /**
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * Reset chat history
     * @param apiToken 
     * @param channelUrl 
     * @param gcResetChatHistoryData 
     */
    public gcResetChatHistory(apiToken: string, channelUrl: string, gcResetChatHistoryData?: GcResetChatHistoryData, _options?: Configuration): Promise<GcResetChatHistoryResponse> {
        const result = this.api.gcResetChatHistory(apiToken, channelUrl, gcResetChatHistoryData, _options);
        return result.toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     */
    public gcUnbanUserById(apiToken: string, channelUrl: string, bannedUserId: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcUnbanUserById(apiToken, channelUrl, bannedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide or unarchive a channel
     * @param apiToken 
     * @param channelUrl 
     * @param userId 
     * @param shouldUnhideAll 
     */
    public gcUnhideOrUnarchiveChannel(apiToken: string, channelUrl: string, userId: string, shouldUnhideAll?: boolean, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcUnhideOrUnarchiveChannel(apiToken, channelUrl, userId, shouldUnhideAll, _options);
        return result.toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param apiToken 
     * @param channelUrl 
     * @param mutedUserId 
     */
    public gcUnmuteUserById(apiToken: string, channelUrl: string, mutedUserId: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.gcUnmuteUserById(apiToken, channelUrl, mutedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     * @param gcUpdateBanByIdData 
     */
    public gcUpdateBanById(apiToken: string, channelUrl: string, bannedUserId: string, gcUpdateBanByIdData?: GcUpdateBanByIdData, _options?: Configuration): Promise<GcUpdateBanByIdResponse> {
        const result = this.api.gcUpdateBanById(apiToken, channelUrl, bannedUserId, gcUpdateBanByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param apiToken 
     * @param channelUrl 
     * @param gcUpdateChannelByUrlData 
     */
    public gcUpdateChannelByUrl(apiToken: string, channelUrl: string, gcUpdateChannelByUrlData?: GcUpdateChannelByUrlData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcUpdateChannelByUrl(apiToken, channelUrl, gcUpdateChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     */
    public gcViewBanById(apiToken: string, channelUrl: string, bannedUserId: string, _options?: Configuration): Promise<GcViewBanByIdResponse> {
        const result = this.api.gcViewBanById(apiToken, channelUrl, bannedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * View a channel
     * @param apiToken 
     * @param channelUrl 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMember 
     * @param readReceipt 
     * @param member 
     */
    public gcViewChannelByUrl(apiToken: string, channelUrl: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMember?: boolean, readReceipt?: boolean, member?: boolean, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcViewChannelByUrl(apiToken, channelUrl, showDeliveryReceipt, showReadReceipt, showMember, readReceipt, member, _options);
        return result.toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param apiToken 
     * @param channelUrl 
     * @param mutedUserId 
     */
    public gcViewMuteById(apiToken: string, channelUrl: string, mutedUserId: string, _options?: Configuration): Promise<GcViewMuteByIdResponse> {
        const result = this.api.gcViewMuteById(apiToken, channelUrl, mutedUserId, _options);
        return result.toPromise();
    }


}



import { ObservableMessagesApi } from './ObservableAPI';

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";
export class PromiseMessagesApi {
    private api: ObservableMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
     * Add extra data to a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param addExtraDataToMessageData 
     */
    public addExtraDataToMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, addExtraDataToMessageData?: AddExtraDataToMessageData, _options?: Configuration): Promise<AddExtraDataToMessageResponse> {
        const result = this.api.addExtraDataToMessage(apiToken, channelType, channelUrl, messageId, addExtraDataToMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * Add a reaction to a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param addReactionToAMessageData 
     */
    public addReactionToAMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, addReactionToAMessageData?: AddReactionToAMessageData, _options?: Configuration): Promise<AddReactionToAMessageResponse> {
        const result = this.api.addReactionToAMessage(apiToken, channelType, channelUrl, messageId, addReactionToAMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * Delete a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     */
    public deleteMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteMessageById(apiToken, channelType, channelUrl, messageId, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * Mark all messages as delivered
     * @param apiToken 
     * @param channelUrl 
     * @param gcMarkAllMessagesAsDeliveredData 
     */
    public gcMarkAllMessagesAsDelivered(apiToken: string, channelUrl: string, gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData, _options?: Configuration): Promise<GcMarkAllMessagesAsDeliveredResponse> {
        const result = this.api.gcMarkAllMessagesAsDelivered(apiToken, channelUrl, gcMarkAllMessagesAsDeliveredData, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param apiToken 
     * @param channelUrl 
     * @param gcMarkAllMessagesAsReadData 
     */
    public gcMarkAllMessagesAsRead(apiToken: string, channelUrl: string, gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData, _options?: Configuration): Promise<any> {
        const result = this.api.gcMarkAllMessagesAsRead(apiToken, channelUrl, gcMarkAllMessagesAsReadData, _options);
        return result.toPromise();
    }

    /**
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * View number of each member's unread messages
     * @param apiToken 
     * @param channelUrl 
     * @param userIds 
     */
    public gcViewNumberOfEachMembersUnreadMessages(apiToken: string, channelUrl: string, userIds?: string, _options?: Configuration): Promise<GcViewNumberOfEachMembersUnreadMessagesResponse> {
        const result = this.api.gcViewNumberOfEachMembersUnreadMessages(apiToken, channelUrl, userIds, _options);
        return result.toPromise();
    }

    /**
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageTs 
     * @param messageId 
     * @param prevLimit 
     * @param nextLimit 
     * @param include 
     * @param reverse 
     * @param senderId 
     * @param senderIds 
     * @param operatorFilter 
     * @param customTypes 
     * @param messageType 
     * @param includingRemoved 
     * @param includeReactions 
     * @param withSortedMetaArray 
     * @param showSubchannelMessagesOnly 
     * @param userId 
     * @param customType 
     * @param withMetaArray 
     */
    public listMessages(apiToken: string, channelType: string, channelUrl: string, messageTs?: number, messageId?: number, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: string, customTypes?: string, messageType?: string, includingRemoved?: boolean, includeReactions?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, customType?: string, withMetaArray?: boolean, _options?: Configuration): Promise<ListMessagesResponse> {
        const result = this.api.listMessages(apiToken, channelType, channelUrl, messageTs, messageId, prevLimit, nextLimit, include, reverse, senderId, senderIds, operatorFilter, customTypes, messageType, includingRemoved, includeReactions, withSortedMetaArray, showSubchannelMessagesOnly, userId, customType, withMetaArray, _options);
        return result.toPromise();
    }

    /**
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * List reactions of a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param listUsers 
     */
    public listReactionsOfMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, listUsers?: boolean, _options?: Configuration): Promise<ListReactionsOfMessageResponse> {
        const result = this.api.listReactionsOfMessage(apiToken, channelType, channelUrl, messageId, listUsers, _options);
        return result.toPromise();
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * Remove extra data from a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param keys 
     */
    public removeExtraDataFromMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, keys?: Array<string>, _options?: Configuration): Promise<any> {
        const result = this.api.removeExtraDataFromMessage(apiToken, channelType, channelUrl, messageId, keys, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * Remove a reaction from a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param userId 
     * @param reaction 
     */
    public removeReactionFromAMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, userId?: string, reaction?: string, _options?: Configuration): Promise<RemoveReactionFromAMessageResponse> {
        const result = this.api.removeReactionFromAMessage(apiToken, channelType, channelUrl, messageId, userId, reaction, _options);
        return result.toPromise();
    }

    /**
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * Send a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param sendMessageData 
     */
    public sendMessage(apiToken: string, channelType: string, channelUrl: string, sendMessageData?: SendMessageData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.sendMessage(apiToken, channelType, channelUrl, sendMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * Translate a message into other languages
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param body 
     */
    public translateMessageIntoOtherLanguages(apiToken: string, channelType: string, channelUrl: string, messageId: string, body?: any, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.translateMessageIntoOtherLanguages(apiToken, channelType, channelUrl, messageId, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * Update extra data in a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param updateExtraDataInMessageData 
     */
    public updateExtraDataInMessage(apiToken: string, channelType: string, channelUrl: string, messageId: string, updateExtraDataInMessageData?: UpdateExtraDataInMessageData, _options?: Configuration): Promise<UpdateExtraDataInMessageResponse> {
        const result = this.api.updateExtraDataInMessage(apiToken, channelType, channelUrl, messageId, updateExtraDataInMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * Update a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param updateMessageByIdData 
     */
    public updateMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, updateMessageByIdData?: UpdateMessageByIdData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.updateMessageById(apiToken, channelType, channelUrl, messageId, updateMessageByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * View a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param withSortedMetaArray 
     * @param withMetaArray 
     */
    public viewMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, withSortedMetaArray?: boolean, withMetaArray?: boolean, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.viewMessageById(apiToken, channelType, channelUrl, messageId, withSortedMetaArray, withMetaArray, _options);
        return result.toPromise();
    }

    /**
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * View total number of messages in a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     */
    public viewTotalNumberOfMessagesInChannel(apiToken: string, channelType: string, channelUrl: string, _options?: Configuration): Promise<ViewTotalNumberOfMessagesInChannelResponse> {
        const result = this.api.viewTotalNumberOfMessagesInChannel(apiToken, channelType, channelUrl, _options);
        return result.toPromise();
    }


}



import { ObservableMigrationApi } from './ObservableAPI';

import { MigrationApiRequestFactory, MigrationApiResponseProcessor} from "../apis/MigrationApi";
export class PromiseMigrationApi {
    private api: ObservableMigrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MigrationApiRequestFactory,
        responseProcessor?: MigrationApiResponseProcessor
    ) {
        this.api = new ObservableMigrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * Migrate messages
     * @param apiToken 
     * @param targetChannelUrl 
     * @param body 
     */
    public migrateMessagesByUrl(apiToken: string, targetChannelUrl: string, body?: any, _options?: Configuration): Promise<void> {
        const result = this.api.migrateMessagesByUrl(apiToken, targetChannelUrl, body, _options);
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
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param apiToken 
     * @param channelUrl 
     * @param ocBanUserData 
     */
    public ocBanUser(apiToken: string, channelUrl: string, ocBanUserData?: OcBanUserData, _options?: Configuration): Promise<OcBanUserResponse> {
        const result = this.api.ocBanUser(apiToken, channelUrl, ocBanUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param apiToken 
     * @param channelUrl 
     * @param operatorIds 
     * @param deleteAll 
     */
    public ocCancelTheRegistrationOfOperators(apiToken: string, channelUrl: string, operatorIds: Array<string>, deleteAll?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.ocCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, deleteAll, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * Create a channel
     * @param apiToken 
     * @param ocCreateChannelData 
     */
    public ocCreateChannel(apiToken: string, ocCreateChannelData?: OcCreateChannelData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocCreateChannel(apiToken, ocCreateChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param apiToken 
     * @param channelUrl 
     */
    public ocDeleteChannelByUrl(apiToken: string, channelUrl: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.ocDeleteChannelByUrl(apiToken, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param apiToken 
     * @param channelUrl 
     * @param ocFreezeChannelData 
     */
    public ocFreezeChannel(apiToken: string, channelUrl: string, ocFreezeChannelData?: OcFreezeChannelData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocFreezeChannel(apiToken, channelUrl, ocFreezeChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public ocListBannedUsers(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<OcListBannedUsersResponse> {
        const result = this.api.ocListBannedUsers(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * List channels
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param customTypes 
     * @param nameContains 
     * @param urlContains 
     * @param showFrozen 
     * @param showMetadata 
     * @param customType 
     */
    public ocListChannels(apiToken: string, token?: string, limit?: number, customTypes?: string, nameContains?: string, urlContains?: string, showFrozen?: boolean, showMetadata?: boolean, customType?: string, _options?: Configuration): Promise<OcListChannelsResponse> {
        const result = this.api.ocListChannels(apiToken, token, limit, customTypes, nameContains, urlContains, showFrozen, showMetadata, customType, _options);
        return result.toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public ocListMutedUsers(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<OcListMutedUsersResponse> {
        const result = this.api.ocListMutedUsers(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public ocListOperators(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<OcListOperatorsResponse> {
        const result = this.api.ocListOperators(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * List participants
     * @param apiToken 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public ocListParticipants(apiToken: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<OcListParticipantsResponse> {
        const result = this.api.ocListParticipants(apiToken, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * Mute a user
     * @param apiToken 
     * @param channelUrl 
     * @param ocMuteUserData 
     */
    public ocMuteUser(apiToken: string, channelUrl: string, ocMuteUserData?: OcMuteUserData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocMuteUser(apiToken, channelUrl, ocMuteUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * Register operators
     * @param apiToken 
     * @param channelUrl 
     * @param ocRegisterOperatorsData 
     */
    public ocRegisterOperators(apiToken: string, channelUrl: string, ocRegisterOperatorsData?: OcRegisterOperatorsData, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.ocRegisterOperators(apiToken, channelUrl, ocRegisterOperatorsData, _options);
        return result.toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     */
    public ocUnbanUserById(apiToken: string, channelUrl: string, bannedUserId: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.ocUnbanUserById(apiToken, channelUrl, bannedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param apiToken 
     * @param channelUrl 
     * @param mutedUserId 
     */
    public ocUnmuteUserById(apiToken: string, channelUrl: string, mutedUserId: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.ocUnmuteUserById(apiToken, channelUrl, mutedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     * @param ocUpdateBanByIdData 
     */
    public ocUpdateBanById(apiToken: string, channelUrl: string, bannedUserId: string, ocUpdateBanByIdData?: OcUpdateBanByIdData, _options?: Configuration): Promise<OcUpdateBanByIdResponse> {
        const result = this.api.ocUpdateBanById(apiToken, channelUrl, bannedUserId, ocUpdateBanByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param apiToken 
     * @param channelUrl 
     * @param ocUpdateChannelByUrlData 
     */
    public ocUpdateChannelByUrl(apiToken: string, channelUrl: string, ocUpdateChannelByUrlData?: OcUpdateChannelByUrlData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocUpdateChannelByUrl(apiToken, channelUrl, ocUpdateChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param apiToken 
     * @param channelUrl 
     * @param bannedUserId 
     */
    public ocViewBanById(apiToken: string, channelUrl: string, bannedUserId: string, _options?: Configuration): Promise<OcViewBanByIdResponse> {
        const result = this.api.ocViewBanById(apiToken, channelUrl, bannedUserId, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * View a channel
     * @param apiToken 
     * @param channelUrl 
     */
    public ocViewChannelByUrl(apiToken: string, channelUrl: string, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocViewChannelByUrl(apiToken, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param apiToken 
     * @param channelUrl 
     * @param mutedUserId 
     */
    public ocViewMuteById(apiToken: string, channelUrl: string, mutedUserId: string, _options?: Configuration): Promise<OcViewMuteByIdResponse> {
        const result = this.api.ocViewMuteById(apiToken, channelUrl, mutedUserId, _options);
        return result.toPromise();
    }


}



import { ObservableReportContentSubjectApi } from './ObservableAPI';

import { ReportContentSubjectApiRequestFactory, ReportContentSubjectApiResponseProcessor} from "../apis/ReportContentSubjectApi";
export class PromiseReportContentSubjectApi {
    private api: ObservableReportContentSubjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportContentSubjectApiRequestFactory,
        responseProcessor?: ReportContentSubjectApiResponseProcessor
    ) {
        this.api = new ObservableReportContentSubjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * List reports
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param startTs 
     * @param endTs 
     */
    public listReports(apiToken: string, token?: string, limit?: number, startTs?: number, endTs?: number, _options?: Configuration): Promise<ListReportsResponse> {
        const result = this.api.listReports(apiToken, token, limit, startTs, endTs, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * List reports on a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param token 
     * @param limit 
     */
    public listReportsOnChannelByUrl(apiToken: string, channelType: string, channelUrl: string, token?: string, limit?: number, _options?: Configuration): Promise<ListReportsOnChannelByUrlResponse> {
        const result = this.api.listReportsOnChannelByUrl(apiToken, channelType, channelUrl, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * List reports on a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param token 
     * @param limit 
     */
    public listReportsOnMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, token?: string, limit?: number, _options?: Configuration): Promise<ListReportsOnMessageByIdResponse> {
        const result = this.api.listReportsOnMessageById(apiToken, channelType, channelUrl, messageId, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * List reports on a user
     * @param apiToken 
     * @param offendingUserId 
     * @param token 
     * @param limit 
     */
    public listReportsOnUserById(apiToken: string, offendingUserId: string, token?: string, limit?: number, _options?: Configuration): Promise<ListReportsOnUserByIdResponse> {
        const result = this.api.listReportsOnUserById(apiToken, offendingUserId, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * Report a channel
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param reportChannelByUrlData 
     */
    public reportChannelByUrl(apiToken: string, channelType: string, channelUrl: string, reportChannelByUrlData?: ReportChannelByUrlData, _options?: Configuration): Promise<ReportChannelByUrlResponse> {
        const result = this.api.reportChannelByUrl(apiToken, channelType, channelUrl, reportChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * Report a message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param reportMessageByIdData 
     */
    public reportMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, reportMessageByIdData?: ReportMessageByIdData, _options?: Configuration): Promise<ReportMessageByIdResponse> {
        const result = this.api.reportMessageById(apiToken, channelType, channelUrl, messageId, reportMessageByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * Report a user
     * @param apiToken 
     * @param offendingUserId 
     * @param reportUserByIdData 
     */
    public reportUserById(apiToken: string, offendingUserId: string, reportUserByIdData?: ReportUserByIdData, _options?: Configuration): Promise<ReportUserByIdResponse> {
        const result = this.api.reportUserById(apiToken, offendingUserId, reportUserByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * View a moderated message
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     */
    public viewModeratedMessageById(apiToken: string, channelType: string, channelUrl: string, messageId: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewModeratedMessageById(apiToken, channelType, channelUrl, messageId, _options);
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
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     * @param addRegistrationOrDeviceTokenData 
     */
    public addRegistrationOrDeviceToken(apiToken: string, userId: string, tokenType: string, addRegistrationOrDeviceTokenData?: AddRegistrationOrDeviceTokenData, _options?: Configuration): Promise<AddRegistrationOrDeviceTokenResponse> {
        const result = this.api.addRegistrationOrDeviceToken(apiToken, userId, tokenType, addRegistrationOrDeviceTokenData, _options);
        return result.toPromise();
    }

    /**
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * Ban from channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param banFromChannelsWithCustomChannelTypesData 
     */
    public banFromChannelsWithCustomChannelTypes(apiToken: string, userId: string, banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<any> {
        const result = this.api.banFromChannelsWithCustomChannelTypes(apiToken, userId, banFromChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * Block a user
     * @param apiToken 
     * @param userId 
     * @param blockUserData 
     */
    public blockUser(apiToken: string, userId: string, blockUserData?: BlockUserData, _options?: Configuration): Promise<BlockUserResponse> {
        const result = this.api.blockUser(apiToken, userId, blockUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * Choose a push notification content template
     * @param apiToken 
     * @param userId 
     * @param body 
     */
    public choosePushNotificationContentTemplate(apiToken: string, userId: string, body?: any, _options?: Configuration): Promise<ChoosePushNotificationContentTemplateResponse> {
        const result = this.api.choosePushNotificationContentTemplate(apiToken, userId, body, _options);
        return result.toPromise();
    }

    /**
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * Create a user
     * @param apiToken 
     * @param createUserData 
     */
    public createUser(apiToken: string, createUserData?: CreateUserData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.createUser(apiToken, createUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * Delete a user
     * @param apiToken 
     * @param userId 
     */
    public deleteUserById(apiToken: string, userId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteUserById(apiToken, userId, _options);
        return result.toPromise();
    }

    /**
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param apiToken 
     * @param userId 
     * @param leaveMyGroupChannelsData 
     */
    public leaveMyGroupChannels(apiToken: string, userId: string, leaveMyGroupChannelsData?: LeaveMyGroupChannelsData, _options?: Configuration): Promise<any> {
        const result = this.api.leaveMyGroupChannels(apiToken, userId, leaveMyGroupChannelsData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List banned channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     */
    public listBannedChannels(apiToken: string, userId: string, token?: string, limit?: number, _options?: Configuration): Promise<ListBannedChannelsResponse> {
        const result = this.api.listBannedChannels(apiToken, userId, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     * @param userIds 
     * @param metadatakey 
     * @param metadatavaluesIn 
     */
    public listBlockedUsers(apiToken: string, userId: string, token?: string, limit?: number, userIds?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<ListBlockedUsersResponse> {
        const result = this.api.listBlockedUsers(apiToken, userId, token, limit, userIds, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    }

    /**
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List muted channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     */
    public listMutedChannels(apiToken: string, userId: string, token?: string, limit?: number, _options?: Configuration): Promise<ListMutedChannelsResponse> {
        const result = this.api.listMutedChannels(apiToken, userId, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param apiToken 
     * @param userId 
     * @param token 
     * @param limit 
     * @param distinctMode 
     * @param publicMode 
     * @param superMode 
     * @param hiddenMode 
     * @param memberStateFilter 
     * @param unreadFilter 
     * @param createdAfter 
     * @param createdBefore 
     * @param showEmpty 
     * @param showFrozen 
     * @param showMember 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param order 
     * @param metadataOrderKey 
     * @param customTypes 
     * @param customTypeStartswith 
     * @param channelUrls 
     * @param name 
     * @param nameContains 
     * @param nameStartswith 
     * @param membersExactlyIn 
     * @param membersIncludeIn 
     * @param queryType 
     * @param membersNickname 
     * @param membersNicknameContains 
     * @param searchQuery 
     * @param searchFields 
     * @param metadataKey 
     * @param metadataValues 
     * @param metadataValueStartswith 
     * @param metacounterKey 
     * @param metacounterValues 
     * @param metacounterValueGt 
     * @param metacounterValueGte 
     * @param metacounterValueLt 
     * @param metacounterValueLte 
     * @param customType 
     */
    public listMyGroupChannels(apiToken: string, userId: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, hiddenMode?: string, memberStateFilter?: string, unreadFilter?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showFrozen?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, searchQuery?: string, searchFields?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, customType?: string, _options?: Configuration): Promise<ListMyGroupChannelsResponse> {
        const result = this.api.listMyGroupChannels(apiToken, userId, token, limit, distinctMode, publicMode, superMode, hiddenMode, memberStateFilter, unreadFilter, createdAfter, createdBefore, showEmpty, showFrozen, showMember, showDeliveryReceipt, showReadReceipt, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, searchQuery, searchFields, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, customType, _options);
        return result.toPromise();
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * List registration or device tokens
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     */
    public listRegistrationOrDeviceTokens(apiToken: string, userId: string, tokenType: string, _options?: Configuration): Promise<ListRegistrationOrDeviceTokensResponse> {
        const result = this.api.listRegistrationOrDeviceTokens(apiToken, userId, tokenType, _options);
        return result.toPromise();
    }

    /**
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * List users
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param activeMode 
     * @param showBot 
     * @param userIds 
     * @param nickname 
     * @param nicknameStartswith 
     * @param metadatakey 
     * @param metadatavaluesIn 
     */
    public listUsers(apiToken: string, token?: string, limit?: number, activeMode?: string, showBot?: boolean, userIds?: string, nickname?: string, nicknameStartswith?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<ListUsersResponse> {
        const result = this.api.listUsers(apiToken, token, limit, activeMode, showBot, userIds, nickname, nicknameStartswith, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param apiToken 
     * @param userId 
     * @param markAllMessagesAsReadData 
     */
    public markAllMessagesAsRead(apiToken: string, userId: string, markAllMessagesAsReadData?: MarkAllMessagesAsReadData, _options?: Configuration): Promise<any> {
        const result = this.api.markAllMessagesAsRead(apiToken, userId, markAllMessagesAsReadData, _options);
        return result.toPromise();
    }

    /**
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * Mute in channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param muteInChannelsWithCustomChannelTypesData 
     */
    public muteInChannelsWithCustomChannelTypes(apiToken: string, userId: string, muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<any> {
        const result = this.api.muteInChannelsWithCustomChannelTypes(apiToken, userId, muteInChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * Register as an operator to channels with custom channel types
     * @param apiToken 
     * @param userId 
     * @param registerAsOperatorToChannelsWithCustomChannelTypesData 
     */
    public registerAsOperatorToChannelsWithCustomChannelTypes(apiToken: string, userId: string, registerAsOperatorToChannelsWithCustomChannelTypesData?: RegisterAsOperatorToChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<any> {
        const result = this.api.registerAsOperatorToChannelsWithCustomChannelTypes(apiToken, userId, registerAsOperatorToChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering all device tokens
     * @param apiToken 
     * @param userId 
     */
    public removeRegistrationOrDeviceToken(apiToken: string, userId: string, _options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenResponse> {
        const result = this.api.removeRegistrationOrDeviceToken(apiToken, userId, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering a specific token
     * @param apiToken 
     * @param userId 
     * @param tokenType 
     * @param token 
     */
    public removeRegistrationOrDeviceTokenByToken(apiToken: string, userId: string, tokenType: string, token: string, _options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenByTokenResponse> {
        const result = this.api.removeRegistrationOrDeviceTokenByToken(apiToken, userId, tokenType, token, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * Remove a registration or device token from an owner
     * @param apiToken 
     * @param tokenType 
     * @param token 
     */
    public removeRegistrationOrDeviceTokenFromOwnerByToken(apiToken: string, tokenType: string, token: string, _options?: Configuration): Promise<RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse> {
        const result = this.api.removeRegistrationOrDeviceTokenFromOwnerByToken(apiToken, tokenType, token, _options);
        return result.toPromise();
    }

    /**
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * Reset push preferences
     * @param apiToken 
     * @param userId 
     */
    public resetPushPreferences(apiToken: string, userId: string, _options?: Configuration): Promise<ResetPushPreferencesResponse> {
        const result = this.api.resetPushPreferences(apiToken, userId, _options);
        return result.toPromise();
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * Unblock a user
     * @param apiToken 
     * @param userId 
     * @param targetId 
     */
    public unblockUserById(apiToken: string, userId: string, targetId: string, _options?: Configuration): Promise<any> {
        const result = this.api.unblockUserById(apiToken, userId, targetId, _options);
        return result.toPromise();
    }

    /**
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * Update channel invitation preference
     * @param apiToken 
     * @param userId 
     * @param updateChannelInvitationPreferenceData 
     */
    public updateChannelInvitationPreference(apiToken: string, userId: string, updateChannelInvitationPreferenceData?: UpdateChannelInvitationPreferenceData, _options?: Configuration): Promise<UpdateChannelInvitationPreferenceResponse> {
        const result = this.api.updateChannelInvitationPreference(apiToken, userId, updateChannelInvitationPreferenceData, _options);
        return result.toPromise();
    }

    /**
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * Update count preference of a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     * @param updateCountPreferenceOfChannelByUrlData 
     */
    public updateCountPreferenceOfChannelByUrl(apiToken: string, userId: string, channelUrl: string, updateCountPreferenceOfChannelByUrlData?: UpdateCountPreferenceOfChannelByUrlData, _options?: Configuration): Promise<UpdateCountPreferenceOfChannelByUrlResponse> {
        const result = this.api.updateCountPreferenceOfChannelByUrl(apiToken, userId, channelUrl, updateCountPreferenceOfChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * Update push preferences
     * @param apiToken 
     * @param userId 
     * @param updatePushPreferencesData 
     */
    public updatePushPreferences(apiToken: string, userId: string, updatePushPreferencesData?: UpdatePushPreferencesData, _options?: Configuration): Promise<UpdatePushPreferencesResponse> {
        const result = this.api.updatePushPreferences(apiToken, userId, updatePushPreferencesData, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * Update push preferences for a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     * @param updatePushPreferencesForChannelByUrlData 
     */
    public updatePushPreferencesForChannelByUrl(apiToken: string, userId: string, channelUrl: string, updatePushPreferencesForChannelByUrlData?: UpdatePushPreferencesForChannelByUrlData, _options?: Configuration): Promise<UpdatePushPreferencesForChannelByUrlResponse> {
        const result = this.api.updatePushPreferencesForChannelByUrl(apiToken, userId, channelUrl, updatePushPreferencesForChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * Update a user
     * @param apiToken 
     * @param userId 
     * @param updateUserByIdData 
     */
    public updateUserById(apiToken: string, userId: string, updateUserByIdData?: UpdateUserByIdData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.updateUserById(apiToken, userId, updateUserByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * View channel invitation preference
     * @param apiToken 
     * @param userId 
     */
    public viewChannelInvitationPreference(apiToken: string, userId: string, _options?: Configuration): Promise<ViewChannelInvitationPreferenceResponse> {
        const result = this.api.viewChannelInvitationPreference(apiToken, userId, _options);
        return result.toPromise();
    }

    /**
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * View count preference of a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     */
    public viewCountPreferenceOfChannelByUrl(apiToken: string, userId: string, channelUrl: string, _options?: Configuration): Promise<ViewCountPreferenceOfChannelByUrlResponse> {
        const result = this.api.viewCountPreferenceOfChannelByUrl(apiToken, userId, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of channels by join status
     * @param apiToken 
     * @param userId 
     * @param state 
     */
    public viewNumberOfChannelsByJoinStatus(apiToken: string, userId: string, state?: string, _options?: Configuration): Promise<ViewNumberOfChannelsByJoinStatusResponse> {
        const result = this.api.viewNumberOfChannelsByJoinStatus(apiToken, userId, state, _options);
        return result.toPromise();
    }

    /**
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * View number of channels with unread messages
     * @param apiToken 
     * @param userId 
     * @param customTypes 
     * @param superMode 
     */
    public viewNumberOfChannelsWithUnreadMessages(apiToken: string, userId: string, customTypes?: Array<string>, superMode?: string, _options?: Configuration): Promise<ViewNumberOfChannelsWithUnreadMessagesResponse> {
        const result = this.api.viewNumberOfChannelsWithUnreadMessages(apiToken, userId, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * View number of unread items
     * @param apiToken 
     * @param userId 
     * @param customType 
     * @param itemKeys 
     */
    public viewNumberOfUnreadItems(apiToken: string, userId: string, customType?: string, itemKeys?: string, _options?: Configuration): Promise<ViewNumberOfUnreadItemsResponse> {
        const result = this.api.viewNumberOfUnreadItems(apiToken, userId, customType, itemKeys, _options);
        return result.toPromise();
    }

    /**
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of unread messages
     * @param apiToken 
     * @param userId 
     * @param customTypes 
     * @param superMode 
     */
    public viewNumberOfUnreadMessages(apiToken: string, userId: string, customTypes?: string, superMode?: string, _options?: Configuration): Promise<ViewNumberOfUnreadMessagesResponse> {
        const result = this.api.viewNumberOfUnreadMessages(apiToken, userId, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * View push preferences
     * @param apiToken 
     * @param userId 
     */
    public viewPushPreferences(apiToken: string, userId: string, _options?: Configuration): Promise<ViewPushPreferencesResponse> {
        const result = this.api.viewPushPreferences(apiToken, userId, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * View push preferences for a channel
     * @param apiToken 
     * @param userId 
     * @param channelUrl 
     */
    public viewPushPreferencesForChannelByUrl(apiToken: string, userId: string, channelUrl: string, _options?: Configuration): Promise<ViewPushPreferencesForChannelByUrlResponse> {
        const result = this.api.viewPushPreferencesForChannelByUrl(apiToken, userId, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param apiToken 
     * @param userId 
     * @param includeUnreadCount 
     * @param customTypes 
     * @param superMode 
     */
    public viewUserById(apiToken: string, userId: string, includeUnreadCount?: boolean, customTypes?: string, superMode?: string, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.viewUserById(apiToken, userId, includeUnreadCount, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param apiToken 
     * @param tokenType 
     * @param token 
     */
    public viewWhoOwnsRegistrationOrDeviceTokenByToken(apiToken: string, tokenType: string, token: string, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.viewWhoOwnsRegistrationOrDeviceTokenByToken(apiToken, tokenType, token, _options);
        return result.toPromise();
    }


}



import { ObservableUserChannelMetadataApi } from './ObservableAPI';

import { UserChannelMetadataApiRequestFactory, UserChannelMetadataApiResponseProcessor} from "../apis/UserChannelMetadataApi";
export class PromiseUserChannelMetadataApi {
    private api: ObservableUserChannelMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserChannelMetadataApiRequestFactory,
        responseProcessor?: UserChannelMetadataApiResponseProcessor
    ) {
        this.api = new ObservableUserChannelMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create a channel metacounter  Creates a channel metacounter's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------
     * Create a channel metacounter
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param createChannelMetacounterData 
     */
    public createChannelMetacounter(apiToken: string, channelType: string, channelUrl: string, createChannelMetacounterData?: CreateChannelMetacounterData, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.createChannelMetacounter(apiToken, channelType, channelUrl, createChannelMetacounterData, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * Create a channel metadata
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param createChannelMetadataData 
     */
    public createChannelMetadata(apiToken: string, channelType: string, channelUrl: string, createChannelMetadataData?: CreateChannelMetadataData, _options?: Configuration): Promise<CreateChannelMetadataResponse> {
        const result = this.api.createChannelMetadata(apiToken, channelType, channelUrl, createChannelMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * Create a user metadata
     * @param apiToken 
     * @param userId 
     * @param createUserMetadataData 
     */
    public createUserMetadata(apiToken: string, userId: string, createUserMetadataData?: CreateUserMetadataData, _options?: Configuration): Promise<CreateUserMetadataResponse> {
        const result = this.api.createUserMetadata(apiToken, userId, createUserMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     */
    public deleteChannelMetacounter(apiToken: string, channelType: string, channelUrl: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetacounter(apiToken, channelType, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     */
    public deleteChannelMetacounterByKey(apiToken: string, channelType: string, channelUrl: string, key: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetacounterByKey(apiToken, channelType, channelUrl, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     */
    public deleteChannelMetadata(apiToken: string, channelType: string, channelUrl: string, key?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetadata(apiToken, channelType, channelUrl, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     */
    public deleteChannelMetadataByKey(apiToken: string, channelType: string, channelUrl: string, key: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetadataByKey(apiToken, channelType, channelUrl, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting all items of a user metadata
     * @param apiToken 
     * @param userId 
     * @param key 
     */
    public deleteUserMetadata(apiToken: string, userId: string, key?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserMetadata(apiToken, userId, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * @param apiToken 
     * @param userId 
     * @param key 
     */
    public deleteUserMetadataByKey(apiToken: string, userId: string, key: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserMetadataByKey(apiToken, userId, key, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param updateChannelMetacounterData 
     */
    public updateChannelMetacounter(apiToken: string, channelType: string, channelUrl: string, updateChannelMetacounterData?: UpdateChannelMetacounterData, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.updateChannelMetacounter(apiToken, channelType, channelUrl, updateChannelMetacounterData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param body 
     */
    public updateChannelMetacounterByKey(apiToken: string, channelType: string, channelUrl: string, key: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetacounterByKey(apiToken, channelType, channelUrl, key, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param updateChannelMetadataData 
     */
    public updateChannelMetadata(apiToken: string, channelType: string, channelUrl: string, updateChannelMetadataData?: UpdateChannelMetadataData, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetadata(apiToken, channelType, channelUrl, updateChannelMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param body 
     */
    public updateChannelMetadataByKey(apiToken: string, channelType: string, channelUrl: string, key: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetadataByKey(apiToken, channelType, channelUrl, key, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * @param apiToken 
     * @param userId 
     * @param updateUserMetadataData 
     */
    public updateUserMetadata(apiToken: string, userId: string, updateUserMetadataData?: UpdateUserMetadataData, _options?: Configuration): Promise<UpdateUserMetadataResponse> {
        const result = this.api.updateUserMetadata(apiToken, userId, updateUserMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * @param apiToken 
     * @param userId 
     * @param key 
     * @param body 
     */
    public updateUserMetadataByKey(apiToken: string, userId: string, key: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateUserMetadataByKey(apiToken, userId, key, body, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param keys 
     */
    public viewChannelMetacounter(apiToken: string, channelType: string, channelUrl: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.viewChannelMetacounter(apiToken, channelType, channelUrl, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     */
    public viewChannelMetacounterByKey(apiToken: string, channelType: string, channelUrl: string, key: string, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.viewChannelMetacounterByKey(apiToken, channelType, channelUrl, key, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param keys 
     */
    public viewChannelMetadata(apiToken: string, channelType: string, channelUrl: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewChannelMetadata(apiToken, channelType, channelUrl, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * @param apiToken 
     * @param channelType 
     * @param channelUrl 
     * @param key 
     */
    public viewChannelMetadataByKey(apiToken: string, channelType: string, channelUrl: string, key: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewChannelMetadataByKey(apiToken, channelType, channelUrl, key, _options);
        return result.toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving all items of a user metadata
     * @param apiToken 
     * @param userId 
     * @param key 
     * @param keys 
     */
    public viewUserMetadata(apiToken: string, userId: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<ViewUserMetadataResponse> {
        const result = this.api.viewUserMetadata(apiToken, userId, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * @param apiToken 
     * @param userId 
     * @param key 
     */
    public viewUserMetadataByKey(apiToken: string, userId: string, key: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewUserMetadataByKey(apiToken, userId, key, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * Choose which events to subscribe to
     * @param apiToken 
     * @param chooseWhichEventsToSubscribeToData 
     */
    public chooseWhichEventsToSubscribeTo(apiToken: string, chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData, _options?: Configuration): Promise<ChooseWhichEventsToSubscribeToResponse> {
        const result = this.api.chooseWhichEventsToSubscribeTo(apiToken, chooseWhichEventsToSubscribeToData, _options);
        return result.toPromise();
    }

    /**
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * Retrieve a list of subscribed events
     * @param apiToken 
     * @param displayAllWebhookCategories 
     */
    public retrieveListOfSubscribedEvents(apiToken: string, displayAllWebhookCategories?: boolean, _options?: Configuration): Promise<RetrieveListOfSubscribedEventsResponse> {
        const result = this.api.retrieveListOfSubscribedEvents(apiToken, displayAllWebhookCategories, _options);
        return result.toPromise();
    }


}



