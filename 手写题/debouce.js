function debounce (fn, wait,isNow) {

  let timer = null;

  return function (...args) {
    if(isNow) {
      fn.apply(this, args);
      isNow = false;
      return;
    }
    
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    // window.requestAnimationFrame(()=>{
    //   fn.apply(this, args);
    //   clearTimeout(timer);
    //   timer = null;
    // })
    timer = setTimeout(()=>{
      fn.apply(this, args);
      clearTimeout(timer);
      timer = null;
    }, wait)
  }
}