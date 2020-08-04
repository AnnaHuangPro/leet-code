// [-1,2,3,4,-8,5,6,-10,8,9,-1] 求加起来的合最大的子数组

function maxSum(arr) {
  let i = 1, max = 0, maxIndex = 0, count = 1,maxCount = 1;
  while(i < arr.length) {
    if(arr[i-1] > 0) {
      arr[i] += arr[i-1];
      count++;
    } else {
      count = 1;
    }
    if(arr[i] > max) {
      max = arr[i];
      maxIndex = i;
      maxCount = count;
    }
    i++;
  }

  return { max, maxIndex, maxCount};
}

console.log(maxSum([-1,2,3,4,-10,5,6,-11,8,9,-1]));
console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSum([-2,1]));