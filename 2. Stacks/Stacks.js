class Stack {
  constructor() {
    this.top = -1; // Initialize top Ptr
    this.value = []; // Initialize value array
  }

  push(data) {
    this.top++; // Increments top Ptr
    this.value[this.top] = data; // Store paratmeter in the array
  }

  pop() {
    let topElement = this.value[this.top]; // Store top element
    this.top--; // Decrement top Ptr
    this.value.length--; // Decrement array length
    return topElement;
  }

  peek() {
    return this.value[this.top]; // Return top element
  }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(5);
stack.peek(); // Returns 5
stack.pop();
stack.peek(); // Returns 4
