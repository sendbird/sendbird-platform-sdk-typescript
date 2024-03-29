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

export class RegisterGdprRequestData {
    /**
    * Determines the type of a GDPR request. Acceptable values are limited to access and delete. If set to access, Sendbird server generates a downloadable zip file containing the data of the specified user with the user_id property to comply with GDPR's [right to access](https://gdpr-info.eu/art-15-gdpr/) of the data subject. If set to delete, the specified users with the user_ids property will be permanently deleted from your Sendbird application to comply with GDPR's [right to erasure](https://gdpr-info.eu/art-17-gdpr/) of the data subject. (Default: delete)
    */
    'action': string;
    /**
    * Specifies an array of the IDs of the users to delete in order to meet the GDPR's requirements. The maximum number of users to be processed at once is 100. This should be specified when the value of the action property is delete.
    */
    'userIds': Array<string>;
    /**
    * Determines the scope of group channels to delete in addition to deleting the specified users with the user_ids property. Acceptable values are limited to the following:<br />- do_not_delete (default): the users will be deleted but their joined group channels will remain.<br />- 1_on_1: only 1-on-1 group channels of the users will be deleted. (This option can be useful when eliminating spam users) <br />- all: all joined group channels of the users will be deleted.<br /><br /> This only works when the value of the action property is delete.
    */
    'channelDeleteOption': string;
    /**
    * Specifies the ID of the user to meet the GDPR's requirements.
    */
    'userId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "userIds",
            "baseName": "user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "channelDeleteOption",
            "baseName": "channel_delete_option",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RegisterGdprRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}

