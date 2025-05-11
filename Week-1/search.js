
//==========================================  Lenear Search  =================================================

// let arr = [1,2,3,4,5,6,7,8,9]

// function serch(arr,target){
//     for(let i =0 ; i< arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(serch(arr,78))

// ======================================  Binary Search  =================================================

// let arr = [1,2,3,4,5,6,7,8,9]

// function binaryserarch(arr,target){
//     let left = 0
//     let right = arr.length-1

//     while(left <= right){
//         let mid = Math.floor((left + right)/2)

//         if(arr[mid] == target ){
//             return mid
//         }else if(arr[mid] <target){
//             left = mid+1
//         }else {
//             right = mid-1
//         }
//     }
//     return -1
// }

// console.log(binaryserarch(arr,5))


// =================================== Recuressive Binary Search  ===================================================

let arr =[1,2,3,4,5,6,7,8,9]

function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){

    if(left> right ){
        return -1
    }

    let  mid = Math.floor((left + right)/2)

    if(arr[mid] == target){
        return mid
    }

    if(arr[mid] < target){
        return search(arr,target,mid+1,right)
    }else{
        return search(arr,target,left,mid-1)
    }
}

console.log(binarySearch(arr,89))
