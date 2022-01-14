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

import { SendBirdPoll } from './SendBirdPoll';
import { HttpFile } from '../http/http';

export class SendBirdPollUpdateEvent {
    'poll'?: SendBirdPoll;
    'status'?: SendBirdPollUpdateEventStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "poll",
            "baseName": "poll",
            "type": "SendBirdPoll",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SendBirdPollUpdateEventStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendBirdPollUpdateEvent.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SendBirdPollUpdateEventStatusEnum = "closed" | "open" | "removed" ;
