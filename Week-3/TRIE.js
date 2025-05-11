
//{{{{{{{{{{{{{{{{{{<<<<<<<<<<<<<<<<       TRIE       >>>>>>>>>>>>>>>>}}}}}}}}}}}}}}}}}}

class trienode{
    constructor(){
        this.child = {}
        this.end = false
    }
}

class trie{
    constructor(){
        this.root = new trienode()
    }

    //=================================================   INSERT NEW WORD  =====================================================

    insert(word){
        let root = this.root

        for(let char of word){
            if(!root.child[char]){
                root.child[char]  = new trienode()
            }
            root = root.child[char]
        }
        root.end = true
    }

    //==============================================    SEARCH  WORD    ========================================================

    search(word){
        let root = this.root;
        for(let char of word){
            if(!root.child[char]) return false
            root = root.child[char]
        }
        return root.end
    }

    // ============================================  REMOVE  WORD    =======================================================

    remove(word){
        let root = this.root

        let removenode = (curr,word,index)=>{
            if(!curr ) return false

            if(word.length == index){
                if(curr.end){
                    curr.end = false
                }
                return Object.keys(curr.child).length == 0
            }

            let char  = word[index]

            if(removenode(curr.child[char],word,index+1)){
                delete (curr.child[char])
                return Object.keys(curr.child).length ==0  && !curr.end
            }
            return false
        }
        removenode(root,word,0)
    }

    // ==============================================   AUTO COMPLETION  ====================================================

    autocompleteiton(prefix){
        let root = this.root
        let suggestion =[]

        for(let char of prefix){
            if(!root.child[char]) return []
            root = root.child[char]
        }

        let  getword = (root,word)=>{
            if(root.end){
                suggestion.push(word)
            }

            for(let [key,value] of Object.entries(root.child)){
                getword(value,word+key)
            }
        }
        getword(root,prefix)
        return suggestion
    }

    // ===================================================   PREFIX    CHECK  ===============================================

    prefixcheck(prefix){
        let root = this.root
        for(let char of prefix){
            if(!root.child[char]) return false
            root = root.child[char]
        }
        return true
    }
}

let mytrie = new trie()
mytrie.insert("amal")
mytrie.insert("akhil")
console.log(mytrie.search("am"))
console.log(mytrie.autocompleteiton("a"))
console.log(mytrie.prefixcheck("ama"))
console.log(mytrie)