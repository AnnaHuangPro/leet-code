// 使用了冒泡排序 时间复杂度 O(k*n)
function arrTopK(arr, k) {
  let times = k;
  while(times > 0) {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    times--;
  }

  return arr[arr.length - k];
}

console.log(arrTopK([12,3,43,22,4], 2));