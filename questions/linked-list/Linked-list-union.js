"use strict";
const LinkedList = require("./LinkedList.js");
const Node = require("./Node.js");

let list1 = new LinkedList();
list1.insertAtTail(10);
list1.insertAtTail(20);
list1.insertAtTail(80);
list1.insertAtTail(60);

let list2 = new LinkedList();
list2.insertAtTail(15);
list2.insertAtTail(20);
list2.insertAtTail(30);
list2.insertAtTail(60);
list2.insertAtTail(45);

//console.log(list2.getListStr());
//console.log(list1.getListStr());

LinkedList.prototype.union = function (list1, list2) {
    let tmp = list1.head;
    let tmp2 = list2.head;
    let visited = new Set();
    while (tmp.nextElement != null) {
        tmp = tmp.nextElement;
    }
    tmp.nextElement = tmp2;
};

list1.union(list1, list2);
console.log(list1.getListStr());
list1.removeDuplicateV2();
console.log(list1.getListStr());
