/*

*/
const test = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
function dataReverse(data) {
  let result = [];
  let x = data.length;
  while(x > 0) {
    result.push(data.join('').slice(x - 8, x))
    x -= 8;
  }
  let y = result.join('').split('').map(Number)
  console.log(typeof y[0])
  return y
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))