import {
    Exception,
    Input,
    ModeledStructure,
    Output,
    Union,
} from './Components/Type';
import { streamType } from './streamType';
import { getServiceCustomizations } from './ServiceCustomizations';
import {
    CustomizationDefinition,
    ParameterSuppressionCustomizationDefinition,
    RuntimeTarget,
    ServiceCustomizationDefinition,
    SyntheticParameterCustomizationDefinition,
    TreeModel,
} from '@aws-sdk/build-types';

export class TypeGenerator {
    private readonly inputCustomizations: Array<ParamCustomization> = [];
    private readonly outputCustomizations: Array<ParamCustomization> = [];
    private readonly scopedCustomizations: {
        [shapeName: string]: Array<ParamCustomization>
    } = {};

    constructor(
        private readonly model: TreeModel,
        private readonly runtime: RuntimeTarget
    ) {
        const {client, commands} = getServiceCustomizations(model, runtime);
        const customParams = client.filter(isParamCustomization);

        this.inputCustomizations.push(...customParams.filter(isInputParam));
        this.outputCustomizations.push(...customParams.filter(isOutputParam));

        for (const operationName of Object.keys(commands)) {
            const {
                input: {shape: {name: inputName}},
                output: {shape: {name: outputName}}
            } = model.operations[operationName];
            const customParams = commands[operationName].filter(isParamCustomization);
            this.scopedCustomizations[inputName] = customParams.filter(isInputParam);
            this.scopedCustomizations[outputName] = customParams.filter(isOutputParam);
        }
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        const ioShapes: {[key: string]: Array<string>} = {
            InputTypesUnion: [],
            OutputTypesUnion: []
        };
        const {shapes, operations} = this.model;

        for (let shapeName of Object.keys(shapes)) {
            const shape = shapes[shapeName];
            if (shape.type === 'structure') {
                if (shape.topLevel === 'input') {
                    ioShapes.InputTypesUnion.push(shapeName);
                    yield [
                        shapeName,
                        new Input(
                            shape,
                            this.runtime,
                            this.inputCustomizations.concat(
                                this.scopedCustomizations[shapeName] || []
                            )
                        ).toString(),
                    ];
                } else if (shape.topLevel === 'output') {
                    ioShapes.OutputTypesUnion.push(shapeName);
                    yield [
                        shapeName,
                        new Output(
                            shape,
                            this.runtime,
                            this.outputCustomizations.concat(
                                this.scopedCustomizations[shapeName] || []
                            )
                        ).toString(),
                    ];
                } else if (shape.exception) {
                    yield [
                        shapeName,
                        new Exception(shape).toString(),
                    ];
                } else {
                    yield [
                        shapeName,
                        new ModeledStructure(shape).toString(),
                    ];
                }
            }
        }

        for (const name of Object.keys(ioShapes)) {
            yield [name, new Union(ioShapes[name], name).toString()];
        }

        for (let operationName of Object.keys(operations)) {
            const deduplicatedErrorNames = operations[operationName].errors.reduce<Set<string>>(
                (rest, currentError): Set<string> => {
                    return rest.add(currentError.shape.name)
                }, new Set<string>()
            );
            yield [
                this.exceptionTypesUnion(operationName),
                new Union(Array.from(deduplicatedErrorNames), this.exceptionTypesUnion(operationName)).toString()
            ];
        }
    }

    private exceptionTypesUnion(operationName: string) {
        return `${operationName}ExceptionsUnion`;
    }
}

type ParamCustomization = SyntheticParameterCustomizationDefinition |
    ParameterSuppressionCustomizationDefinition;

function isInputParam(arg: ParamCustomization): boolean {
    return arg.location === 'input';
}

function isOutputParam(arg: ParamCustomization): boolean {
    return arg.location === 'output';
}

function isParamCustomization(
    arg: CustomizationDefinition
): arg is ParamCustomization {
    return arg.type === 'SyntheticParameter' ||
        arg.type === 'ParameterSuppression';
}
