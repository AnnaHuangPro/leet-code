// 典型的 fibolacci 数列 时间复杂度为 2的n次方
function fib (n) {
  if(n === 1) return 1;
  if(n === 2) return 1;

  return fib(n-1) + fib(n-2);
}

// 时间复杂度 O(n) 空间复杂度O(1)
function fib2(n) {
  let pre = 1, cur = 1;

  for(let i = 3; i <= n; i++) {
    [pre, cur] = [cur, pre+cur];
  }

  return cur;
}

// 动态规划
function fib3(n){
  const dp = [];
  dp[0] = 1;
  dp[1] = 1; 
  for(let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n-1];
}