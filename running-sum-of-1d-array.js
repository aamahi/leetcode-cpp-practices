/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
output = [];
numLen = nums.length;
total = 0;
for(let i=0; i<numLen; i++) {
    total += nums[i];
    output.push(total);
}
    return output;
};
