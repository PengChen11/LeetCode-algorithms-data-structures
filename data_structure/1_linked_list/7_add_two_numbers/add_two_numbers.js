'use strict';

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers_not_working = function(l1, l2) {
  // this solution doesn't work when linked list gets longer than 20. But it works for shorter linked lists.

  function getNumber(head){
    let current = head;
    let output = '';
    while (current){
      output+=current.val.toString();
      current = current.next;
    }
    return Number(output);
  }

  let result = getNumber(l1) + getNumber(l2);
  let resultStr = result.toString();
  let newHead = new ListNode(Number(resultStr[0]));
  let current = newHead;
  for (let i=1; i<resultStr.length; i++){
    current.next = new ListNode(Number(resultStr[i]));
    current = current.next;
  }
  return newHead;
};


function addTwoNumbers (l1,l2){
  // this one works, but require a stack to help us.
  let stack1 = new Stack();
  let stack2 = new Stack();

  function buildStack(head, stack){
    let current = head;
    while (current){
      stack.push(current.val);
      current = current.next;
    }
  }

  buildStack(l1, stack1);
  buildStack(l2, stack2);

  let nextNode = null;
  let carry = false;

  while (!stack1.isEmpty() && !stack2.isEmpty()){
    let carryInner = 0;
    if (carry){
      carryInner = 1;
      carry = false;
    }
    let digit1 = stack1.pop(), digit2 = stack2.pop();
    let sum = digit1 + digit2 + carryInner;
    if (sum >= 10) carry = true;
    let nodeDigit = sum < 10 ? sum : sum - 10;

    let currentNode = new ListNode(nodeDigit);
    currentNode.next = nextNode;
    nextNode = currentNode;
  }

  if (!stack1.isEmpty()) listBuilder(stack1);
  if (!stack2.isEmpty()) listBuilder(stack2);
  if (carry) return new ListNode(1, nextNode);

  return nextNode;

  function listBuilder(stack){
    while (!stack.isEmpty()){
      let stackDigit = stack.pop();
      if (carry) {
        stackDigit++;
        carry = false;
      }
      if (stackDigit >= 10) {
        stackDigit = stackDigit-10;
        carry = true;
      }
      let stackNode = new ListNode(stackDigit);
      stackNode.next = nextNode;
      nextNode = stackNode;
    }
  }
}


class Stack {
  constructor(){
    this.top = null;
  }

  push(val){
    let newNode = new ListNode(val, this.top);
    this.top = newNode;
  }

  pop(){
    if (this.top === null) throw new Error('Can NOT pop from empty stack.');
    let output = this.top;
    this.top = this.top.next;
    return output.val;
  }

  peek(){
    if (this.top === null) throw new Error('Can NOT peek from empty stack.');
    return this.top.val;
  }

  isEmpty(){
    return this.top === null;
  }
}

module.exports = addTwoNumbers;
