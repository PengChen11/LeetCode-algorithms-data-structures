'use strict';

var findLongestWord = function(s,d){
  let longestWord = '';

  function strChecker(s, word){
    let i = 0, j = 0;
    while (i < s.length && j < word.length){
      if (s.charAt(i) === word.charAt(j)){
        j++;
      }
      i++;
    }
    return j === word.length;
  }

  for (let word of d){
    let longest = longestWord.length, wordLength=word.length;
    if (longest > wordLength) continue;
    if (longest === wordLength && longestWord.localeCompare(word)===-1) continue;
    if (strChecker(s, word)) longestWord=word;
  }
  return longestWord;
};

module.exports = findLongestWord;
