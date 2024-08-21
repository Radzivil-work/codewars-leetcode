/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
*/


function minSum(arr) {
  let arrS = arr.sort((a,b) => a - b);
  let y = arrS.slice(0, arrS.length / 2)
  let x = arrS.slice(arrS.length / 2,).reverse()
  let result = 0;
  for(let i = 0; i < x.length; i++) {
    result += x[i] * y[i];
  }
  return result;
}

console.log(minSum([12,6,10,26,3,24]));