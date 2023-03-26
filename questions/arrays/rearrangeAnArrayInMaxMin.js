module.exports = {
    /**
     * Time: O(n) | Space: O(n)
     * @param {*} arr
     * @returns
     */
    rearrangeAnArrayInMaxMinV1(arr) {
        let res = [];
        let idx = 0;
        for (let i = 1; i < arr.length; i += 2) {
            res[i] = arr[idx];
            idx++;
        }
        idx = arr.length - 1;
        for (let i = 0; i < arr.length; i += 2) {
            res[i] = arr[idx];
            idx--;
        }

        return res;
    },
    /**
     * Time: O(n) | Space: O(1)
     * @param {*} arr
     * @returns
     */
    rearrangeAnArrayInMaxMinV2(arr) {
        let minIdx = 0;
        let maxIdx = arr.length - 1;
        let maxEl = arr[maxIdx] + 1;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                //even
                arr[i] += Math.floor(arr[maxIdx] % maxEl) * maxEl;
                maxIdx--;
            } else {
                //odd
                arr[i] = arr[i] + Math.floor(arr[minIdx] % maxEl) * maxEl;
                minIdx = minIdx + 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(arr[i] / maxEl);
        }
        return arr;
    },
};
