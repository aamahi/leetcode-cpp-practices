/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedStrs = strs.map(el => el.split("").sort().join(""))
    let hash = {};
    for(let i=0; i < strs.length ; i++)
    {
        let str = sortedStrs[i];
        if(!hash[str])
        {
            hash[str] = [strs[i]]        
        } else {
            hash[str].push(strs[i])
        }
    
    }
    return Object.values(hash)
};