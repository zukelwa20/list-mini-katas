module.exports = function(list) {
    for (var i = 0; i < list.length; i++) {

        var firstV = list[i];

        var nextV = list[i + 1];

        if (list[i] > list[i + 1]) {
            list[i] = list[i + 1];
            list[i + 1] = firstV;
        }
    }
    return list;
}
