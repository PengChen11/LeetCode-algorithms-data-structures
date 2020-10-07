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
var addTwoNumbers_no_numberOver20Digits = function(l1, l2) {
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

// Here's my origional solution. It's a bit messy.
function addTwoNumbers (l1,l2){
  // this one works, but require a stack to help us.
  // creating two new stacks. FILO is the key
  let stack1 = new Stack();
  let stack2 = new Stack();

  // A helper function that loop through the linked list and push every value to the stack
  function buildStack(head, stack){
    let current = head;
    while (current){
      stack.push(current.val);
      current = current.next;
    }
  }

  buildStack(l1, stack1);
  buildStack(l2, stack2);

  // Science we are building the number from right to left, it's important to know the previous node we've built, then link to it. nextNode is designed for it.
  let nextNode = null;
  // carry is when sum is greater than 9.
  let carry = false;
  // in my logic, I will stop the while loop when any of the stack is empty
  while (!stack1.isEmpty() && !stack2.isEmpty()){

    let carryInner = 0;
    if (carry){
      carryInner = 1;
      carry = false;
    }
    // One thing to notice, once we pop the stack, stack is shortened. Thus we can keep the while loop running in the correct way.
    let digit1 = stack1.pop(), digit2 = stack2.pop();
    //here's the sum
    let sum = digit1 + digit2 + carryInner;
    if (sum >= 10) carry = true;
    // the digit we will put in to node
    let nodeDigit = sum < 10 ? sum : sum - 10;

    let currentNode = new ListNode(nodeDigit);
    //the new node we've built is linking to the proper next node
    currentNode.next = nextNode;
    //update nextNode to prepare it for the next one.
    nextNode = currentNode;
  }
  //after while loop, if either stack still have left over, do that function.
  if (!stack1.isEmpty()) listBuilder(stack1);
  if (!stack2.isEmpty()) listBuilder(stack2);
  //afterall, if carry is not reset, we got one more digit to deal with.
  if (carry) return new ListNode(1, nextNode);
  //in the end, nextNode holds the very last node, which is the new head.
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

// If you don't want to use Stack, you can use array.
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
  isEmpty(){
    return this.top === null;
  }
}


//Here's another simpler solution I learned from Cyc2018

function addTwoNumbers_simpler(l1,l2){
  // build two stacks for each list
  let l1Stack = buildStack(l1);
  let l2Stack = buildStack(l2);
  // init a dummy head for the output linked list
  let dummyHead = new ListNode('dummy');
  // init carry as 0
  let carry =0;
  // Here's the main logic, keeps loop going until both stacks are empty, and carry is 0.
  while (!l1Stack.isEmpty() || !l2Stack.isEmpty() || carry !== 0){
    let x = l1Stack.isEmpty() ? 0 : l1Stack.pop();
    let y = l2Stack.isEmpty() ? 0 : l2Stack.pop();
    let sum = x + y + carry;
    // build a node, no matter it is greater than 10 or not, we take the remaining part
    let node = new ListNode(sum%10);
    // link nodes correctly.
    node.next = dummyHead.next;
    dummyHead.next = node;
    // update carry. This is a great way to track the carry.
    carry = Math.floor(sum / 10);
  }

  return dummyHead.next;

  function buildStack(node){
    let stack = new Stack();
    while(node){
      stack.push(node.val);
      node = node.next;
    }
    return stack;
  }
}

module.exports = {addTwoNumbers, addTwoNumbers_simpler, addTwoNumbers_no_numberOver20Digits};
