module.exports = {
    /**
     * Time: O(n3) | Space: O(1)
     * @param {*} arr
     * @returns
     */
    findMaxSumSubArrayV1(arr) {
        let maxSum = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                let tmpSum = 0;
                for (let k = i; k <= j; k++) {
                    tmpSum += arr[k];
                }
                maxSum = Math.max(tmpSum, maxSum);
            }
        }
        return maxSum;
    },
    /**
     * Time: O(n2) | Space: O(1)
     * @param {*} arr
     * @returns
     */
    findMaxSumSubArrayV2(arr) {
        let maxSum = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < arr.length; i++) {
            let tmpSum = 0;
            for (let j = i; j < arr.length; j++) {
                tmpSum += arr[j];
                maxSum = Math.max(tmpSum, maxSum);
            }
        }
        return maxSum;
    },
    /**
     * Time: O(n) | Space: O(1)
     * @param {*} arr
     * @returns
     */
    findMaxSumSubArrayV3(arr) {
        let maxSum = Number.MIN_SAFE_INTEGER;
        let tmpSum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            tmpSum = Math.max(arr[i], tmpSum + arr[i]);
            if (tmpSum > maxSum) {
                maxSum = tmpSum;
            }
        }
        return maxSum;
    },
};
