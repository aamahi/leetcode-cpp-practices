class Solution {
public:
    int arraySign(vector<int>& nums) {
       
        int neg=0;
        int n = nums.size();
        for(int i=0;i<n;i++){
            if(nums[i]==0){
                return 0;
                break;
            }
            if(nums[i]<0){
                neg++;
            }
        }
        if(neg%2==0){
            return 1;
        }
        else{
            return -1;
        }
    }
};
