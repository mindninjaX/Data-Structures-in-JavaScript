class Set {
  constructor() {
    this.set = {}; // Initialize the set
    this.size = 0; // Set the size to 0
  }

  add(data) {
    this.set[data] = true; // Add the data to the set
    this.size++; // Increment the size
  }

  remove(data) {
    delete this.set[data]; // Remove the data from the set
    this.size--; // Decrement the size
  }

  member(data) {
    if (this.set.hasOwnProperty(data)) { // Check if the data is in the set
      return true;
    } else {
      return false;
    }
  }

  union(secondset) {
    var unionset = new Set(); //Initialize the union set

    for (var key in this.set) { // Get all the keys from the first set
      if (this.set.hasOwnProperty(key)) { // Check if the key exists in the set
        unionset.add(key); //Adds the key to the union set
      }
    }

    for (var key in secondset.set) { // Get all the keys from the second set
      if (!unionset.set.hasOwnProperty(key)) { //Check if the key exists in the union set
        unionset.add(key); //Adds the key to the union set
      }
    }

    return unionset;
  }

  intersect(secondset) {
    var inter = new Set(); //Initialize the intersect set
    for (var key in this.set) { //Get the keys from the first set
      if (secondset.hasOwnProperty(key)) { //Check if the key exists in the second set
        inter.add(key); //Add the key to the union set
      }
    }
    return inter;
  }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.member(1); // true
set.remove(1);
set.member(1); // false
