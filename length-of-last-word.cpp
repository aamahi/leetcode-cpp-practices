class Solution {
public:
    int lengthOfLastWord(string s) {
        int i=s.length()-1;
        
        while(i>=0 && s[i]==' ')i--;
        
        int count=0;
        if(i<0)return 0;
        
        while(i>=0 && s[i]!=' '){
            i--;
            count++;
        }
        
        return count;
    }
};
