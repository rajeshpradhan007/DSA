const code = require("../findMaxSumSubArray");

describe("findMaxSumSubArray", () => {
    test("should work", () => {
        expect(code.findMaxSumSubArray([-4, 2, -5, 1, 2, 3, 6, -5, 1])).toBe(
            -3
        );
    });
});
