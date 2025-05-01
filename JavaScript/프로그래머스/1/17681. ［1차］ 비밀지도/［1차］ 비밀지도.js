function solution(n, arr1, arr2) {
    let answer = [];
    
    
    for(let i = 0; i < n; i ++) {
        let map1 = arr1[i].toString(2).padStart(n,"0").split("");
        let map2 = arr2[i].toString(2).padStart(n,"0").split("");
        
        let temp = [];
        for(let j = 0; j < n; j++){
            if(map1[j] === "0" && map2[j] === "0") {
                temp.push(" ");
            } else {
                temp.push("#");
            }
        }
        
        answer.push(temp.join(""));
    }
    
    return answer;
}