class Set (){
  constructor(arr) {
    this.arr = [];
  }
  add(item) {
    if(this.arr.indexOf(item) === -1) {
      this.arr.push(item);
    }
  }
  delete (item){
    this.arr.splice(this.arr.indexOf(item), 1);
  }
  has(){
    return this.arr.indexOf(item) !== -1;
  }
  clear() {
    this.arr = [];
  }
  keys() {
    return this.values();
  }
  values(){
    return this.arr;
  }
  entries(){
    const res = [];
    const keys = this.keys();
    const values = this.values();
    for(let i = 0; i < this.arr.length; i++) {
      res.push([keys[i], values[i]]);
    }
    return res;
  }
  forEach(callback){
    for(let i = 0; i < this.arr.length; i++) {
      callback(this.arr[i], this.arr[i]);
    }
  }
}