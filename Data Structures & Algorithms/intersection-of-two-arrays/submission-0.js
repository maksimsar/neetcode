class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        nums1 = Array.from(new Set(nums1))
        nums2 = new Set(nums2)
        const res = [];
        for (const num of nums1) {
            if (nums2.has(num)) {
                res.push(num)
            }
        }
        return res;
    }
}
