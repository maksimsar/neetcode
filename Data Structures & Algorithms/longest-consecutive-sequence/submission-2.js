class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) { return 0; }

        let set = new Set(nums);
        let res = 0;
        for (let num of nums) {
            if (!set.has(num - 1)) {
                let l = 1
                let Curnum = num;
                while (set.has(Curnum + 1)) {
                    l += 1;
                    Curnum += 1;
                }
            res = Math.max(l, res);

            }
        }
        return res;
    }
}
