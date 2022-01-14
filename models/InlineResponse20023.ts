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

import { InlineResponse20023BannedChannels } from './InlineResponse20023BannedChannels';
import { HttpFile } from '../http/http';

export class InlineResponse20023 {
    'bannedChannels'?: Array<InlineResponse20023BannedChannels>;
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bannedChannels",
            "baseName": "banned_channels",
            "type": "Array<InlineResponse20023BannedChannels>",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20023.attributeTypeMap;
    }

    public constructor() {
    }
}
