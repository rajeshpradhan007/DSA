function ninjaTask(tasks) {
    let res = { max: 0 };
    let memory = {};
    let max = 0;
    for (let k = 0; k <= 2; k++) {
        dfs(tasks, 0, k, res, 0, memory);
    }
    return res.max;
}
function dfs(tasks, i, j, res, curSum) {
    if (i == tasks.length) {
        res.max = Math.max(res.max, curSum);
        return;
    }
    curSum += tasks[i][j];
    for (let k = 0; k <= 2; k++) {
        if (k != j) {
            dfs(tasks, i + 1, k, res, curSum);
        }
    }
}
function ninjaTaskMemory(tasks) {
    let res = { max: 0 };
    let memory = {};
    let max = 0;
    for (let k = 0; k <= 2; k++) {
        max = Math.max(max, dfsMemory(tasks, 0, k, res, 0, memory));
    }
    return max;
}

function dfsMemory(tasks, i, j, res, curSum, memory) {
    if (i == tasks.length - 1) {
        return tasks[i][j];
    }
    if (memory[i + "-" + j]) return memory[i + "-" + j];
    let cur = tasks[i][j];
    let max = 0;

    for (let k = 0; k <= 2; k++) {
        if (k != j) {
            max = Math.max(
                max,
                dfsMemory(tasks, i + 1, k, res, curSum, memory)
            );
        }
    }
    memory[i + "-" + j] = max + cur;
    return max + cur;
}
exports.ninjaTask = ninjaTask;
exports.ninjaTaskMemory = ninjaTaskMemory;
