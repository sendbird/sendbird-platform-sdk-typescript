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

export class V3PollsGetRequest {
    /**
    * Specifies the title of a poll. The length is limited to 2,048 characters.
    */
    'title'?: string;
    /**
    * Specifies an array of poll options that a user can vote for. At least one option should be provided, and the length of each option is limited to 2,000 characters.
    */
    'options'?: Array<string>;
    /**
    * Determines whether to allow users other than the creator of the poll to add new options to the poll. (Default is false)
    */
    'allowUserSuggestion'?: boolean;
    /**
    * Determines whether to allow users to vote for multiple options. (Default is false)
    */
    'allowMultipleVotes'?: boolean;
    /**
    * Specifies when the poll closes and no longer accepts votes in Unix seconds. If the value of this property is -1, the poll is open indefinitely.
    */
    'closeAt'?: number;
    /**
    * Specifies the unique ID of the user who creates the poll.
    */
    'createdBy'?: string;
    /**
    * Specifies a JSON object of one or more key-value items to store additional poll information.
    */
    'data'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "allowUserSuggestion",
            "baseName": "allow_user_suggestion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowMultipleVotes",
            "baseName": "allow_multiple_votes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "closeAt",
            "baseName": "close_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V3PollsGetRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

