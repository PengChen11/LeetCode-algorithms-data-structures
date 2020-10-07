'use strict';
class Node{
  constructor(val, next=null){
    this.val = val;
    this.next = next;
  }
}

class LinkedList {

  constructor(head=null){
    this.head = head;
    this.tail = null;
  }

  append(node){
    if (!this.head){
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  showAsArray(){
    let output = [];
    let current = this.head;
    while (current){
      output.push(current.val);
      current=current.next;
    }
    return output;
  }

}

module.exports={Node, LinkedList};
