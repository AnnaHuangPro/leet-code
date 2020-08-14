function findMax (arr, k) {
  let j = k;
  while(j) {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
    j--;
  }

  return arr[arr.length - k];
}

console.log(findMax([2,3,4,5,6], 2));