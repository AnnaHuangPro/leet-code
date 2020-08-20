function threeNum(arr){
  const result = [];

  arr.sort((a,b) => a-b);

  if(arr[0] > 0) return [];

  for(let i = 0; i < arr.length - 2; i++) {
    if(arr[i] > 0) break;

    if(arr[i] === arr[i-1]) continue;

    let l = i+1;
    let r = arr.length - 1;
    while(l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if(sum  === 0) {
        result.push([arr[i], arr[l], arr[r]]);
        while(arr[l] === arr[l+1]) l++;
        while(arr[r] === arr[r-1]) r--;
        l++;
        r--;
      } else if(sum > 0) {
        while(arr[r] === arr[r-1]) r--;
        r--;
      } else {
        while(arr[l] === arr[l+1]) l++;
        l++;
      }
    }
  }
  return result;
}

console.log(threeNum([-1,0,1,2,-1,-4]))