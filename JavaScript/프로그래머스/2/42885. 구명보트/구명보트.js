function solution(people, limit) {
    let answer = 0;
    
    let sorted = people.sort((a, b) => b - a);
    
    let left = 0;
    let right = people.length - 1;
    
    while(left <= right) {
        
        if(left === right) {
            answer++;
            break;
        }
        
        if(people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            left++;
        }
        
        answer++;
    }
    
    return answer;
}