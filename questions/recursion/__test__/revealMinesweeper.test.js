const program = require("../revealMinesweeper");
describe("first", () => {
    test("Test Case #1", function () {
        const board = [
            ["H", "H", "H", "H", "M"],
            ["H", "1", "M", "H", "1"],
            ["H", "H", "H", "H", "H"],
            ["H", "H", "H", "H", "H"],
        ];
        const row = 3;
        const column = 4;
        const expected = [
            ["0", "1", "H", "H", "M"],
            ["0", "1", "M", "2", "1"],
            ["0", "1", "1", "1", "0"],
            ["0", "0", "0", "0", "0"],
        ];
        const actual = program.revealMinesweeper(board, row, column);
        console.log(actual);
        //expect(actual).toBe(expected);
    });
    /*
    test("ew", () => {
        let params = {
            board: [
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "5", "3", "3", "5", "M", "M", "M"],
                ["M", "M", "M", "H", "H", "H", "H", "M", "M", "M"],
                ["M", "M", "M", "H", "H", "H", "H", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
            ],
            row: 5,
            column: 5,
        };
        const actual = program.revealMinesweeper(...params);
        expect(actual).toBe(expected);
    });
    test("ew", () => {
        let params = {
            board: [
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "H", "H", "H", "H", "M", "M", "M"],
                ["M", "M", "M", "H", "H", "H", "H", "M", "M", "M"],
                ["M", "M", "M", "H", "H", "H", "H", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
                ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
            ],
            row: 5,
            column: 5,
        };
        const actual = program.revealMinesweeper(...params);
        expect(actual).toBe(expected);
    });
    */
});
