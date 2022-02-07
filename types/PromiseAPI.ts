import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AddApnsPushConfigurationData } from '../models/AddApnsPushConfigurationData';
import { AddEmojisData } from '../models/AddEmojisData';
import { AddExtraDataToMessageData } from '../models/AddExtraDataToMessageData';
import { AddFcmPushConfigurationData } from '../models/AddFcmPushConfigurationData';
import { AddHmsPushConfigurationData } from '../models/AddHmsPushConfigurationData';
import { AddIpToWhitelistData } from '../models/AddIpToWhitelistData';
import { AddReactionToAMessageData } from '../models/AddReactionToAMessageData';
import { AddRegistrationOrDeviceTokenData } from '../models/AddRegistrationOrDeviceTokenData';
import { BanFromChannelsWithCustomChannelTypesData } from '../models/BanFromChannelsWithCustomChannelTypesData';
import { Blob } from '../models/Blob';
import { BlockUserData } from '../models/BlockUserData';
import { ChooseWhichEventsToSubscribeToData } from '../models/ChooseWhichEventsToSubscribeToData';
import { CreateBotData } from '../models/CreateBotData';
import { CreateChannelMetacounterData } from '../models/CreateChannelMetacounterData';
import { CreateChannelMetadataData } from '../models/CreateChannelMetadataData';
import { CreateUserData } from '../models/CreateUserData';
import { CreateUserMetadataData } from '../models/CreateUserMetadataData';
import { EnableReactionsData } from '../models/EnableReactionsData';
import { Function } from '../models/Function';
import { GcAcceptInvitationData } from '../models/GcAcceptInvitationData';
import { GcBanUserData } from '../models/GcBanUserData';
import { GcCreateChannelData } from '../models/GcCreateChannelData';
import { GcDeclineInvitationData } from '../models/GcDeclineInvitationData';
import { GcFreezeChannelData } from '../models/GcFreezeChannelData';
import { GcHideOrArchiveChannelData } from '../models/GcHideOrArchiveChannelData';
import { GcInviteAsMembersData } from '../models/GcInviteAsMembersData';
import { GcJoinChannelData } from '../models/GcJoinChannelData';
import { GcLeaveChannelData } from '../models/GcLeaveChannelData';
import { GcMarkAllMessagesAsDeliveredData } from '../models/GcMarkAllMessagesAsDeliveredData';
import { GcMarkAllMessagesAsReadData } from '../models/GcMarkAllMessagesAsReadData';
import { GcMuteUserData } from '../models/GcMuteUserData';
import { GcRegisterOperatorsData } from '../models/GcRegisterOperatorsData';
import { GcResetChatHistoryData } from '../models/GcResetChatHistoryData';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateChannelByUrlData } from '../models/GcUpdateChannelByUrlData';
import { GenerateSecondaryApiTokenData } from '../models/GenerateSecondaryApiTokenData';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20012PushConfigurations } from '../models/InlineResponse20012PushConfigurations';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse20014 } from '../models/InlineResponse20014';
import { InlineResponse20015 } from '../models/InlineResponse20015';
import { InlineResponse20015PushMessageTemplates } from '../models/InlineResponse20015PushMessageTemplates';
import { InlineResponse20016 } from '../models/InlineResponse20016';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20018 } from '../models/InlineResponse20018';
import { InlineResponse20019 } from '../models/InlineResponse20019';
import { InlineResponse2001PushConfigurations } from '../models/InlineResponse2001PushConfigurations';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse20020 } from '../models/InlineResponse20020';
import { InlineResponse20021 } from '../models/InlineResponse20021';
import { InlineResponse20022 } from '../models/InlineResponse20022';
import { InlineResponse20022BannedChannels } from '../models/InlineResponse20022BannedChannels';
import { InlineResponse20023 } from '../models/InlineResponse20023';
import { InlineResponse20024 } from '../models/InlineResponse20024';
import { InlineResponse20025 } from '../models/InlineResponse20025';
import { InlineResponse20026 } from '../models/InlineResponse20026';
import { InlineResponse20027 } from '../models/InlineResponse20027';
import { InlineResponse20028 } from '../models/InlineResponse20028';
import { InlineResponse20029 } from '../models/InlineResponse20029';
import { InlineResponse2002PushConfigurations } from '../models/InlineResponse2002PushConfigurations';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse20030 } from '../models/InlineResponse20030';
import { InlineResponse20031 } from '../models/InlineResponse20031';
import { InlineResponse20032 } from '../models/InlineResponse20032';
import { InlineResponse20033 } from '../models/InlineResponse20033';
import { InlineResponse20033BannedList } from '../models/InlineResponse20033BannedList';
import { InlineResponse20034 } from '../models/InlineResponse20034';
import { InlineResponse20035 } from '../models/InlineResponse20035';
import { InlineResponse20036 } from '../models/InlineResponse20036';
import { InlineResponse20037 } from '../models/InlineResponse20037';
import { InlineResponse20038 } from '../models/InlineResponse20038';
import { InlineResponse20039 } from '../models/InlineResponse20039';
import { InlineResponse20039Announcements } from '../models/InlineResponse20039Announcements';
import { InlineResponse20039Message } from '../models/InlineResponse20039Message';
import { InlineResponse2003PushConfigurations } from '../models/InlineResponse2003PushConfigurations';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse20040 } from '../models/InlineResponse20040';
import { InlineResponse20040CreateChannelOptions } from '../models/InlineResponse20040CreateChannelOptions';
import { InlineResponse20041 } from '../models/InlineResponse20041';
import { InlineResponse20041Message } from '../models/InlineResponse20041Message';
import { InlineResponse20042 } from '../models/InlineResponse20042';
import { InlineResponse20043 } from '../models/InlineResponse20043';
import { InlineResponse20043OpenStatus } from '../models/InlineResponse20043OpenStatus';
import { InlineResponse20044 } from '../models/InlineResponse20044';
import { InlineResponse20044Statistics } from '../models/InlineResponse20044Statistics';
import { InlineResponse20045 } from '../models/InlineResponse20045';
import { InlineResponse20046 } from '../models/InlineResponse20046';
import { InlineResponse20047 } from '../models/InlineResponse20047';
import { InlineResponse20047Messages } from '../models/InlineResponse20047Messages';
import { InlineResponse20047OgTag } from '../models/InlineResponse20047OgTag';
import { InlineResponse20047OgTagOgImage } from '../models/InlineResponse20047OgTagOgImage';
import { InlineResponse20047SortedMetaarray } from '../models/InlineResponse20047SortedMetaarray';
import { InlineResponse20047User } from '../models/InlineResponse20047User';
import { InlineResponse20047UserMetadata } from '../models/InlineResponse20047UserMetadata';
import { InlineResponse20048 } from '../models/InlineResponse20048';
import { InlineResponse20049 } from '../models/InlineResponse20049';
import { InlineResponse20049Unread } from '../models/InlineResponse20049Unread';
import { InlineResponse2004PushMessageTemplates } from '../models/InlineResponse2004PushMessageTemplates';
import { InlineResponse2004Template } from '../models/InlineResponse2004Template';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse20050 } from '../models/InlineResponse20050';
import { InlineResponse20051 } from '../models/InlineResponse20051';
import { InlineResponse20052 } from '../models/InlineResponse20052';
import { InlineResponse20053 } from '../models/InlineResponse20053';
import { InlineResponse20054 } from '../models/InlineResponse20054';
import { InlineResponse20055 } from '../models/InlineResponse20055';
import { InlineResponse20056 } from '../models/InlineResponse20056';
import { InlineResponse20056EmojiCategories } from '../models/InlineResponse20056EmojiCategories';
import { InlineResponse20056Emojis } from '../models/InlineResponse20056Emojis';
import { InlineResponse20057 } from '../models/InlineResponse20057';
import { InlineResponse20057EmojiCategories } from '../models/InlineResponse20057EmojiCategories';
import { InlineResponse20058 } from '../models/InlineResponse20058';
import { InlineResponse20059 } from '../models/InlineResponse20059';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse20060 } from '../models/InlineResponse20060';
import { InlineResponse20061 } from '../models/InlineResponse20061';
import { InlineResponse20062 } from '../models/InlineResponse20062';
import { InlineResponse20063 } from '../models/InlineResponse20063';
import { InlineResponse20063ExportedData } from '../models/InlineResponse20063ExportedData';
import { InlineResponse20063File } from '../models/InlineResponse20063File';
import { InlineResponse20064 } from '../models/InlineResponse20064';
import { InlineResponse20065 } from '../models/InlineResponse20065';
import { InlineResponse20065Bot } from '../models/InlineResponse20065Bot';
import { InlineResponse20065Bots } from '../models/InlineResponse20065Bots';
import { InlineResponse20066 } from '../models/InlineResponse20066';
import { InlineResponse20066Webhook } from '../models/InlineResponse20066Webhook';
import { InlineResponse20067 } from '../models/InlineResponse20067';
import { InlineResponse20067Webhook } from '../models/InlineResponse20067Webhook';
import { InlineResponse20068 } from '../models/InlineResponse20068';
import { InlineResponse20068Requests } from '../models/InlineResponse20068Requests';
import { InlineResponse20069 } from '../models/InlineResponse20069';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse20070 } from '../models/InlineResponse20070';
import { InlineResponse20070ReportLogs } from '../models/InlineResponse20070ReportLogs';
import { InlineResponse20071 } from '../models/InlineResponse20071';
import { InlineResponse20071ReportLogs } from '../models/InlineResponse20071ReportLogs';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { InlineResponse2009PeakConnections } from '../models/InlineResponse2009PeakConnections';
import { JoinChannelsData } from '../models/JoinChannelsData';
import { LeaveMyGroupChannelsData } from '../models/LeaveMyGroupChannelsData';
import { MarkAllMessagesAsReadData } from '../models/MarkAllMessagesAsReadData';
import { ModelFile } from '../models/ModelFile';
import { ModelObject } from '../models/ModelObject';
import { MuteInChannelsWithCustomChannelTypesData } from '../models/MuteInChannelsWithCustomChannelTypesData';
import { OcBanUserData } from '../models/OcBanUserData';
import { OcCreateChannelData } from '../models/OcCreateChannelData';
import { OcFreezeChannelData } from '../models/OcFreezeChannelData';
import { OcMuteUserData } from '../models/OcMuteUserData';
import { OcRegisterOperatorsData } from '../models/OcRegisterOperatorsData';
import { OcUpdateBanByIdData } from '../models/OcUpdateBanByIdData';
import { OcUpdateChannelByUrlData } from '../models/OcUpdateChannelByUrlData';
import { RegisterAndScheduleDataExportData } from '../models/RegisterAndScheduleDataExportData';
import { RegisterAsOperatorToChannelsWithCustomChannelTypesData } from '../models/RegisterAsOperatorToChannelsWithCustomChannelTypesData';
import { RegisterGdprRequestData } from '../models/RegisterGdprRequestData';
import { ReportChannelByUrlData } from '../models/ReportChannelByUrlData';
import { ReportMessageByIdData } from '../models/ReportMessageByIdData';
import { ReportUserByIdData } from '../models/ReportUserByIdData';
import { ScheduleAnnouncementData } from '../models/ScheduleAnnouncementData';
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
import { SendBirdThumbnailObject } from '../models/SendBirdThumbnailObject';
import { SendBirdThumbnailSize } from '../models/SendBirdThumbnailSize';
import { SendBirdUser } from '../models/SendBirdUser';
import { SendBirdUserMessageParams } from '../models/SendBirdUserMessageParams';
import { SendBotSMessageData } from '../models/SendBotSMessageData';
import { SendMessageData } from '../models/SendMessageData';
import { UpdateAnnouncementByIdData } from '../models/UpdateAnnouncementByIdData';
import { UpdateApnsPushConfigurationByIdData } from '../models/UpdateApnsPushConfigurationByIdData';
import { UpdateBotByIdData } from '../models/UpdateBotByIdData';
import { UpdateChannelInvitationPreferenceData } from '../models/UpdateChannelInvitationPreferenceData';
import { UpdateChannelMetacounterData } from '../models/UpdateChannelMetacounterData';
import { UpdateChannelMetadataData } from '../models/UpdateChannelMetadataData';
import { UpdateCountPreferenceOfChannelByUrlData } from '../models/UpdateCountPreferenceOfChannelByUrlData';
import { UpdateDefaultChannelInvitationPreferenceData } from '../models/UpdateDefaultChannelInvitationPreferenceData';
import { UpdateEmojiCategoryUrlByIdData } from '../models/UpdateEmojiCategoryUrlByIdData';
import { UpdateEmojiUrlByKeyData } from '../models/UpdateEmojiUrlByKeyData';
import { UpdateExtraDataInMessageData } from '../models/UpdateExtraDataInMessageData';
import { UpdateFcmPushConfigurationByIdData } from '../models/UpdateFcmPushConfigurationByIdData';
import { UpdateHmsPushConfigurationByIdData } from '../models/UpdateHmsPushConfigurationByIdData';
import { UpdateMessageByIdData } from '../models/UpdateMessageByIdData';
import { UpdatePushNotificationContentTemplateData } from '../models/UpdatePushNotificationContentTemplateData';
import { UpdatePushPreferencesData } from '../models/UpdatePushPreferencesData';
import { UpdatePushPreferencesForChannelByUrlData } from '../models/UpdatePushPreferencesForChannelByUrlData';
import { UpdateUserByIdData } from '../models/UpdateUserByIdData';
import { UpdateUserMetadataData } from '../models/UpdateUserMetadataData';
import { UseDefaultEmojisData } from '../models/UseDefaultEmojisData';
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
    public retrieveAdvancedAnalyticsMetrics(apiToken?: string, _options?: Configuration): Promise<InlineResponse20062> {
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
     * @param uniqueId 
     * @param apiToken 
     */
    public getDetailedOpenRateOfAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20042> {
        const result = this.api.getDetailedOpenRateOfAnnouncementById(uniqueId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * Get detailed open rate of an announcement group
     * @param announcementGroup 
     * @param apiToken 
     */
    public getDetailedOpenRateOfAnnouncementGroup(announcementGroup: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20046> {
        const result = this.api.getDetailedOpenRateOfAnnouncementGroup(announcementGroup, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * Get detailed open status of an announcement
     * @param uniqueId 
     * @param apiToken 
     * @param limit 
     * @param next 
     * @param uniqueIds 
     * @param channelUrls 
     * @param hasOpened 
     */
    public getDetailedOpenStatusOfAnnouncementById(uniqueId: string, apiToken?: string, limit?: number, next?: string, uniqueIds?: Array<string>, channelUrls?: Array<string>, hasOpened?: boolean, _options?: Configuration): Promise<InlineResponse20043> {
        const result = this.api.getDetailedOpenStatusOfAnnouncementById(uniqueId, apiToken, limit, next, uniqueIds, channelUrls, hasOpened, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - weekly
     * @param apiToken 
     */
    public getStatistics(apiToken?: string, _options?: Configuration): Promise<InlineResponse20044> {
        const result = this.api.getStatistics(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - daily
     * @param startDate 
     * @param endDate 
     * @param startWeek 
     * @param endWeek 
     * @param startMonth 
     * @param endMonth 
     * @param apiToken 
     * @param announcementGroup 
     */
    public getStatisticsDaily(startDate: string, endDate: string, startWeek: string, endWeek: string, startMonth: string, endMonth: string, apiToken?: string, announcementGroup?: string, _options?: Configuration): Promise<InlineResponse20044> {
        const result = this.api.getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, apiToken, announcementGroup, _options);
        return result.toPromise();
    }

    /**
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * Get statistics - monthly
     * @param apiToken 
     */
    public getStatisticsMonthly(apiToken?: string, _options?: Configuration): Promise<InlineResponse20044> {
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
    public listAnnouncementGroups(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20045> {
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
    public listAnnouncements(apiToken?: string, token?: string, limit?: number, order?: string, status?: string, announcementGroup?: string, _options?: Configuration): Promise<InlineResponse20039> {
        const result = this.api.listAnnouncements(apiToken, token, limit, order, status, announcementGroup, _options);
        return result.toPromise();
    }

    /**
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * Schedule an announcement
     * @param apiToken 
     * @param scheduleAnnouncementData 
     */
    public scheduleAnnouncement(apiToken?: string, scheduleAnnouncementData?: ScheduleAnnouncementData, _options?: Configuration): Promise<InlineResponse20040> {
        const result = this.api.scheduleAnnouncement(apiToken, scheduleAnnouncementData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * Update an announcement
     * @param uniqueId 
     * @param apiToken 
     * @param updateAnnouncementByIdData 
     */
    public updateAnnouncementById(uniqueId: string, apiToken?: string, updateAnnouncementByIdData?: UpdateAnnouncementByIdData, _options?: Configuration): Promise<InlineResponse20041> {
        const result = this.api.updateAnnouncementById(uniqueId, apiToken, updateAnnouncementByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * View an announcement
     * @param uniqueId 
     * @param apiToken 
     */
    public viewAnnouncementById(uniqueId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20039Announcements> {
        const result = this.api.viewAnnouncementById(uniqueId, apiToken, _options);
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
    public addApnsPushConfiguration(apiToken?: string, addApnsPushConfigurationData?: AddApnsPushConfigurationData, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.addApnsPushConfiguration(apiToken, addApnsPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * Add a FCM push configuration
     * @param apiToken 
     * @param addFcmPushConfigurationData 
     */
    public addFcmPushConfiguration(apiToken?: string, addFcmPushConfigurationData?: AddFcmPushConfigurationData, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.addFcmPushConfiguration(apiToken, addFcmPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * Add an HMS push configuration
     * @param apiToken 
     * @param addHmsPushConfigurationData 
     */
    public addHmsPushConfiguration(apiToken?: string, addHmsPushConfigurationData?: AddHmsPushConfigurationData, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.addHmsPushConfiguration(apiToken, addHmsPushConfigurationData, _options);
        return result.toPromise();
    }

    /**
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * Add an IP to a whitelist
     * @param apiToken 
     * @param addIpToWhitelistData 
     */
    public addIpToWhitelist(apiToken?: string, addIpToWhitelistData?: AddIpToWhitelistData, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.addIpToWhitelist(apiToken, addIpToWhitelistData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * Delete allowed IPs from a whitelist
     * @param ipWhitelistAddresses 
     * @param apiToken 
     */
    public deleteAllowedIpsFromWhitelist(ipWhitelistAddresses: Array<string>, apiToken?: string, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * Delete an APNs certificate
     * @param providerId 
     * @param apiToken 
     */
    public deleteApnsCertificateById(providerId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.deleteApnsCertificateById(providerId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * Generate a secondary API token
     * @param apiToken 
     * @param generateSecondaryApiTokenData 
     */
    public generateSecondaryApiToken(apiToken?: string, generateSecondaryApiTokenData?: GenerateSecondaryApiTokenData, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.generateSecondaryApiToken(apiToken, generateSecondaryApiTokenData, _options);
        return result.toPromise();
    }

    /**
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * List push configurations
     * @param pushType 
     * @param apiToken 
     */
    public listPushConfigurations(pushType: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20012> {
        const result = this.api.listPushConfigurations(pushType, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * List push notification content templates
     * @param apiToken 
     */
    public listPushNotificationContentTemplates(apiToken?: string, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.listPushNotificationContentTemplates(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * List secondary API tokens
     * @param apiToken 
     */
    public listSecondaryApiTokens(apiToken?: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.listSecondaryApiTokens(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * Remove a push configuration
     * @param pushType 
     * @param providerId 
     * @param apiToken 
     */
    public removePushConfigurationById(pushType: string, providerId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.removePushConfigurationById(pushType, providerId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * Retrieve an IP whitelist
     * @param apiToken 
     */
    public retrieveIpWhitelist(apiToken?: string, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.retrieveIpWhitelist(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * Revoke a secondary API token
     * @param apiToken2 
     * @param apiToken 
     */
    public revokeSecondaryApiTokenByToken(apiToken2: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.revokeSecondaryApiTokenByToken(apiToken2, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * Update an APNs push configuration
     * @param providerId 
     * @param apiToken 
     * @param updateApnsPushConfigurationByIdData 
     */
    public updateApnsPushConfigurationById(providerId: string, apiToken?: string, updateApnsPushConfigurationByIdData?: UpdateApnsPushConfigurationByIdData, _options?: Configuration): Promise<InlineResponse20014> {
        const result = this.api.updateApnsPushConfigurationById(providerId, apiToken, updateApnsPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * Update default channel invitation preference
     * @param apiToken 
     * @param updateDefaultChannelInvitationPreferenceData 
     */
    public updateDefaultChannelInvitationPreference(apiToken?: string, updateDefaultChannelInvitationPreferenceData?: UpdateDefaultChannelInvitationPreferenceData, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.updateDefaultChannelInvitationPreference(apiToken, updateDefaultChannelInvitationPreferenceData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * Update a FCM push configuration
     * @param providerId 
     * @param apiToken 
     * @param updateFcmPushConfigurationByIdData 
     */
    public updateFcmPushConfigurationById(providerId: string, apiToken?: string, updateFcmPushConfigurationByIdData?: UpdateFcmPushConfigurationByIdData, _options?: Configuration): Promise<InlineResponse20014> {
        const result = this.api.updateFcmPushConfigurationById(providerId, apiToken, updateFcmPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * Update an HMS push configuration
     * @param providerId 
     * @param apiToken 
     * @param updateHmsPushConfigurationByIdData 
     */
    public updateHmsPushConfigurationById(providerId: string, apiToken?: string, updateHmsPushConfigurationByIdData?: UpdateHmsPushConfigurationByIdData, _options?: Configuration): Promise<InlineResponse20014> {
        const result = this.api.updateHmsPushConfigurationById(providerId, apiToken, updateHmsPushConfigurationByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * Update a push notification content template
     * @param templateName 
     * @param apiToken 
     * @param updatePushNotificationContentTemplateData 
     */
    public updatePushNotificationContentTemplate(templateName: string, apiToken?: string, updatePushNotificationContentTemplateData?: UpdatePushNotificationContentTemplateData, _options?: Configuration): Promise<InlineResponse20015> {
        const result = this.api.updatePushNotificationContentTemplate(templateName, apiToken, updatePushNotificationContentTemplateData, _options);
        return result.toPromise();
    }

    /**
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * View default channel invitation preference
     * @param apiToken 
     */
    public viewDefaultChannelInvitationPreference(apiToken?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.viewDefaultChannelInvitationPreference(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * View number of concurrent connections
     * @param apiToken 
     */
    public viewNumberOfConcurrentConnections(apiToken?: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.viewNumberOfConcurrentConnections(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * View number of daily active users
     * @param apiToken 
     * @param date 
     */
    public viewNumberOfDailyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<InlineResponse20011> {
        const result = this.api.viewNumberOfDailyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * View number of monthly active users
     * @param apiToken 
     * @param date 
     */
    public viewNumberOfMonthlyActiveUsers(apiToken?: string, date?: string, _options?: Configuration): Promise<InlineResponse20010> {
        const result = this.api.viewNumberOfMonthlyActiveUsers(apiToken, date, _options);
        return result.toPromise();
    }

    /**
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * View number of peak connections
     * @param timeDimension 
     * @param startYear 
     * @param startMonth 
     * @param endYear 
     * @param endMonth 
     * @param apiToken 
     * @param startDay 
     * @param endDay 
     */
    public viewNumberOfPeakConnections(timeDimension: string, startYear: number, startMonth: number, endYear: number, endMonth: number, apiToken?: string, startDay?: number, endDay?: number, _options?: Configuration): Promise<InlineResponse2009> {
        const result = this.api.viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, apiToken, startDay, endDay, _options);
        return result.toPromise();
    }

    /**
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * View a push configuration
     * @param pushType 
     * @param providerId 
     * @param apiToken 
     */
    public viewPushConfigurationById(pushType: string, providerId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20012> {
        const result = this.api.viewPushConfigurationById(pushType, providerId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * View a push notification content template
     * @param templateName 
     * @param apiToken 
     */
    public viewPushNotificationContentTemplate(templateName: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20015> {
        const result = this.api.viewPushNotificationContentTemplate(templateName, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * View a secondary API token
     * @param apiToken2 
     * @param apiToken 
     */
    public viewSecondaryApiTokenByToken(apiToken2: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.viewSecondaryApiTokenByToken(apiToken2, apiToken, _options);
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
    public createBot(apiToken?: string, createBotData?: CreateBotData, _options?: Configuration): Promise<InlineResponse20065Bots> {
        const result = this.api.createBot(apiToken, createBotData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * Delete a bot
     * @param botUserid 
     * @param apiToken 
     */
    public deleteBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteBotById(botUserid, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * Join channels
     * @param botUserid 
     * @param apiToken 
     * @param joinChannelsData 
     */
    public joinChannels(botUserid: string, apiToken?: string, joinChannelsData?: JoinChannelsData, _options?: Configuration): Promise<SendBirdGroupChannelCollection> {
        const result = this.api.joinChannels(botUserid, apiToken, joinChannelsData, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving all channels
     * @param botUserid 
     * @param apiToken 
     * @param channelUrl 
     */
    public leaveChannels(botUserid: string, apiToken?: string, channelUrl?: string, _options?: Configuration): Promise<void> {
        const result = this.api.leaveChannels(botUserid, apiToken, channelUrl, _options);
        return result.toPromise();
    }

    /**
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * Leave channels - When leaving a channel by its channel URL
     * @param botUserid 
     * @param channelUrl 
     * @param apiToken 
     */
    public leaveChannelsByUrl(botUserid: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.leaveChannelsByUrl(botUserid, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * List bots
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listBots(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20065> {
        const result = this.api.listBots(apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * Send a bot's message
     * @param botUserid 
     * @param apiToken 
     * @param sendBotSMessageData 
     */
    public sendBotsMessage(botUserid: string, apiToken?: string, sendBotSMessageData?: SendBotSMessageData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.sendBotsMessage(botUserid, apiToken, sendBotSMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * Update a bot
     * @param botUserid 
     * @param apiToken 
     * @param updateBotByIdData 
     */
    public updateBotById(botUserid: string, apiToken?: string, updateBotByIdData?: UpdateBotByIdData, _options?: Configuration): Promise<InlineResponse20065Bots> {
        const result = this.api.updateBotById(botUserid, apiToken, updateBotByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * View a bot
     * @param botUserid 
     * @param apiToken 
     */
    public viewBotById(botUserid: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20065Bots> {
        const result = this.api.viewBotById(botUserid, apiToken, _options);
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
     * @param dataType 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listDataExportsByMessageChannelOrUser(dataType: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20063> {
        const result = this.api.listDataExportsByMessageChannelOrUser(dataType, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * Register and schedule a data export
     * @param dataType 
     * @param apiToken 
     * @param registerAndScheduleDataExportData 
     */
    public registerAndScheduleDataExport(dataType: string, apiToken?: string, registerAndScheduleDataExportData?: RegisterAndScheduleDataExportData, _options?: Configuration): Promise<InlineResponse20063ExportedData> {
        const result = this.api.registerAndScheduleDataExport(dataType, apiToken, registerAndScheduleDataExportData, _options);
        return result.toPromise();
    }

    /**
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * View a data export
     * @param dataType 
     * @param requestId 
     * @param apiToken 
     */
    public viewDataExportById(dataType: string, requestId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20064> {
        const result = this.api.viewDataExportById(dataType, requestId, apiToken, _options);
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
     * @param requestId 
     * @param apiToken 
     */
    public cancelTheRegistrationOfGdprRequestById(requestId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.cancelTheRegistrationOfGdprRequestById(requestId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * List GDPR requests
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listGdprRequests(apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20068> {
        const result = this.api.listGdprRequests(apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * Register a GDPR request
     * @param apiToken 
     * @param registerGdprRequestData 
     */
    public registerGdprRequest(apiToken?: string, registerGdprRequestData?: RegisterGdprRequestData, _options?: Configuration): Promise<InlineResponse20069> {
        const result = this.api.registerGdprRequest(apiToken, registerGdprRequestData, _options);
        return result.toPromise();
    }

    /**
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * View a GDPR request
     * @param requestId 
     * @param apiToken 
     */
    public viewGdprRequestById(requestId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20068Requests> {
        const result = this.api.viewGdprRequestById(requestId, apiToken, _options);
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
    public addEmojiCategories(apiToken?: string, body?: any, _options?: Configuration): Promise<InlineResponse20057> {
        const result = this.api.addEmojiCategories(apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * Add emojis
     * @param apiToken 
     * @param addEmojisData 
     */
    public addEmojis(apiToken?: string, addEmojisData?: AddEmojisData, _options?: Configuration): Promise<InlineResponse20059> {
        const result = this.api.addEmojis(apiToken, addEmojisData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * Delete an emoji
     * @param emojiKey 
     * @param apiToken 
     */
    public deleteEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEmojiByKey(emojiKey, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * Delete an emoji category
     * @param emojiCategoryId 
     * @param apiToken 
     */
    public deleteEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEmojiCategoryById(emojiCategoryId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * Enable reactions
     * @param apiToken 
     * @param enableReactionsData 
     */
    public enableReactions(apiToken?: string, enableReactionsData?: EnableReactionsData, _options?: Configuration): Promise<InlineResponse20051> {
        const result = this.api.enableReactions(apiToken, enableReactionsData, _options);
        return result.toPromise();
    }

    /**
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * Get an emoji
     * @param emojiKey 
     * @param apiToken 
     */
    public getEmojiByKey(emojiKey: string, apiToken?: string, _options?: Configuration): Promise<SendBirdEmoji> {
        const result = this.api.getEmojiByKey(emojiKey, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * Get an emoji category
     * @param emojiCategoryId 
     * @param apiToken 
     */
    public getEmojiCategoryById(emojiCategoryId: string, apiToken?: string, _options?: Configuration): Promise<SendBirdEmojiCategory> {
        const result = this.api.getEmojiCategoryById(emojiCategoryId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * List all emojis and emoji categories
     * @param apiToken 
     */
    public listAllEmojisAndEmojiCategories(apiToken?: string, _options?: Configuration): Promise<InlineResponse20056> {
        const result = this.api.listAllEmojisAndEmojiCategories(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * List emojis
     * @param apiToken 
     */
    public listEmojis(apiToken?: string, _options?: Configuration): Promise<InlineResponse20058> {
        const result = this.api.listEmojis(apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * Update an emoji category URL
     * @param emojiCategoryId 
     * @param apiToken 
     * @param updateEmojiCategoryUrlByIdData 
     */
    public updateEmojiCategoryUrlById(emojiCategoryId: string, apiToken?: string, updateEmojiCategoryUrlByIdData?: UpdateEmojiCategoryUrlByIdData, _options?: Configuration): Promise<SendBirdEmojiCategory> {
        const result = this.api.updateEmojiCategoryUrlById(emojiCategoryId, apiToken, updateEmojiCategoryUrlByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * Update an emoji URL
     * @param emojiKey 
     * @param apiToken 
     * @param updateEmojiUrlByKeyData 
     */
    public updateEmojiUrlByKey(emojiKey: string, apiToken?: string, updateEmojiUrlByKeyData?: UpdateEmojiUrlByKeyData, _options?: Configuration): Promise<SendBirdEmoji> {
        const result = this.api.updateEmojiUrlByKey(emojiKey, apiToken, updateEmojiUrlByKeyData, _options);
        return result.toPromise();
    }

    /**
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * Use default emojis
     * @param apiToken 
     * @param useDefaultEmojisData 
     */
    public useDefaultEmojis(apiToken?: string, useDefaultEmojisData?: UseDefaultEmojisData, _options?: Configuration): Promise<InlineResponse20055> {
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
     * @param channelUrl 
     * @param apiToken 
     * @param gcAcceptInvitationData 
     */
    public gcAcceptInvitation(channelUrl: string, apiToken?: string, gcAcceptInvitationData?: GcAcceptInvitationData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcAcceptInvitation(channelUrl, apiToken, gcAcceptInvitationData, _options);
        return result.toPromise();
    }

    /**
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param channelUrl 
     * @param apiToken 
     * @param gcBanUserData 
     */
    public gcBanUser(channelUrl: string, apiToken?: string, gcBanUserData?: GcBanUserData, _options?: Configuration): Promise<InlineResponse20033BannedList> {
        const result = this.api.gcBanUser(channelUrl, apiToken, gcBanUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param channelUrl 
     * @param operatorIds 
     * @param apiToken 
     * @param deleteAll 
     */
    public gcCancelTheRegistrationOfOperators(channelUrl: string, operatorIds: Array<string>, apiToken?: string, deleteAll?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.gcCancelTheRegistrationOfOperators(channelUrl, operatorIds, apiToken, deleteAll, _options);
        return result.toPromise();
    }

    /**
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * Check if member
     * @param channelUrl 
     * @param userId 
     * @param apiToken 
     */
    public gcCheckIfMemberById(channelUrl: string, userId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20037> {
        const result = this.api.gcCheckIfMemberById(channelUrl, userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * Create a channel
     * @param apiToken 
     * @param gcCreateChannelData 
     */
    public gcCreateChannel(apiToken?: string, gcCreateChannelData?: GcCreateChannelData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcCreateChannel(apiToken, gcCreateChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * Decline an invitation
     * @param channelUrl 
     * @param apiToken 
     * @param gcDeclineInvitationData 
     */
    public gcDeclineInvitation(channelUrl: string, apiToken?: string, gcDeclineInvitationData?: GcDeclineInvitationData, _options?: Configuration): Promise<void> {
        const result = this.api.gcDeclineInvitation(channelUrl, apiToken, gcDeclineInvitationData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param channelUrl 
     * @param apiToken 
     */
    public gcDeleteChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.gcDeleteChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcFreezeChannelData 
     */
    public gcFreezeChannel(channelUrl: string, apiToken?: string, gcFreezeChannelData?: GcFreezeChannelData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcFreezeChannel(channelUrl, apiToken, gcFreezeChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * Hide or archive a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcHideOrArchiveChannelData 
     */
    public gcHideOrArchiveChannel(channelUrl: string, apiToken?: string, gcHideOrArchiveChannelData?: GcHideOrArchiveChannelData, _options?: Configuration): Promise<void> {
        const result = this.api.gcHideOrArchiveChannel(channelUrl, apiToken, gcHideOrArchiveChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * Invite as members
     * @param channelUrl 
     * @param apiToken 
     * @param gcInviteAsMembersData 
     */
    public gcInviteAsMembers(channelUrl: string, apiToken?: string, gcInviteAsMembersData?: GcInviteAsMembersData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcInviteAsMembers(channelUrl, apiToken, gcInviteAsMembersData, _options);
        return result.toPromise();
    }

    /**
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * Join a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcJoinChannelData 
     */
    public gcJoinChannel(channelUrl: string, apiToken?: string, gcJoinChannelData?: GcJoinChannelData, _options?: Configuration): Promise<void> {
        const result = this.api.gcJoinChannel(channelUrl, apiToken, gcJoinChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcLeaveChannelData 
     */
    public gcLeaveChannel(channelUrl: string, apiToken?: string, gcLeaveChannelData?: GcLeaveChannelData, _options?: Configuration): Promise<void> {
        const result = this.api.gcLeaveChannel(channelUrl, apiToken, gcLeaveChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public gcListBannedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20033> {
        const result = this.api.gcListBannedUsers(channelUrl, apiToken, token, limit, _options);
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
    public gcListChannels(apiToken?: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId?: string, _options?: Configuration): Promise<InlineResponse20017> {
        const result = this.api.gcListChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options);
        return result.toPromise();
    }

    /**
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * List members
     * @param channelUrl 
     * @param apiToken 
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
    public gcListMembers(channelUrl: string, apiToken?: string, token?: string, limit?: number, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, operatorFilter?: string, memberStateFilter?: string, mutedMemberFilter?: string, nicknameStartswith?: string, _options?: Configuration): Promise<InlineResponse20036> {
        const result = this.api.gcListMembers(channelUrl, apiToken, token, limit, showDeliveryReceipt, showReadReceipt, order, operatorFilter, memberStateFilter, mutedMemberFilter, nicknameStartswith, _options);
        return result.toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public gcListMutedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20031> {
        const result = this.api.gcListMutedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public gcListOperators(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20034> {
        const result = this.api.gcListOperators(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * Mute a user
     * @param channelUrl 
     * @param apiToken 
     * @param gcMuteUserData 
     */
    public gcMuteUser(channelUrl: string, apiToken?: string, gcMuteUserData?: GcMuteUserData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcMuteUser(channelUrl, apiToken, gcMuteUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * Register operators
     * @param channelUrl 
     * @param apiToken 
     * @param gcRegisterOperatorsData 
     */
    public gcRegisterOperators(channelUrl: string, apiToken?: string, gcRegisterOperatorsData?: GcRegisterOperatorsData, _options?: Configuration): Promise<InlineResponse20038> {
        const result = this.api.gcRegisterOperators(channelUrl, apiToken, gcRegisterOperatorsData, _options);
        return result.toPromise();
    }

    /**
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * Reset chat history
     * @param channelUrl 
     * @param apiToken 
     * @param gcResetChatHistoryData 
     */
    public gcResetChatHistory(channelUrl: string, apiToken?: string, gcResetChatHistoryData?: GcResetChatHistoryData, _options?: Configuration): Promise<void> {
        const result = this.api.gcResetChatHistory(channelUrl, apiToken, gcResetChatHistoryData, _options);
        return result.toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public gcUnbanUserById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.gcUnbanUserById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide or unarchive a channel
     * @param channelUrl 
     * @param userId 
     * @param apiToken 
     * @param shouldUnhideAll 
     */
    public gcUnhideOrUnarchiveChannel(channelUrl: string, userId: string, apiToken?: string, shouldUnhideAll?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.gcUnhideOrUnarchiveChannel(channelUrl, userId, apiToken, shouldUnhideAll, _options);
        return result.toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public gcUnmuteUserById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.gcUnmuteUserById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     * @param gcUpdateBanByIdData 
     */
    public gcUpdateBanById(channelUrl: string, bannedUserId: string, apiToken?: string, gcUpdateBanByIdData?: GcUpdateBanByIdData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.gcUpdateBanById(channelUrl, bannedUserId, apiToken, gcUpdateBanByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcUpdateChannelByUrlData 
     */
    public gcUpdateChannelByUrl(channelUrl: string, apiToken?: string, gcUpdateChannelByUrlData?: GcUpdateChannelByUrlData, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcUpdateChannelByUrl(channelUrl, apiToken, gcUpdateChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public gcViewBanById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.gcViewBanById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * View a channel
     * @param channelUrl 
     * @param apiToken 
     * @param showDeliveryReceipt 
     * @param showReadReceipt 
     * @param showMember 
     * @param readReceipt 
     * @param member 
     */
    public gcViewChannelByUrl(channelUrl: string, apiToken?: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMember?: boolean, readReceipt?: boolean, member?: boolean, _options?: Configuration): Promise<SendBirdGroupChannel> {
        const result = this.api.gcViewChannelByUrl(channelUrl, apiToken, showDeliveryReceipt, showReadReceipt, showMember, readReceipt, member, _options);
        return result.toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public gcViewMuteById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20035> {
        const result = this.api.gcViewMuteById(channelUrl, mutedUserId, apiToken, _options);
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
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param addExtraDataToMessageData 
     */
    public addExtraDataToMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addExtraDataToMessageData?: AddExtraDataToMessageData, _options?: Configuration): Promise<InlineResponse20054> {
        const result = this.api.addExtraDataToMessage(channelType, channelUrl, messageId, apiToken, addExtraDataToMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * Add a reaction to a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param addReactionToAMessageData 
     */
    public addReactionToAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, addReactionToAMessageData?: AddReactionToAMessageData, _options?: Configuration): Promise<InlineResponse20053> {
        const result = this.api.addReactionToAMessage(channelType, channelUrl, messageId, apiToken, addReactionToAMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * Delete a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     */
    public deleteMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMessageById(channelType, channelUrl, messageId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * Mark all messages as delivered
     * @param channelUrl 
     * @param apiToken 
     * @param gcMarkAllMessagesAsDeliveredData 
     */
    public gcMarkAllMessagesAsDelivered(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsDeliveredData?: GcMarkAllMessagesAsDeliveredData, _options?: Configuration): Promise<InlineResponse20050> {
        const result = this.api.gcMarkAllMessagesAsDelivered(channelUrl, apiToken, gcMarkAllMessagesAsDeliveredData, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param channelUrl 
     * @param apiToken 
     * @param gcMarkAllMessagesAsReadData 
     */
    public gcMarkAllMessagesAsRead(channelUrl: string, apiToken?: string, gcMarkAllMessagesAsReadData?: GcMarkAllMessagesAsReadData, _options?: Configuration): Promise<void> {
        const result = this.api.gcMarkAllMessagesAsRead(channelUrl, apiToken, gcMarkAllMessagesAsReadData, _options);
        return result.toPromise();
    }

    /**
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * View number of each member's unread messages
     * @param channelUrl 
     * @param apiToken 
     * @param userIds 
     */
    public gcViewNumberOfEachMembersUnreadMessages(channelUrl: string, apiToken?: string, userIds?: string, _options?: Configuration): Promise<InlineResponse20049> {
        const result = this.api.gcViewNumberOfEachMembersUnreadMessages(channelUrl, apiToken, userIds, _options);
        return result.toPromise();
    }

    /**
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * List messages
     * @param channelType 
     * @param channelUrl 
     * @param messageTs 
     * @param messageId 
     * @param apiToken 
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
    public listMessages(channelType: string, channelUrl: string, messageTs: number, messageId: number, apiToken?: string, prevLimit?: number, nextLimit?: number, include?: boolean, reverse?: boolean, senderId?: string, senderIds?: string, operatorFilter?: string, customTypes?: string, messageType?: string, includingRemoved?: boolean, includeReactions?: boolean, withSortedMetaArray?: boolean, showSubchannelMessagesOnly?: boolean, userId?: string, customType?: string, withMetaArray?: boolean, _options?: Configuration): Promise<InlineResponse20047> {
        const result = this.api.listMessages(channelType, channelUrl, messageTs, messageId, apiToken, prevLimit, nextLimit, include, reverse, senderId, senderIds, operatorFilter, customTypes, messageType, includingRemoved, includeReactions, withSortedMetaArray, showSubchannelMessagesOnly, userId, customType, withMetaArray, _options);
        return result.toPromise();
    }

    /**
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * List reactions of a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param listUsers 
     */
    public listReactionsOfMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, listUsers?: boolean, _options?: Configuration): Promise<InlineResponse20052> {
        const result = this.api.listReactionsOfMessage(channelType, channelUrl, messageId, apiToken, listUsers, _options);
        return result.toPromise();
    }

    /**
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * Remove extra data from a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param keys 
     */
    public removeExtraDataFromMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, keys?: Array<string>, _options?: Configuration): Promise<void> {
        const result = this.api.removeExtraDataFromMessage(channelType, channelUrl, messageId, apiToken, keys, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * Remove a reaction from a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param userId 
     * @param reaction 
     */
    public removeReactionFromAMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, userId?: string, reaction?: string, _options?: Configuration): Promise<InlineResponse20053> {
        const result = this.api.removeReactionFromAMessage(channelType, channelUrl, messageId, apiToken, userId, reaction, _options);
        return result.toPromise();
    }

    /**
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * Send a message
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param sendMessageData 
     */
    public sendMessage(channelType: string, channelUrl: string, apiToken?: string, sendMessageData?: SendMessageData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.sendMessage(channelType, channelUrl, apiToken, sendMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * Translate a message into other languages
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param body 
     */
    public translateMessageIntoOtherLanguages(channelType: string, channelUrl: string, messageId: string, apiToken?: string, body?: any, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.translateMessageIntoOtherLanguages(channelType, channelUrl, messageId, apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * Update extra data in a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param updateExtraDataInMessageData 
     */
    public updateExtraDataInMessage(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateExtraDataInMessageData?: UpdateExtraDataInMessageData, _options?: Configuration): Promise<InlineResponse20054> {
        const result = this.api.updateExtraDataInMessage(channelType, channelUrl, messageId, apiToken, updateExtraDataInMessageData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * Update a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param updateMessageByIdData 
     */
    public updateMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, updateMessageByIdData?: UpdateMessageByIdData, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.updateMessageById(channelType, channelUrl, messageId, apiToken, updateMessageByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * View a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param withSortedMetaArray 
     * @param withMetaArray 
     */
    public viewMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, withSortedMetaArray?: boolean, withMetaArray?: boolean, _options?: Configuration): Promise<SendBirdMessageResponse> {
        const result = this.api.viewMessageById(channelType, channelUrl, messageId, apiToken, withSortedMetaArray, withMetaArray, _options);
        return result.toPromise();
    }

    /**
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * View total number of messages in a channel
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     */
    public viewTotalNumberOfMessagesInChannel(channelType: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20048> {
        const result = this.api.viewTotalNumberOfMessagesInChannel(channelType, channelUrl, apiToken, _options);
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
     * @param targetChannelUrl 
     * @param apiToken 
     * @param body 
     */
    public migrateMessagesByUrl(targetChannelUrl: string, apiToken?: string, body?: any, _options?: Configuration): Promise<void> {
        const result = this.api.migrateMessagesByUrl(targetChannelUrl, apiToken, body, _options);
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
     * @param channelUrl 
     * @param apiToken 
     * @param ocBanUserData 
     */
    public ocBanUser(channelUrl: string, apiToken?: string, ocBanUserData?: OcBanUserData, _options?: Configuration): Promise<InlineResponse20033BannedList> {
        const result = this.api.ocBanUser(channelUrl, apiToken, ocBanUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param channelUrl 
     * @param operatorIds 
     * @param apiToken 
     * @param deleteAll 
     */
    public ocCancelTheRegistrationOfOperators(channelUrl: string, operatorIds: Array<string>, apiToken?: string, deleteAll?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, apiToken, deleteAll, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * Create a channel
     * @param apiToken 
     * @param ocCreateChannelData 
     */
    public ocCreateChannel(apiToken?: string, ocCreateChannelData?: OcCreateChannelData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocCreateChannel(apiToken, ocCreateChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param channelUrl 
     * @param apiToken 
     */
    public ocDeleteChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.ocDeleteChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param channelUrl 
     * @param apiToken 
     * @param ocFreezeChannelData 
     */
    public ocFreezeChannel(channelUrl: string, apiToken?: string, ocFreezeChannelData?: OcFreezeChannelData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocFreezeChannel(channelUrl, apiToken, ocFreezeChannelData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public ocListBannedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20033> {
        const result = this.api.ocListBannedUsers(channelUrl, apiToken, token, limit, _options);
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
    public ocListChannels(apiToken?: string, token?: string, limit?: number, customTypes?: string, nameContains?: string, urlContains?: string, showFrozen?: boolean, showMetadata?: boolean, customType?: string, _options?: Configuration): Promise<InlineResponse20030> {
        const result = this.api.ocListChannels(apiToken, token, limit, customTypes, nameContains, urlContains, showFrozen, showMetadata, customType, _options);
        return result.toPromise();
    }

    /**
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public ocListMutedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20031> {
        const result = this.api.ocListMutedUsers(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public ocListOperators(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20034> {
        const result = this.api.ocListOperators(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * List participants
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public ocListParticipants(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20032> {
        const result = this.api.ocListParticipants(channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * Mute a user
     * @param channelUrl 
     * @param apiToken 
     * @param ocMuteUserData 
     */
    public ocMuteUser(channelUrl: string, apiToken?: string, ocMuteUserData?: OcMuteUserData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocMuteUser(channelUrl, apiToken, ocMuteUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * Register operators
     * @param channelUrl 
     * @param apiToken 
     * @param ocRegisterOperatorsData 
     */
    public ocRegisterOperators(channelUrl: string, apiToken?: string, ocRegisterOperatorsData?: OcRegisterOperatorsData, _options?: Configuration): Promise<void> {
        const result = this.api.ocRegisterOperators(channelUrl, apiToken, ocRegisterOperatorsData, _options);
        return result.toPromise();
    }

    /**
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public ocUnbanUserById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.ocUnbanUserById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public ocUnmuteUserById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.ocUnmuteUserById(channelUrl, mutedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     * @param ocUpdateBanByIdData 
     */
    public ocUpdateBanById(channelUrl: string, bannedUserId: string, apiToken?: string, ocUpdateBanByIdData?: OcUpdateBanByIdData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.ocUpdateBanById(channelUrl, bannedUserId, apiToken, ocUpdateBanByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param channelUrl 
     * @param apiToken 
     * @param ocUpdateChannelByUrlData 
     */
    public ocUpdateChannelByUrl(channelUrl: string, apiToken?: string, ocUpdateChannelByUrlData?: OcUpdateChannelByUrlData, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocUpdateChannelByUrl(channelUrl, apiToken, ocUpdateChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public ocViewBanById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.ocViewBanById(channelUrl, bannedUserId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * View a channel
     * @param channelUrl 
     * @param apiToken 
     */
    public ocViewChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<SendBirdOpenChannel> {
        const result = this.api.ocViewChannelByUrl(channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public ocViewMuteById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20035> {
        const result = this.api.ocViewMuteById(channelUrl, mutedUserId, apiToken, _options);
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
    public listReports(apiToken?: string, token?: string, limit?: number, startTs?: number, endTs?: number, _options?: Configuration): Promise<InlineResponse20070> {
        const result = this.api.listReports(apiToken, token, limit, startTs, endTs, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * List reports on a channel
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listReportsOnChannelByUrl(channelType: string, channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20071> {
        const result = this.api.listReportsOnChannelByUrl(channelType, channelUrl, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * List reports on a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listReportsOnMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20071> {
        const result = this.api.listReportsOnMessageById(channelType, channelUrl, messageId, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * List reports on a user
     * @param offendingUserId 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listReportsOnUserById(offendingUserId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20071> {
        const result = this.api.listReportsOnUserById(offendingUserId, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * Report a channel
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param reportChannelByUrlData 
     */
    public reportChannelByUrl(channelType: string, channelUrl: string, apiToken?: string, reportChannelByUrlData?: ReportChannelByUrlData, _options?: Configuration): Promise<InlineResponse20071ReportLogs> {
        const result = this.api.reportChannelByUrl(channelType, channelUrl, apiToken, reportChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * Report a message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     * @param reportMessageByIdData 
     */
    public reportMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, reportMessageByIdData?: ReportMessageByIdData, _options?: Configuration): Promise<InlineResponse20071ReportLogs> {
        const result = this.api.reportMessageById(channelType, channelUrl, messageId, apiToken, reportMessageByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * Report a user
     * @param offendingUserId 
     * @param apiToken 
     * @param reportUserByIdData 
     */
    public reportUserById(offendingUserId: string, apiToken?: string, reportUserByIdData?: ReportUserByIdData, _options?: Configuration): Promise<InlineResponse20071ReportLogs> {
        const result = this.api.reportUserById(offendingUserId, apiToken, reportUserByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * View a moderated message
     * @param channelType 
     * @param channelUrl 
     * @param messageId 
     * @param apiToken 
     */
    public viewModeratedMessageById(channelType: string, channelUrl: string, messageId: string, apiToken?: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewModeratedMessageById(channelType, channelUrl, messageId, apiToken, _options);
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
     * @param userId 
     * @param tokenType 
     * @param apiToken 
     * @param addRegistrationOrDeviceTokenData 
     */
    public addRegistrationOrDeviceToken(userId: string, tokenType: string, apiToken?: string, addRegistrationOrDeviceTokenData?: AddRegistrationOrDeviceTokenData, _options?: Configuration): Promise<InlineResponse20025> {
        const result = this.api.addRegistrationOrDeviceToken(userId, tokenType, apiToken, addRegistrationOrDeviceTokenData, _options);
        return result.toPromise();
    }

    /**
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * Ban from channels with custom channel types
     * @param userId 
     * @param apiToken 
     * @param banFromChannelsWithCustomChannelTypesData 
     */
    public banFromChannelsWithCustomChannelTypes(userId: string, apiToken?: string, banFromChannelsWithCustomChannelTypesData?: BanFromChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<void> {
        const result = this.api.banFromChannelsWithCustomChannelTypes(userId, apiToken, banFromChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * Block a user
     * @param userId 
     * @param apiToken 
     * @param blockUserData 
     */
    public blockUser(userId: string, apiToken?: string, blockUserData?: BlockUserData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.blockUser(userId, apiToken, blockUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * Choose a push notification content template
     * @param userId 
     * @param apiToken 
     * @param body 
     */
    public choosePushNotificationContentTemplate(userId: string, apiToken?: string, body?: any, _options?: Configuration): Promise<InlineResponse20029> {
        const result = this.api.choosePushNotificationContentTemplate(userId, apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * Create a user
     * @param apiToken 
     * @param createUserData 
     */
    public createUser(apiToken?: string, createUserData?: CreateUserData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.createUser(apiToken, createUserData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * Delete a user
     * @param userId 
     * @param apiToken 
     */
    public deleteUserById(userId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserById(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * Leave my group channels
     * @param userId 
     * @param apiToken 
     * @param leaveMyGroupChannelsData 
     */
    public leaveMyGroupChannels(userId: string, apiToken?: string, leaveMyGroupChannelsData?: LeaveMyGroupChannelsData, _options?: Configuration): Promise<void> {
        const result = this.api.leaveMyGroupChannels(userId, apiToken, leaveMyGroupChannelsData, _options);
        return result.toPromise();
    }

    /**
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List banned channels
     * @param userId 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listBannedChannels(userId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20022> {
        const result = this.api.listBannedChannels(userId, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List blocked users
     * @param userId 
     * @param apiToken 
     * @param token 
     * @param limit 
     * @param userIds 
     * @param metadatakey 
     * @param metadatavaluesIn 
     */
    public listBlockedUsers(userId: string, apiToken?: string, token?: string, limit?: number, userIds?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<InlineResponse20016> {
        const result = this.api.listBlockedUsers(userId, apiToken, token, limit, userIds, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    }

    /**
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List muted channels
     * @param userId 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public listMutedChannels(userId: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<InlineResponse20023> {
        const result = this.api.listMutedChannels(userId, apiToken, token, limit, _options);
        return result.toPromise();
    }

    /**
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * List my group channels
     * @param userId 
     * @param apiToken 
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
    public listMyGroupChannels(userId: string, apiToken?: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, hiddenMode?: string, memberStateFilter?: string, unreadFilter?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showFrozen?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, searchQuery?: string, searchFields?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, customType?: string, _options?: Configuration): Promise<InlineResponse20017> {
        const result = this.api.listMyGroupChannels(userId, apiToken, token, limit, distinctMode, publicMode, superMode, hiddenMode, memberStateFilter, unreadFilter, createdAfter, createdBefore, showEmpty, showFrozen, showMember, showDeliveryReceipt, showReadReceipt, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, searchQuery, searchFields, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, customType, _options);
        return result.toPromise();
    }

    /**
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * List registration or device tokens
     * @param userId 
     * @param tokenType 
     * @param apiToken 
     */
    public listRegistrationOrDeviceTokens(userId: string, tokenType: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20024> {
        const result = this.api.listRegistrationOrDeviceTokens(userId, tokenType, apiToken, _options);
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
    public listUsers(apiToken?: string, token?: string, limit?: number, activeMode?: string, showBot?: boolean, userIds?: string, nickname?: string, nicknameStartswith?: string, metadatakey?: string, metadatavaluesIn?: string, _options?: Configuration): Promise<InlineResponse20016> {
        const result = this.api.listUsers(apiToken, token, limit, activeMode, showBot, userIds, nickname, nicknameStartswith, metadatakey, metadatavaluesIn, _options);
        return result.toPromise();
    }

    /**
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * Mark all messages as read
     * @param userId 
     * @param apiToken 
     * @param markAllMessagesAsReadData 
     */
    public markAllMessagesAsRead(userId: string, apiToken?: string, markAllMessagesAsReadData?: MarkAllMessagesAsReadData, _options?: Configuration): Promise<void> {
        const result = this.api.markAllMessagesAsRead(userId, apiToken, markAllMessagesAsReadData, _options);
        return result.toPromise();
    }

    /**
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * Mute in channels with custom channel types
     * @param userId 
     * @param apiToken 
     * @param muteInChannelsWithCustomChannelTypesData 
     */
    public muteInChannelsWithCustomChannelTypes(userId: string, apiToken?: string, muteInChannelsWithCustomChannelTypesData?: MuteInChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<void> {
        const result = this.api.muteInChannelsWithCustomChannelTypes(userId, apiToken, muteInChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * Register as an operator to channels with custom channel types
     * @param userId 
     * @param apiToken 
     * @param registerAsOperatorToChannelsWithCustomChannelTypesData 
     */
    public registerAsOperatorToChannelsWithCustomChannelTypes(userId: string, apiToken?: string, registerAsOperatorToChannelsWithCustomChannelTypesData?: RegisterAsOperatorToChannelsWithCustomChannelTypesData, _options?: Configuration): Promise<void> {
        const result = this.api.registerAsOperatorToChannelsWithCustomChannelTypes(userId, apiToken, registerAsOperatorToChannelsWithCustomChannelTypesData, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering all device tokens
     * @param userId 
     * @param apiToken 
     */
    public removeRegistrationOrDeviceToken(userId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20026> {
        const result = this.api.removeRegistrationOrDeviceToken(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * Remove a registration or device token - When unregistering a specific token
     * @param userId 
     * @param tokenType 
     * @param token 
     * @param apiToken 
     */
    public removeRegistrationOrDeviceTokenByToken(userId: string, tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20026> {
        const result = this.api.removeRegistrationOrDeviceTokenByToken(userId, tokenType, token, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * Remove a registration or device token from an owner
     * @param tokenType 
     * @param token 
     * @param apiToken 
     */
    public removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20027> {
        const result = this.api.removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType, token, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * Reset push preferences
     * @param userId 
     * @param apiToken 
     */
    public resetPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * Unblock a user
     * @param userId 
     * @param targetId 
     * @param apiToken 
     */
    public unblockUserById(userId: string, targetId: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.unblockUserById(userId, targetId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * Update channel invitation preference
     * @param userId 
     * @param apiToken 
     * @param updateChannelInvitationPreferenceData 
     */
    public updateChannelInvitationPreference(userId: string, apiToken?: string, updateChannelInvitationPreferenceData?: UpdateChannelInvitationPreferenceData, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.updateChannelInvitationPreference(userId, apiToken, updateChannelInvitationPreferenceData, _options);
        return result.toPromise();
    }

    /**
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * Update count preference of a channel
     * @param userId 
     * @param channelUrl 
     * @param apiToken 
     * @param updateCountPreferenceOfChannelByUrlData 
     */
    public updateCountPreferenceOfChannelByUrl(userId: string, channelUrl: string, apiToken?: string, updateCountPreferenceOfChannelByUrlData?: UpdateCountPreferenceOfChannelByUrlData, _options?: Configuration): Promise<InlineResponse20021> {
        const result = this.api.updateCountPreferenceOfChannelByUrl(userId, channelUrl, apiToken, updateCountPreferenceOfChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * Update push preferences
     * @param userId 
     * @param apiToken 
     * @param updatePushPreferencesData 
     */
    public updatePushPreferences(userId: string, apiToken?: string, updatePushPreferencesData?: UpdatePushPreferencesData, _options?: Configuration): Promise<InlineResponse20028> {
        const result = this.api.updatePushPreferences(userId, apiToken, updatePushPreferencesData, _options);
        return result.toPromise();
    }

    /**
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * Update push preferences for a channel
     * @param userId 
     * @param channelUrl 
     * @param apiToken 
     * @param updatePushPreferencesForChannelByUrlData 
     */
    public updatePushPreferencesForChannelByUrl(userId: string, channelUrl: string, apiToken?: string, updatePushPreferencesForChannelByUrlData?: UpdatePushPreferencesForChannelByUrlData, _options?: Configuration): Promise<InlineResponse20028> {
        const result = this.api.updatePushPreferencesForChannelByUrl(userId, channelUrl, apiToken, updatePushPreferencesForChannelByUrlData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * Update a user
     * @param userId 
     * @param apiToken 
     * @param updateUserByIdData 
     */
    public updateUserById(userId: string, apiToken?: string, updateUserByIdData?: UpdateUserByIdData, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.updateUserById(userId, apiToken, updateUserByIdData, _options);
        return result.toPromise();
    }

    /**
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * View channel invitation preference
     * @param userId 
     * @param apiToken 
     */
    public viewChannelInvitationPreference(userId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.viewChannelInvitationPreference(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * View count preference of a channel
     * @param userId 
     * @param channelUrl 
     * @param apiToken 
     */
    public viewCountPreferenceOfChannelByUrl(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20021> {
        const result = this.api.viewCountPreferenceOfChannelByUrl(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of channels by join status
     * @param userId 
     * @param apiToken 
     * @param state 
     */
    public viewNumberOfChannelsByJoinStatus(userId: string, apiToken?: string, state?: string, _options?: Configuration): Promise<InlineResponse20020> {
        const result = this.api.viewNumberOfChannelsByJoinStatus(userId, apiToken, state, _options);
        return result.toPromise();
    }

    /**
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * View number of channels with unread messages
     * @param userId 
     * @param apiToken 
     * @param customTypes 
     * @param superMode 
     */
    public viewNumberOfChannelsWithUnreadMessages(userId: string, apiToken?: string, customTypes?: Array<string>, superMode?: string, _options?: Configuration): Promise<InlineResponse20018> {
        const result = this.api.viewNumberOfChannelsWithUnreadMessages(userId, apiToken, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * View number of unread items
     * @param userId 
     * @param apiToken 
     * @param customType 
     * @param itemKeys 
     */
    public viewNumberOfUnreadItems(userId: string, apiToken?: string, customType?: string, itemKeys?: string, _options?: Configuration): Promise<InlineResponse20019> {
        const result = this.api.viewNumberOfUnreadItems(userId, apiToken, customType, itemKeys, _options);
        return result.toPromise();
    }

    /**
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * View number of unread messages
     * @param userId 
     * @param apiToken 
     * @param customTypes 
     * @param superMode 
     */
    public viewNumberOfUnreadMessages(userId: string, apiToken?: string, customTypes?: string, superMode?: string, _options?: Configuration): Promise<InlineResponse20018> {
        const result = this.api.viewNumberOfUnreadMessages(userId, apiToken, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * View push preferences
     * @param userId 
     * @param apiToken 
     */
    public viewPushPreferences(userId: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20028> {
        const result = this.api.viewPushPreferences(userId, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * View push preferences for a channel
     * @param userId 
     * @param channelUrl 
     * @param apiToken 
     */
    public viewPushPreferencesForChannelByUrl(userId: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20028> {
        const result = this.api.viewPushPreferencesForChannelByUrl(userId, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * View a user
     * @param userId 
     * @param apiToken 
     * @param includeUnreadCount 
     * @param customTypes 
     * @param superMode 
     */
    public viewUserById(userId: string, apiToken?: string, includeUnreadCount?: boolean, customTypes?: string, superMode?: string, _options?: Configuration): Promise<SendBirdUser> {
        const result = this.api.viewUserById(userId, apiToken, includeUnreadCount, customTypes, superMode, _options);
        return result.toPromise();
    }

    /**
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * View who owns a registration or device token
     * @param tokenType 
     * @param token 
     * @param apiToken 
     */
    public viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType: string, token: string, apiToken?: string, _options?: Configuration): Promise<InlineResponse20027> {
        const result = this.api.viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType, token, apiToken, _options);
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
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param createChannelMetacounterData 
     */
    public createChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, createChannelMetacounterData?: CreateChannelMetacounterData, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.createChannelMetacounter(channelType, channelUrl, apiToken, createChannelMetacounterData, _options);
        return result.toPromise();
    }

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * Create a channel metadata
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param createChannelMetadataData 
     */
    public createChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, createChannelMetadataData?: CreateChannelMetadataData, _options?: Configuration): Promise<InlineResponse20061> {
        const result = this.api.createChannelMetadata(channelType, channelUrl, apiToken, createChannelMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * Create a user metadata
     * @param userId 
     * @param apiToken 
     * @param createUserMetadataData 
     */
    public createUserMetadata(userId: string, apiToken?: string, createUserMetadataData?: CreateUserMetadataData, _options?: Configuration): Promise<InlineResponse20047UserMetadata> {
        const result = this.api.createUserMetadata(userId, apiToken, createUserMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     */
    public deleteChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetacounter(channelType, channelUrl, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     */
    public deleteChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetacounterByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param key 
     */
    public deleteChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, key?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetadata(channelType, channelUrl, apiToken, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     */
    public deleteChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChannelMetadataByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting all items of a user metadata
     * @param userId 
     * @param apiToken 
     * @param key 
     */
    public deleteUserMetadata(userId: string, apiToken?: string, key?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserMetadata(userId, apiToken, key, _options);
        return result.toPromise();
    }

    /**
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * @param userId 
     * @param key 
     * @param apiToken 
     */
    public deleteUserMetadataByKey(userId: string, key: string, apiToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteUserMetadataByKey(userId, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param updateChannelMetacounterData 
     */
    public updateChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, updateChannelMetacounterData?: UpdateChannelMetacounterData, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.updateChannelMetacounter(channelType, channelUrl, apiToken, updateChannelMetacounterData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     * @param body 
     */
    public updateChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetacounterByKey(channelType, channelUrl, key, apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param updateChannelMetadataData 
     */
    public updateChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, updateChannelMetadataData?: UpdateChannelMetadataData, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetadata(channelType, channelUrl, apiToken, updateChannelMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     * @param body 
     */
    public updateChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateChannelMetadataByKey(channelType, channelUrl, key, apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * @param userId 
     * @param apiToken 
     * @param updateUserMetadataData 
     */
    public updateUserMetadata(userId: string, apiToken?: string, updateUserMetadataData?: UpdateUserMetadataData, _options?: Configuration): Promise<InlineResponse20060> {
        const result = this.api.updateUserMetadata(userId, apiToken, updateUserMetadataData, _options);
        return result.toPromise();
    }

    /**
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * @param userId 
     * @param key 
     * @param apiToken 
     * @param body 
     */
    public updateUserMetadataByKey(userId: string, key: string, apiToken?: string, body?: any, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.updateUserMetadataByKey(userId, key, apiToken, body, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param key 
     * @param keys 
     */
    public viewChannelMetacounter(channelType: string, channelUrl: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.viewChannelMetacounter(channelType, channelUrl, apiToken, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     */
    public viewChannelMetacounterByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<{ [key: string]: SendBirdAdditionalProperties; }> {
        const result = this.api.viewChannelMetacounterByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param channelType 
     * @param channelUrl 
     * @param apiToken 
     * @param key 
     * @param keys 
     */
    public viewChannelMetadata(channelType: string, channelUrl: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewChannelMetadata(channelType, channelUrl, apiToken, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * @param channelType 
     * @param channelUrl 
     * @param key 
     * @param apiToken 
     */
    public viewChannelMetadataByKey(channelType: string, channelUrl: string, key: string, apiToken?: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewChannelMetadataByKey(channelType, channelUrl, key, apiToken, _options);
        return result.toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving all items of a user metadata
     * @param userId 
     * @param apiToken 
     * @param key 
     * @param keys 
     */
    public viewUserMetadata(userId: string, apiToken?: string, key?: string, keys?: Array<string>, _options?: Configuration): Promise<InlineResponse20047UserMetadata> {
        const result = this.api.viewUserMetadata(userId, apiToken, key, keys, _options);
        return result.toPromise();
    }

    /**
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * @param userId 
     * @param key 
     * @param apiToken 
     */
    public viewUserMetadataByKey(userId: string, key: string, apiToken?: string, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.viewUserMetadataByKey(userId, key, apiToken, _options);
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
    public chooseWhichEventsToSubscribeTo(apiToken?: string, chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData, _options?: Configuration): Promise<InlineResponse20067> {
        const result = this.api.chooseWhichEventsToSubscribeTo(apiToken, chooseWhichEventsToSubscribeToData, _options);
        return result.toPromise();
    }

    /**
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * Retrieve a list of subscribed events
     * @param apiToken 
     * @param displayAllWebhookCategories 
     */
    public retrieveListOfSubscribedEvents(apiToken?: string, displayAllWebhookCategories?: boolean, _options?: Configuration): Promise<InlineResponse20066> {
        const result = this.api.retrieveListOfSubscribedEvents(apiToken, displayAllWebhookCategories, _options);
        return result.toPromise();
    }


}



