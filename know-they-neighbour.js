module.exports = function(list){
  for (var i = 0; i < list.length; i++) {
    var firstVal =list[i];
    var biggestValue = list[list.length - 1];
    if (firstVal > list) {
      biggestValue = firstVal;
    }
  }
    return list;
}
