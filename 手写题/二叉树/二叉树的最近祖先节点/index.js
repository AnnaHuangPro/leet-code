function latestCommonAncestor(root, q, p){
  if(!root || root === q || root === p) {
    return root;
  }

  const left = latestCommonAncestor(root.left, q, p);
  const right = latestCommonAncestor(root.right, q, p);

  if(left && right) return root;

  return left ? left : right;
}