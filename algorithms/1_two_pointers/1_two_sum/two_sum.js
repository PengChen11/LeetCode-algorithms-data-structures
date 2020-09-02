'use strict';

var twoSum = function(numbers, target) {
  let pointer_small = 0;
  let pointer_big = numbers.length-1;
  while ( pointer_small <= pointer_big){
    if (numbers[pointer_small]+numbers[pointer_big]===target) {
      return [pointer_small+1, pointer_big+1];
    }
    else if (numbers[pointer_small]+numbers[pointer_big]>target) {
      pointer_big-= 1;
    }
    else pointer_small+=1;
  }
};

module.exports=twoSum;