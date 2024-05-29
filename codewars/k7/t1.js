/**
Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
 */

function isItLetter(character) {
  return character.toLowerCase() !== character.toUpperCase();
}

console.log(isItLetter('a'));
console.log(isItLetter('1'));

