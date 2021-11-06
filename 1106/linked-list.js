// new 類別時 --> 會呼叫 constructor 這個函式

class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        count++;
      }
      return count;
    }
  
    traverse() {
      console.log("....................");
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
      console.log("....................");
    }
  
    // Adds new element to end of list
    append(newData) {
      let newNode = new ListNode(newData);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      // 先找到位置
      // 為什麼這邊要檢查 current 不是 null? 什麼情況下 current 會是 null?
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Removes element from list
    remove(target) {
      let current = this.head;
      let prev = null;
      while (current !== null && current.data != target) {
        prev = current;
        current = current.next;
      }
      if (current !== null) {
        // 為什麼這邊要檢查 prev 是不是 null 而做不同的事？什麼情況下 prev 會是 null?
        if (prev === null) {
          head = head.next;
        } else {
          prev.next = current.next;
        }
  
        current.next = null;
      }
    }
  }
  
  module.exports = LinkedList;