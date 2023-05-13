const {
    MatrixPrintAllRouteFromSrcToDestV1,
} = require("./MatrixPrintAllRouteFromSrcToDest");

let arr = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

//console.log(arr[0].length);
MatrixPrintAllRouteFromSrcToDestV1(arr);
