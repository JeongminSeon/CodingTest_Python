function solution(polynomial) {
    let poly = polynomial.split(" ").filter((item) => item !== '+');
    
    let xCount = 0;
    let sum = 0;
    
    for(let p of poly) {
        if(p.includes('x')){
            if(p === 'x'){
                xCount += 1;
            } else {
                xCount += Number(p.replace('x', ''));
            }
        } else {
            sum += Number(p);
        }
    }
    
    let result = [];
    if (xCount > 0) result.push(`${xCount === 1 ? '' : xCount}x`);
    if (sum > 0) result.push(`${sum}`); // 상수항
    return result.join(' + ');
}