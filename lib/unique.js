var exports = module.exports = {};

exports.unique = function(array) {
  var seen = {};
  var arrayCopy = [];
  var j = 0;

  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    if(seen[item] !== 1) {
      seen[item] = 1;
      arrayCopy[j++] = item;
    }
  }
  return arrayCopy;
};
