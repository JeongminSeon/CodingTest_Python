function solution(progresses, speeds) {
    let answer = [];
    let head = 0; // 큐의 맨 앞(O(1) shift() 역할)
    let days = 0; // 날짜

    while(head < progresses.length) {
        // 1. "시간의 흐름"
        //    head(첫 작업)가 100이 될 때까지 날짜를 보낸다
        //    (현재 진행도 + (지난 날짜 * 속도))
        let remainingWork = 100 - progresses[head];
        let remainingDays = Math.ceil(remainingWork / speeds[head]);
        
        //  '가장 빠른 배포일'을 계산
        let deployDay = remainingDays; 

        // 2. "작업 처리" (배포)
        let count = 0;
        
        //  큐에 남은 작업들을 확인
        while(head < progresses.length) {
            let currentWork = 100 - progresses[head];
            let currentDays = Math.ceil(currentWork / speeds[head]);
            
            //  "현재 작업이 '가장 빠른 배포일'에 배포될 수 있는가?"
            if (currentDays <= deployDay) {
                // 배포 가능!
                head++;
                count++;
            } else {
                // 배포 불가능! (다음 배포일에...)
                break;
            }
        }
        
        // 3. 이번 배포에 몇 개가 나갔는지 기록
        answer.push(count);
    }
    
    return answer;
}