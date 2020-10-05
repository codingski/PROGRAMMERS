/*
function solution(s){
    var array = s.split(' ');
    var j = 0;
    var i = 0;
    for(i = 0; i < array.length; i++){
        for(j = 0 ; j < array[i].length / 2; j++){
            array = array[i].replace(array[i][j * 2], array[i][j * 2].toUpperCase());
        }
    }

    return array;
}


console.log(solution('adsd asdasd asdas'));
*/
var sum = '';
var ss = 'try hello world';
var i = 0;
var array = ss.split(' ');
var number = array.length;
while(ss[i] != ' '){
    if(i % 2 === 0){
        sum += ss[i].toUpperCase();
    }
    else{
        sum += ss[i];
    }
    i++;
}

console.log(sum);

AaAa AaAa AaA AaAa
