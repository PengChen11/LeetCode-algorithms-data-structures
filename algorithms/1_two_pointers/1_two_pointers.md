# Two Pointers Technique (multiple pointers)

Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.

You can also extend this idea to use multiple pointers.

[Click here to read more about two pointers](https://medium.com/@kevinlai76/algorithm-two-pointer-technique-a27103ed7ea1)

* [1. Challenge 1](##Challenge-1)

* [2. Challenge 2](##Challenge-2)

* [3. Challenge 3](##Challenge-3)

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

**Input**: numbers = [2,7,11,15], target = 9
**Output**: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

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

<details>

  <summary>Click to see code in JS</summary>

  ```javascript
    var twoSum = function(numbers, target) {
      let pointer_small = 0;
      let pointer_big = numbers.length-1;
      while ( pointer_small <= pointer_big){
        if (numbers[pointer_small]+numbers[pointer_big]===target) {
          return [pointer_small+1, pointer_big+1];
        }
        else if (numbers[pointer_small]+numbers[pointer_big]>target) {
          pointer_big-= 1;
        }
        else pointer_small+=1;
      }
    };
  ```

  [Click here to see JS file](1_two_sum/two_sum.js)

</details>

___

## Challenge 2

### LeetCode 633. Sum of Square Numbers [Easy]

**Intro:**

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that **a^2 + b^2 = c**.

**Example 1:**

Input: 5

Output: True

Explanation: ```1*1 + 2*2 = 5```

**Example 2:**

Input: 3

Output: False

Explanation: the solution does not exsit.

This one is a bit of challenging here, but it is still rated as Esay at LeetCode.

Hint: two pointers could represent a and b here.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](2_sum_square_numbers/sum_square.test.js)

<details>
  <summary>Click here to see two pointers solution.</summary>

## Challenge 3
