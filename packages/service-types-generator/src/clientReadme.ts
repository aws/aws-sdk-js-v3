import {
  TreeModel,
  ApiModel,
  TreeModelOperationMember,
  TreeModelMember,
  TreeModelOperation,
  TreeModelStructure
} from "@aws-sdk/build-types";
import { serviceIdFromMetadata } from "./serviceIdFromMetadata";
import { IndentedSection } from "./Components/IndentedSection";

export interface ReadmeInterface {
  model: TreeModel;
  name: string;
  runtime: string;
}

export function readme({ model, name: packageName, runtime }: ReadmeInterface) {
  const description =
    (model.documentation as string) ||
    `${runtime.substring(0, 1).toUpperCase()}${runtime.substring(1)} SDK for ${
      model.metadata.serviceFullName
    }`;
  const serviceId = serviceIdFromMetadata(model.metadata).replace(/\s/g, "");
  //choose first operation as example;
  //since operation map keys are string, the order can be preserved;

  const {
    exampleCommandName,
    commandNameWithOutputStream
  } = selectExampleCommand(model);
  const exampleCommand = model.operations[exampleCommandName];
  // console.log(Object.keys(model.operations)[0], '____', exampleCommand)
  return `# ${packageName}

[![NPM version](https://img.shields.io/npm/v/${packageName}/preview.svg)](https://www.npmjs.com/package/${packageName})
[![NPM downloads](https://img.shields.io/npm/dm/${packageName}.svg)](https://www.npmjs.com/package/${packageName})

## Description

${description}

## Installing

To install the this package using NPM, simply type the following into a terminal window: 

\`\`\`
npm install ${packageName}
\`\`\`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(\`${serviceId}Client\`) and the commands you need, for example \`${
    exampleCommand.name
  }Command\`:

\`\`\`javascript
//JavaScript
const {
  ${serviceId}Client,
  ${exampleCommand.name}Command
} = require("${packageName}");
\`\`\`

\`\`\`javascript
//TypeScript
import {
  ${serviceId}Client,
  ${exampleCommand.name}Command
} from '${packageName}';
\`\`\`

### Usage

To send a request, you:

* Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
* Initiate command with input parameters.
* Call \`send\` operation on client with command object as input.
* If you are using a custom http handler, you may call \`destroy()\` to close open connections. 

\`\`\`javascript
const ${lowerFirst(serviceId)} = new ${serviceId}Client({region: 'region'});
//clients can be shared by different commands
const params = ${initParams(exampleCommand.input, runtime)};
const ${lowerFirst(exampleCommand.name)}Command = new ${
    exampleCommand.name
  }Command(params);
${lowerFirst(serviceId)}.send(${lowerFirst(
    exampleCommand.name
  )}Command).then(data => {
    // do something${
      commandNameWithOutputStream === exampleCommandName
        ? `\n${new IndentedSection(
            outputStreamParamComment(exampleCommand.output, runtime)
          )}`
        : ""
    }
}).catch(error => {
    // error handling
})
\`\`\`

In addition to using promises, there are 2 other ways to send a request:

\`\`\`javascript
// async/await
try {
    const data = await ${lowerFirst(serviceId)}.send(${lowerFirst(
    exampleCommand.name
  )}Command);
    // do something
} catch(error) {
    // error handling
}
\`\`\`

\`\`\`javascript
// callback
${lowerFirst(serviceId)}.send(${lowerFirst(
    exampleCommand.name
  )}Command, (err, data) => {
    //do something
})
\`\`\`
 
The SDK can also send requests using the simplified callback style from version 2 of the SDK.

\`\`\`javascript
import * as AWS from '${packageName}';
const ${lowerFirst(serviceId)} = new AWS.${serviceId}({region: 'region'})
${lowerFirst(serviceId)}.${lowerFirst(
    exampleCommand.name
  )}(params, (err, data) => {
    //do something
})

\`\`\`
${
  commandNameWithOutputStream &&
  commandNameWithOutputStream !== exampleCommandName
    ? `\n${outputStreamComment(
        model.operations[commandNameWithOutputStream],
        runtime
      )}\n`
    : ""
}
### Troubleshooting 

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

\`\`\`javascript
try {
    const data = await ${lowerFirst(serviceId)}.send(${lowerFirst(
    exampleCommand.name
  )}Command);
    // do something
} catch(error) {
    const metadata = error.$metadata;
    console.log(
\`requestId: \${metadata.requestId}
cfId: \${metadata.cfId}
extendedRequestId: \${metadata.extendedRequestId}\`
    );
/*
The keys within exceptions are also parsed. You can access them by specifying exception names:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
\`\`\`

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with \`aws-sdk-js\`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing
 
This client code is generated automatically. Any modifications will be overwritten the next time the \`@aws-sdk/${packageName}\' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator

[API reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
`;
}

function lowerFirst(content: string): string {
  return `${content[0].toLowerCase()}${content.substring(1)}`;
}

