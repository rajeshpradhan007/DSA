"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");

let list = new LinkedList();
for (let i = 0; i < 10; i++) {
    list = list.insertAtHead(i);
}
list.insertAtTail(23);
list.printList(); //will print the list
