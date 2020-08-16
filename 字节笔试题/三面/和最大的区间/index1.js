// 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
// X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
// 现在需要你找出数列a的所有区间中, X值最大的那个区间;
// 如数列a为: [3 1 6 4 5 2];
// 则X值最大的区间为6, 4, 5,
// X = 4 * (6+4+5) = 60;

// 
function sum(arr) {
  let minItem = arr[0], i = 0, j = 1, x, sum = arr[0];
  let max = arr[0] * arr[0];
  while(j < arr.length) {
    sum += arr[j];
    
    
  }

  return max;
}

console.log(sum([3, 1, 6, 4, 1, 2]));
