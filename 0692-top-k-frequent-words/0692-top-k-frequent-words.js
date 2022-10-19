/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const hashmap = new Map();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!hashmap.has(word)) {
            hashmap.set(word, 1);
        } else {
            hashmap.set(word, hashmap.get(word) + 1);
        }
    }
    
    const arr = [...hashmap.entries()].sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));
    
    return arr.slice(0, k).map(item => item[0]);
};