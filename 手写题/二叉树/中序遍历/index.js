// 递归
function inOrder (root){
  const res = [];

  function dfs(node) {
    if(!node) return;
    node.left && dfs(node.left);
    res.push(node.val);
    node.right && dfs(node.right);
  }

  return res;
}

// 栈的方式

function inOrderStack(root) {
  const res = [];
  const stack = [];

  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }

    const node = stack.pop();
    res.push(node.val);
    root = node.right;
  }

  return res;
}