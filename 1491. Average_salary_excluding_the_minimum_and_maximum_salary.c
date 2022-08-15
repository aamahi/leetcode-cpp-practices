class Solution {
public:
    double average(vector<int>& salary) {
        double avg = 0.0;
        int minNum =  salary[0];
        int maxNum = salary[0];
        
        for(int &s: salary) {
            minNum = min(minNum, s);
            maxNum = max(maxNum, s);
        }
        
        for(int &s: salary) {
            if(s == minNum or s == maxNum) continue;
            else avg += s;
        }
        
        if(salary.size() <= 3) return avg;
        
        cout << avg << " ";
        
        return avg/(salary.size()-2);
        
    }
};
