// 最近最少使用 缓存机制
class LRUCache {

  constructor(capacity) {
    this.capacity = capacity;
    this.keys = [];
    this.cache = {};
  }
  
  put(key, value) {
    // 如果有相同的元素 则将元素放置在最后
    if(this.keys.indexOf(key) !== -1) {
      this.keys.splice(this.keys.indexOf(key), 1);
    }
    this.keys.push(key);
    
    let size = this.keys.length;
    if(size > this.capacity) {
      let item = this.keys.shift();
      delete this.cache[item];
    }
    this.cache[key] = value;
  }

  get(key) {
    let value = this.cache[key];
    if(value !== undefined) {
      this.keys.splice(this.keys.indexOf(key), 1);
      this.keys.push(key);
      return this.cache[key];
    }
    return -1;
  }
}

const cache = new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(2));
cache.put(4,4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));

console.log(cache.cache, cache.keys);