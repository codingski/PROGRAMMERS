/*
function solution(a, b){


    return a.slice(b[0] - 1, b[1])[b[2] + 1];
}

console.log(solution(['a', 'b', 'c', 'd', 'e'], [1, 3, 2]));

*/
function solution(a, b){
    var sortArray = a.slice(b[0] - 1, b[1]).sort(function(a, b){return a - b});

    return sortArray[b[2] - 1];
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [4, 4, 1]));

