'use strict';
const sumSquare = require('./sum_square');

describe('testing Leet Code 633, sum of square numbers challenge', ()=>{

  it('test 1, with solutions', ()=>{
    let result = sumSquare(9);
    expect(result).toBeTruthy();
  });

  it('test 2, with 0', ()=>{
    let result = sumSquare(0);
    expect(result).toBeTruthy();
  });

  it('test 3, with no solution, return false', ()=>{
    let result = sumSquare(3);
    expect(result).toBeFalsy();
  });

});
