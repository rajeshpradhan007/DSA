module.exports = {
    /**
     * Time: O(n3) | Space: O(1)
     * @param {*} arr
     * @returns
     */
    findAllPath(arr, srcI, srcJ, desI, desJ, soFarPath, visited) {
        if (
            srcI < 0 ||
            srcJ < 0 ||
            srcI >= arr.length ||
            srcJ >= arr[0].length ||
            arr[srcI][srcJ] == 1 ||
            visited.has(srcI + "," + srcJ)
        ) {
            return;
        }
        if (srcI == desI && srcJ == desJ) {
            console.log("reached", soFarPath);
            visited.delete(srcI + "," + srcJ);
            return;
        }
        visited.add(srcI + "," + srcJ);
        module.exports.findAllPath(
            arr,
            srcI - 1,
            srcJ,
            desI,
            desJ,
            soFarPath + "T",
            visited
        );
        module.exports.findAllPath(
            arr,
            srcI,
            srcJ - 1,
            desI,
            desJ,
            soFarPath + "L",
            visited
        );
        module.exports.findAllPath(
            arr,
            srcI + 1,
            srcJ,
            desI,
            desJ,
            soFarPath + "D",
            visited
        );
        module.exports.findAllPath(
            arr,
            srcI,
            srcJ + 1,
            desI,
            desJ,
            soFarPath + "R",
            visited
        );
        visited.delete(srcI + "," + srcJ);
    },
    MatrixPrintAllRouteFromSrcToDestV1(arr) {
        console.log(arr);
        let srcI = 0,
            srcJ = 0,
            desI = arr.length - 1,
            desJ = arr[0].length - 1;
        let visited = new Set();
        console.log(desI, desJ);
        module.exports.findAllPath(arr, srcI, srcJ, desI, desJ, "", visited);
    },
};
