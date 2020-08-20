function isSymmetric(root){
  if(!root) return true;
  function isEqual(l, r) {
    if(!l && !r) return true;
    if(!l || !r) return false;
    if(l.val !== r.val) return false;
    return isEqual(l.left, r.right) && isEqual(l.right, r.left);
  }
  return isEqual(root.left, root.right);
}