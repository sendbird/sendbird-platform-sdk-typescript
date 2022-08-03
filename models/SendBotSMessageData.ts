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

import { HttpFile } from '../http/http';

export class SendBotSMessageData {
    /**
    * Specifies the content of the message sent by the bot.
    */
    'message': string;
    /**
    * Specifies the URL of the channel where the message is sent to.
    */
    'channelUrl': string;
    /**
    * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.
    */
    'customType'?: string;
    /**
    * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
    */
    'data'?: string;
    /**
    * Determines whether to send a push notification for the message to the members of the channel (Default: true)
    */
    'sendPush'?: boolean;
    /**
    * Specifies an array of one or more IDs of the users who get a notification for the message.
    */
    'mentioned'?: Array<string>;
    /**
    * Determines whether to mark the message as read for the bot. If set to false, the bot's unread_count and read_receipt remain unchanged after the message is sent. (Default: true)
    */
    'markAsRead'?: boolean;
    /**
    * Specifies the unique ID for the message to prevent the same message data from getting sent to the channel.
    */
    'dedupId'?: string;
    /**
    * Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
    */
    'createdAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
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
            "name": "sendPush",
            "baseName": "send_push",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mentioned",
            "baseName": "mentioned",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "markAsRead",
            "baseName": "mark_as_read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dedupId",
            "baseName": "dedup_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBotSMessageData.attributeTypeMap;
    }

    public constructor() {
    }
}

