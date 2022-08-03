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

import { SetDomainFilterDataDomainFilter } from './SetDomainFilterDataDomainFilter';
import { SetDomainFilterDataImageModeration } from './SetDomainFilterDataImageModeration';
import { SetDomainFilterDataProfanityFilter } from './SetDomainFilterDataProfanityFilter';
import { SetDomainFilterDataProfanityTriggeredModeration } from './SetDomainFilterDataProfanityTriggeredModeration';
import { HttpFile } from '../http/http';

export class SetDomainFilterData {
    'domainFilter'?: SetDomainFilterDataDomainFilter;
    'profanityFilter'?: SetDomainFilterDataProfanityFilter;
    'profanityTriggeredModeration'?: SetDomainFilterDataProfanityTriggeredModeration;
    'imageModeration'?: SetDomainFilterDataImageModeration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainFilter",
            "baseName": "domain_filter",
            "type": "SetDomainFilterDataDomainFilter",
            "format": ""
        },
        {
            "name": "profanityFilter",
            "baseName": "profanity_filter",
            "type": "SetDomainFilterDataProfanityFilter",
            "format": ""
        },
        {
            "name": "profanityTriggeredModeration",
            "baseName": "profanity_triggered_moderation",
            "type": "SetDomainFilterDataProfanityTriggeredModeration",
            "format": ""
        },
        {
            "name": "imageModeration",
            "baseName": "image_moderation",
            "type": "SetDomainFilterDataImageModeration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetDomainFilterData.attributeTypeMap;
    }

    public constructor() {
    }
}

