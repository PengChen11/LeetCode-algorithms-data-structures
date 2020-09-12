'use strict';

const hasCycle = require('./linked_list_cycle');

class Node{
  constructor(val, next=null){
    this.val = val;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value, checker=false){
    let newNode;
    if (checker===true) newNode=value;
    else newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else this.head = this.tail = newNode;
  }
}

describe('LeetCode challenge 141, find a cycle in linked list', ()=>{

  it('testing with cycle', ()=>{
    let newList = new LinkedList();
    let cycleStartNode = new Node(2);
    let cycleEndNode = new Node(-4, cycleStartNode);

    newList.append(3);
    newList.append(cycleStartNode, true);
    newList.append(0);
    newList.append(cycleEndNode, true);
    expect(hasCycle(newList.head)).toBeTruthy();
  });

  it('testing without cycle', ()=>{
    let newList = new LinkedList();
    newList.append(3);
    newList.append(2);
    newList.append(0);
    newList.append(-4);
    expect(hasCycle(newList.head)).toBeFalsy();
  });

});
