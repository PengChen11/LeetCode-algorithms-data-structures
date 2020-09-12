'use strict';

function mergeSortedArray(nums1, m, nums2, n){


  let pointer_1 = m-1, pointer_2 = n-1;

  for (let i = nums1.length -1; i >= 0; i --){

    if (pointer_1>=0 && pointer_2>=0 && nums1[pointer_1] >= nums2[pointer_2]){

      nums1[i] = nums1[pointer_1];
      pointer_1-=1;

    } else {
      if(pointer_2>=0){
        nums1[i] = nums2[pointer_2];
        pointer_2-=1;
      } else {
        break;
      }
    }
  }
}

module.exports = mergeSortedArray;
