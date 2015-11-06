//Copy array with duplicates removed.
function unique(array) {
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
  console.log(array);
  console.log(arrayCopy);
  return arrayCopy;
}

var array2 = [1, 1, 2, 3, 4, 5, 5];
unique(array2);
