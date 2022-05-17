Write a function sumTo(n) that calculates the sum of the numbers 1 + 2 + ... + n.
function task2(n) {
  if (n == 0) {
    return 0;
  }
  return n + task2(n - 1);
}
console.log('recursion', task2(9));

function task3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('FOR loop', task3(9));