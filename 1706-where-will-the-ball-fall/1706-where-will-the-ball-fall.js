var findBall = function(grid) {
    let m = grid.length;
    const n = grid[0].length;
    
    const answer = [...Array(n)].fill(-1);
    
    const moveBall = (index, row, col) => {
        if (row === m) {
            answer[index] = col;
            return true;
        }
        
        if (row >= m || col < 0 || col >= n) {
            return false;
        }
        
        const dir = grid[row][col];
        const next = [];
        
        switch(dir) {
            case 1: {
                const next = grid[row]?.[col + 1];
                if (next === 1) {
                    moveBall(index, row + 1, col + 1);
                }
                break;
            }
                
            case -1: {
                const next = grid[row]?.[col - 1];
                if (next === -1) {
                    moveBall(index, row + 1, col - 1);
                }
                break;
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        moveBall(i, 0, i);
    }
    
    return answer;
};