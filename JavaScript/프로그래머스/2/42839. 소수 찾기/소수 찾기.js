function solution(numbers) { 
    let resultSet = new Set();
    let number = numbers.split("");
    
    // 모든 조합을 만든다.
    // 그 조합에서 소수가 되는지 확인.
    
    generateNumbers("", number ,resultSet);
    
    let primeCount = 0;
    for(let num of resultSet) {
        if(isPrime(num)) {
            primeCount++;
        }
    }
    
    return primeCount;
}

function generateNumbers(currentNum, remainingNumbers, resultSet) {
    
    if(currentNum !== "") {
        resultSet.add(Number(currentNum));
    }
    
    for(let i = 0; i < remainingNumbers.length; i++) {
        
        // 이번에 고를 숫자
        let numberToAttach = remainingNumbers[i];
        
        // 고른 조각을 뺀 나머지를 재귀로 호출
        const nextRemaining = [...remainingNumbers];
        nextRemaining.splice(i,1);
        
        generateNumbers(currentNum + numberToAttach, nextRemaining ,resultSet)
    }
}

function isPrime(n) {
    
    if(n < 2) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    
    return true;
}