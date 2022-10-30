/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */



var shortestPath = function(grid, k) {
    // lets implement this with BFS
    let arr = [];
    let visited = {};
    let output = Number.POSITIVE_INFINITY;
    
    let m = grid.length;
    let n = grid[0].length;
    
    if (k >=  m + n - 2)
            return m  + n - 2;
    
    visited[`0,0,${k}`] = true;
    arr.push([0,0,k,0]);
    
    while (arr.length > 0) {
        let elem = arr.shift();
        let allowedDeletion = elem[2];
        let currentSteps = elem[3];

        if (elem[0] === m - 1 && elem[1] === n - 1) {
            return currentSteps
        }
        
        let neighbourNodes = getNeighbourNodes(elem[0], elem[1], m, n, grid, visited, allowedDeletion);

        for (let i = 0; i < neighbourNodes.length; i++) {
            let nR = neighbourNodes[i][0];
            let nC = neighbourNodes[i][1];

            let newAllowedDeletion = allowedDeletion - grid[nR][nC];
            
            if (newAllowedDeletion < 0) continue;
            
            if (visited[`${nR},${nC},${newAllowedDeletion}`]) continue;
            
            
            visited[`${nR},${nC},${newAllowedDeletion}`] = true;
            
            arr.push([nR,nC, newAllowedDeletion, currentSteps + 1])
        }
    }
    return -1;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */



var shortestPath = function(grid, k) {
    // lets implement this with BFS
    let arr = [];
    let visited = {};
    let output = Number.POSITIVE_INFINITY;
    
    let m = grid.length;
    let n = grid[0].length;
    
    if (k >=  m + n - 2)
            return m  + n - 2;
    
    visited[`0,0,${k}`] = true;
    arr.push([0,0,k,0]);
    
    while (arr.length > 0) {
        let elem = arr.shift();
        let allowedDeletion = elem[2];
        let currentSteps = elem[3];

        if (elem[0] === m - 1 && elem[1] === n - 1) {
            return currentSteps
        }
        
        let neighbourNodes = getNeighbourNodes(elem[0], elem[1], m, n, grid, visited, allowedDeletion);

        for (let i = 0; i < neighbourNodes.length; i++) {
            let nR = neighbourNodes[i][0];
            let nC = neighbourNodes[i][1];

            let newAllowedDeletion = allowedDeletion - grid[nR][nC];
            
            if (newAllowedDeletion < 0) continue;
            
            if (visited[`${nR},${nC},${newAllowedDeletion}`]) continue;
            
            
            visited[`${nR},${nC},${newAllowedDeletion}`] = true;
            
            arr.push([nR,nC, newAllowedDeletion, currentSteps + 1])
        }
    }
    return -1;
};


let getNeighbourNodes = function (currRow, currCol, m, n, grid, visited,k) {
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let output = [];
    
    for (let i = 0; i < directions.length; i++) {
        let rowDiff = directions[i][0];
        let colDiff = directions[i][1];
        
        let newRow = currRow + rowDiff;
        let newCol = currCol + colDiff;
        
        if (newRow < 0 || newRow >= m || newCol <0 || newCol >= n || visited[`${newRow},${newCol},${k}`] === true) continue;
        else output.push([newRow, newCol]);
    }
    return output;
}
