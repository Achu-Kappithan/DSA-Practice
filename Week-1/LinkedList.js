// ==================================== LINKED LIST ============================================\\

//---------------------------   IMPLEMENTATION -------------------------------

class node {
  constructor(data) {
    (this.value = data), (this.next = null);
  }
}

class linkedlist {
  constructor() {
    (this.head = null), (this.size = 0);
  }

//----------------------  preppend ------------------------//

  preppend(data) {
    let newnode = new node(data);
    newnode.next = this.head;
    this.head = newnode;
    this.size++;
  }

//----------------------  append  --------------------------//

  append(data){
    let newnode = new node(data)
    if(this.size == 0){
        this.head = newnode
    }else{
        let prev = this.head

        while(prev.next){
            prev = prev.next
        }
        prev.next = newnode
        this.size ++
    }
    
  }

//--------------------------  Display ----------------------------//

  display() {
    if (this.size == 0) {
      return "no values found";
    }
    let curr = this.head;
    let output = "";

    while (curr) {
      output += curr.value + "=>";
      curr = curr.next;
    }
    console.log(output);
  }

// ----------------------------  Insert  --------------------------//

  Insert(data ,index){
    let newnode = new node(data)
    if(index ==0){
        this.preppend(data)
    }else{
        let prev = this.head

        for(let i =0; i<index-1; i++){
            prev = prev.next
        }
        newnode.next = prev.next
        prev.next = newnode
        this.size ++

    }
  }

//-------------------------   Remove value using Index --------------//

    removebyindex(index){
        if(index >=this.size){
            return "no values found"
        }
        let removenode 
        if(index==0){
            removenode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0; i< index-1; i++){
                prev = prev.next
            }
            removenode = prev.next
            prev.next = prev.next.next
        }
        this.size --
        return removenode.value

    }

// ----------------------  Remove by Value ----------------
   
removebyvalue(value){
    if(this.size ==0){
        return "list is empty"
    }
    let removenode
    if(value == this.head.value){
        removenode = this.head
        this.head = removenode.next
        return removenode
    }else{
        let curr = this.head
        let prev 
        while(curr){
            if(curr.value == value){
                removenode = curr
                prev.next = removenode.next
                return removenode.value
            }
            prev = curr
            curr = curr.next
        }
        return "no value found"
    }
    this.size --
}

//-----------------------  Search  Value -------------------------------

search(value){
    if(this.size ==0){
        return "list is empty"
    }

    let curr = this.head
    while(curr){
        if(curr.value == value){
            return "value found  : "+value
        }
        curr = curr.next
    }
    return "value not found"
}

//------------------------  Reverse a Linked List ---------------------------

reverse(){

    let prev = null 
    let curr = this.head

    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

//------------------------------------  Remvove Mid Element ------------------------

removeMid(){
    if(this.size ==0){
        return "list is empty"
    }
    let fast = this.head
    let slow  = this.head
    let prev = null

    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = slow.next
    return slow.value
}

// -------------------------- add  value after a specfic value ------------------

addafterspecficvalue(element,newdata){
    let newnode = new node (newdata)

    let curr = this.head

    while(curr){
        if(curr.value == element){
            newnode.next = curr.next
            curr.next = newnode
            this.size ++
            return
        }
        curr = curr.next
    }
    return "no element found"
}

//----------------------  add element before a specific value ----------------------------------

addbeforespecificvalue(element,value){

    let newnode = new node(value)

    let curr =this.head
    let prev = this.head
    while(curr){
        if(curr.value == element ){
            newnode.next = curr
            prev.next = newnode
            this.size ++
            return
        }
        prev = curr
        curr = curr.next
    }
    return "value not found"
    
}

// =====================  Swapped first and last Element Using Stack  ========================

swappedfistandlast(){
    if(this.size ==0){
        return "list is empty"
    }
    let stack = []
    let curr = this.head
    let prev = null
    while(curr){
        stack.push(curr.value)
        prev = curr
        curr = curr.next
    }
    prev.value = this.head.value
    let newhead = stack.pop()
    this.head.value= newhead
}

//================================  Reverse LinkedList Using Stack  =========================================

ReverseusingStack(){
    if(this.size == 0){
        return "List is empty"
    }
    let stack = []
    let curr = this.head

    while(curr){
        stack.push(curr)
        curr = curr.next
    }
    
    let newhead = stack.pop()
    this.head = newhead
    curr = this.head

    while(stack.length){
        curr.next = stack.pop()
        curr = curr.next
    }
    curr.next = null
}

}


let a = new linkedlist();  
console.log(a);

a.preppend(10);
a.preppend(20);
a.append(100)
a.append(50)
a.preppend(12)
a.Insert(1,0)
a.Insert(5,1)
// console.log(a.removebyindex(5))
// console.log(a.removebyvalue(20))
console.log(a.search(100))
a.display();
console.log(a.removeMid())
a.addafterspecficvalue(10,70)
a.addbeforespecificvalue(100,90)
a.display()
// a.swappedfistandlast()
a.ReverseusingStack()
a.display()

// console.log(a);
