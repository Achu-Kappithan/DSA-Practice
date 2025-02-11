

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
                que.push(neigh)
            }
        }
    }

    bfsall(){
        let visited = new Set()

        for(let neigh of this.root.keys()){
            this.bfs(neigh,visited)
        }
    }

    
}

let mygraph = new graph()
mygraph.addVertex(50)
mygraph.addVertex(70)
mygraph.addEdge(70,50)
mygraph.addEdge(30,60)
mygraph.dfsall()
console.log(mygraph)
mygraph.bfsall()