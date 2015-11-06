//Check for most common letter in a word.
function frequency(array) {
  var allLetters = '';
  var total = [];
  var mostCount = 0;
  var mostLetter;

  for (var i = 0; i < array.length; i++) {
    allLetters = allLetters.concat(array[i]).toLowerCase();
  }

  for (var j = 0; j < allLetters.length; j++) {
    letter =  allLetters[j];

    if (total[letter]) {
      total[letter] += 1;
    } else {
      total[letter] = 1;
    }

    if(total[letter] > mostCount) {
      mostCount = total[letter];
      mostLetter = letter;
    }
  }
  console.log(mostLetter);
  return mostLetter;
}

var array3 = ['Hello', 'Wow', 'Cool', 'Goodbye'];
frequency(array3);
