import { HostResolver } from "./HostResolver";
import { NodeDnsLookupHostResolver } from "./NodeDnsLookupHostResolver";

describe(HostResolver.name, () => {
  it("should be equal to NodeDnsLookupHostResolver", () => {
    expect(HostResolver).toBe(NodeDnsLookupHostResolver);
  });
});
