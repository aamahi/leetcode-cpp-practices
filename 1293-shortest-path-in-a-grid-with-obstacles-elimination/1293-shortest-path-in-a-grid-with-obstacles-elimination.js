var shortestPath = function(grid, k) {
    let visited = new Set()
    let queue = [[0,0,k,0]]//curx,cury,eliminateT,step
    let dirs = [[0,1],[1,0],[-1,0],[0,-1]]
    while(queue.length){
        let [curx,cury,eleminateT,step] = queue.shift()
        if (visited.has(`${curx}${cury}${eleminateT}`)) continue
        if (eleminateT === -1) continue
        if (curx === grid.length - 1 && cury === grid[0].length - 1) return step 
        visited.add(`${curx}${cury}${eleminateT}`)
        for (let [dx,dy] of dirs) {
            let nextX = curx + dx
            let nextY = cury + dy
            if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) continue
            if (grid[nextX][nextY] === 0) queue.push([nextX, nextY, eleminateT,step + 1] )
            else queue.push([nextX, nextY, eleminateT - 1,step + 1] )
        }
    }
    return -1
};