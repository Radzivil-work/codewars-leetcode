/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
*/

function century(year) {
  if((year + '').length < 3) {
    return 1;
  }
  if(year % 100 == 0) {
    return year / 100
  }
  return Math.trunc(year / 100) + 1;
}

console.log(century(1705));
console.log(century(89));