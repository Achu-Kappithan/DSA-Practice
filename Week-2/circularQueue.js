

class CircularQueue {
    constructor(limit){
        this.items = new Array(limit)
        this.limit = limit
        this.currentlength = 0
        this.rear = -1
        this.front = -1
    }

    enqueue(value){
        if(this.limit == this.currentlength){
            return "no more space available"
        }else{
            this.rear = (this.rear + 1) % this.limit
            this.items[this.rear] = value
            this.currentlength ++

            if(this.front == -1){
                this.front = this.rear
            }
        }
    }


    dequeue(){
        if(this.currentlength ==0){
            return "que is empty"
        }
        let removed = this.items[this.front]
        this.items[this.front] =  null
        this.front = (this.front + 1) % this.limit
        this.currentlength --

        if(this.currentlength ==0){
            this.rear = -1
            this.front = -1
        }
    }

    display(){
        console.log(this.items)
    }


}


let roundedQue = new CircularQueue(3)
roundedQue.enqueue(5)
roundedQue.enqueue(8)
roundedQue.enqueue(10)
roundedQue.dequeue()
roundedQue.dequeue()
roundedQue.enqueue(25)

console.log(roundedQue)