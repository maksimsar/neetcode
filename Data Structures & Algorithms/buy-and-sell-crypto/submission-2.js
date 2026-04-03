class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let profit = 0;
        while (r < prices.length ) {
            if (prices[l] >= prices[r]) {
                l = r;
                r++;
            } else {
                profit = Math.max(prices[r] - prices[l], profit);
                r++;
            }

        }
        return profit;
    }
}
