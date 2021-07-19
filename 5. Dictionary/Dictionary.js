class Dictionary {
  constructor() {
    this.data = {}; // Initialize the dictionary
    this.size = 0; // Initialize the size
  }

  add(key, value) {
    let keyType = typeof key; // Get the type of the key

    if (keyType !== "string" && keyType !== "number") {
      // If the key is not a string or a number, throw an error
      throw "Only string & number based keys are supported";
    }
    if (this.data.hasOwnProperty(key)) {
      // If the key already exists, throw an error
      throw "Duplicate keys are not supported";
    }

    this.data[key] = value; // Add the key and value to the dictionary
    this.size++; // Increment the size
  }

  lookup(key) {
    if (this.data.hasOwnProperty(key)) {
      // If the key exists, return the value else return undefined
      return this.data[key];
    } else {
      return undefined;
    }
  }

  remove(key) {
    if (this.data.hasOwnProperty(key)) {
      // If the key exists, delete the key and value from the dictionary & decrement the size
      delete this.data[key];
      this.size--;
    }
  }
}

const dictionary = new Dictionary();
dictionary.add("Rishabh", 123);
dictionary.add("Abhishek", 456);
dictionary.add("Fuggu", 789);
dictionary.lookup("Fuggu"); // Returns 789
dictionary.remove("Fuggu");
dictionary.lookup("Fuggu"); // Returns undefined
