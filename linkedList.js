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


        prepend(value) {
            const newNode = new Node(value);
                if(this.head === null) {
                    this.head = newNode;
                }   

                else {
                    newNode.nextNode = this.head;
                    this.head = newNode;
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
newLinkedList.prepend("prepended value");

console.log(newLinkedList);

