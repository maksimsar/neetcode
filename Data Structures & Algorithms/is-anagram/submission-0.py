class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        dict = {}
        dict2 = {}
        for i in range(len(s)):
            if s[i] in dict:
                dict[s[i]] += 1
            else:
                dict[s[i]] = 1
            if t[i] in dict2:
                dict2[t[i]] += 1
            else:
                dict2[t[i]] = 1
        if dict == dict2:
            return True
        else:
            return False
