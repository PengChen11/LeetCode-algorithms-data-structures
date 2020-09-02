# Two Pointers Technique (multiple pointers)

Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.

You can also extend this idea to use multiple pointers.

[Click here to read more about two pointers](https://medium.com/@kevinlai76/algorithm-two-pointer-technique-a27103ed7ea1)

- [1. Challenge 1, Two Sum](#Challenge-1)

- [2. Challenge 2, Sum of Square Numbers](#Challenge-2)

- [3. Challenge 3](#Challenge-3)

___

## Challenge 1

### LeetCode 167. Two Sum II - Input array [easy]

Intro:

Given an array of integers that is **already sorted in ascending order**, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

**Note:**

- Your returned answers (both index1 and index2) are not zero-based.
- You may assume that each input would have exactly one solution and you may not use the same element twice.

**Example:**

- **Input**: numbers = [2,7,11,15], target = 9

- **Output**: [1,2]

- **Explanation:** The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Now think about it. The easiest way is to come up with a brute force algorithm, and it works. We start with the 1st number, compare it with every number after it, if no match is found,then start with the 2nd number and do the same thing. This is not an ideal solution. It takes too many steps. (O(n^2)). We need a better solution.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](1_two_sum/two_sum.test.js)

___

<details>
  <summary>Click here to see two pointers solution.</summary>

  1. We use two pointers, one pointing to a smaller number; one pointing to a bigger number.
     - The smaller number pointer travels from small number to big( head to toe).
     - The big number pointer travels from big number to small (toe to head).

  2. If the sum of two elements that are indexed by two pointers is the target, then we get it.

  3. if sum > target, move the big number pointer backward, so we are reducing the sum.

  4. if sum < target, move the small number pointer forward, thus we increase the sum.

With this algorithm, we only touch each element inside the array one time. Thus the O time is O(n). We only used two additional variables, thus O space is O(1).

![img](https://camo.githubusercontent.com/98b3f53b56644b038cddd17fb1f6b4d5d1546989/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f34333763623534632d353937302d346261392d623265662d3235343166376436633831652e676966)
</details>

___

[Click here to see JS file](1_two_sum/two_sum.js)

[Click here to see the python code](1_two_sum/two_sum.py)

___

## Challenge 2

### LeetCode 633. Sum of Square Numbers [Easy]

**Intro:**

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that **a^2 + b^2 = c**.

**Example 1:**

- Input: 5

- Output: True

- Explanation: ```1*1 + 2*2 = 5```

**Example 2:**

- Input: 3

- Output: False

- Explanation: the solution does not exsit.

This one is a bit of challenging here, but it is still rated as Esay at LeetCode.

Hint: two pointers could represent a and b in this case.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](2_sum_square_numbers/sum_square.test.js)

___

<details>
  <summary>Click here to see two pointers solution.</summary>

  We can think about this challenge in this way:

  We're looking for two numbers in an array from 0 to c, and the sum of these two numbers squared is c. If we can find it, then return true, otherwise return false.

  This challenge shares a lot of similarities with 167. Just one difference: 167 is looking for sum = target, but this one is looking for sum squared = target.

  The keypoint to the solution is to initialize the large number pointer, to decrease the big O of time.

  1. init small number pointer to 0.
  2. init big number pointer to square root of c. (thus c^2=target). if it's not an int, then just take the int part.
  3. if the sum of two pointers squared value equals to c, then return true;
  4. if sum > c, move the big number pointer one step to the left.
  5. if sum < c, move a small number pointer one step to the right.
  6. return false by default.

</details>

___

[Click here to see the code in JS](2_sum_square_numbers/sum_square.js)

[Click here to see the code in Python](2_sum_square_numbers/sum_square.py)

___

## Challenge 3
