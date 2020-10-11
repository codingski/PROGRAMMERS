function solution(arr, divisor) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            result.push(arr[i]);
        }
    }
    result.sort(function(a, b){
        return a-b;
    });
    
    if(result.length === 0){    
        var result = [-1];
        return result;
    }
    else{
        return result;
    }
}


// The other code

function solution(arr, divisor) {
    var answer = [];

    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] % divisor == 0) answer.push(arr[i]);
    }

    return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}


// 이게 왜 안되는지 아직도 의문
// .push(-1) 넣었을때 왜 결과값이 [1]로 뜨지?
//답을 알았음!
// push 메서드 : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
function solution(arr, divisor) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            result.push(arr[i]);
        }
    }
    result.sort(function(a, b){
        return a-b;
    });

    if(result.length === 0){
        return result.push(-1);
    }
    else{
        return result;
    }
}