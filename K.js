function solution(a, b) {
var array = a;
var commands = b;
var i;
var j;
for(i = 0; commands[i][0] <= commands[i][1]; i++)
{
    for(j = 0; commands[j][0] <= commands[j][1]; commands[j][0]++)
    {   
        var array2 = [];
        array2.push(commands[j][0] - 1);
    }
    array2.sort(function(a, b){return a - b});
    var answer = [];
    answer.push(array2[commands[i][2]]);
}

return answer;
}
