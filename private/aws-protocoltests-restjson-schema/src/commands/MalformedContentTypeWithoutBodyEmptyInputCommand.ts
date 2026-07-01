// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedContentTypeWithoutBodyEmptyInputInput } from "../models/models_0";
import { MalformedContentTypeWithoutBodyEmptyInput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithoutBodyEmptyInputCommand}.
 */
export interface MalformedContentTypeWithoutBodyEmptyInputCommandInput extends MalformedContentTypeWithoutBodyEmptyInputInput {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithoutBodyEmptyInputCommand}.
 */
export interface MalformedContentTypeWithoutBodyEmptyInputCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithoutBodyEmptyInputCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithoutBodyEmptyInputCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedContentTypeWithoutBodyEmptyInputInput
 *   header: "STRING_VALUE",
 * };
 * const command = new MalformedContentTypeWithoutBodyEmptyInputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithoutBodyEmptyInputCommandInput - {@link MalformedContentTypeWithoutBodyEmptyInputCommandInput}
 * @returns {@link MalformedContentTypeWithoutBodyEmptyInputCommandOutput}
 * @see {@link MalformedContentTypeWithoutBodyEmptyInputCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithoutBodyEmptyInputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithoutBodyEmptyInputCommand extends command<MalformedContentTypeWithoutBodyEmptyInputCommandInput, MalformedContentTypeWithoutBodyEmptyInputCommandOutput>(
  _ep0,
  _mw0,
  "MalformedContentTypeWithoutBodyEmptyInput",
  MalformedContentTypeWithoutBodyEmptyInput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedContentTypeWithoutBodyEmptyInputInput;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithoutBodyEmptyInputCommandInput;
      output: MalformedContentTypeWithoutBodyEmptyInputCommandOutput;
    };
  };
}
