const LinkedList = require("../LinkedList");

let list = new LinkedList();

describe("Linked list", () => {
    test("should create linked list", () => {
        list.insertAtTail(0);
        expect(list.getListStr()).toBe("0 -> null");
        list.insertAtTail(1);
        expect(list.getListStr()).toBe("0 -> 1 -> null");
        list.insertAtTail(2);
        expect(list.getListStr()).toBe("0 -> 1 -> 2 -> null");
        list.insertAtTail(3);
        expect(list.getListStr()).toBe("0 -> 1 -> 2 -> 3 -> null");
    });
    test("should search", () => {
        expect(list.search(2)).toBe(true);
        expect(list.search(28)).toBe(false);
    });
    test("should delete", () => {
        list.deleteVal(2);
        expect(list.getListStr()).toBe("0 -> 1 -> 3 -> null");
    });
    test("should lenght", () => {
        expect(list.length()).toBe(3);
    });
});
describe("remove duplicate", () => {
    test("should remove duplicate", () => {
        let listObj = new LinkedList();
        listObj.insertAtTail(1);
        listObj.insertAtTail(1);
        listObj.insertAtTail(2);
        listObj.insertAtTail(3);
        listObj.insertAtTail(3);
        expect(listObj.getListStr()).toBe("1 -> 1 -> 2 -> 3 -> 3 -> null");
        listObj.removeDuplicateV1();
        expect(listObj.getListStr()).toBe("1 -> 2 -> 3 -> null");
    });
    test("should remove duplicate", () => {
        let listObj2 = new LinkedList();
        listObj2.insertAtTail(1);
        listObj2.insertAtTail(3);
        listObj2.insertAtTail(2);
        listObj2.insertAtTail(3);
        listObj2.insertAtTail(4);
        expect(listObj2.getListStr()).toBe("1 -> 3 -> 2 -> 3 -> 4 -> null");
        listObj2.removeDuplicateV2();
        expect(listObj2.getListStr()).toBe("1 -> 3 -> 2 -> 4 -> null");
    });
});
