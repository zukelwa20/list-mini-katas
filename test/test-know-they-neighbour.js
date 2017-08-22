const assert = require('assert');
const knowTheyNeighbour = require('../know-they-neighbour');

describe("The know they neighbour function", function(){

    describe("should be able to move a bigger value up a list", function(){

        it("for list [4,17,5,1] it should return [4,5,1,17]", function(){
            var swappedList = knowTheyNeighbour([4,17,5,1]);
            assert.deepEqual([4,5,1,17], swappedList);
        });

        it("for list [19,56,17,8,7,9,5] it should return [5,17,8,7,9,19,56]", function(){
            var swappedList = knowTheyNeighbour([19,56,17,8,7,9,5]);
            assert.deepEqual([19,17,8,7,9,5,56], swappedList);
        });
    });
});
