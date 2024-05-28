/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  if(array.length < 1) {
    return 0;
  }
  count = 0;
  for(let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count / array.length;
}

console.log(findAverage([1,1,1]));
console.log(findAverage([]));