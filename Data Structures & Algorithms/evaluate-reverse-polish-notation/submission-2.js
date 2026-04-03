class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array();
        let operands = '+-*/';
        for (let token of tokens) {
            if (operands.includes(token)) {
                let last = stack.pop();
                let prelast = stack.pop();
                if (token === '+') {
                    stack.push((+prelast) + (+last));
                } else if (token === '-') {
                    stack.push((+prelast) - (+last));
                } else if (token === '/') {
                    stack.push(Math.trunc((+prelast) / (+last)));
                } else if (token === '*') {
                    stack.push((+prelast) * (+last));
                }
            } else {
                stack.push(token)
            }
        }
        return (+stack[0])
    }
}
