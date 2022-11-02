var minMutation = function(start, end, bank, step=0) {
    if (start === end) return step

    const next = []
    const other = []
    for(let i=0;i<bank.length;i++) {
        if (isNext(start, bank[i])) next.push(bank[i])
        else other.push(bank[i])
    }
    
    let result = -1
    for(let i=0;i<next.length;i++) {
        result = toResult(result, minMutation(next[i], end, other,step+1))
    }
    return result
};

var isNext = function(a,b) {
    let diff = 0
    for(let i=0;i<8;i++) {
        if (a[i]!==b[i]) {
            if (++diff === 2) return false
        }
    }
    return true
}

var toResult = function(a,b) {
    if (b===-1) return a
    if (a===-1) return b
    return Math.min(a,b)
}
