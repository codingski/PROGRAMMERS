function solution(s, n){
    var resultArray = [];
    for(var i = 0; i < s.length; i++){
        resultArray[i] = String.fromCharCode(s.charCodeAt(i) + 5);
        if(s.charCodeAt(i) === 37){
            resultArray[i] = '';
        }
    }
    return resultArray;
}
