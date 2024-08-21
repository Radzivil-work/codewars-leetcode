function towelSort (matrix) {
  let result = [];
  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j])
      }
  }
return result.sort((a,b) => a - b);
}

console.log(towelSort([[1, 2, 3], [4, 5, 6],[7, 8, 9]]));
