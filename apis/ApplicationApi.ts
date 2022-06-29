// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { AddApnsPushConfigurationData } from '../models/AddApnsPushConfigurationData';
import { AddApnsPushConfigurationResponse } from '../models/AddApnsPushConfigurationResponse';
import { AddFcmPushConfigurationData } from '../models/AddFcmPushConfigurationData';
import { AddFcmPushConfigurationResponse } from '../models/AddFcmPushConfigurationResponse';
import { AddHmsPushConfigurationData } from '../models/AddHmsPushConfigurationData';
import { AddHmsPushConfigurationResponse } from '../models/AddHmsPushConfigurationResponse';
import { AddIpToWhitelistData } from '../models/AddIpToWhitelistData';
import { AddIpToWhitelistResponse } from '../models/AddIpToWhitelistResponse';
import { BanUsersInChannelsWithCustomChannelTypeData } from '../models/BanUsersInChannelsWithCustomChannelTypeData';
import { CustomTypeListBannedUsersResponse } from '../models/CustomTypeListBannedUsersResponse';
import { DeleteAllowedIpsFromWhitelistResponse } from '../models/DeleteAllowedIpsFromWhitelistResponse';
import { DeleteApnsCertificateByIdResponse } from '../models/DeleteApnsCertificateByIdResponse';
import { GenerateSecondaryApiTokenData } from '../models/GenerateSecondaryApiTokenData';
import { GenerateSecondaryApiTokenResponse } from '../models/GenerateSecondaryApiTokenResponse';
import { InlineResponse200 } from '../models/InlineResponse200';
import { ListPushConfigurationsResponse } from '../models/ListPushConfigurationsResponse';
import { ListPushNotificationContentTemplatesResponse } from '../models/ListPushNotificationContentTemplatesResponse';
import { ListSecondaryApiTokensResponse } from '../models/ListSecondaryApiTokensResponse';
import { MuteUsersInChannelsWithCustomChannelTypeData } from '../models/MuteUsersInChannelsWithCustomChannelTypeData';
import { RemovePushConfigurationByIdResponse } from '../models/RemovePushConfigurationByIdResponse';
import { RetrieveIpWhitelistResponse } from '../models/RetrieveIpWhitelistResponse';
import { RevokeSecondaryApiTokenByTokenResponse } from '../models/RevokeSecondaryApiTokenByTokenResponse';
import { SendBirdChannelResponse } from '../models/SendBirdChannelResponse';
import { SetDomainFilterData } from '../models/SetDomainFilterData';
import { UpdateApnsPushConfigurationByIdData } from '../models/UpdateApnsPushConfigurationByIdData';
import { UpdateApnsPushConfigurationByIdResponse } from '../models/UpdateApnsPushConfigurationByIdResponse';
import { UpdateDefaultChannelInvitationPreferenceData } from '../models/UpdateDefaultChannelInvitationPreferenceData';
import { UpdateDefaultChannelInvitationPreferenceResponse } from '../models/UpdateDefaultChannelInvitationPreferenceResponse';
import { UpdateFcmPushConfigurationByIdData } from '../models/UpdateFcmPushConfigurationByIdData';
import { UpdateFcmPushConfigurationByIdResponse } from '../models/UpdateFcmPushConfigurationByIdResponse';
import { UpdateHmsPushConfigurationByIdData } from '../models/UpdateHmsPushConfigurationByIdData';
import { UpdateHmsPushConfigurationByIdResponse } from '../models/UpdateHmsPushConfigurationByIdResponse';
import { UpdatePushNotificationContentTemplateData } from '../models/UpdatePushNotificationContentTemplateData';
import { UpdatePushNotificationContentTemplateResponse } from '../models/UpdatePushNotificationContentTemplateResponse';
import { ViewDefaultChannelInvitationPreferenceResponse } from '../models/ViewDefaultChannelInvitationPreferenceResponse';
import { ViewPushConfigurationByIdResponse } from '../models/ViewPushConfigurationByIdResponse';
import { ViewPushNotificationContentTemplateResponse } from '../models/ViewPushNotificationContentTemplateResponse';
import { ViewSecondaryApiTokenByTokenResponse } from '../models/ViewSecondaryApiTokenByTokenResponse';

/**
 * no description
 */
