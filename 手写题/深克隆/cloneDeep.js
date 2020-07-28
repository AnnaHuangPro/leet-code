const arrTag = '[object Array]';
const dateTag = '[object Date]';
const setTag = '[object Set]';
const mapTag = '[object Map]';

const getType = function(target) {
  return Object.prototype.toString.call(target);
}

const getInit = function(target){
  const Ctor = target.constructor;
  return new Ctor();
}


function cloneDeep(origin, map=new Map()){
  // 源数据是对象
  if(typeof origin !== 'object') {
    return origin
  } 

  if(map.get(origin)) {
    return map.get(origin);
  }

  // 获取对象类型
  const type = getType(origin);

  let target = getInit(origin);
  if(type === setTag) {
    origin.forEach(item => {
      target.add(cloneDeep(item, map));
    })
    return target;
  }

  if(type === mapTag) {
    origin.forEach((value, key) => {
      target.set(key, cloneDeep(value, map));
    })
    return target;
  }

  target = Array.isArray(origin) ? [] : {};

  map.set(origin, target);
  
  
  let keys = Array.isArray(origin) ? undefined : Object.keys(origin);

  (keys || origin).forEach((key,index) => {
    if(!keys) key = index;
    target[key] = cloneDeep(origin[key], map);
  });

  return target;
}

var arr = [1,[1243,23],3,4,5];
var obj = {'a':'123', 'b': arr, 'c': [2,3,4]};

var set = new Set(arr);
var map = new Map([['a', arr], ['b', obj], ['c', set]]);
console.log(cloneDeep(map));