'use strict';
const twoSum = require('./two_sum');

describe('testing Leet Code 167, two sum II challenge', ()=>{

  it('test 1, with positive ints', ()=>{
    let result = twoSum([2,7,11,15], 9);
    expect(result).toStrictEqual([1,2]);
  });

  it('test 2, with two same number in input array', ()=>{
    let result = twoSum([1,1,2,3],2);
    expect(result).toStrictEqual([1,2]);
  });

  it('test 3, with negative numbers in input array', ()=>{
    let result = twoSum([-2,-1,1,2,3],2);
    expect(result).toStrictEqual([2,5]);
  });

});
