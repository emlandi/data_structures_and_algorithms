var exports = module.exports = {};

exports.pop = function(array) {
  var lastItem = array[array.length-1];
  array.length = array.length-1;

  return lastItem;
};

exports.push = function(array, item) {
  array[array.length] = item;

  return array;
};

exports.shift = function(array) {
  var firstItem = array[0];

  for (var i=1; i<array.length; i++) {
    array[i-1] = array[i];
  }
  array.length = array.length-1;

  return firstItem;
};

exports.unshift = function(array, item) {
  for (var i = array.length -1; i >= 0; i--) {
    array[i+1] = array[i];
  }
  array[0] = item;
  return array;
};
