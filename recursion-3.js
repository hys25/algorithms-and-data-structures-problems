//The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
const arr = [];
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  arr.push(startNum)
  if (startNum === endNum) {
    return arr
  }
  return arr.length === endNum ? arr : rangeOfNumbers(startNum + 1, endNum)
};

console.log('rangeOfNumbers', rangeOfNumbers(1,22))