export class ApplicationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
     * Add an APNs push configuration
     * @param apiToken 
     * @param addApnsPushConfigurationData 
     */
    public async addApnsPushConfiguration(apiToken: string, addApnsPushConfigurationData?: AddApnsPushConfigurationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "addApnsPushConfiguration", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/apns';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addApnsPushConfigurationData, "AddApnsPushConfigurationData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * Add a FCM push configuration
     * @param apiToken 
     * @param addFcmPushConfigurationData 
     */
    public async addFcmPushConfiguration(apiToken: string, addFcmPushConfigurationData?: AddFcmPushConfigurationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "addFcmPushConfiguration", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/fcm';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addFcmPushConfigurationData, "AddFcmPushConfigurationData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * Add an HMS push configuration
     * @param apiToken 
     * @param addHmsPushConfigurationData 
     */
    public async addHmsPushConfiguration(apiToken: string, addHmsPushConfigurationData?: AddHmsPushConfigurationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "addHmsPushConfiguration", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/hms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addHmsPushConfigurationData, "AddHmsPushConfigurationData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * Add an IP to a whitelist
     * @param apiToken 
     * @param addIpToWhitelistData 
     */
    public async addIpToWhitelist(apiToken: string, addIpToWhitelistData?: AddIpToWhitelistData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "addIpToWhitelist", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/settings/ip_whitelist';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addIpToWhitelistData, "AddIpToWhitelistData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Ban specified users in channels with a custom channel type at once.
     * Ban users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param banUsersInChannelsWithCustomChannelTypeData 
     */
    public async banUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, banUsersInChannelsWithCustomChannelTypeData?: BanUsersInChannelsWithCustomChannelTypeData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "banUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "banUsersInChannelsWithCustomChannelType", "customType");
        }



        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/ban'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(banUsersInChannelsWithCustomChannelTypeData, "BanUsersInChannelsWithCustomChannelTypeData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * Delete allowed IPs from a whitelist
     * @param apiToken 
     * @param ipWhitelistAddresses 
     */
    public async deleteAllowedIpsFromWhitelist(apiToken: string, ipWhitelistAddresses: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "deleteAllowedIpsFromWhitelist", "apiToken");
        }


        // verify required parameter 'ipWhitelistAddresses' is not null or undefined
        if (ipWhitelistAddresses === null || ipWhitelistAddresses === undefined) {
            throw new RequiredError("ApplicationApi", "deleteAllowedIpsFromWhitelist", "ipWhitelistAddresses");
        }


        // Path Params
        const localVarPath = '/v3/applications/settings/ip_whitelist';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ipWhitelistAddresses !== undefined) {
            requestContext.setQueryParam("ip_whitelist_addresses", ObjectSerializer.serialize(ipWhitelistAddresses, "Array<string>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * Delete an APNs certificate
     * @param apiToken 
     * @param providerId 
     */
    public async deleteApnsCertificateById(apiToken: string, providerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "deleteApnsCertificateById", "apiToken");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "deleteApnsCertificateById", "providerId");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/apns/cert/{provider_id}'
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * Generate a secondary API token
     * @param apiToken 
     * @param generateSecondaryApiTokenData 
     */
    public async generateSecondaryApiToken(apiToken: string, generateSecondaryApiTokenData?: GenerateSecondaryApiTokenData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "generateSecondaryApiToken", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/api_tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateSecondaryApiTokenData, "GenerateSecondaryApiTokenData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Retrieves a list of users banned from channels with the specified custom channel type.
     * List banned users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param token 
     * @param limit 
     */
    public async listBannedUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "listBannedUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "listBannedUsersInChannelsWithCustomChannelType", "customType");
        }




        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/ban'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Retrieves a list of the muted users in channels with a custom channel type.
     * List muted users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param token 
     * @param limit 
     */
    public async listMutedUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "listMutedUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "listMutedUsersInChannelsWithCustomChannelType", "customType");
        }




        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/mute'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * List push configurations
     * @param apiToken 
     * @param pushType 
     */
    public async listPushConfigurations(apiToken: string, pushType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "listPushConfigurations", "apiToken");
        }


        // verify required parameter 'pushType' is not null or undefined
        if (pushType === null || pushType === undefined) {
            throw new RequiredError("ApplicationApi", "listPushConfigurations", "pushType");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/{push_type}'
            .replace('{' + 'push_type' + '}', encodeURIComponent(String(pushType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * List push notification content templates
     * @param apiToken 
     */
    public async listPushNotificationContentTemplates(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "listPushNotificationContentTemplates", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/message_templates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * List secondary API tokens
     * @param apiToken 
     */
    public async listSecondaryApiTokens(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "listSecondaryApiTokens", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/applications/api_tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Mutes specified users in channels with a custom channel type at once.
     * Mute users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param muteUsersInChannelsWithCustomChannelTypeData 
     */
    public async muteUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, muteUsersInChannelsWithCustomChannelTypeData?: MuteUsersInChannelsWithCustomChannelTypeData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "muteUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "muteUsersInChannelsWithCustomChannelType", "customType");
        }



        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/mute'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(muteUsersInChannelsWithCustomChannelTypeData, "MuteUsersInChannelsWithCustomChannelTypeData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * Remove a push configuration
     * @param apiToken 
     * @param pushType 
     * @param providerId 
     */
    public async removePushConfigurationById(apiToken: string, pushType: string, providerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "removePushConfigurationById", "apiToken");
        }


        // verify required parameter 'pushType' is not null or undefined
        if (pushType === null || pushType === undefined) {
            throw new RequiredError("ApplicationApi", "removePushConfigurationById", "pushType");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "removePushConfigurationById", "providerId");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/{push_type}/{provider_id}'
            .replace('{' + 'push_type' + '}', encodeURIComponent(String(pushType)))
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * Retrieve an IP whitelist
     * @param apiToken 
     */
    public async retrieveIpWhitelist(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "retrieveIpWhitelist", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/applications/settings/ip_whitelist';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * Revoke a secondary API token
     * @param apiToken 
     * @param apiToken2 
     */
    public async revokeSecondaryApiTokenByToken(apiToken: string, apiToken2: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "revokeSecondaryApiTokenByToken", "apiToken");
        }


        // verify required parameter 'apiToken2' is not null or undefined
        if (apiToken2 === null || apiToken2 === undefined) {
            throw new RequiredError("ApplicationApi", "revokeSecondaryApiTokenByToken", "apiToken2");
        }


        // Path Params
        const localVarPath = '/v3/applications/api_tokens/{api_token}'
            .replace('{' + 'api_token' + '}', encodeURIComponent(String(apiToken2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## 
     * Message moderation
     * @param apiToken 
     * @param customType 
     * @param setDomainFilterData 
     */
    public async setDomainFilter(apiToken: string, customType: string, setDomainFilterData?: SetDomainFilterData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "setDomainFilter", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "setDomainFilter", "customType");
        }



        // Path Params
        const localVarPath = '/v3/applications/settings_global/{custom_type}'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(setDomainFilterData, "SetDomainFilterData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Unban specified users in channels with a custom channel type at once.
     * Unban users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param userIds 
     */
    public async unbanUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, userIds: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "unbanUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "unbanUsersInChannelsWithCustomChannelType", "customType");
        }


        // verify required parameter 'userIds' is not null or undefined
        if (userIds === null || userIds === undefined) {
            throw new RequiredError("ApplicationApi", "unbanUsersInChannelsWithCustomChannelType", "userIds");
        }


        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/ban'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "Array<string>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Unmute specified users in channels with a custom channel type at once.
     * Unmute users in channels with a custom channel type
     * @param apiToken 
     * @param customType 
     * @param userIds 
     */
    public async unmuteUsersInChannelsWithCustomChannelType(apiToken: string, customType: string, userIds: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "unmuteUsersInChannelsWithCustomChannelType", "apiToken");
        }


        // verify required parameter 'customType' is not null or undefined
        if (customType === null || customType === undefined) {
            throw new RequiredError("ApplicationApi", "unmuteUsersInChannelsWithCustomChannelType", "customType");
        }


        // verify required parameter 'userIds' is not null or undefined
        if (userIds === null || userIds === undefined) {
            throw new RequiredError("ApplicationApi", "unmuteUsersInChannelsWithCustomChannelType", "userIds");
        }


        // Path Params
        const localVarPath = '/v3/applications/settings_by_channel_custom_type/{custom_type}/mute'
            .replace('{' + 'custom_type' + '}', encodeURIComponent(String(customType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("user_ids", ObjectSerializer.serialize(userIds, "Array<string>", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * Update an APNs push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateApnsPushConfigurationByIdData 
     */
    public async updateApnsPushConfigurationById(apiToken: string, providerId: string, updateApnsPushConfigurationByIdData?: UpdateApnsPushConfigurationByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "updateApnsPushConfigurationById", "apiToken");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "updateApnsPushConfigurationById", "providerId");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/apns/{provider_id}'
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateApnsPushConfigurationByIdData, "UpdateApnsPushConfigurationByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * Update default channel invitation preference
     * @param apiToken 
     * @param updateDefaultChannelInvitationPreferenceData 
     */
    public async updateDefaultChannelInvitationPreference(apiToken: string, updateDefaultChannelInvitationPreferenceData?: UpdateDefaultChannelInvitationPreferenceData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "updateDefaultChannelInvitationPreference", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/applications/default_channel_invitation_preference';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDefaultChannelInvitationPreferenceData, "UpdateDefaultChannelInvitationPreferenceData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * Update a FCM push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateFcmPushConfigurationByIdData 
     */
    public async updateFcmPushConfigurationById(apiToken: string, providerId: string, updateFcmPushConfigurationByIdData?: UpdateFcmPushConfigurationByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "updateFcmPushConfigurationById", "apiToken");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "updateFcmPushConfigurationById", "providerId");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/fcm/{provider_id}'
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateFcmPushConfigurationByIdData, "UpdateFcmPushConfigurationByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * Update an HMS push configuration
     * @param apiToken 
     * @param providerId 
     * @param updateHmsPushConfigurationByIdData 
     */
    public async updateHmsPushConfigurationById(apiToken: string, providerId: string, updateHmsPushConfigurationByIdData?: UpdateHmsPushConfigurationByIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "updateHmsPushConfigurationById", "apiToken");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "updateHmsPushConfigurationById", "providerId");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/hms/{provider_id}'
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateHmsPushConfigurationByIdData, "UpdateHmsPushConfigurationByIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * Update a push notification content template
     * @param apiToken 
     * @param templateName 
     * @param updatePushNotificationContentTemplateData 
     */
    public async updatePushNotificationContentTemplate(apiToken: string, templateName: string, updatePushNotificationContentTemplateData?: UpdatePushNotificationContentTemplateData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "updatePushNotificationContentTemplate", "apiToken");
        }


        // verify required parameter 'templateName' is not null or undefined
        if (templateName === null || templateName === undefined) {
            throw new RequiredError("ApplicationApi", "updatePushNotificationContentTemplate", "templateName");
        }



        // Path Params
        const localVarPath = '/v3/applications/push/message_templates/{template_name}'
            .replace('{' + 'template_name' + '}', encodeURIComponent(String(templateName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePushNotificationContentTemplateData, "UpdatePushNotificationContentTemplateData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * View default channel invitation preference
     * @param apiToken 
     */
    public async viewDefaultChannelInvitationPreference(apiToken: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "viewDefaultChannelInvitationPreference", "apiToken");
        }


        // Path Params
        const localVarPath = '/v3/applications/default_channel_invitation_preference';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * View a push configuration
     * @param apiToken 
     * @param pushType 
     * @param providerId 
     */
    public async viewPushConfigurationById(apiToken: string, pushType: string, providerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "viewPushConfigurationById", "apiToken");
        }


        // verify required parameter 'pushType' is not null or undefined
        if (pushType === null || pushType === undefined) {
            throw new RequiredError("ApplicationApi", "viewPushConfigurationById", "pushType");
        }


        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError("ApplicationApi", "viewPushConfigurationById", "providerId");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/{push_type}/{provider_id}'
            .replace('{' + 'push_type' + '}', encodeURIComponent(String(pushType)))
            .replace('{' + 'provider_id' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * View a push notification content template
     * @param apiToken 
     * @param templateName 
     */
    public async viewPushNotificationContentTemplate(apiToken: string, templateName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "viewPushNotificationContentTemplate", "apiToken");
        }


        // verify required parameter 'templateName' is not null or undefined
        if (templateName === null || templateName === undefined) {
            throw new RequiredError("ApplicationApi", "viewPushNotificationContentTemplate", "templateName");
        }


        // Path Params
        const localVarPath = '/v3/applications/push/message_templates/{template_name}'
            .replace('{' + 'template_name' + '}', encodeURIComponent(String(templateName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * View a secondary API token
     * @param apiToken 
     * @param apiToken2 
     */
    public async viewSecondaryApiTokenByToken(apiToken: string, apiToken2: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("ApplicationApi", "viewSecondaryApiTokenByToken", "apiToken");
        }


        // verify required parameter 'apiToken2' is not null or undefined
        if (apiToken2 === null || apiToken2 === undefined) {
            throw new RequiredError("ApplicationApi", "viewSecondaryApiTokenByToken", "apiToken2");
        }


        // Path Params
        const localVarPath = '/v3/applications/api_tokens/{api_token}'
            .replace('{' + 'api_token' + '}', encodeURIComponent(String(apiToken2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class ApplicationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addApnsPushConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addApnsPushConfiguration(response: ResponseContext): Promise<AddApnsPushConfigurationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddApnsPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddApnsPushConfigurationResponse", ""
            ) as AddApnsPushConfigurationResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddApnsPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddApnsPushConfigurationResponse", ""
            ) as AddApnsPushConfigurationResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addFcmPushConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addFcmPushConfiguration(response: ResponseContext): Promise<AddFcmPushConfigurationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddFcmPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddFcmPushConfigurationResponse", ""
            ) as AddFcmPushConfigurationResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddFcmPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddFcmPushConfigurationResponse", ""
            ) as AddFcmPushConfigurationResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addHmsPushConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addHmsPushConfiguration(response: ResponseContext): Promise<AddHmsPushConfigurationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddHmsPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddHmsPushConfigurationResponse", ""
            ) as AddHmsPushConfigurationResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddHmsPushConfigurationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddHmsPushConfigurationResponse", ""
            ) as AddHmsPushConfigurationResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addIpToWhitelist
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addIpToWhitelist(response: ResponseContext): Promise<AddIpToWhitelistResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddIpToWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddIpToWhitelistResponse", ""
            ) as AddIpToWhitelistResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddIpToWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddIpToWhitelistResponse", ""
            ) as AddIpToWhitelistResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to banUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async banUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllowedIpsFromWhitelist
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllowedIpsFromWhitelist(response: ResponseContext): Promise<DeleteAllowedIpsFromWhitelistResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteAllowedIpsFromWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteAllowedIpsFromWhitelistResponse", ""
            ) as DeleteAllowedIpsFromWhitelistResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteAllowedIpsFromWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteAllowedIpsFromWhitelistResponse", ""
            ) as DeleteAllowedIpsFromWhitelistResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApnsCertificateById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApnsCertificateById(response: ResponseContext): Promise<DeleteApnsCertificateByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteApnsCertificateByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteApnsCertificateByIdResponse", ""
            ) as DeleteApnsCertificateByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteApnsCertificateByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteApnsCertificateByIdResponse", ""
            ) as DeleteApnsCertificateByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateSecondaryApiToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateSecondaryApiToken(response: ResponseContext): Promise<GenerateSecondaryApiTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateSecondaryApiTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateSecondaryApiTokenResponse", ""
            ) as GenerateSecondaryApiTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateSecondaryApiTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateSecondaryApiTokenResponse", ""
            ) as GenerateSecondaryApiTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBannedUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBannedUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<CustomTypeListBannedUsersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomTypeListBannedUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomTypeListBannedUsersResponse", ""
            ) as CustomTypeListBannedUsersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomTypeListBannedUsersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomTypeListBannedUsersResponse", ""
            ) as CustomTypeListBannedUsersResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMutedUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMutedUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPushConfigurations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPushConfigurations(response: ResponseContext): Promise<ListPushConfigurationsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPushConfigurationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPushConfigurationsResponse", ""
            ) as ListPushConfigurationsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPushConfigurationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPushConfigurationsResponse", ""
            ) as ListPushConfigurationsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPushNotificationContentTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPushNotificationContentTemplates(response: ResponseContext): Promise<ListPushNotificationContentTemplatesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPushNotificationContentTemplatesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPushNotificationContentTemplatesResponse", ""
            ) as ListPushNotificationContentTemplatesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPushNotificationContentTemplatesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPushNotificationContentTemplatesResponse", ""
            ) as ListPushNotificationContentTemplatesResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSecondaryApiTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSecondaryApiTokens(response: ResponseContext): Promise<ListSecondaryApiTokensResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSecondaryApiTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSecondaryApiTokensResponse", ""
            ) as ListSecondaryApiTokensResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListSecondaryApiTokensResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSecondaryApiTokensResponse", ""
            ) as ListSecondaryApiTokensResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to muteUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async muteUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removePushConfigurationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removePushConfigurationById(response: ResponseContext): Promise<RemovePushConfigurationByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RemovePushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemovePushConfigurationByIdResponse", ""
            ) as RemovePushConfigurationByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RemovePushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RemovePushConfigurationByIdResponse", ""
            ) as RemovePushConfigurationByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveIpWhitelist
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveIpWhitelist(response: ResponseContext): Promise<RetrieveIpWhitelistResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveIpWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveIpWhitelistResponse", ""
            ) as RetrieveIpWhitelistResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveIpWhitelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveIpWhitelistResponse", ""
            ) as RetrieveIpWhitelistResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeSecondaryApiTokenByToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeSecondaryApiTokenByToken(response: ResponseContext): Promise<RevokeSecondaryApiTokenByTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RevokeSecondaryApiTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RevokeSecondaryApiTokenByTokenResponse", ""
            ) as RevokeSecondaryApiTokenByTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RevokeSecondaryApiTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RevokeSecondaryApiTokenByTokenResponse", ""
            ) as RevokeSecondaryApiTokenByTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setDomainFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setDomainFilter(response: ResponseContext): Promise<SendBirdChannelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendBirdChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdChannelResponse", ""
            ) as SendBirdChannelResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendBirdChannelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendBirdChannelResponse", ""
            ) as SendBirdChannelResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unbanUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unbanUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unmuteUsersInChannelsWithCustomChannelType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unmuteUsersInChannelsWithCustomChannelType(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApnsPushConfigurationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApnsPushConfigurationById(response: ResponseContext): Promise<UpdateApnsPushConfigurationByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateApnsPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateApnsPushConfigurationByIdResponse", ""
            ) as UpdateApnsPushConfigurationByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateApnsPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateApnsPushConfigurationByIdResponse", ""
            ) as UpdateApnsPushConfigurationByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDefaultChannelInvitationPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDefaultChannelInvitationPreference(response: ResponseContext): Promise<UpdateDefaultChannelInvitationPreferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateDefaultChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateDefaultChannelInvitationPreferenceResponse", ""
            ) as UpdateDefaultChannelInvitationPreferenceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateDefaultChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateDefaultChannelInvitationPreferenceResponse", ""
            ) as UpdateDefaultChannelInvitationPreferenceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFcmPushConfigurationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFcmPushConfigurationById(response: ResponseContext): Promise<UpdateFcmPushConfigurationByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateFcmPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateFcmPushConfigurationByIdResponse", ""
            ) as UpdateFcmPushConfigurationByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateFcmPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateFcmPushConfigurationByIdResponse", ""
            ) as UpdateFcmPushConfigurationByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateHmsPushConfigurationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateHmsPushConfigurationById(response: ResponseContext): Promise<UpdateHmsPushConfigurationByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateHmsPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHmsPushConfigurationByIdResponse", ""
            ) as UpdateHmsPushConfigurationByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateHmsPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateHmsPushConfigurationByIdResponse", ""
            ) as UpdateHmsPushConfigurationByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePushNotificationContentTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePushNotificationContentTemplate(response: ResponseContext): Promise<UpdatePushNotificationContentTemplateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushNotificationContentTemplateResponse", ""
            ) as UpdatePushNotificationContentTemplateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePushNotificationContentTemplateResponse", ""
            ) as UpdatePushNotificationContentTemplateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewDefaultChannelInvitationPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewDefaultChannelInvitationPreference(response: ResponseContext): Promise<ViewDefaultChannelInvitationPreferenceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewDefaultChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewDefaultChannelInvitationPreferenceResponse", ""
            ) as ViewDefaultChannelInvitationPreferenceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewDefaultChannelInvitationPreferenceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewDefaultChannelInvitationPreferenceResponse", ""
            ) as ViewDefaultChannelInvitationPreferenceResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewPushConfigurationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewPushConfigurationById(response: ResponseContext): Promise<ViewPushConfigurationByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushConfigurationByIdResponse", ""
            ) as ViewPushConfigurationByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewPushConfigurationByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushConfigurationByIdResponse", ""
            ) as ViewPushConfigurationByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewPushNotificationContentTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewPushNotificationContentTemplate(response: ResponseContext): Promise<ViewPushNotificationContentTemplateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewPushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushNotificationContentTemplateResponse", ""
            ) as ViewPushNotificationContentTemplateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewPushNotificationContentTemplateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewPushNotificationContentTemplateResponse", ""
            ) as ViewPushNotificationContentTemplateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewSecondaryApiTokenByToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewSecondaryApiTokenByToken(response: ResponseContext): Promise<ViewSecondaryApiTokenByTokenResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewSecondaryApiTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewSecondaryApiTokenByTokenResponse", ""
            ) as ViewSecondaryApiTokenByTokenResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewSecondaryApiTokenByTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewSecondaryApiTokenByTokenResponse", ""
            ) as ViewSecondaryApiTokenByTokenResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
