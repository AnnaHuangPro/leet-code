function myNew (Fun, ...args) {
  if(typeof Fun !== 'function') {
    return;
  }

  const obj = Object.create(Fun.prototype);

  const result = Fun.apply(obj, args);
  
  return result instanceof Object ? result : obj;
}