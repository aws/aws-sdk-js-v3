import {
    RuntimeTarget,
    TreeModel
} from '@aws/build-types';

import {Command} from './Components/Command/command';

export class CommandGenerator {
    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {
            metadata,
            operations
        } = this.model;

        for (let operationName of Object.keys(operations)) {
            const operation = operations[operationName];

            const command = new Command(operation, this.target);

            yield [command.className, command.toString()];
        }
    }
}