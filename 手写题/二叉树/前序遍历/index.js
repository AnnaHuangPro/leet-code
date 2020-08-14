// 递归
function preOrder(root){

  const res = [];

  function dfs (node){
    if(!node) return;

    res.push(node.val);
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  }

  dfs(root);
  return res;
}

// 栈

function preOrderStack (root) {
  const res = [];
  const stack = [];

  while(stack.length || root) {

    while(root) {
      res.push(root.val);
      root = root.left;
      stack.push(root);
    }

    const node = stack.pop();
    root = node.right;
  }
  return res;
}