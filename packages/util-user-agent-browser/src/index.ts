import { HttpRequest } from '@aws-sdk/types';

export function defaultUserAgent(packageName: string, packageVersion: string): string {
    let originUserAgent = typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' ? navigator.userAgent : '';
    return `aws-sdk-js-v3-${packageName}/${packageVersion} ${originUserAgent}`;
}

export function appendToUserAgent(request: HttpRequest, userAgentPartial: string): void {
    request.headers['X-Amz-User-Agent'] += ` ${userAgentPartial}`;
}