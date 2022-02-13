class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode*> stk;
        TreeNode* cur = root;
        while(cur || !stk.empty()){
            //if cur is nullptr, it's ok, because it will later be stk.top()
            while(cur){
                stk.push(cur);
                cur = cur->left;
            }
            cur = stk.top(); stk.pop();
            ans.push_back(cur->val);
            //it's fine if cur->right is nullptr
            cur = cur->right;
        }
        
        return ans;
    }
};