// 分而治之,由基准值 一分为二

function quickSort(arr) {
  if(arr.length < 2) return arr;

  let left = [];
  let right = [];
  let baseNum = arr[0]; // 选取基准值

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < baseNum) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  return left.concat([baseNum], right);
}

//
var arr = [5,6,7,3,4,9,10];

console.log(quickSort(arr));