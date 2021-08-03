import { promises } from 'fs';
import { createReadStream, writeFile } from "fs-extra";
import * as os from "os";
import * as path from "path";

import { calculateBodyLength } from "./";

const arrayBuffer = new ArrayBuffer(1);
const typedArray = new Uint8Array(1);
const view = new DataView(arrayBuffer);

describe("caclulateBodyLength", () => {
  it("should handle null/undefined objects", () => {
    expect(calculateBodyLength(null)).toEqual(0);
  });

  it("should handle string inputs", () => {
    expect(calculateBodyLength("foo")).toEqual(3);
  });

  it("should handle string inputs with multi-byte characters", () => {
    expect(calculateBodyLength("2。")).toEqual(4);
  });

  it("should handle inputs with byteLengths", () => {
    expect(calculateBodyLength(arrayBuffer)).toEqual(1);
  });

  it("should handle TypedArray inputs", () => {
    expect(calculateBodyLength(typedArray)).toEqual(1);
  });

  it("should handle DataView inputs", () => {
    expect(calculateBodyLength(view)).toEqual(1);
  });

  it("should handle a Readable from a file", async () => {
    const tmpDir = await promises.mkdtemp(path.join(os.tmpdir(), 'test1-'));
    const filePath = path.join(tmpDir, "foo");
    await writeFile(filePath, "foo");
    const handle = await promises.open(filePath, 'r');
    const readStream = createReadStream(filePath, {fd: handle.fd});
    expect(calculateBodyLength(readStream)).toEqual(3);
    readStream.destroy();
    await promises.unlink(filePath);
    await promises.rmdir(tmpDir);
  });

  it("should handle Readable with start end from a file", async () => {
    const tmpDir = await promises.mkdtemp(path.join(os.tmpdir(), 'test2-'));
    const filePath = path.join(tmpDir, "foo");
    await writeFile(filePath, "foo");
    const handle = await promises.open(filePath, 'r');
    const readStream = createReadStream(filePath, {fd: handle.fd, start: 1, end: 1});
    expect(calculateBodyLength(readStream)).toEqual(1);
    readStream.destroy();
    await promises.unlink(filePath);
    await promises.rmdir(tmpDir);
  });
});
