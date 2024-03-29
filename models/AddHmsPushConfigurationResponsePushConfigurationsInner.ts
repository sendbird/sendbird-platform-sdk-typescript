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

export class AddHmsPushConfigurationResponsePushConfigurationsInner {
    'id'?: string;
    'pushType'?: string;
    'huaweiAppId'?: string;
    'huaweiAppSecret'?: string;
    'pushSound'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushType",
            "baseName": "push_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiAppId",
            "baseName": "huawei_app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "huaweiAppSecret",
            "baseName": "huawei_app_secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddHmsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

