/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ChooseAPushNotificationContentTemplateRequest {
    /**
    * Specifies the name of a template used for notifications. Acceptable values are default and alternative. (Default: default)
    */
    'name': ChooseAPushNotificationContentTemplateRequestNameEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "ChooseAPushNotificationContentTemplateRequestNameEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChooseAPushNotificationContentTemplateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ChooseAPushNotificationContentTemplateRequestNameEnum = "default" | "alternative" ;

