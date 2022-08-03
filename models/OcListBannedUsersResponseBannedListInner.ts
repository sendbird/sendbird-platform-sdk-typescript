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

import { SendBirdUser } from './SendBirdUser';
import { HttpFile } from '../http/http';

export class OcListBannedUsersResponseBannedListInner {
    'user'?: SendBirdUser;
    'startAt'?: number;
    'endAt'?: number;
    'description'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "SendBirdUser",
            "format": ""
        },
        {
            "name": "startAt",
            "baseName": "start_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "endAt",
            "baseName": "end_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OcListBannedUsersResponseBannedListInner.attributeTypeMap;
    }

    public constructor() {
    }
}

