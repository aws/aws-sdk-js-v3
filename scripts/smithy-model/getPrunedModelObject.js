const removeKeys = [
  "metadata",
  "smithy.api#length",
  "smithy.api#range",
  "smithy.api#pattern",
  "smithy.rules#endpointRuleSet",
  "smithy.rules#endpointTests",
];

/**
 * Remove entries from model not required for runtime:
 */
const getPrunedModelObject = (data) => {
  const prunedData = data;
  if (!data || typeof data !== "object") {
    return prunedData;
  }
  for (const key in prunedData) {
    if (key === "documentation" || key === "smithy.api#documentation") {
      delete prunedData[key];
      continue;
    }
    if (removeKeys.includes(key)) {
      delete prunedData[key];
      continue;
    }
    prunedData[key] = getPrunedModelObject(prunedData[key]);
  }
  if (prunedData.traits && Object.keys(prunedData.traits).length === 0) {
    delete prunedData.traits;
  }
  return prunedData;
};

module.exports = { getPrunedModelObject };
