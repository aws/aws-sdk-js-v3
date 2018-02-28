import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';
import { applyStaticOrProvider, staticOrProvider } from './staticOrProvider';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
    RuntimeTarget,
} from '@aws/build-types';
import { streamType } from '../../streamType';

/**
 * @internal
 */
export function httpConfigurationProperties(
    target: RuntimeTarget,
    inputTypeUnion: string,
    outputTypeUnion: string
): ConfigurationDefinition {
    const streamTypeParam = streamType(target);
    return {
        ...runtimeHttpConfigurationProperties(target),
        _user_injected_http_handler,
        httpHandler: httpHandlerProperty(streamTypeParam),
        handler: handlerProperty(
            inputTypeUnion,
            outputTypeUnion,
            streamTypeParam
        ),
    };
}

const typesPackage = packageNameToVariable('@aws/types');

/**
 * @internal
 */
function httpHandlerProperty(
    streamType: string
): ConfigurationPropertyDefinition {
    return {
        type: 'forked',
        inputType: `${typesPackage}.HttpHandler<${streamType}>`,
        documentation: 'The HTTP handler to use',
        imports: [IMPORTS.types],
        node: {
            required: false,
            imports: [IMPORTS['node-http-handler']],
            default: {
                type: 'provider',
                expression: `(
    configuration: {
        connectionTimeout: number,
        keepAlive: boolean,
        maxConcurrencyPerHost: number,
        timeout: number,
    }
) => new ${packageNameToVariable('@aws/node-http-handler')}.NodeHttpHandler({
    connectionTimeout: configuration.connectionTimeout,
    keepAlive: configuration.keepAlive,
    maxConcurrencyPerHost: configuration.maxConcurrencyPerHost,
    timeout: configuration.timeout,
})`
            }
        },
        browser: {
            required: false,
            imports: [IMPORTS['fetch-http-handler']],
            default: {
                type: 'provider',
                expression: `(
    configuration: {requestTimeout?: number}
) => new ${packageNameToVariable('@aws/fetch-http-handler')}.FetchHttpHandler({
    requestTimeout: configuration.requestTimeout,
})`
            }

        },
        universal: {
            required: false,
            default: {
                type: 'value',
                expression: '() => { throw new Error("No HTTP handlers have been defined"); }'
            }
        },
    }
};

function handlerProperty(
    inputTypeUnion: string,
    outputTypeUnion: string,
    streamType: string
): ConfigurationPropertyDefinition {
    return  {
        type: 'unified',
        inputType: `${typesPackage}.Terminalware<${outputTypeUnion}, ${streamType}>`,
        documentation: "The handler to use as the core of the client's middleware stack",
        imports: [IMPORTS.types, IMPORTS['core-handler']],
        required: false,
        default: {
            type: 'provider',
            expression:
`(
    configuration: {
        httpHandler: ${typesPackage}.HttpHandler<${streamType}>,
        parser: ${typesPackage}.ResponseParser<${streamType}>,
    }
) => ${packageNameToVariable('@aws/core-handler')}.coreHandler<OutputTypesUnion, ${streamType}>(
    configuration.httpHandler,
    configuration.parser
)`,
        }
    };
}

function runtimeHttpConfigurationProperties(
    target: RuntimeTarget
): ConfigurationDefinition {
    switch (target) {
        case 'node':
            return {
                connectionTimeout,
                keepAlive,
                maxConcurrencyPerHost,
                timeout,
            };
        case 'browser':
            return {
                requestTimeout,
            };
        case 'universal':
            return {};
    }
}

const _user_injected_http_handler: ConfigurationPropertyDefinition = {
    type: 'unified',
    internal: true,
    inputType: 'any',
    resolvedType: 'boolean',
    documentation: 'Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is',
    required: false,
    default: {
        type: 'provider',
        expression:
`(configuration: {httpHandler?: any}) => !configuration.httpHandler`
    }
};

const connectionTimeout: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    required: false,
    default: {
        type: 'value',
        expression: '20000',
    },
    documentation: 'The maximum time in milliseconds that the connection phase of a request may take before the connection attempt is abandoned. Defaults to 20000 (20 seconds).'
};

const maxConcurrencyPerHost: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    required: false,
    default: {
        type: 'value',
        expression: '50',
    },
    documentation: 'The maximum number of concurrent connections (either logical or physical) allowed per remote host. Defaults to 50.'
};

const keepAlive: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'boolean',
    required: false,
    default: {
        type: 'value',
        expression: 'true',
    },
    documentation: 'Whether sockets should be kept open even when there are no outstanding requests so that future requests can forgo having to reestablish a TCP or TLS connection. Defaults to true.'
};

const requestTimeout: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    required: false,
    documentation: 'The number of milliseconds a request can take before being automatically terminated.'
};

const timeout: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    required: false,
    default: {
        type: 'value',
        expression: '30000',
    },
    documentation: 'The maximum time in milliseconds that an open connection may remain idle before it is closed. Defaults to 30000 (30 seconds).'
};
