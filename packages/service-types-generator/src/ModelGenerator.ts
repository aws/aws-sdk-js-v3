import {
  List as ListModule,
  Map as MapModule,
  Structure as StructureModule,
  ServiceMetadata
} from "./Components/Model";
import { CircularDependenciesMap } from "./Components/helpers/detectCircularModelDependency";
import { TreeModel } from "@aws-sdk/build-types";

export class ModelGenerator {
  constructor(
    private readonly model: TreeModel,
    private readonly circularDependencies: CircularDependenciesMap = {}
  ) {}

  *[Symbol.iterator](): Iterator<[string, string]> {
    const { shapes } = this.model;
    for (let shapeName of Object.keys(shapes)) {
      const shape = shapes[shapeName];
      if (shape.type === "list") {
        yield [
          shapeName,
          new ListModule(shape, this.circularDependencies).toString()
        ];
      } else if (shape.type === "map") {
        yield [
          shapeName,
          new MapModule(shape, this.circularDependencies).toString()
        ];
      } else if (shape.type === "structure") {
        yield [
          shapeName,
          new StructureModule(shape, this.circularDependencies).toString()
        ];
      }
    }
    yield [
      "ServiceMetadata",
      new ServiceMetadata(this.model.metadata).toString()
    ];
  }
}
