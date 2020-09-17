/*
    문제 설명
    문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

    제한 사항
    s는 길이 1 이상, 길이 8 이하인 문자열입니다.

    입출력 예 1)
    parameter -> "a234"
    return -> false
    
    입출력 예 2)
    parameter -> "1234"
    return -> true
*/

// 내가 푼 문제풀이
// 주의할 점은 지수(ex parameter -> 1e11) 를 넣으면 숫자로 인식된다.
// 그래서 지수부분을 처리하려고 코드를 작성하다보니 굉장히 비효율적으로 코드를 작성하게 되었다.

function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(s.indexOf('e') === 0 || s.indexOf('e') === 1 || s.indexOf('e') === 2 || s.indexOf('e') === 3 || s.indexOf('e') === 4 || s.indexOf('e') === 5){
           return false;
        }
        else if(Number(s) / 1 === Number(s)){
            return true;
        }
        else{
            return false;
        }
        }
    else{
        return false;
    }
}


// 고-수 님의 풀-이

    function solution(s) {
    s = s.replace('e', '').trim()

    return ((s.length == 4 || s.length == 6) && !isNaN(s))
    }

// 감탄이 절로 나온다;;
