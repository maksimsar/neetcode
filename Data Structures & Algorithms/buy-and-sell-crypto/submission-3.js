class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // [10,1,5,6,7,1]
    // []
    maxProfit(prices) {
        let res = 0;
        let currentMin = prices[0];
        for (let i = 0; i < prices.length; i++) {
            let item = prices[i] 
            res = Math.max(res,item - currentMin)
            if (currentMin > item) {
                currentMin = item // 10
            }
        }
        return res;
    }
}
