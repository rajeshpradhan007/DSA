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
