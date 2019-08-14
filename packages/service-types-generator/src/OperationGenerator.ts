import { Operation } from "./Components/Model";
import { TreeModel } from "@aws-sdk/build-types";

export class OperationGenerator {
  constructor(private readonly model: TreeModel) {}

  *[Symbol.iterator](): Iterator<[string, string]> {
    const { operations } = this.model;
    for (let operationName of Object.keys(operations)) {
      const operation = operations[operationName];
      //always refer operation.name to operationName.
      //fix: https://github.com/aws/aws-models/blob/b0fc604f00ce8a3fe50ae39445afabffa0c2982a/cloudfront/2019-03-26/service-2.json#L34
      operation.name = operationName;
      yield [operationName, new Operation(operation).toString()];
    }
  }
}
