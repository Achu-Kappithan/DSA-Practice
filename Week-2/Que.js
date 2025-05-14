
// class Queue {
//     constructor(){
//         this.value = []
//     }

//     enqueue(value){
//         this.value.push(value)
//     }

//     dequeue(value){
//         if(this.value.length ==0){
//             return "no value available"
//         }

//         let removed =this.value.shift()
//         return removed
//     }

//     peek(){
//         if(this.value.length ==0){
//             return "no values found"
//         }

//         return this.value[0]
//     }

//     display(){
//         if(this.value.length ==0){
//             return "no values found"
//         }
//         let  output = []
//         for (let val of this.value){
//             output.push(val)
//         }
//         console.log(output)
//     }


// }

// let que = new Queue()
// que.enqueue(50)
// que.enqueue(10)
// que.enqueue(80)

// que.display()
// que.dequeue()
// que.display()
// console.log(que)


//===================================  Implementatino of Que using Stack  ====================================


class Queue  {
    constructor(){
        this.stack1 =[]
        this.stack2 =[]
    }

    enqueue(val){
        this.stack1.push(val)
    }

    dequeue(){
        if(this.stack2.length ==0){
             while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
             }
        }

        if(this.stack2.length ==0){
            return "stack is empty"
        }
        return this.stack2.pop()
    }

}

let queue = new Queue()

queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)

console.log("Deque value : ",queue.dequeue())
console.log("Deque value : ",queue.dequeue())

