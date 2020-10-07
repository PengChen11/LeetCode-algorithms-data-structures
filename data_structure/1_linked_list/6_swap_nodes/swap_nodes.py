# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:

        if not head or not head.next:
            return head

        prevNode = None

        def swapTwo(node1, node2):
            nonlocal prevNode
            if prevNode:
                prevNode.next = node2
            temp = node2.next
            node2.next = node1
            node1.next = temp
            return node1

        counter = 1

        current = head
        output = head.next

        while current and current.next:
            if counter%2 == 1:
                newCurrent = swapTwo(current,current.next)
                current = newCurrent
            else:
                prevNode = current
                current = current.next
            counter = counter + 1

        return output
