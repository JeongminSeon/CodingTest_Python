function solution(a, b) {
    let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let date = new Date(2016, a-1, b);
    
    
    return arr[date.getDay()];
    
}