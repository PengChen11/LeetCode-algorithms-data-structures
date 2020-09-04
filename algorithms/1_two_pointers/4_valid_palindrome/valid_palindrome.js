'use strict';
// This is my solution for this problem. It's logic is kind of messy.
function validPalindrome2(inputStr){

  let head = 0;
  let tail = inputStr.length-1;
  let removedOne = false;

  while (head < tail){
    if (inputStr[head]===inputStr[tail]) {
      head += 1;
      tail -= 1;
    }
    else {
      if (removedOne === true) return false;
      else if (head+1 === tail) return true;
      else if (inputStr[head+1]===inputStr[tail] && inputStr[head+2]===inputStr[tail-1]){
        head += 2;
        tail -= 1;
        removedOne = true;
      }
      else if (inputStr[head]===inputStr[tail-1] && inputStr[head+1]===inputStr[tail-2]){
        head += 1;
        tail -= 2;
        removedOne = true;
      }
      else return false;
    }
  }

  return true;
}


// Here's a better more readable solution, which is what I've learned from CS2018.
function validPalindrome(inputStr){

  for (let i = 0, j = inputStr.length-1; i < j; i++, j--){
    if (inputStr[i] !== inputStr[j]) {
      return isPalindrome(inputStr, i+1, j) || isPalindrome(inputStr, i, j-1);
    }
  }

  function isPalindrome(inputStr, head, tail){
    while (head < tail){
      if (inputStr[head] !== inputStr[tail]) return false;
      head++;
      tail--;
    }
    return true;
  }

  return true;
}

module.exports = validPalindrome2;


// here's my new way of solving this problem without using function inside of a function, but a nested while loop.

function validPalindrome3(inputStr){

  let head = 0;
  let tail = inputStr.length-1;

  while (head < tail){
    if (inputStr[head]!==inputStr[tail]) {
      while (head+1 < tail){
        if (inputStr[head+1]!== inputStr[tail]){
          while (head < tail-1){
            if (inputStr[head]!==inputStr[tail-1]) return false;
            head++;
            tail--;
          }
        }
        head++;
        tail--;
      }
    }
    head++;
    tail--;

  }
  return true;
}
