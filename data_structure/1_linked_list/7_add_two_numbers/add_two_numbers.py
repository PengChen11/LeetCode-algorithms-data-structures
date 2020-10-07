# Definition for singly-linked list.
class ListNode:
   def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

        def buildStack(node):
            # in Python, list could work as a Stack, casue is has great append and pop method
            stack = []
            while node:
                stack.append(node.val)
                node = node.next
            return stack

        l1Stack = buildStack(l1)
        l2Stack = buildStack(l2)

        dummyHead = ListNode('Dummy')
        carry = 0

        while len(l1Stack)!=0 or len(l2Stack)!=0 or carry !=0:
            if len(l1Stack) == 0:
                x = 0
            else:
                x = l1Stack.pop()

            if len(l2Stack) == 0:
                y = 0
            else:
                y = l2Stack.pop()

            sum = x + y + carry

            node = ListNode(sum%10)

            node.next = dummyHead.next
            dummyHead.next = node
            carry = sum//10

        return dummyHead.next




