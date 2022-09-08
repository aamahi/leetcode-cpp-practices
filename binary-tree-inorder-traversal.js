/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const node = [];
    if(!root) return node;
    node.push(...inorderTraversal(root.left));
    node.push(root.val);
    node.push(...inorderTraversal(root.right));
    return node;
};
