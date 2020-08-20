function mergeArr (arr1, arr2){
  let i = arr1.length - 1, j = arr2.length - 1;
  while(j >= 0) {
      if(arr2[j] >= arr1[i]) {
          arr1[i+j+1] = arr2[j];
          j--;
      } else {
          arr1[i+j+1] = arr1[i];
          i--;
      }
  }
  return arr1;
}

console.log(mergeArr([1,2,3], [1,3,4]));