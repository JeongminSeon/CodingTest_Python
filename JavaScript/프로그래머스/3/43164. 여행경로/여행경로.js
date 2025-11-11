function solution(tickets) {
    const path = [];
    const graph = {};
    
    for(const [from, to] of tickets) {
        if(graph[from]) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    
    for(const city in graph) {
        graph[city].sort();
        graph[city].reverse();
    }
    
    function dfs(city) {
        const destinations = graph[city];
        
        while(destinations && destinations.length > 0) {
            const nextCity = destinations.pop();
            dfs(nextCity);
        }
        
        path.push(city);
    }
    
    dfs('ICN');
    
    return path.reverse();
}