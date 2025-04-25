import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AcceptAnInvitationRequest } from '../models/AcceptAnInvitationRequest';
import { CheckIfMemberResponse } from '../models/CheckIfMemberResponse';
import { CreateAGroupChannelRequest } from '../models/CreateAGroupChannelRequest';
import { FreezeAGroupChannelRequest } from '../models/FreezeAGroupChannelRequest';
import { GetAGroupChannelResponse } from '../models/GetAGroupChannelResponse';
import { GetAGroupChannelResponseAllOf } from '../models/GetAGroupChannelResponseAllOf';
import { GroupChannelListMembersResponse } from '../models/GroupChannelListMembersResponse';
import { GroupChatListChannelsResponse } from '../models/GroupChatListChannelsResponse';
import { HideAChannelRequest } from '../models/HideAChannelRequest';
import { InviteAsMembersRequest } from '../models/InviteAsMembersRequest';
import { InviteAsMembersResponse } from '../models/InviteAsMembersResponse';
import { InviteAsMembersResponseAllOf } from '../models/InviteAsMembersResponseAllOf';
import { JoinAChannelRequest } from '../models/JoinAChannelRequest';
import { LeaveAChannelRequest } from '../models/LeaveAChannelRequest';
import { ListOperatorsResponse } from '../models/ListOperatorsResponse';
import { MarkAllMessagesAsReadRequest } from '../models/MarkAllMessagesAsReadRequest';
import { RegisterOperatorsToAGroupChannelRequest } from '../models/RegisterOperatorsToAGroupChannelRequest';
import { ResetChatHistoryRequest } from '../models/ResetChatHistoryRequest';
import { ResetChatHistoryResponse } from '../models/ResetChatHistoryResponse';
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
import { UpdateAGroupChannelRequest } from '../models/UpdateAGroupChannelRequest';
import { ViewNumberOfDailyActiveUsersResponse } from '../models/ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from '../models/ViewNumberOfMonthlyActiveUsersResponse';

