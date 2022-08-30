class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        stack<int>s;
        int size=0;
        s.push(nums[0]);
        for(int i=1;i<nums.size();i++){
            if(nums[i]==nums[i-1]){
                
            }else{
                s.push(nums[i]);
                size++;
            }
        }
        nums.erase(nums.begin(),nums.end());
        while(!s.empty()){
            nums.push_back(s.top());
            s.pop();
        }
        reverse(nums.begin(),nums.end());
        return size+1;
    }
};
