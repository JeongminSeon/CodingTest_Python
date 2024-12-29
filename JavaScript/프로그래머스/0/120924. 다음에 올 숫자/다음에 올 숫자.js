function solution(comm) {
    let diff1 = comm[1] - comm[0];
    let diff2 = comm[2] - comm[1];
    
    if(diff1 === diff2) return comm.pop() + diff1;
    if(diff1 !== diff2) return comm.pop() * (diff2 / diff1);
}