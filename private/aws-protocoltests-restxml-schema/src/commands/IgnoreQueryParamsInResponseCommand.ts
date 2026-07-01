// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IgnoreQueryParamsInResponseOutput } from "../models/models_0";
import { IgnoreQueryParamsInResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IgnoreQueryParamsInResponseCommand}.
 */
export interface IgnoreQueryParamsInResponseCommandInput {}
/**
 * @public
 *
 * The output of {@link IgnoreQueryParamsInResponseCommand}.
 */
export interface IgnoreQueryParamsInResponseCommandOutput extends IgnoreQueryParamsInResponseOutput, __MetadataBearer {}

/**
 * This example ensures that query string bound request parameters are
 * serialized in the body of responses if the structure is used in both
 * the request and response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new IgnoreQueryParamsInResponseCommand(input);
 * const response = await client.send(command);
 * // { // IgnoreQueryParamsInResponseOutput
 * //   baz: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IgnoreQueryParamsInResponseCommandInput - {@link IgnoreQueryParamsInResponseCommandInput}
 * @returns {@link IgnoreQueryParamsInResponseCommandOutput}
 * @see {@link IgnoreQueryParamsInResponseCommandInput} for command's `input` shape.
 * @see {@link IgnoreQueryParamsInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class IgnoreQueryParamsInResponseCommand extends command<IgnoreQueryParamsInResponseCommandInput, IgnoreQueryParamsInResponseCommandOutput>(
  _ep0,
  _mw0,
  "IgnoreQueryParamsInResponse",
  IgnoreQueryParamsInResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: IgnoreQueryParamsInResponseOutput;
    };
    sdk: {
      input: IgnoreQueryParamsInResponseCommandInput;
      output: IgnoreQueryParamsInResponseCommandOutput;
    };
  };
}
