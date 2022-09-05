var isSubsequence = function(s, t) {
    // when s is empty, return true
    if(s.length === 0) return true;
    
    // loops through every char of t
    for(const c of t){
        // If char equals to first char of s
        if(c === s.slice(0,1)){
            // 1. If s has only one char, return true because there is no more char to compare.
            if(s.length === 1) return true; 
            // 2. When s has more then one character, remove the first char from s.
            s = s.slice(1);
        }
    }
    return false;
};
