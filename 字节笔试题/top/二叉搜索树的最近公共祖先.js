// 二叉搜索树
// 二叉搜索树的特点：
// 中序遍历是有序的，左子树的值小于根结点的值，右子树的值大于根结点的值。

function lowestCommonAncestor(root, p, q){
  if(p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if(p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
}