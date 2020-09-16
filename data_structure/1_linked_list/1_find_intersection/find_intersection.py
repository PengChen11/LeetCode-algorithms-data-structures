def getIntersectionNode( headA,headB):
    l1 = headA
    l2 = headB
    while l1 != l2:
        if not l1: l1 = headB
        else: l1 = l1.next

        if not l2: l2 = headA
        else: l2 = l2.next

    return l1

