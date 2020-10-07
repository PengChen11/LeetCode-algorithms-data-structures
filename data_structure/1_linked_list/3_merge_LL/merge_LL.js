'use strict';
//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {

  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }

}


// when not using recursion

function mergeTwoLists_2(l1, l2){

  let dummyNode = new ListNode(0);

  let tail = dummyNode;

  while (l1 || l2){
    if (!l1) {
      tail.next = l2;
      break;
    }
    if (!l2) {
      tail.next = l1;
      break;
    }

    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  return dummyNode.next;

}

module.exports = { mergeTwoLists, mergeTwoLists_2};

