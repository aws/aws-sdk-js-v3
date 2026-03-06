import assert from "node:assert";

import { Graph } from "./Graph.mjs";

export function graphTest() {
  const list = [
    { name: "@aws-sdk/client-s3", location: "clients/client-s3" },
    { name: "@aws-sdk/core", location: "packages-internal/core" },
    { name: "@aws-sdk/crc64-nvme", location: "packages-internal/crc64-nvme" },
    { name: "@aws-sdk/credential-provider-env", location: "packages-internal/credential-provider-env" },
    { name: "@aws-sdk/credential-provider-http", location: "packages-internal/credential-provider-http" },
    { name: "@aws-sdk/credential-provider-ini", location: "packages-internal/credential-provider-ini" },
    { name: "@aws-sdk/credential-provider-login", location: "packages-internal/credential-provider-login" },
    { name: "@aws-sdk/credential-provider-node", location: "packages-internal/credential-provider-node" },
    { name: "@aws-sdk/credential-provider-process", location: "packages-internal/credential-provider-process" },
    { name: "@aws-sdk/credential-provider-sso", location: "packages-internal/credential-provider-sso" },
    {
      name: "@aws-sdk/credential-provider-web-identity",
      location: "packages-internal/credential-provider-web-identity",
    },
    { name: "@aws-sdk/middleware-bucket-endpoint", location: "packages-internal/middleware-bucket-endpoint" },
    { name: "@aws-sdk/middleware-expect-continue", location: "packages-internal/middleware-expect-continue" },
    { name: "@aws-sdk/middleware-flexible-checksums", location: "packages-internal/middleware-flexible-checksums" },
    { name: "@aws-sdk/middleware-host-header", location: "packages-internal/middleware-host-header" },
    { name: "@aws-sdk/middleware-location-constraint", location: "packages-internal/middleware-location-constraint" },
    { name: "@aws-sdk/middleware-logger", location: "packages-internal/middleware-logger" },
    { name: "@aws-sdk/middleware-recursion-detection", location: "packages-internal/middleware-recursion-detection" },
    { name: "@aws-sdk/middleware-sdk-s3", location: "packages-internal/middleware-sdk-s3" },
    { name: "@aws-sdk/middleware-ssec", location: "packages-internal/middleware-ssec" },
    { name: "@aws-sdk/middleware-user-agent", location: "packages-internal/middleware-user-agent" },
    { name: "@aws-sdk/nested-clients", location: "packages-internal/nested-clients" },
    { name: "@aws-sdk/region-config-resolver", location: "packages-internal/region-config-resolver" },
    { name: "@aws-sdk/signature-v4-multi-region", location: "packages-internal/signature-v4-multi-region" },
    { name: "@aws-sdk/token-providers", location: "packages/token-providers" },
    { name: "@aws-sdk/types", location: "packages-internal/types" },
    { name: "@aws-sdk/util-arn-parser", location: "packages-internal/util-arn-parser" },
    { name: "@aws-sdk/util-endpoints", location: "packages-internal/util-endpoints" },
    { name: "@aws-sdk/util-user-agent-browser", location: "packages-internal/util-user-agent-browser" },
    { name: "@aws-sdk/util-user-agent-node", location: "packages-internal/util-user-agent-node" },
    { name: "@aws-sdk/xml-builder", location: "packages-internal/xml-builder" },
  ];

  function shuffle(list) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function ordered(list, a, b) {
    const nameList = list.map((i) => i.name);
    assert(nameList.indexOf(a) !== -1, `${a} did not appear in list.`);
    assert(nameList.indexOf(b) !== -1, `${b} did not appear in list.`);
    assert(nameList.indexOf(a) <= nameList.indexOf(b), `${a} did not appear before ${b}`);
  }

  for (const _list of [list, shuffle(list), shuffle(list), shuffle(list)]) {
    const sorted = Graph.toposort(_list);
    const check = ordered.bind(null, sorted);

    check("@aws-sdk/types", "@aws-sdk/core");
    check("@aws-sdk/xml-builder", "@aws-sdk/core");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-env");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-http");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-login");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-process");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-sso");
    check("@aws-sdk/core", "@aws-sdk/credential-provider-web-identity");
    check("@aws-sdk/core", "@aws-sdk/middleware-flexible-checksums");
    check("@aws-sdk/core", "@aws-sdk/middleware-sdk-s3");
    check("@aws-sdk/core", "@aws-sdk/middleware-user-agent");
    check("@aws-sdk/core", "@aws-sdk/nested-clients");

    check("@aws-sdk/credential-provider-env", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/credential-provider-http", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/credential-provider-login", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/credential-provider-process", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/credential-provider-sso", "@aws-sdk/credential-provider-ini");
    check("@aws-sdk/credential-provider-web-identity", "@aws-sdk/credential-provider-ini");

    check("@aws-sdk/token-providers", "@aws-sdk/credential-provider-sso");

    for (const name of _list.map((i) => i.name)) {
      check(name, "@aws-sdk/client-s3");
    }
  }
}
