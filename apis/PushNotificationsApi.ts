// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ListPushConfigurationsResponse } from '../models/ListPushConfigurationsResponse';
import { V3ApplicationsPushSettingsGet200Response } from '../models/V3ApplicationsPushSettingsGet200Response';
import { V3ApplicationsPushSettingsGetRequest } from '../models/V3ApplicationsPushSettingsGetRequest';

/**
 * no description
 */
export class PushNotificationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Check push notifications Shows whether the push notifications feature is turned on for an application. https://sendbird.com/docs/chat/v3/platform-api/application/managing-notifications/check-push-notifications -----------------------------  
     * Check push notifications
     * @param apiToken 
     */
    public async v3ApplicationsPushSettingsGet(apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v3/applications/push/settings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Turn on push notifications Determines whether to turn on the push notifications feature for an application. https://sendbird.com/docs/chat/v3/platform-api/application/managing-notifications/turn-on-push-notifications -----------------------------  
     * Turn on push notifications
     * @param apiToken 
     * @param v3ApplicationsPushSettingsGetRequest 
     */
    public async v3ApplicationsPushSettingsPut(apiToken?: string, v3ApplicationsPushSettingsGetRequest?: V3ApplicationsPushSettingsGetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/push/settings';

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
            ObjectSerializer.serialize(v3ApplicationsPushSettingsGetRequest, "V3ApplicationsPushSettingsGetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PushNotificationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ApplicationsPushSettingsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ApplicationsPushSettingsGet(response: ResponseContext): Promise<V3ApplicationsPushSettingsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3ApplicationsPushSettingsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ApplicationsPushSettingsGet200Response", ""
            ) as V3ApplicationsPushSettingsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3ApplicationsPushSettingsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3ApplicationsPushSettingsGet200Response", ""
            ) as V3ApplicationsPushSettingsGet200Response;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3ApplicationsPushSettingsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3ApplicationsPushSettingsPut(response: ResponseContext): Promise<ListPushConfigurationsResponse > {
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

}
