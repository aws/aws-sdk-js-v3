# How to generate clients from Smithy model

## Prerequisite

This script requires Node.js >= 12

## Options:

```
  -m, --models  The directory of models.                                [string]
  -g, --globs   A list of smithy model globs                             [array]
  -o, --output  The output directory for built clients
           [string] [default: "../../clients"]
  --help        Show help                                              [boolean]
```

## Examples:

- Generate clients from folder with models:

  `yarn generate-clients -m path/to/model`

- Generate clients from a glob (e.g. generating S3, S3Control and DynamoDB clients):

  `yarn generate-clients -g path/to/models/s3*.json path/to/another/dynamodb*.json`

- Generate all known AWS clients:

  `yarn generate-clients`
