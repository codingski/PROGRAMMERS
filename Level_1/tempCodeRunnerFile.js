/*
function solution(a, b){


    return a.slice(b[0] - 1, b[1])[b[2] + 1];
}

console.log(solution(['a', 'b', 'c', 'd', 'e'], [1, 3, 2]));

*/
function solution(a, b){


    return a.slice(b[0] - 1, b[1])[b[2] - 1];
}

console.log(solution(['a', 'b', 'c', 'd', 'e'], [1, 3, 2]));

