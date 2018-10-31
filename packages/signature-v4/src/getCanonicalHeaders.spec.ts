import {getCanonicalHeaders} from "./getCanonicalHeaders";
import {ALWAYS_UNSIGNABLE_HEADERS} from "./constants";
import {HttpRequest} from "@aws-sdk/types";

describe('getCanonicalHeaders', () => {
    it('should downcase all headers', () => {
        expect(getCanonicalHeaders({
            method: 'POST',
            protocol: 'https:',
            path: '/',
            headers: {
                fOo: 'bar',
                BaZ: 'QUUX',
                HoSt: 'foo.us-east-1.amazonaws.com',
            },
            hostname: 'foo.us-east-1.amazonaws.com',
        })).toEqual({
            foo: 'bar',
            baz: 'QUUX',
            host: 'foo.us-east-1.amazonaws.com',
        });
    });

    it('should remove all unsignable headers', () => {
        const request: HttpRequest<never> = {
            method: 'POST',
            protocol: 'https:',
            path: '/',
            headers: {
                host: 'foo.us-east-1.amazonaws.com',
                foo: 'bar',
            },
            hostname: 'foo.us-east-1.amazonaws.com',
        };
        for (let headerName of Object.keys(ALWAYS_UNSIGNABLE_HEADERS)) {
            request.headers[headerName] = 'baz';
        }

        expect(getCanonicalHeaders(request))
            .toEqual({
                host: 'foo.us-east-1.amazonaws.com',
                foo: 'bar',
            });
    });

    it('should allow specifying custom unsignable headers', () => {
        const request: HttpRequest<never> = {
            method: 'POST',
            protocol: 'https:',
            path: '/',
            headers: {
                host: 'foo.us-east-1.amazonaws.com',
                foo: 'bar',
                'user-agent': 'foo-user',
            },
            hostname: 'foo.us-east-1.amazonaws.com',
        };

        expect(getCanonicalHeaders(request, new Set(['foo'])))
            .toEqual({
                host: 'foo.us-east-1.amazonaws.com',
            });
    });
});
