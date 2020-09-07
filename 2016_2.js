// 2016 문제를 더욱 간결하게 풀어보았습니다.

function solution(a, b){
    var array = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var getday = date.getDay();
    
    return array[getday];
}
