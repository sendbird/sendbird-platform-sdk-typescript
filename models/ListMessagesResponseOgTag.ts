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

import { ListMessagesResponseOgTagOgImage } from './ListMessagesResponseOgTagOgImage';
import { HttpFile } from '../http/http';

export class ListMessagesResponseOgTag {
    'ogurl'?: string;
    'ogtitle'?: string;
    'ogdescription'?: string;
    'ogimage'?: ListMessagesResponseOgTagOgImage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ogurl",
            "baseName": "og:url",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogtitle",
            "baseName": "og:title",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogdescription",
            "baseName": "og:description",
            "type": "string",
            "format": ""
        },
        {
            "name": "ogimage",
            "baseName": "og:image",
            "type": "ListMessagesResponseOgTagOgImage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListMessagesResponseOgTag.attributeTypeMap;
    }

    public constructor() {
    }
}

