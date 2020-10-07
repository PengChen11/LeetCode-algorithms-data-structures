# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        dummy = ListNode('dummyHead')
        tail = dummy
        current = head
        while current:
            if current.val != tail.val:
                tail.next = current
                tail = current

            current = current.next
        tail.next = None

        return dummy.next
