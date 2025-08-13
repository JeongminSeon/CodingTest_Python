function solution(schedules, timelogs, startday) {
    let result = 0;
    
    // 2중 for문 ok 1,000,000
    // 토요일, 일요일 체크 => startday + i % 7 (저장할 필요는 없는듯)
    // 시간 계산은 어떻게 ?
    
    for(let i = 0; i < schedules.length; i++) {
        let time = schedules[i] + 10;
        
        if(time % 100 >= 60) {
            time = time + 100 - 60;
        }
    
        let count_holiday = 0;
        let count = 0;
        
        timelogs[i].forEach((timelog, index) => {
            let day = (startday + index) % 7;
            
            if(day === 6 || day === 0) {
                count_holiday++;
                return;
            }
            
            if(time >= timelog) count++;
        })
        
        if(count === 7 - count_holiday) {
            result++;
        }
    }
    return result;
}