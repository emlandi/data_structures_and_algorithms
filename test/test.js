var expect = require('chai').expect;
var arrays = require(__dirname + '/../lib/arrays');
var unique = require(__dirname + '/../lib/unique');
var frequency = require(__dirname + '/../lib/frequency');

describe('the POP function', function() {
  it('should remove & return the last item of array', function(){
    var test = [1, 2, 3, 4];
    expect(arrays.pop(test)).to.eql(4);
  });
});

describe('the PUSH function', function() {
  it('should add item to the end of array', function(){
    var test = [1, 2, 3, 4];
    var item = 5;
    expect(arrays.push(test, item)).to.eql([1,2,3,4,5]);
  });
});

describe('the SHIFT function', function() {
  it('should remove & return the ﬁrst item of array', function(){
    var test = [1, 2, 3, 4];
    expect(arrays.shift(test)).to.eql(1);
  });
});

describe('the UNSHIFT function', function() {
  it('should add item to the beginning of array', function(){
    var test = [1, 2, 3, 4];
    var item = 0;
    expect(arrays.unshift(test, item)).to.eql([0, 1, 2, 3, 4]);
  });
});

describe('the UNIQUE function', function() {
  it('should return array copy without duplicates', function(){
    var test = [1, 2, 2, 3, 3, 3];
    expect(unique.unique(test)).to.eql([1, 2, 3]);
  });
});

describe('the FREQUENCY function', function() {
  it('should return the most common letter', function(){
    var test = ['apple', 'banana'];
    expect(frequency.frequency(test)).to.eql('a');
  });
});
