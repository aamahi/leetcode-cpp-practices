var minMutation = function (start, end, bank) {

    const GENE_LETTERS = ['A', 'C', 'G', 'T'];
    const GENE_SIZE = 8;
    const NOT_POSSIBLE = -1;

    const setGeneBank = new Set();
    for (let gene of bank) {
        setGeneBank.add(gene);
    }

    if (!setGeneBank.has(end)) {
        return NOT_POSSIBLE;
    }

    const queue = new Queue();
    queue.enqueue(start.split(''));
    let numberOfMutations = 0;

    while (!queue.isEmpty()) {
        let size = queue.size();

        while (size-- > 0) {
            const geneAsArray = queue.dequeue();
            if (geneAsArray.join('') === end) {
                return numberOfMutations;
            }

            for (let i = 0; i < GENE_SIZE; i++) {
                for (let j = 0; j < GENE_LETTERS.length; j++) {

                    let storeCurrentLetter = geneAsArray[i];
                    geneAsArray[i] = GENE_LETTERS[j];
                    let geneToString = geneAsArray.join('');

                    if (setGeneBank.has(geneToString)) {
                        setGeneBank.delete(geneToString);
                        queue.enqueue([...geneAsArray]);
                    }
                    geneAsArray[i] = storeCurrentLetter;
                }
            }
        }
        numberOfMutations++;
    }
    return NOT_POSSIBLE;
};