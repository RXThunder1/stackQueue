const Queue = require('./src/queue');
const Stack = require('./src/stack');
const Deque = require('./src/deque');
const { BrowserHistory, reverseString, areBracketsBalanced, findSurvivor } = require('./src/challenges');

// Example usage

// Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1

// Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Deque
const deque = new Deque();
deque.addFront(1);
deque.addBack(2);
console.log(deque.removeFront()); // 1

// Browser history
const history = new BrowserHistory();
history.visit('google.com');
history.visit('yahoo.com');
console.log(history.back()); // google.com

// String reversal
console.log(reverseString('hello')); // 'olleh'

// Balanced brackets
console.log(areBracketsBalanced('(hi [there])')); // true

// Josephus survivor
console.log(findSurvivor(10, 3)); // 4