class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        Pref = [1] * (n)
        for i in range(1, n):
            Pref[i] = Pref[i - 1] * nums[i - 1]
        Suf = [1] * (n) #[1,1,4,24]
        for i in range(n-2, -1, -1):
            Suf[i] = Suf[i + 1] * nums[i + 1]

        return [Pref[i] * Suf[i] for i in range(n)]