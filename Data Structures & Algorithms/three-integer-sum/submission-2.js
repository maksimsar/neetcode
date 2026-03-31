class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        let res = [];
        let set = new Set()
        for (let i = 0; i < nums.length; i++) {
            let CurrentNum = nums[i] * (-1);
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] == CurrentNum) {
                    let triplet = [nums[i], nums[l], nums[r]].join(',')
                    if (!set.has(triplet)){
                        res.push([nums[i], nums[l], nums[r]])
                        set.add(triplet)
                    }
                    l++;
                    r--;   
                } else if  (nums[l] + nums[r] < CurrentNum) {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
        }
        return res;
    }
}
