class HashTable {
  constructor() {
    this.bucketSize = 23;
    this.bucket = [];
    this.bucketLenght = this.bucketSize;
  }

  computeHash(key) {
    let total = 0;
    for (let i = 0; i < key.length; ++i) {
      total = key.charCodeAt(i);
    }
    return total % this.bucketSize;
  }

  put(key, value) {
    const hash = this.computeHash(key);

    if (this.bucketSize[hash] !== undefined) {
      throw "We are not handling collisions yet";
    }

    this.bucket[hash] = value;
  }

  putSC(key, value) {
    let keyType = typeof key;
    if (keyType !== "string" && keyType !== "number") {
      throw "Only string or number keys are supported";
    }

    let hash = this.computeHash(key);

    if (this.bucket[hash] === undefined) {
      this.bucket[hash] = {};
    }

    let chain = this.bucket[hash];

    if (chain.hasOwnProperty(key)) {
      throw "Duplicate key is not allowed";
    }

    chain[key] = value;
  }

  getSC(key) {
    const keyType = typeof key;
    if (keyType !== "string" && keyType !== "number") {
      return undefined;
    }

    const hash = this.computeHash(key);

    if (this.bucket[hash] === undefined) {
      return undefined;
    }

    const chain = this.bucket[hash];

    if (chain.hasOwnProperty(key)) {
      return chain[key];
    }

    return undefined;
  }

  putOA(key, value) {
    const keyType = typeof key;
    if (keyType !== "string" && keyType !== "number") {
      throw "Only string & number keys are supported";
    }

    const hash = this.computeHash(key);

    if (this.bucket[hash] === undefined) {
      this.bucket[hash] = {};
      this.bucket[hash][key] = value;
      return;
    } else if (this.bucket[hash].hasOwnProperty(key)) {
      throw "Duplicate Key is not allowed";
    }

    let bucketId = hash + 1;

    do {
      if (bucketId >= this.bucketSize) {
        bucketId = 0;
      }

      if (this.bucket[bucketId] === undefined) {
        this.bucket[bucketId] = {};
        this.bucket[bucketId][key] = value;
        return;
      }
      bucketId++;
    } while (bucketId != hash);

    throw "Hash Table is full. Rehashing needed";
  }

  getOA(key) {
    const keyType = typeof key;
    if (keyType !== "string" && keyType !== "number") {
      return undefined;
    }

    const hash = this.computeHash(key);

    if (this.bucket[hash] === undefined) {
      return undefined;
    } else if (this.bucket[hash].hasOwnProperty(key)) {
      return this.bucket[hash][key];
    }

    let bucketId = hash + 1;

    do {
      if (bucketId >= this.bucketize) {
        bucketId = 0;
      }

      if (this.bucket[bucketId] === undefined) {
        return undefined;
      } else if (this._bucekts[bucketId].hasOwnProperty(key)) {
        return this.bucket[hash][key];
      }

      bucketId++;
    } while (bucketId != hash);

    return undefined;
  }
}

const hastTable = new HashTable();

// Separate Chaining
hastTable.putSC("Anna", 678);
hastTable.putSC("Jordan", 123);
hastTable.getSC("Anna"); // Returns 678
hastTable.getSC("Jordan"); // Returns 123

// Open Addressing
hastTable.putOA("Anna", 678);
hastTable.putOA("Jordan", 123);
hastTable.getOA("Anna"); // Returns 678
hastTable.getOA("Jordan"); // Returns 123
