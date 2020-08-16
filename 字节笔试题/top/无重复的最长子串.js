// input: abcabcbb out: abc 3
function noRepeatStr(str) {
  // 没考虑边界情况
  let i = 0, j = 1, s, res = 0;
  while(j < str.length) {
    s = str.slice(i, j);

    if(s.length > res) res = s.length;

    let index = s.indexOf(str[j]);
    if(index !== -1) {
      i = i + index + 1; // 踩坑n次了！！！！
    }
    j++;
    
  }
  return res;
}

// console.log(noRepeatStr('abcabcbb'));


function lengthOfLongestSubstring (s){
  let i = 0, j = 0, max = 0, str = '', index = 0;

  while(j < s.length) {
    str = s.slice(i, j+1);

    max = Math.max(max, str.length);

    index = str.indexOf(s[j+1]);

    if(index !== -1) {
      i = i + index + 1;
    }

    j++;
  }

  return max;
}

console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('abcabcd'));