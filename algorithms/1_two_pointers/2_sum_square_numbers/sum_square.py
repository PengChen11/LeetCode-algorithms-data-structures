def judgeSquareSum(c):
    big = int(c**(1/2))
    small = 0
    while small<=big:
        if small*small + big*big == c:
            return True
        elif small**2 + big**2 >c:
            big = big-1
        else: small = small +1
    return False


if __name__ == "__main__":
    print(judgeSquareSum(5))
    print(judgeSquareSum(3))
