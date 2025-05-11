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
        if(this.heap.length == 1) return this.heap.pop()

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

    //===========================================   CONVERT ARRY TO HEAP   ===========================================//

    convertion(arr){
        this.heap = arr;
        let n = arr.length

        for(let i = Math.floor((n/2)-1);i>=0; i--){
            this.bubbledown(i)
        }
        return this.heap
    }

    //===========================================   SORT HEAP   ===========================================//


    sort(){
        let sort =[]
        while(this.heap.length){
            sort.push(this.remove())
        }
        this.heap = sort
    }


}


let myheap = new heap()
myheap.insert(80)
myheap.insert(40)
myheap.insert(10)
myheap.insert(90)
myheap.convertion([8,6,4,9,7,3,2,1])
myheap.sort()
console.log(myheap)




// {{{{{{{{{{{{<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        HEAP SORT       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>}}}}}}}}}}}}

let arr = [5,8,9,3,1,4,15,40,0]

function heapsort(arr){


    let n = arr.length

    for(let i =Math.floor((n/2)-1);i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1; i>0  ; i-- ){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        heapify(arr,i,0)
    }
    return arr
}

function heapify(arr,n,i){
    let left = i*2+1
    let right = i*2+2
    let min = i

    if(left < n && arr[left] > arr[min]){
        min = left
    }

    if(right < n && arr[right] > arr[min]){
        min = right
    }

    if(i !== min){
        [arr[i],arr[min]] = [arr[min],arr[i]]
        heapify(arr,n,min)
    }
}

console.log(heapsort(arr))


// {{{{{{{{{{{{<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        ADD TWO HEAP       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>}}}}}}}}}}}}

let heap1 = [9,7,5,3,1]
let heap2 = [2,4,6,8,0]

function mergeheap(heap1,heap2){
    let merged = [...heap1,...heap2]
    let n = merged.length

    for(let i =Math.floor((n/2)-1); i>=0; i--){
        heapifing(merged,i)
    }

    return merged
}

function heapifing(arr,i){
    let left = i*2+1
    let right = i*2+2
    let min = i
    let n = arr.length

    if(left < n && arr[left] < arr[min]){
        min = left
    }

    if(right < n && arr[right] < arr[min]){
        min = right
    }

    if(i !== min){
        [arr[i],arr[min]] = [arr[min],arr[i]]
        heapifing(arr,min)
    }
}

console.log(mergeheap(heap1,heap2))