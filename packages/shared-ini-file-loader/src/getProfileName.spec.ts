import { DEFAULT_PROFILE, ENV_PROFILE, getProfileName } from "./getProfileName";

describe(getProfileName.name, () => {
  const OLD_ENV = process.env;
  const mockProfileNameFromEnv = "mockProfileNameFromEnv";

  beforeEach(() => {
    process.env = {
      ...OLD_ENV,
      [ENV_PROFILE]: mockProfileNameFromEnv,
    };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it("returns profile if present in param", () => {
    const profile = "mockProfile";
    expect(getProfileName({ profile })).toBe(profile);
  });

  it(`returns profile from env var '${ENV_PROFILE}' if present`, () => {
    expect(getProfileName({})).toBe(mockProfileNameFromEnv);
  });

  it(`returns profile '${DEFAULT_PROFILE}' as default`, () => {
    process.env[ENV_PROFILE] = undefined;
    expect(getProfileName({})).toBe(DEFAULT_PROFILE);
  });
});
