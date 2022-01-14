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

export class SendBirdMessageCollectionInitPolicy {
    'CACHE_AND_REPLACE_BY_API'?: SendBirdMessageCollectionInitPolicyCACHEANDREPLACEBYAPIEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "CACHE_AND_REPLACE_BY_API",
            "baseName": "CACHE_AND_REPLACE_BY_API",
            "type": "SendBirdMessageCollectionInitPolicyCACHEANDREPLACEBYAPIEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdMessageCollectionInitPolicy.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdMessageCollectionInitPolicyCACHEANDREPLACEBYAPIEnum = "cache_and_replace_by_api" ;
