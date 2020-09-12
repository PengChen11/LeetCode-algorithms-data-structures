'use strict';

const mergeSortedArray = require('./mergeSortedArray');

describe('test for leet code challenge 88, merge two sorted array', ()=>{

  it('test 1', ()=>{
    let testArr = [1,2,3,0,0,0];
    mergeSortedArray(testArr,3,[2,5,6],3);
    expect(testArr).toStrictEqual([1,2,2,3,5,6]);
  });

  it('test 2', ()=>{
    let testArr = [0];
    mergeSortedArray(testArr,0,[2],1);
    expect(testArr).toStrictEqual([2]);
  });

  it('test 3', ()=>{
    let testArr = [2,0];
    mergeSortedArray(testArr,1,[1],1);
    expect(testArr).toStrictEqual([1,2]);

  });

  it('test 4', ()=>{
    let testArr = [0,0,0,0,0];
    mergeSortedArray(testArr,0,[1,2,3,4,5],5);
    expect(testArr).toStrictEqual([1,2,3,4,5]);
  });

  it('test 5', ()=>{
    let testArr = [1];
    mergeSortedArray(testArr,1,[],0);
    expect(testArr).toStrictEqual([1]);
  });

});
