class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = new Array();
        for (let i = 0; i < temperatures.length; i++) {
            let cur = temperatures[i];
            // if (stack.length !== 0) {
            //     let last = stack.at(-1);
            //     if (curr > last[0]) {
            //         result[last[1]] = i - last[1];
            //         stack.pop()
            //     } else {
            //         stack.push([temperatures[i], i])
            //     }
            // }
            while (stack.length > 0 && cur > temperatures[stack.at(-1)]) {
                result[stack.at(-1)] = i - stack.at(-1);
                stack.pop();
            }
            stack.push(i);

        }

        return result;
    } // [index]

}