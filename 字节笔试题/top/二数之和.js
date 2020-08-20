function twoNum (arr, target){
  const map = {};

  for(let i = 0; i < arr.length; i++) {
    const another = target - arr[i];
    if(map[another] !== undefined) {
      return [map[another], i];
    }

    map[arr[i]] = i;
  }

  return [];
}

console.log(twoNum([1,2,3,4], 7));