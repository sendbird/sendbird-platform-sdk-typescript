// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse200Results } from '../models/InlineResponse200Results';

/**
 * no description
 */
export class OrganizationAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Create an application  Creates a new application under your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-create-an-application
     * Create an application
     * @param SENDBIRDORGANIZATIONAPITOKEN 
     * @param body 
     */
    public async createApplication(SENDBIRDORGANIZATIONAPITOKEN?: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/v2/applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("SENDBIRDORGANIZATIONAPITOKEN", ObjectSerializer.serialize(SENDBIRDORGANIZATIONAPITOKEN, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ## Delete an application  Deletes the specified application.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-delete-an-application ----------------------------
     * Delete an application
     * @param appId 
     * @param SENDBIRDORGANIZATIONAPITOKEN 
     */
    public async deleteApplicationById(appId: string, SENDBIRDORGANIZATIONAPITOKEN?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("OrganizationAPIApi", "deleteApplicationById", "appId");
        }



        // Path Params
        const localVarPath = '/api/v2/applications/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("SENDBIRDORGANIZATIONAPITOKEN", ObjectSerializer.serialize(SENDBIRDORGANIZATIONAPITOKEN, "string", ""));



        return requestContext;
    }

    /**
     * ## List applications  Retrieves a list of applications of your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-list-applications ----------------------------
     * List applications
     * @param SENDBIRDORGANIZATIONAPITOKEN 
     */
    public async listApplications(SENDBIRDORGANIZATIONAPITOKEN?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v2/applications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("SENDBIRDORGANIZATIONAPITOKEN", ObjectSerializer.serialize(SENDBIRDORGANIZATIONAPITOKEN, "string", ""));



        return requestContext;
    }

    /**
     * ## View an application  Retrieves information about an application with a specified application ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-view-an-application ----------------------------
     * View an application
     * @param appId 
     * @param SENDBIRDORGANIZATIONAPITOKEN 
     */
    public async viewApplicationById(appId: string, SENDBIRDORGANIZATIONAPITOKEN?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("OrganizationAPIApi", "viewApplicationById", "appId");
        }



        // Path Params
        const localVarPath = '/api/v2/applications/{app_id}'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("SENDBIRDORGANIZATIONAPITOKEN", ObjectSerializer.serialize(SENDBIRDORGANIZATIONAPITOKEN, "string", ""));



        return requestContext;
    }

}

export class OrganizationAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplication(response: ResponseContext): Promise<InlineResponse200Results > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200Results = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200Results", ""
            ) as InlineResponse200Results;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200Results = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200Results", ""
            ) as InlineResponse200Results;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApplicationById(response: ResponseContext): Promise<void > {
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

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listApplications(response: ResponseContext): Promise<InlineResponse200 > {
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

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewApplicationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewApplicationById(response: ResponseContext): Promise<InlineResponse200Results > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200Results = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200Results", ""
            ) as InlineResponse200Results;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200Results = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200Results", ""
            ) as InlineResponse200Results;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
