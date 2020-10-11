/*
    문제 설명
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

    제한 조건
    공백은 아무리 밀어도 공백입니다.
    s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
    s의 길이는 8000이하입니다.
    n은 1 이상, 25이하인 자연수입니다.

    입출력 예)
    s -> "AB"
    n -> 1
    return -> "BC"
    
    s -> "z"
    n -> 1
    return -> "a"
    
    s -> "a B z"
    n -> 4
    return -> "e F d"
*/

//My code

function solution(s, n){
    var resultArray = [];
    for(var i = 0; i < s.length; i++){
        resultArray[i] = String.fromCharCode(s.charCodeAt(i) + n);
        if(s.charCodeAt(i) === 32){
            resultArray[i] = ' ';
        }
        else if(s.charCodeAt(i) < 91 && s.charCodeAt(i) + n > 90){
            resultArray[i] = String.fromCharCode(s.charCodeAt(i) + n - 90 + 64)
        }
        else if(s.charCodeAt(i) + n > 122){
            resultArray[i] = String.fromCharCode(s.charCodeAt(i) + n - 122 + 96)
        }
    }

    var result = resultArray.join("");
    return result;
}


/*
    join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"

*/

/*
    아스키코드 
    A = 65
    Z = 90

    a = 97
    z = 122

    아스키코드 변환
    String.fromCharCode(65) -> A
    'A'.charCodeAt(0) -> 65

*/