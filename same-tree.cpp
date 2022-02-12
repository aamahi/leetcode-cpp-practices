class Solution {
public:
    bool isSameTree(TreeNode *p, TreeNode *q) {
        // Start typing your C/C++ solution below
        // DO NOT write int main() function
        if (p == NULL && q == NULL) return true;
        if (p == NULL || q == NULL) return false;
        return (p->val == q->val) && 
            isSameTree(p->left, q->left) && 
            isSameTree(p->right, q->right);
    }
};
