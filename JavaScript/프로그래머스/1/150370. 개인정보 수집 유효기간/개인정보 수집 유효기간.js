function solution(today, terms, privacies) {
    let termMap = {};
    
    const toDays = (yyyy_mm_dd) => {
        const [y,m,d] = yyyy_mm_dd.split(".").map(Number);
        return y * 28 * 12 + m * 28 + d;
    }
    
    for(let t of terms) {
        const [code, months] = t.split(" ");
        termMap[code] = Number(months);
    }
    
    const todayDays = toDays(today);
    const answer = [];
    
    privacies.forEach((privacy, idx) => {
        let [date, code] = privacy.split(" ");
        const collected = toDays(date);
        const validSpan = termMap[code] * 28;
        
        if(todayDays - collected >= validSpan) {
            answer.push(idx + 1)
        }
    })
    
    return answer;
}