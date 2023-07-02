const { ninjaTask, ninjaTaskMemory } = require("../ninja-task");

describe("ninja-task", () => {
    test("ninja-task test", () => {
        let task = [
            [1, 50, 100],
            [2, 100, 5],
            [70, 6, 30],
        ];
        expect(ninjaTask(task)).toBe(270);
    });
    test.skip("ninja-task test", () => {
        let task = [
            [1, 500, 10],
            [2, 700, 5],
            [70, 6, 30],
        ];
        expect(ninjaTask(task)).toBe(780);
    });
    test.skip("ninja-task test", () => {
        let task = [
            [83, 66, 76],
            [40, 15, 72],
            [14, 61, 88],
        ];
        expect(ninjaTask(task)).toBe(216);
    });
    test("ninja-task test", () => {
        let task = [
            [94, 74, 84],
            [71, 4, 68],
            [70, 12, 17],
            [7, 84, 58],
            [59, 69, 2],
            [57, 21, 62],
            [74, 54, 15],
            [15, 83, 49],
            [97, 70, 90],
            [8, 71, 42],
        ];
        expect(ninjaTask(task)).toBe(762);
        expect(ninjaTaskMemory(task)).toBe(762);
    });
});
