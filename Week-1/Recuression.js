//=============================== Print n number in Desending order ====================================

// function print (n){
//     if(n<1){
//         return n
//     }
//     console.log(n)
//     print(n-1)
// }

// print(10)


// ================================== Print n numbers in asending order =====================================


// function printase(num){
//     if(num<1){
//         return num
//     }
//     printase(num-1)
//     console.log(num)
// }

// printase(10)


// ====================================== Sum of n Varibles ===================================================

// function sum (num){
//     if(num <= 0){
//         return num
//     }
//     return num +sum(num-1)
// }

// console.log(sum(10))


//=============================================  Febinocci  =====================================================

// function Febinocci(num){
//     if(num < 2){
//         return num
//     }
//     return Febinocci(num-1) + Febinocci(num-2)
// }

// console.log(Febinocci(8))


//=====================================================  Paliyandrome   ==================================================

// function Paliyandrome (str){
//     if(str.length ==0){
//         return true
//     }
//     if(str[0]!== str[str.length-1]){
//         return false
//     }
//     return Paliyandrome(str.slice(1,-1))
// }

// console.log(Paliyandrome("malayalam"))


// ======================================== find the Sum of an Array  ===================================================

// let arr = [1,2,3,4,5,6,7,8,9]

// function sumofarray (arr,sum=0){
//     if(arr.length == 0){
//         return 0;
//     }
//     return arr[0]+ sumofarray(arr.slice(1))
// }

// console.log(sumofarray(arr))


//=============================================  Factorial  of a number  ===========================================

// function Factorial (n){
//     if(n<=1){
//         return n
//     }
//     return n* Factorial(n-1)
// }

// console.log(Factorial(5))



//=====================================  Multiplay Array Elements  ===============================================

// let arr = [1,2,3,4,5,6]
// function Multiplay(arr){
//     if(arr.length < 1){
//         return 1
//     }

//     return arr[0]*Multiplay(arr.slice(1))
// }

// console.log(Multiplay(arr))



// ==================================  prini number within the limit =============================================


// function print(start,end){
//     if(start>end){
//         return
//     }
//     console.log(start)
//     return print(start+1,end)
// }

// print(10,20)


// =====================================   Reverese a String   =====================================================

// let str = "abcd"
// function reverse(str,rev=""){
//     if(str.length < 1){
//         return rev
//     }
//     return reverse(str.slice(1))+str[0]
// }

// console.log(reverse(str))


// =====================================  check Primenumber =================================

// function checkPrime(num,div =2){
//     if(num <=1 ){
//         return false
//     }

//     if(num == div){
//         return true
//     }

//     if(num% div ==0){
//         return false
//     }

//     return checkPrime(num,div+1)
// }
// console.log(checkPrime(9))