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

export class UpdateHmsPushConfigurationByIdData {
    /**
    * Specifies the provider ID of the push configuration to update.
    */
    'providerId': string;
    /**
    * Specifies the unique ID of application for HMS to update.
    */
    'huaweiAppId': string;
    /**
    * Specifies the secret key of the application to update.
    */
    'huaweiAppSecret': string;
    /**
    * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
    */
    'pushSound': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providerId",
            "baseName": "provider_id",
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
        return UpdateHmsPushConfigurationByIdData.attributeTypeMap;
    }

    public constructor() {
    }
}

