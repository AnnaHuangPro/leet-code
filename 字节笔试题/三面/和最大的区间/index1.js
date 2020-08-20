// 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
// X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
// 现在需要你找出数列a的所有区间中, X值最大的那个区间;
// 如数列a为: [3 1 6 4 5 2];
// 则X值最大的区间为6, 4, 5,
// X = 4 * (6+4+5) = 60;

// 
function sum(arr) {
  let min = arr[0], sum = arr[0], x = min * sum, max = x;
  let endStart = 0, end = 0, start = 0;
  for(let i = 1; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);
    x = sum * min;
    if(x > max) {
      max = x;
      end = i;
      endStart = start;
    } else {
      start = i;
      sum = 0;
      min = +Infinity;
    }
  }
  const area = arr.slice(endStart+1, end+1);
  return {max, area};
}

console.log(sum([3, 1, 6, 4, 5, 2]));
