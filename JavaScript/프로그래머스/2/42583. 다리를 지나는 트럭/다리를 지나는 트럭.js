function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    let bridge = [];
    let bridgeWeight = 0;
    
    let truckIndex = 0;
    
    let bridgeHead = 0;
    
    while(truckIndex < truck_weights.length || bridgeHead < bridge.length) {
        
        time++;
        
        if(bridgeHead < bridge.length && bridge[bridgeHead].exitTime === time) {
            let exitedTruck = bridge[bridgeHead];
            bridgeHead++;
            bridgeWeight -= exitedTruck.weight;
        }
        
        if(truckIndex < truck_weights.length) {
            let nextTruckWeight = truck_weights[truckIndex];
            
            if(
                (bridge.length - bridgeHead) < bridge_length &&
                (bridgeWeight + nextTruckWeight) <= weight
            ) {
                bridge.push({
                    weight : nextTruckWeight,
                    exitTime : time + bridge_length
                });
                
                bridgeWeight += nextTruckWeight;
                truckIndex++;
            }
        }
    }
    
    return time;
}