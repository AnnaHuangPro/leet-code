function reverseLink(l){

  let pre = null;
  let cur = l;

  while(cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
}