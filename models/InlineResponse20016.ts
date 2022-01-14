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

import { InlineResponse20016PushMessageTemplates } from './InlineResponse20016PushMessageTemplates';
import { HttpFile } from '../http/http';

export class InlineResponse20016 {
    'pushMessageTemplates'?: Array<InlineResponse20016PushMessageTemplates>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pushMessageTemplates",
            "baseName": "push_message_templates",
            "type": "Array<InlineResponse20016PushMessageTemplates>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20016.attributeTypeMap;
    }

    public constructor() {
    }
}
