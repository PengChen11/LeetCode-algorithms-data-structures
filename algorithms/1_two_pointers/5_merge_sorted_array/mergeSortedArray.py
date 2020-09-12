from typing import List

def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    pointer_1 = m-1
    pointer_2 = n-1

    for i in range(len(nums1)-1,-1,-1):
        if pointer_1>=0 and pointer_2>=0 and nums1[pointer_1] >= nums2[pointer_2]:
            nums1[i]=nums1[pointer_1]
            pointer_1=pointer_1-1
        else:
            if pointer_2>=0:
                nums1[i]=nums2[pointer_2]
                pointer_2=pointer_2-1
            else:
                break

test = [1,2,3,0,0,0]
merge(test,3,[2,5,6],3)
assert test == [1,2,2,3,5,6]
print('test passed')
