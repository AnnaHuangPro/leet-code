function backOrder(root) {
  const result = [];
  function dfs(node){
    if(!node) return;

    node.left && dfs(node.left);
    node.right && dfs(node.right);
    result.push(node.val);
  }

  dfs(root);
  
  return result;
}

function backOrderStack(root) {
  const result = [];
  const stack = [];
  if(root) stack.push(root);
  while(stack.length) {
      let node = stack.pop();
      result.unshift(node.val);

      // 右先头插，左再头插，所以右最后入栈
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
  }
}