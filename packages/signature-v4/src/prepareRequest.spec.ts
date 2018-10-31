import {prepareRequest} from "./prepareRequest";
import {HttpRequest} from "@aws-sdk/types";
import {
    AMZ_DATE_HEADER,
    AUTH_HEADER,
    DATE_HEADER,
    HOST_HEADER,
} from "./constants";

const minimalRequest: HttpRequest<any> = {
    method: 'POST',
    protocol: 'https:',
    path: '/',
    headers: {
        host: 'foo.us-bar-1.amazonaws.com'
    },
    hostname: 'foo.us-bar-1.amazonaws.com',
};

describe('prepareRequest', () => {
    it('should clone requests', () => {
        const prepared = prepareRequest(minimalRequest);
        expect(prepared).toEqual(
            prepareRequest(minimalRequest)
        );
        expect(prepared).not.toBe(
            prepareRequest(minimalRequest)
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
                }
            );
            expect(headers[AUTH_HEADER]).toBeUndefined();
            expect(headers[AMZ_DATE_HEADER]).toBeUndefined();
            expect(headers[DATE_HEADER]).toBeUndefined();
        }
    );

    it(`should set the ${HOST_HEADER} header if not present`, () => {
        const {headers} = prepareRequest(
            {
                ...minimalRequest,
                headers: {},
            }
        );
        expect(headers[HOST_HEADER]).toBe(minimalRequest.hostname);
    });
});
