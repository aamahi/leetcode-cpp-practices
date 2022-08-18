class Solution {
public:
    int firstUniqChar(string s) {
        int n=s.size();
        vector<int> alpha(26,n);
        for(int i=0;i<s.size();i++){
            if(alpha[s[i]-'a']!=n){
                alpha[s[i]-'a']=n+1;
            }
            else{
                alpha[s[i]-'a']=i;
            }
        }
        for(int i=0;i<26;i++){
            n=min(n,alpha[i]);
        }
        return n==s.size()?-1:n;
    }
};
