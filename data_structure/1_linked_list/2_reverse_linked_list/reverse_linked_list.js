'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLL(head) {
  if (!head || !head.next) return head;

  let node1 = null;
  let node2 = head;
  while (node2){
    if (!node2.next){
      node2.next = node1;
      head = node2;
      break;
    }
    let realNext = node2.next;
    node2.next = node1;
    node1 = node2;
    node2 = realNext;

  }
  return head;
}

function reverseLL_recursive(head) {
  if (!head || !head.next) return head;

  function reverse(node1,node2){
    if (!node2.next){
      node2.next = node1;
      head = node2;
      return;
    }
    let realNext = node2.next;
    node2.next = node1;
    reverse(node2, realNext);
  }
  reverse(null, head);
  return head;

}
module.exports = {reverseLL, reverseLL_recursive};
