module.exports = function(list){

    var first = list[0];
    var last = list[list.length-1];

    list[0] = last;
    list[list.length -1] = first

    return list;

    //return [];
}
