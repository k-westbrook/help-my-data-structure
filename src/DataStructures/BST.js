import { NodeBST } from "./NodeBST";


export default class BST {

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
          if (this.root.left) {
            currentNode = currentNode.left;
          } else {
            this.root.left = new NodeBST(value);
            break;
          }

        } else {
          if (this.root.right) {
            currentNode = currentNode.right;
          } else {
            this.root.right = new NodeBST(value);
            break;
          }

        }
      }
      return this;
    }


  }
}
