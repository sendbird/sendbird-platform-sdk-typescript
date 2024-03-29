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

export class AddApnsPushConfigurationData {
    /**
    * In a form of the `multipart/form-data` content type, specifies a [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file of which type is either development or production. Sendbird server scans the content of the file, finds out the certificate type, and then registers the file as the corresponding type. If you upload a wrong file, you will receive an error.
    */
    'apnsCert': HttpFile;
    /**
    * Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. There is no need to specify this property when the apns_cert above is specified.
    */
    'apnsCertEnvType': string;
    /**
    * Specifies the password of the cerfificate file which has been set during the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) export.
    */
    'apnsCertPassword': string;
    /**
    * Determines whether to badge your client app's icon with the number of a user's unread messages. (Default: true)
    */
    'hasUnreadCountBadge': boolean;
    /**
    * Determines for your client app whether to perform a silent background update on a user's device. For more information, see the Apple Developer Documentation's [Pushing Updates to Your App Silently](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_updates_to_your_app_silently). (Default: false)
    */
    'contentAvailable': boolean;
    /**
    * Determines for your client app whether or not to modify the payload of a push notification before it is displayed on a user's device. For more information, see the Apple Developer Documentation's [Modifying Content in Newly Delivered Notifications](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications). (Default: false)
    */
    'mutableContent': boolean;
    /**
    * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file can be in the app's main bundle or in the `Library/Sounds` folder of the app's data container.
    */
    'pushSound': string;
    /**
    * (Deprecated)  Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. You should specify either this property or the apns_cert above to inform the server of which certificate type to update.
    */
    'apnsType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apnsCert",
            "baseName": "apns_cert",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "apnsCertEnvType",
            "baseName": "apns_cert_env_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "apnsCertPassword",
            "baseName": "apns_cert_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasUnreadCountBadge",
            "baseName": "has_unread_count_badge",
            "type": "boolean",
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
        },
        {
            "name": "apnsType",
            "baseName": "apns_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddApnsPushConfigurationData.attributeTypeMap;
    }

    public constructor() {
    }
}

