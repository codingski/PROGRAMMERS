//
function solution(priorities, location){
    let array = priorities;
    let Location = location;
    for(let i = 0; i < array.length; i++){
        let count = i + 1;
        let count2 = 0;
        while(true){
            if(array[i] < array[count]){
                if(Location === 0){
                    Location = array.length - 1;
                }
                else if(Location === i){
                    Location = array.length - 1;
                }
                else{
                    Location = Location - 1;
                }
                array.push(array[i]);
                array.splice(i, 1);
                count = i + 1;
            }
            else{
                count++;
            }
            count2++;
            if(count2 === 100){
                break;
            }
        }
    }
    return Location + 1;
}

console.log(solution([1, 2, 3, 4, 1], 0));

