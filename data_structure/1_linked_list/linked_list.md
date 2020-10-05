# Linked List

Linked List is one of the basic data structure. You can find more linked list code challegne from my Code fellows repo. [Click here](https://github.com/PengChen11/data-structures-and-algorithms)

## Resolved

1. [Challenge 1, Intersection of Two Linked Lists (easy)](#challenge-1)

2. [Challenge 2, Reverse Linked List (Easy)](#challenge-2)

## Today's challenge

3. [Challege 3, Merge Two Sorted Lists (Easy)](#challenge-3)

___

<br/>
<br/>

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

> [Click here to see JS tester](1_find_intersection/find_intersection.test.js)

<br/>

<details>
  <summary>Click here to see a solution using two pointers we've covered before.</summary>
  <br/>
   let's take the 1st example from the description:

   1. listA is a1,a2,c1,c2,c3, listB is b1,b2,b3,c1,c2,c3
   2. One thing for sure is, listA + listB will have equal length to listB + listA.
   3. Now let's take a look of these:
       - a1,a2,c1,c2,c3,b1,b2,b3,c1,c2,c3  listA + listB
       - b1,b2,b3,c1,c2,c3,a1,a2,c1,c2,c3  listB + listA
   4. now you can see the 3rd node from the rear, c1 is the common node, right?
   5. so we just need to init two pointers, tranverses from each combained linked list, if at any time we two pointers are refering to the same node, then it is the node we're looking for.

  <br/>
</details>

<br/>

> [Click here to see the code in JS](1_find_intersection/find_intersection.js)

> [Click here to see the code in Python](1_find_intersection/find_intersection.py)

___

<br/>
<br/>

## Challenge 2

[LeetCode challenge 206. Reverse Linked List (Easy)](https://leetcode.com/problems/reverse-linked-list/description/)

Reverse a singly linked list.

**Example:**

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

**Hint:**

An iteratively way uses while loop, while recursive method uses a recursive function.

> [Click here to see JS tester](2_reverse_linked_list/reverse_linked_list.test.js)

<br/>

<details>
  <summary>Click here to see a solution using iterative solution.</summary>
  <br/>
      We will use 2 pointers technique we've covered before to solve this problem.

      1. select a starting node and it's next node
      2. come up with a method to switch it's (next) relation. Or we call "reverse" the "next" arrow.
      3. keep tracking the original next Node during step 2, then once step 2 is finished, move on in the original order.
      4. in the end, re-assign (head) to the last node and reverse its next link, then return this new (head)

  <br/>

      Hint:

      1. When switching the head Node, we will start with Null and the head. Re-link the head to Null.
      2. While loop can be easily converted to recursion method.

</details>

<br/>

> [Click here to see the code in JS](2_reverse_linked_list/reverse_linked_list.js)

> [Click here to see the code in Python](2_reverse_linked_list/reverse_linked_list.py)

___

<br/>
<br/>

## Challenge 3

[LeetCode challenge 21, Merge Two Sorted Lists (Easy)](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example 1:

![img](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: l1 = [1,2,4], l2 = [1,3,4]

Output: [1,1,2,3,4,4]
```

Example 2:

```
Input: l1 = [], l2 = []
Output: []
```

Example 3:

```
Input: l1 = [], l2 = [0]
Output: [0]
```
