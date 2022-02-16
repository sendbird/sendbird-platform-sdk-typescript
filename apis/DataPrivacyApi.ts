// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { ListGdprRequestsResponse } from '../models/ListGdprRequestsResponse';
import { RegisterGdprRequestData } from '../models/RegisterGdprRequestData';
import { RegisterGdprRequestResponse } from '../models/RegisterGdprRequestResponse';
import { ViewGdprRequestByIdResponse } from '../models/ViewGdprRequestByIdResponse';

/**
 * no description
 */
export class DataPrivacyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
     * Cancel the registration of a GDPR request
     * @param apiToken 
     * @param requestId 
     */
    public async cancelTheRegistrationOfGdprRequestById(apiToken: string, requestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("DataPrivacyApi", "cancelTheRegistrationOfGdprRequestById", "apiToken");
        }


        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new RequiredError("DataPrivacyApi", "cancelTheRegistrationOfGdprRequestById", "requestId");
        }


        // Path Params
        const localVarPath = '/v3/privacy/gdpr/{request_id}'
            .replace('{' + 'request_id' + '}', encodeURIComponent(String(requestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

    /**
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * List GDPR requests
     * @param apiToken 
     * @param token 
     * @param limit 
     */
    public async listGdprRequests(apiToken: string, token?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("DataPrivacyApi", "listGdprRequests", "apiToken");
        }




        // Path Params
        const localVarPath = '/v3/privacy/gdpr';

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
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * Register a GDPR request
     * @param apiToken 
     * @param registerGdprRequestData 
     */
    public async registerGdprRequest(apiToken: string, registerGdprRequestData?: RegisterGdprRequestData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("DataPrivacyApi", "registerGdprRequest", "apiToken");
        }



        // Path Params
        const localVarPath = '/v3/privacy/gdpr';

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
            ObjectSerializer.serialize(registerGdprRequestData, "RegisterGdprRequestData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * View a GDPR request
     * @param apiToken 
     * @param requestId 
     */
    public async viewGdprRequestById(apiToken: string, requestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiToken' is not null or undefined
        if (apiToken === null || apiToken === undefined) {
            throw new RequiredError("DataPrivacyApi", "viewGdprRequestById", "apiToken");
        }


        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new RequiredError("DataPrivacyApi", "viewGdprRequestById", "requestId");
        }


        // Path Params
        const localVarPath = '/v3/privacy/gdpr/{request_id}'
            .replace('{' + 'request_id' + '}', encodeURIComponent(String(requestId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Api-Token", ObjectSerializer.serialize(apiToken, "string", ""));



        return requestContext;
    }

}

export class DataPrivacyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelTheRegistrationOfGdprRequestById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelTheRegistrationOfGdprRequestById(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGdprRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listGdprRequests(response: ResponseContext): Promise<ListGdprRequestsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListGdprRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGdprRequestsResponse", ""
            ) as ListGdprRequestsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListGdprRequestsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListGdprRequestsResponse", ""
            ) as ListGdprRequestsResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to registerGdprRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerGdprRequest(response: ResponseContext): Promise<RegisterGdprRequestResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegisterGdprRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegisterGdprRequestResponse", ""
            ) as RegisterGdprRequestResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RegisterGdprRequestResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegisterGdprRequestResponse", ""
            ) as RegisterGdprRequestResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewGdprRequestById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewGdprRequestById(response: ResponseContext): Promise<ViewGdprRequestByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ViewGdprRequestByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewGdprRequestByIdResponse", ""
            ) as ViewGdprRequestByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ViewGdprRequestByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ViewGdprRequestByIdResponse", ""
            ) as ViewGdprRequestByIdResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
