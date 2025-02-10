// constructor classes

class LinkedList {
    constructor(head = null){
        this.head = head;
    };

    append(value) {
        if(this.head===null) {
            let newNode = new Node(value);
            this.head = newNode;
            return;
        }
        let tempVariable = this.head;
            while(tempVariable !== null) {
                if(tempVariable.nextNode === null) {
                    let newNode = new Node(value);
                        tempVariable.nextNode = newNode;
                        return;
                }
                            tempVariable = tempVariable.nextNode;                                
            }     
        }
    };



class Node {
    constructor(value = null ,nextNode = null) {
            this.value = value;
            this.nextNode = nextNode;
    };
};


//creating/initializing a linkedlist 

let newLinkedList = new LinkedList();
console.log(newLinkedList);
newLinkedList.append("first node");
newLinkedList.append("second node");
newLinkedList.append("third node");
console.log(newLinkedList);

