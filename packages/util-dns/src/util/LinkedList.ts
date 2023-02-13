/**
 * LinkedList implementation that implements {@link DnsCacheEntryCollection}
 * for {@link HostEntry}.
 * Can use any {@link NodeT} that conforms to the {@link LinkedListNode} interface.
 * @internal
 */
export class LinkedList<NodeT extends LinkedListNode<NodeT>> {
  /**
   * Length of the list
   */
  public length = 0;
  /**
   * Head of the list
   */
  public head: NodeT | undefined;
  /**
   * Tail of the list
   */
  public tail: NodeT | undefined;

  /**
   * Removes and appends the first node to the tail, e.g. 2 cycles:
   * [A, B, C] -> [B, C, A] -> [C, A, B]
   * @param collection optional collection to append the cycled element to
   * @returns element cycled
   */
  public cycle(collection?: LinkedList<NodeT>): NodeT {
    if (this.length === 0 || this.head === undefined) {
      throw new Error(`Can not cycle an empty linked list`);
    }
    const element = this.remove(this.head);
    (collection || this).append(element);
    return element;
  }

  /**
   * Adds element to the end of the list.
   * @param node element to add
   */
  public append(node: NodeT): void {
    if (this.length === 0) {
      this.head = node;
      // Disconnect node's prev chain
      node.prev = undefined;
    } else {
      this.tail!.next = node;
      // Disconnect node's prev chain
      node.prev = this.tail;
    }
    this.length += 1;
    // Use node's tail
    let currentTail = node;
    while (currentTail.next !== undefined) {
      currentTail = currentTail.next!;
      this.length += 1;
    }
    this.tail = currentTail;
  }

  /**
   * Removes a node from a linked list
   * @param node node to remove
   * @returns the removed node
   */
  public remove(node: NodeT): NodeT {
    if (this.length === 0) {
      throw new Error(`Can not remove node from an empty linked list`);
    }
    this.length -= 1;
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    if (node.next !== undefined) {
      node.next.prev = node.prev;
    }
    if (node.prev !== undefined) {
      node.prev.next = node.next;
    }
    node.prev = undefined;
    node.next = undefined;
    return node;
  }

  /**
   * Iterator that keeps the next reference in case the element is
   * removed during iteration.
   */
  *[Symbol.iterator](): Iterator<NodeT> {
    let current = this.head;
    while (current !== undefined) {
      const next = current.next;
      yield current;
      current = next;
    }
  }
}

/**
 * LinkedListNode interface, which any object that could have
 * prev and next can match.
 * @internal
 */
export interface LinkedListNode<NodeT> {
  prev: NodeT | undefined;
  next: NodeT | undefined;
}
