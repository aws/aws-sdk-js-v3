import { HostAddress, HostResolver as IHostResolver, HostResolverArguments } from "@aws-sdk/types";

export class HostResolver implements IHostResolver {
  /**
   * For the browser and similar platforms where there is no way to query DNS,
   * return an empty list.
   * @param args arguments with host name query addresses for
   * @returns an empty list
   */
  async resolveAddress(args: HostResolverArguments): Promise<HostAddress[]> {
    return [];
  }
  reportFailureOnAddress(addr: HostAddress): void {}
  purgeCache(args?: HostResolverArguments): void {}
}
