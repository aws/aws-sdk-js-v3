import { HttpRequest } from "@smithy/core/protocols";
import http from "node:http";
import type { AddressInfo, Socket } from "node:net";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { WorkerHttpHandler } from "./worker-http-handler";

describe(WorkerHttpHandler.name, () => {
  const body = Buffer.from("checksum-test-body");
  const correctSha256 = "pK++4OyzmM31LhKizR9JRbzN3Jmmf4QYxAEFFDCNbJM="; // SHA256(body), base64
  const incorrectSha256 = Buffer.alloc(32).toString("base64");

  let server: http.Server;
  let port: number;
  let tmpDir: string;
  let handler: WorkerHttpHandler;
  const sockets = new Set<Socket>();

  beforeAll(async () => {
    server = http.createServer((request, response) => {
      request.resume();
      request.on("end", () => {
        response.writeHead(206, {
          "content-length": body.length,
          "content-range": `bytes 0-${body.length - 1}/${body.length}`,
          "x-amz-checksum-sha256": request.url === "/valid" ? correctSha256 : incorrectSha256,
        });
        response.end(body);
      });
    });
    server.on("connection", (socket) => {
      sockets.add(socket);
      socket.on("close", () => sockets.delete(socket));
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));

    port = (server.address() as AddressInfo).port;
    tmpDir = await mkdtemp(join(tmpdir(), "tm-worker-http-handler-"));
    handler = new WorkerHttpHandler({ workerThreadCount: 4 });
  });

  afterAll(async () => {
    handler.destroy();
    for (const socket of sockets) {
      socket.destroy();
    }
    await new Promise<void>((resolve) => server.close(() => resolve()));
    await rm(tmpDir, { recursive: true });
  });

  const request = (path: "/valid" | "/invalid") =>
    new HttpRequest({
      protocol: "http:",
      hostname: "127.0.0.1",
      port,
      method: "GET",
      path,
      headers: { host: `127.0.0.1:${port}` },
    });

  it("accepts a valid checksum in a download-to-file worker", async () => {
    const filePath = join(tmpDir, "valid-download.bin");
    const resultToken = "valid-file-checksum";
    await writeFile(filePath, Buffer.alloc(body.length));

    await handler.handle(request("/valid"), {
      downloadDataToFile: {
        filePath,
        offset: 0,
        expectedLength: body.length,
        resultToken,
      },
    });

    expect(handler.getDownloadResult(resultToken)).toEqual({
      bytesWritten: body.length,
      checksum: correctSha256,
    });
    expect(Buffer.from(await readFile(filePath)).equals(body)).toBe(true);
  });

  it("accepts a valid checksum in a stream-download worker", async () => {
    const resultToken = "valid-stream-checksum";

    await handler.handle(request("/valid"), {
      downloadStream: {
        expectedSize: body.length,
        rangeIndex: 0,
        resultToken,
      },
    });

    const result = handler.getStreamDownloadResult(resultToken);
    expect(result).toMatchObject({
      byteLength: body.length,
      checksum: correctSha256,
    });
    expect(Buffer.from(result!.buffer, 0, result!.byteLength).equals(body)).toBe(true);
    handler.returnBuffer(result!.buffer);
  });

  it("rejects an invalid checksum in a download-to-file worker", async () => {
    const filePath = join(tmpDir, "download.bin");
    await writeFile(filePath, Buffer.alloc(body.length));

    await expect(
      handler.handle(request("/invalid"), {
        downloadDataToFile: {
          filePath,
          offset: 0,
          expectedLength: body.length,
          resultToken: "file-checksum-mismatch",
        },
      })
    ).rejects.toMatchObject({
      name: "ChecksumValidationError",
      code: "CHECKSUM_MISMATCH",
    });
  });

  it("rejects an invalid checksum in a stream-download worker", async () => {
    await expect(
      handler.handle(request("/invalid"), {
        downloadStream: {
          expectedSize: body.length,
          rangeIndex: 0,
          resultToken: "stream-checksum-mismatch",
        },
      })
    ).rejects.toMatchObject({
      name: "ChecksumValidationError",
      code: "CHECKSUM_MISMATCH",
    });
  });
});
