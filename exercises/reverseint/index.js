// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(int) {

  let str = int.toString();
  let reversed = str.split('').reverse().join('');
  parseInt(reversed);

  return reversed

}

const numbers = 12345
const numbers2 = 987654321
console.log(reverseInt(numbers2))


module.exports = reverseInt;
