'use strict';

const reverseVowels = require('./reverse_vowels');

describe('testing Leet Code 633, sum of square numbers challenge', ()=>{

  it('test 1, with "holle"', ()=>{
    let result = reverseVowels('hello');
    expect(result).toBe('holle');
  });

  it('test 2, with "leetcode"', ()=>{
    let result = reverseVowels('leetcode');
    expect(result).toBe('leotcede');
  });

  it('test 3, with upper case and lower case mixed', ()=>{
    let result = reverseVowels('aA');
    expect(result).toBe('Aa');
  });

  it('test 4, with upper case and lower case mixed', ()=>{
    let result = reverseVowels('LeEtCodE');
    expect(result).toBe('LEotCEde');
  });

  it('test 5, with upper case and lower case mixed', ()=>{
    let result = reverseVowels('aAA');
    expect(result).toBe('AAa');
  });

});
