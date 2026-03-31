class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let NumsLength = nums.length;
        let SetArray = new Set(nums);
        let SetSize = SetArray.size;
        return SetSize != NumsLength;
    }
}
