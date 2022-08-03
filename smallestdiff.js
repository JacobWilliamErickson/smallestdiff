difference = (arr1,arr2)=>{
    let difference = Math.abs(arr1[0]-arr2[0])
    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(Math.abs(arr1[i]-arr2[j])<difference){
                difference =Math.abs(arr1[i]-arr2[j])
            }
        }
    }
    return difference
}


difference([10, 20, 14, 16, 18],
    [30, 23, 54, 33, 96])
