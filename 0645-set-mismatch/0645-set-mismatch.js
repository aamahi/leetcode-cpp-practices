/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function(nums) {
    const obj = {};
    
    let repeated;
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) repeated = [nums[i]];
        obj[nums[i]] = nums[i];
    };
    for (let i = 1; i <= nums.length; i++) {
        if (!obj[i]) return [repeated, i];
    };
};