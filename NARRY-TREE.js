// {{{{{{{{{{{{{{{{{{{{      NARRAY-TREE      }}}}}}}}}}}}}}}}}}}}

//=========================  CLASS IMPLEMENTATION  ================================

class node {
    constructor(value){
        this.value = value
        this.child = []
    }
}

class Narry_node {
    constructor(value){
        this.root = new node(value)
    }

    //=========================  INSERT NEWVALUE TO THE TREE  ==============================

    findnode(node,value){
        if(!node) return
        if(node.value == value){
            return node
        }
        for(let child of node.child){
            let found =this.findnode(child,value)
            if(found ) return found
        }
        return null
    }

    addedge(parentval,childval){
        let parenntnode = this.findnode(this.root,parentval)

        if(parenntnode){
            parenntnode.child.push(new node(childval))
        }else{
            console.log("not found")
        }
    }

    //=================================   DFS  &  BFS  TRAVERSEL ===========================================

    dfs(root = this.root){
        if(!root) return 
        console.log(root.value)

        for(let child of root.child){
            this.dfs(child)
        }
    }

    bfs(root = this.root){
        if(!root ) return 
        let que = []
        que.push(root)

        while(que.length){
            let curr = que.shift()
            console.log(curr.value)
            que.push(...curr.child)
        }
    }

}


let myarray = new Narry_node(50)
myarray.addedge(50,10)
myarray.addedge(10,40)
myarray.dfs()
myarray.bfs()
console.log(myarray)