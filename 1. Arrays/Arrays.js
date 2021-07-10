class Array {
  constructor() {
    this.length = 0; // Initialize the length of the array
    this.data = {}; // Initialize the data object
  }

  get(index) {
    return this.data[index]; // Returns the item at the given index
  }

  push(item) {
    this.data[this.length] = item; // Append the item to the end of the array
    this.length++; // Increment the length of the array
    return this.length;
  }

  pop() {
    let lastItem = this.data[this.length - 1]; // Get the last item in the array
    delete this.data[this.length - 1]; // Delete the last item from the array
    this.length--; // Decrement the length of the array
    return lastItem;
  }

  delete(index) {
    item = this.data[index]; // Get the item to be deleted
    this.shiftItems(index); // Shift item to the left of the deleted item
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]; // Copy values from i+1 to i
    }
    delete this.data[this.length - 1]; // Delete the last item in the array
    this.length--; // Decrement the length of the array
  }
}

const myArray = new Array();
myArray.push(2);
myArray.push("hello");
myArray.push("hola");
myArray.get(2); // Returns 'hola'
myArray.pop();
myArray.get(2); // Returns undefined
myArray.get(1); // Returns 'hello'
