/*
문자열 내림차순으로 배치하기

문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
*/

function solution(value) {
    var valueStringToArray = value.split(''); //value 를 배열로 쪼개기
    var sort = valueStringToArray.sort().reverse(); // 오름차순 정렬 후 reverse를 이용하여 반대로 정렬
    var toString = sort.toString(); // 배열을 문자열로 변환
    var result = toString.replace(/,/gi,"") // 문자열 사이에 있는 모든 ',' 를 제거
    return result;
}
