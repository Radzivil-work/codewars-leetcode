/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
*/

function nbDig(n, d) {
    // Convert the digit to a string since we'll be counting it in string representations of squares
    let digit = d.toString();
    let count = 0;
    
    // Iterate over each number from 0 to n
    for (let k = 0; k <= n; k++) {
        // Square the number and convert it to a string
        let squareStr = (k * k).toString();
        // Count how many times digit d appears in the string representation of the square
        for (let char of squareStr) {
            if (char === digit) {
                count++;
            }
        }
    }
    
    return count;
}

console.log(nbDig(5750, 0));