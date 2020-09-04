'use strict';
// note: The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

const validator = require('./valid_palindrome');

describe('LeetCode 680 tester. valid palindrome challenge', ()=>{

  it('test 1 with "aba", should return True', ()=>{
    expect(validator('aba')).toBeTruthy();
  });

  it('test 2 with "abca", should return True', ()=>{
    expect(validator('abca')).toBeTruthy();
  });

  it('test 3 with "abcdefggafedcba", should return True', ()=>{
    expect(validator('abcdefggafedcba')).toBeTruthy();
  });

  it('test 4 with "abcdefgaafedcca", should return False', ()=>{
    expect(validator('abcdefgaafedcca')).toBeFalsy();
  });

  it('test 5 with "abcdedcdba", a very tricky one. should return True', ()=>{
    expect(validator('abcdedcdba')).toBeTruthy();
  });

  it('test 6 with "abdcdedcba", a very tricky one. should return True', ()=>{
    expect(validator('abdcdedcba')).toBeTruthy();
  });

});
