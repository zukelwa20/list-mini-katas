const assert = require('assert');
const swapFirstTwo = require('../swap-first-two');

describe("The Swap first two function", function(){

    describe("should be able to swap the first and the second parameter in a list", function(){

        it("for list ['apple', 'pear', 'mango', 'banana'] it should return ['pear', 'apple', 'mango', 'banana']", function(){

            var swappedList = swapFirstTwo(['apple', 'pear', 'mango', 'banana']);

            assert.deepEqual(['pear', 'apple', 'mango', 'banana'], swappedList);
            //assert.equal(7, swappedList[1]);

        });

        it("for list [19,56,17,8,7,9,5] it should return [56,19,17,8,7,9,5]", function(){

            var swappedList = swapFirstTwo([19,56,17,8,7,9,5]);

            assert.equal(56, swappedList[0]);
            assert.equal(19, swappedList[1]);

        });
    });
});
