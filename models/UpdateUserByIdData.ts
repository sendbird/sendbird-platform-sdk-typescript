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

export class UpdateUserByIdData {
    /**
    * Specifies the unique ID of the user to update.
    */
    'userId': string;
    /**
    * Specifies the user's nickname. The length is limited to 80 characters.
    */
    'nickname'?: string;
    /**
    * Specifies the URL of the user's profile image. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
    */
    'profileUrl'?: string;
    /**
    * Uploads the file of the user's profile image. An acceptable image is limited to `JPG` (.jpg), `JPEG` (.jpeg), or `PNG` (.png) file of up to 25 MB.
    */
    'profileFile'?: HttpFile;
    /**
    * Determines whether to revoke the existing access token and create a new one for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false)
    */
    'issueAccessToken'?: boolean;
    /**
    * Determines whether to add a new session token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, a session token is not required when the user logs in. (Default: false)
    */
    'issueSessionToken'?: boolean;
    /**
    * Specifies the time for the issued session token to expire in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The length should be 13. If not specified and the issue_session_token property above is true, the value of this property is set to the sum of the current timestamp and 604800000 by default, which indicates that the token will be valid for the next 7 days starting from the current timestamp.
    */
    'sessionTokenExpiresAt'?: number;
    /**
    * Determines whether to activate or deactivate the user within the application.
    */
    'isActive'?: boolean;
    /**
    * Specifies the time when the user goes offline, to indicate when they were last online, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
    */
    'lastSeenAt'?: number;
    /**
    * Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users.
    */
    'discoveryKeys'?: Array<string>;
    /**
    * Specifies an array of one or more [language codes](/docs/chat/v3/platform-api/guides/miscellaneous#2-language-codes-for-auto-translation) to translate notification messages to preferred languages. Up to 4 languages can be set for the user. If messages are sent in one of the preferred languages, notification messages won't be translated. If messages are sent in a language other than the preferred languages, notification messages will be translated into the first language in the array. In addition, the messages translated into other preferred languages will be provided in the `sendbird` property of a notification message payload.
    */
    'preferredLanguages'?: Array<string>;
    /**
    * Determines whether the user leaves all joined group channels upon deactivation. Note that this value is true by default. Use in conjunction with the is_active property above.
    */
    'leaveAllWhenDeactivated'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileUrl",
            "baseName": "profile_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileFile",
            "baseName": "profile_file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "issueAccessToken",
            "baseName": "issue_access_token",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "issueSessionToken",
            "baseName": "issue_session_token",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sessionTokenExpiresAt",
            "baseName": "session_token_expires_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastSeenAt",
            "baseName": "last_seen_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "discoveryKeys",
            "baseName": "discovery_keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "preferredLanguages",
            "baseName": "preferred_languages",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "leaveAllWhenDeactivated",
            "baseName": "leave_all_when_deactivated",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserByIdData.attributeTypeMap;
    }

    public constructor() {
    }
}

