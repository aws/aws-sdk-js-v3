const CompressionAlgorithm = require("./CompressionAlgorithm");

/**
 * Compresses JSON data by removing whitespace.
 * This is the default compression method.
 */
module.exports = class RemoveWhitespace extends CompressionAlgorithm {
  /**
   * @param data - to be compressed.
   * @param _export - e.g. "module.exports = $"
   */
  constructor(data, _export) {
    super(data, _export);
  }

  /**
   * @override
   * @returns {string} source code string of compressed data.
   */
  toCodeString(_export = this._export) {
    return `${_export.replace("$", JSON.stringify(this.data))}`;
  }
};
