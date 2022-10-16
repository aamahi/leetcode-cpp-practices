/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let numSet = new Set(nums);
    nums = nums.sort((a,b)=>b-a);
    for (let num of nums) {
        if (numSet.has(num*(-1))) return num;
        if (num < 0) break;
    }
    return -1;
};
