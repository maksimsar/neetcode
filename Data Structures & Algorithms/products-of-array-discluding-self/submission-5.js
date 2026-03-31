class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length - 1;
        let pref = [1];
        let suf = new Array(n+1).fill(1);
        for (let i = 1; i < nums.length; i++) {
            pref[i] = nums[i-1] * pref[i-1];

        }
        for (let i = (n-1); i >= 0; i--) {
            suf[i] = suf[i+1] * nums[i+1]
        }
        let ans = [];
        for (let i = 0; i < (n+1); i++) {
            ans[i] = pref[i] * suf[i]
        }
        return ans;
    }
}
