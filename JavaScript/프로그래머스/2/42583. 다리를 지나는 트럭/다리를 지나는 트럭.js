function solution(bridge_length, weight, truck_weights) {
    let bridgeCars = [];
    let time = 0;
    
    while(truck_weights.length !== 0 || bridgeCars.length !== 0) {
        
        if(bridgeCars.length !== 0 && bridgeCars[0][1] === bridge_length) {
            bridgeCars.shift();
        }
        
        let sum = bridgeCars.reduce((acc, cur) => acc + cur[0], 0);
        let length = bridgeCars.length;
        
        if(sum + truck_weights[0] <= weight && length + 1 <= bridge_length) {
            let weight = truck_weights.shift();
            bridgeCars.push([weight, 0]);
        }
        
        bridgeCars = bridgeCars.map((car) => [car[0], ++car[1]]);
        time++;
    }
    
    return time;
}