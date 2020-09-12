'use strict';

const findLongestWord = require('./findLongestWord');

describe('testing for leet code 524, find the longest word in dictionary through deleting', ()=>{

  it('test 1', ()=>{
    let s = 'abpcplea';
    let d = ['ale','apple','monkey','plea'];
    expect(findLongestWord(s,d)).toBe('apple');
  });


  it('test 2', ()=>{
    let s = 'abpcplea';
    let d = ['a', 'b', 'c'];
    expect(findLongestWord(s,d)).toBe('a');
  });


  it('test 3', ()=>{
    let s = 'aba';
    let d = ['ba', 'ab', 'c'];
    expect(findLongestWord(s,d)).toBe('ab');
  });


  it('test 4', ()=>{
    let s = 'aewfafwafjlwajflwajflwafj';
    let d = ['apple','ewaf','awefawfwaf','awef','awefe','ewafeffewafewf'];
    expect(findLongestWord(s,d)).toBe('ewaf');
  });
});

