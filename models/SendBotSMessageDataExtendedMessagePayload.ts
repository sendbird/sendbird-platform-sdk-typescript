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

/**
* Specifies the extended message payload which is used to send a message with a custom message type.
*/
export class SendBotSMessageDataExtendedMessagePayload {
    /**
    * Specifies an array of suggested replies to be sent with the message.
    */
    'suggestedReplies'?: Array<string>;
    /**
    * JSON format you want to embed in message, eq : {\"title\": \"title\", \"image\": \"https://link.to/image.jpg\"}
    */
    'customView'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "suggestedReplies",
            "baseName": "suggested_replies",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customView",
            "baseName": "custom_view",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBotSMessageDataExtendedMessagePayload.attributeTypeMap;
    }

    public constructor() {
    }
}

