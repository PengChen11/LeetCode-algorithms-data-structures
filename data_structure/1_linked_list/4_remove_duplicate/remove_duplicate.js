'use strict';
const {Node} = require('../linked_list_creator');

function deleteDuplicates(head){
  let dummy = new Node('dummyHead');
  let tail = dummy;
  let current = head;
  while (current){
    if (current.val !== tail.val){
      tail.next = current;
      tail = current;
    }
    current = current.next;
  }
  tail.next = null;
  return dummy.next;
}

function deleteDuplicates_recursive(head){
  //First, we need to determine the exit condition, which is when we reach the last node in the linked list, we will exit the recursion.
  if (!head || !head.next) return head;

  //The next node of the given node (node passed as args), is determined by calling this function again while passing the given node's next node as a parameter.
  head.next = deleteDuplicates_recursive(head.next);

  /**
  * at the end of each function, we return one thing, based on an if condition:
  * 1. if the given node's value is the same as it's next node, then return the next node. ( notice here, the given's node's next node is already modified by step 2.)
  * 2. If not the same, then return the given node.
  */
  return head.val === head.next.val ? head.next : head;
}
module.exports = {deleteDuplicates, deleteDuplicates_recursive};
