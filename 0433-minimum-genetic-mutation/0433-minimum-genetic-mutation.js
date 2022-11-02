var minMutation = function(start, end, bank) {
    const options = ['A', 'C', 'G', 'T'];
    let set = new Set(bank);
    if (!set.has(end)) return -1;
    let q = [start];
    let steps = 0;
    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let dna = q.shift();
            // try all one step moves
			for (let j = 0; j < 8; j++) {
                for (let option of options) {
                    const newDNA = dna.slice(0, j) + option + dna.slice(j + 1);
                    if (newDNA === end) {
                        return steps + 1;
                    };
                    
                    if (set.has(newDNA)) {
                        set.delete(dna);
                        q.push(newDNA);
                    }
                }
            }
        }
        
        steps++;
    }
    
    return -1;
};