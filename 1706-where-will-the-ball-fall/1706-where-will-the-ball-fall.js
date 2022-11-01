var findBall = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const res = [];
        
    for (let j = 0; j < n; j++) {
        res[j] = j;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (res[j] === -1) continue;
            
            const currCol = res[j];
            
            if (currCol < n - 1 && grid[i][currCol] === 1 && grid[i][currCol + 1] === -1) {
                res[j] = -1;
            }
            else if (currCol > 0 && grid[i][currCol] === -1 && grid[i][currCol - 1] === 1) {
                res[j] = -1;
            }
            else {
                res[j] += grid[i][currCol];
               
                if (res[j] === n) res[j] = -1;
            }
        }
    }
    
    return res;
};