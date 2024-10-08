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


import { ChooseWhichEventsToSubscribeToData } from '../models/ChooseWhichEventsToSubscribeToData';
import { ChooseWhichEventsToSubscribeToResponse } from '../models/ChooseWhichEventsToSubscribeToResponse';
import { RetrieveListOfSubscribedEventsResponse } from '../models/RetrieveListOfSubscribedEventsResponse';

/**
 * no description
 */
export class WebhookApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * Choose which events to subscribe to
     * @param apiToken 
     * @param chooseWhichEventsToSubscribeToData 
     */
    public async chooseWhichEventsToSubscribeTo(apiToken?: string, chooseWhichEventsToSubscribeToData?: ChooseWhichEventsToSubscribeToData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/settings/webhook';

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
            ObjectSerializer.serialize(chooseWhichEventsToSubscribeToData, "ChooseWhichEventsToSubscribeToData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * Retrieve a list of subscribed events
     * @param apiToken 
     * @param displayAllWebhookCategories 
     */
    public async retrieveListOfSubscribedEvents(apiToken?: string, displayAllWebhookCategories?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v3/applications/settings/webhook';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (displayAllWebhookCategories !== undefined) {
            requestContext.setQueryParam("display_all_webhook_categories", ObjectSerializer.serialize(displayAllWebhookCategories, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WebhookApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to chooseWhichEventsToSubscribeTo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async chooseWhichEventsToSubscribeTo(response: ResponseContext): Promise<ChooseWhichEventsToSubscribeToResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChooseWhichEventsToSubscribeToResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChooseWhichEventsToSubscribeToResponse", ""
            ) as ChooseWhichEventsToSubscribeToResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChooseWhichEventsToSubscribeToResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChooseWhichEventsToSubscribeToResponse", ""
            ) as ChooseWhichEventsToSubscribeToResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveListOfSubscribedEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveListOfSubscribedEvents(response: ResponseContext): Promise<RetrieveListOfSubscribedEventsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveListOfSubscribedEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveListOfSubscribedEventsResponse", ""
            ) as RetrieveListOfSubscribedEventsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveListOfSubscribedEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveListOfSubscribedEventsResponse", ""
            ) as RetrieveListOfSubscribedEventsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
