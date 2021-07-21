class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(data) {
    const node = new Node(data); // Initializing a new node

    if (this.head === null) {
      // If the node is first node, then assign it to head
      this.head = node;
    } else {
      // Loop starting from head to the last node
      // and assign the new node to the pointer of last node.
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++; // Increment Linked List length
  }

  itemAt(index) {
    let current = this.head;
    let counter = 0;
    // Incrementing the counter until desired index is reached
    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current.data;
  }

  size() {
    return this.length;
  }

  remove(index) {
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let counter = 0;

      while (counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }

      previous.next = current.next;
      this.length--;
    }
  }
}

const list = new LinkedList();
list.push(100);
list.push(200);
list.push(300);

for (i = 0; i < list.size(); i++) {
  console.log("node index = ", i, " has value = ", list.itemAt(i));
}
// Returns:
// node index =  0  has value =  100
// node index =  1  has value =  200
// node index =  2  has value =  300

list.remove(1);

for (i = 0; i < list.size(); i++) {
  console.log("node index = ", i, " has value = ", list.itemAt(i));
}
// Returns:
// node index =  0  has value =  100
// node index =  1  has value =  300
