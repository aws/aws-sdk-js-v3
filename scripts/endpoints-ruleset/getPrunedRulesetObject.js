/**
 * Remove entries from rulesetObject not required for resolution:
 *  1. key='conditions' and value is empty array
 *  2. key='builtIn'
 *  3. key='documentation'
 */
const getPrunedRulesetObject = (data) => {
  const prunedData = data;
  for (const key in prunedData) {
    if (key === "builtIn" || key === "documentation") delete prunedData[key];
    if (key === "conditions" && prunedData[key].length === 0) delete prunedData[key];
    else if (typeof prunedData[key] === "object") prunedData[key] = getPrunedRulesetObject(prunedData[key]);
  }
  return prunedData;
};

module.exports = { getPrunedRulesetObject };
