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

export class GcFreezeChannelData {
    /**
    * Specifies the URL of the channel to freeze.
    */
    'channelUrl': string;
    /**
    * Determines whether to freeze the channel. (Default: false)
    */
    'freeze': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelUrl",
            "baseName": "channel_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "freeze",
            "baseName": "freeze",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GcFreezeChannelData.attributeTypeMap;
    }

    public constructor() {
    }
}

