/*
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/


function sorter(textbooks) {
  let result = textbooks.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return result;
}

console.log(sorter(['Algebra', 'History', 'Geometry', 'English'])); //['Algebra', 'English', 'Geometry', 'History']
console.log(sorter(['Algebra', 'history', 'Geometry', 'english'])); //['Algebra', 'english', 'Geometry', 'history']