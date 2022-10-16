/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let maxValue = 0;
    const size = nums.length;
    for (let i = 0; i < size; i++) {
        if (Math.abs(nums[i]) > maxValue && nums.indexOf(-nums[i]) !== -1) {
            maxValue = nums[i];
        }
    }
    return maxValue == 0 ? -1 : maxValue;
};