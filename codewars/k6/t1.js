/*
Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/


function sortArray(array) {
  let arr = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      arr.push(array[i]);
    }
  }
  let x = arr.sort((a,b) => a - b);
  let result = [];
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      result.push(x[count]);
      count++;
    } else {
      result.push(array[i]);
    }
  }
  console.log(x);
  return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]