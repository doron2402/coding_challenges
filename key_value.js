
## 
# 
# Designing a key-value store involves defining a data structure and operations that allow efficient storage and retrieval of data based on keys. 
# Here's a simplified example of how you might design a key-value store:
#
#
##
/**

Key-Value Store Design:
  1. Data Structure:
     Use a hash table to store key-value pairs. The keys will be hashed to determine the index in the table.
     Each slot in the hash table can store a linked list or another data structure to handle collisions.
  2. Key and Value:
     Keys should be unique identifiers associated with values.
     Values can be any data structure or object, depending on the requirements.
  3. Hash Function:
     Implement a good hash function to distribute keys evenly across the hash table, reducing the chance of collisions.
  4. Collision Handling:
     Use techniques like chaining (linked lists at each slot) or open addressing to handle collisions.
  5. Operations:
     5.1. Insert:
           Hash the key to find the index.
             If the index is empty, insert the key-value pair.
            If the index is occupied, handle the collision based on the chosen strategy (chaining, linear probing, etc.).
     5.2. Get:
          Hash the key to find the index.
            If the index is empty, the key is not in the store.
            If the index is occupied, search the linked list or use the appropriate method to find the key and retrieve its value.
    5.3. Delete:
          Hash the key to find the index.
            If the index is empty, the key is not in the store.
            If the index is occupied, delete the key-value pair from the linked list or use the appropriate method.
  6. Load Factor and Rehashing:
    Monitor the load factor (ratio of occupied slots to the total slots) to ensure efficient space usage.
    When the load factor exceeds a certain threshold, trigger a rehashing process to resize and reorganize the hash table.
  7. Concurrency Control:
    Implement concurrency control mechanisms if the key-value store is expected to be used in a concurrent or multi-threaded environment.
  8. Persistence:
    If persistence is required, implement mechanisms to store the data on disk and load it back into memory on startup.
**/

// Below is a basic example in Javascript
class KeyValueStore {
  constructor() {
    this.tableSize = 100;
    this.table = new Array(this.tableSize).fill(null).map(() => []);
  }

  hash(key) {
    // Simple hash function for illustration purposes
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + key.charCodeAt(i);
    }
    return hash % this.tableSize;
  }

  insert(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    // Check for duplicate keys and update the value
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Insert the key-value pair
    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null; // Key not found
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

// Example Usage:
const kvStore = new KeyValueStore();
kvStore.insert("name", "John");
kvStore.insert("age", 25);

console.log(kvStore.get("name")); // Output: John
kvStore.delete("age");
console.log(kvStore.get("age")); // Output: null
