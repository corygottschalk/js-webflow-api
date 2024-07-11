/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Webflow from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Users {
    interface Options {
        environment?: core.Supplier<environments.WebflowEnvironment | string>;
        accessToken: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Users {
    constructor(protected readonly _options: Users.Options) {}

    /**
     * Get a list of users for a site <br><br> Required scope | `users:read`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {Webflow.UsersListRequest} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.users.list("site_id")
     */
    public async list(
        siteId: string,
        request: Webflow.UsersListRequest = {},
        requestOptions?: Users.RequestOptions
    ): Promise<Webflow.UserList> {
        const { offset, limit, sort } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `sites/${encodeURIComponent(siteId)}/users`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.3.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.UserList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Webflow.ForbiddenError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(_response.error.body);
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a User by ID <br><br> Required scope | `users:read`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {string} userId - Unique identifier for a User
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.users.get("site_id", "user_id")
     */
    public async get(siteId: string, userId: string, requestOptions?: Users.RequestOptions): Promise<Webflow.User> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `sites/${encodeURIComponent(siteId)}/users/${encodeURIComponent(userId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.3.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Webflow.ForbiddenError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(_response.error.body);
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a User by ID <br><br> Required scope | `users:write`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {string} userId - Unique identifier for a User
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.users.delete("site_id", "user_id")
     */
    public async delete(siteId: string, userId: string, requestOptions?: Users.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `sites/${encodeURIComponent(siteId)}/users/${encodeURIComponent(userId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.3.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Webflow.ForbiddenError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(_response.error.body);
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a User by ID <br><br> Required scope | `users:write`
     *
     * <aside class="notice">The <code>email</code> and <code>password</code> fields cannot be updated using this endpoint</aside>
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {string} userId - Unique identifier for a User
     * @param {Webflow.UsersUpdateRequest} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.users.update("site_id", "user_id", {
     *         data: {
     *             name: "Some One",
     *             acceptPrivacy: false,
     *             acceptCommunications: false
     *         },
     *         accessGroups: ["webflowers", "platinum", "free-tier"]
     *     })
     */
    public async update(
        siteId: string,
        userId: string,
        request: Webflow.UsersUpdateRequest = {},
        requestOptions?: Users.RequestOptions
    ): Promise<Webflow.User> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `sites/${encodeURIComponent(siteId)}/users/${encodeURIComponent(userId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.3.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.UsersUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Webflow.ForbiddenError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(_response.error.body);
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create and invite a user with an email address. The user will be sent and invite via email, which they will need to accept in order to join paid Access Groups. <br><br> Required scope | `users:write`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {Webflow.UsersInviteRequest} request
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.users.invite("site_id", {
     *         email: "some.one@home.com",
     *         accessGroups: ["webflowers"]
     *     })
     */
    public async invite(
        siteId: string,
        request: Webflow.UsersInviteRequest,
        requestOptions?: Users.RequestOptions
    ): Promise<Webflow.User> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `sites/${encodeURIComponent(siteId)}/users/invite`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.3.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.UsersInviteRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.User.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 403:
                    throw new Webflow.ForbiddenError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 409:
                    throw new Webflow.ConflictError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(_response.error.body);
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.accessToken)}`;
    }
}
