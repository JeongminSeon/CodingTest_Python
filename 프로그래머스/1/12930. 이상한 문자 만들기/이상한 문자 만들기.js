function solution(s) {
    let answer = "";
    let arr = s.split(" ");
    
    for(let i = 0; i < arr.length; i++) {
        let str = Array.from(arr[i]);
        for(let j = 0; j < str.length; j++) {
            if(j % 2 === 0) {
                answer += str[j].toUpperCase(); 
            } else {
                answer += str[j].toLowerCase();
            }
            
        }
        if(i !== arr.length - 1) answer += " ";
    }
    
    return answer;
}