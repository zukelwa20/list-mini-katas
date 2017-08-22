module.exports = function(list){
    for (var i = 0; i < list.length; i++) {
        var current = list[i];
        var next = list[i+1];
        if (!next){
            break;
        }
        if (current > next){
            let storedValue = next;
            list[i+1] = current;
            list[i] = storedValue;
        }
    }
    return list;
}
