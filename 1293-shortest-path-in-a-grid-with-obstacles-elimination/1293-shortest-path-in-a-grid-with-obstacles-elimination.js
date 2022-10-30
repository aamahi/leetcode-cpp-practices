var shortestPath = function(grid, k) {
    // Constants
    const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // [Up, Right, Down, Left];
    const m = grid.length;
    const n = grid[0].length;
    
    let steps = 0;
    const visited = new Set();
    let queue = [[0,0,k]];
    
    // BFS O(V + E) = O(M * N + 4(M * N)) = O(MN)
    while (queue.length) {
        let nextQueue = []; 
        while (queue.length) {
            // Start polling items from the queue
            const [i, j, kLeft] = queue.shift();    
            
            // If the cell has been visited before, skip
            if (visited.has(`${i},${j},${kLeft}`)) {
                continue;
            } else {
                visited.add(`${i},${j},${kLeft}`);
            }
            
            // Has reached the end
            if (i === m - 1 && j === n - 1) { 
                return steps;
            }
            
            // Try to move in all directions
            for (const direction of DIRECTIONS) {
                const nextI = i + direction[0];
                const nextJ = j + direction[1];
                
                // If the coordinates are out of bounds OR a wall has been encountered with no more k left, skip 
                if (nextI < 0 || nextJ < 0 || nextI >= m || nextJ >= n || grid[nextI][nextJ] && !kLeft) {
                    continue;
                }
                
                // Add the next step to the next iteration of BFS
                const nextK = grid[nextI][nextJ] ? kLeft - 1 : kLeft;
                nextQueue.push([nextI, nextJ, nextK]);
            }
        }
        queue = nextQueue;
        steps++;
    }
    
      
    return -1;
};