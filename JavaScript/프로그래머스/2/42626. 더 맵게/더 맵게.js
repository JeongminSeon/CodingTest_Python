function solution(scoville, K) {
    let count = 0;
    
    const heap = new Heap();
    
    for(const s of scoville) {
        heap.insert(s);
    }
    
    while(heap.values[0] < K) {
        if(heap.values.length < 2) {
            return -1;
        }
        
        let first = heap.remove();
        let second = heap.remove();
        
        heap.insert(first + (second * 2));
        count++;
    }
    
    return count;
}

class Heap {
  constructor() {
    this.values = [];
  }

  insert(node) {
    this.values.push(node);
    this.bubbleUp(this.values.length - 1);
  }

  remove() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const minValue = this.values[0];

    this.values[0] = this.values.pop();
    this.bubbleDown(0);

    return minValue;
  }

  bubbleUp(index) {
    // 부모 노드와 비교 후 값이 더 작으면 buubleUp.

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);

      if (this.values[index] < this.values[parentIdx]) {
        [this.values[index], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[index],
        ];

        index = parentIdx;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    let element = this.values[index];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (element > leftChild) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && element > rightChild) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}
