// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises } from "fs";

jest.mock("fs", () => ({ promises: { readFile: jest.fn() } }));

describe("slurpFile", () => {
  const UTF8 = "utf8";
  const getMockFileContents = (path: string, options = UTF8) => JSON.stringify({ path, options });

  beforeEach(() => {
    (promises.readFile as jest.Mock).mockImplementation((path, options) =>
      Promise.resolve(getMockFileContents(path, options))
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("makes one readFile call for a filepath irrepsective of slurpFile calls", (done) => {
    jest.isolateModules(async () => {
      const { slurpFile } = require("./slurpFile");
      const mockPath = "/mock/path";
      const mockPathContent = getMockFileContents(mockPath);

      expect(promises.readFile).not.toHaveBeenCalled();
      const fileContentArr = await Promise.all([slurpFile(mockPath), slurpFile(mockPath)]);
      expect(fileContentArr).toStrictEqual([mockPathContent, mockPathContent]);

      // There is one readFile call even through slurpFile is called in parallel twice.
      expect(promises.readFile).toHaveBeenCalledTimes(1);
      expect(promises.readFile).toHaveBeenCalledWith(mockPath, UTF8);

      const fileContent = await slurpFile(mockPath);
      expect(fileContent).toStrictEqual(mockPathContent);

      // There is one readFile call even through slurpFile is called for the third time.
      expect(promises.readFile).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it("makes multiple readFile calls with based on filepaths", (done) => {
    jest.isolateModules(async () => {
      const { slurpFile } = require("./slurpFile");

      const mockPath1 = "/mock/path/1";
      const mockPathContent1 = getMockFileContents(mockPath1);

      const mockPath2 = "/mock/path/2";
      const mockPathContent2 = getMockFileContents(mockPath2);

      expect(promises.readFile).not.toHaveBeenCalled();
      const fileContentArr = await Promise.all([slurpFile(mockPath1), slurpFile(mockPath2)]);
      expect(fileContentArr).toStrictEqual([mockPathContent1, mockPathContent2]);

      // There are two readFile calls as slurpFile is called in parallel with different filepaths.
      expect(promises.readFile).toHaveBeenCalledTimes(2);
      expect(promises.readFile).toHaveBeenNthCalledWith(1, mockPath1, UTF8);
      expect(promises.readFile).toHaveBeenNthCalledWith(2, mockPath2, UTF8);

      const fileContent1 = await slurpFile(mockPath1);
      expect(fileContent1).toStrictEqual(mockPathContent1);
      const fileContent2 = await slurpFile(mockPath2);
      expect(fileContent2).toStrictEqual(mockPathContent2);

      // There is one readFile call even through slurpFile is called for the third time.
      expect(promises.readFile).toHaveBeenCalledTimes(2);
      done();
    });
  });
});
