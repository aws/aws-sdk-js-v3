import {ResponseMetadata, ServiceExceptionOption} from '@aws/types';

export function initServiceException<ServiceException>(error: Error, option: ServiceExceptionOption): ServiceException {
    const {name, $metadata, rawException, message} = option;
    let serviceException: any = error;
    serviceException.name = name ? name[0].toUpperCase() + name.slice(1) : 'Error';
    serviceException.message = message ? message :
        rawException ? rawException.message || rawException.Message || '' : error.message,
    serviceException.details = rawException;
    serviceException.$metadata = $metadata;
    return serviceException as ServiceException;
}
