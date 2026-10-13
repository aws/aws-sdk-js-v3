"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInjectEndpointIdPlugin = exports.injectEndpointIdMiddlewareOptions = exports.injectEndpointIdMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const injectEndpointIdMiddleware = (config) => (next, context) => async (args) => {
    if (typeof args.input.EndpointId === "undefined") {
    }
    else if (config.isCustomEndpoint) {
        context.signing_region = "*";
    }
    else if ((await config.useFipsEndpoint()) === true) {
        throw new Error("FIPS is not supported with EventBridge multi-region endpoints, please check the useFipsEndpoint configuration.");
    }
    else if (protocol_http_1.HttpRequest.isInstance(args.request)) {
        const endpointSuffix = getEndpointSuffix(args.request.hostname);
        if (!isValidHostnameComponent(args.input.EndpointId)) {
            throw new Error(`The EndpointId is not a valid domain name component, got ${args.input.EndpointId}.`);
        }
        args.request.hostname = `${args.input.EndpointId}.endpoint.events.${endpointSuffix}`;
        context.signing_region = "*";
    }
    return next(args);
};
exports.injectEndpointIdMiddleware = injectEndpointIdMiddleware;
const getEndpointSuffix = (endpoint) => {
    const EVENTS_ENDPOINT_PATTERN = /^(.+\.)?events(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
    return endpoint.replace(new RegExp(EVENTS_ENDPOINT_PATTERN), "");
};
const isValidHostnameComponent = (component) => {
    const HOSTNAME_LABEL_PATTERN = /^[a-zA-Z0-9](([a-zA-Z0-9-]+)?[a-zA-Z0-9])?$/;
    for (const label of component.split(".")) {
        if (!HOSTNAME_LABEL_PATTERN.test(label) || label.length > 63) {
            return false;
        }
    }
    return true;
};
exports.injectEndpointIdMiddlewareOptions = {
    step: "build",
    tags: ["ENDPOINT_ID"],
    name: "injectEndpointIdMiddleware",
    override: true,
};
const getInjectEndpointIdPlugin = (options) => ({
    applyToStack: (operationStack) => {
        operationStack.add((0, exports.injectEndpointIdMiddleware)(options), exports.injectEndpointIdMiddlewareOptions);
    },
});
exports.getInjectEndpointIdPlugin = getInjectEndpointIdPlugin;
