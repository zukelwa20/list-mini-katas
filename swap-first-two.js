module.exports = function(list){
  
  var valZero = list[0];

  list[0] = list[1];
  list[1] = valZero;

    return list;
}
