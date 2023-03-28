"use strict";
const Node = require("./Node.js");

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }

    //Insertion At Head
    insertAtHead(newData) {
        let tempNode = new Node(newData);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this; //returning the updated list
    }
    insertAtTail(newData) {
        let node = new Node(newData);
        if (this.head == null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.nextElement != null) {
                temp = temp.nextElement;
            }
            temp.nextElement = node;
        }
        return this; //returning the updated list
    }

    search(value) {
        let temp = this.head;
        while (temp != null) {
            if (temp.data == value) return true;
            temp = temp.nextElement;
        }
        return false;
    }
    deleteVal(value) {
        let temp = this.head.nextElement;
        let prev = this.head;
        while (temp != null) {
            if (temp.data == value) {
                prev.nextElement = temp.nextElement;
                return true;
            }
            prev = temp;
            temp = temp.nextElement;
        }
        return false;
    }
    length() {
        let temp = this.head;
        let i = 0;
        while (temp != null) {
            i++;
            temp = temp.nextElement;
        }
        return i;
    }

    isEmpty() {
        return this.head == null;
    }

    //function to print the linked list
    printList() {
        if (this.isEmpty()) {
            return "Empty List";
        } else {
            let temp = this.head;
            let tmpArr = [this.head.data];
            while (temp != null) {
                tmpArr.push(temp.data);
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.nextElement;
            }
            return tmpArr.join(" -> ");
        }
    }

    getHead() {
        return this.head;
    }
    getListStr() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return "null";
        } else {
            let st = "";
            let temp = this.head;
            while (temp != null) {
                st += String(temp.data);
                st += " -> ";
                temp = temp.nextElement;
            }
            st += "null";
            return st;
        }
    }
};
