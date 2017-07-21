import {moveHeadersToQuery} from "../lib/moveHeadersToQuery";
import {HttpRequest} from "../../types/http";

const minimalRequest: HttpRequest<any> = {
    method: 'POST',
    protocol: 'https:',
    path: '/',
    headers: {
        host: 'foo.us-east-1.amazonaws.com',
    },
    hostname: 'foo.us-east-1.amazonaws.com',
};

describe('moveHeadersToQuery', () => {
    it('should remove all headers but the host header', () => {
        const req = moveHeadersToQuery({
            ...minimalRequest,
            headers: {
                host: 'www.example.com',
                Foo: 'bar',
                fizz: 'buzz',
                SNAP: 'crackle, pop',
            }
        });

        expect(req.headers).toEqual({host: 'www.example.com'});
    });

    it('should hoist "x-amz" headers to the querystring', () => {
        const req = moveHeadersToQuery({
            ...minimalRequest,
            headers: {
                Host: 'www.example.com',
                'X-Amz-Website-Redirect-Location': '/index.html',
                Foo: 'bar',
                fizz: 'buzz',
                SNAP: 'crackle, pop',
                'X-Amz-Storage-Class': 'STANDARD_IA',
            },
        });

        expect(req.query).toEqual({
            'X-Amz-Website-Redirect-Location': '/index.html',
            'X-Amz-Storage-Class': 'STANDARD_IA',
        });
    });

    it('should not overwrite existing query values with different keys', () => {
        const req = moveHeadersToQuery({
            ...minimalRequest,
            headers: {
                Host: 'www.example.com',
                'X-Amz-Website-Redirect-Location': '/index.html',
                Foo: 'bar',
                fizz: 'buzz',
                SNAP: 'crackle, pop',
                'X-Amz-Storage-Class': 'STANDARD_IA',
            },
            query: {
                Foo: 'buzz',
                fizz: 'bar',
                'X-Amz-Storage-Class': 'REDUCED_REDUNDANCY',
            }
        });

        expect(req.query).toEqual({
            Foo: 'buzz',
            fizz: 'bar',
            'X-Amz-Website-Redirect-Location': '/index.html',
            'X-Amz-Storage-Class': 'STANDARD_IA',
        });
    });
});
