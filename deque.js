class DoublyNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class Deque {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addFront(value) {
      const newNode = new DoublyNode(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    addBack(value) {
      const newNode = new DoublyNode(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    removeFront() {
      if (this.isEmpty()) throw new Error("Deque is empty. Cannot remove from front.");
      const value = this.head.value;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      return value;
    }
  
    removeBack() {
      if (this.isEmpty()) throw new Error("Deque is empty. Cannot remove from back.");
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      return value;
    }
  
    peekFront() {
      if (this.isEmpty()) throw new Error("Deque is empty. Cannot peek front.");
      return this.head.value;
    }
  
    peekBack() {
      if (this.isEmpty()) throw new Error("Deque is empty. Cannot peek back.");
      return this.tail.value;
    }
  
    isEmpty() {
      return this.head === null;
    }
  }
  
  module.exports = Deque;