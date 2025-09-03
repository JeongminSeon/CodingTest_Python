function solution(numbers) {
    let resultSet = new Set();
    let count = 0;
    
    let nums = numbers.split("");
    
    function generate(currentNum, remainNums) {
        if(currentNum !== "") {
            resultSet.add(Number(currentNum));
        }
        
        for(let i = 0; i < remainNums.length; i++) {
            const toAttach = remainNums[i];
            const nextRemain = [...remainNums];
            nextRemain.splice(i, 1);
            
            generate(currentNum + toAttach, nextRemain);
        }
    }
    
    generate("", nums);

    for(const num of resultSet) {
        if(isPrime(num)) count++;
    }
    
    return count; 
    
}

function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    
    return true;
}