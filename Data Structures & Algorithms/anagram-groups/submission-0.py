class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for i in range(len(strs)):
            x = [0] * 26
            for j in range(len(strs[i])):
                sym = strs[i][j]
                pos = ord(sym) - ord('a')
                x[pos] += 1
            key = tuple(x)
            if key not in groups:
                groups[key] = []
            groups[key].append(strs[i])

        return list(groups.values())