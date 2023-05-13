"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");

let list = new LinkedList();
for (let i = 0; i < 10; i++) {
    list = list.insertAtHead(i);
}
list.insertAtTail(23);
//list.printList(); //will print the list
LinkedList.prototype.removeDuplicate = function () {
    console.log(this);
    let cur = this.head.nextElement;
    let prev = this.head;

    // while(cur!=null){
    //     if(cur.data==prev.data){
    //         prev.nextElement=cur.next
    //     }
    // }
};

list.removeDuplicate();
