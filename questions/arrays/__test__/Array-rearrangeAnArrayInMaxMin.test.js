const code = require("../Array-rearrangeAnArrayInMaxMin");

describe("RearrangeAnArrayInMaxMin", () => {
    test("with order no v1", () => {
        expect(
            code.rearrangeAnArrayInMaxMinV1([1, 2, 3, 4, 5, 6, 7]).toString()
        ).toBe("7,1,6,2,5,3,4");
    });
    test("with even no v1", () => {
        expect(code.rearrangeAnArrayInMaxMinV1([1, 2, 3, 4]).toString()).toBe(
            "4,1,3,2"
        );
    });
    test("with order no v2", () => {
        expect(
            code.rearrangeAnArrayInMaxMinV2([1, 2, 3, 4, 5, 6, 7]).toString()
        ).toBe("7,1,6,2,5,3,4");
    });
    test("with even no v2", () => {
        expect(code.rearrangeAnArrayInMaxMinV1([1, 2, 3, 4]).toString()).toBe(
            "4,1,3,2"
        );
    });
});
