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

export class CreateABotResponseBot {
    'aiAgentType'?: string;
    'botMetadata'?: any;
    'botNickname'?: string;
    'botProfileUrl'?: string;
    'botRequireAuthForProfileImage'?: boolean;
    'botToken'?: string;
    'botType'?: string;
    'botUserid': string;
    'feedback'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aiAgentType",
            "baseName": "ai_agent_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "botMetadata",
            "baseName": "bot_metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "botNickname",
            "baseName": "bot_nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "botProfileUrl",
            "baseName": "bot_profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "botRequireAuthForProfileImage",
            "baseName": "bot_require_auth_for_profile_image",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "botToken",
            "baseName": "bot_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "botType",
            "baseName": "bot_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "botUserid",
            "baseName": "bot_userid",
            "type": "string",
            "format": ""
        },
        {
            "name": "feedback",
            "baseName": "feedback",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateABotResponseBot.attributeTypeMap;
    }

    public constructor() {
    }
}

