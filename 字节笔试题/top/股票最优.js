// 输入：[7,1,5,3,6,4]
// 输出: 5

function maxProfit(arr) {
  let max = 0;
  let min = arr[0];

  for(let i = 1; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(max, arr[i] - min);
  }

  return max;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([2,4,1]));
console.log(maxProfit([2,1,2,0,1]));