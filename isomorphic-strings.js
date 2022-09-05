var isIsomorphic = function(s, t) {
    let map = {}
    
    if(s.length != t.length){
        return false
    }
    
    let i=0;
    
    while(i<s.length){
        let c1 = s.charAt(i)
        let c2 = t.charAt(i)
        if(!map[c1]){
            if(Object.values(map).indexOf(c2)!=-1)
                return false
            map[c1] = c2
        }else{
            let c3 = map[c1]
            if(c3!=c2){
                return false
            }
        }
        i++    
    }
    return true
};