import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor} from "../apis/GroupChannelApi";
export class ObservableGroupChannelApi {
    private requestFactory: GroupChannelApiRequestFactory;
    private responseProcessor: GroupChannelApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupChannelApiRequestFactory,
        responseProcessor?: GroupChannelApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupChannelApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupChannelApiResponseProcessor();
    }

    /**
     * ## Accept an invitation  Accepts an invitation from a group channel for a user to join. A single user may join up to 2,000 group channels, and any invitation to a user who is at capacity will be automatically canceled. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: This action is only available when the `auto_accept` property of an application is set to **false**. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) action, or the [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference) action.      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/accept-an-invitation-channel#1-accept-an-invitation)
     * Accept an invitation
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param acceptAnInvitationRequest 
     */
    public acceptAnInvitation(channelUrl: string, apiToken?: string, acceptAnInvitationRequest?: AcceptAnInvitationRequest, _options?: Configuration): Observable<SendbirdGroupChannelDetail> {
        const requestContextPromise = this.requestFactory.acceptAnInvitation(channelUrl, apiToken, acceptAnInvitationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.acceptAnInvitation(rsp)));
            }));
    }

    /**
     * ## Unregister operators from a group channel  You can unregister operators in a group channel but keep them in the channel as members using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-a-group-channel#1-unregister-operators-from-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param channelUrl (Required) 
     * @param operatorIds Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids&#x3D;urlencoded_id_1,urlencoded_id_2.
     * @param deleteAll 
     * @param apiToken 
     */
    public cancelTheRegistrationOfOperators(channelUrl: string, operatorIds: string, deleteAll?: boolean, apiToken?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.cancelTheRegistrationOfOperators(channelUrl, operatorIds, deleteAll, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelTheRegistrationOfOperators(rsp)));
            }));
    }

    /**
     * ## Check if user is a member  Checks if a user is a member of a group channel.  > **Note**: See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.      [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-users/check-if-user-is-a-member#1-check-if-user-is-a-member)
     * Check if member
     * @param channelUrl (Required) 
     * @param userId (Required) 
     * @param apiToken 
     */
    public checkIfMember(channelUrl: string, userId: string, apiToken?: string, _options?: Configuration): Observable<CheckIfMemberResponse> {
        const requestContextPromise = this.requestFactory.checkIfMember(channelUrl, userId, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkIfMember(rsp)));
            }));
    }

    /**
     * ## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel
     * Create a group channel
     * @param apiToken 
     * @param createAGroupChannelRequest 
     */
    public createAGroupChannel(apiToken?: string, createAGroupChannelRequest?: CreateAGroupChannelRequest, _options?: Configuration): Observable<SendbirdGroupChannelDetail> {
        const requestContextPromise = this.requestFactory.createAGroupChannel(apiToken, createAGroupChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAGroupChannel(rsp)));
            }));
    }

    /**
     * ## Delete a group channel  You can delete a group channel or a Supergroup channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-a-group-channel#1-delete-a-group-channel)
     * Delete a group channel
     * @param channelUrl 
     * @param apiToken 
     */
    public deleteAGroupChannel(channelUrl: string, apiToken?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteAGroupChannel(channelUrl, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAGroupChannel(rsp)));
            }));
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
    public getAGroupChannel(channelUrl: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMember?: boolean, memberActiveMode?: 'all' | 'activated' | 'deactivated', userId?: string, apiToken?: string, _options?: Configuration): Observable<GetAGroupChannelResponse> {
        const requestContextPromise = this.requestFactory.getAGroupChannel(channelUrl, showDeliveryReceipt, showReadReceipt, showMember, memberActiveMode, userId, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAGroupChannel(rsp)));
            }));
    }

    /**
     * ## Hide a channel  This action allows you to hide a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) from a user's channel list. Hiding a channel gives users the ability to archive channels so that they can focus on channels that need the most attention.  With this API, you can allow users to hide a channel from themselves or from all channel members. You can also determine whether to have the channel remain hidden when a new message is sent to the channel. Note that only group channels can be hidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/hide-a-channel#1-hide-a-channel)
     * Hide a channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param hideAChannelRequest 
     */
    public hideAChannel(channelUrl: string, apiToken?: string, hideAChannelRequest?: HideAChannelRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.hideAChannel(channelUrl, apiToken, hideAChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.hideAChannel(rsp)));
            }));
    }

    /**
     * ## Invite as members  Invites one or more users as members to a group channel. Users can join a group channel immediately after receiving an invitation, without having to accept it. To give users an option to accept or decline an invitation, see [update default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) or [update channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference). See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  > **Note**: By default, [blocked users](https://sendbird.com/docs/chat/platform-api/v3/moderation/blocking-users/block-users) are included when sending invitations. If you wish to exclude blocked users, [contact our sales team](https://get.sendbird.com/talk-to-sales.html).      [https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel#1-invite-as-members)
     * Invite as members
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param inviteAsMembersRequest 
     */
    public inviteAsMembers(channelUrl: string, apiToken?: string, inviteAsMembersRequest?: InviteAsMembersRequest, _options?: Configuration): Observable<InviteAsMembersResponse> {
        const requestContextPromise = this.requestFactory.inviteAsMembers(channelUrl, apiToken, inviteAsMembersRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.inviteAsMembers(rsp)));
            }));
    }

    /**
     * ## Join a channel  This API allows a user to join a [public](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-group-channel-types) group channel. Users can only join public group channels where the `is_public` property is set to `true` using this API. A single user can join up to 2,000 group channels, and a user who reaches the capacity can’t join a new channel. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/join-a-channel#1-join-a-channel)
     * Join a channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param joinAChannelRequest 
     */
    public joinAChannel(channelUrl: string, apiToken?: string, joinAChannelRequest?: JoinAChannelRequest, _options?: Configuration): Observable<SendbirdGroupChannelDetail> {
        const requestContextPromise = this.requestFactory.joinAChannel(channelUrl, apiToken, joinAChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.joinAChannel(rsp)));
            }));
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param channelUrl 
     * @param apiToken 
     * @param leaveAChannelRequest 
     */
    public leaveAChannel(channelUrl: string, apiToken?: string, leaveAChannelRequest?: LeaveAChannelRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.leaveAChannel(channelUrl, apiToken, leaveAChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAChannel(rsp)));
            }));
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
     * @param customType (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded.
     * @param readReceipt (Deprecated) Superseded by show_read_receipt.
     * @param member (Deprecated) Superseded by show_member.
     * @param isDistinct (Deprecated) Superseded by distinct_mode.
     * @param membersIn (Deprecated) Superseded by members_exactly_in.
     * @param userId (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead.
     */
    public listChannels(apiToken: string, token?: string, limit?: number, distinctMode?: 'all' | 'distinct' | 'nondistinct', publicMode?: 'all' | 'private' | 'public', superMode?: 'all' | 'super' | 'nonsuper', createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical', metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId?: string, _options?: Configuration): Observable<GroupChatListChannelsResponse> {
        const requestContextPromise = this.requestFactory.listChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listChannels(rsp)));
            }));
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
    public listMembers(channelUrl: string, token?: string, limit?: number, userId?: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMemberIsMuted?: boolean, order?: 'member_nickname_alphabetical' | 'operator_then_member_alphabetical', operatorFilter?: 'all' | 'operator' | 'nonoperator', memberStateFilter?: 'all' | 'invited_only' | 'joined_only' | 'invited_by_friend' | 'invited_by_non_friend', mutedMemberFilter?: 'all' | 'muted' | 'unmuted', memberActiveModeFilter?: 'activated' | 'deactivated', nicknameStartswith?: string, includePushPreference?: boolean, apiToken?: string, _options?: Configuration): Observable<GroupChannelListMembersResponse> {
        const requestContextPromise = this.requestFactory.listMembers(channelUrl, token, limit, userId, showDeliveryReceipt, showReadReceipt, showMemberIsMuted, order, operatorFilter, memberStateFilter, mutedMemberFilter, memberActiveModeFilter, nicknameStartswith, includePushPreference, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMembers(rsp)));
            }));
    }

    /**
     * ## List operators  You can retrieve a list of operators of a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-a-group-channel#1-list-operators-of-a-group-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param channelUrl (Required) 
     * @param token 
     * @param limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param apiToken 
     */
    public listOperators(channelUrl: string, token?: string, limit?: number, apiToken?: string, _options?: Configuration): Observable<ListOperatorsResponse> {
        const requestContextPromise = this.requestFactory.listOperators(channelUrl, token, limit, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOperators(rsp)));
            }));
    }

    /**
     * ## Register operators to a group channel  You can register one or more operators to a group channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-a-group-channel#1-register-operators-to-a-group-channel
     * Register operators to a group channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param registerOperatorsToAGroupChannelRequest 
     */
    public registerOperatorsToAGroupChannel(channelUrl: string, apiToken?: string, registerOperatorsToAGroupChannelRequest?: RegisterOperatorsToAGroupChannelRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.registerOperatorsToAGroupChannel(channelUrl, apiToken, registerOperatorsToAGroupChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerOperatorsToAGroupChannel(rsp)));
            }));
    }

    /**
     * ## Reset chat history  This action resets the properties related to a specific user's chat history in a [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel), clearing existing messages in a channel from only the specified user's end. Because this action doesn't delete messages from the Sendbird database, other members in the channel can still retrieve and see the messages.  This action clears the messages for the specified user by updating the `last_message` and `read_receipt` properties of the [group channel resource](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-list-of-properties-for-group-channels) in addition to other internally managed data such as the count of a user's unread messages.  Using the `reset_all` property, you can also reset the properties related to the chat history of all members in a group channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/reset-chat-history#1-reset-chat-history
     * Reset chat history
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param resetChatHistoryRequest 
     */
    public resetChatHistory(channelUrl: string, apiToken?: string, resetChatHistoryRequest?: ResetChatHistoryRequest, _options?: Configuration): Observable<ResetChatHistoryResponse> {
        const requestContextPromise = this.requestFactory.resetChatHistory(channelUrl, apiToken, resetChatHistoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetChatHistory(rsp)));
            }));
    }

    /**
     * ## Start typing indicators  You can start showing a typing indicator using this API. Seeing whether other users are typing can help a more interactive conversation environment by showing real-time engagement of other users.  If you're looking for an easy way to show typing indicators on your app, check out Sendbird UIKit for a ready-to-use UI feature that can be customized to fit your needs.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/start-typing-indicators#1-start-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Start typing indicators
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param startTypingIndicatorsRequest 
     */
    public startTypingIndicators(channelUrl: string, apiToken?: string, startTypingIndicatorsRequest?: StartTypingIndicatorsRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.startTypingIndicators(channelUrl, apiToken, startTypingIndicatorsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startTypingIndicators(rsp)));
            }));
    }

    /**
     * ## Stop typing indicators  You can stop showing a typing indicator using this API. To signal that a user is no longer typing, you can let the indicator disappear when the user sends a message or completely deletes the message text.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-typing-indicators/stop-typing-indicators#1-stop-typing-indicators  `channel_url`   Type: string   Description: Specifies the URL of the channel to set typing indicators.
     * Stop typing indicators
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param startTypingIndicatorsRequest 
     */
    public stopTypingIndicators(channelUrl: string, apiToken?: string, startTypingIndicatorsRequest?: StartTypingIndicatorsRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.stopTypingIndicators(channelUrl, apiToken, startTypingIndicatorsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopTypingIndicators(rsp)));
            }));
    }

    /**
     * ## Unhide a channel  This action lets a hidden [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) reappear on the channel list of a specific user or every member in the group channel. Hiding or unhiding a channel lets users organize their channel list based on those that require the most attention. Note that only group channels can be hidden or unhidden.  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/unhide-a-channel#1-unhide-a-channel)  `channel_url`   Type: string   Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide a channel
     * @param channelUrl (Required) 
     * @param userId (Required) 
     * @param shouldUnhideAll 
     * @param apiToken 
     */
    public unhideAChannel(channelUrl: string, userId?: string, shouldUnhideAll?: boolean, apiToken?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.unhideAChannel(channelUrl, userId, shouldUnhideAll, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unhideAChannel(rsp)));
            }));
    }

    /**
     * ## Update a group channel  You can update information about a group channel or a Supergroup channel using this API. You can't make any changes to the members of a channel with this API. To change members, see [invite as members](https://sendbird.com/docs/chat/platform-api/v3/channel/inviting-a-user/invite-as-members-channel) instead. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-a-group-channel#1-update-a-group-channel
     * Update a group channel
     * @param channelUrl 
     * @param apiToken 
     * @param updateAGroupChannelRequest 
     */
    public updateAGroupChannel(channelUrl: string, apiToken?: string, updateAGroupChannelRequest?: UpdateAGroupChannelRequest, _options?: Configuration): Observable<SendbirdGroupChannelDetail> {
        const requestContextPromise = this.requestFactory.updateAGroupChannel(channelUrl, apiToken, updateAGroupChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAGroupChannel(rsp)));
            }));
    }

}

