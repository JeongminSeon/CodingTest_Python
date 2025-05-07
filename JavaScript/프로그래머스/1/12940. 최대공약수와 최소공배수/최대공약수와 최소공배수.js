function solution(n, m) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let g = gcd(n, m);
    let l = (n * m) / g;
    
    return [g, l];
}
