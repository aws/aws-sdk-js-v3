// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRestApisRequest, RestApis } from "../models/models_0";
import { GetRestApis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRestApisCommand}.
 */
export interface GetRestApisCommandInput extends GetRestApisRequest {}
/**
 * @public
 *
 * The output of {@link GetRestApisCommand}.
 */
export interface GetRestApisCommandOutput extends RestApis, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApisCommand } from "@aws-sdk/aws-protocoltests-restjson-schema-apigateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApisCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema-apigateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema-apigateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetRestApisRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetRestApisCommand(input);
 * const response = await client.send(command);
 * // { // RestApis
 * //   items: [ // ListOfRestApi
 * //     { // RestApi
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //       warnings: [ // ListOfString
 * //         "STRING_VALUE",
 * //       ],
 * //       binaryMediaTypes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       minimumCompressionSize: Number("int"),
 * //       apiKeySource: "HEADER" || "AUTHORIZER",
 * //       endpointConfiguration: { // EndpointConfiguration
 * //         types: [ // ListOfEndpointType
 * //           "REGIONAL" || "EDGE" || "PRIVATE",
 * //         ],
 * //         vpcEndpointIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       policy: "STRING_VALUE",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       disableExecuteApiEndpoint: true || false,
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRestApisCommandInput - {@link GetRestApisCommandInput}
 * @returns {@link GetRestApisCommandOutput}
 * @see {@link GetRestApisCommandInput} for command's `input` shape.
 * @see {@link GetRestApisCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 */
export class GetRestApisCommand extends command<GetRestApisCommandInput, GetRestApisCommandOutput>(
  _ep0,
  _mw0,
  "GetRestApis",
  GetRestApis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestApisRequest;
      output: RestApis;
    };
    sdk: {
      input: GetRestApisCommandInput;
      output: GetRestApisCommandOutput;
    };
  };
}
