# Stacks and Queues Exercise

This repository contains implementations of basic data structures: Stack, Queue, and Deque, along with several associated challenges. Each data structure is implemented using both a linked list and an array. The challenges demonstrate practical applications of these data structures.

## Data Structures

### Queue

- **Methods**:
  - `enqueue(element)`: Add an element to the end of the queue.
  - `dequeue()`: Remove and return the element from the front of the queue.
  - `peek()`: Return the front element without removing it.
  - `isEmpty()`: Check if the queue is empty.

### Stack

- **Methods**:
  - `push(element)`: Add an element to the top of the stack.
  - `pop()`: Remove and return the top element of the stack.
  - `peek()`: Return the top element without removing it.
  - `isEmpty()`: Check if the stack is empty.

### Deque

- **Methods**:
  - `addFront(value)`: Add an element to the front of the deque.
  - `addBack(value)`: Add an element to the back of the deque.
  - `removeFront()`: Remove and return the front element.
  - `removeBack()`: Remove and return the back element.
  - `peekFront()`: Return the front element without removing it.
  - `peekBack()`: Return the back element without removing it.
  - `isEmpty()`: Check if the deque is empty.

## Challenges

### 1. Browser History

Implemented using two stacks to navigate back and forth through websites.

### 2. String Reversal

A function that reverses a string using a stack.

### 3. Balanced Brackets

A function that checks if a string of brackets is balanced.

### 4. Josephus Survivor

An implementation of the Josephus problem to find the last remaining person after iterative removals.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd stackQueue