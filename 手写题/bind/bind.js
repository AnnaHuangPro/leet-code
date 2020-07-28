Function.prototype.myBind = function (context, ...args) {
  context = context ? context : window;
  let fn = this;

  // var fnP = function () {} // 定义一个空函数 中间来代理一次原型, 防止原型影响

  function Fun(...res) {
    // new 优先级高于 bind
    const result = fn.apply(
      this instanceof Fun ? this : context,
      args.concat(res)
    );
    return result;
  }

  // 维护原型关系 new时
  // if (this.prototype) {
  //   fnP.prototype = this.prototype;
  // }

  // Fun.prototype = new fnP(); // {}

  // 有问题
  // Fun.prototype = this.prototype;
  return Fun;
};

const obj = {};

function fun (value) {
  this.name = value;
}

// const f1 = fun.bind(obj);
const f2 = fun.myBind(obj);

// f1('我是原生');
f2('我是自制');
// const newObj = new f1('新对象');
const newObj2 = new f2('自制新对象');
console.log(newObj2);
// console.log(newObj);
console.log(obj);
