/* 2020. 10. 09     Level_1 모의고사 [문제탐색]
    문제 설명
    수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
    수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

    1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
    2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
    3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

    1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
    가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

    제한 조건
    시험은 최대 10,000 문제로 구성되어있습니다.
    문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
    가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

    입출력 예)
    answers -> [1, 2, 3, 4, 5]
    return -> [1]
    
    answers -> [1, 3, 2, 4, 2]
    return -> [1, 2, 3]
*/

// My first code 내가 생각해도 레전드 무대포식이네..;;
function solution(answers){
    let std1 = [1, 2, 3, 4, 5];
    let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let result = [];
    let k = 0;

    for(let i = 0; i < answers.length; i += std1.length){
        for(let j = 0; j < std1.length; j++){
            if(answers[j + i] === std1[j]){
                count1++
            }
        }
    }

    for(let i = 0; i < answers.length; i += std2.length){
        for(let j = 0; j < std2.length; j++){
            if(answers[j + i] === std2[j]){
                count2++
            }
        }
    }

    for(let i = 0; i < answers.length; i += std3.length){
        for(let j = 0; j < std3.length; j++){
            if(answers[j + i] === std3[j]){
                count3++
            }
        }
    }
    
    if(count1 === count2 && count2 == count3){
        return [1, 2, 3];
    }
    else if(count1 < count2 && count2 == count3){
        return [2, 3];
    }
    else if(count1 === count2 && count2 > count3){
        return [1, 2];
    }
    else if(count1 > count2 && count1 === count3){
        return [1, 3];
    }
    else if(count1 > count2 && count1 > count3){
        return [1];
    }
    else if(count2 > count1 && count2 > count3){
        return [2];
    }
    else if(count3 > count1 && count3 > count1){
        return [3];
    }
}


/* My second code
    answer 배열과 수포자 배열 비교해서 count 배열에 집어넣기
    count 배열의 max 값 비교.
*/

function solution(answers){
    let std1 = [1, 2, 3, 4, 5];
    let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    let answer = [];
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === std1[i % std1.length]){
            count[0]++;
        }
        if(answers[i] === std2[i % std2.length]){
            count[1]++;
        }
        if(answers[i] === std3[i % std3.length]){
            count[2]++;
        }
    }
    
    let max = Math.max(count[0], count[1], count[2]);
    
    for(let i = 0; i < count.length; i++){
        if(max === count[i]){
            answer.push(i + 1);
        }
    }

    return answer;
}



/* 메모 흔적
    function solution(answers){
        let std1 = [1, 2, 3, 4, 5];
        let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
        let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
        let k = 0;
        let count1 = 0;
        let result = [];

        for(let i = 0; i < 3; i ++){
            for(let j = 0; j < answers.length; j++){
                if(std1[k] === undefined){
                    k = 0;
                    if(answers[j] === std1[k]){
                        count1 ++;
                        k++;
                    }
                }
                else{
                    if(answers[j] === std1[k]){
                        count1 ++;
                        k++;
                    }
                }

            }
            result.push(count1);
            count1 = 0;

        }
        return count1;
    }




    function solution(answers){
        let std1 = [1, 2, 3, 4, 5];
        let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
        let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
        let count1 = 0;
        let result = [];
        let k = 0;
        for(let i = 0; i < 3; i ++){
            for(let j = 0; j < answers.length; j++){
                if(answers[j] === std1[k]){
                    count1 ++;
                    k++
                }
                
                else if(std1[k] === undefined){
                    k = 0;
                    if(answers[j] === std1[k]){
                        count1 ++;
                        k++;
                    }
                }
            }
            console.log(count1);
            count1 = 0;
        }

        return result;
    }


    [1, 2, 3, 4, 5, 6, 7, 8]
    function solution(answers){
        let std1 = [1, 2, 3, 4, 5];
        let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
        let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
        let count1 = 0;
        let result = [];
        let k = 0;

        for(let i = 0; i < answers.length; i += 5){
            for(var j = 0; j < std1.length; j++){
                if(answers[i] === std1[j]){
                    count1++;
                }
            }
        }
        
        return count1;

    }

    console.log(solution([1, 2, 3, 4, 5, 6, 2]));

    var k = 0;
    var count = 0;
    while(j < answers.length){
        if(answers[j] === std1[j]){
            count++;
            k++;
        }
        else if(std1[j] !== undefined){
            k = k - k;
            if(answers[j] === std1[j]){
                count++;
                k++;
            }
        }
    }

    while(i < answers.length){
        for(j = 0; j < std1.length; j++){
            std1.push(j);
        }
    }
    var j = 0;
    for(var i = 0; i < answers.length; i++){
        if(j === std1.length){
            j = 0;
        }
        std1.push(st1[j]);
    }







    let result = [];
    answers = [1, 2, 3, 4, 5, 6, 7, 8]
    function solution(answers){
        let std1 = [1, 2, 3, 4, 5];
        if(answers[i])
    }
*/
