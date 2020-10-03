function solution(s){
    var array = s.split(' ');
    var j = 0;
    for(var i = 0; i < array.length; i++){
        for(j = 0 ; j < array[i].length / 2; j++){
            array = array[i].replace(array[i][j * 2], array[i][j * 2].toUpperCase());
        }
    }
    return array;
}


console.log("retre ertrefd gdfg".split(' '));
