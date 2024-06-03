/*
This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
*/

function mergeStrings(first, second){
  let x = second.slice(second.indexOf(first[first.length - 1]) + 1,);
  let result = first + x;



  return result;
}


console.log(mergeStrings("abcde", "cdefgh"));
console.log(mergeStrings("abaab", "aabab"));
console.log(mergeStrings("abc", "def"));
console.log(mergeStrings("abc", "abc"));
