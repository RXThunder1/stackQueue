class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    remove() {
      if (!this.head) return null;
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  
    isEmpty() {
      return this.head === null;
    }
  }
  
  module.exports = LinkedList;