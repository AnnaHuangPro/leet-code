// 精髓： 找到递归的临界条件
// 1. 公共祖先节点首先肯定是 树的根结点
// 2. p q可以作为根结点或者树中的子节点

function lowestCommonAncestor(root, p, q){
  if(!root || root === q || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if(left && right) return root;

  return left ? left : right;
}