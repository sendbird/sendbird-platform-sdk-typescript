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

export class AddApnsPushConfigurationResponsePushConfigurationsInner {
    'id'?: string;
    'pushType'?: string;
    'createdAt'?: number;
    'apnsCerEnvType'?: string;
    'apnsExpiration'?: number;
    'apnsName'?: string;
    'hasUnreadCountBadge'?: number;
    'contentAvailable'?: boolean;
    'mutableContent'?: boolean;
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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "apnsCerEnvType",
            "baseName": "apns_cer_env_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsExpiration",
            "baseName": "apns_expiration",
            "type": "number",
            "format": ""
        },
        {
            "name": "apnsName",
            "baseName": "apns_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasUnreadCountBadge",
            "baseName": "has_unread_count_badge",
            "type": "number",
            "format": ""
        },
        {
            "name": "contentAvailable",
            "baseName": "content_available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mutableContent",
            "baseName": "mutable_content",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pushSound",
            "baseName": "push_sound",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddApnsPushConfigurationResponsePushConfigurationsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

