function judge(str){
  let i = 0;
  let j = 4;

  while(j <= str.length) {
    
    let s = str.slice(i,j);

    // 判断是否相等
    if(new Set(s).size === 1) return true;

    // 判断是否递增
    let count = 0;
    for(let n = 0; n < s.length - 1; n++) {
      if(s[n+1] - s[n] === 1) {
        count++;
      }
    }
    if(count === 3) return true;
    i++;
    j++;
  }
  return false;
}

console.log(judge('15622228765'));
console.log(judge('15612348765'));
console.log(judge('15619348765'));