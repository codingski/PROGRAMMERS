function solution(s){
    for(var i = 0; i < s.length; i ++){
        if(s[i] == ')'){
            for(j = i; 0 < count; count--){
                if(s[j + count - 1] === '('){
                    continue;
                }
                else{
                    return false;
                }
            }
        }
    count ++
    }
};
