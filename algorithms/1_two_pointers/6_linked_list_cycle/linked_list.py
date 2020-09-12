
def hasCycle(head) -> bool:
    if not head:
        return False

    pointer1=head
    pointer2=head.next

    while pointer1 and pointer2 and pointer2.next:
        if pointer1.val == pointer2.val:
            return True
        pointer1 = pointer1.next
        pointer2 = pointer2.next.next

    return False
