import { NodeSLL as Node } from './NodeSLL'


export class SinglyLinkedListDS {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  add(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode

    }

  }
  addFirst(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  remove() {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      let previous;

      while (current.next) {
        previous = current;
        current = current.next;
      }

      this.tail = previous;
      previous.next = null;
    }
  }

  removeFirst() {

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
    }

  }

  size() {
    let count = 0;
    if (this.head) {
      count++;
      let current = this.head;

      while (current.next) {
        count++;
        current = current.next;
      }
    }
    return count;
  }

  getAt(index) {
    if (index < 0 || index > this.size() - 1) {
      return null;
    } else {
      let count = 0;
      let current = this.head;

      while (index !== count) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  getAllValues() {
    let arrayValues = [];
    for (let i = 0; i < this.size(); i++) {
      arrayValues.push(this.getAt(i));
    }


    return arrayValues;
  }
}
