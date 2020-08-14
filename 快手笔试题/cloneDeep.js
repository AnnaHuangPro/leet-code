function getType(target) {
  let type = Object.prototype.toString.call(target);
  type = type.slice(8, -1);
  return type;
}

const iterator = ["Object", "Set", "Map", "Array"];

function cloneReg(target) {}
function cloneDeep(target, map = new Map()) {
  if (typeof target !== "object") {
    return target;
  }

  if (map.get(target)) {
    return map.get(target);
  }

  let type = getType(target);
  let cloneTarget;

  map.set(target, cloneTarget);

  const Ctor = target.constructor;
  if (iterator.includes(type)) {
    cloneTarget = new Ctor();
  } else {
    switch (type) {
      case "Date":
      case "String":
      case "Number":
      case "Error":
      case "Boolean":
        return new Ctor(target);
      case "RegExp":
        return cloneReg(target);
    }
  }

  if (type === "Set") {
    target.forEach((item) => {
      cloneTarget.add(cloneDeep(item, map));
    });
    return cloneTarget;
  }

  if (type === "Map") {
    target.forEach((value, key) => {
      cloneTarget.set(key, cloneDeep(value, map));
    });
    return cloneTarget;
  }

  const keys = type === "Array" ? undefined : Object.keys(target);

  (keys || target).forEach((item, index) => {
    if (!keys) {
      cloneTarget[index] = cloneDeep(item, map);
      return;
    }
    cloneTarget[item] = cloneDeep(target[item], map);
  });

  return cloneTarget;
}

var obj = {
  a: new Set(),
  b: new Map([[1, 2]]),
  c: [1, 2, 3],
  d: { a: "xxx", b: "bbbb" },
};

console.log(cloneDeep(obj));
