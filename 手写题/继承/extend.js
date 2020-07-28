function People(name) {
  this.name = name || "parent";
  this.age = 99;
}

People.prototype.eat = function () {
  console.log("恰饭饭");
};

// 实现一个 women 继承 People
function Women() {}

// Women.prototype = People.prototype;
// Women.prototype = Object.create(People.prototype);

//1. 原型链继承: 父类的实例作为子类的原型
// 优点: 简单,可继承实例属性和方法和原型
// 缺点: 无法实现多继承,无法向父类构造函数传参数
Women.prototype = new People();
Women.prototype.name = "hyy";
People.prototype.type = "人";
let womenObj = new Women();
console.log("person", People.prototype);
console.log("women", Women.prototype, Women.prototype.__proto__);

// 2. 借用构造函数继承(伪造对象 经典继承)
// 优点: 可实现多继承; 可向构造函数中传递参数
// 缺点: 方法都在构造函数中定义,无法复用; 不能继承原型对象/方法,只能继承父类实例的属性和方法
function Women(name) {
  People.call(this, name);
  this.name = name;
}

// 3.组合式继承
// 缺点: 调用了两次父构造函数
function Women(name) {
  People.call(this, name);
  this.name = name;
}
Women.prototype = new People();
Woman.prototype.constructor = Woman;

// 4.寄生组合继承 (完美的继承)
function Women(name) {
  People.call(this, name);
  this.name = name;
}
(function () {
  function Super() {}
  Super.prototype = People.prototype;
  Women.prototype = new Super();
})();
// 修复构造函数指向问题
Woman.prototype.constructor = Woman;

// ES6继承 清晰易懂
class People {
  constructor(name = "mary", age = "22") {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("恰饭饭");
  }
}

class Women extends People {
  constructor(name = "hyy", age = "24") {
    super(name, age);
  }
  eat() {
    super.eat();
  }
}

// class编译之后的结果 loose版本
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var People = /*#__PURE__*/ (function () {
  "use strict";

  function People(name, age) {
    if (name === void 0) {
      name = "mary";
    }

    if (age === void 0) {
      age = "22";
    }

    this.name = name;
    this.age = age;
  }

  var _proto = People.prototype;

  _proto.eat = function eat() {
    console.log("恰饭饭");
  };

  return People;
})();

var Women = /*#__PURE__*/ (function (_People) {
  "use strict";

  _inheritsLoose(Women, _People);

  function Women(name, age) {
    if (name === void 0) {
      name = "hyy";
    }

    if (age === void 0) {
      age = "24";
    }

    return _People.call(this, name, age) || this;
  }

  var _proto2 = Women.prototype;

  _proto2.eat = function eat() {
    _People.prototype.eat.call(this);
  };

  return Women;
})(People);
