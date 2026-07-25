class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let cand = null;
        let count = 0;
        
        for (let num of nums) {
           if (count === 0) {
            cand = num
           } 
            count += (cand === num) ? 1 : -1
        }
        return cand;
    }
}
