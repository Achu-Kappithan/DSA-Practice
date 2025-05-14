
class stack {
    constructor(){
        this.item = []
    }

    push(value){
        this.item.push( value)
    }

    pop(){
        this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    display(){
        if(this.item.length == 0){
            return "stack is empty"
        }
        let output =[]
        for(let i =0 ; i<this.item.length; i++){
            output.push(this.item[i])
        }
        console.log(output)
        return
    }
}

let a = new stack ()

console.log(a)
a.push(10)
a.push(100)
a.push(1000)
a.display()


// ===================================  reverse a string using stack   ==============================================

function reverse(str){
    let string= str.split("")
    let stack = []

    for(let val of string){
        stack.push(val)
    }
    let ans =""
    while(stack.length){
        ans+=stack.pop()
    }

    return ans

}

console.log(reverse("abcdefg"))


//==========================  check the word is palindrome  ==================================

let str = "malayalam"

function palindrome(str){
    let stack =[]

    for( let val of str){
        stack.push(val)
    }
    
    for(let val of str){
        if(val !== stack.pop()){
            return false
        }
    }
    return true
}
console.log(palindrome(str))


//===================================== <<<<<<<<<<<   Valid Parenthesis  >>>>>>>>>>  ====================================


let Parenthesis = "([]{()}})"

function validParenthesis(str){
    let splited = str.split("")
    let stack = []

    for(let val of splited){
        let curr = val

        if(curr =="(" || curr == "{" || curr == "["){
            stack.push(curr)
        }else if(curr ==")" || curr == "}" || curr == "]"){
            if(stack.lengt == 0 ){
                return false
            }
            let popped = stack.pop()

            if(curr ==")" && popped !== "(" ||
               curr =="]" && popped !== "[" ||
               curr =="}" && popped !== "{" 
            ){
                return false
            }
        }
    }
    return stack.length == 0
}

console.log("valid Parenthesis : ",validParenthesis(Parenthesis))
