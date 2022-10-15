class Solution {
public:
    int dp[110][110],len[110];
    int deletedElement;
    string finalString;
    int call(int n,int k){
        if (n <= 0) 
            return 0;
        if (n <= k) 
            return 0;
        if (dp[n][k] != -1) 
            return dp[n][k];
        int res = 1000000000;
        for(char ch=0;ch<=25;ch++) {
            int remainK = k, num = 0;
            for(int j=n;j>=1;j--) {
                if (finalString[j] - 'a' == ch) {
                    num++;
                    res = min(res, call(j-1, remainK) + len[num]);
                } else {
                    remainK--;
                    if (remainK < 0) 
                        break;
                    res = min(res, call(j-1, remainK) + len[num]);
                }
            }
        }
        return dp[n][k] = res;
    }
    int getLengthOfOptimalCompression(string s, int k) {
        len[0] = 0;
        for(int i=1;i<=100;i++) {
            if (i == 1) 
                len[i] = 1;
            else if (i < 10) 
                len[i] = 2;
            else if (i < 100) 
                len[i] = 3;
            else 
                len[i] = 4;
        }
        finalString=" "+s;
        deletedElement=k;
        int n = s.size();
        memset(dp,-1,sizeof(dp));
        return call(n,k);
    }
};
