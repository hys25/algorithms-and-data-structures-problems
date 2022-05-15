// #1 Write a JavaScript program to calculate the factorial of a number.
//In mathematics, the factorial of a non - negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function task1(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * task1(n - 1);
  }
}
console.log('#1', task1(5));

// #2 Write a function sumTo(n) that calculates the sum of the numbers 1 + 2 + ... + n.
function task2(n) {
  if (n == 0) {
    return 0;
  }
  return n + task2(n - 1);
}
console.log('#2 recursion', task2(9));

function task3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('#2 FOR loop', task3(9));
