// 给的数组没有重复的
// return [[],[]]
var t = [1,2,3,4,-3,-1];

// 难度升级 数组中存在重复的情况
var t2 = [1,3,1,2,3,4,-3,-1];

function sum0 (arr) {
  const result = [];
  const map = new Map();

  for(let i = 0; i < arr.length; i++) {
    if(map.has(0-arr[i])) {
      result.push([arr[i], 0-arr[i]]);
    } else {
      map.set(arr[i], i);
    }
    console.log("map", map)
  }
  console.log(result);
  return result;
}

// sum0(t2);

// 难度升级  找到三个和为0的数组
let t3 = [-1, 0, 1, 2, -1, -4]
function sum1 (arr, n) {
  const result = [];
  let map = new Map();
  for(let i = 0; i < arr.length-2; i++) {
    for(let j = i+1; j < arr.length-1; j++) {
      // 有合适的两人组
      console.log("map", map)
      if(map.get(arr[j])) {
        result.push(map.get(arr[j]).concat([arr[j]]));
        console.log("arr[j]", arr[j])
        map.set(arr[j], null);
      } else {
        let temp = 0 - arr[j] - arr[i];
        map.set(temp, [arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
  return result;
}

// sum1(t3);

// 三数之和的精髓,先排序 再来双指针步步紧逼
// 注意 00000 的情况
function sum2(arr) {
  arr = arr.sort((a,b) => a-b);
  if(arr[0] > 0) return [];

  const result = [];
  
  for(let i = 0; i < arr.length;) {
    let l = i + 1, r = arr.length - 1;

    while(l < r) {
      let sum = arr[i] + arr[l] + arr[r];

      if(sum === 0) {
        result.push([arr[i], arr[l], arr[r]]);
      }

      if(sum <= 0) {
        while(arr[l] === arr[++l]){}
      } else {
        while(arr[r] === arr[--r]){}; 
      }

    }
    while(arr[i] === arr[++i]){}
  }
  console.log(result);
  return result;
}

sum2(t3)