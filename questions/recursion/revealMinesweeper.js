function revealMinesweeper(board, row, column) {
    if (board[row][column] == "M") {
        board[row][column] = "X";
        return board;
    }
    let map = new Set();
    dfs(board, row, column, map);
    return board;
}
function dfs(board, i, j, map) {
    if (
        i < 0 ||
        j < 0 ||
        i >= board.length ||
        j >= board[0].length ||
        map.has(i + "-" + j)
    ) {
        return;
    }

    map.add(i + "-" + j);
    let count = 0;
    if (board[i][j] == "M") {
        count++;
    }
    if (board[i][j] == "H") {
        for (let set of [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
        ]) {
            if (
                isValid(board, i + set[0], j + set[1]) &&
                board[i + set[0]][j + set[1]] == "M"
            ) {
                count++;
            }
        }
    }
    if (count == 0) {
        board[i][j] = "0";
    } else {
        board[i][j] = String(count);
        return;
    }
    for (let set of [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ]) {
        if (
            isValid(board, i + set[0], j + set[1]) &&
            board[i + set[0]][j + set[1]] == "H"
        ) {
            dfs(board, i + set[0], j + set[1], map);
        }
    }
}
function isValid(board, i, j) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length)
        return false;
    return true;
}

// Do not edit the line below.
exports.revealMinesweeper = revealMinesweeper;
