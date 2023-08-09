/**
 * @param {string} subject - the string to test.
 * @param {string} query - the query.
 * @returns {boolean} whether all elements of query appear in-order in the subject string.
 *
 * @example
 * ("client-s3-control", "c s3 c") -> true
 */
module.exports = function matcher(subject, ...query) {
  let cursor = undefined;

  for (const q of query) {
    const searchString = subject.slice(cursor + 1);
    const index = searchString.indexOf(q);
    if (index === -1) {
      return false;
    }
    cursor = index;
  }

  return true;
};
