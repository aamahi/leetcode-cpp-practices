/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) return "";

  let l = 0, r = 0;
  let count = 0, minI = s.length + 1, minL = s.length + 1;

  const freqMap = {};
  for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1;

  while (r < s.length) {
    if (freqMap[s[r]]-- >= 1) count += 1;
    r += 1;

    while (count == t.length) {
      if (r - l < minL) {
        minL = r - l;
        minI = l;
      }
      if (freqMap[s[l]]++ >= 0) count -= 1;
      l += 1;
    }
  }
  return s.slice(minI, minI + minL);
};