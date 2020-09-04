'use strict';

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
    if (strArr[front] in vowels) {
      if (strArr[rear] in vowels) {
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
