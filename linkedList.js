// constructor classes

class LinkedList {
    constructor(head = null,tail = null){
        this.head = head;
        this.tail = tail;
    }

    append(value) {

    }
};

class Node {
    constructor(value,nextNode = null) {
       this.value = value;
    this.nextNode = nextNode;
    };
};


//creating a linkedlist 
let newLinkedList = new LinkedList();
console.log(newLinkedList);


