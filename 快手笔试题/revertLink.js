function revertLink(head){
  let pre = null, cur = head, temp;

  while(cur) {
    temp = cur.next;
    cur.next =  pre;
    pre = cur;
    cur = temp;
  }

  return pre;
}