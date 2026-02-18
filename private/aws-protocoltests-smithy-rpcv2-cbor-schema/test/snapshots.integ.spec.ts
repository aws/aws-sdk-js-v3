// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  EmptyInputOutput$,
  EmptyInputOutputCommand,
  Float16$,
  Float16Command,
  FractionalSeconds$,
  FractionalSecondsCommand,
  GreetingWithErrors$,
  GreetingWithErrorsCommand,
  NoInputOutput$,
  NoInputOutputCommand,
  OperationWithDefaults$,
  OperationWithDefaultsCommand,
  OptionalInputOutput$,
  OptionalInputOutputCommand,
  RecursiveShapes$,
  RecursiveShapesCommand,
  RpcV2CborDenseMaps$,
  RpcV2CborDenseMapsCommand,
  RpcV2CborLists$,
  RpcV2CborListsCommand,
  RpcV2CborSparseMaps$,
  RpcV2CborSparseMapsCommand,
  RpcV2ProtocolClient,
  SimpleScalarProperties$,
  SimpleScalarPropertiesCommand,
  SparseNullsOperation$,
  SparseNullsOperationCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = RpcV2ProtocolClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("RpcV2ProtocolClient" + ` (${mode})`, () => {
  const runner = new SnapshotRunner({
    snapshotDirPath: join(__dirname, "snapshots"),
    Client,
    mode,
    testCase(caseName: string, run: () => Promise<void>) {
      it(caseName, run);
    },
    assertions(caseName: string, expected: string, actual: string): Promise<void> {
      expect(actual).toEqual(expected);
      return Promise.resolve();
    },
    schemas:
      new Map<any, any>([
        [EmptyInputOutput$, EmptyInputOutputCommand],
        [Float16$, Float16Command],
        [FractionalSeconds$, FractionalSecondsCommand],
        [GreetingWithErrors$, GreetingWithErrorsCommand],
        [NoInputOutput$, NoInputOutputCommand],
        [OperationWithDefaults$, OperationWithDefaultsCommand],
        [OptionalInputOutput$, OptionalInputOutputCommand],
        [RecursiveShapes$, RecursiveShapesCommand],
        [RpcV2CborDenseMaps$, RpcV2CborDenseMapsCommand],
        [RpcV2CborLists$, RpcV2CborListsCommand],
        [RpcV2CborSparseMaps$, RpcV2CborSparseMapsCommand],
        [SimpleScalarProperties$, SimpleScalarPropertiesCommand],
        [SparseNullsOperation$, SparseNullsOperationCommand],
      ]),

  });

  runner.run();
}, 30_000);
