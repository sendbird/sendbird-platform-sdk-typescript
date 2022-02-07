// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { GcAcceptInvitationData } from '../models/GcAcceptInvitationData';
import { GcBanUserData } from '../models/GcBanUserData';
import { GcCreateChannelData } from '../models/GcCreateChannelData';
import { GcDeclineInvitationData } from '../models/GcDeclineInvitationData';
import { GcFreezeChannelData } from '../models/GcFreezeChannelData';
import { GcHideOrArchiveChannelData } from '../models/GcHideOrArchiveChannelData';
import { GcInviteAsMembersData } from '../models/GcInviteAsMembersData';
import { GcJoinChannelData } from '../models/GcJoinChannelData';
import { GcLeaveChannelData } from '../models/GcLeaveChannelData';
import { GcMuteUserData } from '../models/GcMuteUserData';
import { GcRegisterOperatorsData } from '../models/GcRegisterOperatorsData';
import { GcResetChatHistoryData } from '../models/GcResetChatHistoryData';
import { GcUpdateBanByIdData } from '../models/GcUpdateBanByIdData';
import { GcUpdateChannelByUrlData } from '../models/GcUpdateChannelByUrlData';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20031 } from '../models/InlineResponse20031';
import { InlineResponse20033 } from '../models/InlineResponse20033';
import { InlineResponse20033BannedList } from '../models/InlineResponse20033BannedList';
import { InlineResponse20034 } from '../models/InlineResponse20034';
import { InlineResponse20035 } from '../models/InlineResponse20035';
import { InlineResponse20036 } from '../models/InlineResponse20036';
import { InlineResponse20037 } from '../models/InlineResponse20037';
import { InlineResponse20038 } from '../models/InlineResponse20038';
import { SendBirdGroupChannel } from '../models/SendBirdGroupChannel';
import { SendBirdUser } from '../models/SendBirdUser';

/**
 * no description
 */
