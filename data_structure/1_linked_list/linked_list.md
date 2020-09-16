# Linked List

Linked List is one of the basic data structure. You can find more linked list code challegne from my Code fellows repo. [Click here](https://github.com/PengChen11/data-structures-and-algorithms)

## Resolved

1. [Challenge 1, Intersection of Two Linked Lists (easy)](#challenge-1)

## Today's challenge**

1. [Challenge 2, Reverse Linked List (Easy)](#challenge-2)

___

## Challenge 1

[LeetCode challenge 160, Intersection of Two Linked Lists (easy)](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

The instruction is a lot, please refre to the above link.

hint:

1. We're comparing two node, not the value of two node. two node with the same value is considered two different node obj.
2. The return is the reference to the Node, not the value.

Notes:

1. If the two linked lists have no intersection at all, return null.
2. The linked lists must retain their original structure after the function returns.
3. You may assume there are no cycles anywhere in the entire linked structure.
4. Each value on each linked list is in the range [1, 10^9].
5. Your code should preferably run in O(n) time and use only O(1) memory.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](1_find_intersection/find_intersection.test.js)

___

<details>
  <summary>Click here to see a solution using two pointers we've covered before.</summary>

let's take the 1st example from the description:

1. listA is a1,a2,c1,c2,c3, listB is b1,b2,b3,c1,c2,c3
2. One thing for sure is, listA + listB will have equal length to listB + listA.
3. Now let's take a look of these:
    - a1,a2,c1,c2,c3,b1,b2,b3,c1,c2,c3  listA + listB
    - b1,b2,b3,c1,c2,c3,a1,a2,c1,c2,c3  listB + listA
4. now you can see the 3rd node from the rear, c1 is the common node, right?
5. so we just need to init two pointers, tranverses from each combained linked list, if at any time we two pointers are refering to the same node, then it is the node we're looking for.

</details>

___

[Click here to see the code in JS](1_find_intersection/find_intersection.js)

[Click here to see the code in Python](1_find_intersection/find_intersection.py)

___

## Challenge 2

[LeetCode challenge 206. Reverse Linked List (Easy)](https://leetcode.com/problems/reverse-linked-list/description/)

Reverse a singly linked list.

**Example:**

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

