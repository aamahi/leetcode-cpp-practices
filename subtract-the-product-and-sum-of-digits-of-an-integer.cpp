class Solution {
public:
    int subtractProductAndSum(int num) {
        int remainder, product = 1, sum = 0;
        while(num != 0) {
            remainder = num % 10;
            product *= remainder;
            sum += remainder;
            num /= 10;
        }
        return product - sum;
    }
};
