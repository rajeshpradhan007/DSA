let insertionSortArr = [];
function RandomInsertionSort() {
    insertionSortArr = [];
    $("#selection_sort_div").html();
    initSelectionSort();
}
function genNum() {
    let num = randomInteger(1, 700);
    if (insertionSortArr.indexOf(num) == "-1") {
        return num;
    }
    return false;
}
function initSelectionSort() {
    let length = 70;
    let html = "";
    insertionSortArr = [];
    for (let i = 0; i < length; i++) {
        let isNumGen = genNum();
        if (isNumGen === false) isNumGen = genNum();
        let height = isNumGen;
        insertionSortArr.push(height);
        let heightPx = height + "px";
        html += `<div id="el_${i}" style="width: 30px;height: ${heightPx};margin-right: 1px;background: aquamarine;">${height}</div>`;
    }
    $("#insertion_sort_div").html(html);
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
initSelectionSort();
async function insertionSort() {
    console.log(insertionSortArr);

    for (let i = 1; i < insertionSortArr.length; i++) {
        let j = i;
        console.log(j, insertionSortArr[j], insertionSortArr[j - 1]);
        while (j > 0 && insertionSortArr[j] < insertionSortArr[j - 1]) {
            $("#el_" + j).css("background", "#af7ac5");
            $("#el_" + j - 1).css("background", "#8e44ad");
            await swap(j, j - 1, insertionSortArr);
            j -= 1;
        }
    }

    console.log(insertionSortArr);
}
async function swap(i, j, insertionSortArr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tmp = insertionSortArr[i];

            let tmp1 = i;
            let tmp2 = j;

            let dd1 = $("#el_" + tmp1).html();
            let dd2 = $("#el_" + tmp2).html();
            $("#el_" + tmp1)
                .html(dd2)
                .css("height", $("#el_" + tmp1).html() + "px");
            $("#el_" + tmp2)
                .html(dd1)
                .css("height", $("#el_" + tmp2).html() + "px");

            insertionSortArr[i] = insertionSortArr[j];
            insertionSortArr[j] = tmp;
            //console.log(i,j,tmp1,tmp2,insertionSortArr);

            $("#el_" + i).css("background", "aquamarine");
            $("#el_" + j).css("background", "aquamarine");
            resolve();
        }, 20);
    });
}
