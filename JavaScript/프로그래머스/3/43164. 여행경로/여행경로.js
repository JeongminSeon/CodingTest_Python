function solution(tickets) {
    let path = [];
    const graph = {};
    
    for(const [from, to] of tickets) {
        if(!graph[from]) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    
    for(const city in graph) {
        graph[city].sort();
    }
    
    
    function dfs(city) {
        
        while(graph[city] !== undefined && graph[city].length !== 0) {
            let nextCity = graph[city].shift();
            dfs(nextCity);
        }
        
        path.push(city);
    }
    
    dfs('ICN');
    
    return path.reverse();
}