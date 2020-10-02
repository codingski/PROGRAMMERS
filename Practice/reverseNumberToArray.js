/*
    문제 설명
    자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

    제한 조건
    n은 10,000,000,000이하인 자연수입니다.

    입출력 예)
    n -> 12345
    return -> [5, 4, 3, 2, 1]
*/

//My code

function solution(n){
    var N = String(n);
    var result = [];
    for(var i = 0; i < N.length; i++){
        result[i] = Number(N[N.length - 1 - i]);
    }
    return result;
}