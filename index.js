//PART 1
var array = ["rose", "iris", "peony", "daisy"];

//Remove and return the last element of the array.
function pop (array) {
  var lastItem = array[array.length-1];
  console.log(lastItem);

  array.length = array.length-1;
  console.log(array);

  return lastItem;
}

//Add item to the end of the array.
function push (array, item) {
  array[array.length] = item;
  console.log(array);
}

//Remove and return the ﬁrst element of the array.
function shift (array) {
  var firstItem = array[0];
  console.log(firstItem);

  for (var i=1; i<array.length; i++) {
    array[i-1] = array[i];
  }

  array.length = array.length-1;
  console.log(array);

  return firstItem;
}

//Add item to the beginning of the array.
function unshift (array, item) {
  for (var i = array.length -1; i >= 0; i--) {
    array[i+1] = array[i];
  }
  array[0] = item;
  console.log(array);
}

// pop(array);
// push(array, 'sunflower');
// shift(array);
// unshift(array, 'marigold');

//PART 2
var array2 = [1, 1, 2, 3, 4, 5, 5];
var array3 = ['hi', 'hi', 'wow', 'cool', 'cool', 'bye'];

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

// unique(array2);
// unique(array3);











