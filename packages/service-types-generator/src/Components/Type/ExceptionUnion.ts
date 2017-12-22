import {Import} from '../Import';
import {Union} from './Union';
import {UNKNOWN_EXCEPTION} from '../../constants';

export class ExceptionUnion extends Union {
    constructor(
        constituentShapeNames: Array<string>,
        typeName: string
    ) {
        if (constituentShapeNames.indexOf(UNKNOWN_EXCEPTION) === -1) {
            constituentShapeNames.push(UNKNOWN_EXCEPTION);
        }
        super(constituentShapeNames, typeName)
    }

    protected get imports(): string {
        return this.constituentShapeNames
            .map(shape => {
                if (shape === UNKNOWN_EXCEPTION) {
                    return new Import('@aws/types', shape);
                }
                return new Import(`./${shape}`, shape)
            })
            .join('\n');
    }
}
