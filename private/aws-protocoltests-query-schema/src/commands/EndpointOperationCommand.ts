// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { EndpointOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, EndpointOperationCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, EndpointOperationCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new EndpointOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointOperationCommandInput - {@link EndpointOperationCommandInput}
 * @returns {@link EndpointOperationCommandOutput}
 * @see {@link EndpointOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointOperationCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class EndpointOperationCommand extends command<EndpointOperationCommandInput, EndpointOperationCommandOutput>(
  _ep0,
  _mw0,
  "EndpointOperation",
  EndpointOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EndpointOperationCommandInput;
      output: EndpointOperationCommandOutput;
    };
  };
}
