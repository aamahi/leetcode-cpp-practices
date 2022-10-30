
var shortestPath = function(grid, k) {
	const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]; // UP, RIGHT, DOWN, LEFT
	const m = grid.length, n = grid[0].length;
		
	if (k >= m + n - 2) // Manhattan distance
		return m + n - 2; 	
		
	const queue = [[0, 0, 0, 0]]; // [row, col, # obstacles eliminated, dist]
	
	const visited = Array(m).fill().map(() => Array(n).fill(1601));
	visited[0][0] = 0;
  
	while (queue.length !== 0) {
		const curr = queue.shift();
		const row = curr[0], col = curr[1], currK = curr[2], dist = curr[3];
		
		if (curr[0] === m - 1 && curr[1] === n - 1) 
			return dist;
		
		for (const dir of directions) {
			const newRow = row + dir[0];
			const newCol = col + dir[1];
			
			if (newRow < 0 || newCol < 0 || newRow >= m || newCol >= n) // Out of Bound
				continue;

			const newK = currK + grid[newRow][newCol];
			
			if (newK > k || visited[newRow][newCol] <= newK)  // more optical solution exist
				continue;
			
			visited[newRow][newCol] = newK;
			queue.push([newRow, newCol, newK, dist + 1]);
		}
	 
	}
	
	return -1;
};