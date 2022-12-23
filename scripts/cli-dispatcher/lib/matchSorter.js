/**
 * @param {string[]} matches - unordered list of matches.
 * @param  {...string} query - original query that generated matches
 * @returns {string[]} matches sorted by estimated priority.
 *
 * matches that start with the first query component are prioritized.
 * @example
 *  (["build:types", "test"], "t") -> ["test", "build:types"]
 *
 * Matches that contain a full word match with the query are prioritized.
 * @example
 *  (["presigner", "signer"], "signer") -> ["signer", "presigner"]
 *
 * Shorter matches are prioritized.
 */
module.exports = function matchSorter(matches, ...query) {
  return matches.sort((a, b) => {
    a = a.name || a;
    b = b.name || b;

    let score = 0;

    if (wholeWordMatch(a, ...query)) {
      score -= 100;
    }
    if (wholeWordMatch(b, ...query)) {
      score += 100;
    }
    if (wordInitialMatch(a, ...query)) {
      score -= 10;
    }
    if (wordInitialMatch(b, ...query)) {
      score += 10;
    }
    if (a.length < b.length) {
      score -= 1;
    }
    if (a.length > b.length) {
      score += 1;
    }
    return score;
  });
};

/**
 * @returns {boolean} subject has a word that starts with a query component.
 */
function wordInitialMatch(subject, ...query) {
  const _words = words(subject);
  return _words.filter((w) => undefined !== query.find((q) => w.startsWith(q))).length > 0;
}

/**
 * @returns {boolean} subject has a whole word match with part of the query.
 */
function wholeWordMatch(subject, ...query) {
  const _words = words(subject);
  return _words.filter((w) => query.includes(w)).length > 0;
}

/**
 * Splits the search subject into words.
 */
function words(subject) {
  return subject.split(/:|\s+|-|_/);
}
