import { LinkedList, LinkedListNode } from "./LinkedList";

class TestNode implements LinkedListNode<TestNode> {
  value: string;
  prev: TestNode | undefined;
  next: TestNode | undefined;
  constructor(value: string) {
    this.value = value;
  }
}

describe(LinkedList.name, () => {
  let linkedList: LinkedList<TestNode>;

  beforeEach(() => {
    linkedList = new LinkedList<TestNode>();
  });

  describe("append(element)", () => {
    it("should have correct head and tail after 1 append", () => {
      linkedList.append(new TestNode("first"));
      expect(linkedList.length).toEqual(1);
      expect(linkedList.head!.value).toEqual("first");
      expect(linkedList.tail!.value).toEqual("first");
    });

    it("should have correct head and tail after multiple appends", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      expect(linkedList.length).toEqual(3);
      expect(linkedList.head!.value).toEqual("first");
      expect(linkedList.tail!.value).toEqual("third");
    });

    it("should have correct head and tail after appending an existing list to an empty list", () => {
      const toAppendLinkedList = new LinkedList<TestNode>();
      toAppendLinkedList.append(new TestNode("first"));
      toAppendLinkedList.append(new TestNode("second"));
      toAppendLinkedList.append(new TestNode("third"));
      linkedList.append(toAppendLinkedList.head!);
      expect(linkedList.length).toEqual(3);
      expect(linkedList.head!.value).toEqual("first");
      expect(linkedList.tail!.value).toEqual("third");
    });

    it("should have correct head and tail after appending an existing list to an non-empty list", () => {
      const toAppendLinkedList = new LinkedList<TestNode>();
      toAppendLinkedList.append(new TestNode("first"));
      toAppendLinkedList.append(new TestNode("second"));
      toAppendLinkedList.append(new TestNode("third"));
      linkedList.append(new TestNode("pre-existing"));
      linkedList.append(toAppendLinkedList.head!);
      expect(linkedList.length).toEqual(4);
      expect(linkedList.head!.value).toEqual("pre-existing");
      expect(linkedList.tail!.value).toEqual("third");
    });
  });

  describe("cycle(collection?)", () => {
    it("should have correct head and tail after cycle", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      linkedList.cycle();
      expect(linkedList.length).toEqual(3);
      expect(linkedList.head!.value).toEqual("second");
      expect(linkedList.tail!.value).toEqual("first");
    });

    it("should throw error when cycling an empty linked list", () => {
      expect(() => linkedList.cycle()).toThrowError(`Can not cycle an empty linked list`);
    });

    it("should have correct head and tail after cycle to another collection", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      const toCycleToLinkedList = new LinkedList<TestNode>();
      toCycleToLinkedList.append(new TestNode("other list"));
      linkedList.cycle(toCycleToLinkedList);
      expect(linkedList.length).toEqual(2);
      expect(linkedList.head!.value).toEqual("second");
      expect(linkedList.tail!.value).toEqual("third");
      expect(toCycleToLinkedList.length).toEqual(2);
      expect(toCycleToLinkedList.head!.value).toEqual("other list");
      expect(toCycleToLinkedList.tail!.value).toEqual("first");
    });
  });

  describe("remove(node)", () => {
    it("should throw error when removing from an empty linked list", () => {
      expect(() => linkedList.remove(new TestNode("first"))).toThrowError(
        `Can not remove node from an empty linked list`
      );
    });

    it("should have correct length and head and tail after removing node from linked list", () => {
      const nodeToRemove = new TestNode("second");
      linkedList.append(new TestNode("first"));
      linkedList.append(nodeToRemove);
      linkedList.append(new TestNode("third"));
      const removedNode = linkedList.remove(nodeToRemove);
      expect(linkedList.length).toEqual(2);
      expect(linkedList.head!.value).toEqual("first");
      expect(linkedList.tail!.value).toEqual("third");
      expect(removedNode.prev).toBeUndefined();
      expect(removedNode.next).toBeUndefined();
    });
  });

  describe("iteration", () => {
    it("should be able to iterate an empty linked list", () => {
      for (const _ of linkedList) {
      }
    });

    it("should be able to iterate a linked list", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      for (const _ of linkedList) {
      }
    });

    it("should be able to iterate a linked list with a new append", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      let added = false;
      let count = 0;
      for (const _ of linkedList) {
        count += 1;
        if (!added) {
          linkedList.append(new TestNode("fourth"));
          added = true;
        }
      }
      expect(count).toEqual(4);
      expect(linkedList.length).toEqual(4);
      expect(linkedList.head!.value).toEqual("first");
      expect(linkedList.tail!.value).toEqual("fourth");
    });

    it("should be able to iterate a linked list with removals", () => {
      linkedList.append(new TestNode("first"));
      linkedList.append(new TestNode("second"));
      linkedList.append(new TestNode("third"));
      linkedList.append(new TestNode("fourth"));
      linkedList.append(new TestNode("fifth"));
      let count = 0;
      for (const node of linkedList) {
        if (count % 2 === 0) {
          linkedList.remove(node);
        }
        count += 1;
      }
      expect(count).toEqual(5);
      expect(linkedList.length).toEqual(2);
      expect(linkedList.head!.value).toEqual("second");
      expect(linkedList.tail!.value).toEqual("fourth");
    });
  });
});
