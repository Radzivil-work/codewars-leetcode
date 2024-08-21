// Clocky Mc Clock-Face

var whatTimeIsIt = function(angle) {
  let minutes = angle * 2;
  let hours = Math.floor(minutes / 60);
  let minRes = Math.floor(minutes % 60);
  if(hours == 0 && minRes < 10) {
    return `12:0${minRes}`;
  }
  if(hours == 0 && minRes >= 10) {
    return `12:${minRes}`;
  }
  if(hours < 10 && minRes < 10) {
    return `0${hours}:0${minRes}`;
  }
  if(hours >= 10 && minRes < 10) {
    return `${hours}:0${minRes}`;
  }
  if(hours < 10 && minRes >= 10) {
    return `0${hours}:${minRes}`;
  }
  return `${hours}:${minRes}`;
}

console.log(whatTimeIsIt(0));
console.log(whatTimeIsIt(90));
console.log(whatTimeIsIt(300));
console.log(whatTimeIsIt(50));
console.log(whatTimeIsIt(45));
console.log(whatTimeIsIt(40));