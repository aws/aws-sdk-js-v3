import {prepareRequest} from "../lib/prepareRequest";
import {Credentials, HttpRequest} from "@aws/types";
import {
    AMZ_DATE_HEADER, AUTH_HEADER, DATE_HEADER,
    HOST_HEADER, TOKEN_HEADER
} from "../lib/constants";

const minimalRequest: HttpRequest<any> = {
    method: 'POST',
    protocol: 'https:',
    path: '/',
    headers: {
        host: 'foo.us-bar-1.amazonaws.com'
    },
    hostname: 'foo.us-bar-1.amazonaws.com',
};

const credentials: Credentials = {
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
};

const longDate = '20000101T000000Z';

describe('prepareRequest', () => {
    it('should clone requests', () => {
        const prepared = prepareRequest(minimalRequest, credentials, longDate);
        expect(prepared).toEqual(
            prepareRequest(minimalRequest, credentials, longDate)
        );
        expect(prepared).not.toBe(
            prepareRequest(minimalRequest, credentials, longDate)
        );
    });

    it(
        'should ignore previously set authorization, date, and x-amz-date headers',
        async () => {
            const {headers} = prepareRequest(
                {
                    ...minimalRequest,
                    headers: {
                        [AUTH_HEADER]: 'foo',
                        [AMZ_DATE_HEADER]: 'bar',
                        [DATE_HEADER]: 'baz',
                    }
                },
                credentials,
                longDate
            );
            expect(headers[AUTH_HEADER]).toBeUndefined();
            expect(headers[AMZ_DATE_HEADER]).toBe('20000101T000000Z');
            expect(headers[DATE_HEADER]).toBeUndefined();
        }
    );

    it(`should set the ${HOST_HEADER} header if not present`, () => {
        const {headers} = prepareRequest(
            {
                ...minimalRequest,
                headers: {},
            },
            credentials,
            longDate
        );
        expect(headers[HOST_HEADER]).toBe(minimalRequest.hostname);
    });

    it(
        `should set and sign the ${TOKEN_HEADER} header if the credentials have a session token`,
        () => {
            const {headers} = prepareRequest(
                minimalRequest,
                {
                    ...credentials,
                    sessionToken: 'baz',
                },
                longDate
            );
            expect(headers[TOKEN_HEADER]).toBe('baz');
        }
    );
});
