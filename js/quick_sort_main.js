let quickSortArr = [];
function RandomQuickSort() {
    quickSortArr = [];
    $("#quick_sort_div").html();
    initSelectionSort();
}
function genNum() {
    let num = randomInteger(1, 700);
    if (quickSortArr.indexOf(num) == "-1") {
        return num;
    }
    return false;
}
function initSelectionSort() {
    let length = 70;
    let html = "";
    quickSortArr = [];
    for (let i = 0; i < length; i++) {
        let isNumGen = genNum();
        if (isNumGen === false) isNumGen = genNum();
        let height = isNumGen;
        quickSortArr.push(height);
        let heightPx = height + "px";
        html += `<div id="el_${i}" style="width: 30px;height: ${heightPx};margin-right: 1px;background: aquamarine;">${height}</div>`;
    }
    $("#quick_sort_div").html(html);
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
initSelectionSort();
async function quickSort() {
    console.log(quickSortArr);


    quickSortRec(quickSortArr, 0, quickSortArr.length-1);



    console.log(quickSortArr);
}
async function quickSortRec(quickSortArr, left, right) {
    
    var index;
    if (quickSortArr.length > 1) {
        index = await partition(quickSortArr, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSortRec(quickSortArr, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSortRec(quickSortArr, index, right);
        }
    }
    return quickSortArr;
}
async function partition(quickSortArr, left, right) {
    var pivot   = quickSortArr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (quickSortArr[i] < pivot) {
            i++;
        }
        while (quickSortArr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            $("#el_" + i).css("background", "#af7ac5");
            $("#el_" + j).css("background", "#8e44ad");
            await swap(i, j,quickSortArr); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
async function swap(i, j, quickSortArr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tmp = quickSortArr[i];

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

                quickSortArr[i] = quickSortArr[j];
                quickSortArr[j] = tmp;
            //console.log(i,j,tmp1,tmp2,quickSortArr);

            $("#el_" + i).css("background", "aquamarine");
            $("#el_" + j).css("background", "aquamarine");
            resolve();
        }, 20);
    });
}
