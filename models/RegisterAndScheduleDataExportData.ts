/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class RegisterAndScheduleDataExportData {
    /**
    * Specifies the starting timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
    */
    'startTs': number;
    /**
    * Specifies the ending timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
    */
    'endTs': number;
    /**
    * Specifies the format of the file to export the messages to. Acceptable values are json and csv. (Default: json)
    */
    'format'?: string;
    /**
    * Sets a single character delimiter to separate the values in each row of the csv file which stores two-dimensional arrays of the exported message data. Either English alphabets or special characters can be used as a delimiter, including a horizontal tab (\\t), a line feed (\\n), a vertical bar (\\
    */
    'csvDelimiter'?: string;
    /**
    * Specifies the timezone to be applied to the timestamp of the exported messages. For example, US/Pacific, Asia/Seoul, Europe/London, etc. (Default: UTC)
    */
    'timezone'?: string;
    /**
    * Specifies an array of the IDs of the users which are used to filter the messages by its sender for the export. This property is effective only when the data_type parameter is set to messages, and can be specified up to 10 IDs in the request. (Default: all messages sent by any user)
    */
    'senderIds'?: Array<string>;
    /**
    * Specifies an array of the IDs of the users which are used to exclude their sent messages from the export. This property is effective only when the data_type parameter is set to messages, and can be specified up to 10 IDs. (Default: all messages sent by any user)
    */
    'excludeSenderIds'?: Array<string>;
    /**
    * Specifies an array of one or more URLs of channels to export the messages from. This property is effective only when the data_type parameter is set to messages or channels. (Default: all channels)
    */
    'channelUrls'?: Array<string>;
    /**
    * Specifies an array of one or more URLs of channels to exclude when exporting the messages. This property is effective only when the data_type parameter is set to messages or channels. (Default: include all channels)
    */
    'excludeChannelUrls'?: Array<string>;
    /**
    * Specifies an array of the IDs of the users to export their information. This property is effective only when the data_type parameter is set to users. (Default: all users)
    */
    'userIds'?: Array<string>;
    /**
    * Determines whether to include information about the read receipts of each channel in the exported data. The read receipt indicates the timestamps of when each user has last read the messages in the channel, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps). (Default: true)
    */
    'showReadReceipt'?: boolean;
    /**
    * Determines whether to include [channel metadata](/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata) in the result files.
    */
    'showChannelMetadata'?: boolean;
    /**
    * Specifies the maximum number of other users' messages to be exported, which took place after the specified message of a user filtered by the sender_ids property. Even if there may be more messages that took place, if the quantity exceeds the number of the neighboring_message_limit, they are omitted. Only the messages that took place right after the specified message will be counted and exported. This can be used to better analyze the context. Acceptable values are 1 to 10, inclusive. (Default: 0)
    */
    'neighboringMessageLimit'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startTs",
            "baseName": "start_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "endTs",
            "baseName": "end_ts",
            "type": "number",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "csvDelimiter",
            "baseName": "csv_delimiter",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "senderIds",
            "baseName": "sender_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excludeSenderIds",
            "baseName": "exclude_sender_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "channelUrls",
            "baseName": "channel_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excludeChannelUrls",
            "baseName": "exclude_channel_urls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "showReadReceipt",
            "baseName": "show_read_receipt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showChannelMetadata",
            "baseName": "show_channel_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "neighboringMessageLimit",
            "baseName": "neighboring_message_limit",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RegisterAndScheduleDataExportData.attributeTypeMap;
    }

    public constructor() {
    }
}

