#
# You are given a set of random numbers. Write a code to shift all the zeros to the left. 
#

function shiftZerosToLeft(arr) {
  // Filter out non-zero elements
  const nonZeros = arr.filter(num => num !== 0);

  // Count the number of zeros
  const zeroCount = arr.length - nonZeros.length;

  // Create a new array with zeros followed by non-zeros
  const result = Array(zeroCount).fill(0).concat(nonZeros);

  return result;
}

// Example usage:
const inputArray = [0, 3, 0, 5, 9, 0, 8];
const resultArray = shiftZerosToLeft(inputArray);

console.log(resultArray); // Output: [0, 0, 0, 3, 5, 9, 8]
