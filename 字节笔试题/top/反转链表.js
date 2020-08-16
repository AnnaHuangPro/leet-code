function revertLink(l){
  let pre = null, cur = l, temp;
  while(cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}