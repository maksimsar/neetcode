class Solution {

    topKFrequent(nums, k) {
        let map = new Map();
        for (let x of nums) {
            if (map.has(x)) {
                let t = map.get(x) + 1
                map.set(x, t)
            } else {
                map.set(x, 1);
            }
        }
        let Sort = Array.from(map)
        Sort.sort((a, b) => (b[1] - a[1]))
        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(Sort[i][0])
        }
        
        return res;
        
    }
}
