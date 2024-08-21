/*
16+18=214
For this kata you will have to forget how to add two numbers.


*/

// function add(num1, num2) {
//   let result = [];
//   let x = (num1 + '').split('');
//   let y = (num2 + '').split('');

//   if(x.length === y.length) {
//     for(let i = x.length - 1; i >= 0; i--) {
//       result.unshift(+x[i] + +y[i]);
//     }
//   }
//   if(x.length > y.length) {
//     for(let i = y.length - 1; i >= 0; i--) {
//       result.unshift(+x[i + (x.length - y.length)] + +y[i]);
//     }
//     result.unshift(x.slice(0, x.length - y.length));
//   }
//   if(x.length < y.length) {
//     for(let i = x.length - 1; i >= 0; i--) {
//       result.unshift(+y[i + (y.length - x.length)] + +x[i]);
//     }
//     result.unshift(y.slice(0, y.length - x.length));
//   }
//   return Number.parseInt(result.join(''));
// }
function add(num1, num2) {
  let result = [];
  let x = (num1 + '').split('');
  let y = (num2 + '').split('');

  while (x.length < y.length) x.unshift('0');
  while (y.length < x.length) y.unshift('0');

  for (let i = 0; i < x.length; i++) {
    result.push(+x[i] + +y[i]);
  }

  return Number.parseInt(result.join(''));
}

console.log(add(16,18));
console.log(add(122, 81));
console.log(add(12, 181));

