// 020. 09. 22 여전히 미완성.. 

function solution(n){
    var result = [];
    if(n === 2){
        return 1;
    }
    for(var i = 2; i <= n; i++){
        var array = [];
        for(var j = 2; j < i; j++){
            if(Number.isInteger(i / j) === true){
                array.push(j);
                break;
            }
        }
        if(array.length === 0){
            result.push(i);
        }
    }
    return result.length;
}
