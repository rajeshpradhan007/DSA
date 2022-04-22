let selectionSortArr = [];
function RandomBubbleSort(){
    selectionSortArr = [];
    $('#selection_sort_div').html();
    initSelectionSort()
}
function genNum(){
    let num = randomInteger(1, 700);
    if(selectionSortArr.indexOf(num)=="-1"){
        return num;
    }
    return false;
}
function initSelectionSort() {
    let length = 70;
    let html = "";
    selectionSortArr = [];
    for (let i = 0; i < length; i++) {
        let isNumGen=genNum();
        if(isNumGen===false) isNumGen=genNum();
        let height=isNumGen;
        selectionSortArr.push(height);
        let heightPx = height + "px";
        html += `<div id="el_${i}" style="width: 30px;height: ${heightPx};margin-right: 1px;background: aquamarine;">${height}</div>`;
    }
    $("#selection_sort_div").html(html);
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
initSelectionSort();
async function selectionSort() {
    console.log(selectionSortArr);

    for(let j=0;j<selectionSortArr.length;j++){
		let smallestIndex=j;
		for(let i=j;i<selectionSortArr.length;i++){
			if(selectionSortArr[smallestIndex] > selectionSortArr[i+1]){
				smallestIndex=i+1;
			}
		}
		//console.log(smallestIndex,j,array);
        $("#el_"+ smallestIndex).css('background','#af7ac5');
        $("#el_"+ j).css('background','#8e44ad');
		await swap(smallestIndex,j,selectionSortArr);
	}
    

    console.log(selectionSortArr);
}
async function swap(i,j,selectionSortArr){
    return  new Promise((resolve, reject) => { 
        setTimeout(() => {
            let tmp = selectionSortArr[i];
    
            let tmp1 = i; 
            let tmp2 = j;
    
            let dd1=$("#el_"+ tmp1).html();
            let dd2=$("#el_"+ tmp2).html();
            $("#el_"+ tmp1).html(dd2).css('height',$("#el_"+ tmp1).html()+'px');
            $("#el_"+ tmp2).html(dd1).css('height',$("#el_"+ tmp2).html()+'px');
            
            selectionSortArr[i] = selectionSortArr[j];
            selectionSortArr[j] = tmp;
            //console.log(i,j,tmp1,tmp2,selectionSortArr);
            
            $("#el_"+ i).css('background','aquamarine');
            $("#el_"+ j).css('background','aquamarine');
            resolve();
        }, 20);
    });
    
}