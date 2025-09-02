console.log("Linkedlist Implementation")

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next=next
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0
    }
    // Insert a new node at end of the linkedlist.
    insertAtLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        } else{
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Inserting the value at the beginning of the linkedlist
    insertAtFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        this.size++;
    }

    // deletes the first occurance of the given data
    deleteFirstOccurance(data){
        if(!this.head){
            return;
        }
        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            if(current.next.data === data){
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // find the first occurance of a node with given data
    search(data){
        let current = this.head;
        while(current !== null){
            if(current.data === data){
                console.log(data)
                return true
            }
        }
        return false
    }

    // displayes the elements of the linked list
    print(){
        let current = this.head;
        const elements = [];
        while(current !== null){
            elements.push(current.data)
            current = current.next
        }
        console.log(elements.join(' -> '))
    }

    // insert at index
    insertAtIndex(data, index){

        if(index > 0  && index > this.size){
            return;
        }

        if(index === 0){
            this.insertAtFirst(data)
            return;
        }

        const node = new Node(data)
        let cur, pre;

        cur = this.head;

        let count = 0;
        while(count < index){
            pre = cur;
            count++;
            cur = cur.next;
        }
        node.next = cur;
        pre.next = node;
        this.size++;
    }

    getAtIndex(index){
        let current =this.head;
        let count =0;
        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null
    }

    removeAtIndex(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous, count=0;
        if(index ===0){
            this.head = current.next
        }else{
            while(count < index){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--;
    }

    clearList(){
        this.head = null;
        this.size =0;
    }

}

const list = new Linkedlist();
list.insertAtFirst(20)
list.insertAtFirst(30)
list.insertAtFirst(40)
list.insertAtLast(100);
list.deleteFirstOccurance(20)

console.log(list)
