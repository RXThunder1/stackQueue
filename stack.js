const LinkedList = require('./linkedList');

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(element) {
    this.list.append(element);
  }

  pop() {
    if (this.list.isEmpty()) {
      throw new Error("Stack is empty. Cannot pop.");
    }

    let current = this.list.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
    } else {
      this.list.head = null;
    }
    return current.value;
  }

  peek() {
    if (this.list.isEmpty()) {
      throw new Error("Stack is empty. Cannot peek.");
    }

    let current = this.list.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

module.exports = Stack;