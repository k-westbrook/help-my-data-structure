import { NodeBST } from "./NodeBST";
import { identifier } from "@babel/types";


export class BST {

  constructor() {
    this.root = null;
    this.maxDepth = null;
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
        if (value < currentNode.value) {
          if (currentNode.left && currentNode.left.value !== "empty") {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            newNode.level = levelCount;
            break;
          }

        } else {
          if (currentNode.right && currentNode.right.value !== "empty") {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            newNode.level = levelCount;
            break;
          }

        }
      }

    }
    this.maxDepth = this.findMaxDepth();
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

  findMaxDepth() {
    let levelCount = -1;
    if (this.root) {

      let queue = [this.root, "L"];

      while (true) {
        let current = queue.shift();

        if (current === "L") {
          levelCount++;
          if (queue.length === 0) {
            break;
          }
          queue.push("L");
        } else {
          if (current.left && current.left.value !== "empty") {
            queue.push(current.left);
          }
          if (current.right && current.right.value !== "empty") {
            queue.push(current.right);
          }
        }
      }
    }
    return levelCount;
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
        else if (current.level !== this.maxDepth) {
          // else if (current.value !== "empty") {
          queue.push({ value: "empty", level: current.level + 1 })

        }
        if (current.right) {
          queue.push(current.right);
        }
        else if (current.level !== this.maxDepth) {
          // else if (current.value !== "empty") {
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
