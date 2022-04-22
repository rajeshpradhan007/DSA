let bubbleSortArr = [];
function RandomBubbleSort(){
    bubbleSortArr = [];
    $('#buttle_sort_div').html();
    initBubbleSort()
}
function genNum(){
    let num = randomInteger(1, 700);
    if(bubbleSortArr.indexOf(num)=="-1"){
        return num;
    }
    return false;
}
function initBubbleSort() {
    let length = 70;
    let html = "";
    bubbleSortArr = [];
    for (let i = 0; i < length; i++) {
        let isNumGen=genNum();
        if(isNumGen===false) isNumGen=genNum();
        let height=isNumGen;
        bubbleSortArr.push(height);
        let heightPx = height + "px";
        html += `<div id="el_${i}" style="width: 30px;height: ${heightPx};margin-right: 1px;background: aquamarine;">${height}</div>`;
    }
    $("#buttle_sort_div").html(html);
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
initBubbleSort();
async function bubbleSort() {
    console.log(bubbleSortArr);
    for (let i = 0; i < bubbleSortArr.length; i++) {
        for (let j = 0; j < bubbleSortArr.length; j++) {
            if (bubbleSortArr[j] > bubbleSortArr[j + 1]) {
                await swap(j,j+1,bubbleSortArr);
            }
        }
    }
    
    console.log(bubbleSortArr);
}
async function swap(i,j,bubbleSortArr){
    return  new Promise((resolve, reject) => { 
        setTimeout(() => {
            let tmp = bubbleSortArr[i];
    
            let tmp1 = i; 
            let tmp2 = j;
    
            let dd1=$("#el_"+ tmp1).html();
            let dd2=$("#el_"+ tmp2).html();
            $("#el_"+ tmp1).html(dd2).css('height',$("#el_"+ tmp1).html()+'px');
            $("#el_"+ tmp2).html(dd1).css('height',$("#el_"+ tmp2).html()+'px');
            
            bubbleSortArr[i] = bubbleSortArr[j];
            bubbleSortArr[j] = tmp;
            console.log(i,j,tmp1,tmp2,bubbleSortArr);
            resolve();
        }, 20);
    });
    
}