// 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
// X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
// 现在需要你找出数列a的所有区间中, X值最大的那个区间;
// 如数列a为: [3 1 6 4 5 2];
// 则X值最大的区间为6, 4, 5,
// X = 4 * (6+4+5) = 60;
function sum(arr) {
  let i = 0;
  j = 1;
  let sum = arr[0];
  let min = arr[0];
  let maxX = min * sum;
  let s = arr.slice(i, j);

  while (j < arr.length) {
    // 计算和
    sum = sum + arr[j];
    // 判断最小值
    if (arr[j] < min) {
      min = arr[j];
    }
    // 计算乘积
    let res = min * sum;
    
    if (res > maxX) {
      maxX = res;
      s = arr.slice(i, j+1);
      j++;
    } else { // 遇到了最小值 小指针与大指针指向最小值右边元素
      i = i + j + 1;
      j = i;
      sum = 0;
      min = arr[i];
    }
  }
  return { maxX, s };
}

console.log(sum([3, 1, 6, 4, 1, 2]));
