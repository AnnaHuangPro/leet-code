function patchCookie(p,c){
  p = p.sort((a,b) => a-b);
  c = c.sort((a,b) => a-b);

  let count = 0;
  let j = 0;
  for(let i = 0; i < c.length; i++) {
    if(c[i] >= p[j]) {
      count++;
      j++;
    }
  }

  return count;
}