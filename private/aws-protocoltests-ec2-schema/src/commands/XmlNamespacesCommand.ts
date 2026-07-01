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
 * import { EC2ProtocolClient, XmlNamespacesCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, XmlNamespacesCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2-schema";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
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
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
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
