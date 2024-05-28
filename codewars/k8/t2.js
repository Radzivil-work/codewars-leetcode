/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

You can assume that all values are integers. Do not mutate the input array.
*/

function invert(array) {
  if(!array) {
    return []
  }
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      result.push(0);
    }
    if (array[i] > 0) {
      result.push(array[i] - array[i] * 2);
    }
    if (array[i] < 0) {
      result.push(Math.abs(array[i]));
    }
  }
  return result;
}


console.log(invert([1,2,3,4,5]));
console.log(invert([0]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));
