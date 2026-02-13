const _EA = "Ec2Alias";
const _PEA = "PutEc2Alias";
const _PEAR = "PutEc2AliasRequest";
const _a = "alias";
const _eMNWA = "ec2MemberNameWithAliases";
const _eMNWNA = "ec2MemberNameWithNoAlias";
const _eMNWOEA = "ec2MemberNameWithOnlyEc2Alias";
const _eMNWOXA = "ec2MemberNameWithOnlyXmlAlias";
const _eQN = "ec2QueryName";
const _eXMNWA = "ec2XmlMemberNameWithAliases";
const _eXMNWOXA = "ec2XmlMemberNameWithOnlyXmlAlias";
const _s = "smithy.ts.sdk.synthetic.awssdkjs.example";
const _xN = "xmlName";
const n0 = "awssdkjs.example";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { Ec2MockServiceException } from "../models/Ec2MockServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var Ec2MockServiceException$: StaticErrorSchema = [-3, _s, "Ec2MockServiceException", 0, [], []];
_s_registry.registerError(Ec2MockServiceException$, Ec2MockServiceException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
]
export var Ec2Alias$: StaticStructureSchema = [3, n0, _EA,
  0,
  [_eMNWA, _eMNWOXA, _eMNWOEA, _eMNWNA],
  [[0, { [_eQN]: `ec2QueryMemberNameWithAliases`
  , [_xN]: _eXMNWA }], [0, { [_xN]: _eXMNWOXA }], [0, { [_eQN]: `ec2QueryMemberNameWithOnlyEc2Alias`
   }], 0]
];
export var PutEc2AliasRequest$: StaticStructureSchema = [3, n0, _PEAR,
  0,
  [_a],
  [[() => Ec2Alias$, 0]]
];
var __Unit = "unit" as const;
export var PutEc2Alias$: StaticOperationSchema = [9, n0, _PEA,
  0, () => PutEc2AliasRequest$, () => __Unit
];
