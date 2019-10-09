import { NodeBST } from "./NodeBST";
import { identifier } from "@babel/types";


export class BST {

  constructor() {
    this.root = null;
  }
  addNode(value) {
    let levelCount = 0;
    if (!this.root) {
      this.root = new NodeBST(value);
      this.root.level = levelCount;
    } else {
      let currentNode = this.root;
      let newNode = new NodeBST(value);
      while (true) {
        levelCount++;
        if (value < this.root.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            newNode.level = levelCount;
            break;
          }

        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            newNode.level = levelCount;

            break;
          }

        }
      }

    }
  }

  getLevel(node) {

    if (this.root) {
      let count = 0;
      let queue = [this.root, "L"];

      while (true) {
        let current = queue.shift();

        if (current === "L") {
          count++;
          queue.push("L");
        }
        if (current === node) {
          break;
        } else {

          if (current.left) {
            queue.push(current.left)
          }
          if (current.right) {
            queue.push(current.right)
          }
        }
      }
      return count;

    }

  }


  BFS() {

    if (this.root) {
      let queue = [this.root];
      let dataSet = [];
      let levelRowCount = 0;
      let levelRow = [];

      while (queue.length > 0) {
        let current = queue.shift();
        if (current.level === levelRowCount) {
          levelRow.push(current);
        } else {
          dataSet.push(levelRow);
          levelRowCount++;
          levelRow = [current];
        }
        if (current.left) {
          queue.push(current.left);
        }
        else if (current.value !== "empty") {
          queue.push({ value: "empty", level: current.level + 1 })

        }
        if (current.right) {
          queue.push(current.right);
        }
        else if (current.value !== "empty") {
          queue.push({ value: "empty", level: current.level + 1 })
        }
      }
      if (levelRow.length > 0) {
        dataSet.push(levelRow);
      }
      return dataSet;
    }

  }
}
