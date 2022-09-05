var pivotIndex = function(nums) {
    let lSum=0;
    let rSum = nums.reduce((acc,cur)=>acc+cur);
        
    if(nums.length === 1) return 0;
    
    for(let i=0; i<nums.length; i++){
        lSum+=nums[i];
        
        if(i==0){
            if(rSum-nums[i] === 0){
                return i;
            }
        } else if(i==(nums.length-1)){
            if(lSum-nums[i] === 0){
                return i;
            }            
        } else {
            if(lSum === rSum){
                return i;
            }
        }
        rSum-=nums[i];
    }
    
    return -1;
};
