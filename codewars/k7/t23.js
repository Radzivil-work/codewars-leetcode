function strCount(obj){
  let count = 0;
  for (item in obj) {
    if(typeof(obj[item]) == 'string') {
      count++;
    } else if(typeof obj[item] === 'object' && obj[item] !== null) {
      count += strCount(obj[item]);
    }
  }
  return count;
}


console.log(strCount({
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  sixth:  undefined,
  seventh:{}
}))