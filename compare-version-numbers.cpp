class Solution {
public:
    void stackV(stack<char>&s,string&v1){
        int n=v1.size();
        s.push('.');
        for(int i=n-1;i>=0;i--){
            if(v1[i]=='.'){
                while(s.top()!='.'&&s.top()=='0'){
                    s.pop();
                }
            }
            
            s.push(v1[i]);
        }
        while(s.top()!='.'&&s.top()=='0'){
                    s.pop();
                }
    }
    void print(stack<char>s){
        while(s.size()){
            cout<<s.top()<<" ";
            s.pop();
        }
        cout<<endl;
    }
    int compareVersion(string v1, string v2) {
        stack<char>s1,s2;
        stackV(s1,v1);
        stackV(s2,v2);
        print(s1);
        print(s2);
        while(s1.size()>1&&s2.size()>1){
            int val1=0,val2=0;
            while(s1.top()!='.'){
                val1=val1*10+(s1.top()-'0');
                s1.pop();
            }
            while(s2.top()!='.'){
                val2=val2*10+(s2.top()-'0');
                s2.pop();
            }
            if(val1>val2){
                return 1;
            }
            else if(val1<val2){
                return -1;
            }
            else{
                s1.pop();
                s2.pop();
            }
        }
        while(s1.size()>1){
            if(s1.top()!='.'){
                return 1;
            }
            s1.pop();
        }
        while(s2.size()>1){
            if(s2.top()!='.'){
                return -1;
            }
            s2.pop();
        }
        return 0;
    }
};
