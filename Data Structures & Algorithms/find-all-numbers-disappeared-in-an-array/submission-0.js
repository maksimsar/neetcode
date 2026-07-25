class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const set = new Set(nums);
        const res = []
        for (let i = 1; i < (nums.length + 1); i++) {
            if (!set.has(i)) {
                res.push(i)
            }
        }
        return res;
    }
}
