import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateAGroupChannelRequest } from '../models/CreateAGroupChannelRequest';
import { CreateAGroupChannelResponse } from '../models/CreateAGroupChannelResponse';
import { CreateAGroupChannelResponseChannel } from '../models/CreateAGroupChannelResponseChannel';
import { CreateAGroupChannelResponseDisappearingMessage } from '../models/CreateAGroupChannelResponseDisappearingMessage';
import { CreateAGroupChannelResponseSmsFallback } from '../models/CreateAGroupChannelResponseSmsFallback';
import { GroupChatListChannelsResponse } from '../models/GroupChatListChannelsResponse';
import { SendbirdFile } from '../models/SendbirdFile';
import { SendbirdGroupChannel } from '../models/SendbirdGroupChannel';
import { SendbirdGroupChannelCreatedBy } from '../models/SendbirdGroupChannelCreatedBy';
import { SendbirdGroupChannelDisappearingMessage } from '../models/SendbirdGroupChannelDisappearingMessage';
import { SendbirdGroupChannelSmsFallback } from '../models/SendbirdGroupChannelSmsFallback';
import { SendbirdMember } from '../models/SendbirdMember';
import { SendbirdMessageResponse } from '../models/SendbirdMessageResponse';
import { SendbirdMessageResponseMentionedUsersInner } from '../models/SendbirdMessageResponseMentionedUsersInner';
import { SendbirdMessageResponseMentionedUsersInnerMetadata } from '../models/SendbirdMessageResponseMentionedUsersInnerMetadata';
import { SendbirdMessageResponseUser } from '../models/SendbirdMessageResponseUser';
import { SendbirdParentMessageInfo } from '../models/SendbirdParentMessageInfo';
import { SendbirdThumbnail } from '../models/SendbirdThumbnail';
import { SendbirdUser } from '../models/SendbirdUser';
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
     * ## Create a group channel  You can create a group channel for 1-to-1 and 1-to-N conversations. By default, group channels are used for conversations between up to 100 members. This number can stretch up to tens of thousands in Supergroup channels. Group channels can either be private and invite only, or public. They support typing indicators, unread count and read receipts, allowing for an interactive chat experience. A user can join up to 2000 group channels, and higher numbers would negatively impact the performance for the end user. The Chat history is turned off by default and its settings can be changed on Sendbird Dashboard by going to Settings > Chat > Channels > Group channels > Chat history. To learn more about group channels, see Channel Overview.  > If you are seeing the error message Maximum \"channel join\" count reached., then consider deleting channels that are no longer used. For situations where an agent connects with many customers such as support, delivery logistics or sales, we recommend using Sendbird Desk.  https://sendbird.com/docs/chat/platform-api/v3/channel/creating-a-channel/create-a-group-channel#1-create-a-group-channel
     * Create a group channel
     * @param apiToken 
     * @param createAGroupChannelRequest 
     */
    public createAGroupChannel(apiToken?: string, createAGroupChannelRequest?: CreateAGroupChannelRequest, _options?: Configuration): Promise<CreateAGroupChannelResponse> {
        const result = this.api.createAGroupChannel(apiToken, createAGroupChannelRequest, _options);
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
     * @param customType (Deprecated) Returns channels whose custom_type matches the given value. If this field is not specified, all channels are returned, regardless of their custom type. The string passed here must be urlencoded.
     * @param readReceipt (Deprecated) Superseded by show_read_receipt.
     * @param member (Deprecated) Superseded by show_member.
     * @param isDistinct (Deprecated) Superseded by distinct_mode.
     * @param membersIn (Deprecated) Superseded by members_exactly_in.
     * @param userId (Deprecated) Restricts the search scope to only retrieve the target user&#39;s group channels. It&#39;s recommended to use the list group channels by user action instead.
     */
    public listChannels(apiToken: string, token?: string, limit?: number, distinctMode?: 'all' | 'distinct' | 'nondistinct', publicMode?: 'all' | 'private' | 'public', superMode?: 'all' | 'super' | 'nonsuper', createdAfter?: number, createdBefore?: number, showEmpty?: boolean, showMember?: boolean, showDeliveryReceipt?: boolean, showReadReceipt?: boolean, showMetadata?: boolean, showFrozen?: boolean, order?: 'chronological' | 'latest_last_message' | 'channel_name_alphabetical' | 'metadata_value_alphabetical', metadataOrderKey?: string, customTypes?: string, customTypeStartswith?: string, channelUrls?: string, name?: string, nameContains?: string, nameStartswith?: string, membersExactlyIn?: string, membersIncludeIn?: string, queryType?: string, membersNickname?: string, membersNicknameContains?: string, metadataKey?: string, metadataValues?: string, metadataValueStartswith?: string, metacounterKey?: string, metacounterValues?: string, metacounterValueGt?: string, metacounterValueGte?: string, metacounterValueLt?: string, metacounterValueLte?: string, includeSortedMetaarrayInLastMessage?: boolean, customType?: string, readReceipt?: boolean, member?: boolean, isDistinct?: boolean, membersIn?: string, userId?: string, _options?: Configuration): Promise<GroupChatListChannelsResponse> {
        const result = this.api.listChannels(apiToken, token, limit, distinctMode, publicMode, superMode, createdAfter, createdBefore, showEmpty, showMember, showDeliveryReceipt, showReadReceipt, showMetadata, showFrozen, order, metadataOrderKey, customTypes, customTypeStartswith, channelUrls, name, nameContains, nameStartswith, membersExactlyIn, membersIncludeIn, queryType, membersNickname, membersNicknameContains, metadataKey, metadataValues, metadataValueStartswith, metacounterKey, metacounterValues, metacounterValueGt, metacounterValueGte, metacounterValueLt, metacounterValueLte, includeSortedMetaarrayInLastMessage, customType, readReceipt, member, isDistinct, membersIn, userId, _options);
        return result.toPromise();
    }


}



