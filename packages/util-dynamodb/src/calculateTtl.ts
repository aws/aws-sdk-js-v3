/**
 * Convert the time for an entity to live in the format DynamoDB accepts for
 * Time To Live (TTL) attributes
 * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html
 * @param {number} hoursToLive Number of hours in the future the time to live should be set for
 * @return {number} Time in epoch for the TTL
 */
export const calculateTtl = (hoursToLive: number): number => {
  const hours = Number(hoursToLive);
  console.log(hours);
  if (isNaN(hours) || !hoursToLive || Array.isArray(hoursToLive)) {
    throw new TypeError("The provided value is not a number greater than zero.");
  }

  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  const epoch = Math.round(date.getTime() / 1000);
  return epoch;
};
