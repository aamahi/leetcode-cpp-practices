class Solution {
public:
    int hammingWeight(uint32_t n) {
        int one = 0;
        while(n>0){
            one++;
            n=n & (n-1);
        }
        return one;
    }
};
