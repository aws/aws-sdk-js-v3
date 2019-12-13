const { parseRequest } = require("@aws-sdk/http-serialization");
const { readdirSync, readFileSync, statSync, writeFileSync } = require("fs");
const { dirname, join } = require("path");

const packageRoot = dirname(__dirname);
const suiteRoot = join(packageRoot, "suite");

const testCases = [];

for (const [testDir, name] of getTestDirectories()) {
  testCases.push({
    name,
    request: Object.assign(
      { protocol: "https:" },
      parseRequest(readFileSync(join(testDir, `${name}.req`), "utf8"))
    ),
    authorization: readFileSync(join(testDir, `${name}.authz`), "utf8")
  });
}

writeFileSync(
  join(packageRoot, "src", "suite.fixture.ts"),
  `
import {HttpRequest} from '@aws-sdk/types';

export interface TestCase {
    name: string;
    request: HttpRequest;
    authorization: string;
}

export const region = 'us-east-1';
export const service = 'service';
export const credentials = {
    accessKeyId: 'AKIDEXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY'
};

export const signingDate = new Date('2015-08-30T12:36:00Z');

export const requests: Array<TestCase> = ${JSON.stringify(testCases, null, 4)};
    `.trim()
);

function* getTestDirectories() {
  for (const basename of readdirSync(suiteRoot)) {
    const dir = join(suiteRoot, basename);
    if (!statSync(dir).isDirectory()) continue;

    for (const entry of readdirSync(dir)) {
      if (entry.match(/\.req$/)) {
        yield [dir, entry.replace(/\.req$/, "")];
      }
    }
  }
}
