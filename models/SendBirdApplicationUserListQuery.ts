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

export class SendBirdApplicationUserListQuery {
    'hasNext'?: boolean;
    'isLoading'?: boolean;
    'limit'?: number;
    'metaDataKeyFilter'?: string;
    'metaDataValuesFilter'?: Array<string>;
    'nicknameStartsWithFilter'?: string;
    'userIdsFilter'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hasNext",
            "baseName": "hasNext",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isLoading",
            "baseName": "isLoading",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "metaDataKeyFilter",
            "baseName": "metaDataKeyFilter",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaDataValuesFilter",
            "baseName": "metaDataValuesFilter",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nicknameStartsWithFilter",
            "baseName": "nicknameStartsWithFilter",
            "type": "string",
            "format": ""
        },
        {
            "name": "userIdsFilter",
            "baseName": "userIdsFilter",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdApplicationUserListQuery.attributeTypeMap;
    }

    public constructor() {
    }
}
