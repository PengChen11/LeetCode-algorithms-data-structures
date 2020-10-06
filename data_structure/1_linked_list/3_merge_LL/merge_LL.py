# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
#     def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
#         if not l1:
#             return l2
#         if not l2:
#             return l1

#         if l1.val < l2.val:
#             l1.next = self.mergeTwoLists(l1.next, l2)
#             return l1
#         else:
#             l2.next = self.mergeTwoLists(l1, l2.next)
#             return l2


    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        tail = dummy

        while True:
            if not l1:
                tail.next = l2;
                break;
            if not l2:
                tail.next = l1;
                break;

            if l1.val < l2.val:
                tail.next = l1;
                l1 = l1.next;
            else:
                tail.next = l2;
                l2 = l2.next;

            tail = tail.next

        return dummy.next
