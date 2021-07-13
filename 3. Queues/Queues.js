class Queue {
  constructor() {
    this.head = 0; // Initialize the head to 0
    this.data = []; // Initialize the data array
  }

  peek() {
    if ((this, head < 0 || this.head >= this.data.length)) {
      return null; // Returns null if the queue is empty
    }

    return this.data[this.head]; // Return the item at the head of the queue
  }

  enqueue(item) {
    this.data.push(item); // Push the item to the end of the array
  }

  dequeue() {
    if ((this, head < 0 || this.head >= this.data.length)) {
      return null; // Returns null if the queue is empty
    }

    let dequeuedItem = this.data[this.head]; // Copy the item at the head of the queue
    this.head++; // Increment the head

    return dequeuedItem; // Return the dequeued item
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.peek(); // Returns 1
queue.dequeue(); // Returns 1
queue.peek(); // Returns 2
