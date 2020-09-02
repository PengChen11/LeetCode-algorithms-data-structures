def twoSum(numbers, target):
    pointer_small = 0
    pointer_big = len(numbers)-1
    while pointer_small <= pointer_big:
        if numbers[pointer_small]+numbers[pointer_big] == target:
            return [pointer_small+1, pointer_big+1]
        elif numbers[pointer_small]+numbers[pointer_big] > target:
            pointer_big = pointer_big -1
        else: pointer_small = pointer_small +1

if __name__ == "__main__":
    print(twoSum([2,3,4,5],5))
