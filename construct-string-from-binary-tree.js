var tree2str = function(root) {
    let result = '';
    const rootNode = root;
    preorder(root);
    function preorder(root) {
        if (root === null) return;
        if(root !== rootNode) 
            result += '(';  // to avoid () for root node
        result += root.val;
        if (!root.left && root.right) result += '()';
        preorder(root.left);
        preorder(root.right);
        if(root !==rootNode)  
            result += ')';
    }
    return result;
};
