import {getCanonicalHeaders} from "../lib/getCanonicalHeaders";
import {UNSIGNABLE_HEADERS} from "../lib/constants";
import {HttpRequest} from "@aws/types";

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
            },
            hostname: 'foo.us-east-1.amazonaws.com',
        };
        for (let headerName of Object.keys(UNSIGNABLE_HEADERS)) {
            request.headers[headerName] = 'bar';
        }

        expect(getCanonicalHeaders(request))
            .toEqual({host: 'foo.us-east-1.amazonaws.com'});
    });

    it('should add in a host header if none present', () => {
        expect(getCanonicalHeaders({
            method: 'POST',
            protocol: 'https:',
            path: '/',
            headers: {},
            hostname: 'foo.us-east-1.amazonaws.com',
        })).toEqual({host: 'foo.us-east-1.amazonaws.com'});
    });
});