var lengthOfLongestSubstring = function(s) {
    
  const set = new Set();
  let start = 0;
  let maxSize = 0;
  for (let i=0; i < s.length; i++) {
    const c = s.charAt(i);
    
	// keep remove character not in the non-repetitive substring
    while (set.has(c)) {
      set.delete(s.charAt(start))
      start += 1;
    }
    
    maxSize = Math.max(maxSize, i - start + 1);    
    set.add(c);    
    
  }
  
  return maxSize;
};