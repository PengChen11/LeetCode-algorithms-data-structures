# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        def findNodeBeforeNth (head: ListNode, n: Int) -> ListNode:
            nodeIndexBeforeNth = n+1
            current = head
            nodeBeforeNth = head
            for i in range(0, nodeIndexBeforeNth):
                if not current:
                    return None
                current = current.next

            while current:
                current = current.next
                nodeBeforeNth = nodeBeforeNth.next

            return nodeBeforeNth

        def deleteNode (node1, node2):
            node1.next = node2.next

        nodeBeforeNth = findNodeBeforeNth(head, n)

        if not nodeBeforeNth:
            return head.next
        else:
            deleteNode(nodeBeforeNth, nodeBeforeNth.next)
            return head;
