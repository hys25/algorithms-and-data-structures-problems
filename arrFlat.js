//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

function uniteUnique(...arrs) {
  const arr = arrs.flat()
  //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  return [...new Set(arr)];
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
