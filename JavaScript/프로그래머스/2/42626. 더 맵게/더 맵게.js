function solution(scoville, K) {
    let count = 0;
    
    
    let heap = new MeanHeap();
    
    for(const value of scoville) {
        heap.insert(value);
    }
    
    while(heap.heap[0] < K) {
        if(heap.heap.length < 2) {
            return -1;
        }
        
        let first = heap.remove();
        let second = heap.remove();
        
        let newValue = first + second * 2;
        heap.insert(newValue);
        count++;
    }
    
    return count;
}

class MeanHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    
    bubbleUp(index) {
        while(index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            
            if(this.heap[index] < this.heap[parentIdx]) {
                [this.heap[index],this.heap[parentIdx]] = [this.heap[parentIdx],this.heap[index]];
                
                index = parentIdx;
            } else {
                break;
            }
        }
    }
    
    remove() {
        if(this.heap.length === 0 ) return undefined;

        let value = this.heap[0];
        
        if(this.heap.length === 1) {
            this.heap.pop();
        } else {
            this.heap[0] = this.heap.pop();
            this.bubbleDown(); // bubbleDown은 길이가 2이상일때만
        }
        
        return value;
    }
    
    bubbleDown() {
        let index = 0; // root
        const element = this.heap[index];
        const length = this.heap.length;
        
        while(true) {
            let leftChildIdx = index * 2 + 1;
            let rightChildIdx = index * 2 + 2;
            let leftChild, rightChild;
            let swap = null;
            
            // 왼쪽부터 확인
            if(leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                
                if(element > leftChild) {
                    swap = leftChildIdx;
                }
            }
            
            // 오른쪽 확인
            if(rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                
                if(
                    (swap === null && element > rightChild) ||
                    (swap !== null && leftChild > rightChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if(swap === null) break;
            
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}