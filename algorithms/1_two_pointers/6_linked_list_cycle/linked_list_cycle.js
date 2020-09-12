/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;

  let pointer1 = head;
  let pointer2 = head.next;

  while (pointer1 && pointer2 && pointer2.next){
    if (pointer1.val === pointer2.val) return true;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }

  return false;
};

module.exports = hasCycle;
