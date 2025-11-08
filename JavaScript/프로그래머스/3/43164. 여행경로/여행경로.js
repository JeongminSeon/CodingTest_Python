function solution(tickets) {
    const result = [];
    const graph = {};
    
    for(const [from, to] of tickets) {
        if(!graph[from]) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    
    for(const key in graph) {
        graph[key].sort();
    }
    
    function dfs(currentCity) {
        let destinations = graph[currentCity];
        
        while(destinations && destinations.length > 0) {
            let nextCity = destinations.shift(); // ticket 소모
            dfs(nextCity);
        }
        
        // ticket이 다 소모되면 result에 현재 도시 push
        result.push(currentCity);
    }
    
    dfs('ICN');
    
    return result.reverse();
    
}