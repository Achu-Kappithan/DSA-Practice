//{{{{{{{{{{{{{{{{<<<<<   HEAP   >>>>>>>}}}}}}}}}}}}}}}}

//<<<<<<<<<<<<<<  MINHEAP  >>>>>>>>>>>>>.

class heap {
    constructor(){
        this.heap = []
    }

    getparent(i) {return Math.floor((i-1)/2)}

    getleft(i) {return i*2+1}

    getright(i) {return i*2 + 2}

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }



    //===========================================   INSERATION    ===========================================//

    insert(value){
        this.heap.push(value)
        this.bubbleup()
    } 

    bubbleup(index = this.heap.length-1){
        if(index <= 0 )return 
        let parent = this.getparent(index)

        if(this.heap[index] < this.heap[parent]){
            this.swap(index,parent)
            this.bubbleup(parent)
        }
    }

    //===========================================   DELETION   ===========================================//

    remove(){
        if(this.heap.length == 0 ) return 

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbledown()
        return min
    }

    bubbledown(index =0){
        let parent = this.getparent(index)
        let left = this.getleft(index)
        let right = this.getright(index)
        let min =  index
        let  n = this.heap.length

        if(left < n && this.heap[left] < this.heap[min]){
            min = left
        }

        if(right < n && this.heap[right] < this.heap[min]){
            min = right
        }

        if(min !== index){
            this.swap(index,min)
            this.bubbledown(min)
        }
    }

}


let myheap = new heap()
myheap.insert(80)
myheap.insert(40)
myheap.insert(10)
myheap.insert(90)
console.log(myheap)