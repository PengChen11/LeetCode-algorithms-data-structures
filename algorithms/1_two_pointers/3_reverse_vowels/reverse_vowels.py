def reverseVowels(s: str) -> str:
    # dict is the most effective way to provide a O(1) for searching the keys
    vowels = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u',
        'A': 'A',
        'E': 'E',
        'I': 'I',
        'O': 'O',
        'U': 'U',
    }
    strArr = list(s)
    front = 0
    rear = len(strArr)-1

    while front<rear:
        if strArr[front] in vowels:
            if strArr[rear] in vowels:
                strArr[front], strArr[rear] = strArr[rear], strArr[front]
                front=front+1
                rear = rear-1
                continue
            else:
                rear=rear-1
        else:
            front=front+1
    return ''.join(strArr)

if __name__ == '__main__':
    print(reverseVowels('leetcode'))
