import {IMPORTS} from './constants';
import {packageNameToVariable} from '../packageNameToVariable';
import {staticOrProvider} from './staticOrProvider';
import {credentials, sha256} from './standardConfigurationProperties';
import {
    ConfigurationPropertyGenerationConfiguration,
    ConfigurationGenerationConfiguration,
} from '@aws/build-types';
import {ServiceMetadata, SupportedSignatureVersion} from '@aws/types';

const supportedSignatureVersions = new Set<SupportedSignatureVersion|string>([
    's3',
    's3v4',
    'v4',
    'v4-unsigned-body'
]);

/**
 * @internal
 */
export function signatureConfigurationProperties(
    metadata: ServiceMetadata
): ConfigurationGenerationConfiguration {
    const version = metadata.signatureVersion;
    if (!supportedSignatureVersions.has(version)) {
        throw new Error(
            `Unable to generate client for service with signature version: ${version}`
        );
    }

    return {
        credentials,
        sha256,
        signingName: signingNameProperty(metadata),
        signer: signerProperty(metadata),
    };
}

/**
 * @internal
 */
function signerProperty(
    metadata: ServiceMetadata
): ConfigurationPropertyGenerationConfiguration {
    const typesPackage = packageNameToVariable('@aws/types');

    return {
        type: 'unified',
        inputType: `${typesPackage}.RequestSigner`,
        imports: [IMPORTS.types, IMPORTS['signature-v4']],
        documentation: 'The signer to use when signing requests.',
        required: false,
        default: {
            type: 'provider',
            expression: 
`(
    configuration: {
        credentials: ${staticOrProvider(`${typesPackage}.Credentials`)}
        region: ${staticOrProvider('string')},
        sha256: ${typesPackage}.HashConstructor,
        signingName: string,
    }
) => new ${packageNameToVariable('@aws/signature-v4')}.SignatureV4({
    credentials: configuration.credentials,
    region: configuration.region,
    service: configuration.signingName,
    sha256: configuration.sha256,
    unsignedPayload: ${metadata.signatureVersion === 'v4-unsigned-body'},
    uriEscapePath: ${['s3', 's3v4'].indexOf(metadata.signatureVersion) > -1},
})`,
        },
    };
}

/**
 * @internal
 */
function signingNameProperty(
    metadata: ServiceMetadata
): ConfigurationPropertyGenerationConfiguration {
    return {
        type: 'unified',
        inputType: 'string',
        imports: [IMPORTS.types],
        documentation: 'The service name with which to sign requests.',
        required: false,
        default: {
            type: 'value',
            expression: `'${metadata.signingName || metadata.endpointPrefix}'`,
        },
    };
}
