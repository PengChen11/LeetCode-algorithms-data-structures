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
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let prevNode = null;
  let output = head.next;
  let counter = 1;
  let current = head;
  while(current && current.next){
    if (counter%2===1){
      current = swapTwo(current, current.next);
    } else {
      prevNode = current;
      current = current.next;
    }
    counter++;
  }
  return output;

  function swapTwo(node1, node2){
    if (prevNode) prevNode.next = node2;

    let temp = node2.next;
    node2.next = node1;
    node1.next = temp;

    return node1;
  }
};

module.exports = swapPairs;
