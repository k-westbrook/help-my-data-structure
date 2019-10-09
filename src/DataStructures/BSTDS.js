import { NodeBST } from "./NodeBST";


export class BST {

  constructor() {
    this.root = null;
  }
  addNode(value) {
    if (!this.root) {
      this.root = new NodeBST(value);
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < this.root.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new NodeBST(value);
            break;
          }

        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = new NodeBST(value);
            break;
          }

        }
      }

    }
  }

  BFS() {

    if (this.root) {
      let queue = [this.root];
      let dataSet = [];

      while (queue.length > 0) {
        let current = queue.shift();
        console.log(current.value)
        dataSet.push(current)

        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
      return dataSet;
    }

  }
}
