var findBall = function(grid) {
    let n = grid.length;
    if( n == 0 ) return [];
    let m = grid[0].length;
    var i, x, y;
    let spots = new Array();
    var dist;
    
    for( i=0; i<m; i++ ) {
        spots.push(i);
    }
    
    for( y=0; y<n; y++ ) {
        for( i in spots ) {
            x = spots[i];
            if( x == -1 ) continue;
            dist = grid[y][x];
            x += dist;
            if( x>=m || x<0 || grid[y][x] == -dist ) {
                spots[i] = -1;
            } else {
                spots[i] = x;
            }
        }
    }
    
    return spots;
};