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
