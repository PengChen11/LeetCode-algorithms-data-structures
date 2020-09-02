'use strict';
// just want to test out the difference in proformance by using array vs obj.
var reverseVowels2 = function(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let strArr = str.split('');
  let front = 0;
  let rear = strArr.length-1;

  while (front<rear) {
    if (vowels.includes(strArr[front])) {
      if (vowels.includes(strArr[rear])) {
        [strArr[front], strArr[rear]] = [strArr[rear], strArr[front]];
        front+=1;
        rear -=1;
        continue;
      }
      else rear-=1;
    } else front+=1;
  }
  return strArr.join('');

};


var reverseVowels = function(str) {
  let vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
    A: 'A',
    E: 'E',
    I: 'I',
    O: 'O',
    U: 'U'};
  let strArr = str.split('');
  let front = 0;
  let rear = strArr.length-1;

  while (front<rear) {
    if (vowels[(strArr[front])]) {
      if (vowels[(strArr[rear])]) {
        [strArr[front], strArr[rear]] = [strArr[rear], strArr[front]];
        front+=1;
        rear -=1;
        continue;
      }
      else rear-=1;
    } else front+=1;
  }
  return strArr.join('');

};

module.exports = reverseVowels;
