var arrays = require(__dirname + '/lib/arrays');
var unique = require(__dirname + '/lib/unique');
var frequency = require(__dirname + '/lib/frequency');

//remove & return the last item
var testPop = [1, 2, 3, 4];
console.log(arrays.pop(testPop));

//add item to the end
var testPush = [1, 2, 3, 4];
var itemPush = 5;
console.log(arrays.push(testPush, itemPush));

//remove & return the ﬁrst item
var testShift = [1, 2, 3, 4];
console.log(arrays.shift(testShift));

//add item to the beginning
var testUns = [1, 2, 3, 4];
var itemUns = 0;
console.log(arrays.unshift(testUns, itemUns));

//return array copy without duplicates
var testUnique = [1, 2, 2, 3, 3, 3];
console.log(unique.unique(testUnique));

//return the most common letter
var testFreq = ['apple', 'banana'];
console.log(frequency.frequency(testFreq));


