module.exports = function(list){
  var firstVal = list[0];
  // var endVal = list.length - 1;

  list[0] = list[list.length - 1];
  list[list.length - 1] = firstVal;

    return list;
    // console.log(list);
}