import { ModerationApiRequestFactory, ModerationApiResponseProcessor} from "../apis/ModerationApi";
export class ObservableModerationApi {
    private requestFactory: ModerationApiRequestFactory;
    private responseProcessor: ModerationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ModerationApiRequestFactory,
        responseProcessor?: ModerationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ModerationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ModerationApiResponseProcessor();
    }

    /**
     * ## Freeze a group channel  Freezes or unfreezes a group channel.  > **Note**: To learn more about other available moderation tools, see [Moderation Overview](https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview#2-actions).      [https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel](https://sendbird.com/docs/chat/platform-api/v3/moderation/freezing-a-channel/freeze-a-group-channel#1-freeze-a-group-channel)
     * Freeze a group channel
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param freezeAGroupChannelRequest 
     */
    public freezeAGroupChannel(channelUrl: string, apiToken?: string, freezeAGroupChannelRequest?: FreezeAGroupChannelRequest, _options?: Configuration): Observable<SendbirdGroupChannelDetail> {
        const requestContextPromise = this.requestFactory.freezeAGroupChannel(channelUrl, apiToken, freezeAGroupChannelRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.freezeAGroupChannel(rsp)));
            }));
    }

}

import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor} from "../apis/StatisticsApi";
export class ObservableStatisticsApi {
    private requestFactory: StatisticsApiRequestFactory;
    private responseProcessor: StatisticsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatisticsApiRequestFactory,
        responseProcessor?: StatisticsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatisticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatisticsApiResponseProcessor();
    }

    /**
     * ## View number of daily active users  Retrieves the number of daily active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-daily-active-users#1-get-number-of-daily-active-users)
     * View number of daily active users
     * @param date YYYY-MM-DD
     * @param apiToken 
     */
    public viewNumberOfDailyActiveUsers(date?: string, apiToken?: string, _options?: Configuration): Observable<ViewNumberOfDailyActiveUsersResponse> {
        const requestContextPromise = this.requestFactory.viewNumberOfDailyActiveUsers(date, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.viewNumberOfDailyActiveUsers(rsp)));
            }));
    }

    /**
     * ## View number of monthly active users  Retrieves the number of monthly active users of an application.  > **Note**: This metric is scheduled to be calculated every 30 minutes, starting at 00:00 UTC, with the first update at 00:30 UTC.      [https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users](https://sendbird.com/docs/chat/platform-api/v3/statistics/daus-and-maus/get-number-of-monthly-active-users#1-get-number-of-monthly-active-users)
     * View number of monthly active users
     * @param date YYYY-MM-DD
     * @param apiToken 
     */
    public viewNumberOfMonthlyActiveUsers(date?: string, apiToken?: string, _options?: Configuration): Observable<ViewNumberOfMonthlyActiveUsersResponse> {
        const requestContextPromise = this.requestFactory.viewNumberOfMonthlyActiveUsers(date, apiToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.viewNumberOfMonthlyActiveUsers(rsp)));
            }));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * Mark all messages as read
     * @param userId (Required) 
     * @param apiToken 
     * @param markAllMessagesAsReadRequest 
     */
    public markAllMessagesAsRead(userId: string, apiToken?: string, markAllMessagesAsReadRequest?: MarkAllMessagesAsReadRequest, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.markAllMessagesAsRead(userId, apiToken, markAllMessagesAsReadRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markAllMessagesAsRead(rsp)));
            }));
    }

}
