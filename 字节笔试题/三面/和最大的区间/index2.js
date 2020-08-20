// [-1,2,3,4,-8,5,6,-10,8,9,-1] 求加起来的合最大的子数组的值

function maxSum(arr) {
  const dp = arr.slice();
  let max = dp[0];
  let area, start, end;

  for(let i = 1; i < dp.length; i++) {
    if(dp[i-1] > 0) {
      dp[i] = dp[i-1] + dp[i];
    } else {
      start = i;
    }
    if(dp[i] > max) {
      max = dp[i];
      end = i;
      area = arr.slice(start, end+1);
    }
  }
  return {max, area};
}

console.log(maxSum([-1,2,3,4,-10,5,6,-11,8,9,-1]));
console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSum([-2,1]));