class Solution {
public:
    string commonPrefix(string left, string right){
        int _min = min(left.size(), right.size());
        for(int i = 0; i < _min; i++){
            if(left[i] != right[i]){
                //i is the length of the resulting substring
                return left.substr(0, i);
            }
        }
        return left.substr(0, _min);
    }
    string longestCommonPrefix(vector<string>& strs, int l, int r){
        if(l == r) return strs[l];
        int mid = (l+r)/2;
        string lcpL = longestCommonPrefix(strs, l, mid);
        string lcpR = longestCommonPrefix(strs, mid+1, r);
        return commonPrefix(lcpL, lcpR);
    }
    string longestCommonPrefix(vector<string>& strs) {
        if(strs.size() == 0) return "";
        return longestCommonPrefix(strs, 0, strs.size()-1);
    }
};
