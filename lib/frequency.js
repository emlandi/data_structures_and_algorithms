var exports = module.exports = {};

exports.frequency = function(array) {
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
  return mostLetter;
};