export class GroupChannelApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
     * Accept an invitation
     * @param channelUrl 
     * @param apiToken 
     * @param gcAcceptInvitationData 
     */
    public async gcAcceptInvitation(channelUrl: string, apiToken?: string, gcAcceptInvitationData?: GcAcceptInvitationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcAcceptInvitation", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/accept'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcAcceptInvitationData, "GcAcceptInvitationData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * Ban a user
     * @param channelUrl 
     * @param apiToken 
     * @param gcBanUserData 
     */
    public async gcBanUser(channelUrl: string, apiToken?: string, gcBanUserData?: GcBanUserData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcBanUser", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/ban'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcBanUserData, "GcBanUserData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * Cancel the registration of operators
     * @param channelUrl 
     * @param operatorIds 
     * @param apiToken 
     * @param deleteAll 
     */
    public async gcCancelTheRegistrationOfOperators(channelUrl: string, operatorIds: Array<string>, apiToken?: string, deleteAll?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcCancelTheRegistrationOfOperators", "channelUrl");
        }


        // verify required parameter 'operatorIds' is not null or undefined
        if (operatorIds === null || operatorIds === undefined) {
            throw new RequiredError("GroupChannelApi", "gcCancelTheRegistrationOfOperators", "operatorIds");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/operators'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (operatorIds !== undefined) {
            requestContext.setQueryParam("operator_ids", ObjectSerializer.serialize(operatorIds, "Array<string>", ""));
        }

        // Query Params
        if (deleteAll !== undefined) {
            requestContext.setQueryParam("delete_all", ObjectSerializer.serialize(deleteAll, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * Check if member
     * @param channelUrl 
     * @param userId 
     * @param apiToken 
     */
    public async gcCheckIfMemberById(channelUrl: string, userId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcCheckIfMemberById", "channelUrl");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcCheckIfMemberById", "userId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/members/{user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * Create a channel
     * @param apiToken 
     * @param gcCreateChannelData 
     */
    public async gcCreateChannel(apiToken?: string, gcCreateChannelData?: GcCreateChannelData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/group_channels';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcCreateChannelData, "GcCreateChannelData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * Decline an invitation
     * @param channelUrl 
     * @param apiToken 
     * @param gcDeclineInvitationData 
     */
    public async gcDeclineInvitation(channelUrl: string, apiToken?: string, gcDeclineInvitationData?: GcDeclineInvitationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcDeclineInvitation", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/decline'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcDeclineInvitationData, "GcDeclineInvitationData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * Delete a channel
     * @param channelUrl 
     * @param apiToken 
     */
    public async gcDeleteChannelByUrl(channelUrl: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcDeleteChannelByUrl", "channelUrl");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * Freeze a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcFreezeChannelData 
     */
    public async gcFreezeChannel(channelUrl: string, apiToken?: string, gcFreezeChannelData?: GcFreezeChannelData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcFreezeChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/freeze'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcFreezeChannelData, "GcFreezeChannelData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * Hide or archive a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcHideOrArchiveChannelData 
     */
    public async gcHideOrArchiveChannel(channelUrl: string, apiToken?: string, gcHideOrArchiveChannelData?: GcHideOrArchiveChannelData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcHideOrArchiveChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/hide'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcHideOrArchiveChannelData, "GcHideOrArchiveChannelData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * Invite as members
     * @param channelUrl 
     * @param apiToken 
     * @param gcInviteAsMembersData 
     */
    public async gcInviteAsMembers(channelUrl: string, apiToken?: string, gcInviteAsMembersData?: GcInviteAsMembersData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcInviteAsMembers", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/invite'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcInviteAsMembersData, "GcInviteAsMembersData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * Join a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcJoinChannelData 
     */
    public async gcJoinChannel(channelUrl: string, apiToken?: string, gcJoinChannelData?: GcJoinChannelData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcJoinChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/join'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcJoinChannelData, "GcJoinChannelData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * Leave a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcLeaveChannelData 
     */
    public async gcLeaveChannel(channelUrl: string, apiToken?: string, gcLeaveChannelData?: GcLeaveChannelData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcLeaveChannel", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/leave'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcLeaveChannelData, "GcLeaveChannelData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * List banned users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async gcListBannedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcListBannedUsers", "channelUrl");
        }





        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/ban'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
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
    public async gcListChannels(apiToken?: string, token?: string, limit?: number, distinctMode?: string, publicMode?: string, superMode?: string, createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: string, metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












































        // Path Params
        const localVarPath = '/v3/group_channels';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (distinctMode !== undefined) {
            requestContext.setQueryParam("distinct_mode", ObjectSerializer.serialize(distinctMode, "string", ""));
        }

        // Query Params
        if (publicMode !== undefined) {
            requestContext.setQueryParam("public_mode", ObjectSerializer.serialize(publicMode, "string", ""));
        }

        // Query Params
        if (superMode !== undefined) {
            requestContext.setQueryParam("super_mode", ObjectSerializer.serialize(superMode, "string", ""));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "number", ""));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "number", ""));
        }

        // Query Params
        if (showEmpty !== undefined) {
            requestContext.setQueryParam("show_empty", ObjectSerializer.serialize(showEmpty, "boolean", ""));
        }

        // Query Params
        if (showMember !== undefined) {
            requestContext.setQueryParam("show_member", ObjectSerializer.serialize(showMember, "boolean", ""));
        }

        // Query Params
        if (showDeliveryReceipt !== undefined) {
            requestContext.setQueryParam("show_delivery_receipt", ObjectSerializer.serialize(showDeliveryReceipt, "boolean", ""));
        }

        // Query Params
        if (showReadReceipt !== undefined) {
            requestContext.setQueryParam("show_read_receipt", ObjectSerializer.serialize(showReadReceipt, "boolean", ""));
        }

        // Query Params
        if (showMetadata !== undefined) {
            requestContext.setQueryParam("show_metadata", ObjectSerializer.serialize(showMetadata, "boolean", ""));
        }

        // Query Params
        if (showFrozen !== undefined) {
            requestContext.setQueryParam("show_frozen", ObjectSerializer.serialize(showFrozen, "boolean", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Query Params
        if (metadataOrderKey !== undefined) {
            requestContext.setQueryParam("metadata_order_key", ObjectSerializer.serialize(metadataOrderKey, "string", ""));
        }

        // Query Params
        if (customTypes !== undefined) {
            requestContext.setQueryParam("custom_types", ObjectSerializer.serialize(customTypes, "string", ""));
        }

        // Query Params
        if (customTypeStartswith !== undefined) {
            requestContext.setQueryParam("custom_type_startswith", ObjectSerializer.serialize(customTypeStartswith, "string", ""));
        }

        // Query Params
        if (channelUrls !== undefined) {
            requestContext.setQueryParam("channel_urls", ObjectSerializer.serialize(channelUrls, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (nameContains !== undefined) {
            requestContext.setQueryParam("name_contains", ObjectSerializer.serialize(nameContains, "string", ""));
        }

        // Query Params
        if (nameStartswith !== undefined) {
            requestContext.setQueryParam("name_startswith", ObjectSerializer.serialize(nameStartswith, "string", ""));
        }

        // Query Params
        if (membersExactlyIn !== undefined) {
            requestContext.setQueryParam("members_exactly_in", ObjectSerializer.serialize(membersExactlyIn, "string", ""));
        }

        // Query Params
        if (membersIncludeIn !== undefined) {
            requestContext.setQueryParam("members_include_in", ObjectSerializer.serialize(membersIncludeIn, "string", ""));
        }

        // Query Params
        if (queryType !== undefined) {
            requestContext.setQueryParam("query_type", ObjectSerializer.serialize(queryType, "string", ""));
        }

        // Query Params
        if (membersNickname !== undefined) {
            requestContext.setQueryParam("members_nickname", ObjectSerializer.serialize(membersNickname, "string", ""));
        }

        // Query Params
        if (membersNicknameContains !== undefined) {
            requestContext.setQueryParam("members_nickname_contains", ObjectSerializer.serialize(membersNicknameContains, "string", ""));
        }

        // Query Params
        if (metadataKey !== undefined) {
            requestContext.setQueryParam("metadata_key", ObjectSerializer.serialize(metadataKey, "string", ""));
        }

        // Query Params
        if (metadataValues !== undefined) {
            requestContext.setQueryParam("metadata_values", ObjectSerializer.serialize(metadataValues, "string", ""));
        }

        // Query Params
        if (metadataValueStartswith !== undefined) {
            requestContext.setQueryParam("metadata_value_startswith", ObjectSerializer.serialize(metadataValueStartswith, "string", ""));
        }

        // Query Params
        if (metacounterKey !== undefined) {
            requestContext.setQueryParam("metacounter_key", ObjectSerializer.serialize(metacounterKey, "string", ""));
        }

        // Query Params
        if (metacounterValues !== undefined) {
            requestContext.setQueryParam("metacounter_values", ObjectSerializer.serialize(metacounterValues, "string", ""));
        }

        // Query Params
        if (metacounterValueGt !== undefined) {
            requestContext.setQueryParam("metacounter_value_gt", ObjectSerializer.serialize(metacounterValueGt, "string", ""));
        }

        // Query Params
        if (metacounterValueGte !== undefined) {
            requestContext.setQueryParam("metacounter_value_gte", ObjectSerializer.serialize(metacounterValueGte, "string", ""));
        }

        // Query Params
        if (metacounterValueLt !== undefined) {
            requestContext.setQueryParam("metacounter_value_lt", ObjectSerializer.serialize(metacounterValueLt, "string", ""));
        }

        // Query Params
        if (metacounterValueLte !== undefined) {
            requestContext.setQueryParam("metacounter_value_lte", ObjectSerializer.serialize(metacounterValueLte, "string", ""));
        }

        // Query Params
        if (includeSortedMetaarrayInLastMessage !== undefined) {
            requestContext.setQueryParam("include_sorted_metaarray_in_last_message", ObjectSerializer.serialize(includeSortedMetaarrayInLastMessage, "boolean", ""));
        }

        // Query Params
        if (customType !== undefined) {
            requestContext.setQueryParam("custom_type", ObjectSerializer.serialize(customType, "string", ""));
        }

        // Query Params
        if (readReceipt !== undefined) {
            requestContext.setQueryParam("read_receipt", ObjectSerializer.serialize(readReceipt, "boolean", ""));
        }

        // Query Params
        if (member !== undefined) {
            requestContext.setQueryParam("member", ObjectSerializer.serialize(member, "boolean", ""));
        }

        // Query Params
        if (isDistinct !== undefined) {
            requestContext.setQueryParam("is_distinct", ObjectSerializer.serialize(isDistinct, "boolean", ""));
        }

        // Query Params
        if (membersIn !== undefined) {
            requestContext.setQueryParam("members_in", ObjectSerializer.serialize(membersIn, "string", ""));
        }

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
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
    public async gcListMembers(channelUrl: string, apiToken?: string, token?: string, limit?: number, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, order?: string, operatorFilter?: string, memberStateFilter?: string, mutedMemberFilter?: string, nicknameStartswith?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcListMembers", "channelUrl");
        }












        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/members'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (showDeliveryReceipt !== undefined) {
            requestContext.setQueryParam("show_delivery_receipt", ObjectSerializer.serialize(showDeliveryReceipt, "boolean", ""));
        }

        // Query Params
        if (showReadReceipt !== undefined) {
            requestContext.setQueryParam("show_read_receipt", ObjectSerializer.serialize(showReadReceipt, "boolean", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Query Params
        if (operatorFilter !== undefined) {
            requestContext.setQueryParam("operator_filter", ObjectSerializer.serialize(operatorFilter, "string", ""));
        }

        // Query Params
        if (memberStateFilter !== undefined) {
            requestContext.setQueryParam("member_state_filter", ObjectSerializer.serialize(memberStateFilter, "string", ""));
        }

        // Query Params
        if (mutedMemberFilter !== undefined) {
            requestContext.setQueryParam("muted_member_filter", ObjectSerializer.serialize(mutedMemberFilter, "string", ""));
        }

        // Query Params
        if (nicknameStartswith !== undefined) {
            requestContext.setQueryParam("nickname_startswith", ObjectSerializer.serialize(nicknameStartswith, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * List muted users
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async gcListMutedUsers(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcListMutedUsers", "channelUrl");
        }





        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/mute'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * List operators
     * @param channelUrl 
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async gcListOperators(channelUrl: string, apiToken?: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcListOperators", "channelUrl");
        }





        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/operators'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * Mute a user
     * @param channelUrl 
     * @param apiToken 
     * @param gcMuteUserData 
     */
    public async gcMuteUser(channelUrl: string, apiToken?: string, gcMuteUserData?: GcMuteUserData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcMuteUser", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/mute'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcMuteUserData, "GcMuteUserData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * Register operators
     * @param channelUrl 
     * @param apiToken 
     * @param gcRegisterOperatorsData 
     */
    public async gcRegisterOperators(channelUrl: string, apiToken?: string, gcRegisterOperatorsData?: GcRegisterOperatorsData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcRegisterOperators", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/operators'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcRegisterOperatorsData, "GcRegisterOperatorsData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * Reset chat history
     * @param channelUrl 
     * @param apiToken 
     * @param gcResetChatHistoryData 
     */
    public async gcResetChatHistory(channelUrl: string, apiToken?: string, gcResetChatHistoryData?: GcResetChatHistoryData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcResetChatHistory", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/reset_user_history'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcResetChatHistoryData, "GcResetChatHistoryData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * Unban a user
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public async gcUnbanUserById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnbanUserById", "channelUrl");
        }


        // verify required parameter 'bannedUserId' is not null or undefined
        if (bannedUserId === null || bannedUserId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnbanUserById", "bannedUserId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/ban/{banned_user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'banned_user_id' + '}', encodeURIComponent(String(bannedUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * Unhide or unarchive a channel
     * @param channelUrl 
     * @param userId 
     * @param apiToken 
     * @param shouldUnhideAll 
     */
    public async gcUnhideOrUnarchiveChannel(channelUrl: string, userId: string, apiToken?: string, shouldUnhideAll?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnhideOrUnarchiveChannel", "channelUrl");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnhideOrUnarchiveChannel", "userId");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/hide'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("user_id", ObjectSerializer.serialize(userId, "string", ""));
        }

        // Query Params
        if (shouldUnhideAll !== undefined) {
            requestContext.setQueryParam("should_unhide_all", ObjectSerializer.serialize(shouldUnhideAll, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * Unmute a user
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public async gcUnmuteUserById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnmuteUserById", "channelUrl");
        }


        // verify required parameter 'mutedUserId' is not null or undefined
        if (mutedUserId === null || mutedUserId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUnmuteUserById", "mutedUserId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/mute/{muted_user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'muted_user_id' + '}', encodeURIComponent(String(mutedUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * Update a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     * @param gcUpdateBanByIdData 
     */
    public async gcUpdateBanById(channelUrl: string, bannedUserId: string, apiToken?: string, gcUpdateBanByIdData?: GcUpdateBanByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUpdateBanById", "channelUrl");
        }


        // verify required parameter 'bannedUserId' is not null or undefined
        if (bannedUserId === null || bannedUserId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUpdateBanById", "bannedUserId");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/ban/{banned_user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'banned_user_id' + '}', encodeURIComponent(String(bannedUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcUpdateBanByIdData, "GcUpdateBanByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * Update a channel
     * @param channelUrl 
     * @param apiToken 
     * @param gcUpdateChannelByUrlData 
     */
    public async gcUpdateChannelByUrl(channelUrl: string, apiToken?: string, gcUpdateChannelByUrlData?: GcUpdateChannelByUrlData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcUpdateChannelByUrl", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(gcUpdateChannelByUrlData, "GcUpdateChannelByUrlData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * View a ban
     * @param channelUrl 
     * @param bannedUserId 
     * @param apiToken 
     */
    public async gcViewBanById(channelUrl: string, bannedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcViewBanById", "channelUrl");
        }


        // verify required parameter 'bannedUserId' is not null or undefined
        if (bannedUserId === null || bannedUserId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcViewBanById", "bannedUserId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/ban/{banned_user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'banned_user_id' + '}', encodeURIComponent(String(bannedUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
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
    public async gcViewChannelByUrl(channelUrl: string, apiToken?: string, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMember?: boolean, readReceipt?: boolean, member?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcViewChannelByUrl", "channelUrl");
        }








        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (showDeliveryReceipt !== undefined) {
            requestContext.setQueryParam("show_delivery_receipt", ObjectSerializer.serialize(showDeliveryReceipt, "boolean", ""));
        }

        // Query Params
        if (showReadReceipt !== undefined) {
            requestContext.setQueryParam("show_read_receipt", ObjectSerializer.serialize(showReadReceipt, "boolean", ""));
        }

        // Query Params
        if (showMember !== undefined) {
            requestContext.setQueryParam("show_member", ObjectSerializer.serialize(showMember, "boolean", ""));
        }

        // Query Params
        if (readReceipt !== undefined) {
            requestContext.setQueryParam("read_receipt", ObjectSerializer.serialize(readReceipt, "boolean", ""));
        }

        // Query Params
        if (member !== undefined) {
            requestContext.setQueryParam("member", ObjectSerializer.serialize(member, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * View a mute
     * @param channelUrl 
     * @param mutedUserId 
     * @param apiToken 
     */
    public async gcViewMuteById(channelUrl: string, mutedUserId: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("GroupChannelApi", "gcViewMuteById", "channelUrl");
        }


        // verify required parameter 'mutedUserId' is not null or undefined
        if (mutedUserId === null || mutedUserId === undefined) {
            throw new RequiredError("GroupChannelApi", "gcViewMuteById", "mutedUserId");
        }



        // Path Params
        const localVarPath = '/v3/group_channels/{channel_url}/mute/{muted_user_id}'
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'muted_user_id' + '}', encodeURIComponent(String(mutedUserId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class GroupChannelApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcAcceptInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcAcceptInvitation(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcBanUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcBanUser(response: ResponseContext): Promise<InlineResponse20033BannedList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20033BannedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20033BannedList", ""
            ) as InlineResponse20033BannedList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20033BannedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20033BannedList", ""
            ) as InlineResponse20033BannedList;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcCancelTheRegistrationOfOperators
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcCancelTheRegistrationOfOperators(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcCheckIfMemberById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcCheckIfMemberById(response: ResponseContext): Promise<InlineResponse20037 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20037 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20037", ""
            ) as InlineResponse20037;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20037 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20037", ""
            ) as InlineResponse20037;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcCreateChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcCreateChannel(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcDeclineInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcDeclineInvitation(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcDeleteChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcDeleteChannelByUrl(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcFreezeChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcFreezeChannel(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcHideOrArchiveChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcHideOrArchiveChannel(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcInviteAsMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcInviteAsMembers(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcJoinChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcJoinChannel(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcLeaveChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcLeaveChannel(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcListBannedUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcListBannedUsers(response: ResponseContext): Promise<InlineResponse20033 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20033 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20033", ""
            ) as InlineResponse20033;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20033 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20033", ""
            ) as InlineResponse20033;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcListChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcListChannels(response: ResponseContext): Promise<InlineResponse20017 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20017 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20017", ""
            ) as InlineResponse20017;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20017 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20017", ""
            ) as InlineResponse20017;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcListMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcListMembers(response: ResponseContext): Promise<InlineResponse20036 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20036 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20036", ""
            ) as InlineResponse20036;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20036 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20036", ""
            ) as InlineResponse20036;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcListMutedUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcListMutedUsers(response: ResponseContext): Promise<InlineResponse20031 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20031 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20031", ""
            ) as InlineResponse20031;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20031 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20031", ""
            ) as InlineResponse20031;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcListOperators
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcListOperators(response: ResponseContext): Promise<InlineResponse20034 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20034 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20034", ""
            ) as InlineResponse20034;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20034 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20034", ""
            ) as InlineResponse20034;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcMuteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcMuteUser(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcRegisterOperators
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcRegisterOperators(response: ResponseContext): Promise<InlineResponse20038 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20038 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20038", ""
            ) as InlineResponse20038;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20038 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20038", ""
            ) as InlineResponse20038;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcResetChatHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcResetChatHistory(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcUnbanUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcUnbanUserById(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcUnhideOrUnarchiveChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcUnhideOrUnarchiveChannel(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcUnmuteUserById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcUnmuteUserById(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcUpdateBanById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcUpdateBanById(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcUpdateChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcUpdateChannelByUrl(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcViewBanById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcViewBanById(response: ResponseContext): Promise<SendBirdUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdUser", ""
            ) as SendBirdUser;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcViewChannelByUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcViewChannelByUrl(response: ResponseContext): Promise<SendBirdGroupChannel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdGroupChannel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdGroupChannel", ""
            ) as SendBirdGroupChannel;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gcViewMuteById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gcViewMuteById(response: ResponseContext): Promise<InlineResponse20035 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse20035 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20035", ""
            ) as InlineResponse20035;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse20035 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse20035", ""
            ) as InlineResponse20035;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
