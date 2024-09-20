const LinkedList = require('./linkedList');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element) {
    this.list.append(element);
  }

  dequeue() {
    if (this.list.isEmpty()) {
      throw new Error("Queue is empty. Cannot dequeue.");
    }
    return this.list.remove();
  }

  peek() {
    if (this.list.isEmpty()) {
      throw new Error("Queue is empty. Cannot peek.");
    }
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

module.exports = Queue;