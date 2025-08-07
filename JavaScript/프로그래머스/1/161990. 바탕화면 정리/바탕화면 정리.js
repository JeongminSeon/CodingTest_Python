function solution(wallpaper) {
    
    let xPos = [];
    let yPos = [];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                xPos.push(j); // 열 (X축)
                yPos.push(i); // 행 (Y축)
            }
        }
    }
    
    xPos.sort((a, b) => a - b);
    yPos.sort((a, b) => a - b);
    
    return [yPos[0], xPos[0], yPos[yPos.length - 1] + 1, xPos[xPos.length - 1] + 1]
}