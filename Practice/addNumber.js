/*
    문제 설명
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

    제한사항
    N의 범위 : 100,000,000 이하의 자연수

    입출력 예)
    parameter -> 123
    return -> 6
    
    parameter -> 987
    return -> 24
    
*/

// My code

function solution(s){
    var sum = 0;
    var numberToString = String(s);
    for(var i = 0; i < numberToString.length; i++){
        sum += Number(numberToString[i]);
    }
    return sum;
}
