module.exports = {
    
    
function minTimeRequiredInNetworkV1(arr) {
        let matrix={};
        let list={};
        for(let i=0;i<arr.length;i++){
        	if(!matrix[arr[i][0]]){
          	matrix[arr[i][0]]={};
          }
          if(!matrix[arr[i][0]][arr[i][1]]){
          	matrix[arr[i][0]][arr[i][1]]=0;
          }
            matrix[arr[i][0]][arr[i][1]]=arr[i][2];
          if(!list[arr[i][0]]){
          	list[arr[i][0]]=[];
          }
          if(!list[arr[i][1]]){
          	list[arr[i][1]]=[];
          }
          
          console.log(arr[i]);
          list[arr[i][0]].push(arr[i][1]);
        }
        console.log(matrix,list);
        let seen=new Set();
        let min={min:0,val:Infinity};
        let paths=[];
        let minVal=0;
        dfs(list,matrix,1,seen,min,'',paths,minVal);
        console.log(paths,min,minVal);
    }
    function dfs(list,matrix,idx,seen,min,curPath,paths,minVal){
    	if(seen.has(idx)){
      	curPath+=idx;
        paths.push(curPath);
        console.log(min);
        min.val=Math.min(min.min,min.val);
        return
      }
     	seen.add(idx);  
      let toBeRemoved=0;
      if(curPath!=""){
      	let last=curPath[curPath.length-1];
        toBeRemoved=parseInt(matrix[last][idx]);
      	min.min+=toBeRemoved;
      }
      curPath+=idx;
      for(let i=0;i<list[idx].length;i++){
				dfs(list,matrix,list[idx][i],seen,min,curPath,paths,minVal);
     }
     seen.delete(idx); 
     if(curPath.length!=1){
      	let last=curPath[curPath.length-1];
      	min.min-=parseInt(toBeRemoved);
      }
    }

}