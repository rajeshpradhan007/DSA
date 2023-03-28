const code = require("../Array-findMaxSumSubArray");

describe("findMaxSumSubArray", () => {
    test("should work", () => {
        expect(code.findMaxSumSubArrayV1([-4, 2, -5, 1, 2, 3, 6, -5, 1])).toBe(
            12
        );
        expect(code.findMaxSumSubArrayV1([-2, 10, 7, -5, 15, 6])).toBe(33);
    });
    test("should work", () => {
        expect(code.findMaxSumSubArrayV2([-4, 2, -5, 1, 2, 3, 6, -5, 1])).toBe(
            12
        );
        expect(code.findMaxSumSubArrayV2([-2, 10, 7, -5, 15, 6])).toBe(33);
    });
    test("should work", () => {
        expect(code.findMaxSumSubArrayV3([-4, 2, -5, 1, 2, 3, 6, -5, 1])).toBe(
            12
        );
        expect(code.findMaxSumSubArrayV3([-2, 10, 7, -5, 15, 6])).toBe(33);
    });
});
