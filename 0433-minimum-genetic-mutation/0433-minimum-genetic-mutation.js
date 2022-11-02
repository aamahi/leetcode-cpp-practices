/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    const N = start.length;
    const valid = new Set(bank);
    const visited = new Set([start]);
    const queue = [[start]];
    const diff = ['A', 'C', 'G', 'T'];

    let steps = 0;
    
    if (!valid.has(end)) {
        return -1;
    }
    
    while (queue.length > 0) {
        const genes = queue.pop();
        const newGenes = [];

        for (const gene of genes) {
            if (gene === end) {
                return steps;
            }

            for (let i = 0; i < N; i++) {
                for (const g of diff) {
                    const chars = gene.split('');
                    chars[i] = g;

                    const newGene = chars.join('');

                    if (visited.has(newGene) || !valid.has(newGene)) {
                        continue;
                    }

                    visited.add(newGene);
                    newGenes.push(newGene);
                }
            }
        }
        
        if (newGenes.length > 0) {
            queue.push(newGenes);
        }
        
        steps++;
    }
    
    return -1;
};