// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlIntEnumsOutput } from "../models/models_0";
import { XmlIntEnums$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandOutput extends XmlIntEnumsOutput, __MetadataBearer {}

/**
 * This example serializes intEnums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, XmlIntEnumsCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, XmlIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2-schema";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new XmlIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // XmlIntEnumsOutput
 * //   intEnum1: 1 || 2 || 3,
 * //   intEnum2: 1 || 2 || 3,
 * //   intEnum3: 1 || 2 || 3,
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumMap: { // IntegerEnumMap
 * //     "<keys>": 1 || 2 || 3,
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlIntEnumsCommandInput - {@link XmlIntEnumsCommandInput}
 * @returns {@link XmlIntEnumsCommandOutput}
 * @see {@link XmlIntEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class XmlIntEnumsCommand extends command<XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput>(
  _ep0,
  _mw0,
  "XmlIntEnums",
  XmlIntEnums$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlIntEnumsOutput;
    };
    sdk: {
      input: XmlIntEnumsCommandInput;
      output: XmlIntEnumsCommandOutput;
    };
  };
}
