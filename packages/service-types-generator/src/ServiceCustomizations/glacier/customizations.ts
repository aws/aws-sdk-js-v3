import {ServiceCustomizationDefinition} from '@aws/build-types';
import { packageNameToVariable } from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';

const customizations: ServiceCustomizationDefinition = {
    middleware: {
        commands: {},
        client: [
            {
                imports: [IMPORTS['middleware-sdk-glacier']],
                step: 'initialize',
                priority: 0,
                type: 'Middleware',
                tags: `{VALIDATE_ACCOUNT_ID: true}`,
                expression: `${packageNameToVariable('@aws/middleware-sdk-glacier')}.validateAccountId`
            },
            {
                imports: [IMPORTS['middleware-sdk-glacier']],
                step: 'build',
                priority: 0,
                type: 'Middleware',
                tags: `{ADD_GLACIER_API_VERSION: true}`,
                expression: `${packageNameToVariable('@aws/middleware-sdk-glacier')}.addGlacierApiVersion`
            },
            {
                imports: [IMPORTS['middleware-sdk-glacier']],
                step: 'build',
                priority: 0,
                type: 'Middleware',
                tags: `{ADD_CHECKSUM_HEADERS: true}`,
                expression: `${packageNameToVariable('@aws/middleware-sdk-glacier')}.addChecksumHeaders(
        this.config.sha256,
        this.config.convertToUint8Array
    )`,
                configuration: {
                    convertToUint8Array: {
                        type: 'forked',
                        internal: true,
                        inputType: `${packageNameToVariable('@aws/types')}.ConvertToUint8Array`,
                        documentation: 'A function that can convert a payload into a Uint8Array.',
                        browser: {
                            required: false,
                            imports: [IMPORTS['util-uint8array-browser']],
                            default: {
                                type: 'value',
                                expression: `${packageNameToVariable('@aws/util-uint8array-browser')}.convertToUint8Array`
                            }
                        },
                        node: {
                            required: false,
                            imports: [IMPORTS['util-uint8array-node']],
                            default: {
                                type: 'value',
                                expression: `${packageNameToVariable('@aws/util-uint8array-node')}.convertToUint8Array`
                            }
                        },
                        universal: {
                            required: false,
                            imports: [IMPORTS['util-uint8array-universal']],
                            default: {
                                type: 'value',
                                expression: `${packageNameToVariable('@aws/util-uint8array-universal')}.convertToUint8Array`
                            }
                        }
                    }
                }
            }
        ]
    }
};

export function glacierCustomizations() {
    return customizations;
}