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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  function findNodeBeforeNth(head, n){
    let nodeIndexBeforeNth = n+1;
    let current = head;
    let nodeBeforeNth = head;
    for (let i=0; i<nodeIndexBeforeNth; i++){
      if (!current) return null;
      current = current.next;
    }
    while (current){
      current = current.next;
      nodeBeforeNth = nodeBeforeNth.next;
    }
    return nodeBeforeNth;
  }

  function deleteNode (node1, node2){
    node1.next = node2.next;
  }

  let nodeBeforeNth = findNodeBeforeNth(head, n);
  if (!nodeBeforeNth) return head.next;
  else {
    deleteNode(nodeBeforeNth,nodeBeforeNth.next);
    return head;
  }
};


module.exports = removeNthFromEnd;
