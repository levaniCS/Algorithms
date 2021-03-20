function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]))


// my solution
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
   
    let left = 0;
    let innerLeft = 1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[left] === arr[innerLeft]) {
           ++innerLeft;
        } else {
            ++left;
            arr[left] = arr[innerLeft];
            ++innerLeft;
        }
    }

    return left;

}
