//returns the data of the current node in a linkedlist
function getName(node){
return node.name
}

//Returns the head of the linkedlist
function headNode(linkedList, collection){
 return collection[linkedList]
}

//iterates over the linkedlist and returns the next node
function next(head, collection){
     let node = head
    while(node !== null){
        node = node.next
        return collection[node]
    }
}
// iterates over the linkedlist and returns the node at the index
function nodeAt(index,linkedList,collection){
    let count = 0
    let node = collection[linkedList]
    while(node !== null){
        if(count === index){
            return node
        }
            node = collection[node.next]
            count ++
    }
}

//returns the address of the node in the linkedlist

function addressAt(index,linkedList, collection){
    console.log(linkedList)
    let node = collection[linkedList]
    let prev = linkedList
    let count = 0
    while( node !== null){
        if( count === index){
            return prev
        }
        prev = node.next
        node = collection[node.next]
        count ++
    }
}

//returns the index of the provided note

function indexAt(node, collection, linkedList){
    let count = 0
    let current = collection[linkedList]
    while(current !== null){
        if( current === node){
            return count
        }
        current = collection[current.next]
        count ++
    }
}

//sets the next property of the inserted node
function insertNodeAt(index, property, head, linkedList){
    let count = 1
    let current = linkedList[head]
    while(current !== null) {
        let saveNode = current.next
        if( count === index) {
            current.next = property
            linkedList[property].next = saveNode
            break;
        }
        current = linkedList[saveNode]
        count ++
    }
}

//sets the next property of previous node to deleted node

function deleteNodeAt(index, head, linkedList){
    let count = 1
    let current = linkedList[head]
    while(current !== null) {
        if(count === index){
            current.next = linkedList[current.next].next
            break
        }
        current = linkedList[current.next]
        count ++
    }
}