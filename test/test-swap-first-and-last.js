const assert = require('assert');
const swapFirstAndLast = require('../swap-first-and-last');

describe("The Swap first and last function", function(){

    describe("should be able to swap the first and the last value in a list", function(){

        it("for list ['apple', 'pear', 'mango', 'banana'] it should return ['banana', 'pear', 'mango', 'apple']", function(){
            var swappedList = swapFirstAndLast(['apple', 'pear', 'mango', 'banana']);
            assert.deepEqual(['banana', 'pear', 'mango', 'apple']
, swappedList);
        });

        it("for list [19,56,17,8,7,9,5] it should return [5,56,17,8,7,9,19]", function(){
            var swappedList = swapFirstAndLast([19,56,17,8,7,9,5]);
            assert.deepEqual([5,56,17,8,7,9,19], swappedList);
        });
    });
});
