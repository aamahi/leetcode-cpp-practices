/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var overlapImages = function(img1, img2, offrow, offcol) {
    let n = img1.length;
    var i, j;
    let overlap=0;
    let offrow2=0, offcol2=0;
    if( offrow < 0 ) {
        offrow2 = -offrow;
        offrow=0;
    }
    if( offcol < 0 ) {
        offcol2 = -offcol;
        offcol=0;
    }
    for( i=0; offrow+i<n && offrow2+i<n; i++ ) {
        for( j=0; offcol+j<n && offcol2+j<n; j++ ) {
            if( img2[i+offrow][j+offcol] == 1 && img1[i+offrow2][j+offcol2] == 1 )
                overlap++;
        }
    }
    return overlap;
}
var largestOverlap = function(img1, img2) {
    let n = img1.length;
    let maxoverlap=0;
    for( i=-n; i<n; i++ ) {
        for( j=-n; j<n; j++ ) {
            maxoverlap = Math.max(maxoverlap, overlapImages(img1, img2, j, i));
        }
    }
        
    return maxoverlap;
};