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

import { ListBannedChannelsResponseBannedChannelsInner } from './ListBannedChannelsResponseBannedChannelsInner';
import { HttpFile } from '../http/http';

export class ListBannedChannelsResponse {
    'bannedChannels'?: Array<ListBannedChannelsResponseBannedChannelsInner>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bannedChannels",
            "baseName": "banned_channels",
            "type": "Array<ListBannedChannelsResponseBannedChannelsInner>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListBannedChannelsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

