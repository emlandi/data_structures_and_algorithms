var expect = require('chai').expect;
var index = require(__dirname + '/../index');

describe('the pop function', function() {
  before(function() {
    var pop = pop();
  });
  it('should remove an item from the array', function(){
    expect(pop.array.length).to.eql(array.length-1);
  });
});

describe('the push function', function() {
  before(function() {
    var push = push();
  });
  it('should add an item to the array', function(){
    expect(push.array.length).to.eql(array.length+1);
  });
});
