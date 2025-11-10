function solution(tickets) {
    const graph = {};
    const path = [];

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
    
    function dfs(city) {
        let destinations = graph[city];
        
        while(destinations && destinations.length > 0) {
            let nextCity = destinations.shift();
            dfs(nextCity);
        }
        
        path.push(city);
    }
    
    dfs('ICN')
    
    return path.reverse();
}