def reverseLL(head):
    if not head or not head.next:
        return head

    node1 = None;
    node2 = head;

    while node2:
        if not node2.next:
            node2.next = node1
            head = node2
            break

        realNext = node2.next
        node2.next = node1
        node1 = node2
        node2 = realNext

    return head
