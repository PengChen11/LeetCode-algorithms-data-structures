# Linked List

Linked List is one of the basic data structure. You can find more linked list code challegne from my Code fellows repo. [Click here](https://github.com/PengChen11/data-structures-and-algorithms)

## Resolved

[Challenge 1, Intersection of Two Linked Lists (easy)](#challenge-1)

[Challenge 2, Reverse Linked List (Easy)](#challenge-2)

[Challenge 3, Merge Two Sorted Lists (Easy)](#challenge-3)

[Challenge 4, Merge Two Sorted Lists (Easy)](#challenge-4)

[Challenge 5, Remove Nth Node From End of List (Medium)](#challenge-5)

[Challenge 6, Swap Nodes in Pairs (Medium)](#challenge-6)

## Today's challenge

[Challenge 7, Add Two Numbers II (Medium)](#challenge-7)

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

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

**Try:**
Can we use recursion to shorten our code?

> [Click here to see JS tester](3_merge_LL/merge_LL.test.js)

<br/>

<details>
  <summary>Click here to see a solution using both recursive and iterative solution.</summary>
  <br/>

      The recursive solution will be really easy to understand:

      1. The function will take two nodes as args
      2. if any one of those two nodes becomes null, then return the other one. eg. node1 is null, return node2, vice versa.
      3. if node1 value is smaller than node2, then node1.next will be calling the function again, with two new args, node1.next and node2.
      4. return node1 if step 3 happened. we will always return the smaller node.
      5. if node2 value is smaller than node1, then node2.next will be calling the function again, with two new args, node1 and node2.next.
      6. return node2 if step 3 happened. we will always return the smaller node.

      that's it.

      The iterative solution will be a bit more complex.
      DO NOT dive into nested "if conditions" for this solution. You will get lost there.

      Here's a simpler solution:
      1. make a new node(we call dummy here), initialize it with anything you want. In my code, I used 0.
      2. make a tail pointer, pointing to this new node.
      3. do simple "if statement" in a while loop, while both node1 and node2 can NOT be null at the same time.(or always true, whatever you prefer)
          1. if node1 is null, tail.next is node2, then break;
          2. if node2 is null, tail.next is node1, then break;
          3. if node1 has a smaller value than node2, tail.next will be node1. Then move node1 to node1.next.
          4. if node2 has a smaller value than node1, tail.next will be node2. Then move node2 to node2.next.
          5. Don't forget to move tail to tail.next
      4. return dummy.next, which points to the new starting node of the merged linked list.
</details>

<br/>

> [Click here to see the code in JS](3_merge_LL/merge_LL.js)

> [Click here to see the code in Python](3_merge_LL/merge_LL.py)

___

<br/>
<br/>

## Challenge 4

[LeetCode challenge 83, Remove Duplicates from Sorted List (Easy)](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

```
Input: 1->1->2
Output: 1->2
```

Example 2:

```
Input: 1->1->2->3->3
Output: 1->2->3
```

<br/>

> [Click here to see JS tester](3_merge_LL/merge_LL.test.js)

<br/>

<details>
  <summary>Click here to see a solution using both recursive and iterative solution.</summary>
  <br/>

      The recursive solution will be a bit challenging to understand:

      1. First, we need to determine the exit condition, which is when we reach the last node in the linked list, we will exit the recursion.
       - if the head or head.next is null, return head;
      2. The next node of the given node (node passed as args), is determined by calling this function again while passing the given node's next node as a parameter.
      3. at the end of each function, we return one thing, based on an if condition:
          1. if the given node's value is the same as it's next node, then return the next node. ( notice here, the given's node's next node is already modified by step 2.)
          2. If not the same, then return the given node.

      The iterative solution is really easy to understand:

      1. First, we build up a new dummy node, just like challenge 3.
      2. we point the tail to the dummy node
      3. we will need a while loop, loop through every node in the linked list. We call the node we're currently checking as "current node". The loop keeps going until the current node is null.
          1. if the current node's value is not the same, comparing to the "tail"'s value(we need to make sure to initialize the dummy node with a unique value), we set tail.next to the current node.
          2. then we set the new tail to the current node.
          3. outside of the if condition, we iterate the current node. set current = current.next
      4. Outside of the while loop, the "tail" will have a next, pointing to the original node, which might not be what we want. (duplicate may occur). Thus we will manually point this tail.next to null.
      5. In the end, return dummy.next

</details>

<br/>

> [Click here to see the code in JS](4_remove_duplicate/remove_duplicate.js)

> [Click here to see the code in Python](4_remove_duplicate/remove_duplicate.py)

___

<br/>
<br/>

## Challenge 5

[LeetCode Challenge 19. Remove Nth Node From End of List (Medium)](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:

![img](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

Example 2:

```
Input: head = [1], n = 1
Output: []
```

Example 3:

```
Input: head = [1,2], n = 1
Output: [1]
```

<br/>

> [Click here to see JS tester](3_merge_LL/merge_LL.test.js)

<br/>

<details>
  <summary>Click here to see a solution using both recursive and iterative solution.</summary>
  <br/>

      This challenge is very similer to a Code Fellows challenge. You can click the following link for reference about how to use two pointer technique to find the Nth node from the rear. Please scroll all the way to the bottom of that page.

  [Click here to refer to my code fellow challenge for answers using two pointers solution](https://github.com/PengChen11/data-structures-and-algorithms/blob/master/401-challenges/data_structures/linkedList/readme.md)

      Let's assume that you've figured out how to use the two-pointer technique to figure out the Nth node from the rear:

      Next:

      1. Since we're removing the Nth node, so the Node we need to find is not the one on N-th position, it is the one before it.
          1. We can use an insider function to do the job. Refer to code fellows challenge to figure out the steps.
          2. But what if the n is equal to the length of the linked list? In this case, step 1 will fail. Cause the node we will delete is the head node, and there's nothing before it. We will need to take care of that part.
          3. In my sample, if the pointer moves n steps and reaches the end, then I'll return null, so that I know we're deleting the head (cause there's nothing in front of the head).

      2. figure out a way to delete the Nth Node. You can simply create a function to relink the Node before it to the Node next to it.

      3. if we got null returned from step 1, sub-step 3, then we will simply return the head.next; if not, run step 2.
</details>

<br/>

> [Click here to see the code in JS](5_remove_nth/remove_nth.js)

> [Click here to see the code in Python](5_remove_nth/remove_nth.py)

___

<br/>
<br/>

## Challenge 6

[Leed Code challenge 24. Swap Nodes in Pairs (Medium)](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)
```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

**Example 2:**

```
Input: head = []
Output: []
```

**Example 3:**

```
Input: head = [1]
Output: [1]
```

**Constraints:**

The number of nodes in the list is in the range [0, 100].

0 <= Node.val <= 100

<br/>

> [Click here to see JS tester](6_swap_nodes/swap_nodes.test.js)

<br/>

<details>
  <summary>Click here to see a solution using both recursive and iterative solution.</summary>
  <br/>

      Let's divide the bigger problem into smaller problems:

      1. We need a logic to traverse inside of the linked list, touch every node.
          1. when moving forward, we want all the nodes on the Odd index (if it starts with 1) to switch with the node after it;
          2. We need the node on the EVEN index (if it starts with 1) to be stored somewhere, so later on, after we swapped the two nodes after this one, we can re-link it's next to the proper node.
          3. this logic will handle the edge cases, take care of null conditions.
          4. In the end, this logic will return the new head.

      2. We will need an inner helper function, to swap the given two nodes, when called by step 1, sub-step 2.
          1. this function will check whether the node exists in step 1, sub-step 2. If it does, link it to the proper node.
          2. this function will simply swap two given nodes as args.

      Alright, that's it. have fun.

</details>

<br/>

> [Click here to see the code in JS](6_swap_nodes/swap_nodes.js)

> [Click here to see the code in Python](6_swap_nodes/swap_nodes.py)

___

<br/>
<br/>

## Challenge 7

[Leet Code challenge 445. Add Two Numbers II (Medium)](https://leetcode.com/problems/add-two-numbers-ii/description/)

You are given two **non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Follow up:**
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

**Example:**

```
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
```

