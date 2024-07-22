/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
*/

function solution(a, b){
  if(a.length > b.length) {
    return `${b}${a}${b}`
  }
  return `${a}${b}${a}`
}
console.log(solution('45', '1'));