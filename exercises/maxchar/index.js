// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const chars = {};
  let max;
  let maxIndex;


  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  

  max = Math.max(...Object.values(chars));
  maxIndex = Object.keys(chars).find(keys => chars[keys] === max);

  return maxIndex
}

console.log(maxChar());

module.exports = maxChar;
