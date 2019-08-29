export class QueueDS {

  constructor() {
    this.queue = [];
  }

  remove() {
    if (this.queue.length === 0) {
      return null;
    } else {
      return this.queue.shift();
    }
  }

  add(item) {
    this.queue.push(item);
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    } else {
      return false;
    }

  }

}
