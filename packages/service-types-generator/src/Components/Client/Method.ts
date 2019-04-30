import { TreeModelOperation } from "@aws-sdk/build-types";

export class Method {
  constructor(private readonly operation: TreeModelOperation) {}

  toString(): string {
    const {
      documentation,
      input: {
        shape: { name: inputName }
      },
      name,
      output: {
        shape: { name: outputName }
      }
    } = this.operation;
    const methodName = name.substring(0, 1).toLowerCase() + name.substring(1);
    const commandName = `${name}Command`;
    return `
/**
 * ${documentation}
 *
 * This operation may fail with one of the following errors:
${this.errors()}
 */
public ${methodName}(args: ${inputName}): Promise<${outputName}>;
public ${methodName}(
    args: ${inputName},
    cb: (err: any, data?: ${outputName}) => void
): void;
public ${methodName}(
    args: ${inputName},
    cb?: (err: any, data?: ${outputName}) => void
): Promise<${outputName}>|void {
    // create the appropriate command and pass it to .send
    const command = new ${commandName}(args);
    if (typeof cb === 'function') {
        this.send(command, cb);
    } else {
        return this.send(command);
    }
}
        `.trim();
  }

  private errors(): string {
    const errors = this.operation.errors.map(
      err => ` *   - {${err.shape.name}} ${err.shape.documentation}`
    );

    errors.push(
      " *   - {Error} An error originating from the SDK or customizations rather than the service"
    );

    return errors.join("\n");
  }
}
