function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }
}


function bubble2 (arr) {
  let lastWrapIndex;
  let j = arr.length - 1;
  let temp;
  while(j > 0) {
    lastWrapIndex = 0;
    for(let i = 0; i < j; i++) {
      if(arr[i] > arr[i+1]) {
        lastWrapIndex = i;
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
    j = lastWrapIndex; // 已经排好序的最后交换的下标
  }
  
  return arr;
}


function bubble3 (arr) {
  let low = 0;
  let height = arr.length - 1;
  let temp;
  while(low < height) {
    for(let i = low ; i < height; i++) { // 最大值冒泡
      if(arr[i] > arr[i+1]) {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
    height--; // 右边界--
    
    for(let i = height; i > low; i--) { // 最小值冒泡
      if(arr[i] < arr[i-1]) {
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
    low++; //左边界++
  }
  
  return arr;
}
var arr = [5,6,7,3,4,9,8,3];

bubble(arr);
// bubble2(arr);
// bubble3(arr);

console.log(arr);

// 冒泡的优化

