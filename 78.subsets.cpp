class Solution {
private:
    vector<vector<int>> powerset;
    vector<int> subset;
public:
    vector<vector<int>> subsets(vector<int>& nums) {        
        backtrack(nums, 0);
        return powerset;
    }

    void backtrack(vector<int>& nums, int start){
        if(start == nums.size()) powerset.push_back(subset);
        else{
            subset.push_back(nums[start]);
            backtrack(nums, start+1);

            subset.pop_back();
            backtrack(nums, start+1);
        }
    }
};