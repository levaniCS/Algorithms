// Find if second array is same as first But squared
// values ( frequency matters, order doesn't )

//! Time Complexity o(n^2)
// function same(first, second) {
//     if(first.length !== second.length) {
//         return false
//     }

//     for(let i = 0; i < first.length; i++) {
//         let correctIndex = second.indexOf(first[i] ** 2)
//         if(correctIndex === -1) {
//             return false
//         }
//         second.splice(correctIndex, 1)
//     }
//     return true
// }

//! Time Complexity o(n)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

     for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

     for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1,2,3,4], [9,2,16,4])
