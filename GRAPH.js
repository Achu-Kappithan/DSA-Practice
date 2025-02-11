

//{{{{{{{{{{{{{{{{{{{{{{{{{<<<<<<<      GRAPH     >>>>>>>>}}}}}}}}}}}}}}}}}}}}}}}}}

class graph {
    constructor(){
        this.root = new Map()
    }

    //==========================================     ADD VERTEX AND EDGES     ====================================================

    addVertex(vtr){
        let root = this.root
        if(!root.has(vtr)) {
            root.set(vtr,[])
        }
    }

    addEdge(vtr1,vtr2){
        let root = this.root
        if(!root.has(vtr1)) this.addVertex(vtr1)
        if(!root.has(vtr2)) this.addVertex(vtr2)

        this.root.get(vtr1).push(vtr2)
    }

    // ============================================   REMOVE VERTEX AND EDGES   ====================================================

    removeVertex(vtr){
        if(!vtr) return 

        this.root.delete(vtr)

        for(let [neigh,child] of this.root.entries()){
            this.root.set(neigh,child.filter((val)=> val !== vtr))
        }
    }

    removeEdge(vtr1,vtr2){
        if(!vtr1) return 

        this.root.set(vtr1,
        this.root.get(vtr1).filter((val)=> val !== vtr2))
    }

    //===============================================     DFS      =================================================================

    dfs(start, visited = new Set()){
        if(visited.has(start)) return 

        console.log(start)
        visited.add(start)

        for(let neigh of this.root.get(start)){
            this.dfs(neigh,visited)
        }
    }

    dfsall(){
        let visited = new Set()

        for(let neigh of this.root.keys()){
            this.dfs(neigh ,visited)
        }
    }

    //=====================================================      BFS      =============================================================

    bfs(start,visited = new Set()){
        if(visited.has(start)) return 
        let que = []
        que.push(start)

        while(que.length){
            let curr = que.shift()
            console.log(curr)
            visited.add(curr)
            for(let neigh of this.root.get(curr)){
                if(!visited.has(neigh)){
                    que.push(neigh)
                }
            }
        }
    }

    bfsall(){
        let visited = new Set()

        for(let neigh of this.root.keys()){
            this.bfs(neigh,visited)
        }
    }

     //=====================================================    CLONE GRAPH    =======================================================


    clonegraph(){
        let clone = new graph()

        for(let key of this.root.keys()){
            clone.addVertex(key)
        }

        for (let [key,values] of this.root.entries()){
            for(let val of values){
                clone.addEdge(key,val)
            }
        }
        return clone
    }


    //=====================================================   CYCLEIC DETACTION   ===================================================

    cyclicDetaction(){
        let visited = new Set()
        let recstack = new Set()

        let dfs = (root)=>{
            if(recstack.has(root)) return true
            if(visited.has(root)) return false

            recstack.add(root)
            visited.add (root)

            for(let neigh of this.root.get(root)){
                if(dfs(neigh)) return true
            }
            recstack.delete(root)
            return false

        }

        for(let neigh of this.root.keys()){
            if(!visited.has(neigh)){
                if(dfs(neigh)) return true
            }
        }

        return false
    }

    //=====================================================   SHORTEST PATH   ===================================================


    shortestpat(start,end){
        if(!this.root.has(start)  ||  !this.root.has(end)) return  -1

        let que = [[start,0]]
        let visited = new Set()
        visited.add (start)

        while(que.length){
            let [curr,distance]  =que.shift()

            if(curr == end ){
                return distance
            }

            for(let neigh of this.root.get(curr)){
                if(!visited.has(neigh)){
                    que.push([neigh,distance+1])
                }
            }
        }
        return -1

    }

}

let mygraph = new graph()
mygraph.addVertex(50)
mygraph.addVertex(70)
mygraph.addEdge(70,60)
mygraph.addEdge(50,70)
mygraph.addEdge(60,30)
mygraph.dfsall()
console.log(mygraph)
mygraph.bfsall()
console.log(mygraph.clonegraph())
console.log(mygraph.cyclicDetaction())
console.log(mygraph.shortestpat(50,30))