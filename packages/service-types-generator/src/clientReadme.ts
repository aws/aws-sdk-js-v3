import {TreeModel, ApiModel, TreeModelOperationMember, TreeModelMember} from '@aws/build-types';
import { serviceIdFromMetadata } from './serviceIdFromMetadata';
import { IndentedSection } from './Components/IndentedSection'

export interface ReadmeInterface {
    model: TreeModel, 
    name: string, 
    runtime: string
}

export function readme({
    model,
    name: packageName,
    runtime,
}: ReadmeInterface) {
    const description = model.documentation as string || 
        `${runtime.substring(0, 1).toUpperCase()}${runtime.substring(1)} SDK for ${model.metadata.serviceFullName}`
    const serviceId = serviceIdFromMetadata(model.metadata).replace(/\s/g, '');
    //choose first operation as example; 
    //since operation map keys are string, the order can be preserved;
    const exampleCommand = model.operations[Object.keys(model.operations)[0]];
    // console.log(Object.keys(model.operations)[0], '____', exampleCommand)
    return `# ${packageName}

## Description

${description}

## Installing

To install the this package using NPM, simply type the following into a terminal window: 

\`\`\`
npm install @aws/${packageName}
\`\`\`

## Getting Started

### Import

The AWS SDK is modulized by clients and commends in ES modules. To send a request, you only need to import the client(\`${serviceId}Client\`) and the commands you need, for example \`${exampleCommand.name}Command\`:

\`\`\`javascript
const { ${serviceId}Client } = require('@aws/${packageName}/${serviceId}Client');
const { ${exampleCommand.name}Command } = require('@aws/${packageName}/commands/${exampleCommand.name}Command');
\`\`\`

### Usage

To send a request, you may 

* Initiate client with configurations.(credentials, region)
* Initiate command with input parameters.
* Call \`send\` operation of client with command object as input.
* If you are using customized http handler, you may call \`destroy()\` to close opon connections. 

\`\`\`javascript
const ${lowerFirst(serviceId)} = new ${serviceId}Client({region: 'region'});
//clients can be shared by different commands
const params = ${initParams(exampleCommand.input)};
const ${lowerFirst(exampleCommand.name)}Command = new ${exampleCommand.name}Command(params);
${lowerFirst(serviceId)}.send(${lowerFirst(exampleCommand.name)}Command).then(data => {
    // do something
}).catch(error => {
    // error handling
})
\`\`\`

Besides using promise style, there are 2 other ways to send a request:

\`\`\`javascript
// async/await
try {
    const data = await ${lowerFirst(serviceId)}.send(${lowerFirst(exampleCommand.name)}Command);
    // do something
} catch(error) {
    // error handling
}
\`\`\`

\`\`\`javascript
// callback
${lowerFirst(serviceId)}.send(${lowerFirst(exampleCommand.name)}Command, (err, data) => {
    //do something
})
\`\`\`

Besides of using \`send()\`, SDK can also send request in a traditional way:

\`\`\`javascript
import * as AWS from '@aws/${packageName}/${serviceId}';
const ${lowerFirst(serviceId)} = new AWS.${serviceId}({region: 'region'})
${lowerFirst(serviceId)}.${lowerFirst(exampleCommand.name)}(params, (err, data) => {
    //do something
})
\`\`\`

### Troubleshooting 

When the service returns an exception, inpecting the exceptions is always helpful. You can not only access the exception information but also response metadata(i.e request id).

\`\`\`javascript
try {
    const data = await ${lowerFirst(serviceId)}.send(${lowerFirst(exampleCommand.name)}Command);
    // do something
} catch(error) {
    const metadata = error.$metadata;
    console.log(
\`requestId: \${metadata.requestId}
cfId: \${metadata.cfId}
extendedRequestId: \${metadata.extendedRequestId}\`
    );
}
\`\`\`

Most of the exceptions thrown by services are documented, you can find them by its \`name\` property from [SDK doc](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with \`aws-sdk-js\`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js?source=orgpage)
 * If it turns out that you may have found a bug, please [open an issue](TODO)

 ## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the ${packageName} SDK is updated. To contribute to SDK you can checkout our [code generator repository](todo).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

`
}

function lowerFirst(content: string): string {
    return `${content[0].toLowerCase()}${content.substring(1)}`
}

function initParams(input: TreeModelOperationMember): string {
    const members = input.shape.members;
    if (input.shape.required.length === 0) {
        return '{}';
    }
    return `{
${
        new IndentedSection(Object.keys(members).map(paramName => {
            // console.log(paramName, input.shape.required.indexOf(paramName), members[paramName]);
            return input.shape.required.indexOf(paramName) > -1 ? 
                `${paramName}: ${paramsValue(members[paramName], paramName)},` :
                ''
            }).join('\n')
        )
}}`
}

function paramsValue(member: TreeModelMember, name: string): string {
    const shape = member.shape
    switch (shape.type) {
        case 'structure': 
            return `{ /**an object specifying ${name}*/ }`;
        case 'list':
            return `[ /**a list of ${shape.member.shape.name}*/ ]`;
        case 'map':
            return `{ /**a map with key of ${shape.key.shape.name} and value of ${shape.value.shape.name}*/ }`;
        case 'timestamp':
            return `/**a timestamp can be number, string for Date object*/`
        default:
            return `/**a ${shape.type} value*/`
    }
}
