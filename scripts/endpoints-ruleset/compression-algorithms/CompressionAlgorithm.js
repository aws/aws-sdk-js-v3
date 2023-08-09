const fs = require("fs");
const path = require("path");
const assert = require("assert");
const uuid = require("uuid");

/**
 * Outputs a JSON object as JavaScript code with some form of compression.
 */
module.exports = class CompressionAlgorithm {
  /**
   * @param data - to be compressed.
   * @param _export - e.g. "module.exports = $"
   */
  constructor(data, _export) {
    /**
     * The export string, using $ as a placeholder.
     * cjs: module.exports = $;
     * esm: export default $;
     * esm: export const data = $;
     */
    this._export = _export;
    /**
     * Reference to original unmodified data object.
     */
    this.data = data;
  }

  /**
   * Verify the implementation is correct.
   * @throws if implementation serialization does not match original data object.
   */
  verifyImplementation() {
    const tempFile = path.join(__dirname, "..", "temp", `__${uuid.v4()}tmp.js`); // defeat require-cache.
    let original = 0;
    let compressed = 1;
    try {
      fs.writeFileSync(tempFile, this.toCodeString("module.exports = $"), "utf-8");
      original = this.toJsonString(this.data);
      compressed = this.toJsonString(require(tempFile));
    } catch (e) {}
    fs.rmSync(tempFile);
    if (original !== compressed) {
      fs.writeFileSync(path.join(__dirname, "..", "temp", "__original.json"), original);
      fs.writeFileSync(path.join(__dirname, "..", "temp", "__compressed.json"), compressed);
    }
    assert(original === compressed, `Compression implementation is not correct for ${this.constructor.name}.`);
  }

  /**
   * @returns deterministic JSON representation.
   */
  toJsonString(data = this.data, indent = "") {
    let buffer = "";
    switch (typeof data) {
      case "undefined":
        break;
      case "object":
        if (Array.isArray(data)) {
          buffer += `\n` + indent + `[\n`;
          for (let i = 0; i < data.length; ++i) {
            const element = data[i];
            buffer += indent + this.toJsonString(element, indent + "  ");
            if (i !== data.length - 1) {
              buffer += indent + `,\n`;
            }
          }
          buffer += `\n` + indent + `]\n`;
          break;
        }
        const keys = Object.keys(data).sort();
        buffer += "\n" + indent + `{\n`;
        for (let i = 0; i < keys.length; ++i) {
          const key = keys[i];
          buffer += indent + `"${key}": `;
          buffer += this.toJsonString(data[key], indent + "  ");
          if (i !== keys.length - 1) {
            buffer += indent + `,\n`;
          }
        }
        buffer += `\n` + indent + `}\n`;
        break;
      case "boolean":
        buffer += indent + data;
        break;
      case "number":
        buffer += indent + data;
        break;
      case "string":
        buffer += indent + `"${data.replaceAll(/"/g, `\\"`)}"`;
        break;
      default:
    }
    return buffer;
  }

  /**
   * @returns {string} source code string of compressed data.
   */
  toCodeString(_export = this._export) {
    throw new Error("not implemented in abstract base.");
  }
};
