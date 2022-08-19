class Solution {
public:
  bool isPossible(vector<int>& nums) {
      unordered_map<int, int> count;
      unordered_map<int, int> tails;
      for (auto item: nums) ++count[item];
      for (auto item: nums) {
          if (0 == count[item]) continue;
          --count[item];
          if (tails[item - 1] > 0) {
              --tails[item - 1];
              ++tails[item];
          } else if (count[item + 1] > 0 && count[item + 2] > 0) {
              --count[item + 1];
              --count[item + 2];
              ++tails[item + 2];
          } else {
              return false;
          }
      }
      
      return true;
  }
};
