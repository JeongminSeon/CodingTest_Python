function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const healthLimit = health;
    let lastTime = attacks[attacks.length - 1][0];
    let healTime = 0; // 지속시간 저장
    let idx = 0; // 공격 순서 저장
    
    for(let i = 1; i <= lastTime; i++) {
        let [attackTime, attack] = attacks[idx];
        
        if(attackTime === i) {
            health -= attack;
            idx++;
            healTime = 0;
        } else {
            health += x;
            healTime++;
            if(healTime === t) {
                healTime = 0;
                health += y;
            }
        }
        
        if(health <= 0) return -1;
        if(health > healthLimit) health = healthLimit;
        
    }
    
    return health;
}