// 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。
// 目标是尽量让更多的孩子满意。
// 如孩子的要求是 1, 3, 5, 4, 2，
// 饼干是1, 1, 最多能让1个孩子满足。 
// 如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能让2个孩子满足。

function patch(c, cookies) {
  c = c.sort((a,b) => a-b);
  cookies = cookies.sort((a,b) => a-b);
  let count = 0;
  let j = 0;
  for(let i = 0; i < cookies.length; i++) {
    if(cookies[i] >= c[j]) {
      j++;
      count++;
    }
  }
  
  return count;
}

console.log(patch([10, 9, 8, 7, 6], [7, 6, 5]));
console.log(patch([1, 3, 5, 4, 2], [1, 1]));