module.exports = {
    minTimeRequiredInNetworkV1(arr) {
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
          
        }
        console.log(matrix);
    }

}