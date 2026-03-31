class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        freq = {}
        for i in range(n):
            if nums[i] in freq:
                freq[nums[i]] += 1
            else:
                freq[nums[i]] = 1

        bucket = [[] for j in range(n+1)]

        for num, f in freq.items():
            bucket[f].append(num)
        res = []
        for t in range(n, 0, -1):
            for num in bucket[t]:
                res.append(num)
                if len(res) == k:
                    return res