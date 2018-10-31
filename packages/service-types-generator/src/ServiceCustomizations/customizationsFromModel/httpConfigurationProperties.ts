import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
} from '@aws-sdk/build-types';

/**
 * @internal
 */
export function httpConfigurationProperties(
    inputTypeUnion: string,
    outputTypeUnion: string,
    streamType: string
): ConfigurationDefinition {
    return {
        _user_injected_http_handler,
        httpHandler: httpHandlerProperty(streamType),
        handler: handlerProperty(inputTypeUnion, outputTypeUnion, streamType),
    };
}

const typesPackage = packageNameToVariable('@aws-sdk/types');

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
                expression: `() => new ${packageNameToVariable('@aws-sdk/node-http-handler')}.NodeHttpHandler()`
            }
        },
        browser: {
            required: false,
            imports: [IMPORTS['fetch-http-handler']],
            default: {
                type: 'provider',
                expression: `() => new ${packageNameToVariable('@aws-sdk/fetch-http-handler')}.FetchHttpHandler()`
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
) => ${packageNameToVariable('@aws-sdk/core-handler')}.coreHandler<OutputTypesUnion, ${streamType}>(
    configuration.httpHandler,
    configuration.parser
)`,
        }
    };
}

/**
 * @internal
 */
export const _user_injected_http_handler: ConfigurationPropertyDefinition = {
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
