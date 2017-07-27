import {
    createServer as createHttpServer,
    IncomingMessage,
    ServerResponse
} from 'http';
import {createServer} from 'https';
import {readFileSync} from 'fs';
import {getCertificate} from "../lib/getCertificate";

let matchers: {[url: string]: string} = {};

function addMatcher(url: string, toReturn: string): void {
    matchers[url] = toReturn;
}

function clearMatchers(): void {
    matchers = {};
}

function getOpenPort(candidatePort: number = 4321): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const server = createHttpServer();
        server.on('error', () => reject());
        server.listen(candidatePort);
        server.close(() => resolve(candidatePort));
    })
        .catch(() => getOpenPort(candidatePort + 1));
}

let port: number;

const server = createServer(
    {
        key: readFileSync(__dirname + '/../__fixtures__/test-server-key.pem'),
        cert: readFileSync(__dirname + '/../__fixtures__/test-server-cert.pem')
    },
    (request: IncomingMessage, response: ServerResponse) => {
        const {url = ''} = request;
        if (url in matchers) {
            response.statusCode = 200;
            response.end(matchers[url]);
        } else {
            response.statusCode = 404;
            response.end('Not found');
        }
    }
);

beforeAll(async (done) => {
    port = await getOpenPort();
    server.listen(port);

    done();
});

afterAll(() => {
    server.close();
});

const rejectUnauthorizedEnv = process.env.NODE_TLS_REJECT_UNAUTHORIZED;

beforeEach(() => {
    clearMatchers();

    // Setting the NODE_TLS_REJECT_UNAUTHORIZED will allow the unconfigurable
    // HTTPS client in getCertificate to skip cert validation, which the
    // self-signed cert used for this test's server would fail. The variable
    // will be reset to its original value at the end of the test.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
});

afterEach(() => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = rejectUnauthorizedEnv;
});

describe('getCertificate', () => {
    it('should respond with a promise fulfilled with the http response', async () => {
        const expectedResponse = 'foo bar baz';
        addMatcher('/nonsense', expectedResponse);

        expect((await getCertificate(`https://localhost:${port}/nonsense`)))
            .toEqual(expectedResponse);
    });

    it('should reject the promise if the server returns a 404', () => {
        return expect(getCertificate(`https://localhost:${port}/path`))
            .rejects.toMatchObject({
                message: 'Certificate could not be retrieved',
            });
    });

    it(
        'should source certificates from cache once they have been retrieved',
        async () => {
            const expectedResponse = 'foo bar baz';
            addMatcher('/nonsense', expectedResponse);

            expect((await getCertificate(`https://localhost:${port}/nonsense`)))
                .toEqual(expectedResponse);

            // Clear the known routes so that all requests to the test server
            // return a 404
            clearMatchers();

            // Since this certificate route is cached, it should be available
            // despite the server having been removed.
            expect((await getCertificate(`https://localhost:${port}/nonsense`)))
                .toEqual(expectedResponse);
        }
    );

    it('should cap the cache at 50 elements', async () => {
        addMatcher('/0', '0');
        await getCertificate(`https://localhost:${port}/0`);

        let promises: Array<Promise<any>> = [];
        for (let i = 1; i <= 50; i++) {
            addMatcher(`/${i}`, i.toString(10));
            promises.push(getCertificate(`https://localhost:${port}/${i}`));
        }

        await Promise.all(promises);

        clearMatchers();
        promises = [];

        for (let i = 50; i > 0; i--) {
            promises.push(getCertificate(`https://localhost:${port}/${i}`));
        }

        await Promise.all(promises);

        await expect(getCertificate(`https://localhost:${port}/0`)).rejects
            .toMatchObject({message: 'Certificate could not be retrieved'});
    });
});
