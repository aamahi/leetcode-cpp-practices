class Solution {
public:
    TreeNode* buildTree(vector<int> &v, int start, int end)
    {
        if(start > end)
        {
            return NULL;
        }
        int mid= (start+end)/2;
        TreeNode* root= new TreeNode(v[mid]);
        root->left= buildTree(v, start, mid-1);
        root->right= buildTree(v, mid+1, end);
        return root;
    }
    TreeNode* sortedArrayToBST(vector<int>& nums)
    {
        return buildTree(nums, 0, nums.size()-1);
    }
};
