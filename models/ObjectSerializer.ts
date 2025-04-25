export * from './AcceptAnInvitationRequest';
export * from './CheckIfMemberResponse';
export * from './CreateAGroupChannelRequest';
export * from './FreezeAGroupChannelRequest';
export * from './GetAGroupChannelResponse';
export * from './GetAGroupChannelResponseAllOf';
export * from './GroupChannelListMembersResponse';
export * from './GroupChatListChannelsResponse';
export * from './HideAChannelRequest';
export * from './InviteAsMembersRequest';
export * from './InviteAsMembersResponse';
export * from './InviteAsMembersResponseAllOf';
export * from './JoinAChannelRequest';
export * from './LeaveAChannelRequest';
export * from './ListOperatorsResponse';
export * from './MarkAllMessagesAsReadRequest';
export * from './RegisterOperatorsToAGroupChannelRequest';
export * from './ResetChatHistoryRequest';
export * from './ResetChatHistoryResponse';
export * from './SendbirdBasicUserInfo';
export * from './SendbirdDisappearingMessage';
export * from './SendbirdFile';
export * from './SendbirdGroupChannel';
export * from './SendbirdGroupChannelDetail';
export * from './SendbirdGroupChannelDetailChannel';
export * from './SendbirdMember';
export * from './SendbirdMessageResponse';
export * from './SendbirdMessageResponseMentionedUsersInner';
export * from './SendbirdMessageResponseMentionedUsersInnerMetadata';
export * from './SendbirdMessageResponseUser';
export * from './SendbirdParentMessageInfo';
export * from './SendbirdSmsFallback';
export * from './SendbirdThumbnail';
export * from './SendbirdUser';
export * from './StartTypingIndicatorsRequest';
export * from './UpdateAGroupChannelRequest';
export * from './ViewNumberOfDailyActiveUsersResponse';
export * from './ViewNumberOfMonthlyActiveUsersResponse';

import { AcceptAnInvitationRequest } from './AcceptAnInvitationRequest';
import { CheckIfMemberResponse , CheckIfMemberResponseStateEnum   } from './CheckIfMemberResponse';
import { CreateAGroupChannelRequest } from './CreateAGroupChannelRequest';
import { FreezeAGroupChannelRequest } from './FreezeAGroupChannelRequest';
import { GetAGroupChannelResponse  , GetAGroupChannelResponseCountPreferenceEnum            , GetAGroupChannelResponseHiddenStateEnum                     , GetAGroupChannelResponseMemberStateEnum     , GetAGroupChannelResponseMyRoleEnum   , GetAGroupChannelResponsePushTriggerOptionEnum         } from './GetAGroupChannelResponse';
import { GetAGroupChannelResponseAllOf } from './GetAGroupChannelResponseAllOf';
import { GroupChannelListMembersResponse } from './GroupChannelListMembersResponse';
import { GroupChatListChannelsResponse } from './GroupChatListChannelsResponse';
import { HideAChannelRequest } from './HideAChannelRequest';
import { InviteAsMembersRequest } from './InviteAsMembersRequest';
import { InviteAsMembersResponse , InviteAsMembersResponseCountPreferenceEnum            , InviteAsMembersResponseHiddenStateEnum                     , InviteAsMembersResponseMemberStateEnum     , InviteAsMembersResponseMyRoleEnum   , InviteAsMembersResponsePushTriggerOptionEnum          } from './InviteAsMembersResponse';
import { InviteAsMembersResponseAllOf } from './InviteAsMembersResponseAllOf';
import { JoinAChannelRequest } from './JoinAChannelRequest';
import { LeaveAChannelRequest } from './LeaveAChannelRequest';
import { ListOperatorsResponse } from './ListOperatorsResponse';
import { MarkAllMessagesAsReadRequest } from './MarkAllMessagesAsReadRequest';
import { RegisterOperatorsToAGroupChannelRequest } from './RegisterOperatorsToAGroupChannelRequest';
import { ResetChatHistoryRequest } from './ResetChatHistoryRequest';
import { ResetChatHistoryResponse } from './ResetChatHistoryResponse';
import { SendbirdBasicUserInfo } from './SendbirdBasicUserInfo';
import { SendbirdDisappearingMessage } from './SendbirdDisappearingMessage';
import { SendbirdFile } from './SendbirdFile';
import { SendbirdGroupChannel , SendbirdGroupChannelCountPreferenceEnum            , SendbirdGroupChannelHiddenStateEnum                     , SendbirdGroupChannelMemberStateEnum     , SendbirdGroupChannelMyRoleEnum   , SendbirdGroupChannelPushTriggerOptionEnum         } from './SendbirdGroupChannel';
import { SendbirdGroupChannelDetail } from './SendbirdGroupChannelDetail';
import { SendbirdGroupChannelDetailChannel } from './SendbirdGroupChannelDetailChannel';
import { SendbirdMember                   , SendbirdMemberRoleEnum  , SendbirdMemberStateEnum    } from './SendbirdMember';
import { SendbirdMessageResponse } from './SendbirdMessageResponse';
import { SendbirdMessageResponseMentionedUsersInner } from './SendbirdMessageResponseMentionedUsersInner';
import { SendbirdMessageResponseMentionedUsersInnerMetadata } from './SendbirdMessageResponseMentionedUsersInnerMetadata';
import { SendbirdMessageResponseUser } from './SendbirdMessageResponseUser';
import { SendbirdParentMessageInfo } from './SendbirdParentMessageInfo';
import { SendbirdSmsFallback } from './SendbirdSmsFallback';
import { SendbirdThumbnail } from './SendbirdThumbnail';
import { SendbirdUser                , SendbirdUserStateEnum   } from './SendbirdUser';
import { StartTypingIndicatorsRequest } from './StartTypingIndicatorsRequest';
import { UpdateAGroupChannelRequest } from './UpdateAGroupChannelRequest';
import { ViewNumberOfDailyActiveUsersResponse } from './ViewNumberOfDailyActiveUsersResponse';
import { ViewNumberOfMonthlyActiveUsersResponse } from './ViewNumberOfMonthlyActiveUsersResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "CheckIfMemberResponseStateEnum",
    "GetAGroupChannelResponseCountPreferenceEnum",
    "GetAGroupChannelResponseHiddenStateEnum",
    "GetAGroupChannelResponseMemberStateEnum",
    "GetAGroupChannelResponseMyRoleEnum",
    "GetAGroupChannelResponsePushTriggerOptionEnum",
    "InviteAsMembersResponseCountPreferenceEnum",
    "InviteAsMembersResponseHiddenStateEnum",
    "InviteAsMembersResponseMemberStateEnum",
    "InviteAsMembersResponseMyRoleEnum",
    "InviteAsMembersResponsePushTriggerOptionEnum",
    "SendbirdGroupChannelCountPreferenceEnum",
    "SendbirdGroupChannelHiddenStateEnum",
    "SendbirdGroupChannelMemberStateEnum",
    "SendbirdGroupChannelMyRoleEnum",
    "SendbirdGroupChannelPushTriggerOptionEnum",
    "SendbirdMemberRoleEnum",
    "SendbirdMemberStateEnum",
    "SendbirdUserStateEnum",
]);

