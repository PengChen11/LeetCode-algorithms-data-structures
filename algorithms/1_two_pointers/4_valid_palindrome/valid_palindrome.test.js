'use strict';
// note: The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

const {validPalindrome, validPalindrome2, validPalindrome3} = require('./valid_palindrome');

describe('LeetCode 680 tester. valid palindrome challenge', ()=>{

  it('test 1 with "aba", should return True', ()=>{
    expect(validPalindrome('aba')).toBeTruthy();
    expect(validPalindrome2('aba')).toBeTruthy();
    expect(validPalindrome3('aba')).toBeTruthy();
  });

  it('test 2 with "abca", should return True', ()=>{
    expect(validPalindrome('abca')).toBeTruthy();
    expect(validPalindrome2('abca')).toBeTruthy();
    expect(validPalindrome3('abca')).toBeTruthy();
  });

  it('test 3 with "abcdefggafedcba", should return True', ()=>{
    expect(validPalindrome('abcdefggafedcba')).toBeTruthy();
    expect(validPalindrome2('abcdefggafedcba')).toBeTruthy();
    expect(validPalindrome3('abcdefggafedcba')).toBeTruthy();
  });

  it('test 4 with "abcdefgaafedcca", should return False', ()=>{
    expect(validPalindrome('abcdefgaafedcca')).toBeFalsy();
    expect(validPalindrome2('abcdefgaafedcca')).toBeFalsy();
    expect(validPalindrome3('abcdefgaafedcca')).toBeFalsy();
  });

  it('test 5 with "abcdedcdba", a very tricky one. should return True', ()=>{
    expect(validPalindrome('abcdedcdba')).toBeTruthy();
    expect(validPalindrome2('abcdedcdba')).toBeTruthy();
    expect(validPalindrome3('abcdedcdba')).toBeTruthy();
  });

  it('test 6 with "abdcdedcba", a very tricky one. should return True', ()=>{
    expect(validPalindrome('abdcdedcba')).toBeTruthy();
    expect(validPalindrome2('abdcdedcba')).toBeTruthy();
    expect(validPalindrome3('abdcdedcba')).toBeTruthy();
  });

});
