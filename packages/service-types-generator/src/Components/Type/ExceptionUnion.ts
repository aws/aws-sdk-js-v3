import {Import} from '../Import';
import {Union} from './Union';
import {SDK_EXCEPTIONS} from '../../constants';

export class ExceptionUnion extends Union {
    constructor(
        constituentShapeNames: Array<string>,
        typeName: string
    ) {
        super(constituentShapeNames, typeName)
    }

    protected get imports(): string {
        return this.constituentShapeNames
            .map(shape => {
                if (shape === SDK_EXCEPTIONS) {
                    return new Import('@aws/types', shape);
                }
                return new Import(`./${shape}`, shape)
            })
            .join('\n');
    }
}
