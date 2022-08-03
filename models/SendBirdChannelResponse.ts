/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SendBirdGroupChannel } from './SendBirdGroupChannel';
import { SendBirdGroupChannelChannel } from './SendBirdGroupChannelChannel';
import { SendBirdGroupChannelCreatedBy } from './SendBirdGroupChannelCreatedBy';
import { SendBirdGroupChannelDisappearingMessage } from './SendBirdGroupChannelDisappearingMessage';
import { SendBirdGroupChannelSmsFallback } from './SendBirdGroupChannelSmsFallback';
import { SendBirdMember } from './SendBirdMember';
import { SendBirdMessageResponse } from './SendBirdMessageResponse';
import { SendBirdOpenChannel } from './SendBirdOpenChannel';
import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class SendBirdChannelResponse {
    'channelUrl'?: string;
    'coverUrl'?: string;
    'createdAt'?: number;
    'createdBy'?: SendBirdGroupChannelCreatedBy;
    'creator'?: SendBirdUser;
    'customType'?: string;
    'data'?: string;
    'disappearingMessage'?: SendBirdGroupChannelDisappearingMessage;
    'freeze'?: boolean;
    'ignoreProfanityFilter'?: boolean;
    'hiddenState'?: SendBirdChannelResponseHiddenStateEnum;
    'invitedAt'?: number;
    'inviter'?: SendBirdUser;
    'isAccessCodeRequired'?: boolean;
    'isBroadcast'?: boolean;
    'isCreated'?: boolean;
    'isDiscoverable'?: boolean;
    'isDistinct'?: boolean;
    'isEphemeral'?: boolean;
    'isFrozen'?: boolean;
    'isHidden'?: boolean;
    'isPublic'?: boolean;
    'isPushEnabled'?: boolean;
    'isSuper'?: boolean;
    'joinedAt'?: number;
    'joinedMemberCount'?: number;
    'lastMessage'?: SendBirdMessageResponse;
    'maxLengthMessage'?: number;
    'memberCount'?: number;
    'members'?: Array<SendBirdMember>;
    'messageOffsetTimestamp'?: number;
    'messageSurvivalSeconds'?: number;
    'myCountPreference'?: string;
    'myLastRead'?: number;
    'myMemberState'?: SendBirdChannelResponseMyMemberStateEnum;
    'myMutedState'?: SendBirdChannelResponseMyMutedStateEnum;
    'myPushTriggerOption'?: SendBirdChannelResponseMyPushTriggerOptionEnum;
    'myRole'?: SendBirdChannelResponseMyRoleEnum;
    'name'?: string;
    'operators'?: Array<SendBirdUser>;
    'smsFallback'?: SendBirdGroupChannelSmsFallback;
    'unreadMentionCount'?: number;
    'unreadMessageCount'?: number;
    'channel'?: SendBirdGroupChannelChannel;
    'isDynamicPartitioned'?: boolean;
    'participantCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "coverUrl",
            "baseName": "cover_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "SendBirdGroupChannelCreatedBy",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "customType",
            "baseName": "custom_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string",
            "format": ""
        },
        {
            "name": "disappearingMessage",
            "baseName": "disappearing_message",
            "type": "SendBirdGroupChannelDisappearingMessage",
            "format": ""
        },
        {
            "name": "freeze",
            "baseName": "freeze",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ignoreProfanityFilter",
            "baseName": "ignore_profanity_filter",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hiddenState",
            "baseName": "hidden_state",
            "type": "SendBirdChannelResponseHiddenStateEnum",
            "format": ""
        },
        {
            "name": "invitedAt",
            "baseName": "invited_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "inviter",
            "baseName": "inviter",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "isAccessCodeRequired",
            "baseName": "is_access_code_required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isBroadcast",
            "baseName": "is_broadcast",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCreated",
            "baseName": "is_created",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDiscoverable",
            "baseName": "is_discoverable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDistinct",
            "baseName": "is_distinct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEphemeral",
            "baseName": "is_ephemeral",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFrozen",
            "baseName": "is_frozen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHidden",
            "baseName": "is_hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPushEnabled",
            "baseName": "is_push_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuper",
            "baseName": "is_super",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "joinedAt",
            "baseName": "joined_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "joinedMemberCount",
            "baseName": "joined_member_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastMessage",
            "baseName": "last_message",
            "type": "SendBirdMessageResponse",
            "format": ""
        },
        {
            "name": "maxLengthMessage",
            "baseName": "max_length_message",
            "type": "number",
            "format": ""
        },
        {
            "name": "memberCount",
            "baseName": "member_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<SendBirdMember>",
            "format": ""
        },
        {
            "name": "messageOffsetTimestamp",
            "baseName": "message_offset_timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageSurvivalSeconds",
            "baseName": "message_survival_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "myCountPreference",
            "baseName": "my_count_preference",
            "type": "string",
            "format": ""
        },
        {
            "name": "myLastRead",
            "baseName": "my_last_read",
            "type": "number",
            "format": ""
        },
        {
            "name": "myMemberState",
            "baseName": "my_member_state",
            "type": "SendBirdChannelResponseMyMemberStateEnum",
            "format": ""
        },
        {
            "name": "myMutedState",
            "baseName": "my_muted_state",
            "type": "SendBirdChannelResponseMyMutedStateEnum",
            "format": ""
        },
        {
            "name": "myPushTriggerOption",
            "baseName": "my_push_trigger_option",
            "type": "SendBirdChannelResponseMyPushTriggerOptionEnum",
            "format": ""
        },
        {
            "name": "myRole",
            "baseName": "my_role",
            "type": "SendBirdChannelResponseMyRoleEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "operators",
            "baseName": "operators",
            "type": "Array<SendBirdUser>",
            "format": ""
        },
        {
            "name": "smsFallback",
            "baseName": "sms_fallback",
            "type": "SendBirdGroupChannelSmsFallback",
            "format": ""
        },
        {
            "name": "unreadMentionCount",
            "baseName": "unread_mention_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "unreadMessageCount",
            "baseName": "unread_message_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SendBirdGroupChannelChannel",
            "format": ""
        },
        {
            "name": "isDynamicPartitioned",
            "baseName": "is_dynamic_partitioned",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "participantCount",
            "baseName": "participant_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdChannelResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdChannelResponseHiddenStateEnum = "hidden_allow_auto_unhide" | "hidden_prevent_auto_unhide" | "unhidden" ;
export type SendBirdChannelResponseMyMemberStateEnum = "invited" | "joined" | "none" ;
export type SendBirdChannelResponseMyMutedStateEnum = "muted" | "unmuted" ;
export type SendBirdChannelResponseMyPushTriggerOptionEnum = "all" | "default" | "mention_only" | "false" ;
export type SendBirdChannelResponseMyRoleEnum = "none" | "operator" ;

