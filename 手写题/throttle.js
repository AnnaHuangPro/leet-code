// 时间控制
function throttle (fn, wait) {
  let pre = 0;
  return function (...args) {
    let now = Date.now();
    if(now - pre > wait) {
      fn.apply(this, args);
      pre = now;
    }
  }
}

// 标识符控制
function throttle(fn, wait) {
  let canExecute = true;
  return function (...args) {
    if(canExecute) {
      fn.apply(this, args);
      canExecute = false;
      
      setTimeout(()=>{
        canExecute = true;
      },wait)
    }
  }
}
