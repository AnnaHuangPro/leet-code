Array.prototype.myReduce = function(callback, init){
  const arr = this;
  let res, index;
  if(init) {
    res = init;
    index = 0;
  } else {
    res = arr[0],
    index = 1;
  }
  for(let i = index; i < arr.length; i++) {
    res = callback(res, arr[i], i, arr.slice());
  }
  return res;
}

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer, 10));