function initParams(input: TreeModelOperationMember, runtime: string): string {
  const members = input.shape.members;
  if (input.shape.required.length === 0) {
    return "{}";
  }
  return `{
${new IndentedSection(
  Object.keys(members)
    .filter(
      //show example of assigning parameters that required or streaming
      paramName =>
        input.shape.required.indexOf(paramName) > -1 ||
        isStreamingMember(members[paramName])
    )
    .map(
      paramName =>
        `${paramName}: ${paramsValue(members[paramName], paramName, runtime)},`
    )
    .join("\n")
)}
}`;
}

function paramsValue(
  member: TreeModelMember,
  name: string,
  runtime: string
): string {
  const shape = member.shape;
  let comment: string;
  switch (shape.type) {
    case "structure":
      comment = `{ /**an object specifying ${name}*/ }`;
      break;
    case "list":
      comment = `[ /**a list of ${shape.member.shape.type}*/ ]`;
      break;
    case "map":
      comment = `{ /**a map with key of ${shape.key.shape.type} and value of ${shape.value.shape.type}*/ }`;
      break;
    case "timestamp":
      comment = `/**a timestamp can be number, string or Date object*/`;
      break;
    default:
      comment = `/**a ${shape.type} value*/`;
  }
  const streamingExampleBlock = inputStreamParamComment(member, runtime);
  if (streamingExampleBlock) return [comment, streamingExampleBlock].join("\n");
  return comment;
}

function inputStreamParamComment(
  member: TreeModelMember,
  runtime: string
): string | undefined {
  if (!isStreamingMember(member)) return undefined;
  if (runtime === "node") {
    return "/**You can supply readable stream to streaming input. e.g. fs.createReadStream(file) */";
  } else if (runtime === "browser") {
    return "/**You can supply readable stream to streaming input. e.g. (await fetch(input)).body */";
  } else if (runtime === "universal") {
    return "/**You can supply readable stream to streaming input. */";
  }
  return undefined;
}

function outputStreamComment(
  operation: TreeModelOperation,
  runtime: string
): string {
  return `For operations containing stream response like \`${
    operation.name
  }()\`, ${lowerFirst(
    outputStreamParamComment(operation.output, runtime)
  )}.(\`data\` is the resolved response object)`;
}

function outputStreamParamComment(
  member: TreeModelMember,
  runtime: string
): string {
  const outputMembers = (member.shape as TreeModelStructure).members;
  const streamingMember = Object.keys(outputMembers).filter(name =>
    isStreamingMember(outputMembers[name])
  )[0];
  if (runtime === "node")
    return `You can get response stream by accessing to streaming member. e.g. data.${streamingMember}.pipe(/* some writable stream */)`;
  if (runtime === "browser")
    return `You can get response stream by accessing to streaming member. e.g. data.${streamingMember}.getReader().read().then(/* do something and continue reading */)`;
  if (runtime === "universal")
    return "You can get response stream by accessing to streaming member.";
  return "";
}

function isStreamingMember(member: TreeModelMember): boolean {
  return Boolean(
    member.streaming ||
      (member.shape && member.shape.type === "blob" && member.shape.streaming)
  );
}

function searchForStreamingOperation(
  model: TreeModel,
  isOutput: boolean = false
): Array<string> {
  let streamingOperations = [];
  for (const operationName of Object.keys(model.operations)) {
    const operation = model.operations[operationName];
    const io = isOutput ? operation.output : operation.input;
    if (!io) return [];
    for (const memberName of Object.keys(io.shape.members)) {
      const member = io.shape.members[memberName];
      if (isStreamingMember(member)) streamingOperations.push(operation.name);
    }
  }
  return streamingOperations.sort();
}

/**
 * Function to select commands as examples. The Command for example is preferable to have stream input and output,
 * stream input or stream output, sorted by preference.
 */
function selectExampleCommand(
  model: TreeModel
): { exampleCommandName: string; commandNameWithOutputStream?: string } {
  const streamingInputOperations = searchForStreamingOperation(model);
  const isOutput = true;
  const streamingOutputOperations = searchForStreamingOperation(
    model,
    isOutput
  );
  if (
    streamingInputOperations.length > 0 &&
    streamingOutputOperations.length > 0 &&
    streamingInputOperations[0] === streamingOutputOperations[0]
  ) {
    //will prefer choosing operation has both streaming input and output(don't exist currently)
    return { exampleCommandName: streamingInputOperations[0] };
  } else if (streamingInputOperations.length > 0) {
    //next prefer operation has streaming input member
    return {
      exampleCommandName: streamingInputOperations[0],
      commandNameWithOutputStream:
        streamingOutputOperations.length > 0
          ? streamingOutputOperations[0]
          : undefined
    };
  } else {
    return {
      exampleCommandName: Object.keys(model.operations)[0],
      commandNameWithOutputStream:
        streamingOutputOperations.length > 0
          ? streamingOutputOperations[0]
          : undefined
    };
  }
}
