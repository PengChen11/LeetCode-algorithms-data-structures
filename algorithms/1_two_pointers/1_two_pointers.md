# Two Pointers Technique (multiple pointers)

Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.

You can also extend this idea to use multiple pointers.

[Click here to read more about two pointers](https://medium.com/@kevinlai76/algorithm-two-pointer-technique-a27103ed7ea1)

**Resolved:**

- [Challenge 1, Two Sum](#Challenge-1)

- [Challenge 2, Sum of Square Numbers](#Challenge-2)

- [Challenge 3, Reverse Vowels of a String](#Challenge-3)

- [Challenge 4, Valid Palindrome II](#Challenge-4)

- [Challenge 5, Merge Sorted Array](#Challenge-5)

- [Challenge 6, Linked List Cycle](#Challenge-6)

- [Challenge 7, Longest word in dict through deleting](#Challenge-7)

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
  <summary>Click here to see a solution using pointers.</summary>

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

Given a non-negative integer **c**, your task is to decide whether there're two integers **a** and **b** such that **a^2 + b^2 = c**.

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
  <summary>Click here to see a solution using pointers.</summary>

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

### LeetCode 345. Reverse Vowels of a String (Easy)

**Intro:**

Write a function that takes a string as input and reverse only the vowels of a string.

**Example 1:**

- Input: "hello"
- Output: "holle"

**Example 2:**

- Input: "leetcode"
- Output: "leotcede"

**Note:** The vowels does not include the letter "y".

Hint:

1. can we modify char in a string directly?
2. if we can not, what should we do?

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](3_reverse_vowels/reverse_vowels.test.js)

___

<details>
  <summary>Click here to see a solution using pointers.</summary>

  ![img](https://camo.githubusercontent.com/29a0f67b26e9f62af80508fdc8ecc9fa2e53f5dd/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f61376362383432332d383935642d343937352d386566382d3636326130303239633737322e706e67)

   In Javascript and python, string is immutable. That means no matter what string method you are using, behind the scenes, it's converting a string to an array of charactors then play with it, output the new string by joining the array charactors all together.

   In order to determine whether a character is a vowel or not, building a hash table (hash map) would be the best practice, since searching inside of a hash table only takes O(1) time.

   1. build up your vowels table.
   2. split the input string into an array.
   3. set head pointer and tail pointer.
   4. check the head pointer,
         - if it's a vowel, then check the tail pointer. if it's a vowel, switch them.
         - if the tail pointer is not a vowel, move it back one step.
         - if it's not a vowel, move forward one step.
   5. at the end, joint the letters array and output it.

  Big O time is n, just need to check all of it's letters one time.
  Big O space is 1, we 're justing using two ponters.

  ![img](https://camo.githubusercontent.com/6e66ca91f2688beacd6f9dd3ef2774abb53dda73/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f65663235666637632d306636332d343230642d386233302d6561666265656133356431312e676966)
</details>

___

[Click here to see the code in JS](3_reverse_vowels/reverse_vowels.js)

[Click here to see the code in Python](3_reverse_vowels/reverse_vowels.py)

___

## Challenge 4

### LeetCode 680. Valid Palindrome II (Easy)

**Intro:**

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

**Example 1:**

- Input: "aba"
- Output: True

**Example 2:**

- Input: "abca"
- Output: True
- Explanation: You could delete the character 'c'.

**Note:**

The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

**Hint:**
remove one charactor from the left part vs right part might be tricky.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see JS tester](3_reverse_vowels/reverse_vowels.test.js)

___

<details>
  <summary>Click here to see solutions using two pointers.</summary>

  Here I have 3 solutions, the 1st one is my own initial solution, it's not the best one:

  let's assume the input is  ```a b c d e d c d b a```

  1. We need two trackers for the head and tail of the given string. Also a switch representing whether a letter is being removed or not.

  2. Head moves to the right, tail moves to the left, and head needs to be smaller than tail all the time.

  3. While when the head is smaller than the tail, we check whether the letter they are pointing to is the same. If so, we move forward. In the end, get out of the while loop, we return 'true'.

  4. if not, things get tricky:

        - if the switch is on, then it means we already got rid of one letter and it still doesn't work. Return False;

        - otherwise, if the head + 1 is tail, then it means we are meeting in the middle, and we can easily get rid of one of those two letters to make it a palindrome.

        - Or, we will get rid of one letter from the left part, check it's next letter with the tail tracker, AND, one more important thing, we also need to check one more pair to make sure we removed one from the left to make it work for now, but we're still heading to the right direction. If the additional check passes, great. Turn the switch on and more forward. if fails:

        - Now we jump back, remove one letter from the right side and see whether it works now. If it does, great, we now removed the letter that could be removed. Turn the switch on then more forward.

  **Then I saw CSC2018's solution and it blows my mind:**

  Here's his way of solving it:

  1. Simply start a for loop with two iterators, i and j, i moves to the right and j moves to the left, and only loop when i < j.

  2. check every string[i] and string[j] pair, if mismatch occurs:

        - make another function which returns a boolean, check whether the given string is a palindrome, by passing the input string, current i and j.

        - return that boolean by calling the function with (i+1, j) or (i, j-1), which when cutting a letter from left doesn't work, we cut it from the right side.

  3. simple and much more readable, right?

  ![img](https://camo.githubusercontent.com/c91fb74b92cb6c308ed1660da771d2ff4cea4956/68747470733a2f2f63732d6e6f7465732d313235363130393739362e636f732e61702d6775616e677a686f752e6d7971636c6f75642e636f6d2f64623566333061372d386266612d346563632d616235642d3734376337373831383936342e676966)

  If you don't like a for loop with two iterators, then you can use nested while loops. you can find a nested while loop solution in my code too.

  But in the end, the performance of all those different approaches are similar. O time is O(n), O space is O(1) since we're only using two pointers.

</details>

___

[Click here to see the solution in JS](4_valid_palindrome/valid_palindrome.js)

[Click here to see the solution in Python](4_valid_palindrome/valid_palindrome.py)

___

## Challenge 5

### LeetCode challenge 88, Merge Sorted Array (easy)

**intro:**

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

**Note:**

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

**Input:**

- nums1 = [1,2,3,0,0,0], m = 3

- nums2 = [2,5,6],       n = 3

= Output: [1,2,2,3,5,6]

**Constraints:**

-10^9 <= nums1[i], nums2[i] <= 10^9

nums1.length == m + n

nums2.length == n

**Hint:**

- It does not asking anything in return. Just modify nums1 in place.
- Think about the edge cases. Check them in the tester.

A lot of people doesn't like this challenge casue it is not saying that no return is needed.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.
[Click here to see the JS tester](5_merge_sorted_array/mergeSortedArray.test.js)

___

<details>
  <summary>Click here to see solutions using two pointers.</summary>

  This is a relativelly easy challenge. The key to solve it is to update the element of nums1 from tail to head.

  1. define your two pointers
  2. make a for loop, loop the length of nums1 times.
  3. each time from tail to head, modify the elements inside nums1.

</details>

___

[Click here to see the solution in JS](5_merge_sorted_array/mergeSortedArray.js)

[Click here to see the solution in Python](5_merge_sorted_array/mergeSortedArray.py)

___

## Challenge 6

[LeetCode challenge 141. Linked List Cycle (easy)](https://leetcode.com/problems/linked-list-cycle/)

See requirements details from the above link.

Hint: Don't get confused by the pos. Focus on two pointers, if they travals in different speed, what will happen if a linked list has a loop.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.
[Click here to see the JS tester](6_linked_list_cycle/linked_list_cycle.test.js)

___

<details>
  <summary>Click here to see solutions using two pointers.</summary>

  Use two pinters, one moves one step at a time, the other one moves two steps at a time, if the linked list has a loop, those two pointers will meet at some point.

  1. make two pointers, one pointing to the head, one pointing to head.next

  2. move 1st pointer one step, 2nd pointer two steps in a while loop, while 1st pointer, 2nd pointer and 2nd pointer does have a next(or you'll get an error saying "null does have a property next).

  3. if pointer1's value match pointer2's value, they return True. (this breaks the loop)

  4. return Flase by default.

</details>

___

[Click here to see the code in JS](6_linked_list_cycle/linked_list_cycle.js)

[Click here to see the code in Python](6_linked_list_cycle/linked_list.py)

___

## Challenge 7

[Leet Code 524. Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

**Example 1:**

- Input:
- s = "abpcplea", d = ["ale","apple","monkey","plea"]

- Output:
- "apple"

**Example 2:**

- Input:
- s = "abpcplea", d = ["a","b","c"]

- Output:
- "a"

**Note:**

- All the strings in the input will only contain lower-case letters.
- The size of the dictionary won't exceed 1,000.
- The length of all the strings in the input won't exceed 1,000.

**Tester:**

Try come up with a solution before see my sample solution. And test it with the provided tester.

[Click here to see the JS tester](7_longest_word_in_dict/findLongestWord.test.js)

___

<details>
  <summary>Click here to see solutions using two pointers.</summary>

  We need to check the string s with every word inside of d to determine whether we can delete some letters of s to make it match any word in d or not, if multiple matches are found, then return the longest one with the smallest lexicographical order. Thus a loop will be needed.

  Here we need an insider function, to simply check whether the string could be matching the word in d if we delete some letters. This function will simply return yes or no.

  1. we will need two pointers, one for string (let's call it i ), one for the word in d (let's call it j ). They will both be init with 0.

  2. the loop will keep going as long as BOTH i and j are not at the end of either the string or the word.

  3. while the loop goes, we will check one thing: if the character at i index of s matches the character at j index of the word.  If it matches, then increase j. Otherwise, increase i.

  4. in the end, return whether j matches the length of word. if matches, means all letters in the word could be found in the given string.

  The logic of main function will be simple:

  1. figure out a way to store the longest word, then return it in the end.

  2. we need a loop to compare every word in d with s.

  3. if the length of the stored longest word is greater than the word in d, skip it.

  4. if length are the same, then do lexicographical comparison.

  5. else, use our insider string checker function to check the match. if matches, then update the longest word with this word.

</details>

___

[Click here to see the code in JS](7_longest_word_in_dict/findLongestWord.js)

[Click here to see the code in Python](7_longest_word_in_dict/findLongestWord.py)
