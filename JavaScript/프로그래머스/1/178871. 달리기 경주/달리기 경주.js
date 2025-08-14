function solution(players, callings) {
    let race = {};

    players.forEach((player, idx) => {
        race[player] = idx + 1;
    });
    
    for(let call of callings) {
        let idx = race[call] - 1;
        let t = players[idx-1]; // 선두 선수
        race[call] -= 1;
        race[t] += 1;
        
        // swap
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]]
    }
    
    return players;
}