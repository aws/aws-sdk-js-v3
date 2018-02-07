import { IMPORTS } from '../../internalImports';
import { packageNameToVariable } from '../../packageNameToVariable';
import { applyStaticOrProvider, staticOrProvider } from './staticOrProvider';
import { urlParser } from './standardConfigurationProperties';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
} from '@aws/build-types';
import { ServiceMetadata } from '@aws/types';

/**
 * @internal
 */
export function endpointConfigurationProperties(
    metadata: ServiceMetadata
): ConfigurationDefinition {
    return {
        urlParser,
        endpointProvider: endpointProviderProperty(metadata),
        endpoint,
    };
}

const typesPackage = packageNameToVariable('@aws/types');
const endpointType = `string|${staticOrProvider(`${typesPackage}.HttpEndpoint`)}`;

/**
 * @internal
 */
export const endpoint: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: endpointType,
    resolvedType: `${typesPackage}.Provider<${typesPackage}.HttpEndpoint>`,
    imports: [IMPORTS.types],
    documentation: 'The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).',
    required: false,
    default: {
        type: 'provider',
        expression:
`(
    configuration: {
        sslEnabled: boolean,
        endpointProvider: any,
        region: ${typesPackage}.Provider<string>,
    }
) => {
    const promisified = configuration.region()
        .then(region => configuration.endpointProvider(
            configuration.sslEnabled,
            region
        ));
    return () => promisified;
}`
    },
    apply:
`(
    value: ${endpointType}|undefined,
    configuration: {
        endpointProvider: any,
        endpoint?: ${endpointType},
        sslEnabled: boolean,
        urlParser: ${typesPackage}.UrlParser,
    }
): void => {
    if (typeof value === 'string') {
        const promisified = Promise.resolve(configuration.urlParser(value));
        configuration.endpoint = () => promisified;
    } else if (typeof value === 'object') {
        const promisified = Promise.resolve(value);
        configuration.endpoint = () => promisified;
    }
}`
};

/**
 * @internal
 */
function endpointProviderProperty(
    metadata: ServiceMetadata
): ConfigurationPropertyDefinition {
    return {
        type: 'unified',
        inputType: 'any', // TODO change this,
        imports: [IMPORTS.types],
        documentation: 'The endpoint provider to call if no endpoint is provided',
        required: false,
        default: {
            type: 'value',
            expression:
`(
    sslEnabled: boolean,
    region: string,
) => ({
    protocol: sslEnabled ? 'https:' : 'http:',
    path: '/',
    hostname: \`${metadata.endpointPrefix}.\${region}.amazonaws.com\`
})`,
        },
    };
}
