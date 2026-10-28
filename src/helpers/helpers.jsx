/**
 * Truncates a string to a given length and appends an ellipsis if it exceeds the limit.
 * 
 * @param {string} str - The text string to truncate.
 * @param {number} length - The maximum allowed length.
 * @returns {string} - The truncated string.
 */
export const truncate = (str, length = 40) => {
  if (!str) return "";
  return str.length > length ? `${str.slice(0, length)}...` : str;
};