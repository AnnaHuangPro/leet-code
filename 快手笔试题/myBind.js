Function.prototype.myBind = function (context, ...args){
  let fn = this;
  return function fun (...others) {
    const that =  this instanceof fun ? this : context;
    const res = fn.apply(that, args.concat(others));
    return res;
  }
}

function a () {
  console.log(this.name);
}

var name = '全局';

var obj = {
  name: 'hyy'
}

var newFun = a.myBind(obj);
new newFun();
// newFun();