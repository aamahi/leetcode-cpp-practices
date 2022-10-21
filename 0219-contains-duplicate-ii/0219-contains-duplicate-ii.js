/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = [];
    for(let i = 0; i < nums.length; i++) {
    // first case will be undefined in map & hence NAN
        if(i - map[nums[i]] <= k) {
            return true;
        } else {
            map[nums[i]] = [i] ;
        }
    }
    return false;
};