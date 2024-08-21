// Bit Counting
var countBits = function(n) {
  let binN  = n.toString(2).split('');
  let result = 0;
  for(let i = 0; i < binN.length; i++) {
    if(binN[i] == '1') {
      result++;
    }
  }
  return result;
};



console.log(countBits(0))
console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(10))
