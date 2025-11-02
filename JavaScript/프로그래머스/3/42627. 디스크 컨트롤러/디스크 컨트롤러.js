function solution(jobs) {  
    const totalJobs = jobs.length;
    let currentTime = 0, jobIndex = 0, totalWaitTime = 0;
    
    // 요청 순서대로 정렬
    jobs.sort((a, b) => a[0] - b[0]);
    
    const queue = new Heap();
    
    while(jobIndex < totalJobs || queue.values.length > 0) {
        // 작업을 힙에 넣는다.
        while (jobIndex < totalJobs && jobs[jobIndex][0] <= currentTime) {
            const [requestTime, takeTime] = jobs[jobIndex];
            const taskNum = jobIndex;
            queue.insert(new Task(taskNum, requestTime, takeTime));
            jobIndex++;
        }
        
        // 힙에 작업이 있다면, 처리
        if(queue.values.length > 0) {
            const task = queue.remove();
            
            currentTime += task.takeTime;
            
            totalWaitTime += (currentTime - task.requestTime);
        } else {
            currentTime = jobs[jobIndex][0];
        }
    }
    
    return Math.floor(totalWaitTime / totalJobs);
}

class Task {
    constructor(taskNum, requestTime, takeTime) {
        this.taskNum = taskNum;
        this.requestTime = requestTime;
        this.takeTime = takeTime;
    }
}

class Heap {
    constructor() {
        this.values = [];
    }
    
    insert(Task) {
        this.values.push(Task);
        
        if(this.values.length >= 2) {
            this.bubbleUp();
        }
    }
    
    bubbleUp() {
        let index = this.values.length - 1; // end
        let element = this.values[index];
        
        while(index > 0) 
        {
            let parentIdx = Math.floor((index - 1) / 2 );
            let parent = this.values[parentIdx];
            
            if(this._isHigherPriority(element, parent)) {       
                [this.values[parentIdx], this.values[index]] = [element, parent];
                index = parentIdx;
            } else {
                break;
            }
            
        }
    } 
    
    remove() {
        if(this.values.length === 0) return undefined;
        
        if(this.values.length === 1) return this.values.pop();
        
        let root = this.values[0];
        let end = this.values.pop();
        
        this.values[0] = end;
        
        this.bubbleDown(0);
        
        return root;
    }
    
    bubbleDown(index) {
        const length = this.values.length;
        const element = this.values[index];
        
        while(true) {
            let leftChildIdx = index * 2 + 1;
            let rightChildIdx = index * 2 + 2;
            let higherPriorityChildIdx = null;
            
            if(leftChildIdx < length) {
                higherPriorityChildIdx = leftChildIdx;
            }
            
            if(rightChildIdx < length) {
                if(this._isHigherPriority(this.values[rightChildIdx], this.values[leftChildIdx])){
                    higherPriorityChildIdx = rightChildIdx;
                }
            }
            
            // 자식이 아예 없으면 종료
            if(higherPriorityChildIdx === null) {
                break;
            }
            
            if(this._isHigherPriority(this.values[higherPriorityChildIdx], element)) {
                [this.values[index], this.values[higherPriorityChildIdx]] = [this.values[higherPriorityChildIdx], this.values[index]];
                index = higherPriorityChildIdx;
            } else {
                break;
            }
        }
    }
    
    // A가 B보다 우선순위가 높으면 true를 반환
    _isHigherPriority(a,b) {
        if(a.takeTime < b.takeTime) return true;
        if(a.takeTime > b.takeTime) return false;
        
        // 소요 시간이 같으면 요청 시각 비교
        if(a.requestTime < b.requestTime) return true;
        if(a.requestTime > b.requestTime) return false;
        
        // 소요시간, 요청시각이 같으면 작업 번호 비교
        if(a.taskNum < b.taskNum) return true;
        if(a.taskNum > b.taskNum) return false;
        
        return false;
    }
}