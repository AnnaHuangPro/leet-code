function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

var arr = [5,6,7,3,4,9,10];

bubble(arr);

console.log(arr);

// 冒泡的优化

