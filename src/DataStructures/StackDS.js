export class StackDS {

  constructor() {
    this.stack = [];
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack.pop();
    }
  }

  push(item) {
    this.stack.push(item);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }

  }

}
