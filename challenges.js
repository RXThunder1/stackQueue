const Stack = require('./stack');
const Queue = require('./queue');

// Browser back/forward system
class BrowserHistory {
  constructor() {
    this.backStack = new Stack();
    this.forwardStack = new Stack();
  }

  visit(url) {
    this.backStack.push(url);
    this.forwardStack = new Stack(); // Clear forward stack on new visit
  }

  back() {
    if (this.backStack.isEmpty()) return null;
    const currentUrl = this.backStack.pop();
    this.forwardStack.push(currentUrl);
    return this.backStack.peek();
  }

  forward() {
    if (this.forwardStack.isEmpty()) return null;
    const currentUrl = this.forwardStack.pop();
    this.backStack.push(currentUrl);
    return currentUrl;
  }
}

// String reversal using a stack
function reverseString(str) {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

// Balanced brackets
function areBracketsBalanced(str) {
  const stack = new Stack();
  const brackets = { '(': ')', '{': '}', '[': ']' };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.isEmpty() || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

// Josephus Survivor
function findSurvivor(n, k) {
  const queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue(); // Remove the kth person
  }
  return queue.dequeue(); // The survivor
}

module.exports = { BrowserHistory, reverseString, areBracketsBalanced, findSurvivor };