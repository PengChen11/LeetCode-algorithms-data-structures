from typing import List

def findLongestWord(s: str, d: List[str]) -> str:

    def ifWord (s, word):
        i = 0
        j = 0
        while i<len(s) and j<len(word):
            if s[i] == word[j]:
                j=j+1
            i=i+1
        return j == len(word)

    output = ''

    for word in d:
        if len(output) > len(word) :
            continue;
        if len(output) == len(word) and output<word:
            continue;
        if ifWord(s,word):
            output = word

    return output


test_str = 'aewfafwafjlwajflwajflwafj'
test_dict= ['apple','ewaf','awefawfwaf','awef','awefe','ewafeffewafewf']

assert(findLongestWord(test_str, test_dict)) == 'ewaf'
print('test passed')

