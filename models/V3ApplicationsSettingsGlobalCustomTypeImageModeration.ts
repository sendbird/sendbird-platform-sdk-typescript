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

import { V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits } from './V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits';
import { HttpFile } from '../http/http';

export class V3ApplicationsSettingsGlobalCustomTypeImageModeration {
    'type'?: number;
    'softBlock'?: boolean;
    'limits'?: V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits;
    'checkUrls'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "number",
            "format": ""
        },
        {
            "name": "softBlock",
            "baseName": "soft_block",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits",
            "format": ""
        },
        {
            "name": "checkUrls",
            "baseName": "check_urls",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V3ApplicationsSettingsGlobalCustomTypeImageModeration.attributeTypeMap;
    }

    public constructor() {
    }
}
