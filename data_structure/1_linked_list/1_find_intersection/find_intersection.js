'use strict';

function find_intersection (headA, headB){

  let l1 = headA, l2 = headB;

  while(l1 !== l2){
    l1 = (l1 === null) ? headB:l1.next;
    l2 = (l2 === null) ? headA:l2.next;
  }


  return l1;
}

module.exports=find_intersection;