let typeMap: {[index: string]: any} = {
    "AcceptAnInvitationRequest": AcceptAnInvitationRequest,
    "CheckIfMemberResponse": CheckIfMemberResponse,
    "CreateAGroupChannelRequest": CreateAGroupChannelRequest,
    "FreezeAGroupChannelRequest": FreezeAGroupChannelRequest,
    "GetAGroupChannelResponse": GetAGroupChannelResponse,
    "GetAGroupChannelResponseAllOf": GetAGroupChannelResponseAllOf,
    "GroupChannelListMembersResponse": GroupChannelListMembersResponse,
    "GroupChatListChannelsResponse": GroupChatListChannelsResponse,
    "HideAChannelRequest": HideAChannelRequest,
    "InviteAsMembersRequest": InviteAsMembersRequest,
    "InviteAsMembersResponse": InviteAsMembersResponse,
    "InviteAsMembersResponseAllOf": InviteAsMembersResponseAllOf,
    "JoinAChannelRequest": JoinAChannelRequest,
    "LeaveAChannelRequest": LeaveAChannelRequest,
    "ListOperatorsResponse": ListOperatorsResponse,
    "MarkAllMessagesAsReadRequest": MarkAllMessagesAsReadRequest,
    "RegisterOperatorsToAGroupChannelRequest": RegisterOperatorsToAGroupChannelRequest,
    "ResetChatHistoryRequest": ResetChatHistoryRequest,
    "ResetChatHistoryResponse": ResetChatHistoryResponse,
    "SendbirdBasicUserInfo": SendbirdBasicUserInfo,
    "SendbirdDisappearingMessage": SendbirdDisappearingMessage,
    "SendbirdFile": SendbirdFile,
    "SendbirdGroupChannel": SendbirdGroupChannel,
    "SendbirdGroupChannelDetail": SendbirdGroupChannelDetail,
    "SendbirdGroupChannelDetailChannel": SendbirdGroupChannelDetailChannel,
    "SendbirdMember": SendbirdMember,
    "SendbirdMessageResponse": SendbirdMessageResponse,
    "SendbirdMessageResponseMentionedUsersInner": SendbirdMessageResponseMentionedUsersInner,
    "SendbirdMessageResponseMentionedUsersInnerMetadata": SendbirdMessageResponseMentionedUsersInnerMetadata,
    "SendbirdMessageResponseUser": SendbirdMessageResponseUser,
    "SendbirdParentMessageInfo": SendbirdParentMessageInfo,
    "SendbirdSmsFallback": SendbirdSmsFallback,
    "SendbirdThumbnail": SendbirdThumbnail,
    "SendbirdUser": SendbirdUser,
    "StartTypingIndicatorsRequest": StartTypingIndicatorsRequest,
    "UpdateAGroupChannelRequest": UpdateAGroupChannelRequest,
    "ViewNumberOfDailyActiveUsersResponse": ViewNumberOfDailyActiveUsersResponse,
    "ViewNumberOfMonthlyActiveUsersResponse": ViewNumberOfMonthlyActiveUsersResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
