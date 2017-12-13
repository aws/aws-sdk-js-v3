import {
    BodyParser,
    Member,
    MetadataBearer,
    OperationModel,
    ResolvedHttpResponse,
    ServiceException,
    Structure,
} from '@aws/types'
import {
    ERR_RESP_SHAPE,
    ERR_RESP_SHAPE_LEGACY,
    ParsedErrorResponse,
    ParsedLegacyErrorResponse
} from './constants';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    initServiceException,
    ServiceExceptionOption,
} from '@aws/util-exceptions';
import { request } from 'http';

interface errorCommonProperties {
    errorName?: string,
    errorMessage?: string,
    requestId?: string,
    isLegacyErrorShape: boolean
}

export function xmlThrowException(operation: OperationModel, input: ResolvedHttpResponse, errorBodyParser: BodyParser): Promise<never> {
    const {body} = input;
    const {errors} = operation;
    const {errorName, errorMessage, requestId, isLegacyErrorShape} = parseErrorCommonProperties(errorBodyParser, body);
    if (!errorName) {
        throw initServiceException<ServiceException>(
            new Error(), 
            {$metadata: {
                ...extractMetadata(input),
                requestId
            }}
        )
    }
    //parse error properties from API other than name and message
    for (let errorShape of errors) {
        const errorStructure = <Structure>errorShape.shape;
        if (
            errorStructure.exceptionCode === errorName ||
            (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
        ) {
            const rawException = parseErrorOwnProperties(errorShape, body, errorBodyParser, isLegacyErrorShape);
            throw initServiceException<ServiceException>(new Error(), {
                $metadata: {
                    ...extractMetadata(input),
                    requestId
                },
                name: errorName,
                message: errorMessage,
                rawException: rawException
            });
        }
    }
    //parsable exception but not documented in API
    throw initServiceException<ServiceException>(new Error(), {
        $metadata: {
            ...extractMetadata(input),
            requestId
        },
        name: errorName,
        message: errorMessage,
    })
}

function parseErrorOwnProperties(errorShape: Member, body: string, errorBodyParser: BodyParser, isLegacyErrorShape: boolean): any {
    if(!(errorShape.shape as Structure).members) {
        return {};
    }
    const wrappedErrorShape: Member = {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        }
    }
    if (isLegacyErrorShape) {
        (wrappedErrorShape.shape as Structure).members = {
            Errors: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Error: errorShape
                    }
                }
            }
        }
    } else {
        (wrappedErrorShape.shape as Structure).members = {Error: errorShape}
    }
    let rawException = errorBodyParser.parse<any>(wrappedErrorShape, body);
    return isLegacyErrorShape ? rawException.Errors.Error : rawException.Error;
}

function parseErrorCommonProperties(errorBodyParser: BodyParser, body: string): errorCommonProperties {
    let isLegacyErrorShape = false;
    let parsedErrorResponse = errorBodyParser.parse<ParsedErrorResponse>(ERR_RESP_SHAPE, body);
    let requestId = parsedErrorResponse.$metadata ? parsedErrorResponse.$metadata.requestId : undefined
    if(parsedErrorResponse.Error) {
        const {
            Error: {
                Code: errorName = undefined,
                Message: errorMessage = undefined
            }, $metadata: {requestId}
        }= parsedErrorResponse;
        return {errorName: errorName, errorMessage: errorMessage, requestId: requestId, isLegacyErrorShape: false}
    } else {
        //old services like SDB & EC2, their exceptions have one more layer of `<Errors>`
        let parsedLegacyErrorResponse = errorBodyParser.parse<ParsedLegacyErrorResponse>(ERR_RESP_SHAPE_LEGACY, body)
        let requestId = parsedErrorResponse.$metadata ? parsedErrorResponse.$metadata.requestId : undefined
        if (parsedLegacyErrorResponse.Errors) {
            const {
                Errors: {
                    Error: {
                        Code: errorName = undefined,
                        Message: errorMessage = undefined
                    }
                }
            } = parsedLegacyErrorResponse;
            return {errorName: errorName, errorMessage: errorMessage, requestId: requestId, isLegacyErrorShape: true}
        }
        return {errorName: undefined, errorMessage: undefined, requestId: requestId, isLegacyErrorShape: false}
    }
}
