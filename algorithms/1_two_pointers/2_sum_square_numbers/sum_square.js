var judgeSquareSum = function(c) {
  let big = Math.floor(c**(1/2));
  let small = 0;
  while (small<=big){
    if (small*small+big*big===c) return true;
    else if (small**2+big**2 >c) big-=1;
    else small +=1;
  }
  return false;
};

module.exports = judgeSquareSum;
