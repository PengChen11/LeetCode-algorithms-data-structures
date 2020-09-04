def valid_Palindrome(inputStr):

    def isPalindrome(inputStr, head, tail):
        while head < tail:
            if inputStr[head] != inputStr[tail]:
                return False;
            head = head + 1
            tail = tail - 1
        return True;


    for i,j in zip(range(len(inputStr)-1), range(len(inputStr)-1, -1, -1)):
        if i>=j:
            break;
        if inputStr[i] != inputStr[j]:
            return isPalindrome(inputStr, i+1, j) or isPalindrome(inputStr, i, j-1)

    return True;


print('Starting test for method 1 ...')
assert valid_Palindrome('abca') == True
assert valid_Palindrome('aba') == True
assert valid_Palindrome('abcef') == False
assert valid_Palindrome('this is no drome') == False
assert valid_Palindrome('abcdefggafedcba') == True
assert valid_Palindrome('abcdedcdba') == True
assert valid_Palindrome('abdcdedcba') == True
print('All tests for method 1 passed')

# Or we can use the nested while loop method if you think put two interators inside a for loop is too complcated.

def valid_Palindrome_2(inputStr):
    head = 0
    tail = len(inputStr-1)

    while head < tail:
        if inputStr[head] != inputStr[tail]:

            while head < tail:
                if inputStr[head+1] != inputStr[tail]:

                    while head < tail:
                        if inputStr[head] != inputStr[tail-1]:
                            return False
                        head = head + 1
                        tail = tail - 1

                head = head + 1
                tail = tail - 1

        head = head + 1
        tail = tail - 1

    return True


print('Starting test for method 2 ...')
assert valid_Palindrome('abca') == True
assert valid_Palindrome('aba') == True
assert valid_Palindrome('abcef') == False
assert valid_Palindrome('this is no drome') == False
assert valid_Palindrome('abcdefggafedcba') == True
assert valid_Palindrome('abcdedcdba') == True
assert valid_Palindrome('abdcdedcba') == True
print('All tests for method 2 passed')
