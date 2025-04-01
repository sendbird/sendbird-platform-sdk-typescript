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
import { SendbirdGroupChannelChannel } from '../models/SendbirdGroupChannelChannel';
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

import { ObservableGroupChannelApi } from "./ObservableAPI";
import { GroupChannelApiRequestFactory, GroupChannelApiResponseProcessor} from "../apis/GroupChannelApi";

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

export class ObjectGroupChannelApi {
    private api: ObservableGroupChannelApi

    public constructor(configuration: Configuration, requestFactory?: GroupChannelApiRequestFactory, responseProcessor?: GroupChannelApiResponseProcessor) {
        this.api = new ObservableGroupChannelApi(configuration, requestFactory, responseProcessor);
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
     * ## List group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you want to retrieve a list of group channels that a specific user has joined, use the [list group channels by user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user) action under the User section.  https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels#1-list-group-channels
     * List channels
     * @param param the request object
     */
    public listChannels(param: GroupChannelApiListChannelsRequest, options?: Configuration): Promise<GroupChatListChannelsResponse> {
        return this.api.listChannels(param.apiToken, param.token, param.limit, param.distinctMode, param.publicMode, param.superMode, param.createdAfter, param.createdBefore, param.showEmpty, param.showMember, param.showDeliveryReceipt, param.showReadReceipt, param.showMetadata, param.showFrozen, param.order, param.metadataOrderKey, param.customTypes, param.customTypeStartswith, param.channelUrls, param.name, param.nameContains, param.nameStartswith, param.membersExactlyIn, param.membersIncludeIn, param.queryType, param.membersNickname, param.membersNicknameContains, param.metadataKey, param.metadataValues, param.metadataValueStartswith, param.metacounterKey, param.metacounterValues, param.metacounterValueGt, param.metacounterValueGte, param.metacounterValueLt, param.metacounterValueLte, param.includeSortedMetaarrayInLastMessage, param.customType, param.readReceipt, param.member, param.isDistinct, param.membersIn, param.userId,  options).toPromise();
    }

}
