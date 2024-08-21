/*

*/


function sentence(arrayOfObjects) {
    let sortArr = arrayOfObjects.sort((a, b) => {
      let x = Object.keys(a)[0];
      let y = Object.keys(b)[0];
      
      return parseInt(x) - parseInt(y);
    });
    let result = '';
    for(let i = 0; i < sortArr.length; i++) {
      for( item in sortArr[i]) {
        result += Object.values(sortArr[i]) + ' ';
      }
    }
    return result;
}

console.log(sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]));
console.log(sentence([{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}]));