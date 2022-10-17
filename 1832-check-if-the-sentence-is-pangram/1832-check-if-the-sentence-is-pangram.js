/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const hashmap = new Map();
    
    for (let i = 0; i < sentence.length; i++) {
        if (!hashmap.has(sentence[i])) {
            hashmap.set(sentence[i], 1);
        }
        if (hashmap.size === 26) return true;
    }

    return false;
};