/*
2020. 09. 12

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.


*/

function solution(str) {
    var center = str;
    var centerToArray = center.split('');
    var length = centerToArray.length;
    if(length % 2 == 1){
        return centerToArray[Math.floor(length / 2)];
    }
    else{
        return centerToArray[Math.floor(length / 2) - 1] + centerToArray[Math.floor(length / 2)];
    }
}
