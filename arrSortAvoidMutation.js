//One way to avoid mutation of original array is to first concatenate an empty array to the one being sorted (slice and concat return a new array), then run the sort method.

const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a,b) {
    return a-b;
  });
}

nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray));