/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const ans = { val: 0 };
  helper(arr, 0, ans, new Set([]));

  return ans.val;
};

function helper(arr, idx, ans, set) {
  if (idx === arr.length) {
    ans.val = Math.max(ans.val, set.size);
    return;
  }

  helper(arr, idx + 1, ans, set);

  if (isPossibleToPick(arr[idx], set)) {
    const newSet = new Set(set);
    for (const char of arr[idx]) newSet.add(char);
    helper(arr, idx + 1, ans, newSet);
  }
}

function isPossibleToPick(word, set) {
  const containsDuplicate = new Set(word.split('')).size !== word.length;
  if (containsDuplicate) return false;

  for (const char of word) {
    if (set.has(char)) return false;
  }
  return true;
}