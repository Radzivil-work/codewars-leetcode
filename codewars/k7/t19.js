/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
*/

function maxTriSum(numbers){
  let x = numbers.sort((a,b) => a - b).reverse()
  const uniqueN = new Set(x);
  let y = Array.from(uniqueN);
  return y[0] + y[1] + y[2]
}

console.log(maxTriSum([3,2,6,8,2,3]))