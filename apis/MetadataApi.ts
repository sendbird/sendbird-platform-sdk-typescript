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


import { CreateAChannelMetadataRequest } from '../models/CreateAChannelMetadataRequest';
import { CreateAChannelMetadataResponse } from '../models/CreateAChannelMetadataResponse';
import { UpdateAChannelMetadataRequest } from '../models/UpdateAChannelMetadataRequest';

/**
 * no description
 */
export class MetadataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-create-metadata#1-create-metadata ----------------------------
     * Create a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param createAChannelMetadataRequest 
     */
    public async createAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, createAChannelMetadataRequest?: CreateAChannelMetadataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MetadataApi", "createAChannelMetadata", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MetadataApi", "createAChannelMetadata", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/metadata'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createAChannelMetadataRequest, "CreateAChannelMetadataRequest", ""),
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
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-delete-metadata#1-delete-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * Delete a channel metadata - When deleting all items of a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param key 
     * @param apiToken 
     */
    public async deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, key?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MetadataApi", "deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MetadataApi", "deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/metadata'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)))
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-update-metadata#1-update-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param apiToken 
     * @param updateAChannelMetadataRequest 
     */
    public async updateAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, apiToken?: string, updateAChannelMetadataRequest?: UpdateAChannelMetadataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MetadataApi", "updateAChannelMetadata", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MetadataApi", "updateAChannelMetadata", "channelUrl");
        }




        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/metadata'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateAChannelMetadataRequest, "UpdateAChannelMetadataRequest", ""),
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
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-metadata/channel-get-metadata#1-get-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * View a channel metadata - When retrieving all items of a channel metadata
     * @param channelType (Required) 
     * @param channelUrl (Required) 
     * @param key 
     * @param keys In a query string, specifies an array of one or more keys of the metadata items. If not specified, all items of the metadata are returned. If specified, only the items that match the parameter values are returned. URL encoding each key is recommended.
     * @param apiToken 
     */
    public async viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(channelType: 'open_channels' | 'group_channels', channelUrl: string, key?: string, keys?: string, apiToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelType' is not null or undefined
        if (channelType === null || channelType === undefined) {
            throw new RequiredError("MetadataApi", "viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata", "channelType");
        }


        // verify required parameter 'channelUrl' is not null or undefined
        if (channelUrl === null || channelUrl === undefined) {
            throw new RequiredError("MetadataApi", "viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata", "channelUrl");
        }





        // Path Params
        const localVarPath = '/v3/{channel_type}/{channel_url}/metadata'
            .replace('{' + 'channel_type' + '}', encodeURIComponent(String(channelType)))
            .replace('{' + 'channel_url' + '}', encodeURIComponent(String(channelUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }

        // Query Params
        if (keys !== undefined) {
            requestContext.setQueryParam("keys", ObjectSerializer.serialize(keys, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("api-token", ObjectSerializer.serialize(apiToken, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MetadataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAChannelMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAChannelMetadata(response: ResponseContext): Promise<CreateAChannelMetadataResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateAChannelMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateAChannelMetadataResponse", ""
            ) as CreateAChannelMetadataResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateAChannelMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateAChannelMetadataResponse", ""
            ) as CreateAChannelMetadataResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAChannelMetadataWhenDeletingAllItemsOfAChannelMetadata(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to updateAChannelMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAChannelMetadata(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewAChannelMetadataWhenRetrievingAllItemsOfAChannelMetadata(response: ResponseContext): Promise<any > {
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

}
