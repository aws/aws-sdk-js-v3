describe("slurpFile", () => {
  let slurpFile;
  let mockReadFile;

  const UTF8 = "utf8";
  const getMockFileContents = (path: string, options = UTF8) => JSON.stringify({ path, options });

  beforeEach(() => {
    mockReadFile = jest.fn().mockImplementation((path, options) => Promise.resolve(getMockFileContents(path, options)));
    jest.mock("fs", () => ({ promises: { readFile: mockReadFile } }));

    const slurpFileRequire = require("./slurpFile");
    slurpFile = slurpFileRequire.slurpFile;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("makes one readFile call for a filepath irrepsective of slurpFile calls", async () => {
    const mockPath = "/mock/path";
    const mockPathContent = getMockFileContents(mockPath);

    expect(mockReadFile).not.toHaveBeenCalled();
    const fileContentArr = await Promise.all([slurpFile(mockPath), slurpFile(mockPath)]);
    expect(fileContentArr).toStrictEqual([mockPathContent, mockPathContent]);

    // There is one readFile call even through slurpFile is called in parallel twice.
    expect(mockReadFile).toHaveBeenCalledTimes(1);
    expect(mockReadFile).toHaveBeenCalledWith(mockPath, UTF8);

    const fileContent = await slurpFile(mockPath);
    expect(fileContent).toStrictEqual(mockPathContent);

    // There is one readFile call even through slurpFile is called for the third time.
    expect(mockReadFile).toHaveBeenCalledTimes(1);
  });

  it("makes multiple readFile calls with based on filepaths", async () => {
    const mockPath1 = "/mock/path/1";
    const mockPathContent1 = getMockFileContents(mockPath1);

    const mockPath2 = "/mock/path/2";
    const mockPathContent2 = getMockFileContents(mockPath2);

    expect(mockReadFile).not.toHaveBeenCalled();
    const fileContentArr = await Promise.all([slurpFile(mockPath1), slurpFile(mockPath2)]);
    expect(fileContentArr).toStrictEqual([mockPathContent1, mockPathContent2]);

    // There are two readFile calls as slurpFile is called in parallel with different filepaths.
    expect(mockReadFile).toHaveBeenCalledTimes(2);
    expect(mockReadFile).toHaveBeenNthCalledWith(1, mockPath1, UTF8);
    expect(mockReadFile).toHaveBeenNthCalledWith(2, mockPath2, UTF8);

    const fileContent1 = await slurpFile(mockPath1);
    expect(fileContent1).toStrictEqual(mockPathContent1);
    const fileContent2 = await slurpFile(mockPath2);
    expect(fileContent2).toStrictEqual(mockPathContent2);

    // There is one readFile call even through slurpFile is called for the third time.
    expect(mockReadFile).toHaveBeenCalledTimes(2);
  });
});
