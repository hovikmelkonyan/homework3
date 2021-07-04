1.
function myStep (step){
    let a = 0
    let b = 200
    let n = 30
    let result = []
    for(let i = 0; i < step.length; i++){
        a += step[i]
   
    }
 return step;
}
2.
function maxtiv(arr1){
    arr1 = [2,4,6,9,10,15];
    let max = arr1[0];
    for (let i = 0 ; i<arr1.length;i++){
        if(arr1[i]>max) {
            max = arr1[i]
        }
    }
    return max
}







3.
function arrayReverse(array){
    let result = [];
    for (let i = 0; i < array.length;i++){
        result.unshift(array[i])
        }
    return result;
}



4.
function sharq (dsa){
    for (let i = 0; i < dsa.length; i++){
        dsa[i] = dsa [i]*dsa [i+1]

    } 
    dsa.pop()
    return dsa

}

5.
function getNewList(list,n){
    list = [1,0,3,4,5,6,7,8,9];
    var n = 2
    let result = []
        for (let i = 0; i < list.length; i++){
            if(list[i]!==n){
                result.push(list[i])
            }else { (list[i]!==n)
            }          
        }
 
    return result
    result.push(n)
}