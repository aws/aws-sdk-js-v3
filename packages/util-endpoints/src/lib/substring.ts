/**
 * Computes the substring of a given string, conditionally indexing from the end of the string.
 * When the string is long enough to fully include the substring, return the substring.
 * Otherwise, return None. The start index is inclusive and the stop index is exclusive.
 * The length of the returned string will always be stop-start.
 */
export const substring = (input: string, start: number, stop: number, reverse: boolean): string | null => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
};
