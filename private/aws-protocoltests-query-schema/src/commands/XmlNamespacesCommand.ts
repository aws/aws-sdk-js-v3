// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlNamespacesOutput } from "../models/models_0";
import { XmlNamespaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandOutput extends XmlNamespacesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlNamespacesCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, XmlNamespacesCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // XmlNamespacesOutput
 * //   nested: { // XmlNamespaceNested
 * //     foo: "STRING_VALUE",
 * //     values: [ // XmlNamespacedList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlNamespacesCommandInput - {@link XmlNamespacesCommandInput}
 * @returns {@link XmlNamespacesCommandOutput}
 * @see {@link XmlNamespacesCommandInput} for command's `input` shape.
 * @see {@link XmlNamespacesCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlNamespacesCommand extends command<XmlNamespacesCommandInput, XmlNamespacesCommandOutput>(
  _ep0,
  _mw0,
  "XmlNamespaces",
  XmlNamespaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlNamespacesOutput;
    };
    sdk: {
      input: XmlNamespacesCommandInput;
      output: XmlNamespacesCommandOutput;
    };
  };
}
