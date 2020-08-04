// 归并排序的思想也是二分,分而治之

function mergeSort(arr){
  if(arr.length === 1) {
    return arr[0];
  }
  
  let mid = Math.floor(arr.length/2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);

  let i = 0, j = 0, m = 0;
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      arr[m] = left[i];
      i++;
    } else {
      arr[m] = right[j];
      j++;
    }
    m++;
  }

  while(i < left.length) {
    arr[m] = left[i++];
    m++;
  }

  while(j < right.length) {
    arr[m] = right[j++];
    m++;
  }
}

var arr = [5,6,7,3,4,9,10];

mergeSort(arr);

console.log(arr);
