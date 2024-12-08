function solution(n) {
    let answer = new Set();
    
    let number = n;
    let i = 2;
    
    while (number >= 2) {
        if(number % i === 0) {
            answer.add(i);
            number = number / i;
        } else {
            i++;
        }
    }
   
    return [...answer];
}