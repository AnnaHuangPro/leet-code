// 标记法
function getIntersectionNode (headA, headB){
  while(headA) {
    headA.flag = true
    headA = headA.next;
  }

  while(headB){
    if(headB.flag) return headB;
    headB = headB.next;
  }

  return null;
}

// 双指针方法

function getIntersectionNode(headA, headB) {
  let pA = headA, pB = headB;
  while(pA || pB) {
    if(pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}